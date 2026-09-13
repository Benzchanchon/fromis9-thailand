const fs = require('node:fs');
const path = require('node:path');
const sharp = require(process.env.SHARP_PATH || 'C:/Users/chanc/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
(async()=>{
 const before=JSON.parse(fs.readFileSync(path.join(__dirname,'before/measurements.json')));
 const after=JSON.parse(fs.readFileSync(path.join(__dirname,'after/measurements.json')));
 const report=[];
 for(const b of before){
  const a=after.find(a=>a.route===b.route&&a.width===b.width);
  const name=(b.route==='/'?'home':b.route.slice(1).replaceAll('/','-'))+'-'+b.width+'.png';
  const x=await sharp(path.join(__dirname,'before',name)).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  const y=await sharp(path.join(__dirname,'after',name)).ensureAlpha().raw().toBuffer({resolveWithObject:true});
  const footer=b.geometry.find(e=>e.tag==='FOOTER').box;
  const media=b.geometry.filter(e=>e.tag==='IMG').map(e=>e.box);
  media.push([0,footer[1]-(b.width===1440?25:20),b.width,b.width===1440?25:20]);
  let changedPixels=0,nonMediaChangedPixels=0,maxChannelDifference=0;
  if(x.data.length===y.data.length) for(let p=0;p<x.data.length;p+=4){
   if(x.data.subarray(p,p+4).equals(y.data.subarray(p,p+4)))continue;
   changedPixels++;
   const px=(p/4)%b.width,py=Math.floor(p/4/b.width);
   if(!media.some(([left,top,w,h])=>px>=Math.floor(left)&&px<Math.ceil(left+w)&&py>=Math.floor(top)&&py<Math.ceil(top+h))) nonMediaChangedPixels++;
   for(let c=0;c<3;c++)maxChannelDifference=Math.max(maxChannelDifference,Math.abs(x.data[p+c]-y.data[p+c]));
  }
  report.push({route:b.route,width:b.width,geometryEqual:JSON.stringify(a.geometry)===JSON.stringify(b.geometry),pixelsEqual:x.data.equals(y.data),changedPixels,nonMediaChangedPixels,maxChannelDifference,beforeHeight:b.height,afterHeight:a.height});
 }
 fs.writeFileSync(path.join(__dirname,'comparison.json'),JSON.stringify(report,null,2));
 console.log(JSON.stringify(report,null,2));
 const filenames=['members-hayoung-390.png','performances-390.png','news-390.png','news-park-jiwon-musical-debut-hells-kitchen-opening-390.png'];
 const panels=await Promise.all(filenames.map(async f=>({input:await fs.promises.readFile(path.join(__dirname,'after',f)),height:(await sharp(path.join(__dirname,'after',f)).metadata()).height})));
 await sharp({create:{width:390*4+24*3,height:Math.max(...panels.map(p=>p.height)),channels:3,background:'#e9eaf0'}}).composite(panels.map((p,i)=>({input:p.input,left:i*414,top:0}))).png().toFile(path.join(__dirname,'mobile-overview.png'));
})().catch(e=>{console.error(e);process.exit(1)});
