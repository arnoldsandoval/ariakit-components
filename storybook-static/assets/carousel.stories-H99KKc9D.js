import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./iframe-CYLbOkOm.js";import{C as oe,e as ae}from"./card-BE9fd6rS.js";import{B as dt}from"./button-PHayyMCs.js";import{c as Le}from"./utils-CBfrqCZ4.js";import{c as ft}from"./createLucideIcon-B4t1phfA.js";import"./preload-helper-PPVm8Dsz.js";import"./XCKGTAUF-BVIfH-SL.js";import"./VOQWLFSQ-CfksXDZp.js";import"./index-CdJFUDDL.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Tt=ft("arrow-left",At);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],kt=ft("arrow-right",It);function Pt(e){return Object.prototype.toString.call(e)==="[object Object]"}function at(e){return Pt(e)||Array.isArray(e)}function Lt(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ge(e,n){const t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;const i=JSON.stringify(Object.keys(e.breakpoints||{})),s=JSON.stringify(Object.keys(n.breakpoints||{}));return i!==s?!1:t.every(r=>{const l=e[r],a=n[r];return typeof l=="function"?`${l}`==`${a}`:!at(l)||!at(a)?l===a:Ge(l,a)})}function it(e){return e.concat().sort((n,t)=>n.name>t.name?1:-1).map(n=>n.options)}function Dt(e,n){if(e.length!==n.length)return!1;const t=it(e),o=it(n);return t.every((i,s)=>{const r=o[s];return Ge(i,r)})}function $e(e){return typeof e=="number"}function Ue(e){return typeof e=="string"}function ze(e){return typeof e=="boolean"}function ct(e){return Object.prototype.toString.call(e)==="[object Object]"}function L(e){return Math.abs(e)}function Qe(e){return Math.sign(e)}function Te(e,n){return L(e-n)}function Ot(e,n){if(e===0||n===0||L(e)<=L(n))return 0;const t=Te(L(e),L(n));return L(t/e)}function Bt(e){return Math.round(e*100)/100}function Ie(e){return ke(e).map(Number)}function F(e){return e[De(e)]}function De(e){return Math.max(0,e.length-1)}function We(e,n){return n===De(e)}function lt(e,n=0){return Array.from(Array(e),(t,o)=>n+o)}function ke(e){return Object.keys(e)}function pt(e,n){return[e,n].reduce((t,o)=>(ke(o).forEach(i=>{const s=t[i],r=o[i],l=ct(s)&&ct(r);t[i]=l?pt(s,r):r}),t),{})}function Ke(e,n){return typeof n.MouseEvent<"u"&&e instanceof n.MouseEvent}function Mt(e,n){const t={start:o,center:i,end:s};function o(){return 0}function i(a){return s(a)/2}function s(a){return n-a}function r(a,c){return Ue(e)?t[e](a):e(n,a,c)}return{measure:r}}function Pe(){let e=[];function n(i,s,r,l={passive:!0}){let a;if("addEventListener"in i)i.addEventListener(s,r,l),a=()=>i.removeEventListener(s,r,l);else{const c=i;c.addListener(r),a=()=>c.removeListener(r)}return e.push(a),o}function t(){e=e.filter(i=>i())}const o={add:n,clear:t};return o}function Rt(e,n,t,o){const i=Pe(),s=1e3/60;let r=null,l=0,a=0;function c(){i.add(e,"visibilitychange",()=>{e.hidden&&f()})}function g(){y(),i.clear()}function p(x){if(!a)return;r||(r=x,t(),t());const u=x-r;for(r=x,l+=u;l>=s;)t(),l-=s;const v=l/s;o(v),a&&(a=n.requestAnimationFrame(p))}function m(){a||(a=n.requestAnimationFrame(p))}function y(){n.cancelAnimationFrame(a),r=null,l=0,a=0}function f(){r=null,l=0}return{init:c,destroy:g,start:m,stop:y,update:t,render:o}}function zt(e,n){const t=n==="rtl",o=e==="y",i=o?"y":"x",s=o?"x":"y",r=!o&&t?-1:1,l=g(),a=p();function c(f){const{height:h,width:x}=f;return o?h:x}function g(){return o?"top":t?"right":"left"}function p(){return o?"bottom":t?"left":"right"}function m(f){return f*r}return{scroll:i,cross:s,startEdge:l,endEdge:a,measureSize:c,direction:m}}function ue(e=0,n=0){const t=L(e-n);function o(c){return c<e}function i(c){return c>n}function s(c){return o(c)||i(c)}function r(c){return s(c)?o(c)?e:n:c}function l(c){return t?c-t*Math.ceil((c-n)/t):c}return{length:t,max:n,min:e,constrain:r,reachedAny:s,reachedMax:i,reachedMin:o,removeOffset:l}}function mt(e,n,t){const{constrain:o}=ue(0,e),i=e+1;let s=r(n);function r(m){return t?L((i+m)%i):o(m)}function l(){return s}function a(m){return s=r(m),p}function c(m){return g().set(l()+m)}function g(){return mt(e,l(),t)}const p={get:l,set:a,add:c,clone:g};return p}function _t(e,n,t,o,i,s,r,l,a,c,g,p,m,y,f,h,x,u,v){const{cross:b,direction:N}=e,I=["INPUT","SELECT","TEXTAREA"],j={passive:!1},w=Pe(),S=Pe(),E=ue(50,225).constrain(y.measure(20)),D={mouse:300,touch:400},A={mouse:500,touch:600},R=f?43:25;let q=!1,V=0,H=0,ie=!1,se=!1,$=!1,Q=!1;function me(C){if(!v)return;function T(M){(ze(v)||v(C,M))&&xe(M)}const O=n;w.add(O,"dragstart",M=>M.preventDefault(),j).add(O,"touchmove",()=>{},j).add(O,"touchend",()=>{}).add(O,"touchstart",T).add(O,"mousedown",T).add(O,"touchcancel",B).add(O,"contextmenu",B).add(O,"click",J,!0)}function U(){w.clear(),S.clear()}function de(){const C=Q?t:n;S.add(C,"touchmove",z,j).add(C,"touchend",B).add(C,"mousemove",z,j).add(C,"mouseup",B)}function fe(C){const T=C.nodeName||"";return I.includes(T)}function W(){return(f?A:D)[Q?"mouse":"touch"]}function he(C,T){const O=p.add(Qe(C)*-1),M=g.byDistance(C,!f).distance;return f||L(C)<E?M:x&&T?M*.5:g.byIndex(O.get(),0).distance}function xe(C){const T=Ke(C,o);Q=T,$=f&&T&&!C.buttons&&q,q=Te(i.get(),r.get())>=2,!(T&&C.button!==0)&&(fe(C.target)||(ie=!0,s.pointerDown(C),c.useFriction(0).useDuration(0),i.set(r),de(),V=s.readPoint(C),H=s.readPoint(C,b),m.emit("pointerDown")))}function z(C){if(!Ke(C,o)&&C.touches.length>=2)return B(C);const O=s.readPoint(C),M=s.readPoint(C,b),K=Te(O,V),X=Te(M,H);if(!se&&!Q&&(!C.cancelable||(se=K>X,!se)))return B(C);const ce=s.pointerMove(C);K>h&&($=!0),c.useFriction(.3).useDuration(.75),l.start(),i.add(N(ce)),C.preventDefault()}function B(C){const O=g.byDistance(0,!1).index!==p.get(),M=s.pointerUp(C)*W(),K=he(N(M),O),X=Ot(M,K),ce=R-10*X,re=u+X/50;se=!1,ie=!1,S.clear(),c.useDuration(ce).useFriction(re),a.distance(K,!f),Q=!1,m.emit("pointerUp")}function J(C){$&&(C.stopPropagation(),C.preventDefault(),$=!1)}function _(){return ie}return{init:me,destroy:U,pointerDown:_}}function Ft(e,n){let o,i;function s(p){return p.timeStamp}function r(p,m){const f=`client${(m||e.scroll)==="x"?"X":"Y"}`;return(Ke(p,n)?p:p.touches[0])[f]}function l(p){return o=p,i=p,r(p)}function a(p){const m=r(p)-r(i),y=s(p)-s(o)>170;return i=p,y&&(o=p),m}function c(p){if(!o||!i)return 0;const m=r(i)-r(o),y=s(p)-s(o),f=s(p)-s(i)>170,h=m/y;return y&&!f&&L(h)>.1?h:0}return{pointerDown:l,pointerMove:a,pointerUp:c,readPoint:r}}function qt(){function e(t){const{offsetTop:o,offsetLeft:i,offsetWidth:s,offsetHeight:r}=t;return{top:o,right:i+s,bottom:o+r,left:i,width:s,height:r}}return{measure:e}}function Vt(e){function n(o){return e*(o/100)}return{measure:n}}function Ht(e,n,t,o,i,s,r){const l=[e].concat(o);let a,c,g=[],p=!1;function m(x){return i.measureSize(r.measure(x))}function y(x){if(!s)return;c=m(e),g=o.map(m);function u(v){for(const b of v){if(p)return;const N=b.target===e,I=o.indexOf(b.target),j=N?c:g[I],w=m(N?e:o[I]);if(L(w-j)>=.5){x.reInit(),n.emit("resize");break}}}a=new ResizeObserver(v=>{(ze(s)||s(x,v))&&u(v)}),t.requestAnimationFrame(()=>{l.forEach(v=>a.observe(v))})}function f(){p=!0,a&&a.disconnect()}return{init:y,destroy:f}}function Ut(e,n,t,o,i,s){let r=0,l=0,a=i,c=s,g=e.get(),p=0;function m(){const j=o.get()-e.get(),w=!a;let S=0;return w?(r=0,t.set(o),e.set(o),S=j):(t.set(e),r+=j/a,r*=c,g+=r,e.add(r),S=g-p),l=Qe(S),p=g,I}function y(){const j=o.get()-n.get();return L(j)<.001}function f(){return a}function h(){return l}function x(){return r}function u(){return b(i)}function v(){return N(s)}function b(j){return a=j,I}function N(j){return c=j,I}const I={direction:h,duration:f,velocity:x,seek:m,settled:y,useBaseFriction:v,useBaseDuration:u,useFriction:N,useDuration:b};return I}function Kt(e,n,t,o,i){const s=i.measure(10),r=i.measure(50),l=ue(.1,.99);let a=!1;function c(){return!(a||!e.reachedAny(t.get())||!e.reachedAny(n.get()))}function g(y){if(!c())return;const f=e.reachedMin(n.get())?"min":"max",h=L(e[f]-n.get()),x=t.get()-n.get(),u=l.constrain(h/r);t.subtract(x*u),!y&&L(x)<s&&(t.set(e.constrain(t.get())),o.useDuration(25).useBaseFriction())}function p(y){a=!y}return{shouldConstrain:c,constrain:g,toggleActive:p}}function Gt(e,n,t,o,i){const s=ue(-n+e,0),r=p(),l=g(),a=m();function c(f,h){return Te(f,h)<=1}function g(){const f=r[0],h=F(r),x=r.lastIndexOf(f),u=r.indexOf(h)+1;return ue(x,u)}function p(){return t.map((f,h)=>{const{min:x,max:u}=s,v=s.constrain(f),b=!h,N=We(t,h);return b?u:N||c(x,v)?x:c(u,v)?u:v}).map(f=>parseFloat(f.toFixed(3)))}function m(){if(n<=e+i)return[s.max];if(o==="keepSnaps")return r;const{min:f,max:h}=l;return r.slice(f,h)}return{snapsContained:a,scrollContainLimit:l}}function $t(e,n,t){const o=n[0],i=t?o-e:F(n);return{limit:ue(i,o)}}function Qt(e,n,t,o){const s=n.min+.1,r=n.max+.1,{reachedMin:l,reachedMax:a}=ue(s,r);function c(m){return m===1?a(t.get()):m===-1?l(t.get()):!1}function g(m){if(!c(m))return;const y=e*(m*-1);o.forEach(f=>f.add(y))}return{loop:g}}function Wt(e){const{max:n,length:t}=e;function o(s){const r=s-n;return t?r/-t:0}return{get:o}}function Jt(e,n,t,o,i){const{startEdge:s,endEdge:r}=e,{groupSlides:l}=i,a=p().map(n.measure),c=m(),g=y();function p(){return l(o).map(h=>F(h)[r]-h[0][s]).map(L)}function m(){return o.map(h=>t[s]-h[s]).map(h=>-L(h))}function y(){return l(c).map(h=>h[0]).map((h,x)=>h+a[x])}return{snaps:c,snapsAligned:g}}function Xt(e,n,t,o,i,s){const{groupSlides:r}=i,{min:l,max:a}=o,c=g();function g(){const m=r(s),y=!e||n==="keepSnaps";return t.length===1?[s]:y?m:m.slice(l,a).map((f,h,x)=>{const u=!h,v=We(x,h);if(u){const b=F(x[0])+1;return lt(b)}if(v){const b=De(s)-F(x)[0]+1;return lt(b,F(x)[0])}return f})}return{slideRegistry:c}}function Yt(e,n,t,o,i){const{reachedAny:s,removeOffset:r,constrain:l}=o;function a(f){return f.concat().sort((h,x)=>L(h)-L(x))[0]}function c(f){const h=e?r(f):l(f),x=n.map((v,b)=>({diff:g(v-h,0),index:b})).sort((v,b)=>L(v.diff)-L(b.diff)),{index:u}=x[0];return{index:u,distance:h}}function g(f,h){const x=[f,f+t,f-t];if(!e)return f;if(!h)return a(x);const u=x.filter(v=>Qe(v)===h);return u.length?a(u):F(x)-t}function p(f,h){const x=n[f]-i.get(),u=g(x,h);return{index:f,distance:u}}function m(f,h){const x=i.get()+f,{index:u,distance:v}=c(x),b=!e&&s(x);if(!h||b)return{index:u,distance:f};const N=n[u]-v,I=f+g(N,0);return{index:u,distance:I}}return{byDistance:m,byIndex:p,shortcut:g}}function Zt(e,n,t,o,i,s,r){function l(p){const m=p.distance,y=p.index!==n.get();s.add(m),m&&(o.duration()?e.start():(e.update(),e.render(1),e.update())),y&&(t.set(n.get()),n.set(p.index),r.emit("select"))}function a(p,m){const y=i.byDistance(p,m);l(y)}function c(p,m){const y=n.clone().set(p),f=i.byIndex(y.get(),m);l(f)}return{distance:a,index:c}}function en(e,n,t,o,i,s,r,l){const a={passive:!0,capture:!0};let c=0;function g(y){if(!l)return;function f(h){if(new Date().getTime()-c>10)return;r.emit("slideFocusStart"),e.scrollLeft=0;const v=t.findIndex(b=>b.includes(h));$e(v)&&(i.useDuration(0),o.index(v,0),r.emit("slideFocus"))}s.add(document,"keydown",p,!1),n.forEach((h,x)=>{s.add(h,"focus",u=>{(ze(l)||l(y,u))&&f(x)},a)})}function p(y){y.code==="Tab"&&(c=new Date().getTime())}return{init:g}}function Ae(e){let n=e;function t(){return n}function o(a){n=r(a)}function i(a){n+=r(a)}function s(a){n-=r(a)}function r(a){return $e(a)?a:a.get()}return{get:t,set:o,add:i,subtract:s}}function ht(e,n){const t=e.scroll==="x"?r:l,o=n.style;let i=null,s=!1;function r(m){return`translate3d(${m}px,0px,0px)`}function l(m){return`translate3d(0px,${m}px,0px)`}function a(m){if(s)return;const y=Bt(e.direction(m));y!==i&&(o.transform=t(y),i=y)}function c(m){s=!m}function g(){s||(o.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:g,to:a,toggleActive:c}}function tn(e,n,t,o,i,s,r,l,a){const g=Ie(i),p=Ie(i).reverse(),m=u().concat(v());function y(w,S){return w.reduce((E,D)=>E-i[D],S)}function f(w,S){return w.reduce((E,D)=>y(E,S)>0?E.concat([D]):E,[])}function h(w){return s.map((S,E)=>({start:S-o[E]+.5+w,end:S+n-.5+w}))}function x(w,S,E){const D=h(S);return w.map(A=>{const R=E?0:-t,q=E?t:0,V=E?"end":"start",H=D[A][V];return{index:A,loopPoint:H,slideLocation:Ae(-1),translate:ht(e,a[A]),target:()=>l.get()>H?R:q}})}function u(){const w=r[0],S=f(p,w);return x(S,t,!1)}function v(){const w=n-r[0]-1,S=f(g,w);return x(S,-t,!0)}function b(){return m.every(({index:w})=>{const S=g.filter(E=>E!==w);return y(S,n)<=.1})}function N(){m.forEach(w=>{const{target:S,translate:E,slideLocation:D}=w,A=S();A!==D.get()&&(E.to(A),D.set(A))})}function I(){m.forEach(w=>w.translate.clear())}return{canLoop:b,clear:I,loop:N,loopPoints:m}}function nn(e,n,t){let o,i=!1;function s(a){if(!t)return;function c(g){for(const p of g)if(p.type==="childList"){a.reInit(),n.emit("slidesChanged");break}}o=new MutationObserver(g=>{i||(ze(t)||t(a,g))&&c(g)}),o.observe(e,{childList:!0})}function r(){o&&o.disconnect(),i=!0}return{init:s,destroy:r}}function sn(e,n,t,o){const i={};let s=null,r=null,l,a=!1;function c(){l=new IntersectionObserver(f=>{a||(f.forEach(h=>{const x=n.indexOf(h.target);i[x]=h}),s=null,r=null,t.emit("slidesInView"))},{root:e.parentElement,threshold:o}),n.forEach(f=>l.observe(f))}function g(){l&&l.disconnect(),a=!0}function p(f){return ke(i).reduce((h,x)=>{const u=parseInt(x),{isIntersecting:v}=i[u];return(f&&v||!f&&!v)&&h.push(u),h},[])}function m(f=!0){if(f&&s)return s;if(!f&&r)return r;const h=p(f);return f&&(s=h),f||(r=h),h}return{init:c,destroy:g,get:m}}function rn(e,n,t,o,i,s){const{measureSize:r,startEdge:l,endEdge:a}=e,c=t[0]&&i,g=f(),p=h(),m=t.map(r),y=x();function f(){if(!c)return 0;const v=t[0];return L(n[l]-v[l])}function h(){if(!c)return 0;const v=s.getComputedStyle(F(o));return parseFloat(v.getPropertyValue(`margin-${a}`))}function x(){return t.map((v,b,N)=>{const I=!b,j=We(N,b);return I?m[b]+g:j?m[b]+p:N[b+1][l]-v[l]}).map(L)}return{slideSizes:m,slideSizesWithGaps:y,startGap:g,endGap:p}}function on(e,n,t,o,i,s,r,l,a){const{startEdge:c,endEdge:g,direction:p}=e,m=$e(t);function y(u,v){return Ie(u).filter(b=>b%v===0).map(b=>u.slice(b,b+v))}function f(u){return u.length?Ie(u).reduce((v,b,N)=>{const I=F(v)||0,j=I===0,w=b===De(u),S=i[c]-s[I][c],E=i[c]-s[b][g],D=!o&&j?p(r):0,A=!o&&w?p(l):0,R=L(E-A-(S+D));return N&&R>n+a&&v.push(b),w&&v.push(u.length),v},[]).map((v,b,N)=>{const I=Math.max(N[b-1]||0);return u.slice(I,v)}):[]}function h(u){return m?y(u,t):f(u)}return{groupSlides:h}}function an(e,n,t,o,i,s,r){const{align:l,axis:a,direction:c,startIndex:g,loop:p,duration:m,dragFree:y,dragThreshold:f,inViewThreshold:h,slidesToScroll:x,skipSnaps:u,containScroll:v,watchResize:b,watchSlides:N,watchDrag:I,watchFocus:j}=s,w=2,S=qt(),E=S.measure(n),D=t.map(S.measure),A=zt(a,c),R=A.measureSize(E),q=Vt(R),V=Mt(l,R),H=!p&&!!v,ie=p||!!v,{slideSizes:se,slideSizesWithGaps:$,startGap:Q,endGap:me}=rn(A,E,D,t,ie,i),U=on(A,R,x,p,E,D,Q,me,w),{snaps:de,snapsAligned:fe}=Jt(A,V,E,D,U),W=-F(de)+F($),{snapsContained:he,scrollContainLimit:xe}=Gt(R,W,fe,v,w),z=H?he:fe,{limit:B}=$t(W,z,p),J=mt(De(z),g,p),_=J.clone(),P=Ie(t),C=({dragHandler:pe,scrollBody:Ve,scrollBounds:He,options:{loop:Be}})=>{Be||He.constrain(pe.pointerDown()),Ve.seek()},T=({scrollBody:pe,translate:Ve,location:He,offsetLocation:Be,previousLocation:yt,scrollLooper:Ct,slideLooper:bt,dragHandler:wt,animation:St,eventHandler:et,scrollBounds:Nt,options:{loop:tt}},nt)=>{const st=pe.settled(),jt=!Nt.shouldConstrain(),rt=tt?st:st&&jt,ot=rt&&!wt.pointerDown();ot&&St.stop();const Et=He.get()*nt+yt.get()*(1-nt);Be.set(Et),tt&&(Ct.loop(pe.direction()),bt.loop()),Ve.to(Be.get()),ot&&et.emit("settle"),rt||et.emit("scroll")},O=Rt(o,i,()=>C(qe),pe=>T(qe,pe)),M=.68,K=z[J.get()],X=Ae(K),ce=Ae(K),re=Ae(K),le=Ae(K),ge=Ut(X,re,ce,le,m,M),_e=Yt(p,z,W,B,le),Fe=Zt(O,J,_,ge,_e,le,r),Xe=Wt(B),Ye=Pe(),gt=sn(n,t,r,h),{slideRegistry:Ze}=Xt(H,v,z,xe,U,P),vt=en(e,t,Ze,Fe,ge,Ye,r,j),qe={ownerDocument:o,ownerWindow:i,eventHandler:r,containerRect:E,slideRects:D,animation:O,axis:A,dragHandler:_t(A,e,o,i,le,Ft(A,i),X,O,Fe,ge,_e,J,r,q,y,f,u,M,I),eventStore:Ye,percentOfView:q,index:J,indexPrevious:_,limit:B,location:X,offsetLocation:re,previousLocation:ce,options:s,resizeHandler:Ht(n,r,i,t,A,b,S),scrollBody:ge,scrollBounds:Kt(B,re,le,ge,q),scrollLooper:Qt(W,B,re,[X,re,ce,le]),scrollProgress:Xe,scrollSnapList:z.map(Xe.get),scrollSnaps:z,scrollTarget:_e,scrollTo:Fe,slideLooper:tn(A,R,W,se,$,de,z,re,t),slideFocus:vt,slidesHandler:nn(n,r,N),slidesInView:gt,slideIndexes:P,slideRegistry:Ze,slidesToScroll:U,target:le,translate:ht(A,n)};return qe}function cn(){let e={},n;function t(c){n=c}function o(c){return e[c]||[]}function i(c){return o(c).forEach(g=>g(n,c)),a}function s(c,g){return e[c]=o(c).concat([g]),a}function r(c,g){return e[c]=o(c).filter(p=>p!==g),a}function l(){e={}}const a={init:t,emit:i,off:r,on:s,clear:l};return a}const ln={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function un(e){function n(s,r){return pt(s,r||{})}function t(s){const r=s.breakpoints||{},l=ke(r).filter(a=>e.matchMedia(a).matches).map(a=>r[a]).reduce((a,c)=>n(a,c),{});return n(s,l)}function o(s){return s.map(r=>ke(r.breakpoints||{})).reduce((r,l)=>r.concat(l),[]).map(e.matchMedia)}return{mergeOptions:n,optionsAtMedia:t,optionsMediaQueries:o}}function dn(e){let n=[];function t(s,r){return n=r.filter(({options:l})=>e.optionsAtMedia(l).active!==!1),n.forEach(l=>l.init(s,e)),r.reduce((l,a)=>Object.assign(l,{[a.name]:a}),{})}function o(){n=n.filter(s=>s.destroy())}return{init:t,destroy:o}}function Re(e,n,t){const o=e.ownerDocument,i=o.defaultView,s=un(i),r=dn(s),l=Pe(),a=cn(),{mergeOptions:c,optionsAtMedia:g,optionsMediaQueries:p}=s,{on:m,off:y,emit:f}=a,h=A;let x=!1,u,v=c(ln,Re.globalOptions),b=c(v),N=[],I,j,w;function S(){const{container:P,slides:C}=b;j=(Ue(P)?e.querySelector(P):P)||e.children[0];const O=Ue(C)?j.querySelectorAll(C):C;w=[].slice.call(O||j.children)}function E(P){const C=an(e,j,w,o,i,P,a);if(P.loop&&!C.slideLooper.canLoop()){const T=Object.assign({},P,{loop:!1});return E(T)}return C}function D(P,C){x||(v=c(v,P),b=g(v),N=C||N,S(),u=E(b),p([v,...N.map(({options:T})=>T)]).forEach(T=>l.add(T,"change",A)),b.active&&(u.translate.to(u.location.get()),u.animation.init(),u.slidesInView.init(),u.slideFocus.init(_),u.eventHandler.init(_),u.resizeHandler.init(_),u.slidesHandler.init(_),u.options.loop&&u.slideLooper.loop(),j.offsetParent&&w.length&&u.dragHandler.init(_),I=r.init(_,N)))}function A(P,C){const T=U();R(),D(c({startIndex:T},P),C),a.emit("reInit")}function R(){u.dragHandler.destroy(),u.eventStore.clear(),u.translate.clear(),u.slideLooper.clear(),u.resizeHandler.destroy(),u.slidesHandler.destroy(),u.slidesInView.destroy(),u.animation.destroy(),r.destroy(),l.clear()}function q(){x||(x=!0,l.clear(),R(),a.emit("destroy"),a.clear())}function V(P,C,T){!b.active||x||(u.scrollBody.useBaseFriction().useDuration(C===!0?0:b.duration),u.scrollTo.index(P,T||0))}function H(P){const C=u.index.add(1).get();V(C,P,-1)}function ie(P){const C=u.index.add(-1).get();V(C,P,1)}function se(){return u.index.add(1).get()!==U()}function $(){return u.index.add(-1).get()!==U()}function Q(){return u.scrollSnapList}function me(){return u.scrollProgress.get(u.offsetLocation.get())}function U(){return u.index.get()}function de(){return u.indexPrevious.get()}function fe(){return u.slidesInView.get()}function W(){return u.slidesInView.get(!1)}function he(){return I}function xe(){return u}function z(){return e}function B(){return j}function J(){return w}const _={canScrollNext:se,canScrollPrev:$,containerNode:B,internalEngine:xe,destroy:q,off:y,on:m,emit:f,plugins:he,previousScrollSnap:de,reInit:h,rootNode:z,scrollNext:H,scrollPrev:ie,scrollProgress:me,scrollSnapList:Q,scrollTo:V,selectedScrollSnap:U,slideNodes:J,slidesInView:fe,slidesNotInView:W};return D(n,t),setTimeout(()=>a.emit("init"),0),_}Re.globalOptions=void 0;function Je(e={},n=[]){const t=k.useRef(e),o=k.useRef(n),[i,s]=k.useState(),[r,l]=k.useState(),a=k.useCallback(()=>{i&&i.reInit(t.current,o.current)},[i]);return k.useEffect(()=>{Ge(t.current,e)||(t.current=e,a())},[e,a]),k.useEffect(()=>{Dt(o.current,n)||(o.current=n,a())},[n,a]),k.useEffect(()=>{if(Lt()&&r){Re.globalOptions=Je.globalOptions;const c=Re(r,t.current,o.current);return s(c),()=>c.destroy()}else s(void 0)},[r,s]),[l,i]}Je.globalOptions=void 0;const xt=k.createContext(null);function Oe(){const e=k.useContext(xt);if(!e)throw new Error("useCarousel must be used within a <Carousel />");return e}function G({orientation:e="horizontal",opts:n,setApi:t,plugins:o,className:i,children:s,...r}){const[l,a]=Je({...n,axis:e==="horizontal"?"x":"y"},o),[c,g]=k.useState(!1),[p,m]=k.useState(!1),y=k.useCallback(u=>{u&&(g(u.canScrollPrev()),m(u.canScrollNext()))},[]),f=k.useCallback(()=>{a?.scrollPrev()},[a]),h=k.useCallback(()=>{a?.scrollNext()},[a]),x=k.useCallback(u=>{u.key==="ArrowLeft"?(u.preventDefault(),f()):u.key==="ArrowRight"&&(u.preventDefault(),h())},[f,h]);return k.useEffect(()=>{!a||!t||t(a)},[a,t]),k.useEffect(()=>{if(a)return y(a),a.on("reInit",y),a.on("select",y),()=>{a?.off("select",y)}},[a,y]),d.jsx(xt.Provider,{value:{carouselRef:l,api:a,opts:n,orientation:e||(n?.axis==="y"?"vertical":"horizontal"),scrollPrev:f,scrollNext:h,canScrollPrev:c,canScrollNext:p},children:d.jsx("div",{onKeyDownCapture:x,className:Le("relative",i),role:"region","aria-roledescription":"carousel","data-slot":"carousel",...r,children:s})})}function Z({className:e,...n}){const{carouselRef:t,orientation:o}=Oe();return d.jsx("div",{ref:t,className:"overflow-hidden","data-slot":"carousel-content",children:d.jsx("div",{className:Le("flex",o==="horizontal"?"-ml-4":"-mt-4 flex-col",e),...n})})}function ee({className:e,...n}){const{orientation:t}=Oe();return d.jsx("div",{role:"group","aria-roledescription":"slide","data-slot":"carousel-item",className:Le("min-w-0 shrink-0 grow-0 basis-full",t==="horizontal"?"pl-4":"pt-4",e),...n})}function te({className:e,variant:n="outline",size:t="icon",...o}){const{orientation:i,scrollPrev:s,canScrollPrev:r}=Oe();return d.jsxs(dt,{"data-slot":"carousel-previous",variant:n,size:t,className:Le("absolute size-8 rounded-full",i==="horizontal"?"top-1/2 -left-12 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!r,onClick:s,...o,children:[d.jsx(Tt,{}),d.jsx("span",{className:"sr-only",children:"Previous slide"})]})}function ne({className:e,variant:n="outline",size:t="icon",...o}){const{orientation:i,scrollNext:s,canScrollNext:r}=Oe();return d.jsxs(dt,{"data-slot":"carousel-next",variant:n,size:t,className:Le("absolute size-8 rounded-full",i==="horizontal"?"top-1/2 -right-12 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!r,onClick:s,...o,children:[d.jsx(kt,{}),d.jsx("span",{className:"sr-only",children:"Next slide"})]})}G.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{opts:{required:!1,tsType:{name:"Parameters[0]",raw:"UseCarouselParameters[0]"},description:""},plugins:{required:!1,tsType:{name:"Parameters[1]",raw:"UseCarouselParameters[1]"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},setApi:{required:!1,tsType:{name:"signature",type:"function",raw:"(api: CarouselApi) => void",signature:{arguments:[{type:{name:"UseEmblaCarouselType[1]",raw:"UseEmblaCarouselType[1]"},name:"api"}],return:{name:"void"}}},description:""}}};Z.__docgenInfo={description:"",methods:[],displayName:"CarouselContent"};ee.__docgenInfo={description:"",methods:[],displayName:"CarouselItem"};ne.__docgenInfo={description:"",methods:[],displayName:"CarouselNext",props:{variant:{defaultValue:{value:'"outline"',computed:!1},required:!1},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};te.__docgenInfo={description:"",methods:[],displayName:"CarouselPrevious",props:{variant:{defaultValue:{value:'"outline"',computed:!1},required:!1},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};const{expect:Y,fn,userEvent:ut}=__STORYBOOK_MODULE_TEST__,Nn={title:"ui/Carousel",component:G,tags:["autodocs"],argTypes:{},args:{className:"w-full max-w-xs"},render:e=>d.jsxs(G,{...e,children:[d.jsx(Z,{children:Array.from({length:5}).map((n,t)=>d.jsx(ee,{children:d.jsx("div",{className:"p-1",children:d.jsx(oe,{children:d.jsx(ae,{className:"flex aspect-square items-center justify-center p-6",children:d.jsx("span",{className:"text-4xl font-semibold",children:t+1})})})})},t))}),d.jsx(te,{}),d.jsx(ne,{})]}),parameters:{layout:"centered",docs:{description:{component:"A carousel with motion and swipe built using Embla."}}}},ve={},ye={render:e=>d.jsxs(G,{className:"w-full max-w-sm",...e,children:[d.jsx(Z,{children:Array.from({length:5}).map((n,t)=>d.jsx(ee,{className:"basis-1/3",children:d.jsx("div",{className:"p-1",children:d.jsx(oe,{children:d.jsx(ae,{className:"flex aspect-square items-center justify-center p-6",children:d.jsx("span",{className:"text-2xl font-semibold",children:t+1})})})})},t))}),d.jsx(te,{}),d.jsx(ne,{})]})},Ce={render:e=>d.jsxs(G,{className:"w-full max-w-sm",...e,children:[d.jsx(Z,{children:Array.from({length:5}).map((n,t)=>d.jsx(ee,{className:"md:basis-1/2 lg:basis-1/3",children:d.jsx("div",{className:"p-1",children:d.jsx(oe,{children:d.jsx(ae,{className:"flex aspect-square items-center justify-center p-6",children:d.jsx("span",{className:"text-2xl font-semibold",children:t+1})})})})},t))}),d.jsx(te,{}),d.jsx(ne,{})]})},be={render:e=>d.jsxs(G,{className:"w-full max-w-sm",...e,children:[d.jsx(Z,{className:"-ml-4",children:Array.from({length:5}).map((n,t)=>d.jsx(ee,{className:"pl-4 basis-1/3",children:d.jsx("div",{className:"p-1",children:d.jsx(oe,{children:d.jsx(ae,{className:"flex aspect-square items-center justify-center p-6",children:d.jsx("span",{className:"text-2xl font-semibold",children:t+1})})})})},t))}),d.jsx(te,{}),d.jsx(ne,{})]})},we={render:e=>d.jsxs(G,{orientation:"vertical",className:"w-full max-w-xs",...e,children:[d.jsx(Z,{className:"-mt-1 h-[200px]",children:Array.from({length:5}).map((n,t)=>d.jsx(ee,{className:"pt-1 md:basis-1/2",children:d.jsx("div",{className:"p-1",children:d.jsx(oe,{children:d.jsx(ae,{className:"flex items-center justify-center p-6",children:d.jsx("span",{className:"text-3xl font-semibold",children:t+1})})})})},t))}),d.jsx(te,{}),d.jsx(ne,{})]})},Se={render:e=>d.jsxs(G,{opts:{align:"start",loop:!0},className:"w-full max-w-sm",...e,children:[d.jsx(Z,{children:Array.from({length:5}).map((n,t)=>d.jsx(ee,{className:"md:basis-1/2 lg:basis-1/3",children:d.jsx("div",{className:"p-1",children:d.jsx(oe,{children:d.jsx(ae,{className:"flex aspect-square items-center justify-center p-6",children:d.jsx("span",{className:"text-2xl font-semibold",children:t+1})})})})},t))}),d.jsx(te,{}),d.jsx(ne,{})]})},Ne={args:{onSlideChange:fn()},render:function(n){const[t,o]=k.useState(),[i,s]=k.useState(0),[r,l]=k.useState(0);return k.useEffect(()=>{if(!t)return;l(t.scrollSnapList().length),s(t.selectedScrollSnap()+1);const a=()=>{const c=t.selectedScrollSnap()+1;s(c),n.onSlideChange?.(`Slide changed to ${c}`,{slide:c,total:r})};return t.on("select",a),()=>{t.off("select",a)}},[t,n.onSlideChange,r]),d.jsxs("div",{className:"w-full max-w-xs",children:[d.jsxs(G,{setApi:o,...n,children:[d.jsx(Z,{children:Array.from({length:5}).map((a,c)=>d.jsx(ee,{children:d.jsx("div",{className:"p-1",children:d.jsx(oe,{children:d.jsx(ae,{className:"flex aspect-square items-center justify-center p-6",children:d.jsx("span",{className:"text-4xl font-semibold",children:c+1})})})})},c))}),d.jsx(te,{}),d.jsx(ne,{})]}),d.jsxs("div",{className:"py-2 text-center text-sm text-muted-foreground",children:["Slide ",i," of ",r]})]})}},Me={name:"when clicking next/previous buttons, should navigate through slides",tags:["!dev","!autodocs"],play:async({canvas:e,step:n})=>{const t=await e.findAllByRole("group");Y(t).toHaveLength(5);const o=await e.findByRole("button",{name:/next/i}),i=await e.findByRole("button",{name:/previous/i});await n("navigate to the last slide",async()=>{for(let s=0;s<t.length-1;s++)await ut.click(o)}),await n("navigate back to the first slide",async()=>{for(let s=t.length-1;s>0;s--)await ut.click(i)})}},je={name:"keyboard navigation test",tags:["!dev","!autodocs"],render:function(n){const[t,o]=k.useState(),[i,s]=k.useState(0);return k.useEffect(()=>{t&&(s(t.selectedScrollSnap()),t.on("select",()=>{s(t.selectedScrollSnap())}))},[t]),d.jsxs("div",{children:[d.jsxs(G,{setApi:o,...n,className:"w-full max-w-xs",children:[d.jsx(Z,{children:Array.from({length:5}).map((r,l)=>d.jsx(ee,{children:d.jsx("div",{className:"p-1",children:d.jsx(oe,{children:d.jsx(ae,{className:"flex aspect-square items-center justify-center p-6",children:d.jsx("span",{className:"text-4xl font-semibold",children:l+1})})})})},l))}),d.jsx(te,{}),d.jsx(ne,{})]}),d.jsxs("div",{className:"py-2 text-center","data-testid":"current-slide",children:["Slide ",i]})]})},play:async({canvas:e,step:n})=>{const t=await e.findByRole("region"),o=await e.findByTestId("current-slide");await n("Initial state should be slide 0",async()=>{Y(o).toHaveTextContent("Slide 0")}),await n("ArrowRight should navigate forward",async()=>{const i=new KeyboardEvent("keydown",{key:"ArrowRight",bubbles:!0,cancelable:!0});t.dispatchEvent(i),await new Promise(s=>setTimeout(s,300)),Y(o).toHaveTextContent("Slide 1"),t.dispatchEvent(i),await new Promise(s=>setTimeout(s,300)),Y(o).toHaveTextContent("Slide 2")}),await n("ArrowLeft should navigate backward",async()=>{const i=new KeyboardEvent("keydown",{key:"ArrowLeft",bubbles:!0,cancelable:!0});t.dispatchEvent(i),await new Promise(s=>setTimeout(s,300)),Y(o).toHaveTextContent("Slide 1"),t.dispatchEvent(i),await new Promise(s=>setTimeout(s,300)),Y(o).toHaveTextContent("Slide 0")}),await n("Other keys should not navigate",async()=>{const i=new KeyboardEvent("keydown",{key:"ArrowUp",bubbles:!0,cancelable:!0});t.dispatchEvent(i),await new Promise(s=>setTimeout(s,300)),Y(o).toHaveTextContent("Slide 0")}),await n("Arrow keys should preventDefault",async()=>{let i=!1;const s=new KeyboardEvent("keydown",{key:"ArrowRight",bubbles:!0,cancelable:!0});t.addEventListener("keydown",r=>{r.defaultPrevented&&(i=!0)},{once:!0}),t.dispatchEvent(s),Y(s.defaultPrevented||i).toBe(!0)})}};function pn(){try{Oe()}catch(e){return d.jsxs("div",{children:["Error: ",e.message]})}return null}const Ee={tags:["!dev","!autodocs"],render:()=>d.jsx(pn,{}),parameters:{a11y:{disable:!0}},play:async({canvas:e})=>{const n=await e.findByText(/useCarousel must be used within a <Carousel \/>/);Y(n).toBeInTheDocument()}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:"{}",...ve.parameters?.docs?.source},description:{story:"The default carousel with 5 items.",...ve.parameters?.docs?.description}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`{
  render: args => <Carousel className="w-full max-w-sm" {...args}>
      <CarouselContent>
        {Array.from({
        length: 5
      }).map((_, index) => <CarouselItem key={index} className="basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
}`,...ye.parameters?.docs?.source},description:{story:"Use the `basis` utility class to set the size of the items.",...ye.parameters?.docs?.description}}};Ce.parameters={...Ce.parameters,docs:{...Ce.parameters?.docs,source:{originalSource:`{
  render: args => <Carousel className="w-full max-w-sm" {...args}>
      <CarouselContent>
        {Array.from({
        length: 5
      }).map((_, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
}`,...Ce.parameters?.docs?.source},description:{story:"Responsive sizes: 50% on small screens and 33% on larger screens.",...Ce.parameters?.docs?.description}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`{
  render: args => <Carousel className="w-full max-w-sm" {...args}>
      <CarouselContent className="-ml-4">
        {Array.from({
        length: 5
      }).map((_, index) => <CarouselItem key={index} className="pl-4 basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
}`,...be.parameters?.docs?.source},description:{story:"Use `pl-[VALUE]` utility on CarouselItem and negative `-ml-[VALUE]` on CarouselContent for spacing.",...be.parameters?.docs?.description}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
  render: args => <Carousel orientation="vertical" className="w-full max-w-xs" {...args}>
      <CarouselContent className="-mt-1 h-[200px]">
        {Array.from({
        length: 5
      }).map((_, index) => <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
}`,...we.parameters?.docs?.source},description:{story:"Use the `orientation` prop to set the carousel to vertical.",...we.parameters?.docs?.description}}};Se.parameters={...Se.parameters,docs:{...Se.parameters?.docs,source:{originalSource:`{
  render: args => <Carousel opts={{
    align: "start",
    loop: true
  }} className="w-full max-w-sm" {...args}>
      <CarouselContent>
        {Array.from({
        length: 5
      }).map((_, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>)}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
}`,...Se.parameters?.docs?.source},description:{story:"Pass options to the carousel using the `opts` prop.",...Se.parameters?.docs?.description}}};Ne.parameters={...Ne.parameters,docs:{...Ne.parameters?.docs,source:{originalSource:`{
  args: {
    onSlideChange: fn()
  },
  render: function CarouselWithAPI(args) {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
      const onSelect = () => {
        const newSlide = api.selectedScrollSnap() + 1;
        setCurrent(newSlide);
        // Properly call the action from args
        args.onSlideChange?.(\`Slide changed to \${newSlide}\`, {
          slide: newSlide,
          total: count
        });
      };
      api.on("select", onSelect);
      return () => {
        api.off("select", onSelect);
      };
    }, [api, args.onSlideChange, count]);
    return <div className="w-full max-w-xs">
        <Carousel setApi={setApi} {...args}>
          <CarouselContent>
            {Array.from({
            length: 5
          }).map((_, index) => <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>;
  }
}`,...Ne.parameters?.docs?.source},description:{story:"Use state and the `setApi` prop to get an instance of the carousel API.",...Ne.parameters?.docs?.description}}};Me.parameters={...Me.parameters,docs:{...Me.parameters?.docs,source:{originalSource:`{
  name: "when clicking next/previous buttons, should navigate through slides",
  tags: ["!dev", "!autodocs"],
  play: async ({
    canvas,
    step
  }) => {
    const slides = await canvas.findAllByRole("group");
    expect(slides).toHaveLength(5);
    const nextBtn = await canvas.findByRole("button", {
      name: /next/i
    });
    const prevBtn = await canvas.findByRole("button", {
      name: /previous/i
    });
    await step("navigate to the last slide", async () => {
      for (let i = 0; i < slides.length - 1; i++) {
        await userEvent.click(nextBtn);
      }
    });
    await step("navigate back to the first slide", async () => {
      for (let i = slides.length - 1; i > 0; i--) {
        await userEvent.click(prevBtn);
      }
    });
  }
}`,...Me.parameters?.docs?.source}}};je.parameters={...je.parameters,docs:{...je.parameters?.docs,source:{originalSource:`{
  name: "keyboard navigation test",
  tags: ["!dev", "!autodocs"],
  render: function KeyboardNavCarousel(args) {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    React.useEffect(() => {
      if (!api) return;
      setCurrent(api.selectedScrollSnap());
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap());
      });
    }, [api]);
    return <div>
        <Carousel setApi={setApi} {...args} className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({
            length: 5
          }).map((_, index) => <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center" data-testid="current-slide">
          Slide {current}
        </div>
      </div>;
  },
  play: async ({
    canvas,
    step
  }) => {
    // Wait for carousel to be ready
    const carousel = await canvas.findByRole("region");
    const slideIndicator = await canvas.findByTestId("current-slide");

    // Verify initial state
    await step("Initial state should be slide 0", async () => {
      expect(slideIndicator).toHaveTextContent("Slide 0");
    });

    // Test ArrowRight navigation
    await step("ArrowRight should navigate forward", async () => {
      const rightEvent = new KeyboardEvent("keydown", {
        key: "ArrowRight",
        bubbles: true,
        cancelable: true
      });
      carousel.dispatchEvent(rightEvent);

      // Wait for animation/state update
      await new Promise(resolve => setTimeout(resolve, 300));
      expect(slideIndicator).toHaveTextContent("Slide 1");

      // Navigate again
      carousel.dispatchEvent(rightEvent);
      await new Promise(resolve => setTimeout(resolve, 300));
      expect(slideIndicator).toHaveTextContent("Slide 2");
    });

    // Test ArrowLeft navigation
    await step("ArrowLeft should navigate backward", async () => {
      const leftEvent = new KeyboardEvent("keydown", {
        key: "ArrowLeft",
        bubbles: true,
        cancelable: true
      });
      carousel.dispatchEvent(leftEvent);

      // Wait for animation/state update
      await new Promise(resolve => setTimeout(resolve, 300));
      expect(slideIndicator).toHaveTextContent("Slide 1");

      // Navigate back to start
      carousel.dispatchEvent(leftEvent);
      await new Promise(resolve => setTimeout(resolve, 300));
      expect(slideIndicator).toHaveTextContent("Slide 0");
    });

    // Test that other keys don't navigate
    await step("Other keys should not navigate", async () => {
      const upEvent = new KeyboardEvent("keydown", {
        key: "ArrowUp",
        bubbles: true,
        cancelable: true
      });
      carousel.dispatchEvent(upEvent);
      await new Promise(resolve => setTimeout(resolve, 300));
      // Should still be at slide 0
      expect(slideIndicator).toHaveTextContent("Slide 0");
    });

    // Test preventDefault behavior
    await step("Arrow keys should preventDefault", async () => {
      let defaultPrevented = false;
      const preventableEvent = new KeyboardEvent("keydown", {
        key: "ArrowRight",
        bubbles: true,
        cancelable: true
      });

      // Add listener to check if default was prevented
      carousel.addEventListener("keydown", e => {
        if (e.defaultPrevented) defaultPrevented = true;
      }, {
        once: true
      });
      carousel.dispatchEvent(preventableEvent);

      // The carousel should have called preventDefault on arrow keys
      expect(preventableEvent.defaultPrevented || defaultPrevented).toBe(true);
    });
  }
}`,...je.parameters?.docs?.source},description:{story:"Test keyboard navigation - verifies arrow keys navigate the carousel.",...je.parameters?.docs?.description}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`{
  tags: ["!dev", "!autodocs"],
  render: () => <InvalidCarouselUsage />,
  parameters: {
    a11y: {
      disable: true
    }
  },
  play: async ({
    canvas
  }) => {
    const error = await canvas.findByText(/useCarousel must be used within a <Carousel \\/>/);
    expect(error).toBeInTheDocument();
  }
}`,...Ee.parameters?.docs?.source},description:{story:"Test that useCarousel throws an error when used outside Carousel context.",...Ee.parameters?.docs?.description}}};const jn=["Default","Sizes","ResponsiveSizes","Spacing","Orientation","WithOptions","WithAPI","ShouldNavigate","KeyboardNavigation","ContextError"];export{Ee as ContextError,ve as Default,je as KeyboardNavigation,we as Orientation,Ce as ResponsiveSizes,Me as ShouldNavigate,ye as Sizes,be as Spacing,Ne as WithAPI,Se as WithOptions,jn as __namedExportsOrder,Nn as default};
