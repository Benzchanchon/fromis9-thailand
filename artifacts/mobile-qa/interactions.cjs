const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const {chromium} = require(process.env.PLAYWRIGHT_PATH || 'C:/Users/chanc/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const results=[];
async function record(name, test){try{await test();results.push({name,pass:true});console.log('PASS '+name);}catch(error){results.push({name,pass:false,error:error.message});console.log('FAIL '+name+' '+error.message);}}
async function verifyExternal(context,link){
  const href=await link.getAttribute('href');
  assert.match(href,/^https:\/\//);
  assert.equal(await link.getAttribute('target'),'_blank');
  assert.match(await link.getAttribute('rel'),/noopener/);
  assert.match(await link.getAttribute('rel'),/noreferrer/);
  const popupPromise=context.waitForEvent('page');
  await link.click();
  const popup=await popupPromise;
  await popup.waitForLoadState('domcontentloaded').catch(()=>{});
  assert.equal(await popup.evaluate(()=>window.opener===null),true);
  assert.equal(popup.url(),href);
  await popup.close();
}
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 for(const width of [320,375,390,430]){
  const context=await browser.newContext({viewport:{width,height:844},hasTouch:true,reducedMotion:'reduce'});
  // Test outbound link dispatch without contacting third-party sites or playing videos.
  await context.route('**/*',route=>{
    if(route.request().isNavigationRequest()&&!route.request().url().startsWith('http://localhost:5174'))
      return route.fulfill({status:200,contentType:'text/html',body:'<!doctype html><title>External link QA destination</title>'});
    return route.continue();
  });
  const page=await context.newPage();
  await page.goto('http://localhost:5174');
  const data=await page.evaluate(async()=>{
    const p=await import('/src/data/performances.ts');
    const n=await import('/src/data/news.ts');
    const m=await import('/src/data/members.ts');
    return {performances:p.performanceItems,performanceFilters:p.performanceFilters,news:n.newsItems,newsFilters:n.newsFilters,members:m.members.map(x=>({slug:x.slug,facts:m.getMemberProfileFacts(x),featured:p.getFeaturedPerformancesByMember(x.slug)}))};
  });
  await record(`${width}: Home, Members, shell navigation`,async()=>{
    for(const target of ['Members','Performances','News','Home']){
      await page.getByRole('button',{name:'Open navigation menu'}).click();
      assert.equal(await page.getByRole('button',{name:'Close navigation menu'}).getAttribute('aria-expanded'),'true');
      await page.getByRole('navigation',{name:'Primary navigation'}).getByRole('link',{name:target,exact:true}).click();
      await page.getByRole('button',{name:'Open navigation menu'}).waitFor();
      assert.equal(new URL(page.url()).pathname,target==='Home'?'/':'/'+target.toLowerCase());
    }
    await page.locator('section#members article').filter({hasText:'Hayoung'}).getByRole('link',{name:'View Profile'}).click();
    await page.waitForURL('**/members/hayoung');
    await page.getByRole('contentinfo').getByRole('link',{name:'Members',exact:true}).click();
    await page.waitForURL('**/members');
    await page.locator('main article').filter({hasText:'Jiheon'}).getByRole('link',{name:'View Profile'}).last().click();
    await page.waitForURL('**/members/jiheon');
  });
  for(const member of data.members) await record(`${width}: ${member.slug} facts, performances, navigation`,async()=>{
    await page.goto('http://localhost:5174/members/'+member.slug);
    const order=['Stage Name','Full Name','Korean Name','Date of Birth','Position','Height','Weight','Blood Type','MBTI Type','Representative Emoji','Instagram'];
    assert.equal(await page.locator('dt:visible').count(),11);
    assert.deepEqual(await page.locator('dt:visible').allTextContents(),order);
    assert.deepEqual(await page.locator('dd:visible').allTextContents(),order.map(label=>member.facts.find(x=>x.label===label).value));
    assert.deepEqual(await page.locator('main article h3').allTextContents(),member.featured.map(x=>x.title));
    await verifyExternal(context,page.locator('dd a:visible'));
    const nav=page.getByRole('navigation',{name:'Member profiles'});
    const previous=await nav.locator('a').first().getAttribute('href');
    const next=await nav.locator('a').last().getAttribute('href');
    await nav.locator('a').last().click();await page.waitForURL('**'+next);
    await page.goBack();
    await page.getByRole('navigation',{name:'Member profiles'}).locator('a').first().click();await page.waitForURL('**'+previous);
  });
  for(const kind of ['performances','news']) await record(`${width}: ${kind} filters, sorting, complete Load More`,async()=>{
    await page.goto('http://localhost:5174/'+kind);
    const filters=kind==='performances'?data.performanceFilters:data.newsFilters;
    const allItems=data[kind];
    const archive=page.locator(kind==='performances'?'section[aria-label="Performance archive"]':'section[aria-label="Latest news archive"]');
    for(const filter of filters){
      await page.getByRole('button',{name:filter.label,exact:true}).click();
      const expected=allItems.filter(x=>filter.id==='all'||x.category===filter.id).sort((a,b)=>b.date.localeCompare(a.date));
      assert.deepEqual(await archive.locator('h3').allTextContents(),expected.slice(0,6).map(x=>x.title));
      assert.equal(await page.getByRole('button',{name:filter.label,exact:true}).getAttribute('aria-pressed'),'true');
      if(kind==='performances') assert.equal(await page.locator('section[aria-label="Featured performance"]').count(),filter.id==='all'?1:0);
      const more=page.getByRole('button',{name:kind==='performances'?'Load More Performances':'Load More News',exact:true});
      let clicks=0;
      while(await more.count()){
        assert.ok(clicks++<50,'Load More must terminate');
        const count=await archive.locator('article').count();await more.click();
        assert.equal(await archive.locator('article').count(),Math.min(count+6,expected.length));
      }
      assert.deepEqual(await archive.locator('h3').allTextContents(),expected.map(x=>x.title));
    }
    await page.getByRole('button',{name:'All',exact:true}).click();
    assert.equal(await archive.locator('article').count(),Math.min(6,allItems.length));
    if(kind==='performances'){
      await verifyExternal(context,archive.getByRole('link',{name:/ on YouTube$/}).first());
      await verifyExternal(context,archive.getByRole('link',{name:'Watch Performance',exact:true}).first());
      await verifyExternal(context,page.locator('section[aria-label="Featured performance"]').getByRole('link',{name:'Watch Performance'}));
    }else{
      const link=archive.getByRole('link',{name:'Read More'}).first();const href=await link.getAttribute('href');await link.click();await page.waitForURL('**'+href);
    }
  });
  for(const slug of ['fromis9-2026-asia-tour-tomorrow-glow-seoul','park-jiwon-musical-debut-hells-kitchen-opening']) await record(`${width}: ${slug} source, related, previous/next`,async()=>{
    const url='http://localhost:5174/news/'+slug;await page.goto(url);
    const article=data.news.find(x=>x.slug===slug);
    assert.equal(await page.locator('h1').textContent(),article.title);
    const related=page.locator('section[aria-labelledby="related-news-heading"]');
    const candidates=data.news.filter(x=>x.slug!==slug).sort((a,b)=>b.date.localeCompare(a.date));
    const expected=[...candidates.filter(x=>x.category===article.category),...candidates.filter(x=>x.category!==article.category)].slice(0,3);
    assert.deepEqual(await related.locator('h3').allTextContents(),expected.map(x=>x.title));
    await verifyExternal(context,page.getByRole('link',{name:'View Original Source'}));
    const href=await related.getByRole('link',{name:'Read More'}).first().getAttribute('href');
    await related.getByRole('link',{name:'Read More'}).first().click();await page.waitForURL('**'+href);
    await page.goto(url);
    const nav=page.getByRole('navigation',{name:'News article navigation'});
    const hrefs=await nav.locator('a').evaluateAll(links=>links.map(a=>a.getAttribute('href')));
    for(const destination of hrefs){await nav.locator(`a[href="${destination}"]`).click();await page.waitForURL('**'+destination);await page.goto(url);}
    for(const platform of ['X','Instagram','YouTube','TikTok']) await verifyExternal(context,page.getByRole('contentinfo').getByRole('link',{name:platform,exact:true}));
  });
  await record(`${width}: keyboard focus and reduced motion`,async()=>{
    await page.goto('http://localhost:5174/performances');
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(()=>document.activeElement.matches('a')),true);
    assert.notEqual(await page.evaluate(()=>getComputedStyle(document.activeElement).outlineStyle),'none');
    await page.getByRole('button',{name:'Open navigation menu'}).focus();await page.keyboard.press('Enter');
    assert.equal(await page.getByRole('button',{name:'Close navigation menu'}).getAttribute('aria-expanded'),'true');
    assert.equal(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior),'auto');
  });
  await context.close();
 }
 fs.writeFileSync(path.join(__dirname,'interactions.json'),JSON.stringify(results,null,2));
 await browser.close();
 if(results.some(x=>!x.pass))process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1);});
