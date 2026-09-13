// Serve the clean starting commit for visual regression QA without touching the worktree.
const {execFileSync} = require('node:child_process');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
(async()=>{
 const {createServer} = await import(pathToFileURL(require.resolve('vite')));
 const {default:react} = await import(pathToFileURL(require.resolve('@vitejs/plugin-react')));
 const root=process.cwd().replaceAll('\\','/');
 const files=execFileSync('git',['ls-tree','-r','--name-only','HEAD','src'],{encoding:'utf8'}).trim().split('\n');
 const source=new Map(files.filter(f=>/\.(css|tsx?)$/.test(f)).map(f=>[root+'/'+f,execFileSync('git',['show','HEAD:'+f],{encoding:'utf8'})]));
 const server=await createServer({root,cacheDir:'node_modules/.vite-mobile-qa-baseline',configFile:false,server:{host:'127.0.0.1',port:5175,strictPort:true},plugins:[{name:'clean-starting-commit',enforce:'pre',load(id){return source.get(id.split('?')[0].replaceAll('\\','/'))??null;}},react()]});
 await server.listen();server.printUrls();
})().catch(e=>{console.error(e);process.exit(1);});
