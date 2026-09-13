const fs=require('node:fs');
const assert=require('node:assert/strict');
const {chromium}=require('C:/Users/chanc/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});const results=[];
 for(const width of [320,375,390,430,1440]){
  const page=await browser.newPage({viewport:{width,height:844}});
  const check=async(name,fn)=>{try{await fn();results.push({width,name,pass:true})}catch(e){results.push({width,name,pass:false,error:e.message})}};
  const routes=['/','/members',...['nagyung','hayoung','jiwon','chaeyoung','jiheon'].map(x=>'/members/'+x),'/performances','/news','/news/park-jiwon-musical-debut-hells-kitchen-opening'];
  for(const route of routes) await check('navigation and semantics '+route,async()=>{
   await page.goto('http://localhost:5174'+route);
   if(width<640){
    await page.getByRole('button',{name:'Open navigation menu'}).click();
    const current=page.getByRole('navigation',{name:'Primary navigation'}).locator('[aria-current="page"]');
    assert.equal(await current.count(),1);assert.equal(await current.getAttribute('href'),route==='/'?'/':'/'+route.split('/')[1]);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
    await page.getByRole('button',{name:'Close navigation menu'}).click();
    await page.evaluate(()=>window.scrollTo({top:200,behavior:'instant'}));assert.equal(await page.evaluate(()=>scrollY),200);
   }
   assert.deepEqual(await page.locator('img:not([alt])').count(),0);
   assert.deepEqual(await page.locator('a[href^="https:"]').evaluateAll(els=>els.filter(a=>a.target!=='_blank'||!a.rel.includes('noopener')||!a.rel.includes('noreferrer')).map(a=>a.href)),[]);
  });
  for(const kind of ['members','news']) await check(kind+' list/detail and previous/next scroll',async()=>{
   await page.goto('http://localhost:5174/'+kind);
   const link=page.locator('main').getByRole('link',{name:kind==='members'?'View Profile':'Read More'}).last();
   const href=await link.getAttribute('href');
   await page.evaluate(()=>window.scrollTo({top:1800,behavior:'instant'}));await link.evaluate(a=>a.click());
   await page.waitForURL('**'+href);await page.locator(kind==='members'?'dl:visible':'article').first().waitFor();
   await page.evaluate(()=>new Promise(r=>requestAnimationFrame(r)));assert.equal(await page.evaluate(()=>scrollY),0);
   for(const index of [0,-1]){
    const links=page.getByRole('navigation',{name:kind==='members'?'Member profiles':'News article navigation'}).locator('a');
    const destination=index===0?links.first():links.last();
    const target=await destination.getAttribute('href');const old=await page.locator('h1').textContent();
    await page.evaluate(()=>window.scrollTo({top:1800,behavior:'instant'}));await destination.evaluate(a=>a.click());await page.waitForURL('**'+target);
    await page.waitForFunction(old=>document.querySelector('h1').textContent!==old,old);assert.equal(await page.evaluate(()=>scrollY),0);
   }
  });
  for(const kind of ['performances','news']) await check(kind+' filters and Load More preserve scroll',async()=>{
   await page.goto('http://localhost:5174/'+kind);await page.evaluate(()=>window.scrollTo({top:200,behavior:'instant'}));
   await page.getByRole('button',{name:'Other',exact:true}).evaluate(b=>b.click());await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));assert.equal(await page.evaluate(()=>scrollY),200);
   await page.getByRole('button',{name:'All',exact:true}).evaluate(b=>b.click());
   const more=page.getByRole('button',{name:kind==='news'?'Load More News':'Load More Performances'});
   await more.waitFor();await page.evaluate(()=>window.scrollTo({top:500,behavior:'instant'}));await more.evaluate(b=>b.click());await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));assert.equal(await page.evaluate(()=>scrollY),500);
  });
  await page.close();
 }
 await browser.close();fs.writeFileSync('artifacts/mobile-qa/audit-routing.json',JSON.stringify(results,null,2));console.log(results.filter(x=>!x.pass));console.log(`${results.filter(x=>x.pass).length}/${results.length} passed`);
})().catch(e=>{console.error(e);process.exitCode=1});
