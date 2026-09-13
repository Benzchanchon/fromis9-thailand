const fs=require('node:fs');
const sharp=require('C:/Users/chanc/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
(async()=>{
 const before=JSON.parse(fs.readFileSync('artifacts/mobile-qa/audit-before/measurements.json'));
 const after=JSON.parse(fs.readFileSync('artifacts/mobile-qa/audit-after/measurements.json'));
 const desktop=[];
 for(const a of after.filter(x=>x.width===1440)){
  const b=before.find(x=>x.width===1440&&x.route===a.route);const file=(a.route==='/'?'home':a.route.slice(1).replaceAll('/','-'))+'-1440.png';
  const left=await sharp('artifacts/mobile-qa/audit-before/'+file).raw().toBuffer();const right=await sharp('artifacts/mobile-qa/audit-after/'+file).raw().toBuffer();
  desktop.push({route:a.route,geometryEqual:JSON.stringify(a.geometry)===JSON.stringify(b.geometry),pixelsEqual:left.equals(right)});
 }
 const names=['home','members','members-hayoung','performances','news','news-park-jiwon-musical-debut-hells-kitchen-opening'];
 const inputs=await Promise.all(names.map(async name=>({input:await sharp('artifacts/mobile-qa/audit-after/'+name+'-390.png').resize({width:260}).toBuffer()})));
 const metadata=await Promise.all(inputs.map(x=>sharp(x.input).metadata()));
 await sharp({create:{width:1560,height:Math.max(...metadata.map(x=>x.height)),channels:3,background:'#dedede'}}).composite(inputs.map((x,i)=>({...x,left:i*260,top:0}))).png().toFile('artifacts/mobile-qa/audit-overview.png');
 const result={desktop,matrix:after.length,overflow:after.filter(x=>x.overflow||x.overflowing.length),brokenImages:after.filter(x=>x.brokenImages.length),runtimeErrors:after.filter(x=>x.errors.length),mobileSmallTargets:after.filter(x=>x.width<640&&x.smallTargets.length)};
 fs.writeFileSync('artifacts/mobile-qa/audit-comparison.json',JSON.stringify(result,null,2));console.log(result);
})().catch(console.error);
