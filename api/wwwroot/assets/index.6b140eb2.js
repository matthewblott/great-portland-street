(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function S(){}function te(e){return e()}function U(){return Object.create(null)}function M(e){e.forEach(te)}function ne(e){return typeof e=="function"}function Q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ce(e){return Object.keys(e).length===0}function fe(e,...t){if(e==null)return S;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function ae(e,t,n){e.$$.on_destroy.push(fe(t,n))}function W(e,t,n){return e.set(n),t}function u(e,t){e.appendChild(t)}function B(e,t,n){e.insertBefore(t,n||null)}function A(e){e.parentNode.removeChild(e)}function de(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function v(){return C(" ")}function x(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function he(e){return Array.from(e.childNodes)}function D(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let I;function P(e){I=e}function me(){if(!I)throw new Error("Function called outside component initialization");return I}function pe(e){me().$$.on_mount.push(e)}const T=[],X=[],z=[],Y=[],_e=Promise.resolve();let K=!1;function ge(){K||(K=!0,_e.then(re))}function J(e){z.push(e)}const G=new Set;let V=0;function re(){const e=I;do{for(;V<T.length;){const t=T[V];V++,P(t),be(t.$$)}for(P(null),T.length=0,V=0;X.length;)X.pop()();for(let t=0;t<z.length;t+=1){const n=z[t];G.has(n)||(G.add(n),n())}z.length=0}while(T.length);for(;Y.length;)Y.pop()();K=!1,G.clear(),P(e)}function be(e){if(e.fragment!==null){e.update(),M(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(J)}}const F=new Set;let $e;function oe(e,t){e&&e.i&&(F.delete(e),e.i(t))}function ye(e,t,n,r){if(e&&e.o){if(F.has(e))return;F.add(e),$e.c.push(()=>{F.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ve(e){e&&e.c()}function ie(e,t,n,r){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),r||J(()=>{const c=e.$$.on_mount.map(te).filter(ne);e.$$.on_destroy?e.$$.on_destroy.push(...c):M(c),e.$$.on_mount=[]}),i.forEach(J)}function le(e,t){const n=e.$$;n.fragment!==null&&(M(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function we(e,t){e.$$.dirty[0]===-1&&(T.push(e),ge(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ue(e,t,n,r,o,i,c,d=[-1]){const h=I;P(e);const l=e.$$={fragment:null,ctx:[],props:i,update:S,not_equal:o,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:U(),dirty:d,skip_bound:!1,root:t.target||h.$$.root};c&&c(l.root);let b=!1;if(l.ctx=n?n(e,t.props||{},(s,p,...y)=>{const g=y.length?y[0]:p;return l.ctx&&o(l.ctx[s],l.ctx[s]=g)&&(!l.skip_bound&&l.bound[s]&&l.bound[s](g),b&&we(e,s)),p}):[],l.update(),b=!0,M(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const s=he(t.target);l.fragment&&l.fragment.l(s),s.forEach(A)}else l.fragment&&l.fragment.c();t.intro&&oe(e.$$.fragment),ie(e,t.target,t.anchor,t.customElement),re()}P(h)}class se{$destroy(){le(this,1),this.$destroy=S}$on(t,n){if(!ne(n))return S;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!ce(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const j=[];function Ne(e,t=S){let n;const r=new Set;function o(d){if(Q(e,d)&&(e=d,n)){const h=!j.length;for(const l of r)l[1](),j.push(l,e);if(h){for(let l=0;l<j.length;l+=2)j[l][0](j[l+1]);j.length=0}}}function i(d){o(d(e))}function c(d,h=S){const l=[d,h];return r.add(l),r.size===1&&(n=t(o)||S),d(e),()=>{r.delete(l),r.size===0&&(n(),n=null)}}return{set:o,update:i,subscribe:c}}const q=Ne([]);function Z(e,t,n){const r=e.slice();return r[8]=t[n].id,r[9]=t[n].currentLocation,r[10]=t[n].destinationName,r[11]=t[n].platformName,r[12]=t[n].direction,r[13]=t[n].expectedArrival,r[14]=t[n].lineName,r}function ee(e){let t,n,r=e[14]+"",o,i,c,d=(e[10]===void 0?"":e[10])+"",h,l,b,s=e[11]+"",p,y,g,w=(e[12]===void 0?"":e[12])+"",N,E,a,f=e[1](e[13])+"",L,m,k=e[2](e[13])+"",H,R;return{c(){t=_("tr"),n=_("td"),o=C(r),i=v(),c=_("td"),h=C(d),l=v(),b=_("td"),p=C(s),y=v(),g=_("td"),N=C(w),E=v(),a=_("td"),L=C(f),m=v(),H=C(k),R=v()},m($,O){B($,t,O),u(t,n),u(n,o),u(t,i),u(t,c),u(c,h),u(t,l),u(t,b),u(b,p),u(t,y),u(t,g),u(g,N),u(t,E),u(t,a),u(a,L),u(a,m),u(a,H),u(t,R)},p($,O){O&1&&r!==(r=$[14]+"")&&D(o,r),O&1&&d!==(d=($[10]===void 0?"":$[10])+"")&&D(h,d),O&1&&s!==(s=$[11]+"")&&D(p,s),O&1&&w!==(w=($[12]===void 0?"":$[12])+"")&&D(N,w),O&1&&f!==(f=$[1]($[13])+"")&&D(L,f),O&1&&k!==(k=$[2]($[13])+"")&&D(H,k)},d($){$&&A(t)}}}function Se(e){let t,n,r,o,i,c,d,h,l,b,s,p,y,g,w,N,E=e[0],a=[];for(let f=0;f<E.length;f+=1)a[f]=ee(Z(e,E,f));return{c(){t=_("div"),n=_("table"),r=_("thead"),o=_("th"),o.textContent="Line",i=v(),c=_("th"),c.textContent="Destination",d=v(),h=_("th"),h.textContent="Platform",l=v(),b=_("th"),b.textContent="Direction",s=v(),p=_("th"),p.textContent="Expected",y=v(),g=_("tbody");for(let f=0;f<a.length;f+=1)a[f].c()},m(f,L){B(f,t,L),u(t,n),u(n,r),u(r,o),u(r,i),u(r,c),u(r,d),u(r,h),u(r,l),u(r,b),u(r,s),u(r,p),u(n,y),u(n,g);for(let m=0;m<a.length;m+=1)a[m].m(g,null);w||(N=[x(o,"click",e[3]),x(c,"click",e[3]),x(h,"click",e[3]),x(b,"click",e[3]),x(p,"click",e[3])],w=!0)},p(f,[L]){if(L&7){E=f[0];let m;for(m=0;m<E.length;m+=1){const k=Z(f,E,m);a[m]?a[m].p(k,L):(a[m]=ee(k),a[m].c(),a[m].m(g,null))}for(;m<a.length;m+=1)a[m].d(1);a.length=E.length}},i:S,o:S,d(f){f&&A(t),de(a,f),w=!1,M(N)}}}function Ee(e,t,n){let r,o;ae(e,q,s=>n(0,o=s)),setInterval(async()=>{W(q,o=await b(),o),await c()},5e3);const i=s=>{switch(s){case"Line":return"lineName";case"Destination":return"destinationName";case"Platform":return"platformName";case"Direction":return"direction";case"Expected":return"expectedArrival";default:return"lineName"}},c=()=>{o.sort((s,p)=>{let y=Object.entries(s).find(N=>N[0]===r)[1],g=Object.entries(p).find(N=>N[0]===r)[1];return y>g?1:g>y?-1:0}),q.set(o)},d=s=>new Date(s).toISOString().substring(0,10),h=s=>new Date(s).toISOString().substring(11,16),l=s=>{let p=s.path[0].innerText;r=i(p),c()},b=async()=>(await(await fetch("TravelStop")).json()).filter(w=>w.destinationName!==void 0);return pe(async()=>{W(q,o=await b(),o)}),r="lineName",[o,d,h,l]}class Le extends se{constructor(t){super(),ue(this,t,Ee,Se,Q,{})}}function Oe(e){let t,n,r,o;return r=new Le({}),{c(){t=_("main"),t.innerHTML="<h1>Great Portland Street Stops</h1>",n=v(),ve(r.$$.fragment)},m(i,c){B(i,t,c),B(i,n,c),ie(r,i,c),o=!0},p:S,i(i){o||(oe(r.$$.fragment,i),o=!0)},o(i){ye(r.$$.fragment,i),o=!1},d(i){i&&A(t),i&&A(n),le(r,i)}}}class ke extends se{constructor(t){super(),ue(this,t,null,Oe,Q,{})}}new ke({target:document.getElementById("app")});
