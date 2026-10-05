const P={G:'#3a9d4f',l:'#9be3a8',y:'#f5e663',k:'#222',w:'#fff',r:'#d44',b:'#5a7ad8',n:'#8a5a2b',g:'#999',o:'#e8a33d','.':null};
const SP={
dollar:["........","GGGGGGGG","GlGyyGlG","GGyGGGGG","GGGyyGGG","GGGGGyGG","GlGyyGlG","GGGGGGGG"],
Cursor:["w.......","ww......","www.....","wwww....","wwwww...","wwww....","w.ww....","...ww..."],
Employee:["..nnnn..","..oooo..","..oooo..",".bbbbbb.","bbbbbbbb","bbbbbbbb",".kk..kk.",".kk..kk."],
Office:["gggggggg","gwgwgwgg","gggggggg","gwgwgwgg","gggggggg","gwgwgwgg","gggnnggg","gggnnggg"],
HQ:["...rr...","..bbbb..","bbbbbbbb","bwbwbwbw","bbbbbbbb","bwbwbwbw","bbbyybbb","bbbyybbb"],
Bank:["...yy...","..yyyy..",".yyyyyy.","wwwwwwww","w.w..w.w","w.w..w.w","w.w..w.w","wwwwwwww"],
Factory:[".g...g..",".g...g..",".g...g..","rrrrrrrr","rwrwrwrw","rrrrrrrr","rrrnnrrr","rrrnnrrr"],
Skyscraper:["..bbbb..","..bwbw..","..bbbb..","..bwbw..","..bbbb..","..bwbw..","..bbbb..","..bnnb.."],
Mint:[".yyyyyy.","yyyooyyy","yyoyyoyy","yyyyoyyy","yyyoyyyy","yyyyyyyy","yyyooyyy",".yyyyyy."],
"Central Bank":["...yy...","..gggg..",".gggggg.","wwwwwwww","w.w..w.w","w.w..w.w","wwwwwwww","wwwwwwww"],
"Space Corp":["...rr...","..wwww..","..wbbw..","..wwww..","..wwww..",".rwwwwr.","rr.oo.rr","...oo..."]};
const SH=(h,d)=>{if(h.length==4)h='#'+[...h.slice(1)].map(c=>c+c).join('');const n=parseInt(h.slice(1),16),f=v=>Math.max(0,Math.min(255,v+d));return `rgb(${f(n>>16)},${f(n>>8&255)},${f(n&255)})`};
function spr(n,px){const S=SP[n],H=S.length,W=S[0].length,c=document.createElement('canvas');c.width=W+2;c.height=H+2;const x=c.getContext('2d'),on=(i,j)=>i>=0&&j>=0&&i<W&&j<H&&P[S[j][i]];
x.fillStyle='#0a0814';for(let j=-1;j<=H;j++)for(let i=-1;i<=W;i++)if(!on(i,j)&&(on(i-1,j)||on(i+1,j)||on(i,j-1)||on(i,j+1)))x.fillRect(i+1,j+1,1,1);
for(let j=0;j<H;j++)for(let i=0;i<W;i++){const p=P[S[j][i]];if(p){x.fillStyle=!on(i,j-1)||!on(i-1,j)?SH(p,38):!on(i,j+1)||!on(i+1,j)?SH(p,-40):p;x.fillRect(i+1,j+1,1,1)}}
c.style.width=c.style.height=px;return c}
const B=[["Cursor",15,.1],["Employee",100,1],["Office",1100,8],["HQ",12e3,47],["Bank",130e3,260],["Factory",1.4e6,1400],["Skyscraper",20e6,7800],["Mint",330e6,44e3],["Central Bank",5.1e9,260e3],["Space Corp",75e9,1.6e6]];
const GP=['r','b','y','g','o','G','w','n'];
function gen(k){let q=k*9301+49297;const R=()=>(q=(q*9301+49297)%233280)/233280,m=GP[k%8],a=GP[(k*3+2)%8],rows=[];
for(let j=0;j<8;j++){let h='';for(let i=0;i<4;i++){const on=R()<(j==0||j==7?.25:.55)+(i>1?.25:0)||(i==3&&j>0&&j<7);h+=on?(R()<.28?a:m):'.'}rows.push(h+[...h].reverse().join(''))}
rows[3]=rows[3].slice(0,3)+'ww'+rows[3].slice(5);return rows}
["Moon Mine","Mars Colony","Asteroid Belt","Dyson Sphere","Alien Bank","Time Machine","Parallel Universe","Dimension Mint","Black Hole ATM","Galaxy Corp","Quantum Vault","Cosmic Exchange","Reality Printer","Multiverse Bank","Dollar Deity","Infinity Press","Omega Treasury","Big Bang Mint","Eternal Economy","Dollar Singularity"].forEach((n,k)=>{B.push([n,+(75e9*14.7**(k+1)).toPrecision(2),+(1.6e6*6.1**(k+1)).toPrecision(2)]);SP[n]=gen(k+10)});
let $=0,own=B.map(()=>0);
const S=["","K","M","B","T","Qa","Qi","Sx","Sp","Oc","No","Dc","Ud","Dd","Td","Qad"];
function f0(n){if(n<1e3)return n<10&&n%1?n.toFixed(1):Math.floor(n)+"";let i=0;while(n>=1e3&&i<15){n/=1e3;i++}return n.toFixed(2)+S[i]}
const cost=i=>Math.ceil(B[i][1]*H.dc*Math.pow(1.2,own[i]));
var ST=Object.assign({vol:.5,fx:2,shake:1,rain:1,rings:1,aura:1,combo:1,news:1,pop:1.8,fmt:'short',theme:0,auto:1,psz:1,pp:1,ap:1,bg:0,bv:1,tt:1,hs:1,csd:1},(()=>{try{return JSON.parse(localStorage.getItem('dcs'))||{}}catch(e){return{}}})());var H={p:1,c:1,gf:1,gd:1,ig:1,dc:1,cr:0,ch:1,sm:0,sb:0,ov:1,sv:1,cp:1},HN=[],hu=new Set(),hcs=0;var stk={sh:[0,0,0,0,0,0],cb:[0,0,0,0,0,0],mu:[1,1,1,1,1,1],pf:0};var lvl=B.map(()=>0),ing=0,ripe=Date.now()+3e5,cpd=.05,gfq=1,oc=0,occ=0,sx={cr:0,mc:0,hv:0,sl:0,cn:0,rn:0,op:0,oc:0,dp:0,sv:0,c:[0,0,0,0,0,0,0,0]};let mul=B.map(()=>1),glob=1,cm=1,tot=0,tc=0,hc=0,fz=0,cz=0,gc=0,play=0,ba=1,ach=new Set();const xm=()=>(1+ach.size*.01)*(1+hc*.02)*(fz>Date.now()?7:1)*(1+.03*uniq())*(oc>Date.now()?3:1)*H.p,cx=()=>(1+hc*.02)*(cz>Date.now()?777:1)*H.c;const per=i=>B[i][2]*mul[i]*glob*xm()*(1+.05*lvl[i]);const dps=()=>B.reduce((a,b,i)=>a+per(i)*own[i],0);
document.getElementById('b').appendChild(spr('dollar','100%'));
const R=document.getElementById('r'),els=[];
B.forEach((b,i)=>{const d=document.createElement('div');d.className='s';d.appendChild(spr(b[0],'40px'));
d.insertAdjacentHTML('beforeend',`<div><b>${b[0]}</b><i></i></div><em></em>`);
d.onclick=()=>{const c=cost(i);if($>=c){$-=c;own[i]++;draw()}};R.appendChild(d);els.push(d)});
function draw(){
els.forEach((d,i)=>{const c=bcost(i,qty(i));d.classList.toggle('no',ba=='lvl'?ing<lvl[i]+1:$<c);d.querySelector('i').textContent=ba=='lvl'?'LEVEL UP: '+(lvl[i]+1)+' ingot'+(lvl[i]?'s':''):(qty(i)>1?'x'+qty(i)+' ':'')+'$'+f(c)+' | +$'+f(per(i))+'/s';d.querySelector('em').textContent=own[i]||''})}
document.getElementById('b').onclick=e=>{$+=1;const t=document.createElement('div');t.className='f'+(window.kcrit>1?' crit':'');t.textContent=(window.kcrit>10?'MEGA CRIT! ':window.kcrit>1?'CRIT! ':'')+'+$'+(typeof v!='undefined'?f(v):1);
t.style.left=e.clientX-10+'px';t.style.top=e.clientY-20+'px';document.body.appendChild(t);setTimeout(()=>t.remove(),4000);draw()};
setInterval(()=>{const g=dps()/10;$+=g;tot+=g;draw()},100);draw();
const AC=new(window.AudioContext||window.webkitAudioContext)();
let MG;function mst(){if(!MG){MG=AC.createGain();const d=AC.createDelay(),fb=AC.createGain(),w=AC.createGain();d.delayTime.value=.13;fb.gain.value=.28;w.gain.value=.22;MG.connect(AC.destination);MG.connect(d);d.connect(fb);fb.connect(d);d.connect(w);w.connect(AC.destination)}return MG}
function snd(f,d=.1,ty='square',v=.04,sl=0,dl=0){try{AC.resume();const o=AC.createOscillator(),g=AC.createGain(),lp=AC.createBiquadFilter(),t=AC.currentTime+dl;o.type=ty=='square'?'triangle':ty;lp.type='lowpass';lp.frequency.value=ty=='sawtooth'?1400:5000;o.frequency.setValueAtTime(f,t);if(sl)o.frequency.exponentialRampToValueAtTime(f*sl,t+d);g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(v,t+.006);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(lp);lp.connect(g);g.connect(mst());o.start(t);o.stop(t+d+.02)}catch(e){}}
const SC=[0,2,4,7,9,12,14,16];let cb=0,ct;
function burst(x,y,n){n=Math.round(n*[0,.4,1][ST.fx]);if(!n)return;const c=['#f5e663','#3a9d4f','#9be3a8'];for(let i=0;i<n;i++){const p=document.createElement('div');p.className='p';const a=Math.random()*6.28,s=30+Math.random()*60;p.style.cssText=`left:${x}px;top:${y}px;background:${c[i%3]};--x:${Math.cos(a)*s}px;--y:${Math.sin(a)*s-20}px`;document.body.appendChild(p);setTimeout(()=>p.remove(),700)}}
function pop(el,c){el.classList.remove(c);void el.offsetWidth;el.classList.add(c)}
const bt=document.getElementById('b');
bt.onclick=e=>{let v=(cm*cx()+dps()*cpd)*(cz>Date.now()?1:1+Math.min(cb,50)*.02);const kr=Math.random(),kc=kr<.01+H.cr/5?50:kr<.1+H.cr?5:1;v*=kc;window.kcrit=kc;$+=v;tot+=v;tc++;cb++;clearTimeout(ct);ct=setTimeout(()=>cb=0,900);
sClick();
pop(bt,'q');burst(e.clientX,e.clientY,cb%10?5:16);

const t=document.createElement('div');t.className='f'+(window.kcrit>1?' crit':'');t.textContent=(window.kcrit>10?'MEGA CRIT! ':window.kcrit>1?'CRIT! ':'')+'+$'+(typeof v!='undefined'?f(v):1);t.style.cssText=`left:${e.clientX-10}px;top:${e.clientY-20}px;--dx:${Math.random()*60-30}px`;
document.body.appendChild(t);setTimeout(()=>t.remove(),4000);draw()};
els.forEach((d,i)=>d.onclick=()=>{const c=cost(i);if($>=c){$-=c;own[i]++;draw();const r=d.getBoundingClientRect();burst(r.left+30,r.top+r.height/2,12);pop(d,'bn');pop(d.querySelector('em'),'pp');
sBuy(i);
if(own[i]%10==0){shk();[12,16,19,24].forEach((s,k)=>snd(262*2**(s/12),.2,'triangle',.06,0,k*.07))}}
else snd(110,.15,'sawtooth',.04,.7)});
setInterval(()=>{const D=dps();if(D<=0||Math.random()>Math.min(1,.25*Math.log10(D+1)+.1))return;const l=document.getElementById('l'),b=document.createElement('div');b.className='bl';b.style.left=Math.random()*(l.clientWidth-20)+'px';l.appendChild(b);setTimeout(()=>b.remove(),3000)},120);
const FL=["Clicks a dollar for you. Tireless, but not very smart.","Works nine to five for pocket change.","Cubicles, coffee and a mysterious fax machine.","Corporate strategy: more dollars.","Safe, secure, and very profitable.","Smokestacks puffing out pure cash.","So tall it casts a shadow on your competitors.","Dollars hot off the press.","Controls the money supply. And you.","Now earning in zero gravity."];
const made=B.map(()=>0),icon=B.map(b=>{const c=spr(b[0],'8px');return c.toDataURL()});
let hv=-1;const tip=document.body.appendChild(Object.assign(document.createElement('div'),{id:'tip'}));
setInterval(()=>B.forEach((b,i)=>made[i]+=per(i)*own[i]/10),100);
function showTip(){if(uh||window.tipLock)return;if(hv<0){tip.style.display='none';return}
const i=hv;if(lkd(i)){tip.innerHTML='<h3>???</h3><div class="fl">Keep earning to discover this.</div>';place(els[i]);return}const b=B[i],t=dps(),m=per(i)*own[i],c=cost(i),need=c-$;
tip.innerHTML=`<h3><img src="${icon[i]}">${b[0]}</h3>`+
`<div>Price: <span class="${need>0?'bad':'ok'}">$${f(c)}</span>${need>0?` (need $${f(need)} more)`:''}</div><div>Owned: ${own[i]}</div><hr>`+
`<div>Each makes <b>$${f(per(i))}</b>/s</div>`+(own[i]?`<div>${own[i]} ${b[0]}${own[i]>1?'s':''} make <b>$${f(m)}</b>/s (${(m/t*100).toFixed(1)}% of total)</div><div>$${f(made[i])} made so far</div>`:`<div>None owned yet</div>`)+
`<hr><div class="fl">${FL[i]}</div>`;
tip.style.display='block';const r=els[i].getBoundingClientRect(),h=tip.offsetHeight;let l=r.left-248,tp=Math.min(r.top,innerHeight-h-8);
if(l<4){l=4;tp=Math.max(4,r.top-h-6)}tip.style.left=l+'px';tip.style.top=tp+'px'}
els.forEach((d,i)=>{d.onmouseenter=()=>{hv=i;showTip();ST.hs&&snd(500+i*45,.04,'square',.012)};d.onmouseleave=()=>{hv=-1;showTip()}});
R.onscroll=showTip;setInterval(showTip,100);
bt.onmouseenter=()=>ST.hs&&snd(700,.05,'triangle',.02,1.4);
let sph;bt.addEventListener('mouseenter',()=>{sph=setInterval(()=>{const r=bt.getBoundingClientRect(),p=document.createElement('div');p.className='sp';p.style.left=r.left-14+Math.random()*(r.width+28)+'px';p.style.top=r.top-14+Math.random()*(r.height+28)+'px';p.style.background=Math.random()<.5?'#fff':'#f5e663';document.body.appendChild(p);setTimeout(()=>p.remove(),500);},60)});
bt.addEventListener('mouseleave',()=>clearInterval(sph));
/* ART + VISUALS */
SP.Pen=["......kk",".....kyk","....kyk.","...kyk..","..kyk...",".kyk....","kyk.....","kk......"];
SP.Star=["...yy...","...yy...","yyyyyyyy",".yyyyyy.","..yyyy..","..yyyy..",".yy..yy.","yy....yy"];
function uic(u){const k=u.id[0],t=+u.id.slice(-1),n=k=='c'?'Pen':k=='g'?'Star':u.sp,c=document.createElement('canvas');c.width=c.height=12;const x=c.getContext('2d');
x.drawImage(spr(n),1,0);
x.fillStyle='#f5e663';for(let q=0;q<=Math.min(t,4);q++)x.fillRect(q*2,11,1,1);if(t>2){x.fillStyle='#fff';x.fillRect(11,0,1,1);x.fillRect(10,1,1,1)}
c.style.filter=`hue-rotate(${[0,50,130,200,280][t%5]}deg) saturate(1.3)`;return c}
function bill(){const c=document.createElement('canvas');c.width=24;c.height=12;const x=c.getContext('2d'),r=(a,b,w,h,f)=>{x.fillStyle=f;x.fillRect(a,b,w,h)};
r(0,0,24,12,'#1e5a2c');r(1,1,22,10,'#9be3a8');r(2,2,20,8,'#1e5a2c');r(3,3,18,6,'#3a9d4f');
r(9,3,6,6,'#e8f5e0');r(10,4,4,3,'#1e5a2c');r(10,7,4,2,'#9be3a8');r(11,5,2,1,'#e8f5e0');
r(4,4,1,4,'#e8f5e0');r(3,5,1,1,'#e8f5e0');r(19,4,1,4,'#e8f5e0');r(18,5,1,1,'#e8f5e0');r(6,5,2,2,'#9be3a8');r(16,5,2,2,'#9be3a8');return c}
document.documentElement.style.setProperty('--bill',`url(${bill().toDataURL()})`);
bt.innerHTML='';const bc=bill();bc.style.cssText='width:100%;height:100%';bt.appendChild(bc);
const bw=document.createElement('div');bw.id='bw';bt.before(bw);bw.appendChild(bt);const cr=document.createElement('div');cr.id='cr';bw.appendChild(cr);
const cimg=B.map(b=>spr(b[0],'8px').toDataURL()),cel=[];
(function ring(t){const lw=document.getElementById('l').clientWidth,bwd=bt.clientWidth,bhd=bt.clientHeight,avail=Math.max(14,Math.min((lw-bwd)/2-8,90)),RC=Math.floor((avail-14)/20)+1,W=bw.clientWidth/2,H=bw.clientHeight/2,rs=[];
let left=Math.min(own[0],400),cnt=0;for(let r=0;left>0&&r<RC;r++){const off=14+r*20,w=bwd+off*2,h=bhd+off*2,n=Math.min(Math.max(6,Math.floor(2*(w+h)/20)),left);rs.push({w,h,n});left-=n;cnt+=n}
while(cel.length<cnt){const m=document.createElement('img');m.src=cimg[0];m.className='cu';cr.appendChild(m);cel.push(m)}while(cel.length>cnt)cel.pop().remove();
let id=0;rs.forEach((g,ri)=>{const dir=ri%2?-1:1,Pm=2*(g.w+g.h);for(let k=0;k<g.n;k++){const m=cel[id++];let q=((k/g.n+dir*t/(15000+ri*5000))%1+1)%1*Pm,x,y,dx=0,dy=0;
if(q<g.w){x=q-g.w/2;y=-g.h/2;dy=1}else if((q-=g.w)<g.h){x=g.w/2;y=q-g.h/2;dx=-1}else if((q-=g.h)<g.w){x=g.w/2-q;y=g.h/2;dy=-1}else{q-=g.w;x=-g.w/2;y=g.h/2-q;dx=1}
const po=Math.max(0,Math.sin(t/300-dir*k/g.n*12.566-ri*1.3))**12*10;
m.style.transform=`translate(${W+x+dx*po-9}px,${H+y+dy*po-9}px) rotate(${Math.atan2(dy,dx)*57.3+135}deg)`}});requestAnimationFrame(ring)})(0);
const v=document.createElement('div');v.id='v';document.getElementById('l').after(v);const sv=[],sc=B.map(()=>-1);
B.forEach((b,i)=>{if(!i)return;const d=document.createElement('div');d.className='st';d.innerHTML='<span></span>';d.style.display='none';v.appendChild(d);sv[i]=d});
function fly(x,y,n){n=Math.round(n*[0,.4,1][ST.fx]);for(let k=0;k<n;k++){const b=document.createElement('div');b.className='fb';b.style.cssText=`left:${x-12}px;top:${y-6}px;--x:${Math.random()*160-80}px;--r:${Math.random()*360-180}deg`;document.body.appendChild(b);setTimeout(()=>b.remove(),900)}}
setInterval(()=>B.forEach((b,i)=>{const d=sv[i];if(!d)return;if(own[i]!=sc[i]){const pv=sc[i];sc[i]=own[i];d.style.display=own[i]?'block':'none';d.firstChild.textContent=b[0]+' x'+own[i];d.querySelectorAll('img').forEach(m=>m.remove());
const s=34,n=Math.min(own[i],Math.max(1,Math.floor((d.clientWidth-50)/s)));for(let k=0;k<n;k++){const m=document.createElement('img');m.src=cimg[i];m.className='bi';m.style.left=6+k*s+'px';m.style.animationDelay=-Math.random()+'s';if(k==n-1&&pv>=0&&own[i]>pv)m.classList.add('dr');d.appendChild(m)}
if(pv>=0&&own[i]>pv){const r=d.getBoundingClientRect();fly(r.left+Math.min(n,50)*s,r.top+20,6)}}}),100);
setInterval(()=>B.forEach((b,i)=>{const d=sv[i];if(d&&own[i]&&ST.pp){const r=d.getBoundingClientRect(),t=document.createElement('div');t.className='f';t.style.cssText=`left:${r.left+10+Math.random()*(r.width-70)}px;top:${r.top+4}px;font-size:9px;--dx:0px;color:#9be3a8`;t.textContent='+$'+f(per(i)*own[i]);document.body.appendChild(t);setTimeout(()=>t.remove(),4000)}}),1000);
const lkd=i=>!(own[i]>0||tot>=B[i][1]*.7);
function lockDraw(){let sl=false;els.forEach((d,i)=>{const L=lkd(i);d.style.display=!L||!sl?'':'none';if(L){sl=true;d.querySelector('b').textContent='???';d.querySelector('i').textContent='$???';d.querySelector('em').textContent=''}else d.querySelector('b').textContent=B[i][0]+(lvl[i]?' Lv'+lvl[i]:'');d.classList.toggle('lk',L)})}
const od=draw;draw=()=>{od();lockDraw()};
const mEl=document.getElementById('m');bt.addEventListener('click',e=>{pop(mEl,'cp');fly(e.clientX,e.clientY,2+lv*2);if(lv)burst(e.clientX,e.clientY,lv*6);const K=window.kcrit;if(K>1){sx.cr++;burst(e.clientX,e.clientY,K>10?60:20);fly(e.clientX,e.clientY,K>10?20:6);if(K>10)shk();sCrit(K>10)}rip(e.clientX,e.clientY);showCombo()});
document.addEventListener('dragstart',e=>e.preventDefault());document.addEventListener('selectstart',e=>{if(e.target.id!='io'&&e.target.tagName!='INPUT')e.preventDefault()});
let muted=false;try{muted=localStorage.getItem('dcm')=='1'}catch(e){}const _sn=snd;snd=(...a)=>{if(muted)return;a[3]=(a.length>3&&a[3]!==undefined?a[3]:.04)*ST.vol*2;return _sn(...a)};
const pk=a=>a[Math.random()*a.length|0];
const genName=()=>pk(["Golden","Lucky","Mighty","Grand","Royal","Shiny","Happy","Rusty","Turbo","Mega"])+' '+pk(["Penny","Buck","Coin","Cash","Dollar","Money","Gold","Bill","Vault","Ledger"])+' '+pk(["Factory","Works","Mint","Industries","Co.","Emporium","Corp"]);
let fname=genName();const fnEl=document.createElement('div');fnEl.id='fn';fnEl.title='Click to rename';fnEl.textContent=fname;document.querySelector('h1').after(fnEl);
fnEl.onclick=()=>{if(fnEl.firstChild&&fnEl.firstChild.tagName=='INPUT')return;const i=document.createElement('input');i.value=fname;i.maxLength=24;fnEl.textContent='';fnEl.appendChild(i);i.focus();i.select();
i.onblur=()=>{fname=i.value.trim()||genName();sx.rn++;if(fname.toLowerCase()=='testermonty')setTimeout(devOpen,50);fnEl.textContent=fname;save(1)};i.onkeydown=e=>{if(e.key=='Enter')i.blur()}};
let lv=0,lvi=false;setInterval(()=>{const n=[1e5,1e7,1e9,1e11,1e13].filter(x=>tot>=x).length;if(n!=lv){const gain=lvi&&n>lv;lv=n;for(let k=1;k<6;k++)document.documentElement.classList.toggle('l'+k,k<=n);
if(gain){shk();toast('ECONOMY LEVEL '+n+'!');lvlFx(n);[0,4,7,12,16].forEach((s,k)=>snd(330*2**(s/12),.2,'triangle',.05,0,k*.07))}}lvi=true;
if(lv>2)for(let k=0;k<lv-2;k++){const b=document.createElement('div');b.className='fr';b.style.cssText=`left:${Math.random()*100}vw;--r:${Math.random()*720-360}deg;filter:hue-rotate(${Math.random()*360}deg)`;document.body.appendChild(b);setTimeout(()=>b.remove(),3000)}},200);
/* UPGRADES */
var uh=null,uhe,started=false;const bought=new Set(),seen=new Set(),KEY='dollarclicker1',ico=n=>spr(n,'8px').toDataURL();
const TW=["Better","Premium","Elite","Master","Legendary"],TO=[1,10,25,50,100],TC=[10,50,500,5e3,5e4],U=[];
B.forEach((b,i)=>TW.forEach((w,t)=>U.push({id:'b'+i+t,n:`${w} ${b[0]}s`,c:b[1]*TC[t],d:`${b[0]}s are twice as efficient.<br><i>Unlocks at ${TO[t]} ${b[0]}${TO[t]>1?'s':''}</i>`,sp:b[0],col:'#5a7ad8',ok:()=>own[i]>=TO[t],fx:()=>mul[i]*=2})));
["Firm Handshake","Quick Fingers","Gold Pen","Diamond Pen","Platinum Touch","Midas Touch"].forEach((n,k)=>{const T=[50,200,1e3,5e3,2e4,1e5][k];U.push({id:'c'+k,n,c:[100,500,5e3,5e4,5e6,5e8][k],d:`Clicking is twice as powerful.<br><i>Unlocks at ${f(T)} clicks</i>`,sp:'dollar',col:'#f5e663',ok:()=>tc>=T,fx:()=>cm*=2})});
["Angel Investor","Venture Capital","Hedge Fund","Wall Street","Global Economy","Money Singularity"].forEach((n,k)=>{const T=[1e3,1e5,1e7,1e9,1e11,1e13][k];U.push({id:'g'+k,n,c:T,d:`All production +10%.<br><i>Unlocks after earning $${f(T)}</i>`,sp:'Mint',col:'#d44',ok:()=>tot>=T,fx:()=>glob*=1.1})});
function recalc(){mul=B.map(()=>1);glob=1;cm=1;cpd=.05;gfq=1;U.forEach(u=>bought.has(u.id)&&u.fx())}
function place(el){tip.style.display='block';const r=el.getBoundingClientRect(),h=tip.offsetHeight;let l=r.left-248,tp=Math.min(r.top,innerHeight-h-8);if(l<4){l=Math.min(r.left,innerWidth-248);tp=Math.max(4,r.top-h-6)}tip.style.left=l+'px';tip.style.top=tp+'px'}
const up=document.createElement('div');up.id='up';R.prepend(up);let uk='';
function upDraw(){const a=U.filter(u=>!bought.has(u.id)&&u.ok()).sort((x,y)=>x.c-y.c),k=a.map(u=>u.id).join();
if(k!==uk){uk=k;up.innerHTML='';a.forEach(u=>{const e=document.createElement('div');e.className='u';e.style.borderColor=u.col;e.appendChild(uic(u));u._e=e;
e.onmouseenter=()=>{uh=u;uhe=e;ST.hs&&snd(900,.03,'square',.01)};e.onmouseleave=()=>{uh=null;tip.style.display='none'};
e.onclick=()=>{if($>=u.c){const d0=dps();$-=u.c;bought.add(u.id);recalc();upFx(u,e,dps()-d0);uh=null;tip.style.display='none';uk='';upDraw();draw()}else snd(110,.15,'sawtooth',.04,.7)};
up.appendChild(e);if(!seen.has(u.id)){seen.add(u.id);if(started){pop(e,'nu');snd(1046,.15,'triangle',.05);snd(1568,.2,'triangle',.05,1,.08)}}})}
a.forEach(u=>u._e&&u._e.classList.toggle('no',$<u.c))}
function upTip(){if(!uh)return;if(!uhe.isConnected){uh=null;tip.style.display='none';return}const u=uh,need=u.c-$;
tip.innerHTML=`<h3><img src="${uic(u).toDataURL()}" style="filter:${uic(u).style.filter}">${u.n}</h3><div>Cost: <span class="${need>0?'bad':'ok'}">$${f(u.c)}</span></div><hr><div>${u.d}</div><hr><div class="fl">Click to buy</div>`;place(uhe)}
setInterval(()=>{upDraw();upTip()},150);
/* SAVE / LOAD */
const toastEl=Object.assign(document.createElement('div'),{id:'toast'});document.body.appendChild(toastEl);let tt,wiped=false;
function toast(m,d){toastEl.textContent=m;toastEl.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>toastEl.classList.remove('on'),d||2500)}
const enc=()=>btoa(JSON.stringify({$,own,tot,tc,made,b:[...bought],n:encodeURIComponent(fname),a:[...ach],h:hc,g:gc,p:play,k:stk,x:sx,l:lvl,i:ing,r:ripe,hu:[...hu],hs:hcs,t:Date.now()}));
function save(q){if(wiped)return;try{localStorage.setItem(KEY,enc());q||toast('Game saved!')}catch(e){q||toast('Save unavailable here - use EXPORT')}}
function load(s,off){try{const d=JSON.parse(atob(s));$=d.$||0;tot=d.tot||0;tc=d.tc||0;own=B.map((_,i)=>d.own[i]||0);B.forEach((_,i)=>made[i]=d.made[i]||0);bought.clear();(d.b||[]).forEach(x=>bought.add(x));recalc();if(d.n){fname=decodeURIComponent(d.n);fnEl.textContent=fname}ach=new Set(d.a||[]);hc=d.h||0;gc=d.g||0;play=d.p||0;if(d.k&&d.k.sh)stk=d.k;if(d.x)Object.assign(sx,d.x);lvl=B.map((_,i)=>(d.l&&d.l[i])||0);ing=d.i||0;hu=new Set(d.hu||[]);hcs=d.hs||0;hrecalc();ripe=d.r||Date.now()+3e5;
window.offSec=off?(Date.now()-d.t)/1000:0;
uk='';started=false;upDraw();started=true;draw();return true}catch(e){return false}}
const mn=document.createElement('div');mn.id='mn';mn.innerHTML='<textarea id="io" placeholder="Paste save code, then press IMPORT"></textarea><div><button>SAVE</button><button>EXPORT</button><button>IMPORT</button><button>WIPE</button><button id="mt"></button></div>';document.getElementById('l').appendChild(mn);
const io=document.getElementById('io'),[b1,b2,b3,b4]=mn.querySelectorAll('button');
b1.onclick=()=>save();
b2.onclick=()=>{io.style.display='block';io.value=enc();io.select();try{navigator.clipboard.writeText(io.value)}catch(e){}toast('Save code ready to copy')};
b3.onclick=()=>{if(io.style.display!='block'){io.style.display='block';io.value='';toast('Paste code, press IMPORT again');return}if(load(io.value.trim())){save(1);toast('Save imported!');io.style.display='none'}else toast('Invalid save code')};
b4.onclick=()=>{if(b4.textContent=='WIPE'){b4.textContent='SURE?';setTimeout(()=>b4.textContent='WIPE',3000)}else{wiped=true;try{localStorage.removeItem(KEY)}catch(e){}location.reload()}};
setInterval(()=>{if(ST.auto)save(1)},30000);addEventListener('beforeunload',()=>save(1));document.addEventListener('visibilitychange',()=>document.hidden&&save(1));
const mt=document.getElementById('mt'),mtl=()=>mt.textContent=muted?'SOUND: OFF':'SOUND: ON';mtl();mt.onclick=()=>{muted=!muted;mtl();try{localStorage.setItem('dcm',muted?1:0)}catch(e){}};
try{const s=localStorage.getItem(KEY);if(s)load(s,1)}catch(e){}
upDraw();started=true;draw();
/* DEPTH */
SP.Trophy=["yyyyyyyy","yoyyyyoy","yoyyyyoy",".yyyyyy.","..yyyy..","...yy...","..oooo..",".oooooo."];
function bcost(i,n){let c=0;for(let k=0;k<n;k++)c+=Math.ceil(B[i][1]*H.dc*Math.pow(1.2,own[i]+k));return c}
function maxN(i){let n=0,c=0;while(n<500){const x=Math.ceil(B[i][1]*H.dc*Math.pow(1.2,own[i]+n));if(c+x>$)break;c+=x;n++}return n}
function qty(i){return ba=='lvl'?1:ba=='max'?Math.max(1,maxN(i)):ba}
const qb=document.createElement('div');qb.id='qb';
[1,10,100,'max'].forEach(q=>{const b=document.createElement('button');b.textContent=q=='max'?'MAX':'x'+q;if(q==1)b.className='on';b.onclick=()=>{ba=q;[...qb.children].forEach(c=>c.classList.toggle('on',c==b));snd(300,.04,'square',.02);draw()};qb.appendChild(b)});
R.insertBefore(qb,els[0]);
els.forEach((d,i)=>{const o=d.onclick;d.onclick=()=>{const n=qty(i);if(n>1){if($<bcost(i,n)){snd(110,.15,'sawtooth',.04,.7);return}for(let k=1;k<n;k++){$-=cost(i);own[i]++}}o()}});
/* golden bills */
function golden(){if(document.querySelector('.gd:not(.sm)'))return;const g=document.createElement('div');g.className='gd';g.dataset.x=Date.now()+20000*H.gd;g.style.animationDuration=20*H.gd+'s';g.style.left=10+Math.random()*80+'vw';g.style.top=10+Math.random()*70+'vh';g.appendChild(bill());
g.onclick=()=>{g.remove();gc++;const r=g.getBoundingClientRect(),x=r.left+32,y=r.top+16,q=Math.random();let m;
if(q<.45){fz=Date.now()+77e3;m='FRENZY! Production x7 for 77s'}else if(q<.8){const a=Math.min(dps()*900,$*.15)+13;$+=a;tot+=a;m='LUCKY! +$'+f(a)}else if(q<.92){cz=Date.now()+7e3;m='CLICK FRENZY! Clicks x777 for 7s'}else{storm();m='CASH STORM! Grab the bills!'}
toast(m,6000);bigPop(m,x,y);burst(x,y,24);fly(x,y,10);shk();sGold();draw()};
document.body.appendChild(g);setTimeout(()=>g.remove(),20000*H.gd)}
(function nx(){setTimeout(()=>{golden();nx()},Math.max(15e3,(20e3+Math.random()*35e3)*(gfq||1)/H.gf))})();
const bf=document.createElement('div');bf.id='bf';document.body.appendChild(bf);
setInterval(()=>{const n=Date.now(),a=[];if(fz>n)a.push('FRENZY x7 '+((fz-n)/1e3|0)+'s');if(cz>n)a.push('CLICK FRENZY x777 '+((cz-n)/1e3|0)+'s');if(oc>n)a.push('OVERCLOCK x3 '+((oc-n)/1e3|0)+'s');bf.innerHTML=a.map(x=>'<div>'+x+'</div>').join('');play+=.2},200);
/* achievements */
const A=[],W5=["Starter","Apprentice","Expert","Master","Legend"];
B.forEach((b,i)=>[1,10,25,50,100].forEach((t,k)=>A.push({id:`ab${i}_${t}`,n:`${b[0]} ${W5[k]}`,d:`Own ${t} ${b[0]}${t>1?'s':''}`,ok:()=>own[i]>=t})));
[[1e3,"Pocket Change"],[1e6,"Millionaire"],[1e9,"Billionaire"],[1e12,"Trillionaire"],[1e15,"Quadrillionaire"],[1e18,"Beyond Money"]].forEach(([T,n])=>A.push({id:'at'+T,n,d:`Earn $${f(T)} in one run`,ok:()=>tot>=T}));
[[1,"First Click"],[100,"Click Happy"],[1e3,"Clicker"],[1e4,"Finger Workout"],[1e5,"Carpal Tunnel"]].forEach(([T,n])=>A.push({id:'ac'+T,n,d:`Click ${f(T)} time${T>1?'s':''}`,ok:()=>tc>=T}));
[[10,"Passive Income"],[1e3,"Money Machine"],[1e5,"Cash Flow"],[1e7,"Economy Engine"],[1e9,"Dollar Deluge"]].forEach(([T,n])=>A.push({id:'ad'+T,n,d:`Reach $${f(T)} per second`,ok:()=>dps()>=T}));
[[1,"Investor"],[10,"Upgrader"],[25,"Optimizer"],[50,"Efficiency Expert"]].forEach(([T,n])=>A.push({id:'au'+T,n,d:`Buy ${T} upgrade${T>1?'s':''}`,ok:()=>bought.size>=T}));
[[1,"Lucky Find"],[7,"Treasure Hunter"],[27,"Gold Rush"],[77,"Golden Touch"]].forEach(([T,n])=>A.push({id:'ag'+T,n,d:`Click ${T} golden bill${T>1?'s':''}`,ok:()=>gc>=T}));
[[1,"Ascended"],[10,"Wise Investor"],[100,"Dollar Deity"]].forEach(([T,n])=>A.push({id:'ah'+T,n,d:`Have ${T} prestige chip${T>1?'s':''}`,ok:()=>hc>=T}));
setInterval(()=>A.forEach(a=>{if(!ach.has(a.id)&&a.ok()){ach.add(a.id);achCard(a);sAch();draw()}}),500);
/* stats + ascension */
const ov=document.createElement('div');ov.id='ov';ov.innerHTML='<div id="ovb"><button id="xx">X</button><div id="sts"></div><div id="ag"></div></div>';document.body.appendChild(ov);
const sts=document.getElementById('sts'),potn=()=>Math.floor(Math.floor(Math.cbrt(tot/1e12))*H.ch),fmtT=t=>{t|=0;return(t/3600|0)+'h '+(t/60%60|0)+'m '+t%60+'s'};let sure=false;
function showStats(){sts.innerHTML=`<h3>${fname}</h3>`+[['Dollars now','$'+f($)],['Earned this run','$'+f(tot)],['Per second','$'+f(dps())],['Per click','$'+f(cm*cx()+dps()*cpd)],['Total clicks',f(tc)],['Buildings',own.reduce((a,b)=>a+b,0)],['Upgrades',bought.size+'/'+U.length],['Golden bills',gc],['Chips available',(hc-hcs)+' of '+hc+' earned (+'+hc*2+'% production and clicks)'],['Time played',fmtT(play)]].map(r=>`<div><span>${r[0]}</span><b>${r[1]}</b></div>`).join('')+`<button id="asc">${sure?'SURE? CLICK AGAIN':'ASCEND: +'+potn()+' CHIPS'}</button><div class="fl" style="display:block">Ascending resets money, buildings and upgrades. Each chip gives a permanent +2% to production and clicks. Needs $1B earned per chip (cube root).</div><h3>Achievements ${ach.size}/${A.length} (+${ach.size}% production)</h3>`}
function grid(){const g=document.getElementById('ag');g.innerHTML='';A.forEach((a,i)=>{const d=document.createElement('div'),y=ach.has(a.id);d.className='at'+(y?'':' lo');d.onmouseenter=()=>{window.tipLock=1;tip.innerHTML=`<h3>${y?a.n:'???'}</h3><div>${y?'Earned for:':'Goal:'} ${a.d}</div>`+(y?'<div class="ok">+1% production</div>':'');place(d)};d.onmouseleave=()=>{window.tipLock=0;tip.style.display='none'};const c=spr('Trophy','100%');c.style.filter=`hue-rotate(${i*23%360}deg)`;d.appendChild(c);g.appendChild(d)})}
function ascend(){const n=potn();if(n<1){toast('Earn $1T in one run to gain a chip');return}if(!sure){sure=true;setTimeout(()=>sure=false,3000);return}sure=false;
hc+=n;$=H.sm;tot=0;own=B.map((_,i)=>i<3?H.sb:0);made.fill(0);bought.clear();recalc();uk='';sc.fill(-1);ov.style.display='none';
document.body.classList.add('wh');setTimeout(()=>document.body.classList.remove('wh'),1500);toast('ASCENDED! +'+n+' chips - open LEGACY to spend them!');[0,4,7,12,16,19].forEach((s,k)=>snd(262*2**(s/12),.3,'triangle',.06,0,k*.1));save(1);upDraw();draw()}
sts.onclick=e=>{if(e.target.id=='asc'){ascend();showStats()}};
ov.onclick=e=>{if(e.target==ov||e.target.id=='xx')ov.style.display='none'};
const sb=document.createElement('button');sb.textContent='STATS';mn.querySelector('div').appendChild(sb);sb.onclick=()=>{ov.style.display='flex';grid();showStats()};
setInterval(()=>{if(ov.style.display=='flex')showStats()},500);
/* news ticker */
const nw=document.createElement('div');nw.id='nw';nw.innerHTML='<span></span>';document.body.appendChild(nw);
const NW=[()=>`Local factory "${fname}" reports record profits`,()=>'Economists baffled: money continues to be dollars',()=>'Cursor union demands better clicking conditions',()=>own[1]?'Employees ask for a raise, receive pizza instead':'Nobody works here yet. Efficiency is through the roof',()=>'Inflation hits new heights; bill printers delighted',()=>'Scientists confirm: more dollars is better than fewer dollars',()=>own[9]?'Space Corp announces dollar-powered rockets':'Rumor: someone wants to build a rocket company',()=>'Stock market rises for no reason',()=>'Golden bill sighted flying over the factory',()=>hc?'Prestigious investors visit '+fname:'Investors circle, whispering "ascend?"',()=>tot>1e9?'Local economy now larger than some countries':'Breaking: '+fname+' still small. Dream big.',()=>own[0]>20?'Cursor shortage fears overblown, says cursor':'Cursors available for hire!'];
const ns=nw.firstChild;function tick(){ns.style.animation='none';void ns.offsetWidth;ns.textContent=pk(NW)();ns.style.animation='nw 14s linear'}tick();setInterval(tick,14000);
const hd=t=>Object.assign(document.createElement('h2'),{textContent:t});R.insertBefore(hd('UPGRADES'),up);R.insertBefore(hd('BUILDINGS'),qb);v.prepend(hd('YOUR FACTORY'));
SP.Crown=["y..yy..y","yy.yy.yy","yyyyyyyy","yryyyyry","oooooooo","........","........","........"];
const au=document.createElement('div');au.id='au';au.innerHTML='<div class="gl"></div><div class="ry"></div><div class="ry2"></div><div class="pr"></div><div class="pr p2"></div>';
const sk=document.createElement('div');sk.className='sk';for(let k=0;k<16;k++){const i=document.createElement('i'),a=k/16*6.2832;i.style.cssText=`left:${50+52*Math.cos(a)}%;top:${50+60*Math.sin(a)}%;animation-delay:${k*.15}s;background:${['#fff','#ffd84a','#6bd6ff','#ff8bd6'][k%4]}`;sk.appendChild(i)}au.appendChild(sk);
const cw=document.createElement('div');cw.className='cw';for(let k=0;k<10;k++){const b=document.createElement('b');b.style.cssText=`left:${5+Math.random()*90}%;animation-delay:${-Math.random()*3}s;animation-duration:${2.5+Math.random()*2}s`;cw.appendChild(b)}au.appendChild(cw);
const cn=spr('Crown','56px');cn.className='cn';au.appendChild(cn);bw.prepend(au);
function lvlFx(n){const r=bw.getBoundingClientRect(),d=document.createElement('div');d.className='lu';d.textContent='LEVEL '+n+'!';bw.appendChild(d);setTimeout(()=>d.remove(),2300);burst(r.left+r.width/2,r.top+r.height/2,40);fly(r.left+r.width/2,r.top+r.height/2,12)}
/* dopamine */
function rip(x,y){const d=document.createElement('div');d.className='rp';d.style.cssText=`left:${x}px;top:${y}px`;document.body.appendChild(d);setTimeout(()=>d.remove(),500)}
const cmbEl=document.createElement('div');cmbEl.id='cmb';bw.appendChild(cmbEl);
function showCombo(){if(cz>Date.now()){cmbEl.style.display="none";return}sx.mc=Math.max(sx.mc,cb);if(cb<3)return;cmbEl.style.display='block';cmbEl.textContent='COMBO '+cb+'  +'+Math.min(cb,50)*2+'%';cmbEl.style.fontSize=(9+Math.min(cb,50)*.25)+'px';cmbEl.style.color=cb>=50?'#ff8bd6':cb>=25?'#ffd84a':'#7dff8f';pop(cmbEl,'cp')}
setInterval(()=>{if(!cb)cmbEl.style.display='none'},200);
let dsp=0;(function sm(){dsp+=($-dsp)*.25;if(Math.abs($-dsp)<.01)dsp=$;mEl.textContent='$'+f(dsp);requestAnimationFrame(sm)})();
setInterval(()=>{document.title='$'+f($)+' - Dollar Clicker'},1000);
function storm(){for(let k=0;k<25;k++)setTimeout(()=>{const g=document.createElement('div');g.className='gd sm';g.dataset.x=Date.now()+7000;g.style.cssText=`left:${5+Math.random()*90}vw;top:${5+Math.random()*80}vh;animation-duration:7s`;g.appendChild(bill());
g.onclick=()=>{g.remove();const a=dps()*15+cm*cx()*30+10;$+=a;tot+=a;const r=g.getBoundingClientRect();burst(r.left+16,r.top+8,10);fly(r.left+16,r.top+8,2);snd(900,.05,'triangle',.04,1.3);
const t=document.createElement('div');t.className='f';t.textContent='+$'+f(a);t.style.cssText=`left:${r.left}px;top:${r.top}px;--dx:0px`;document.body.appendChild(t);setTimeout(()=>t.remove(),4000);draw()};
document.body.appendChild(g);setTimeout(()=>g.remove(),7000)},k*180)}
let mag=-1;function mile(m){const r=bw.getBoundingClientRect(),d=document.createElement('div');d.className='lu';d.style.cssText='font-size:13px;color:#7dff8f;top:auto;bottom:-12px';d.textContent='$'+f(10**m)+' EARNED!';bw.appendChild(d);setTimeout(()=>d.remove(),2300);fly(r.left+r.width/2,r.top+r.height/2,8+m);burst(r.left+r.width/2,r.top+r.height/2,20);[0,4,7].forEach((x,k)=>snd(392*2**(x/12),.12,'triangle',.04,0,k*.06))}
setInterval(()=>{const m=Math.floor(Math.log10(tot+1));if(mag<0){mag=m;return}if(m>mag){mag=m;if(m>=2)mile(m)}else if(m<mag)mag=m},500);
const wasL=B.map((_,i)=>lkd(i));setInterval(()=>B.forEach((_,i)=>{const L=lkd(i);if(wasL[i]&&!L){pop(els[i],'bn');snd(500,.1,'triangle',.04,1.5);toast('New building discovered: '+B[i][0]+'!')}wasL[i]=L}),300);
const pile=document.createElement('div');pile.id='pile';document.getElementById('l').appendChild(pile);
setInterval(()=>{pile.style.height=(6+ach.size/A.length*60)+'%'},1000);
/* v2 */
function f(n){if(ST.fmt=='sci'&&n>=1e6)return n.toExponential(2).replace('e+','e');if(ST.fmt=='full'&&n>=1e3)return Math.floor(n).toLocaleString();return f0(n)}
function shk(){if(ST.shake)pop(document.body,'sh')}
const acs=document.createElement('div');acs.id='acs';document.body.appendChild(acs);
function achCard(a){if(!ST.ap)return;const d=document.createElement('div');d.className='ac';d.innerHTML=`<b>${a.n}</b><div class="dt">Earned for: ${a.d}<br>+1% production</div><button class="xb2">X</button>`;d.querySelector('button').onclick=()=>d.remove();acs.appendChild(d)}
/* per-second preview */
const dEl=document.getElementById('d');
function pvw(){if(uh){const om=mul.slice(),og=glob,oc=cm,d0=dps(),c0=cm*cx();uh.fx();const d1=dps(),c1=cm*cx();mul=om;glob=og;cm=oc;return d1>d0?'+$'+f(d1-d0)+'/s':c1>c0?'+$'+f(c1-c0)+'/click':''}
if(hv>=0&&!lkd(hv))return '+$'+f(per(hv)*qty(hv))+'/s';return ''}
setInterval(()=>{dEl.innerHTML='$'+f(dps())+' <small>per second'+(fz>Date.now()?' (FRENZY x7)':'')+'</small><span class="pv">'+(pvw()||'&nbsp;')+'</span>'},100);
/* news */
NW.length=0;NW.push(...[()=>`Local factory "${fname}" denies printing money. It is printing money.`,'Breaking: man discovers money, immediately wants more',()=>`Accountant faints upon seeing $${f(dps())} per second`,'Cursors form union, demand coffee breaks. Clicking continues anyway.','Employee of the month is a cursor again. Employees file complaint.','Economists predict economy will go up. Or down. Probably up.','Study: 9 out of 10 dollars prefer being clicked','Inflation so bad the Mint now charges for dollars','Bank robbers give up: "your vault is too full, we cannot carry it"','Local goldfish earns more than you. Invested in bubbles.','Man tries to pay with exposure. Factory declines.','Stock market goes up for no reason, down for slightly worse reasons',()=>own[1]?'Employees demand raise, receive pizza. Morale unchanged.':'Nobody works here yet. Efficiency is through the roof.',()=>own[9]?'Space Corp CEO still cannot find parking on the Moon':'Rumor: someone is building rockets out of spare change',()=>own[0]>20?'Cursor shortage fears overblown, says cursor':'Cursors available for hire! No experience, just points.','Scientists confirm: more dollars is better than fewer dollars','Tax collector sends fruit basket, then a bigger letter','Fortune cookie reads: "You will click again."','Pigeon steals $1, becomes local millionaire by lunch',()=>tot>1e9?'Your economy now larger than several countries. They are upset.':'Breaking: '+fname+' still small. Dream big.',()=>hc?'Investors beg you to ascend again. They have snacks.':'Wise old investor whispers: "ascend, kid"','Dollar bill asks to be spent. Dollar bill is ignored.','Local ATM spits out a thank you note','Weather report: raining dollars, bring an umbrella-shaped vault'].map(x=>typeof x=='string'?()=>x:x));
/* market */
const SN=["BILL","COIN","GOLD","VAULT","MINT","CASH"],SV=[.04,.06,.025,.07,.05,.09];let bp=Math.max(50,dps()*40);const hs=SN.map((_,i)=>[stk.mu[i]]),ml=SN.map(()=>0),px=i=>bp*stk.mu[i];
const mk=document.createElement('div');mk.id='mk';mk.innerHTML='<div class="bx"><button class="xb">X</button><h3>STOCK MARKET</h3><div id="mkt"></div><div class="fl" style="display:block;margin-top:8px;color:#8e86b5">Prices follow your economy. Buy low, sell high. Crashes and booms hit at random!</div></div>';document.body.appendChild(mk);const mkt=document.getElementById('mkt');
function mrender(){mkt.innerHTML=`<div>Cash <b>$${f($)}</b> | Realized profit <b class="${stk.pf>=0?'up':'dn'}">$${f(stk.pf)}</b></div>`+SN.map((n,i)=>{const p=px(i),sh=stk.sh[i];return `<div class="row"><b>${n}</b><span>$${f(p)} <i class="${ml[i]>=0?'up':'dn'}">${ml[i]>=0?'+':'-'}${(Math.abs(ml[i])*100).toFixed(1)}%</i></span><span>${f(sh)} sh ($${f(sh*p)})</span><canvas id="sp${i}" width="60" height="20"></canvas><span><button data-i="${i}" data-a="b">BUY 25%</button><button data-i="${i}" data-a="m">MAX</button><button data-i="${i}" data-a="s">SELL</button></span></div>`}).join('');
SN.forEach((_,i)=>{const x=document.getElementById('sp'+i).getContext('2d');x.fillStyle=ml[i]>=0?'#7dff8f':'#ff6b6b';hs[i].forEach((m,k)=>{const h=Math.min(20,m/3*20);x.fillRect(k*1.5,20-h,1.5,h)})})}
function mtick(){bp+=(Math.max(50,dps()*40)-bp)*.2;SN.forEach((_,i)=>{const o=stk.mu[i];let m=o*Math.exp((Math.random()-.5)*SV[i]*2)+(1-o)*.04;if(Math.random()<.004){const c=Math.random()<.5;m*=c?.8:1.25;toast((c?'MARKET CRASH: ':'MARKET BOOM: ')+SN[i]+(c?' plummets!':' soars!'),4000)}m=Math.min(2,Math.max(.5,m));ml[i]=m/o-1;stk.mu[i]=m;hs[i].push(m);if(hs[i].length>150)hs[i].shift()});if(mk.style.display=='flex')mrender()}
setInterval(mtick,30000);
mkt.onclick=e=>{const b=e.target,a=b.dataset.a;if(!a)return;const i=+b.dataset.i,p=px(i);
if(a=='s'){const sh=stk.sh[i];if(!sh)return;const pr=sh*p,pf=pr-stk.cb[i];$+=pr;stk.pf+=pf;stk.cb[i]=0;stk.sh[i]=0;toast((pf>=0?'SOLD! Profit $':'SOLD. Loss $')+f(Math.abs(pf)),3500);if(pf>0){burst(e.clientX,e.clientY,20);fly(e.clientX,e.clientY,6)}snd(pf>=0?700:200,.15,'triangle',.05)}
else{const n=Math.floor($*(a=='m'?1:.25)/p);if(n<1){snd(110,.15,'sawtooth',.04,.7);return}const c=n*p;$-=c;stk.sh[i]+=n;stk.cb[i]+=c;snd(500,.08,'triangle',.04)}draw();mrender()};
/* settings */
const O2=[["OFF",0],["ON",1]],TH=[["#12101c","#1d1a2e","#2a2640","#0a0814","#4a4470"],["#0e1a12","#14221a","#22382a","#0a140e","#3f6a4e"],["#0c1820","#122028","#1f3a4a","#08121a","#3f6a8a"],["#1c0e12","#2a1418","#40222a","#14080a","#7a3f4a"]];
const SET=[["Sound volume","vol",[["MUTE",0],["LOW",.25],["MED",.5],["HIGH",1]]],["Particles","fx",[["OFF",0],["LOW",1],["HIGH",2]]],["Screen shake","shake",O2],["Falling bills","rain",O2],["Cursor rings","rings",O2],["Level aura","aura",O2],["Combo text","combo",O2],["News ticker","news",O2],["Popup length","pop",[["SHORT",.9],["NORMAL",1.8],["LONG",3.5]]],["Number format","fmt",[["SHORT","short"],["SCIENTIFIC","sci"],["FULL","full"]]],["Theme","theme",[["PURPLE",0],["FOREST",1],["OCEAN",2],["CRIMSON",3]]],["Autosave","auto",O2]];
function applyST(){const c=document.body.classList,r=document.documentElement.style;c.toggle('nr',!ST.rain);c.toggle('nrg',!ST.rings);c.toggle('nau',!ST.aura);c.toggle('ncb',!ST.combo);c.toggle('nnw',!ST.news);r.setProperty('--pd',ST.pop+'s');['ink','p1','p2','edge','hi'].forEach((k,i)=>r.setProperty('--'+k,TH[ST.theme][i]));try{localStorage.setItem('dcs',JSON.stringify(ST))}catch(e){}}
const sg=document.createElement('div');sg.id='sg';sg.innerHTML='<div class="bx"><button class="xb">X</button><h3>SETTINGS</h3><div id="sr"></div><h3>SAVE DATA</h3></div>';document.body.appendChild(sg);
SET.forEach(([l,k,o])=>{const d=document.createElement('div'),b=document.createElement('button'),idx=()=>Math.max(0,o.findIndex(x=>x[1]===ST[k]));d.innerHTML='<span>'+l+'</span>';b.textContent=o[idx()][0];b.onclick=()=>{ST[k]=o[(idx()+1)%o.length][1];b.textContent=o[idx()][0];applyST();snd(400,.05,'square',.03)};d.appendChild(b);document.getElementById('sr').appendChild(d)});
sg.firstChild.appendChild(mn);applyST();
[mk,sg].forEach(o=>o.onclick=e=>{if(e.target==o||e.target.classList.contains('xb'))o.style.display='none'});
const lm=document.createElement('div');lm.id='lm';lm.innerHTML='<button>STATS</button><button>VAULTS</button><button>SETTINGS</button>';document.getElementById('l').appendChild(lm);
const [lb1,lb2,lb3]=lm.querySelectorAll('button');lb1.onclick=()=>sb.onclick();lb2.onclick=()=>{mk.style.display='flex';mrender()};lb3.onclick=()=>{sg.style.display='flex'};
/* v3 */
SP.Ingot=[".yyyyyy.","yyyyyyyy","yyooooyy","yooooooy","oooooooo","oyyyyyyo","oooooooo","........"];
const mi=spr('Mint','8px').toDataURL();
function uniq(){return sx.c.filter(x=>x>0).length}
/* upgrade fx */
function upFx(u,el,dd){const r=el.getBoundingClientRect(),x=r.left+20,y=r.top+20,c=uic(u),t=dEl.getBoundingClientRect();c.className='fi';c.style.left=x-20+'px';c.style.top=y-20+'px';document.body.appendChild(c);
requestAnimationFrame(()=>requestAnimationFrame(()=>{c.style.transform=`translate(${t.left+t.width/2-x}px,${t.top-y}px) scale(2.4) rotate(360deg)`;c.style.opacity='.2'}));setTimeout(()=>c.remove(),900);
burst(x,y,30);fly(x,y,6);rip(x,y);toast('Bought '+u.n+'!',2500);sUp();
setTimeout(()=>{pop(dEl,'cp');const q=document.createElement('div');q.className='f crit';q.style.cssText=`left:${t.left+t.width/2-40}px;top:${t.top}px;--dx:0px;color:#7dff8f`;q.textContent=dd>0?'+$'+f(dd)+'/s':'UPGRADED!';document.body.appendChild(q);setTimeout(()=>q.remove(),4000);burst(t.left+t.width/2,t.top+10,16);snd(900,.1,'triangle',.05,1.5)},780)}
/* more upgrades */
const T4=["Quantum","Cosmic","Mythic","Eternal"],TO4=[150,200,250,300],TC4=[5e5,5e6,5e7,5e8];
B.forEach((b,i)=>T4.forEach((w,t)=>U.push({id:'b'+i+(5+t),n:`${w} ${b[0]}s`,c:b[1]*TC4[t],d:`${b[0]}s are twice as efficient.<br><i>Unlocks at ${TO4[t]} ${b[0]}s</i>`,sp:b[0],col:'#5a7ad8',ok:()=>own[i]>=TO4[t],fx:()=>mul[i]*=2})));
for(let i=1;i<B.length;i++)U.push({id:'s'+i,n:`${B[i-1][0]}-${B[i][0]} Synergy`,c:B[i][1]*40,d:`${B[i][0]}s +50%, ${B[i-1][0]}s +10%.<br><i>Unlocks at 20 of each</i>`,sp:B[i][0],col:'#58d36f',ok:()=>own[i]>=20&&own[i-1]>=20,fx:()=>{mul[i]*=1.5;mul[i-1]*=1.1}});
["Finger Gym","Steady Hands","Hot Streak","Click Wizard","Autoclick Dream","Pointer Prophecy","Mouse Master","One Finger Army"].forEach((n,k)=>{const T=[500,2500,1e4,5e4,2.5e5,1e6,5e6,2e7][k];U.push({id:'p'+k,n,c:[5e3,5e4,5e6,5e8,5e10,5e12,5e14,5e16][k],d:`Clicks gain +3% of your income per second.<br><i>Unlocks at ${f(T)} clicks</i>`,sp:'Cursor',col:'#f5e663',ok:()=>tc>=T,fx:()=>cpd+=.03})});
["Four-Leaf Clover","Lucky Penny","Horseshoe","Rabbit's Foot","Wishing Well"].forEach((n,k)=>{const T=[1,7,27,77,177][k];U.push({id:'y'+k,n,c:[1e4,1e7,1e10,1e13,1e16][k],d:`Golden bills appear 10% more often.<br><i>Unlocks after ${T} golden bills</i>`,sp:'dollar',col:'#ffd84a',ok:()=>gc>=T,fx:()=>gfq*=.9})});
["Trophy Shelf","Hall of Fame","Museum Wing","Gilded Gallery","Legendary Archive","Cosmic Cabinet"].forEach((n,k)=>{const T=[10,25,50,100,150,200][k];U.push({id:'q'+k,n,c:[1e5,1e8,1e11,1e14,1e17,1e20][k],d:`All production +5%.<br><i>Unlocks at ${T} achievements</i>`,sp:'Trophy',col:'#ff8bd6',ok:()=>ach.size>=T,fx:()=>glob*=1.05})});
["Offshore Account","Shell Company","Lobbyist","Tax Loophole","Golden Parachute","Insider Info","Monopoly Money","Reality Bank"].forEach((n,k)=>{const T=[1e15,1e17,1e19,1e21,1e24,1e27,1e30,1e33][k];U.push({id:'h'+k,n,c:T,d:`All production +10%.<br><i>Unlocks after earning $${f(T)}</i>`,sp:'Mint',col:'#d44',ok:()=>tot>=T,fx:()=>glob*=1.1})});
uk='';recalc();
/* more achievements */
const ach2=(arr,names,d,c)=>arr.forEach((T,i)=>A.push({id:'x'+A.length,n:names[i],d:d(T),ok:()=>c(T)})),pl=T=>T>1?'s':'';
const nb=()=>own.reduce((a,b)=>a+b,0),N=x=>x.split(',');
ach2([10,25,50,100,200,300,500,750,1000,1500],N("Small Business,Growing Business,Local Chain,Regional Empire,National Brand,Corporate Giant,Global Conglomerate,Mega Corporation,Planet-Sized Payroll,Economy Unto Itself"),T=>`Own ${T} buildings in total`,T=>nb()>=T);
ach2([60,300,600,1800,3600,7200,18000,36000,86400],N("Just Getting Started,Coffee Break,Settling In,Half Hour Well Spent,Hour of Power,Time Flies,Clocked In,Marathon Session,A Full Day of Dollars"),T=>`Play for ${fmtT(T)}`,T=>play>=T);
ach2([1,10,50,100,500,1000],N("Lucky Strike,Crit Happens,Critical Thinking,Critical Mass,Crit Machine,Crit Overlord"),T=>`Land ${T} crit${pl(T)}`,T=>sx.cr>=T);
ach2([10,25,50],N("Warming Up,On a Roll,Unstoppable"),T=>`Reach a ${T} click combo`,T=>sx.mc>=T);
ach2([1,5,10,25,50,100,250],N("First Ingot,Small Stash,Ingot Collector,Gold Bar Tender,Bullion Baron,Vault of Gold,Ingot Tycoon"),T=>`Harvest ${T} golden ingot${pl(T)}`,T=>sx.hv>=T);
ach2([1,10,50,100,500],N("First Trade,Day Trader,Market Regular,Floor Veteran,Wolf of Bill Street"),T=>`Sell stocks ${T} time${pl(T)}`,T=>sx.sl>=T);
ach2([1,10,25,100,250,1000],N("First Strike,Pocket Jingle,Coin Hobbyist,Mint Condition,Heavy Metal,Coinage King"),T=>`Press ${T} coin${pl(T)} at the mint`,T=>sx.cn>=T);
ach2([1,3,5,8],N("Spare Change,Coin Jar,Numismatist,Full Collection"),T=>`Collect ${T} different coin${pl(T)}`,T=>uniq()>=T);
ach2([250,2500,25000,2.5e5,1e6],N("Warm Fingers,Clicker's Callus,Finger Marathon,Carpal Legend,Million Click March"),T=>`Click ${f(T)} times`,T=>tc>=T);
ach2([100,177,277,377],N("Gold Hunter,Gold Fever,Gold Magnet,Golden Legend"),T=>`Click ${T} golden bills`,T=>gc>=T);
ach2([1e11,1e13,1e15,1e18,1e21],N("Cash Fountain,Money Geyser,Dollar Waterfall,Economy Tsunami,Income Supernova"),T=>`Reach $${f(T)} per second`,T=>dps()>=T);
ach2([1e21,1e24,1e30,1e36],N("Sextillionaire,Septillionaire,Nonillionaire,Undecillionaire"),T=>`Earn $${f(T)} in one run`,T=>tot>=T);
ach2([1e3,1e6,1e9,1e12,1e15,1e18,1e21],N("Fat Wallet,Rainy Day Fund,Piggy Bank Overflow,Mattress Stuffer,Bank Run Survivor,Vault Dweller,Swimming in It"),T=>`Hold $${f(T)} at once`,T=>$>=T);
ach2([1,5,10,25,50,100,250],N("First Promotion,Upskilled,Double Digits,Corporate Ladder,Master Class,Peak Performance,Beyond Max Level"),T=>`Reach ${T} total building level${pl(T)}`,T=>lvl.reduce((a,b)=>a+b,0)>=T);
ach2([75,100,125,144],N("Upgrade Enthusiast,Century of Upgrades,Upgrade Addict,A Gross of Upgrades"),T=>`Buy ${T} upgrades`,T=>bought.size>=T);
ach2([10,25,50,100,150,200],N("Trophy Starter,Trophy Shelf Filled,Half Century,Trophy Hoarder,Award Season,Hall of Fame"),T=>`Unlock ${T} achievements`,T=>ach.size>=T);
ach2([1],N("Brand Identity"),()=>'Rename your factory',()=>sx.rn>=1);ach2([1,10],N("Tinkerer,Control Freak"),T=>`Open settings ${T} time${pl(T)}`,T=>sx.op>=T);ach2([1],N("Red Line"),()=>'Use Overclock',()=>sx.oc>=1);
ach2([1,10],N("Piggy Bank,Compound Interest Fan"),T=>`Make ${T} savings deposit${pl(T)}`,T=>sx.dp>=T);ach2([1e6,1e9,1e12],N("Nest Egg,Golden Nest Egg,Retirement Sorted"),T=>`Keep $${f(T)} in savings`,T=>sx.sv>=T);
B.forEach((b,i)=>{[150,200,250,300].forEach((T,k)=>A.push({id:`ae${i}_${T}`,n:`${b[0]} ${["Army","Empire","Dynasty","Dominion"][k]}`,d:`Own ${T} ${b[0]}s`,ok:()=>own[i]>=T}));[1,5,10].forEach((T,k)=>A.push({id:`al${i}_${T}`,n:`${b[0]} ${["Trainee","Specialist","Grandmaster"][k]}`,d:`Take ${b[0]} to level ${T}`,ok:()=>lvl[i]>=T}))});
/* golden ingots */
const ig=document.createElement('div');ig.id='ig';ig.appendChild(spr('Ingot','28px'));ig.insertAdjacentHTML('beforeend','<div><span></span><div id="igb"><i></i></div></div>');document.getElementById('l').appendChild(ig);
setInterval(()=>{const n=Date.now(),rd=n>=ripe;ig.classList.toggle('rdy',rd);ig.querySelector('span').innerHTML='INGOTS: '+ing+(rd?' - TAP TO HARVEST!':' - ripe in '+fmtT((ripe-n)/1e3))+'<br><small style="color:#8e86b5">Spend ingots with LEVEL UP in the store</small>';ig.querySelector('i').style.width=Math.min(100,100-(ripe-n)/3e3)+'%'},300);
ig.onclick=e=>{if(Date.now()<ripe){snd(150,.08,'square',.03);return}const g=Math.random()<.05?5:Math.random()<.2?2:1;ing+=g;sx.hv++;ripe=Date.now()+3e5/H.ig;burst(e.clientX,e.clientY,30);fly(e.clientX,e.clientY,6);rip(e.clientX,e.clientY);toast(sx.hv==1?'Harvested! Now press LEVEL UP in the store, then click a building!':'Harvested '+g+' golden ingot'+pl(g)+'!',sx.hv==1?8000:3500);[0,7,12,19].forEach((s,k)=>snd(587*2**(s/12),.15,'triangle',.05,0,k*.06));draw()};
const lbt=document.createElement('button');lbt.textContent='LEVEL UP (0 ingots)';lbt.onclick=()=>{ba='lvl';[...qb.children].forEach(c=>c.classList.toggle('on',c==lbt));draw()};qb.appendChild(lbt);
const UL={8:'STOCK MARKET',14:'SAVINGS vault',15:'OVERCLOCK',17:'MINT press'};
function levelUp(i){const c=lvl[i]+1;if(ing<c){snd(110,.15,'sawtooth',.04,.7);toast('Need '+c+' golden ingots',2000);return}ing-=c;lvl[i]++;const r=els[i].getBoundingClientRect();burst(r.left+30,r.top+20,30);fly(r.left+30,r.top+20,8);rip(r.left+30,r.top+20);shk();pop(els[i],'bn');[0,4,7,12,16,19].forEach((s,k)=>snd(392*2**(s/12),.14,'triangle',.05,0,k*.05));toast(B[i][0]+' reached level '+lvl[i]+'! +5% output'+(lvl[i]==1&&UL[i]?' - '+UL[i]+' unlocked in VAULTS!':''),4500);draw()}
els.forEach((d,i)=>{const o=d.onclick;d.onclick=()=>{if(ba=='lvl'){levelUp(i);return}o()}});
/* vaults */
const TBN=[["MARKET",8],["SAVINGS",14],["MINT",17],["OVERCLOCK",15]],CN=["Penny","Nickel","Dime","Quarter","Silver Dollar","Gold Doubloon","Platinum Chip","Cosmic Coin"],CW=[40,25,15,10,5,3,1.5,.5],pc=()=>Math.max(100,dps()*30)*H.cp;let mtab=0,sel=0;
mk.innerHTML='<div class="bx"><button class="xb">X</button><div id="tb"></div><div id="mp"></div></div>';const mp=document.getElementById('mp'),tbE=document.getElementById('tb');
function chart(){const c=document.getElementById('mc');if(!c)return;const x=c.getContext('2d'),W=c.width,H=c.height,h=hs[sel],g=[];for(let k=0;k<h.length;k+=3){const a=h.slice(k,k+3);g.push([a[0],Math.max(...a),Math.min(...a),a[a.length-1]])}
const hi=Math.max(...h)*1.05,lo=Math.min(...h)*.95,Y=v=>H-(v-lo)/(hi-lo||1)*H;x.fillStyle='#0a0814';x.fillRect(0,0,W,H);x.strokeStyle='#2a2640';for(let k=1;k<5;k++){x.beginPath();x.moveTo(0,k*H/5);x.lineTo(W,k*H/5);x.stroke()}
const cw=W/Math.max(g.length,50);g.forEach((q,k)=>{x.fillStyle=x.strokeStyle=q[3]>=q[0]?'#58d36f':'#ff6b6b';const X=k*cw+cw/2;x.beginPath();x.moveTo(X,Y(q[1]));x.lineTo(X,Y(q[2]));x.stroke();x.fillRect(X-cw/2+1,Math.min(Y(q[0]),Y(q[3])),cw-2,Math.max(2,Math.abs(Y(q[0])-Y(q[3]))))});
x.setLineDash([4,4]);x.strokeStyle='#ffd84a';const py=Y(h[h.length-1]);x.beginPath();x.moveTo(0,py);x.lineTo(W,py);x.stroke();x.setLineDash([]);x.fillStyle='#8e86b5';x.font='9px monospace';x.fillText('$'+f(hi*bp),4,11);x.fillText('$'+f(lo*bp),4,H-4)}
mrender=function(){const lk=i=>lvl[i]<1;if(lk(TBN[mtab][1])){const q=TBN.findIndex(t=>!lk(t[1]));if(q>=0)mtab=q}const L=!lk(TBN[mtab][1]);tbE.innerHTML=TBN.map((t,k)=>lk(t[1])?'':`<button data-a="tab" data-i="${k}" class="${k==mtab?'on':''}">${t[0]}${lk(t[1])?' [LOCKED]':''}</button>`).join('');let h='';
if(!L)h=`<div class="fl" style="display:block;padding:20px 0">Nothing here yet! Use LEVEL UP (golden ingots) in the store: Central Bank unlocks the Stock Market, Alien Bank the Savings vault, Time Machine Overclock, and Dimension Mint the Coin Press.</div>`;
else if(mtab==0){const p=px(sel),sh=stk.sh[sel];h=`<div class="mw"><div class="tl">`+SN.map((n,i)=>`<div class="tk ${i==sel?'on':''}" data-a="pick" data-i="${i}"><b>${n}</b><span>$${f(px(i))}</span><i class="${ml[i]>=0?'up':'dn'}">${ml[i]>=0?'+':'-'}${(Math.abs(ml[i])*100).toFixed(1)}%</i></div>`).join('')+`</div><div><canvas id="mc" width="380" height="180"></canvas><div>${SN[sel]} @ $${f(p)} | Held ${f(sh)} | P/L <b class="${sh*p>=stk.cb[sel]?'up':'dn'}">$${f(sh*p-stk.cb[sel])}</b></div><div><button data-a="b1">BUY 1%</button><button data-a="b25">BUY 25%</button><button data-a="bm">BUY MAX</button><button data-a="s25">SELL 25%</button><button data-a="s50">SELL 50%</button><button data-a="sa">SELL ALL</button></div><div>Cash $${f($)} | Realized $${f(stk.pf)}</div></div></div>`}
else if(mtab==1)h=`<div>Balance <b>$${f(sx.sv)}</b> | Cash $${f($)}</div><div>Earns 0.02% interest per second while the balance is under one hour of your income ($${f(dps()*3600)}).</div><button data-a="dep">DEPOSIT 25%</button><button data-a="dall">DEPOSIT ALL</button><button data-a="wd">WITHDRAW ALL</button>`;
else if(mtab==2)h=`<div>Press cost $${f(pc())} | Collected ${uniq()}/8 (+${uniq()*3}% production)</div><div>Duplicates are melted for a 30% refund.</div><button data-a="p1">PRESS x1</button><button data-a="p10">PRESS x10</button><div class="cg">`+CN.map((n,i)=>`<div class="cc ${sx.c[i]?'':'lo'}"><img src="${mi}" style="filter:hue-rotate(${i*45}deg)"><br>${sx.c[i]?n:'???'}<br>x${sx.c[i]}</div>`).join('')+`</div>`;
else h=`<div>OVERCLOCK: all production x3 for 30 seconds. Cooldown 5 minutes.</div><button data-a="oc">${occ>Date.now()?'COOLDOWN '+fmtT((occ-Date.now())/1e3):'OVERCLOCK!'}</button>`;
mp.innerHTML=h;if(mtab==0&&L)chart()};
setInterval(()=>{if(mk.style.display=='flex')mrender()},1000);
mp.onclick=e=>{const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a,i=+b.dataset.i,p=px(sel),X=e.clientX,Y=e.clientY,no=()=>snd(110,.15,'sawtooth',.04,.7);
if(a=='tab'){mtab=i}else if(a=='pick'){sel=i}
else if(a[0]=='b'){const n=Math.floor($*(a=='bm'?1:a=='b25'?.25:.01)/p);if(n<1)return no();const c=n*p;$-=c;stk.sh[sel]+=n;stk.cb[sel]+=c;snd(500,.08,'triangle',.04)}
else if(a[0]=='s'){const sh=stk.sh[sel],n=a=='sa'?sh:Math.floor(sh*(a=='s25'?.25:.5));if(n<1)return no();const pr=n*p,bs=stk.cb[sel]*n/sh,pf=pr-bs;$+=pr;stk.pf+=pf;stk.cb[sel]-=bs;stk.sh[sel]-=n;sx.sl++;toast((pf>=0?'SOLD! Profit $':'SOLD. Loss $')+f(Math.abs(pf)),3500);if(pf>0){burst(X,Y,25);fly(X,Y,6)}snd(pf>=0?700:200,.15,'triangle',.05)}
else if(a=='dep'||a=='dall'){const d=a=='dall'?$:$*.25;if(d<1)return no();$-=d;sx.sv+=d;sx.dp++;snd(600,.1,'triangle',.04)}else if(a=='wd'){if(sx.sv<1)return no();$+=sx.sv;sx.sv=0;snd(800,.1,'triangle',.04)}
else if(a=='p1'||a=='p10'){const n=a=='p1'?1:10;let got=0;for(let k=0;k<n;k++){const c=pc();if($<c)break;$-=c;let r=Math.random()*100,j=0;while(j<7&&r>=CW[j]){r-=CW[j];j++}sx.cn++;if(sx.c[j]++==0){toast('NEW COIN: '+CN[j]+'! +3% production',4000);burst(X,Y,30);[0,7,12,16].forEach((s,q)=>snd(659*2**(s/12),.14,'triangle',.05,0,q*.05))}else{$+=c*.3;got++}}if(!sx.cn)return no();snd(1000,.05,'square',.03)}
else if(a=='oc'){if(occ>Date.now()||oc>Date.now())return no();oc=Date.now()+3e4*H.ov;occ=Date.now()+3e5;sx.oc++;burst(X,Y,40);shk();toast('OVERCLOCK! Production x3 for 30s',4000);[0,5,10,15].forEach((s,k)=>snd(220*2**(s/12),.15,'sawtooth',.04,0,k*.05))}
draw();mrender()};
setInterval(()=>{if(lvl[14]>=1&&sx.sv<dps()*3600)sx.sv+=sx.sv*.0002*H.sv},1000);
const o3=lb3.onclick;lb3.onclick=()=>{sx.op++;o3()};
document.querySelectorAll('.gd').forEach(g=>g.remove());
setInterval(()=>{const n=Date.now();document.querySelectorAll('.gd').forEach(g=>{if(!(+g.dataset.x>n))g.remove()})},500);
const acl=document.createElement('button');acl.id='acl';acl.textContent='CLEAR ALL ACHIEVEMENTS';acl.onclick=()=>acs.querySelectorAll('.ac').forEach(c=>c.remove());acs.prepend(acl);
const hint=document.createElement('div');hint.className='hint';qb.after(hint);const uh2=up.previousElementSibling;
setInterval(()=>{lbt.textContent='LEVEL UP ('+ing+' ingot'+(ing==1?'':'s')+')';lbt.classList.toggle('hot',ing>0&&ba!='lvl');
hint.textContent=ba=='lvl'?'LEVEL UP MODE: click a building to spend golden ingots on it (+5% output per level). Level 1 of Bank, Factory, Mint and Central Bank unlocks minigames in VAULTS. Pick x1 to go back to buying.':'Click a building to buy it. Press LEVEL UP to spend golden ingots.';
const rd=up.querySelectorAll('.u:not(.no)').length;uh2.innerHTML='UPGRADES <small>'+(rd?rd+' ready - click an icon to buy!':'hover an icon for details')+'</small>'},300);
FL.push("Mining dollars from lunar dust. Moon cheese is extra.","Terraforming, one overpriced latte at a time.","Rocks, but each one is worth a fortune.","A giant sphere around a star. Utility bills are enormous.","Aliens accept all currencies. Especially yours.","Yesterday's profits, delivered tomorrow.","Same factory, but in a better universe.","Prints dollars between dimensions.","Insert card. Receive infinity.","A whole galaxy on the payroll.","Locked with a key that does not exist.","Trading across all of space and time.","Prints reality. Prints money. Mostly money.","One bank to rule every universe.","Worshipped by interns everywhere.","The press that never stops pressing.","The last treasury. Or is it?","It started with a bang. And a dollar.","An economy that outlives the stars.","Everything collapses into one very rich dot.");
/* v4 */
function bigPop(m,x,y){const d=document.createElement('div');d.className='bp';d.textContent=m;d.style.left=(h=>Math.min(innerWidth-h,Math.max(h,x)))(innerWidth<600?innerWidth*.4:120)+'px';d.style.top=y+'px';document.body.appendChild(d);setTimeout(()=>d.remove(),4200)}
function nz(d,v,fq,dl=0,q=1){try{if(muted)return;AC.resume();const n=AC.sampleRate*d|0,b=AC.createBuffer(1,n,AC.sampleRate),a=b.getChannelData(0);for(let i=0;i<n;i++)a[i]=Math.random()*2-1;const sr=AC.createBufferSource(),fl=AC.createBiquadFilter(),g=AC.createGain(),t=AC.currentTime+dl;sr.buffer=b;fl.type='bandpass';fl.frequency.value=fq;fl.Q.value=q;g.gain.setValueAtTime(v*ST.vol*2,t);g.gain.exponentialRampToValueAtTime(.0001,t+d);sr.connect(fl);fl.connect(g);g.connect(mst());sr.start(t)}catch(e){}}
function sClick(){if(!ST.csd)return;const r=1+Math.random()*.08;nz(.05,.07,2400*r,0,2);snd(210*r,.09,'sine',.07,.6);snd(1400*r,.03,'sine',.012)}
function sBuy(i){nz(.03,.05,4000);snd(1318,.18,'sine',.05);snd(1760,.28,'sine',.04,1,.07);snd(330+i*8,.12,'triangle',.05,.7)}
function sUp(){nz(.04,.06,3500);[0,4,7,12,16].forEach((s,k)=>{snd(523*2**(s/12),.22,'triangle',.05,0,.04+k*.06);snd(1046*2**(s/12),.18,'sine',.02,0,.04+k*.06)})}
function sAch(){[0,4,7,12].forEach((s,k)=>snd(659*2**(s/12),.35,'sine',.05,0,k*.08));nz(.08,.03,6000,.3)}
function sGold(){for(let k=0;k<7;k++)snd(1200+Math.random()*1800,.25,'sine',.035,1,k*.045);snd(784,.4,'triangle',.05)}
function sCrit(m){nz(.08,.08,1200);[0,7,12].concat(m?[19,24]:[]).forEach((s,k)=>snd(440*2**(s/12),.2,'triangle',.06,0,k*.05))}
/* settings+ */
TH.push(["#1a1410","#2a1e16","#40302a","#140e0a","#7a5a3a"],["#101010","#1c1c1c","#2c2c2c","#080808","#555555"]);SET.find(r=>r[1]=='theme')[2].push(["AMBER",4],["MONO",5]);
function addRow(l,k,o){const d=document.createElement('div'),b=document.createElement('button'),idx=()=>Math.max(0,o.findIndex(x=>x[1]===ST[k]));d.innerHTML='<span>'+l+'</span>';b.textContent=o[idx()][0];b.onclick=()=>{ST[k]=o[(idx()+1)%o.length][1];b.textContent=o[idx()][0];applyST();snd(400,.05,'triangle',.03)};d.appendChild(b);document.getElementById('sr').appendChild(d)}
[["Popup size","psz",[["SMALL",.7],["NORMAL",1],["LARGE",1.5],["HUGE",2]]],["Income popups","pp",O2],["Achievement popups","ap",O2],["Background","bg",[["CHECKER",0],["DOTS",1],["PLAIN",2]]],["Building view","bv",O2],["Tooltips","tt",O2],["Hover sounds","hs",O2],["Click sound","csd",O2]].forEach(r=>addRow(...r));
const _as=applyST;applyST=function(){_as();const c=document.body.classList;document.documentElement.style.setProperty('--fs',ST.psz);c.toggle('bgd',ST.bg==1);c.toggle('bgp',ST.bg==2);c.toggle('nbv',!ST.bv);c.toggle('ntt',!ST.tt);try{localStorage.setItem('dcs',JSON.stringify(ST))}catch(e){}};applyST();
/* stats: purchased upgrades */
const ug=document.createElement('div');ug.id='ug';const ugh=document.createElement('h3');ov.firstChild.append(ugh,ug);
function ugrid(){ug.innerHTML='';U.filter(u=>bought.has(u.id)).sort((a,b)=>a.c-b.c).forEach(u=>{const d=document.createElement('div');d.className='ut';d.style.borderColor=u.col;d.appendChild(uic(u));d.onmouseenter=()=>{window.tipLock=1;tip.innerHTML=`<h3>${u.n}</h3><div>${u.d}</div><hr><div>Paid $${f(u.c)}</div>`;place(d)};d.onmouseleave=()=>{window.tipLock=0;tip.style.display='none'};ug.appendChild(d)});ugh.textContent='Upgrades purchased '+bought.size+'/'+U.length+' | Legacy '+Math.max(0,hu.size-1)+'/'+(HN.length-1)}
const _gr=grid;grid=function(){_gr();ugrid()};
/* legacy tree */
const BR=[["Star"],["Pen"],["dollar"],["Crown"],["Trophy"],["Ingot"]],HD=[
[["Pocket Dividend",1,'+10% production',()=>H.p*=1.1],["Compound Interest",3,'+15% production',()=>H.p*=1.15],["Economies of Scale",8,'+20% production',()=>H.p*=1.2],["Monopoly Powers",25,'+30% production',()=>H.p*=1.3],["Heavenly Dividend",80,'+50% production',()=>H.p*=1.5]],
[["Tap Training",1,'+25% click power',()=>H.c*=1.25],["Lucky Fingers",3,'+3% crit chance',()=>H.cr+=.03],["Iron Wrist",8,'+50% click power',()=>H.c*=1.5],["Crit Master",25,'+5% crit chance',()=>H.cr+=.05],["Divine Touch",80,'+100% click power',()=>H.c*=2]],
[["Gilded Radar",1,'Golden bills appear 10% more often',()=>H.gf*=1.1],["Lingering Glow",3,'Golden bills last 25% longer',()=>H.gd*=1.25],["Heavenly Luck",8,'Golden bills appear 20% more often',()=>H.gf*=1.2],["Storm Chaser",25,'Golden bills last 50% longer',()=>H.gd*=1.5],["Midas Beacon",80,'Golden bills appear 30% more often',()=>H.gf*=1.3]],
[["Legacy",1,'Start each run with $1,000',()=>H.sm+=1e3],["Seed Money",3,'Start each run with $1M more',()=>H.sm+=1e6],["Interns",8,'Start each run with 10 Cursors, Employees and Offices',()=>H.sb+=10],["Trust Fund",25,'Start each run with $1B more',()=>H.sm+=1e9],["Dynasty",80,'Start with 15 more Cursors, Employees and Offices',()=>H.sb+=15]],
[["Bulk Discount",1,'Buildings cost 3% less',()=>H.dc*=.97],["Fertile Vault",3,'Ingots ripen 25% faster',()=>H.ig*=1.25],["Angel Investors",8,'+20% chips from ascending',()=>H.ch*=1.2],["Wholesale",25,'Buildings cost 5% less',()=>H.dc*=.95],["Chip Magnet",80,'+30% chips from ascending',()=>H.ch*=1.3]],
[["Better Rates",1,'Savings earn 50% more interest',()=>H.sv*=1.5],["Cheaper Press",3,'Coin press costs 30% less',()=>H.cp*=.7],["Turbo Clock",8,'Overclock lasts 50% longer',()=>H.ov*=1.5],["Premium Account",25,'Savings earn double interest',()=>H.sv*=2],["Perpetual Motion",80,'Overclock lasts twice as long',()=>H.ov*=2]]];
HN.push({id:'hub',n:'Dollar Legacy',c:0,d:'The heart of your legacy. Prestige level boosts all production.',x:500,y:500,p:null,sp:'Mint',fx:()=>{}});
HD.forEach((br,b)=>br.forEach((n,k)=>{const a=b*Math.PI/3-Math.PI/2,r=95+k*85,o=(k%2?16:-16);HN.push({id:'h'+b+k,n:n[0],c:n[1],d:n[2],fx:n[3],x:500+Math.cos(a)*r-Math.sin(a)*o,y:500+Math.sin(a)*r+Math.cos(a)*o,p:k?'h'+b+(k-1):'hub',sp:BR[b][0]})}));
function hrecalc(){H={p:1,c:1,gf:1,gd:1,ig:1,dc:1,cr:0,ch:1,sm:0,sb:0,ov:1,sv:1,cp:1};hu.add('hub');HN.forEach(n=>hu.has(n.id)&&n.fx())}
const hl=document.createElement('div');hl.id='hl';hl.innerHTML='<div class="bx hx"><button class="xb">X</button><h3>LEGACY TREE</h3><div id="ltc"></div><div id="lts"><div id="ltm"><svg id="ltv" width="1000" height="1000"></svg></div></div></div>';document.body.appendChild(hl);
const ltm=document.getElementById('ltm'),lts=document.getElementById('lts'),bad=(c)=>hc-hcs>=c?'ok':'bad';
HN.forEach(n=>{const d=document.createElement('div');d.style.left=n.x+'px';d.style.top=n.y+'px';d.appendChild(spr(n.sp,'100%'));
d.onmouseenter=()=>{window.tipLock=1;const pr=n.p&&HN.find(q=>q.id==n.p);tip.innerHTML=`<h3>${n.n}</h3><div>${n.d}</div><hr><div>${hu.has(n.id)?'<span class="ok">Owned</span>':'Cost: <span class="'+bad(n.c)+'">'+n.c+' chips</span>'+(pr&&!hu.has(pr.id)?'<br><span class="bad">Requires: '+pr.n+'</span>':'')}</div>`;place(d)};
d.onmouseleave=()=>{window.tipLock=0;tip.style.display='none'};d.onclick=e=>buyH(n,e);ltm.appendChild(d)});
function ltDraw(){document.getElementById('ltc').innerHTML=`Chips available: <b class="up">${hc-hcs}</b> | Prestige level ${hc} (+${hc*2}% production). Ascend from STATS to earn more chips.`;
document.getElementById('ltv').innerHTML=HN.map(n=>{const p=n.p&&HN.find(q=>q.id==n.p);return p?`<line x1="${p.x}" y1="${p.y}" x2="${n.x}" y2="${n.y}" stroke="${hu.has(n.id)?'#ffd84a':'#4a4470'}" stroke-width="4"/>`:''}).join('');
[...ltm.querySelectorAll('.nd,div')].filter(d=>d.parentNode==ltm).forEach((d,i)=>{const n=HN[i],ow=hu.has(n.id),av=!ow&&(!n.p||hu.has(n.p))&&hc-hcs>=n.c;d.className='nd'+(ow?' ow':av?' av':'')})}
function buyH(n,e){if(hu.has(n.id))return;const no=()=>snd(110,.15,'sawtooth',.04,.7);if(n.p&&!hu.has(n.p)){toast('Unlock '+HN.find(q=>q.id==n.p).n+' first',2000);return no()}
if(hc-hcs<n.c){toast('Need '+n.c+' chips (you have '+(hc-hcs)+')',2500);return no()}
hcs+=n.c;hu.add(n.id);hrecalc();burst(e.clientX,e.clientY,40);rip(e.clientX,e.clientY);sUp();toast('Legacy upgrade: '+n.n+' - '+n.d,4000);ltDraw();draw();save(1)}
hl.onclick=e=>{if(e.target==hl||e.target.classList.contains('xb'))hl.style.display='none'};
const lb4=document.createElement('button');lb4.textContent='LEGACY';lm.appendChild(lb4);lb4.onclick=()=>{hl.style.display='flex';ltDraw();lts.scrollLeft=250;lts.scrollTop=250};
hrecalc();
/* 100 more news */
NW.push(...["Local dollar tired of being clicked, starts clicking back","Man shocked to learn money does not grow on trees, plants one anyway","Scientists discover new element: Greedium","Cursor demands to be called 'Pointer' from now on","Factory cat promoted to Chief Napping Officer","Economists agree on something; economy crashes from shock","Intern orders 10,000 staplers by accident, staple stock soars","Dollar bill spotted doing yoga to stay flat","Bank introduces new interest rate: 'vibes'","Pigeon opens savings account, deposits one breadcrumb","Office printer finally works, nobody trusts it","Employees unionize over lack of chairs, receive standing desks and a pep talk","HQ rebrands for the 14th time, still sells dollars","New study: money cannot buy happiness but it can buy a very comfy sad","Accountant discovers a decimal point, takes the day off","Local man trades one big dollar for two small dollars, calls it a profit","Stock market opens, immediately panics","Factory smoke spells 'BUY' in the sky, investors baffled","Dollar bill has existential crisis: 'am I paper or a vibe?'","Cursor injured in clicking accident, returns to work immediately","Mint prints a dollar with the wrong president, nobody notices","Skyscraper too tall, clouds file noise complaint","Employee of the month is a plant. The plant is doing great.","Coffee machine now earns more than the CEO","Bank robber returns money, says the vault was too much responsibility","Dollar wins beauty contest, judges bribed with other dollars","Local economy so strong the squirrels trade acorn futures","Time traveler arrives to buy your stock, leaves with a mug","Moon Mine ships cheese; moon insists cheese is not currency","Alien tourists confused by dollars, offer a shiny rock","Mars Colony votes to rename itself Dollar Mars","Asteroid Belt demands union, workers are rocks, rocks refuse","Dyson Sphere electric bill delivered by rocket","Parallel Universe version of you is richer, files lawsuit","Black Hole ATM swallows card, wallet and two galaxies","Quantum Vault both full and empty until audited","Reality Printer jams, reality briefly in grayscale","Multiverse Bank offers loans in infinite currencies, all dollars","Dollar Deity demands offerings of spare change and snacks","Big Bang Mint recalled: first batch of universe 'a little loud'","Entire economy now fits inside one very smug dot","Fortune cookie reads: 'help, I am trapped in a dollar factory'","Man haggles with vending machine, wins","Goldfish trade bubbles on the bubble exchange","Wall Street bull and bear settle differences over brunch","Taxman audits lemonade stand, finds lemons","Penny proudly claims it is worth every cent","Nickel files complaint: five times more important than a penny","Quarter takes day off to find itself behind a couch","Investor buys the dip, then the dip buys him","CEO's dog has a bigger office than you","Intern mistakes fire drill for team building, wins","New employee asks where the money comes from; HR sweats","Cursor picks up second job as a mouse pointer","Local man pays for pizza in clicks, pizza place accepts","Piggy bank cracks under pressure, news at eleven","Snack machine inflation hits chips, locals devastated","Scientists clone a dollar, now there are two problems","Dollar bill goes viral for being exactly one dollar","Banker's handshake now worth more than his word","Paper cut leads to nation's first paper-cut lawsuit","Mysterious stranger tips factory entire company","Coin flip decides board election, tails never fails","Lost wallet found containing only more wallets","Employees hold Spreadsheet Olympics, pivot tables dominate","Man buys mansion, forgets furniture, calls it minimalism","Banana inflation hits record high, monkeys invest in tropical futures","Your money has a better social life than you","Trending: #BuyHigh #SellLow #WhatCouldGoWrong","Robots ask for a raise; denied, they ask again forever","New app lets you rent your own dollars to yourself","Dollar pyramid collapses; pyramid insists it was always a triangle","Three billionaires and a toaster all claim to own the factory","Local ghost haunts accounting, mostly sighs","Treasure map found: leads to a very expensive parking spot","Mint boss insists on being called Minty","Time Machine goes back to buy low, returns having bought nothing","CEO apologizes for revenue exceeding expectations again","Dollar store opens a dollar store inside a dollar store","Economists predict a recession, a depression, and a mild shrug","Vault door stuck, locksmith asks for only a small fortune","Employees stage walkout, walk right back for free donuts","Cashier counts to 100, loses track at 7, starts over","Dragon hoard audit finds mostly spare change and tax forms","Yacht purchase makes headlines; yacht makes bigger waves","Banana peel causes one small slip for man, one giant slip for the economy","Millionaire spotted clipping coupons, nobody understands","ATM spits out receipt longer than a novel","Calculator overheats trying to count your dollars","New currency called the Click, exchange rate one click per click","Local man's sock drawer discovered to be an offshore account","Dollar bill sues for being folded without consent","Stonks go up, down, sideways, then home","Bank manager promoted to Senior Bank Manager Deluxe","Accounting finds a one cent error, calls an all-hands meeting","Dollar bill rides escalator, nobody asks where it is going","Intern's coffee run becomes the most profitable division","Local mime refuses to pay, claims invisible wallet","Pocket lint valued at $4.50 in surprising auction","Newest hire already requesting title change to Wizard","Money printing machine retires, watches sunsets","Scientists confirm: dollars are 98% imagination, 2% ink"].map(x=>()=>x));
/* dev tools (rename factory to testermonty) */
const dv=document.createElement('div');dv.id='dv';dv.innerHTML='<div class="bx"><button class="xb">X</button><h3>DEV TOOLS</h3><div id="dvb"></div><div id="dvi"><input id="dva" placeholder="amount, e.g. 1e12"><button>SET MONEY</button><button>ADD MONEY</button></div><div class="fl" style="display:block">Rename your factory to testermonty again to reopen.</div></div>';document.body.appendChild(dv);
const DV=[["+$1M",()=>$+=1e6],["+$1B",()=>$+=1e9],["+$1T",()=>$+=1e12],["Money x1000",()=>$*=1000],["+10 chips",()=>hc+=10],["+100 chips",()=>hc+=100],["+10 ingots",()=>ing+=10],["Ripen ingot",()=>ripe=0],["+10 of every building",()=>own=own.map(x=>x+10)],["+100 of every building",()=>own=own.map(x=>x+100)],["+1 level on all",()=>lvl=lvl.map(x=>x+1)],["Spawn golden bill",()=>{document.querySelectorAll('.gd').forEach(g=>g.remove());golden()}],["Cash storm",()=>storm()],["Frenzy x7 (77s)",()=>fz=Date.now()+77e3],["Click frenzy",()=>cz=Date.now()+7e3],["Set earned to 1e15",()=>tot=Math.max(tot,1e15)],["Unlock all achievements",()=>A.forEach(a=>ach.add(a.id))],["Reset legacy tree",()=>{hu.clear();hcs=0;hrecalc()}],["Clear achievement cards",()=>acs.querySelectorAll('.ac').forEach(c=>c.remove())]];
DV.forEach(([l,fn])=>{const b=document.createElement('button');b.textContent=l;b.onclick=()=>{fn();draw();upDraw();toast('DEV: '+l,1500)};document.getElementById('dvb').appendChild(b)});
const [dvs,dvadd]=document.getElementById('dvi').querySelectorAll('button'),dva=document.getElementById('dva');
dvs.onclick=()=>{const n=Number(dva.value);if(isFinite(n)){$=n;draw();toast('DEV: money set',1500)}};dvadd.onclick=()=>{const n=Number(dva.value);if(isFinite(n)){$+=n;draw();toast('DEV: money added',1500)}};
dv.onclick=e=>{if(e.target==dv||e.target.classList.contains('xb'))dv.style.display='none'};
function devOpen(){dv.style.display='flex';toast('DEV TOOLS unlocked',2000)}
/* ===== v5 ADDITIONS (append to END of game.js) ===== */
/* custom gold cursor with green $ (clearly unlike the white Cursor sprites) */
(function(){const A=["k...........","kk..........","kyk.........","kyyk........","kyyyk.......","kyyyyk......","kyyyyyk.....","kyyyyyyk....","kyyyyyyyk...","kyyyyyykkk..","kyykyyk.....","kykkyyk.....","kk..kyyk....","....kyyk....",".....kk....."],
D=["..G..",".GGGG","G.G..",".GGG.","..G.G","GGGG.","..G.."],c=document.createElement('canvas');c.width=32;c.height=30;const x=c.getContext('2d');
A.forEach((r,j)=>[...r].forEach((p,i)=>{if(p=='.')return;x.fillStyle=p=='k'?'#12101c':r[i+1]=='k'?'#ff9a1f':'#ffd84a';x.fillRect(i*2,j*2,2,2)}));
D.forEach((r,j)=>[...r].forEach((p,i)=>{if(p=='G'){x.fillStyle='#58d36f';x.fillRect(22+i*2,14+j*2,2,2)}}));
document.documentElement.style.setProperty('--cur',`url(${c.toDataURL()}) 0 0, auto`)})();

/* golden bills: money pops up exactly where you click (old code read the rect after removing the bill) */
function golden(){if(document.querySelector('.gd:not(.sm)'))return;const g=document.createElement('div');g.className='gd';g.dataset.x=Date.now()+20000*H.gd;g.style.animationDuration=20*H.gd+'s';g.style.left=10+Math.random()*80+'vw';g.style.top=10+Math.random()*70+'vh';g.appendChild(bill());
g.onclick=e=>{const x=e.clientX,y=e.clientY;g.remove();gc++;const q=Math.random();let m,a=0;
if(q<.45){fz=Date.now()+77e3;m='FRENZY! Production x7 for 77s'}else if(q<.8){a=Math.min(dps()*900,$*.15)+13;$+=a;tot+=a;m='LUCKY! +$'+f(a)}else if(q<.92){cz=Date.now()+7e3;m='CLICK FRENZY! Clicks x777 for 7s'}else{storm();m='CASH STORM! Grab the bills!'}
bigPop(m,x,y);burst(x,y,24);fly(x,y,10);shk();sGold();draw()};
document.body.appendChild(g);setTimeout(()=>g.remove(),20000*H.gd)}
function storm(){for(let k=0;k<25;k++)setTimeout(()=>{const g=document.createElement('div');g.className='gd sm';g.dataset.x=Date.now()+7000;g.style.cssText=`left:${5+Math.random()*90}vw;top:${5+Math.random()*80}vh;animation-duration:7s`;g.appendChild(bill());
g.onclick=e=>{const x=e.clientX,y=e.clientY;g.remove();const a=dps()*15+cm*cx()*30+10;$+=a;tot+=a;burst(x,y,10);fly(x,y,2);snd(900,.05,'triangle',.04,1.3);
const t=document.createElement('div');t.className='f crit';t.textContent='+$'+f(a);t.style.cssText=`left:${x-20}px;top:${y-20}px;--dx:0px`;document.body.appendChild(t);setTimeout(()=>t.remove(),4000);draw()};
document.body.appendChild(g);setTimeout(()=>g.remove(),7000)},k*180)}

/* legacy stat defaults: crits/mega crits/offline now come from the tree */
function hrecalc(){H={p:1,c:1,gf:1,gd:1,ig:1,dc:1,cr:0,cm:5,mg:0,mm:50,of:0,oh:2,ch:1,sm:0,sb:0,ov:1,sv:1,cp:1};hu.add('hub');HN.forEach(n=>hu.has(n.id)&&n.fx())}
bt.onclick=e=>{let v=(cm*cx()+dps()*cpd)*(cz>Date.now()?1:1+Math.min(cb,50)*.02);const kr=Math.random(),kc=kr<H.mg?H.mm:kr<H.mg+H.cr?H.cm:1;v*=kc;window.kcrit=kc;if(kc>10)sx.mg=(sx.mg||0)+1;$+=v;tot+=v;tc++;cb++;clearTimeout(ct);ct=setTimeout(()=>cb=0,900);sClick();pop(bt,'q');burst(e.clientX,e.clientY,cb%10?5:16);
const t=document.createElement('div');t.className='f'+(kc>1?' crit':'');t.textContent=(kc>10?'MEGA CRIT! ':kc>1?'CRIT! ':'')+'+$'+f(v);t.style.cssText=`left:${e.clientX-10}px;top:${e.clientY-20}px;--dx:${Math.random()*60-30}px`;document.body.appendChild(t);setTimeout(()=>t.remove(),4000);draw()};

/* ===== LEGACY TREE v2: 8 branches x 7, draggable galaxy, fog of war, rebirth button ===== */
const BS=["Star","Pen","dollar","Crown","Trophy","Ingot","Space Corp","Employee"],
HD2=[
[["Pocket Dividend",1,'+10% production',()=>H.p*=1.1],["Compound Interest",3,'+15% production',()=>H.p*=1.15],["Economies of Scale",8,'+20% production',()=>H.p*=1.2],["Monopoly Powers",25,'+30% production',()=>H.p*=1.3],["Heavenly Dividend",80,'+50% production',()=>H.p*=1.5],["Cosmic Dividend",200,'+75% production',()=>H.p*=1.75],["Dollar Ascendant",500,'x2 production',()=>H.p*=2]],
[["Tap Training",1,'+25% click power',()=>H.c*=1.25],["Lucky Fingers",3,'+25% click power',()=>H.c*=1.25],["Iron Wrist",8,'+50% click power',()=>H.c*=1.5],["Steady Aim",25,'+50% click power',()=>H.c*=1.5],["Divine Touch",80,'+100% click power',()=>H.c*=2],["Finger of God",200,'x2 click power',()=>H.c*=2],["Click Ascendant",500,'x3 click power',()=>H.c*=3]],
[["Gilded Radar",1,'Golden bills appear 10% more often',()=>H.gf*=1.1],["Lingering Glow",3,'Golden bills last 25% longer',()=>H.gd*=1.25],["Heavenly Luck",8,'Golden bills appear 20% more often',()=>H.gf*=1.2],["Storm Chaser",25,'Golden bills last 50% longer',()=>H.gd*=1.5],["Midas Beacon",80,'Golden bills appear 30% more often',()=>H.gf*=1.3],["Golden Era",200,'Golden bills appear 40% more often',()=>H.gf*=1.4],["Heart of Gold",500,'Golden bills last twice as long',()=>H.gd*=2]],
[["Legacy",1,'Start each run with $1,000',()=>H.sm+=1e3],["Seed Money",3,'Start each run with $1M more',()=>H.sm+=1e6],["Interns",8,'Start each run with 10 Cursors, Employees and Offices',()=>H.sb+=10],["Trust Fund",25,'Start each run with $1B more',()=>H.sm+=1e9],["Dynasty",80,'Start with 15 more Cursors, Employees and Offices',()=>H.sb+=15],["Venture Seed",200,'Start each run with $1T more',()=>H.sm+=1e12],["Old Money",500,'Start with 25 more Cursors, Employees and Offices',()=>H.sb+=25]],
[["Bulk Discount",1,'Buildings cost 3% less',()=>H.dc*=.97],["Fertile Vault",3,'Ingots ripen 25% faster',()=>H.ig*=1.25],["Angel Investors",8,'+20% chips from ascending',()=>H.ch*=1.2],["Wholesale",25,'Buildings cost 5% less',()=>H.dc*=.95],["Chip Magnet",80,'+30% chips from ascending',()=>H.ch*=1.3],["Chip Vacuum",200,'+40% chips from ascending',()=>H.ch*=1.4],["Bargain Empire",500,'Buildings cost 8% less',()=>H.dc*=.92]],
[["Better Rates",1,'Savings earn 50% more interest',()=>H.sv*=1.5],["Cheaper Press",3,'Coin press costs 30% less',()=>H.cp*=.7],["Turbo Clock",8,'Overclock lasts 50% longer',()=>H.ov*=1.5],["Premium Account",25,'Savings earn double interest',()=>H.sv*=2],["Perpetual Motion",80,'Overclock lasts twice as long',()=>H.ov*=2],["Gold Standard",200,'Savings earn double interest again',()=>H.sv*=2],["Time Dilation",500,'Coin press costs 40% less',()=>H.cp*=.6]],
[["Critical Hits",1,'Unlock crits: 5% chance for x5 clicks',()=>H.cr+=.05],["Sharper Edge",3,'+3% crit chance',()=>H.cr+=.03],["Brutal Strikes",8,'Crits hit x7 instead of x5',()=>H.cm+=2],["Mega Crits",25,'Unlock MEGA crits: 0.5% chance for x50 clicks',()=>H.mg+=.005],["Mega Odds",60,'+0.5% mega crit chance',()=>H.mg+=.005],["Mega Power",150,'Mega crits hit x100 instead of x50',()=>H.mm+=50],["Crit God",400,'+5% crit chance, +1% mega chance, crits x10',()=>{H.cr+=.05;H.mg+=.01;H.cm+=3}]],
[["Night Shift",1,'Employees earn 10% while you are away (up to 2h)',()=>H.of+=.1],["Overtime Pay",3,'+10% offline earnings',()=>H.of+=.1],["Long Hours",8,'Offline cap +4h',()=>H.oh+=4],["Remote Work",25,'+20% offline earnings',()=>H.of+=.2],["Weekend Shift",60,'Offline cap +6h',()=>H.oh+=6],["Global Offices",150,'+30% offline earnings',()=>H.of+=.3],["24/7 Operations",400,'+20% offline earnings, cap +12h',()=>{H.of+=.2;H.oh+=12}]]];
HN.length=0;
HN.push({id:'hub',n:'Dollar Legacy',c:0,d:'The heart of your legacy. Each chip gives +2% production. Only upgrades next to ones you own are visible.',x:800,y:800,p:null,sp:'Mint',fx:()=>{}});
HD2.forEach((br,b)=>br.forEach((n,k)=>{const a=b*Math.PI/4-Math.PI/2,r=110+k*95,o=k%2?18:-18;HN.push({id:'h'+b+k,n:n[0],c:n[1],d:n[2],fx:n[3],x:800+Math.cos(a)*r-Math.sin(a)*o,y:800+Math.sin(a)*r+Math.cos(a)*o,p:k?'h'+b+(k-1):'hub',sp:BS[b]})}));
document.getElementById('hl').remove();
const nhl=document.createElement('div');nhl.id='hl';nhl.innerHTML='<div class="bx hx"><button class="xb">X</button><h3>LEGACY TREE</h3><div id="ltc"></div><button id="lasc"></button><div class="hint">Drag to explore the galaxy. Only upgrades next to ones you own are visible.</div><div id="lts"><div id="ltm"><svg id="ltv" width="1600" height="1600"></svg></div></div></div>';document.body.appendChild(nhl);
const lts2=document.getElementById('lts'),ltm2=document.getElementById('ltm'),lsv=document.getElementById('ltv'),lasc=document.getElementById('lasc');
let pnx=0,pny=0,drg=null,mvd=0;
function pan(x,y){pnx=Math.min(0,Math.max(lts2.clientWidth-1600,x));pny=Math.min(0,Math.max(lts2.clientHeight-1600,y));ltm2.style.transform=`translate(${pnx}px,${pny}px)`;lts2.style.setProperty('--px',pnx);lts2.style.setProperty('--py',pny)}
lts2.onpointerdown=e=>{drg={x:e.clientX-pnx,y:e.clientY-pny,sx:e.clientX,sy:e.clientY};mvd=0};
addEventListener('pointermove',e=>{if(!drg)return;if(Math.abs(e.clientX-drg.sx)+Math.abs(e.clientY-drg.sy)>5)mvd=1;pan(e.clientX-drg.x,e.clientY-drg.y)});
addEventListener('pointerup',()=>drg=null);
HN.forEach(n=>{const d=document.createElement('div');d.className='nd';d.style.left=n.x+'px';d.style.top=n.y+'px';d.appendChild(spr(n.sp,'100%'));n.e=d;
d.onmouseenter=()=>{window.tipLock=1;tip.innerHTML=`<h3>${n.n}</h3><div>${n.d}</div><hr><div>${hu.has(n.id)?'<span class="ok">Owned</span>':'Cost: <span class="'+bad(n.c)+'">'+n.c+' chips</span>'}</div>`;place(d)};
d.onmouseleave=()=>{window.tipLock=0;tip.style.display='none'};d.onclick=e=>{if(!mvd)tBuy(n,e)};ltm2.appendChild(d)});
function tDraw(){document.getElementById('ltc').innerHTML=`Chips available: <b class="up">${hc-hcs}</b> | Prestige level ${hc} (+${hc*2}% production)`;lasc.textContent=sure?'SURE? CLICK AGAIN TO ASCEND':'ASCEND: +'+potn()+' CHIPS (resets your run)';
const vis=n=>hu.has(n.id)||!n.p||hu.has(n.p);let s='';
HN.forEach(n=>{const v=vis(n),ow=hu.has(n.id),p=n.p&&HN.find(q=>q.id==n.p),av=!ow&&(!n.p||hu.has(n.p))&&hc-hcs>=n.c;if(v&&p)s+=`<line x1="${p.x}" y1="${p.y}" x2="${n.x}" y2="${n.y}" stroke="${ow?'#ffd84a':'#6a5aa0'}" stroke-width="4"/>`;
n.e.style.display=v?'':'none';n.e.className='nd'+(ow?' ow':av?' av':'')+(v&&!n._s?' rv':'');n._s=v});lsv.innerHTML=s}
function tBuy(n,e){if(hu.has(n.id))return;const no=()=>snd(110,.15,'sawtooth',.04,.7);if(hc-hcs<n.c){toast('Need '+n.c+' chips (you have '+(hc-hcs)+')',2500);return no()}
hcs+=n.c;hu.add(n.id);hrecalc();burst(e.clientX,e.clientY,40);rip(e.clientX,e.clientY);sUp();toast('Legacy upgrade: '+n.n+' - '+n.d,4000);tDraw();draw();save(1)}
lasc.onclick=()=>{ascend();tDraw()};
nhl.onclick=e=>{if(e.target==nhl||e.target.classList.contains('xb'))nhl.style.display='none'};
lb4.onclick=()=>{nhl.style.display='flex';tDraw();pan(lts2.clientWidth/2-800,lts2.clientHeight/2-800)};
setInterval(()=>{if(nhl.style.display=='flex')tDraw()},500);
hrecalc();
/* offline earnings now come from the tree (needs the 1-line edit in load()) */
if(window.offSec>1){const g=dps()*Math.min(offSec,H.oh*3600)*H.of;if(g>1){$+=g;tot+=g;toast('Employees earned $'+f(g)+' while you were away ('+Math.round(H.of*100)+'%, up to '+H.oh+'h)',6000)}}

/* ===== GRAPHS ===== */
const GH=[];setInterval(()=>{GH.push({d:dps(),e:tot,c:$,k:tc});if(GH.length>400)GH.shift()},2000);
function lineC(id,t,arr,col,lg){const c=document.getElementById(id),x=c.getContext('2d'),W=c.width,h=c.height,L=52,Bt=16,T=16;x.clearRect(0,0,W,h);x.font='9px monospace';x.fillStyle='#ffd84a';x.fillText(t,6,10);
if(arr.length<2){x.fillStyle='#8e86b5';x.fillText('Collecting data... keep playing',L,h/2);return}
const g=v=>lg?Math.log10(Math.max(v,1)):v,vs=arr.map(g);let mn=lg?Math.min(...vs):0,mx=Math.max(...vs);if(mx<=mn)mx=mn+1;
const X=i=>L+(W-L-6)*i/(arr.length-1),Y=v=>h-Bt-(h-Bt-T)*(v-mn)/(mx-mn);
x.strokeStyle='#2a2640';x.fillStyle='#8e86b5';for(let k=0;k<=4;k++){const v=mn+(mx-mn)*k/4,y=Y(v);x.beginPath();x.moveTo(L,y);x.lineTo(W,y);x.stroke();x.fillText(f(lg?10**v:v),2,y+3)}
x.beginPath();vs.forEach((v,i)=>i?x.lineTo(X(i),Y(v)):x.moveTo(X(i),Y(v)));x.strokeStyle=col;x.lineWidth=2;x.stroke();x.lineTo(X(vs.length-1),h-Bt);x.lineTo(L,h-Bt);x.globalAlpha=.18;x.fillStyle=col;x.fill();x.globalAlpha=1;x.lineWidth=1;x.fillStyle='#8e86b5';x.fillText('-'+fmtT((arr.length-1)*2),L,h-3);x.fillText('now',W-24,h-3)}
function barC(id,t,lab,val,lg,pc){const c=document.getElementById(id),h=24+Math.max(lab.length,1)*15;c.height=h;const x=c.getContext('2d'),W=c.width;x.clearRect(0,0,W,h);x.font='9px monospace';x.fillStyle='#ffd84a';x.fillText(t,6,11);
if(!lab.length){x.fillStyle='#8e86b5';x.fillText('Nothing yet',6,34);return}
const g=v=>lg?Math.log10(v+1):v,mx=Math.max(...val.map(g))||1;
lab.forEach((l,i)=>{const y=20+i*15,w=(W-260)*g(val[i])/mx;x.fillStyle='#8e86b5';x.fillText(l.slice(0,18),6,y+10);x.fillStyle=`hsl(${i*37%360},65%,55%)`;x.fillRect(130,y,Math.max(1,w),11);x.fillStyle='#efe9ff';x.fillText(f(val[i])+(pc?' ('+(pc[i]*100).toFixed(1)+'%)':''),136+w,y+10)})}
const gv=document.createElement('div');gv.id='gv';gv.innerHTML='<div class="bx wide"><button class="xb">X</button><h3>ECONOMY GRAPHS (history resets on reload)</h3>'+[1,2,3,4,5,6,7,8,9].map(i=>`<canvas id="g${i}" width="700" height="150"></canvas>`).join('')+'</div>';document.body.appendChild(gv);
gv.onclick=e=>{if(e.target==gv||e.target.classList.contains('xb'))gv.style.display='none'};
function gDraw(){const sl=GH.slice(-300),D=dps(),ix=B.map((_,i)=>i).filter(i=>own[i]>0),im=B.map((_,i)=>i).filter(i=>made[i]>0),a=GH.slice(-15),cps=a.length>1?(a[a.length-1].k-a[0].k)/((a.length-1)*2):0;
lineC('g1','MONEY PER SECOND (log scale)',sl.map(s=>s.d),'#7dff8f',1);
lineC('g2','TOTAL EARNED THIS RUN (log scale)',sl.map(s=>s.e),'#ffd84a',1);
lineC('g3','CASH ON HAND (log scale)',sl.map(s=>s.c),'#6bd6ff',1);
lineC('g4','CLICKS PER SECOND',sl.map((s,i)=>i?Math.max(0,(s.k-sl[i-1].k)/2):0),'#ff8bd6',0);
barC('g5','INCOME SHARE BY BUILDING ($/s)',ix.map(i=>B[i][0]),ix.map(i=>per(i)*own[i]),0,ix.map(i=>per(i)*own[i]/(D||1)));
barC('g6','BUILDINGS OWNED',ix.map(i=>B[i][0]),ix.map(i=>own[i]),0);
barC('g7','LIFETIME DOLLARS MADE BY BUILDING (log)',im.map(i=>B[i][0]),im.map(i=>made[i]),1);
barC('g8','LUCK & MILESTONES (log bars)',['Crits','Mega crits','Golden bills','Ingots harvested','Coins pressed','Stock sales','Achievements','Upgrades bought','Chips earned','Total clicks'],[Math.max(0,sx.cr-(sx.mg||0)),sx.mg||0,gc,sx.hv,sx.cn,sx.sl,ach.size,bought.size,hc,tc],1);
barC('g9','PASSIVE vs CLICK INCOME (log bars)',['Passive $/s','Click $/s (recent)','Clicks/s (recent)'],[D,cps*(cm*cx()+D*cpd),cps],1)}
setInterval(()=>{if(gv.style.display=='flex')gDraw()},1000);
const gb=document.createElement('button');gb.textContent='GRAPHS';lm.appendChild(gb);gb.onclick=()=>{gv.style.display='flex';gDraw()};

/* ===== 100 MORE NEWS ===== */
NW.push(...`Dollar bill declares independence from wallet
Local man sells his clicking finger, regrets it, buys it back at a markup
Cursor discovers it has been going in circles for hours, calls it cardio
Mint accidentally prints a dollar that is also a sandwich
Economists say the economy is "doing a thing"
Employee asks for a raise, is given a higher chair
Piggy bank files restraining order against hammer
Quarterly report: numbers went up, everyone is very serious about it
Wall Street trader buys low, sells lower, calls it strategy
Tooth fairy opens branch office in your factory
Coin collector finds coin that is, upon inspection, a button
Bank launches loyalty program: loyal to money only
Vending machine accepts only exact change and exact feelings
Bill counter loses count, blames Mercury retrograde
Local squirrel opens acorn hedge fund, outperforms the market
Interns discover the supply closet, economy briefly collapses
Factory mascot demands royalties
Golden bill reportedly just passing through, please do not chase
CEO motivational poster says Believe, poster unavailable for comment
New fast food chain accepts only compliments, bankrupt within the hour
Man builds sandcastle bank, tide forecloses
Scientists teach pigeons to day trade, pigeons demand seed funding
Skyscraper elevator has 400 floors and one button labeled Up, probably
Tax auditor gets lost in your paperwork, found weeks later running a department
Cursors request a hand-washing station, clicks now sanitized
Man tries to pay with a coupon for a coupon
Local genie grants three wishes, all of them are more dollars
Stock ticker stuck on the word hmm
Money tree found, turns out to be a regular tree with tape on it
Dollar bill passes the vibe check
Employee microwaves fish in the vault, vault evacuated
Company retreat held inside a spreadsheet, nobody had a good time
HR introduces casual Fridays, casual Mondays, and casual existential dread Wednesdays
Pawn shop pawns itself
Billionaire yacht needs a smaller yacht to park in
Dollar sign tattoo parlor reports record business
Mysterious briefcase found; contents are another briefcase
Office plant achieves middle management
Scientists measure the speed of money, it was just gone
Local man claims he was this close to being rich, measures with a ruler
Company mission statement now just says yes
Moon Mine strikes cheese, writes it off as a business expense
Mars Colony introduces weekend gravity
Asteroid Belt prices rocks per pound, per feeling
Dyson Sphere casts shadow on competitor, accused of light-handed tactics
Time Machine returns with a receipt from next Tuesday
Alien ambassador confused by tipping, tips his entire planet
Black Hole ATM offers no fees, no returns, no light
Parallel Universe you is nicer, richer, and has a dog
Reality Printer prints a typo, gravity briefly optional
Dollar Deity sends a thank-you card signed with a lightning bolt
Infinity Press runs out of ink, universe delayed
Singularity announces quarterly earnings: yes
Galaxy Corp holds all-hands meeting, 400 billion attend, nobody can find parking
Quantum Vault audit results: both fine and on fire
Cosmic Exchange lists the Big Bang at a modest IPO
Robot butler asks to invest its own savings, savings are your savings
Local grandma beats the stock market with a jar of cookies
Pocket calculator quits, says it cannot count this high
Dollar bill folded into a swan, now a very expensive bird
Intern files 10,000 expense reports about expense reports
Office thermostat war enters its fourth quarter
Man mistakes his 401k for a phone number
Mega crit sighted: witnesses report a lot of dollars all at once
Critical hit hotline overwhelmed with congratulatory calls
Cursor union loses vote, accepts snacks
Employee works the night shift, the day shift, and is somehow also the plant
Vault door installed backwards; thieves lock themselves in
Auditors find that miscellaneous is eating the budget
Local man pays rent in compliments, landlord now emotionally wealthy
Dollar bill appears in dream, wakes up with insomnia
Accounting department switches to abacus for the aesthetics
Free samples at the Mint are, unfortunately, not free
Gold prices up; tooth fairy delighted
Cashier receives a tip of good luck, hands over the whole drawer
Rich uncle appears in the factory, leaves, returns, claims to be a different uncle
Stock analyst predicts rain, sun, and a 30% chance of markets
Penny saved is a penny earned, penny retires early
Bank adds 17 new fees, one of them is for reading the fees
Man falls asleep counting dollars, wakes up with a different number of dollars
Mascot cursor demands bigger arrow, gets bigger arrow, still not enough
Factory cafeteria serves soup of the day, soup of yesterday, soup of the economy
Burglar breaks in, leaves a cash donation and a polite note
New phone app tracks your money, it is just a picture of a dollar
Dollar bills form a conga line across the vault
Man opens an envelope, finds an envelope, repeats for days, becomes a courier
Space Corp rocket delayed by a bird, probably
Bank vault rated escape-proof, vault immediately escapes
Spreadsheet gains sentience, immediately asks for a raise
Local mayor offers key to the city, city offers to take it back
Treasure hunters find chest of gold, chest of IOUs next to it
Annual dollar parade features floats made entirely of dollars
Economists agree: it is definitely a number
Employee discovers the any key, becomes a legend
Billboard reads Your ad here, nobody can afford it, it is your ad
Ingot harvesters report a bumper crop, very shiny
Shop clerk gives change in exact change, then more exact
Dollar bill achieves personal best: crispiest ever
Cosmic dice roll lands on invest
Breaking: this is the 100th breaking news, and it is not very breaking`.split('\n').map(x=>()=>x));

/* ===== v6 ===== */
B.forEach((b,i)=>{if(i>9)b[2]=+(1.6e6*Math.pow(7.35,i-9)).toPrecision(2);b[2]*=.6});
U.forEach(u=>{let m=/^b(\d+)(\d)$/.exec(u.id);if(m){const i=+m[1],t=+m[2];u.c=Math.ceil(B[i][1]*Math.pow(1.2,(t<5?TO:TO4)[t%5]-1)*10)}else if(m=/^s(\d+)$/.exec(u.id))u.c=Math.ceil(B[+m[1]][1]*Math.pow(1.2,19)*10)});
els.forEach((d,i)=>d.style.setProperty('--h',i*37%360));
{const _g=golden;golden=function(){if(Math.random()>.2)return;_g();window.nt&&nt('gd','A golden bill appeared! Click it for a bonus.')}}
bigPop=function(m,x,y){const d=document.createElement('div');d.className='bp';d.textContent=m;d.style.left=Math.min(innerWidth*.6,Math.max(innerWidth*.4,x))+'px';d.style.top=Math.min(innerHeight-80,Math.max(110,y))+'px';document.body.appendChild(d);setTimeout(()=>d.remove(),4200)};
let cst=0;const _ch=chart;chart=function(){const c=document.getElementById('mc');if(!c)return;if(!cst)return _ch();const x=c.getContext('2d'),W=c.width,Ht=c.height,h=hs[sel],hi=Math.max(...h)*1.05,lo=Math.min(...h)*.95,Y=v=>Ht-(v-lo)/(hi-lo||1)*Ht;x.fillStyle='#0a0814';x.fillRect(0,0,W,Ht);x.strokeStyle='#2a2640';for(let k=1;k<5;k++){x.beginPath();x.moveTo(0,k*Ht/5);x.lineTo(W,k*Ht/5);x.stroke()}x.beginPath();h.forEach((v,k)=>{const X=k*W/Math.max(h.length-1,49);k?x.lineTo(X,Y(v)):x.moveTo(X,Y(v))});x.strokeStyle='#58d36f';x.lineWidth=2;x.stroke();x.lineWidth=1;x.fillStyle='#8e86b5';x.font='9px monospace';x.fillText('$'+f(hi*bp),4,11);x.fillText('$'+f(lo*bp),4,Ht-4)};
const _mr=mrender;mrender=function(){_mr();const c=document.getElementById('mc');if(c){const b=document.createElement('button');b.dataset.a='cs';b.textContent='STYLE: '+(cst?'LINE':'CANDLES');c.before(b)}};
mp.addEventListener('click',e=>{if(e.target.dataset.a=='cs'){cst^=1;mrender()}});
gb.remove();gb.id='gb2';ov.firstChild.insertBefore(gb,sts);
(function(){let aw=0,ns=new Set();try{ns=new Set(JSON.parse(localStorage.getItem('dcn')||'[]'))}catch(e){}
window.nt=(k,m)=>{if(ns.has(k))return;ns.add(k);try{localStorage.setItem('dcn',JSON.stringify([...ns]))}catch(e){}toast(m,7000);snd(880,.15,'triangle',.05)};
setInterval(()=>{if(Date.now()>=ripe)nt('ig','A golden ingot is ripe! Tap the INGOTS bar to harvest it.');if(up.children.length)nt('up','Upgrade available! Click an icon above the buildings.');if(tot>=1e12){if(!aw){aw=1;toast('You can ASCEND! Open LEGACY to ascend for permanent chips.',8000)}}else aw=0},1500)})();
(function(){const T=["Click the big bill to earn dollars.","Spend dollars on buildings (right panel). They earn money every second.","Upgrades appear above the buildings. Hover for details, click to buy.","Click golden bills when they float by for big bonuses.","Golden ingots ripen over time. Harvest them, then use LEVEL UP in the store to unlock minigames in VAULTS.","Earn $1T in one run, then open LEGACY to ASCEND for permanent chips."];
try{if(localStorage.getItem('dctut')||tot>0)return}catch(e){}
let i=0;const o=document.createElement('div');o.id='tu';o.innerHTML='<div class="bx"><h3></h3><p></p><button>NEXT</button> <button>SKIP</button></div>';document.body.appendChild(o);const h=o.querySelector('h3'),p=o.querySelector('p'),[n,s]=o.querySelectorAll('button');
const sh=()=>{h.textContent='TUTORIAL '+(i+1)+'/'+T.length;p.textContent=T[i];n.textContent=i==T.length-1?'PLAY!':'NEXT'},end=()=>{o.remove();try{localStorage.setItem('dctut',1)}catch(e){}};
n.onclick=()=>++i<T.length?sh():end();s.onclick=end;sh()})();
