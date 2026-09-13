const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'C:/Users/chanc/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const routes = ['/', '/members', '/members/nagyung', '/members/hayoung', '/members/jiwon', '/members/chaeyoung', '/members/jiheon', '/performances', '/news', '/news/fromis9-2026-asia-tour-tomorrow-glow-seoul', '/news/park-jiwon-musical-debut-hells-kitchen-opening'];
const label = route => route === '/' ? 'home' : route.slice(1).replaceAll('/', '-');
const mode = process.argv[2] || 'after';
const folder = path.join(__dirname, mode);
fs.mkdirSync(folder, {recursive:true});
async function settle(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    const imgs = [...document.images];
    imgs.forEach(img => img.loading = 'eager');
    await Promise.all(imgs.map(img => img.complete ? null : new Promise(resolve => {
      img.addEventListener('load', resolve, {once:true});
      img.addEventListener('error', resolve, {once:true});
      setTimeout(resolve, 15000);
    })));
    await Promise.all(imgs.map(img => img.decode().catch(() => {})));
    // Bring offscreen lazy media into the compositor before a full-page capture.
    for (let y = 0; y < document.documentElement.scrollHeight; y += 700) {
      window.scrollTo(0, y);
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    }
    window.scrollTo(0, 0);
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
}
async function measure(page) {
  return page.evaluate(() => {
    const visible = el => el.getClientRects().length && getComputedStyle(el).visibility !== 'hidden' && getComputedStyle(el).display !== 'none';
    const box = el => {const r = el.getBoundingClientRect(); return [r.x,r.y,r.width,r.height].map(n=>Math.round(n*100)/100);};
    const hitSize = el => {
      const r=el.getBoundingClientRect(), pseudo=getComputedStyle(el,'::before');
      return pseudo.content!=='none'?[Math.max(r.width,parseFloat(pseudo.width)||0),Math.max(r.height,parseFloat(pseudo.height)||0)]:[r.width,r.height];
    };
    return {
      width: innerWidth, height: document.documentElement.scrollHeight,
      overflow: document.documentElement.scrollWidth > innerWidth,
      overflowing: [...document.querySelectorAll('main *, header *, footer *')].filter(visible).filter(el => {const r=el.getBoundingClientRect();return r.right>innerWidth+1||r.left< -1;}).slice(0,20).map(el=>({tag:el.tagName,cls:el.className,box:box(el)})),
      brokenImages:[...document.images].filter(img=>!img.complete||!img.naturalWidth).map(img=>img.currentSrc),
      smallTargets:[...document.querySelectorAll('a,button')].filter(visible).filter(el=>{const [w,h]=hitSize(el);return h<24||w<24;}).map(el=>({text:el.textContent.trim()||el.getAttribute('aria-label'),box:box(el)})),
      geometry:[...document.querySelectorAll('h1,h2,h3,main section,main article,main img,main nav,footer,body > #root > header')].filter(visible).map(el=>({tag:el.tagName,text:el.matches('h1,h2,h3')?el.textContent:null,box:box(el)})),
    };
  });
}
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const context=await browser.newContext({deviceScaleFactor:1,reducedMotion:'reduce'});
 const report=[];
 const widths=mode==='before'?[1440,390]:[320,375,390,430,1440];
 for(const width of widths){
  const selected=mode==='before'&&width===390?routes.slice(0,2):routes;
  for(let offset=0;offset<selected.length;offset+=3){
   await Promise.all(selected.slice(offset,offset+3).map(async route=>{
    const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.setViewportSize({width,height:900});
    await page.goto((process.env.QA_ORIGIN || 'http://localhost:5174')+route,{waitUntil:'load'});
    await settle(page);
    const result={route,...await measure(page),errors}; report.push(result);
    if(width===1440||width===390) await page.screenshot({path:path.join(folder,`${label(route)}-${width}.png`),fullPage:true,animations:'disabled'});
    console.log(JSON.stringify({mode,route,width,overflow:result.overflow,broken:result.brokenImages.length,smallTargets:result.smallTargets.length}));
    await page.close();
   }));
  }
 }
 fs.writeFileSync(path.join(folder,'measurements.json'),JSON.stringify(report,null,2));
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1);});
