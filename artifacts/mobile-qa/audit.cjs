const fs = require('node:fs');
const assert = require('node:assert/strict');
const { chromium } = require('C:/Users/chanc/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const order = ['Stage Name','Full Name','Korean Name','Date of Birth','Position','Height','Weight','Blood Type','MBTI Type','Representative Emoji','Instagram'];
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const results=[];
 const check=async(name,fn)=>{try{await fn();results.push({name,pass:true});}catch(e){results.push({name,pass:false,error:e.message});}};
 for(const width of [320,375,390,430,1440]){
  const page=await browser.newPage({viewport:{width,height:844}});
  await page.goto('http://localhost:5174/members/hayoung');
  if(width<640) await check(`${width} profile order`,async()=>assert.deepEqual(await page.locator('dt:visible').allTextContents(),order));
  await check(`${width} route reset immediate`,async()=>{
   await page.evaluate(()=>window.scrollTo({top:2000,behavior:'instant'}));
   await page.getByRole('navigation',{name:'Member profiles'}).locator('a').last().evaluate(a=>a.click());
   await page.waitForURL('**/members/jiwon');
   await page.locator('h1').filter({hasText:'Jiwon'}).waitFor();
   assert.equal(await page.evaluate(()=>scrollY),0);
  });
  const news=await page.evaluate(async()=>(await import('/src/data/news.ts')).newsItems);
  const sorted=[...news].sort((a,b)=>b.date.localeCompare(a.date));
  for(const article of news){
   await check(`${width} article ${article.slug}`,async()=>{
    await page.goto('http://localhost:5174/news/'+article.slug);
    assert.equal(await page.locator('h1').textContent(),article.title);
    assert.equal(await page.locator('section[aria-labelledby="related-news-heading"] a[href="/news/'+article.slug+'"]').count(),0);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
    const index=sorted.findIndex(x=>x.slug===article.slug);
    const nav=page.getByRole('navigation',{name:'News article navigation'});
    assert.deepEqual(await nav.locator('a').evaluateAll(links=>links.map(a=>a.getAttribute('href'))),[sorted[index-1],sorted[index+1]].filter(Boolean).map(x=>'/news/'+x.slug));
    const external=await page.locator('a[href^="https:"]').evaluateAll(links=>links.filter(a=>a.target!=='_blank'||!a.rel.includes('noopener')||!a.rel.includes('noreferrer')).map(a=>a.href));
    assert.deepEqual(external,[]);
   });
  }
  for(const kind of ['news','members']) await check(`${width} invalid ${kind}`,async()=>{await page.goto('http://localhost:5174/'+kind+'/invalid-audit-slug');await page.waitForURL('**/'+kind);});
  if(width<640){
   await page.emulateMedia({reducedMotion:'reduce'});
   await check(`${width} reduced motion close icon`,async()=>{
    const button=page.getByRole('button',{name:'Open navigation menu'});await button.focus();await button.press('Enter');
    assert.notEqual(await page.getByRole('button',{name:'Close navigation menu'}).locator('span').first().evaluate(el=>getComputedStyle(el).transform),'none');
   });
  }
  await page.close();
 }
 await browser.close();fs.writeFileSync('artifacts/mobile-qa/'+(process.argv[2]||'audit-results')+'.json',JSON.stringify(results,null,2));
 console.log(JSON.stringify(results.filter(x=>!x.pass),null,2));console.log(`${results.filter(x=>x.pass).length}/${results.length} passed`);
})().catch(e=>{console.error(e);process.exitCode=1});
