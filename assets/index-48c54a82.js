(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function jl(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ie={},ss=[],Bt=()=>{},z0=()=>!1,q0=/^on[^a-z]/,La=t=>q0.test(t),zl=t=>t.startsWith("onUpdate:"),Le=Object.assign,ql=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},H0=Object.prototype.hasOwnProperty,he=(t,e)=>H0.call(t,e),G=Array.isArray,is=t=>$a(t)==="[object Map]",em=t=>$a(t)==="[object Set]",se=t=>typeof t=="function",$e=t=>typeof t=="string",Hl=t=>typeof t=="symbol",Ae=t=>t!==null&&typeof t=="object",tm=t=>Ae(t)&&se(t.then)&&se(t.catch),nm=Object.prototype.toString,$a=t=>nm.call(t),K0=t=>$a(t).slice(8,-1),rm=t=>$a(t)==="[object Object]",Kl=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Po=jl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ua=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},W0=/-(\w)/g,an=Ua(t=>t.replace(W0,(e,n)=>n?n.toUpperCase():"")),G0=/\B([A-Z])/g,Rs=Ua(t=>t.replace(G0,"-$1").toLowerCase()),Ba=Ua(t=>t.charAt(0).toUpperCase()+t.slice(1)),zu=Ua(t=>t?`on${Ba(t)}`:""),Di=(t,e)=>!Object.is(t,e),Mo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Xo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Rc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Q0=t=>{const e=$e(t)?Number(t):NaN;return isNaN(e)?t:e};let ed;const Fc=()=>ed||(ed=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wl(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=$e(r)?Z0(r):Wl(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if($e(t))return t;if(Ae(t))return t}}const Y0=/;(?![^(]*\))/g,X0=/:([^]+)/,J0=new RegExp("\\/\\*.*?\\*\\/","gs");function Z0(t){const e={};return t.replace(J0,"").split(Y0).forEach(n=>{if(n){const r=n.split(X0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ki(t){let e="";if($e(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const r=Ki(t[n]);r&&(e+=r+" ")}else if(Ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const e1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",t1=jl(e1);function sm(t){return!!t||t===""}const Cn=t=>$e(t)?t:t==null?"":G(t)||Ae(t)&&(t.toString===nm||!se(t.toString))?JSON.stringify(t,im,2):String(t),im=(t,e)=>e&&e.__v_isRef?im(t,e.value):is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:em(e)?{[`Set(${e.size})`]:[...e.values()]}:Ae(e)&&!G(e)&&!rm(e)?String(e):e;let Ct;class om{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function am(t){return new om(t)}function n1(t,e=Ct){e&&e.active&&e.effects.push(t)}function um(){return Ct}function r1(t){Ct&&Ct.cleanups.push(t)}const Gl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},cm=t=>(t.w&er)>0,lm=t=>(t.n&er)>0,s1=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=er},i1=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];cm(s)&&!lm(s)?s.delete(t):e[n++]=s,s.w&=~er,s.n&=~er}e.length=n}},Jo=new WeakMap;let Qs=0,er=1;const Nc=30;let Lt;const br=Symbol(""),Oc=Symbol("");class Ql{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,n1(this,r)}run(){if(!this.active)return this.fn();let e=Lt,n=Kn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Lt,Lt=this,Kn=!0,er=1<<++Qs,Qs<=Nc?s1(this):td(this),this.fn()}finally{Qs<=Nc&&i1(this),er=1<<--Qs,Lt=this.parent,Kn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Lt===this?this.deferStop=!0:this.active&&(td(this),this.onStop&&this.onStop(),this.active=!1)}}function td(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Kn=!0;const hm=[];function Fs(){hm.push(Kn),Kn=!1}function Ns(){const t=hm.pop();Kn=t===void 0?!0:t}function bt(t,e,n){if(Kn&&Lt){let r=Jo.get(t);r||Jo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Gl()),fm(s)}}function fm(t,e){let n=!1;Qs<=Nc?lm(t)||(t.n|=er,n=!cm(t)):n=!t.has(Lt),n&&(t.add(Lt),Lt.deps.push(t))}function In(t,e,n,r,s,i){const o=Jo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const u=Number(r);o.forEach((c,l)=>{(l==="length"||l>=u)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?Kl(n)&&a.push(o.get("length")):(a.push(o.get(br)),is(t)&&a.push(o.get(Oc)));break;case"delete":G(t)||(a.push(o.get(br)),is(t)&&a.push(o.get(Oc)));break;case"set":is(t)&&a.push(o.get(br));break}if(a.length===1)a[0]&&Pc(a[0]);else{const u=[];for(const c of a)c&&u.push(...c);Pc(Gl(u))}}function Pc(t,e){const n=G(t)?t:[...t];for(const r of n)r.computed&&nd(r);for(const r of n)r.computed||nd(r)}function nd(t,e){(t!==Lt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function o1(t,e){var n;return(n=Jo.get(t))==null?void 0:n.get(e)}const a1=jl("__proto__,__v_isRef,__isVue"),dm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Hl)),u1=Yl(),c1=Yl(!1,!0),l1=Yl(!0),rd=h1();function h1(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ue(this);for(let i=0,o=this.length;i<o;i++)bt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ue)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Fs();const r=ue(this)[e].apply(this,n);return Ns(),r}}),t}function f1(t){const e=ue(this);return bt(e,"has",t),e.hasOwnProperty(t)}function Yl(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?A1:ym:e?Dm:mm).get(r))return r;const o=G(r);if(!t){if(o&&he(rd,s))return Reflect.get(rd,s,i);if(s==="hasOwnProperty")return f1}const a=Reflect.get(r,s,i);return(Hl(s)?dm.has(s):a1(s))||(t||bt(r,"get",s),e)?a:Me(a)?o&&Kl(s)?a:a.value:Ae(a)?t?_m(a):Os(a):a}}const d1=pm(),p1=pm(!0);function pm(t=!1){return function(n,r,s,i){let o=n[r];if(gs(o)&&Me(o)&&!Me(s))return!1;if(!t&&(!Zo(s)&&!gs(s)&&(o=ue(o),s=ue(s)),!G(n)&&Me(o)&&!Me(s)))return o.value=s,!0;const a=G(n)&&Kl(r)?Number(r)<n.length:he(n,r),u=Reflect.set(n,r,s,i);return n===ue(i)&&(a?Di(s,o)&&In(n,"set",r,s):In(n,"add",r,s)),u}}function g1(t,e){const n=he(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&In(t,"delete",e,void 0),r}function m1(t,e){const n=Reflect.has(t,e);return(!Hl(e)||!dm.has(e))&&bt(t,"has",e),n}function D1(t){return bt(t,"iterate",G(t)?"length":br),Reflect.ownKeys(t)}const gm={get:u1,set:d1,deleteProperty:g1,has:m1,ownKeys:D1},y1={get:l1,set(t,e){return!0},deleteProperty(t,e){return!0}},_1=Le({},gm,{get:c1,set:p1}),Xl=t=>t,Va=t=>Reflect.getPrototypeOf(t);function yo(t,e,n=!1,r=!1){t=t.__v_raw;const s=ue(t),i=ue(e);n||(e!==i&&bt(s,"get",e),bt(s,"get",i));const{has:o}=Va(s),a=r?Xl:n?eh:yi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function _o(t,e=!1){const n=this.__v_raw,r=ue(n),s=ue(t);return e||(t!==s&&bt(r,"has",t),bt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function vo(t,e=!1){return t=t.__v_raw,!e&&bt(ue(t),"iterate",br),Reflect.get(t,"size",t)}function sd(t){t=ue(t);const e=ue(this);return Va(e).has.call(e,t)||(e.add(t),In(e,"add",t,t)),this}function id(t,e){e=ue(e);const n=ue(this),{has:r,get:s}=Va(n);let i=r.call(n,t);i||(t=ue(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Di(e,o)&&In(n,"set",t,e):In(n,"add",t,e),this}function od(t){const e=ue(this),{has:n,get:r}=Va(e);let s=n.call(e,t);s||(t=ue(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&In(e,"delete",t,void 0),i}function ad(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&In(t,"clear",void 0,void 0),n}function wo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ue(o),u=e?Xl:t?eh:yi;return!t&&bt(a,"iterate",br),o.forEach((c,l)=>r.call(s,u(c),u(l),i))}}function bo(t,e,n){return function(...r){const s=this.__v_raw,i=ue(s),o=is(i),a=t==="entries"||t===Symbol.iterator&&o,u=t==="keys"&&o,c=s[t](...r),l=n?Xl:e?eh:yi;return!e&&bt(i,"iterate",u?Oc:br),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function On(t){return function(...e){return t==="delete"?!1:this}}function v1(){const t={get(i){return yo(this,i)},get size(){return vo(this)},has:_o,add:sd,set:id,delete:od,clear:ad,forEach:wo(!1,!1)},e={get(i){return yo(this,i,!1,!0)},get size(){return vo(this)},has:_o,add:sd,set:id,delete:od,clear:ad,forEach:wo(!1,!0)},n={get(i){return yo(this,i,!0)},get size(){return vo(this,!0)},has(i){return _o.call(this,i,!0)},add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear"),forEach:wo(!0,!1)},r={get(i){return yo(this,i,!0,!0)},get size(){return vo(this,!0)},has(i){return _o.call(this,i,!0)},add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear"),forEach:wo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=bo(i,!1,!1),n[i]=bo(i,!0,!1),e[i]=bo(i,!1,!0),r[i]=bo(i,!0,!0)}),[t,n,e,r]}const[w1,b1,E1,C1]=v1();function Jl(t,e){const n=e?t?C1:E1:t?b1:w1;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(he(n,s)&&s in r?n:r,s,i)}const I1={get:Jl(!1,!1)},T1={get:Jl(!1,!0)},k1={get:Jl(!0,!1)},mm=new WeakMap,Dm=new WeakMap,ym=new WeakMap,A1=new WeakMap;function S1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function x1(t){return t.__v_skip||!Object.isExtensible(t)?0:S1(K0(t))}function Os(t){return gs(t)?t:Zl(t,!1,gm,I1,mm)}function R1(t){return Zl(t,!1,_1,T1,Dm)}function _m(t){return Zl(t,!0,y1,k1,ym)}function Zl(t,e,n,r,s){if(!Ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=x1(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Wn(t){return gs(t)?Wn(t.__v_raw):!!(t&&t.__v_isReactive)}function gs(t){return!!(t&&t.__v_isReadonly)}function Zo(t){return!!(t&&t.__v_isShallow)}function vm(t){return Wn(t)||gs(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function ms(t){return Xo(t,"__v_skip",!0),t}const yi=t=>Ae(t)?Os(t):t,eh=t=>Ae(t)?_m(t):t;function wm(t){Kn&&Lt&&(t=ue(t),fm(t.dep||(t.dep=Gl())))}function bm(t,e){t=ue(t);const n=t.dep;n&&Pc(n)}function Me(t){return!!(t&&t.__v_isRef===!0)}function Fe(t){return Em(t,!1)}function F1(t){return Em(t,!0)}function Em(t,e){return Me(t)?t:new N1(t,e)}class N1{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:yi(e)}get value(){return wm(this),this._value}set value(e){const n=this.__v_isShallow||Zo(e)||gs(e);e=n?e:ue(e),Di(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:yi(e),bm(this))}}function De(t){return Me(t)?t.value:t}const O1={get:(t,e,n)=>De(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Me(s)&&!Me(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Cm(t){return Wn(t)?t:new Proxy(t,O1)}function P1(t){const e=G(t)?new Array(t.length):{};for(const n in t)e[n]=L1(t,n);return e}class M1{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return o1(ue(this._object),this._key)}}function L1(t,e,n){const r=t[e];return Me(r)?r:new M1(t,e,n)}class $1{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ql(e,()=>{this._dirty||(this._dirty=!0,bm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ue(this);return wm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function U1(t,e,n=!1){let r,s;const i=se(t);return i?(r=t,s=Bt):(r=t.get,s=t.set),new $1(r,s,i||!s,n)}function Gn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ja(i,e,n)}return s}function Ft(t,e,n,r){if(se(t)){const i=Gn(t,e,n,r);return i&&tm(i)&&i.catch(o=>{ja(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ft(t[i],e,n,r));return s}function ja(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let l=0;l<c.length;l++)if(c[l](t,o,a)===!1)return}i=i.parent}const u=e.appContext.config.errorHandler;if(u){Gn(u,null,10,[t,o,a]);return}}B1(t,n,s,r)}function B1(t,e,n,r=!0){console.error(t)}let _i=!1,Mc=!1;const st=[];let Zt=0;const os=[];let mn=null,dr=0;const Im=Promise.resolve();let th=null;function nh(t){const e=th||Im;return t?e.then(this?t.bind(this):t):e}function V1(t){let e=Zt+1,n=st.length;for(;e<n;){const r=e+n>>>1;vi(st[r])<t?e=r+1:n=r}return e}function rh(t){(!st.length||!st.includes(t,_i&&t.allowRecurse?Zt+1:Zt))&&(t.id==null?st.push(t):st.splice(V1(t.id),0,t),Tm())}function Tm(){!_i&&!Mc&&(Mc=!0,th=Im.then(Am))}function j1(t){const e=st.indexOf(t);e>Zt&&st.splice(e,1)}function z1(t){G(t)?os.push(...t):(!mn||!mn.includes(t,t.allowRecurse?dr+1:dr))&&os.push(t),Tm()}function ud(t,e=_i?Zt+1:0){for(;e<st.length;e++){const n=st[e];n&&n.pre&&(st.splice(e,1),e--,n())}}function km(t){if(os.length){const e=[...new Set(os)];if(os.length=0,mn){mn.push(...e);return}for(mn=e,mn.sort((n,r)=>vi(n)-vi(r)),dr=0;dr<mn.length;dr++)mn[dr]();mn=null,dr=0}}const vi=t=>t.id==null?1/0:t.id,q1=(t,e)=>{const n=vi(t)-vi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Am(t){Mc=!1,_i=!0,st.sort(q1);const e=Bt;try{for(Zt=0;Zt<st.length;Zt++){const n=st[Zt];n&&n.active!==!1&&Gn(n,null,14)}}finally{Zt=0,st.length=0,km(),_i=!1,th=null,(st.length||os.length)&&Am()}}function H1(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ie;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[l]||Ie;f&&(s=n.map(d=>$e(d)?d.trim():d)),h&&(s=n.map(Rc))}let a,u=r[a=zu(e)]||r[a=zu(an(e))];!u&&i&&(u=r[a=zu(Rs(e))]),u&&Ft(u,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ft(c,t,6,s)}}function Sm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!se(t)){const u=c=>{const l=Sm(c,e,!0);l&&(a=!0,Le(o,l))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!i&&!a?(Ae(t)&&r.set(t,null),null):(G(i)?i.forEach(u=>o[u]=null):Le(o,i),Ae(t)&&r.set(t,o),o)}function za(t,e){return!t||!La(e)?!1:(e=e.slice(2).replace(/Once$/,""),he(t,e[0].toLowerCase()+e.slice(1))||he(t,Rs(e))||he(t,e))}let Je=null,qa=null;function ea(t){const e=Je;return Je=t,qa=t&&t.type.__scopeId||null,e}function K1(t){qa=t}function W1(){qa=null}function yt(t,e=Je,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&vd(-1);const i=ea(e);let o;try{o=t(...s)}finally{ea(i),r._d&&vd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function qu(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:u,emit:c,render:l,renderCache:h,data:f,setupState:d,ctx:D,inheritAttrs:y}=t;let _,k;const C=ea(t);try{if(n.shapeFlag&4){const N=s||r;_=Jt(l.call(N,N,h,i,d,f,D)),k=u}else{const N=e;_=Jt(N.length>1?N(i,{attrs:u,slots:a,emit:c}):N(i,null)),k=e.props?u:G1(u)}}catch(N){oi.length=0,ja(N,t,1),_=ye(Ot)}let O=_;if(k&&y!==!1){const N=Object.keys(k),{shapeFlag:Q}=O;N.length&&Q&7&&(o&&N.some(zl)&&(k=Q1(k,o)),O=tr(O,k))}return n.dirs&&(O=tr(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),_=O,ea(C),_}const G1=t=>{let e;for(const n in t)(n==="class"||n==="style"||La(n))&&((e||(e={}))[n]=t[n]);return e},Q1=(t,e)=>{const n={};for(const r in t)(!zl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Y1(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:u}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?cd(r,o,c):!!o;if(u&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==r[f]&&!za(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?cd(r,o,c):!0:!!o;return!1}function cd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!za(n,i))return!0}return!1}function X1({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const J1=t=>t.__isSuspense;function Z1(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):z1(t)}const Eo={};function ri(t,e,n){return xm(t,e,n)}function xm(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ie){var a;const u=um()===((a=We)==null?void 0:a.scope)?We:null;let c,l=!1,h=!1;if(Me(t)?(c=()=>t.value,l=Zo(t)):Wn(t)?(c=()=>t,r=!0):G(t)?(h=!0,l=t.some(N=>Wn(N)||Zo(N)),c=()=>t.map(N=>{if(Me(N))return N.value;if(Wn(N))return mr(N);if(se(N))return Gn(N,u,2)})):se(t)?e?c=()=>Gn(t,u,2):c=()=>{if(!(u&&u.isUnmounted))return f&&f(),Ft(t,u,3,[d])}:c=Bt,e&&r){const N=c;c=()=>mr(N())}let f,d=N=>{f=C.onStop=()=>{Gn(N,u,4)}},D;if(Ci)if(d=Bt,e?n&&Ft(e,u,3,[c(),h?[]:void 0,d]):c(),s==="sync"){const N=Kw();D=N.__watcherHandles||(N.__watcherHandles=[])}else return Bt;let y=h?new Array(t.length).fill(Eo):Eo;const _=()=>{if(C.active)if(e){const N=C.run();(r||l||(h?N.some((Q,U)=>Di(Q,y[U])):Di(N,y)))&&(f&&f(),Ft(e,u,3,[N,y===Eo?void 0:h&&y[0]===Eo?[]:y,d]),y=N)}else C.run()};_.allowRecurse=!!e;let k;s==="sync"?k=_:s==="post"?k=()=>gt(_,u&&u.suspense):(_.pre=!0,u&&(_.id=u.uid),k=()=>rh(_));const C=new Ql(c,k);e?n?_():y=C.run():s==="post"?gt(C.run.bind(C),u&&u.suspense):C.run();const O=()=>{C.stop(),u&&u.scope&&ql(u.scope.effects,C)};return D&&D.push(O),O}function ew(t,e,n){const r=this.proxy,s=$e(t)?t.includes(".")?Rm(r,t):()=>r[t]:t.bind(r,r);let i;se(e)?i=e:(i=e.handler,n=e);const o=We;Ds(this);const a=xm(s,i.bind(r),n);return o?Ds(o):Er(),a}function Rm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function mr(t,e){if(!Ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))mr(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)mr(t[n],e);else if(em(t)||is(t))t.forEach(n=>{mr(n,e)});else if(rm(t))for(const n in t)mr(t[n],e);return t}function ta(t,e){const n=Je;if(n===null)return t;const r=Ya(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,u,c=Ie]=e[i];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&mr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:u,modifiers:c}))}return t}function cr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let u=a.dir[r];u&&(Fs(),Ft(u,n,8,[t.el,a,t,e]),Ns())}}function Fm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ih(()=>{t.isMounted=!0}),$m(()=>{t.isUnmounting=!0}),t}const xt=[Function,Array],Nm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xt,onEnter:xt,onAfterEnter:xt,onEnterCancelled:xt,onBeforeLeave:xt,onLeave:xt,onAfterLeave:xt,onLeaveCancelled:xt,onBeforeAppear:xt,onAppear:xt,onAfterAppear:xt,onAppearCancelled:xt},tw={name:"BaseTransition",props:Nm,setup(t,{slots:e}){const n=hh(),r=Fm();let s;return()=>{const i=e.default&&Ha(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==Ot){o=y;break}}const a=ue(t),{mode:u}=a;if(r.isLeaving)return Hu(o);const c=ld(o);if(!c)return Hu(o);const l=wi(c,a,r,n);bi(c,l);const h=n.subTree,f=h&&ld(h);let d=!1;const{getTransitionKey:D}=c.type;if(D){const y=D();s===void 0?s=y:y!==s&&(s=y,d=!0)}if(f&&f.type!==Ot&&(!pr(c,f)||d)){const y=wi(f,a,r,n);if(bi(f,y),u==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Hu(o);u==="in-out"&&c.type!==Ot&&(y.delayLeave=(_,k,C)=>{const O=Om(r,f);O[String(f.key)]=f,_._leaveCb=()=>{k(),_._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=C})}return o}}},nw=tw;function Om(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function wi(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:u,onAfterEnter:c,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:D,onBeforeAppear:y,onAppear:_,onAfterAppear:k,onAppearCancelled:C}=e,O=String(t.key),N=Om(n,t),Q=(x,Y)=>{x&&Ft(x,r,9,Y)},U=(x,Y)=>{const X=Y[1];Q(x,Y),G(x)?x.every(Ce=>Ce.length<=1)&&X():x.length<=1&&X()},z={mode:i,persisted:o,beforeEnter(x){let Y=a;if(!n.isMounted)if(s)Y=y||a;else return;x._leaveCb&&x._leaveCb(!0);const X=N[O];X&&pr(t,X)&&X.el._leaveCb&&X.el._leaveCb(),Q(Y,[x])},enter(x){let Y=u,X=c,Ce=l;if(!n.isMounted)if(s)Y=_||u,X=k||c,Ce=C||l;else return;let V=!1;const de=x._enterCb=Oe=>{V||(V=!0,Oe?Q(Ce,[x]):Q(X,[x]),z.delayedLeave&&z.delayedLeave(),x._enterCb=void 0)};Y?U(Y,[x,de]):de()},leave(x,Y){const X=String(t.key);if(x._enterCb&&x._enterCb(!0),n.isUnmounting)return Y();Q(h,[x]);let Ce=!1;const V=x._leaveCb=de=>{Ce||(Ce=!0,Y(),de?Q(D,[x]):Q(d,[x]),x._leaveCb=void 0,N[X]===t&&delete N[X])};N[X]=t,f?U(f,[x,V]):V()},clone(x){return wi(x,e,n,r)}};return z}function Hu(t){if(Ka(t))return t=tr(t),t.children=null,t}function ld(t){return Ka(t)?t.children?t.children[0]:void 0:t}function bi(t,e){t.shapeFlag&6&&t.component?bi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ha(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===mt?(o.patchFlag&128&&s++,r=r.concat(Ha(o.children,e,a))):(e||o.type!==Ot)&&r.push(a!=null?tr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function sh(t,e){return se(t)?(()=>Le({name:t.name},e,{setup:t}))():t}const si=t=>!!t.type.__asyncLoader,Ka=t=>t.type.__isKeepAlive;function rw(t,e){Pm(t,"a",e)}function sw(t,e){Pm(t,"da",e)}function Pm(t,e,n=We){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Wa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ka(s.parent.vnode)&&iw(r,e,n,s),s=s.parent}}function iw(t,e,n,r){const s=Wa(e,t,r,!0);Um(()=>{ql(r[e],s)},n)}function Wa(t,e,n=We,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Fs(),Ds(n);const a=Ft(e,n,t,o);return Er(),Ns(),a});return r?s.unshift(i):s.push(i),i}}const Rn=t=>(e,n=We)=>(!Ci||t==="sp")&&Wa(t,(...r)=>e(...r),n),ow=Rn("bm"),ih=Rn("m"),Mm=Rn("bu"),Lm=Rn("u"),$m=Rn("bum"),Um=Rn("um"),aw=Rn("sp"),uw=Rn("rtg"),cw=Rn("rtc");function lw(t,e=We){Wa("ec",t,e)}const oh="components",hw="directives";function Bm(t,e){return ah(oh,t,!0,e)||t}const Vm=Symbol.for("v-ndc");function fw(t){return $e(t)?ah(oh,t,!1)||t:t||Vm}function dw(t){return ah(hw,t)}function ah(t,e,n=!0,r=!1){const s=Je||We;if(s){const i=s.type;if(t===oh){const a=zw(i,!1);if(a&&(a===e||a===an(e)||a===Ba(an(e))))return i}const o=hd(s[t]||i[t],e)||hd(s.appContext[t],e);return!o&&r?i:o}}function hd(t,e){return t&&(t[e]||t[an(e)]||t[Ba(an(e))])}function pw(t,e,n,r){let s;const i=n&&n[r];if(G(t)||$e(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ae(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,u=o.length;a<u;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function Lc(t,e,n={},r,s){if(Je.isCE||Je.parent&&si(Je.parent)&&Je.parent.isCE)return e!=="default"&&(n.name=e),ye("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),le();const o=i&&jm(i(n)),a=_t(mt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function jm(t){return t.some(e=>sa(e)?!(e.type===Ot||e.type===mt&&!jm(e.children)):!0)?t:null}const $c=t=>t?Zm(t)?Ya(t)||t.proxy:$c(t.parent):null,ii=Le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$c(t.parent),$root:t=>$c(t.root),$emit:t=>t.emit,$options:t=>uh(t),$forceUpdate:t=>t.f||(t.f=()=>rh(t.update)),$nextTick:t=>t.n||(t.n=nh.bind(t.proxy)),$watch:t=>ew.bind(t)}),Ku=(t,e)=>t!==Ie&&!t.__isScriptSetup&&he(t,e),gw={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:u}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ku(r,e))return o[e]=1,r[e];if(s!==Ie&&he(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&he(c,e))return o[e]=3,i[e];if(n!==Ie&&he(n,e))return o[e]=4,n[e];Uc&&(o[e]=0)}}const l=ii[e];let h,f;if(l)return e==="$attrs"&&bt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ie&&he(n,e))return o[e]=4,n[e];if(f=u.config.globalProperties,he(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ku(s,e)?(s[e]=n,!0):r!==Ie&&he(r,e)?(r[e]=n,!0):he(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ie&&he(t,o)||Ku(e,o)||(a=i[0])&&he(a,o)||he(r,o)||he(ii,o)||he(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:he(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function fd(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Uc=!0;function mw(t){const e=uh(t),n=t.proxy,r=t.ctx;Uc=!1,e.beforeCreate&&dd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:u,inject:c,created:l,beforeMount:h,mounted:f,beforeUpdate:d,updated:D,activated:y,deactivated:_,beforeDestroy:k,beforeUnmount:C,destroyed:O,unmounted:N,render:Q,renderTracked:U,renderTriggered:z,errorCaptured:x,serverPrefetch:Y,expose:X,inheritAttrs:Ce,components:V,directives:de,filters:Oe}=e;if(c&&Dw(c,r,null),o)for(const be in o){const ge=o[be];se(ge)&&(r[be]=ge.bind(n))}if(s){const be=s.call(n,n);Ae(be)&&(t.data=Os(be))}if(Uc=!0,i)for(const be in i){const ge=i[be],fn=se(ge)?ge.bind(n,n):se(ge.get)?ge.get.bind(n,n):Bt,Nn=!se(ge)&&se(ge.set)?ge.set.bind(n):Bt,Gt=It({get:fn,set:Nn});Object.defineProperty(r,be,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:pt=>Gt.value=pt})}if(a)for(const be in a)zm(a[be],r,n,be);if(u){const be=se(u)?u.call(n):u;Reflect.ownKeys(be).forEach(ge=>{Lo(ge,be[ge])})}l&&dd(l,t,"c");function Pe(be,ge){G(ge)?ge.forEach(fn=>be(fn.bind(n))):ge&&be(ge.bind(n))}if(Pe(ow,h),Pe(ih,f),Pe(Mm,d),Pe(Lm,D),Pe(rw,y),Pe(sw,_),Pe(lw,x),Pe(cw,U),Pe(uw,z),Pe($m,C),Pe(Um,N),Pe(aw,Y),G(X))if(X.length){const be=t.exposed||(t.exposed={});X.forEach(ge=>{Object.defineProperty(be,ge,{get:()=>n[ge],set:fn=>n[ge]=fn})})}else t.exposed||(t.exposed={});Q&&t.render===Bt&&(t.render=Q),Ce!=null&&(t.inheritAttrs=Ce),V&&(t.components=V),de&&(t.directives=de)}function Dw(t,e,n=Bt){G(t)&&(t=Bc(t));for(const r in t){const s=t[r];let i;Ae(s)?"default"in s?i=Nt(s.from||r,s.default,!0):i=Nt(s.from||r):i=Nt(s),Me(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function dd(t,e,n){Ft(G(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function zm(t,e,n,r){const s=r.includes(".")?Rm(n,r):()=>n[r];if($e(t)){const i=e[t];se(i)&&ri(s,i)}else if(se(t))ri(s,t.bind(n));else if(Ae(t))if(G(t))t.forEach(i=>zm(i,e,n,r));else{const i=se(t.handler)?t.handler.bind(n):e[t.handler];se(i)&&ri(s,i,t)}}function uh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let u;return a?u=a:!s.length&&!n&&!r?u=e:(u={},s.length&&s.forEach(c=>na(u,c,o,!0)),na(u,e,o)),Ae(e)&&i.set(e,u),u}function na(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&na(t,i,n,!0),s&&s.forEach(o=>na(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=yw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const yw={data:pd,props:gd,emits:gd,methods:Ys,computed:Ys,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:Ys,directives:Ys,watch:vw,provide:pd,inject:_w};function pd(t,e){return e?t?function(){return Le(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function _w(t,e){return Ys(Bc(t),Bc(e))}function Bc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ft(t,e){return t?[...new Set([].concat(t,e))]:e}function Ys(t,e){return t?Le(Object.create(null),t,e):e}function gd(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:Le(Object.create(null),fd(t),fd(e??{})):e}function vw(t,e){if(!t)return e;if(!e)return t;const n=Le(Object.create(null),t);for(const r in e)n[r]=ft(t[r],e[r]);return n}function qm(){return{app:null,config:{isNativeTag:z0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ww=0;function bw(t,e){return function(r,s=null){se(r)||(r=Le({},r)),s!=null&&!Ae(s)&&(s=null);const i=qm(),o=new Set;let a=!1;const u=i.app={_uid:ww++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ww,get config(){return i.config},set config(c){},use(c,...l){return o.has(c)||(c&&se(c.install)?(o.add(c),c.install(u,...l)):se(c)&&(o.add(c),c(u,...l))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,l){return l?(i.components[c]=l,u):i.components[c]},directive(c,l){return l?(i.directives[c]=l,u):i.directives[c]},mount(c,l,h){if(!a){const f=ye(r,s);return f.appContext=i,l&&e?e(f,c):t(f,c,h),a=!0,u._container=c,c.__vue_app__=u,Ya(f.component)||f.component.proxy}},unmount(){a&&(t(null,u._container),delete u._container.__vue_app__)},provide(c,l){return i.provides[c]=l,u},runWithContext(c){ra=u;try{return c()}finally{ra=null}}};return u}}let ra=null;function Lo(t,e){if(We){let n=We.provides;const r=We.parent&&We.parent.provides;r===n&&(n=We.provides=Object.create(r)),n[t]=e}}function Nt(t,e,n=!1){const r=We||Je;if(r||ra){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ra._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&se(e)?e.call(r&&r.proxy):e}}function Ew(t,e,n,r=!1){const s={},i={};Xo(i,Qa,1),t.propsDefaults=Object.create(null),Hm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:R1(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Cw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ue(s),[u]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];if(za(t.emitsOptions,f))continue;const d=e[f];if(u)if(he(i,f))d!==i[f]&&(i[f]=d,c=!0);else{const D=an(f);s[D]=Vc(u,a,D,d,t,!1)}else d!==i[f]&&(i[f]=d,c=!0)}}}else{Hm(t,e,s,i)&&(c=!0);let l;for(const h in a)(!e||!he(e,h)&&((l=Rs(h))===h||!he(e,l)))&&(u?n&&(n[h]!==void 0||n[l]!==void 0)&&(s[h]=Vc(u,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!he(e,h))&&(delete i[h],c=!0)}c&&In(t,"set","$attrs")}function Hm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let u in e){if(Po(u))continue;const c=e[u];let l;s&&he(s,l=an(u))?!i||!i.includes(l)?n[l]=c:(a||(a={}))[l]=c:za(t.emitsOptions,u)||(!(u in r)||c!==r[u])&&(r[u]=c,o=!0)}if(i){const u=ue(n),c=a||Ie;for(let l=0;l<i.length;l++){const h=i[l];n[h]=Vc(s,u,h,c[h],t,!he(c,h))}}return o}function Vc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=he(o,"default");if(a&&r===void 0){const u=o.default;if(o.type!==Function&&!o.skipFactory&&se(u)){const{propsDefaults:c}=s;n in c?r=c[n]:(Ds(s),r=c[n]=u.call(null,e),Er())}else r=u}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Rs(n))&&(r=!0))}return r}function Km(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let u=!1;if(!se(t)){const l=h=>{u=!0;const[f,d]=Km(h,e,!0);Le(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!u)return Ae(t)&&r.set(t,ss),ss;if(G(i))for(let l=0;l<i.length;l++){const h=an(i[l]);md(h)&&(o[h]=Ie)}else if(i)for(const l in i){const h=an(l);if(md(h)){const f=i[l],d=o[h]=G(f)||se(f)?{type:f}:Le({},f);if(d){const D=_d(Boolean,d.type),y=_d(String,d.type);d[0]=D>-1,d[1]=y<0||D<y,(D>-1||he(d,"default"))&&a.push(h)}}}const c=[o,a];return Ae(t)&&r.set(t,c),c}function md(t){return t[0]!=="$"}function Dd(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function yd(t,e){return Dd(t)===Dd(e)}function _d(t,e){return G(e)?e.findIndex(n=>yd(n,t)):se(e)&&yd(e,t)?0:-1}const Wm=t=>t[0]==="_"||t==="$stable",ch=t=>G(t)?t.map(Jt):[Jt(t)],Iw=(t,e,n)=>{if(e._n)return e;const r=yt((...s)=>ch(e(...s)),n);return r._c=!1,r},Gm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Wm(s))continue;const i=t[s];if(se(i))e[s]=Iw(s,i,r);else if(i!=null){const o=ch(i);e[s]=()=>o}}},Qm=(t,e)=>{const n=ch(e);t.slots.default=()=>n},Tw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),Xo(e,"_",n)):Gm(e,t.slots={})}else t.slots={},e&&Qm(t,e);Xo(t.slots,Qa,1)},kw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Le(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Gm(e,s)),o=e}else e&&(Qm(t,e),o={default:1});if(i)for(const a in s)!Wm(a)&&!(a in o)&&delete s[a]};function jc(t,e,n,r,s=!1){if(G(t)){t.forEach((f,d)=>jc(f,e&&(G(e)?e[d]:e),n,r,s));return}if(si(r)&&!s)return;const i=r.shapeFlag&4?Ya(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:u}=t,c=e&&e.r,l=a.refs===Ie?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==u&&($e(c)?(l[c]=null,he(h,c)&&(h[c]=null)):Me(c)&&(c.value=null)),se(u))Gn(u,a,12,[o,l]);else{const f=$e(u),d=Me(u);if(f||d){const D=()=>{if(t.f){const y=f?he(h,u)?h[u]:l[u]:u.value;s?G(y)&&ql(y,i):G(y)?y.includes(i)||y.push(i):f?(l[u]=[i],he(h,u)&&(h[u]=l[u])):(u.value=[i],t.k&&(l[t.k]=u.value))}else f?(l[u]=o,he(h,u)&&(h[u]=o)):d&&(u.value=o,t.k&&(l[t.k]=o))};o?(D.id=-1,gt(D,n)):D()}}}const gt=Z1;function Aw(t){return Sw(t)}function Sw(t,e){const n=Fc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:u,setText:c,setElementText:l,parentNode:h,nextSibling:f,setScopeId:d=Bt,insertStaticContent:D}=t,y=(p,g,m,v=null,E=null,I=null,M=!1,S=null,R=!!g.dynamicChildren)=>{if(p===g)return;p&&!pr(p,g)&&(v=b(p),pt(p,E,I,!0),p=null),g.patchFlag===-2&&(R=!1,g.dynamicChildren=null);const{type:T,ref:K,shapeFlag:B}=g;switch(T){case Ga:_(p,g,m,v);break;case Ot:k(p,g,m,v);break;case Wu:p==null&&C(g,m,v,M);break;case mt:V(p,g,m,v,E,I,M,S,R);break;default:B&1?Q(p,g,m,v,E,I,M,S,R):B&6?de(p,g,m,v,E,I,M,S,R):(B&64||B&128)&&T.process(p,g,m,v,E,I,M,S,R,F)}K!=null&&E&&jc(K,p&&p.ref,I,g||p,!g)},_=(p,g,m,v)=>{if(p==null)r(g.el=a(g.children),m,v);else{const E=g.el=p.el;g.children!==p.children&&c(E,g.children)}},k=(p,g,m,v)=>{p==null?r(g.el=u(g.children||""),m,v):g.el=p.el},C=(p,g,m,v)=>{[p.el,p.anchor]=D(p.children,g,m,v,p.el,p.anchor)},O=({el:p,anchor:g},m,v)=>{let E;for(;p&&p!==g;)E=f(p),r(p,m,v),p=E;r(g,m,v)},N=({el:p,anchor:g})=>{let m;for(;p&&p!==g;)m=f(p),s(p),p=m;s(g)},Q=(p,g,m,v,E,I,M,S,R)=>{M=M||g.type==="svg",p==null?U(g,m,v,E,I,M,S,R):Y(p,g,E,I,M,S,R)},U=(p,g,m,v,E,I,M,S)=>{let R,T;const{type:K,props:B,shapeFlag:W,transition:ee,dirs:ie}=p;if(R=p.el=o(p.type,I,B&&B.is,B),W&8?l(R,p.children):W&16&&x(p.children,R,null,v,E,I&&K!=="foreignObject",M,S),ie&&cr(p,null,v,"created"),z(R,p,p.scopeId,M,v),B){for(const we in B)we!=="value"&&!Po(we)&&i(R,we,null,B[we],I,p.children,v,E,et);"value"in B&&i(R,"value",null,B.value),(T=B.onVnodeBeforeMount)&&Yt(T,v,p)}ie&&cr(p,null,v,"beforeMount");const Ee=(!E||E&&!E.pendingBranch)&&ee&&!ee.persisted;Ee&&ee.beforeEnter(R),r(R,g,m),((T=B&&B.onVnodeMounted)||Ee||ie)&&gt(()=>{T&&Yt(T,v,p),Ee&&ee.enter(R),ie&&cr(p,null,v,"mounted")},E)},z=(p,g,m,v,E)=>{if(m&&d(p,m),v)for(let I=0;I<v.length;I++)d(p,v[I]);if(E){let I=E.subTree;if(g===I){const M=E.vnode;z(p,M,M.scopeId,M.slotScopeIds,E.parent)}}},x=(p,g,m,v,E,I,M,S,R=0)=>{for(let T=R;T<p.length;T++){const K=p[T]=S?Bn(p[T]):Jt(p[T]);y(null,K,g,m,v,E,I,M,S)}},Y=(p,g,m,v,E,I,M)=>{const S=g.el=p.el;let{patchFlag:R,dynamicChildren:T,dirs:K}=g;R|=p.patchFlag&16;const B=p.props||Ie,W=g.props||Ie;let ee;m&&lr(m,!1),(ee=W.onVnodeBeforeUpdate)&&Yt(ee,m,g,p),K&&cr(g,p,m,"beforeUpdate"),m&&lr(m,!0);const ie=E&&g.type!=="foreignObject";if(T?X(p.dynamicChildren,T,S,m,v,ie,I):M||ge(p,g,S,null,m,v,ie,I,!1),R>0){if(R&16)Ce(S,g,B,W,m,v,E);else if(R&2&&B.class!==W.class&&i(S,"class",null,W.class,E),R&4&&i(S,"style",B.style,W.style,E),R&8){const Ee=g.dynamicProps;for(let we=0;we<Ee.length;we++){const Ue=Ee[we],Mt=B[Ue],Wr=W[Ue];(Wr!==Mt||Ue==="value")&&i(S,Ue,Mt,Wr,E,p.children,m,v,et)}}R&1&&p.children!==g.children&&l(S,g.children)}else!M&&T==null&&Ce(S,g,B,W,m,v,E);((ee=W.onVnodeUpdated)||K)&&gt(()=>{ee&&Yt(ee,m,g,p),K&&cr(g,p,m,"updated")},v)},X=(p,g,m,v,E,I,M)=>{for(let S=0;S<g.length;S++){const R=p[S],T=g[S],K=R.el&&(R.type===mt||!pr(R,T)||R.shapeFlag&70)?h(R.el):m;y(R,T,K,null,v,E,I,M,!0)}},Ce=(p,g,m,v,E,I,M)=>{if(m!==v){if(m!==Ie)for(const S in m)!Po(S)&&!(S in v)&&i(p,S,m[S],null,M,g.children,E,I,et);for(const S in v){if(Po(S))continue;const R=v[S],T=m[S];R!==T&&S!=="value"&&i(p,S,T,R,M,g.children,E,I,et)}"value"in v&&i(p,"value",m.value,v.value)}},V=(p,g,m,v,E,I,M,S,R)=>{const T=g.el=p?p.el:a(""),K=g.anchor=p?p.anchor:a("");let{patchFlag:B,dynamicChildren:W,slotScopeIds:ee}=g;ee&&(S=S?S.concat(ee):ee),p==null?(r(T,m,v),r(K,m,v),x(g.children,m,K,E,I,M,S,R)):B>0&&B&64&&W&&p.dynamicChildren?(X(p.dynamicChildren,W,m,E,I,M,S),(g.key!=null||E&&g===E.subTree)&&Ym(p,g,!0)):ge(p,g,m,K,E,I,M,S,R)},de=(p,g,m,v,E,I,M,S,R)=>{g.slotScopeIds=S,p==null?g.shapeFlag&512?E.ctx.activate(g,m,v,M,R):Oe(g,m,v,E,I,M,R):Re(p,g,R)},Oe=(p,g,m,v,E,I,M)=>{const S=p.component=$w(p,v,E);if(Ka(p)&&(S.ctx.renderer=F),Uw(S),S.asyncDep){if(E&&E.registerDep(S,Pe),!p.el){const R=S.subTree=ye(Ot);k(null,R,g,m)}return}Pe(S,p,g,m,E,I,M)},Re=(p,g,m)=>{const v=g.component=p.component;if(Y1(p,g,m))if(v.asyncDep&&!v.asyncResolved){be(v,g,m);return}else v.next=g,j1(v.update),v.update();else g.el=p.el,v.vnode=g},Pe=(p,g,m,v,E,I,M)=>{const S=()=>{if(p.isMounted){let{next:K,bu:B,u:W,parent:ee,vnode:ie}=p,Ee=K,we;lr(p,!1),K?(K.el=ie.el,be(p,K,M)):K=ie,B&&Mo(B),(we=K.props&&K.props.onVnodeBeforeUpdate)&&Yt(we,ee,K,ie),lr(p,!0);const Ue=qu(p),Mt=p.subTree;p.subTree=Ue,y(Mt,Ue,h(Mt.el),b(Mt),p,E,I),K.el=Ue.el,Ee===null&&X1(p,Ue.el),W&&gt(W,E),(we=K.props&&K.props.onVnodeUpdated)&&gt(()=>Yt(we,ee,K,ie),E)}else{let K;const{el:B,props:W}=g,{bm:ee,m:ie,parent:Ee}=p,we=si(g);if(lr(p,!1),ee&&Mo(ee),!we&&(K=W&&W.onVnodeBeforeMount)&&Yt(K,Ee,g),lr(p,!0),B&&me){const Ue=()=>{p.subTree=qu(p),me(B,p.subTree,p,E,null)};we?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Ue()):Ue()}else{const Ue=p.subTree=qu(p);y(null,Ue,m,v,p,E,I),g.el=Ue.el}if(ie&&gt(ie,E),!we&&(K=W&&W.onVnodeMounted)){const Ue=g;gt(()=>Yt(K,Ee,Ue),E)}(g.shapeFlag&256||Ee&&si(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&p.a&&gt(p.a,E),p.isMounted=!0,g=m=v=null}},R=p.effect=new Ql(S,()=>rh(T),p.scope),T=p.update=()=>R.run();T.id=p.uid,lr(p,!0),T()},be=(p,g,m)=>{g.component=p;const v=p.vnode.props;p.vnode=g,p.next=null,Cw(p,g.props,v,m),kw(p,g.children,m),Fs(),ud(),Ns()},ge=(p,g,m,v,E,I,M,S,R=!1)=>{const T=p&&p.children,K=p?p.shapeFlag:0,B=g.children,{patchFlag:W,shapeFlag:ee}=g;if(W>0){if(W&128){Nn(T,B,m,v,E,I,M,S,R);return}else if(W&256){fn(T,B,m,v,E,I,M,S,R);return}}ee&8?(K&16&&et(T,E,I),B!==T&&l(m,B)):K&16?ee&16?Nn(T,B,m,v,E,I,M,S,R):et(T,E,I,!0):(K&8&&l(m,""),ee&16&&x(B,m,v,E,I,M,S,R))},fn=(p,g,m,v,E,I,M,S,R)=>{p=p||ss,g=g||ss;const T=p.length,K=g.length,B=Math.min(T,K);let W;for(W=0;W<B;W++){const ee=g[W]=R?Bn(g[W]):Jt(g[W]);y(p[W],ee,m,null,E,I,M,S,R)}T>K?et(p,E,I,!0,!1,B):x(g,m,v,E,I,M,S,R,B)},Nn=(p,g,m,v,E,I,M,S,R)=>{let T=0;const K=g.length;let B=p.length-1,W=K-1;for(;T<=B&&T<=W;){const ee=p[T],ie=g[T]=R?Bn(g[T]):Jt(g[T]);if(pr(ee,ie))y(ee,ie,m,null,E,I,M,S,R);else break;T++}for(;T<=B&&T<=W;){const ee=p[B],ie=g[W]=R?Bn(g[W]):Jt(g[W]);if(pr(ee,ie))y(ee,ie,m,null,E,I,M,S,R);else break;B--,W--}if(T>B){if(T<=W){const ee=W+1,ie=ee<K?g[ee].el:v;for(;T<=W;)y(null,g[T]=R?Bn(g[T]):Jt(g[T]),m,ie,E,I,M,S,R),T++}}else if(T>W)for(;T<=B;)pt(p[T],E,I,!0),T++;else{const ee=T,ie=T,Ee=new Map;for(T=ie;T<=W;T++){const Et=g[T]=R?Bn(g[T]):Jt(g[T]);Et.key!=null&&Ee.set(Et.key,T)}let we,Ue=0;const Mt=W-ie+1;let Wr=!1,Xf=0;const zs=new Array(Mt);for(T=0;T<Mt;T++)zs[T]=0;for(T=ee;T<=B;T++){const Et=p[T];if(Ue>=Mt){pt(Et,E,I,!0);continue}let Qt;if(Et.key!=null)Qt=Ee.get(Et.key);else for(we=ie;we<=W;we++)if(zs[we-ie]===0&&pr(Et,g[we])){Qt=we;break}Qt===void 0?pt(Et,E,I,!0):(zs[Qt-ie]=T+1,Qt>=Xf?Xf=Qt:Wr=!0,y(Et,g[Qt],m,null,E,I,M,S,R),Ue++)}const Jf=Wr?xw(zs):ss;for(we=Jf.length-1,T=Mt-1;T>=0;T--){const Et=ie+T,Qt=g[Et],Zf=Et+1<K?g[Et+1].el:v;zs[T]===0?y(null,Qt,m,Zf,E,I,M,S,R):Wr&&(we<0||T!==Jf[we]?Gt(Qt,m,Zf,2):we--)}}},Gt=(p,g,m,v,E=null)=>{const{el:I,type:M,transition:S,children:R,shapeFlag:T}=p;if(T&6){Gt(p.component.subTree,g,m,v);return}if(T&128){p.suspense.move(g,m,v);return}if(T&64){M.move(p,g,m,F);return}if(M===mt){r(I,g,m);for(let B=0;B<R.length;B++)Gt(R[B],g,m,v);r(p.anchor,g,m);return}if(M===Wu){O(p,g,m);return}if(v!==2&&T&1&&S)if(v===0)S.beforeEnter(I),r(I,g,m),gt(()=>S.enter(I),E);else{const{leave:B,delayLeave:W,afterLeave:ee}=S,ie=()=>r(I,g,m),Ee=()=>{B(I,()=>{ie(),ee&&ee()})};W?W(I,ie,Ee):Ee()}else r(I,g,m)},pt=(p,g,m,v=!1,E=!1)=>{const{type:I,props:M,ref:S,children:R,dynamicChildren:T,shapeFlag:K,patchFlag:B,dirs:W}=p;if(S!=null&&jc(S,null,m,p,!0),K&256){g.ctx.deactivate(p);return}const ee=K&1&&W,ie=!si(p);let Ee;if(ie&&(Ee=M&&M.onVnodeBeforeUnmount)&&Yt(Ee,g,p),K&6)Do(p.component,m,v);else{if(K&128){p.suspense.unmount(m,v);return}ee&&cr(p,null,g,"beforeUnmount"),K&64?p.type.remove(p,g,m,E,F,v):T&&(I!==mt||B>0&&B&64)?et(T,g,m,!1,!0):(I===mt&&B&384||!E&&K&16)&&et(R,g,m),v&&Hr(p)}(ie&&(Ee=M&&M.onVnodeUnmounted)||ee)&&gt(()=>{Ee&&Yt(Ee,g,p),ee&&cr(p,null,g,"unmounted")},m)},Hr=p=>{const{type:g,el:m,anchor:v,transition:E}=p;if(g===mt){Kr(m,v);return}if(g===Wu){N(p);return}const I=()=>{s(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(p.shapeFlag&1&&E&&!E.persisted){const{leave:M,delayLeave:S}=E,R=()=>M(m,I);S?S(p.el,I,R):R()}else I()},Kr=(p,g)=>{let m;for(;p!==g;)m=f(p),s(p),p=m;s(g)},Do=(p,g,m)=>{const{bum:v,scope:E,update:I,subTree:M,um:S}=p;v&&Mo(v),E.stop(),I&&(I.active=!1,pt(M,p,g,m)),S&&gt(S,g),gt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},et=(p,g,m,v=!1,E=!1,I=0)=>{for(let M=I;M<p.length;M++)pt(p[M],g,m,v,E)},b=p=>p.shapeFlag&6?b(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),$=(p,g,m)=>{p==null?g._vnode&&pt(g._vnode,null,null,!0):y(g._vnode||null,p,g,null,null,null,m),ud(),km(),g._vnode=p},F={p:y,um:pt,m:Gt,r:Hr,mt:Oe,mc:x,pc:ge,pbc:X,n:b,o:t};let q,me;return e&&([q,me]=e(F)),{render:$,hydrate:q,createApp:bw($,q)}}function lr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ym(t,e,n=!1){const r=t.children,s=e.children;if(G(r)&&G(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Bn(s[i]),a.el=o.el),n||Ym(o,a)),a.type===Ga&&(a.el=o.el)}}function xw(t){const e=t.slice(),n=[0];let r,s,i,o,a;const u=t.length;for(r=0;r<u;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Rw=t=>t.__isTeleport,mt=Symbol.for("v-fgt"),Ga=Symbol.for("v-txt"),Ot=Symbol.for("v-cmt"),Wu=Symbol.for("v-stc"),oi=[];let Ut=null;function le(t=!1){oi.push(Ut=t?null:[])}function Fw(){oi.pop(),Ut=oi[oi.length-1]||null}let Ei=1;function vd(t){Ei+=t}function Xm(t){return t.dynamicChildren=Ei>0?Ut||ss:null,Fw(),Ei>0&&Ut&&Ut.push(t),t}function je(t,e,n,r,s,i){return Xm(ae(t,e,n,r,s,i,!0))}function _t(t,e,n,r,s){return Xm(ye(t,e,n,r,s,!0))}function sa(t){return t?t.__v_isVNode===!0:!1}function pr(t,e){return t.type===e.type&&t.key===e.key}const Qa="__vInternal",Jm=({key:t})=>t??null,$o=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||Me(t)||se(t)?{i:Je,r:t,k:e,f:!!n}:t:null);function ae(t,e=null,n=null,r=0,s=null,i=t===mt?0:1,o=!1,a=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Jm(e),ref:e&&$o(e),scopeId:qa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Je};return a?(lh(u,n),i&128&&t.normalize(u)):n&&(u.shapeFlag|=$e(n)?8:16),Ei>0&&!o&&Ut&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&Ut.push(u),u}const ye=Nw;function Nw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Vm)&&(t=Ot),sa(t)){const a=tr(t,e,!0);return n&&lh(a,n),Ei>0&&!i&&Ut&&(a.shapeFlag&6?Ut[Ut.indexOf(t)]=a:Ut.push(a)),a.patchFlag|=-2,a}if(qw(t)&&(t=t.__vccOpts),e){e=Ow(e);let{class:a,style:u}=e;a&&!$e(a)&&(e.class=Ki(a)),Ae(u)&&(vm(u)&&!G(u)&&(u=Le({},u)),e.style=Wl(u))}const o=$e(t)?1:J1(t)?128:Rw(t)?64:Ae(t)?4:se(t)?2:0;return ae(t,e,n,r,s,o,i,!0)}function Ow(t){return t?vm(t)||Qa in t?Le({},t):t:null}function tr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Pw(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Jm(a),ref:e&&e.ref?n&&s?G(s)?s.concat($o(e)):[s,$o(e)]:$o(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&tr(t.ssContent),ssFallback:t.ssFallback&&tr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function nn(t=" ",e=0){return ye(Ga,null,t,e)}function Vt(t="",e=!1){return e?(le(),_t(Ot,null,t)):ye(Ot,null,t)}function Jt(t){return t==null||typeof t=="boolean"?ye(Ot):G(t)?ye(mt,null,t.slice()):typeof t=="object"?Bn(t):ye(Ga,null,String(t))}function Bn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:tr(t)}function lh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),lh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Qa in e)?e._ctx=Je:s===3&&Je&&(Je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:Je},n=32):(e=String(e),r&64?(n=16,e=[nn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ki([e.class,r.class]));else if(s==="style")e.style=Wl([e.style,r.style]);else if(La(s)){const i=e[s],o=r[s];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Yt(t,e,n,r=null){Ft(t,e,7,[n,r])}const Mw=qm();let Lw=0;function $w(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Mw,i={uid:Lw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new om(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Km(r,s),emitsOptions:Sm(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=H1.bind(null,i),t.ce&&t.ce(i),i}let We=null;const hh=()=>We||Je;let fh,Gr,wd="__VUE_INSTANCE_SETTERS__";(Gr=Fc()[wd])||(Gr=Fc()[wd]=[]),Gr.push(t=>We=t),fh=t=>{Gr.length>1?Gr.forEach(e=>e(t)):Gr[0](t)};const Ds=t=>{fh(t),t.scope.on()},Er=()=>{We&&We.scope.off(),fh(null)};function Zm(t){return t.vnode.shapeFlag&4}let Ci=!1;function Uw(t,e=!1){Ci=e;const{props:n,children:r}=t.vnode,s=Zm(t);Ew(t,n,s,e),Tw(t,r);const i=s?Bw(t,e):void 0;return Ci=!1,i}function Bw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ms(new Proxy(t.ctx,gw));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?jw(t):null;Ds(t),Fs();const i=Gn(r,t,0,[t.props,s]);if(Ns(),Er(),tm(i)){if(i.then(Er,Er),e)return i.then(o=>{bd(t,o,e)}).catch(o=>{ja(o,t,0)});t.asyncDep=i}else bd(t,i,e)}else eD(t,e)}function bd(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ae(e)&&(t.setupState=Cm(e)),eD(t,n)}let Ed;function eD(t,e,n){const r=t.type;if(!t.render){if(!e&&Ed&&!r.render){const s=r.template||uh(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:u}=r,c=Le(Le({isCustomElement:i,delimiters:a},o),u);r.render=Ed(s,c)}}t.render=r.render||Bt}Ds(t),Fs(),mw(t),Ns(),Er()}function Vw(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return bt(t,"get","$attrs"),e[n]}}))}function jw(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Vw(t)},slots:t.slots,emit:t.emit,expose:e}}function Ya(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Cm(ms(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ii)return ii[n](t)},has(e,n){return n in e||n in ii}}))}function zw(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function qw(t){return se(t)&&"__vccOpts"in t}const It=(t,e)=>U1(t,e,Ci);function Tr(t,e,n){const r=arguments.length;return r===2?Ae(e)&&!G(e)?sa(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&sa(n)&&(n=[n]),ye(t,e,n))}const Hw=Symbol.for("v-scx"),Kw=()=>Nt(Hw),Ww="3.3.2",Gw="http://www.w3.org/2000/svg",gr=typeof document<"u"?document:null,Cd=gr&&gr.createElement("template"),Qw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?gr.createElementNS(Gw,t):gr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>gr.createTextNode(t),createComment:t=>gr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Cd.innerHTML=r?`<svg>${t}</svg>`:t;const a=Cd.content;if(r){const u=a.firstChild;for(;u.firstChild;)a.appendChild(u.firstChild);a.removeChild(u)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Yw(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Xw(t,e,n){const r=t.style,s=$e(n);if(n&&!s){if(e&&!$e(e))for(const i in e)n[i]==null&&zc(r,i,"");for(const i in n)zc(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Id=/\s*!important$/;function zc(t,e,n){if(G(n))n.forEach(r=>zc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Jw(t,e);Id.test(n)?t.setProperty(Rs(r),n.replace(Id,""),"important"):t[r]=n}}const Td=["Webkit","Moz","ms"],Gu={};function Jw(t,e){const n=Gu[e];if(n)return n;let r=an(e);if(r!=="filter"&&r in t)return Gu[e]=r;r=Ba(r);for(let s=0;s<Td.length;s++){const i=Td[s]+r;if(i in t)return Gu[e]=i}return e}const kd="http://www.w3.org/1999/xlink";function Zw(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(kd,e.slice(6,e.length)):t.setAttributeNS(kd,e,n);else{const i=t1(e);n==null||i&&!sm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function eb(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,l=n??"";c!==l&&(t.value=l),n==null&&t.removeAttribute(e);return}let u=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=sm(n):n==null&&c==="string"?(n="",u=!0):c==="number"&&(n=0,u=!0)}try{t[e]=n}catch{}u&&t.removeAttribute(e)}function Jr(t,e,n,r){t.addEventListener(e,n,r)}function tb(t,e,n,r){t.removeEventListener(e,n,r)}function nb(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,u]=rb(e);if(r){const c=i[e]=ob(r,s);Jr(t,a,c,u)}else o&&(tb(t,a,o,u),i[e]=void 0)}}const Ad=/(?:Once|Passive|Capture)$/;function rb(t){let e;if(Ad.test(t)){e={};let r;for(;r=t.match(Ad);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rs(t.slice(2)),e]}let Qu=0;const sb=Promise.resolve(),ib=()=>Qu||(sb.then(()=>Qu=0),Qu=Date.now());function ob(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ft(ab(r,n.value),e,5,[r])};return n.value=t,n.attached=ib(),n}function ab(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Sd=/^on[a-z]/,ub=(t,e,n,r,s=!1,i,o,a,u)=>{e==="class"?Yw(t,r,s):e==="style"?Xw(t,n,r):La(e)?zl(e)||nb(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cb(t,e,r,s))?eb(t,e,r,i,o,a,u):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Zw(t,e,r,s))};function cb(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Sd.test(e)&&se(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Sd.test(e)&&$e(n)?!1:e in t}const Pn="transition",qs="animation",Wi=(t,{slots:e})=>Tr(nw,nD(t),e);Wi.displayName="Transition";const tD={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},lb=Wi.props=Le({},Nm,tD),hr=(t,e=[])=>{G(t)?t.forEach(n=>n(...e)):t&&t(...e)},xd=t=>t?G(t)?t.some(e=>e.length>1):t.length>1:!1;function nD(t){const e={};for(const V in t)V in tD||(e[V]=t[V]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:u=i,appearActiveClass:c=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,D=hb(s),y=D&&D[0],_=D&&D[1],{onBeforeEnter:k,onEnter:C,onEnterCancelled:O,onLeave:N,onLeaveCancelled:Q,onBeforeAppear:U=k,onAppear:z=C,onAppearCancelled:x=O}=e,Y=(V,de,Oe)=>{$n(V,de?l:a),$n(V,de?c:o),Oe&&Oe()},X=(V,de)=>{V._isLeaving=!1,$n(V,h),$n(V,d),$n(V,f),de&&de()},Ce=V=>(de,Oe)=>{const Re=V?z:C,Pe=()=>Y(de,V,Oe);hr(Re,[de,Pe]),Rd(()=>{$n(de,V?u:i),gn(de,V?l:a),xd(Re)||Fd(de,r,y,Pe)})};return Le(e,{onBeforeEnter(V){hr(k,[V]),gn(V,i),gn(V,o)},onBeforeAppear(V){hr(U,[V]),gn(V,u),gn(V,c)},onEnter:Ce(!1),onAppear:Ce(!0),onLeave(V,de){V._isLeaving=!0;const Oe=()=>X(V,de);gn(V,h),sD(),gn(V,f),Rd(()=>{V._isLeaving&&($n(V,h),gn(V,d),xd(N)||Fd(V,r,_,Oe))}),hr(N,[V,Oe])},onEnterCancelled(V){Y(V,!1),hr(O,[V])},onAppearCancelled(V){Y(V,!0),hr(x,[V])},onLeaveCancelled(V){X(V),hr(Q,[V])}})}function hb(t){if(t==null)return null;if(Ae(t))return[Yu(t.enter),Yu(t.leave)];{const e=Yu(t);return[e,e]}}function Yu(t){return Q0(t)}function gn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function $n(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Rd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let fb=0;function Fd(t,e,n,r){const s=t._endId=++fb,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:u}=rD(t,e);if(!o)return r();const c=o+"end";let l=0;const h=()=>{t.removeEventListener(c,f),i()},f=d=>{d.target===t&&++l>=u&&h()};setTimeout(()=>{l<u&&h()},a+1),t.addEventListener(c,f)}function rD(t,e){const n=window.getComputedStyle(t),r=D=>(n[D]||"").split(", "),s=r(`${Pn}Delay`),i=r(`${Pn}Duration`),o=Nd(s,i),a=r(`${qs}Delay`),u=r(`${qs}Duration`),c=Nd(a,u);let l=null,h=0,f=0;e===Pn?o>0&&(l=Pn,h=o,f=i.length):e===qs?c>0&&(l=qs,h=c,f=u.length):(h=Math.max(o,c),l=h>0?o>c?Pn:qs:null,f=l?l===Pn?i.length:u.length:0);const d=l===Pn&&/\b(transform|all)(,|$)/.test(r(`${Pn}Property`).toString());return{type:l,timeout:h,propCount:f,hasTransform:d}}function Nd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Od(n)+Od(t[r])))}function Od(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function sD(){return document.body.offsetHeight}const iD=new WeakMap,oD=new WeakMap,aD={name:"TransitionGroup",props:Le({},lb,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=hh(),r=Fm();let s,i;return Lm(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!yb(s[0].el,n.vnode.el,o))return;s.forEach(gb),s.forEach(mb);const a=s.filter(Db);sD(),a.forEach(u=>{const c=u.el,l=c.style;gn(c,o),l.transform=l.webkitTransform=l.transitionDuration="";const h=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,$n(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=ue(t),a=nD(o);let u=o.tag||mt;s=i,i=e.default?Ha(e.default()):[];for(let c=0;c<i.length;c++){const l=i[c];l.key!=null&&bi(l,wi(l,a,r,n))}if(s)for(let c=0;c<s.length;c++){const l=s[c];bi(l,wi(l,a,r,n)),iD.set(l,l.el.getBoundingClientRect())}return ye(u,null,i)}}},db=t=>delete t.mode;aD.props;const pb=aD;function gb(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function mb(t){oD.set(t,t.el.getBoundingClientRect())}function Db(t){const e=iD.get(t),n=oD.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function yb(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:i}=rD(r);return s.removeChild(r),i}const Pd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>Mo(e,n):e};function _b(t){t.target.composing=!0}function Md(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const dh={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Pd(s);const i=r||s.props&&s.props.type==="number";Jr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Rc(a)),t._assign(a)}),n&&Jr(t,"change",()=>{t.value=t.value.trim()}),e||(Jr(t,"compositionstart",_b),Jr(t,"compositionend",Md),Jr(t,"change",Md))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Pd(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Rc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},vb=["ctrl","shift","alt","meta"],wb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>vb.some(n=>t[`${n}Key`]&&!e.includes(n))},ph=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=wb[e[s]];if(i&&i(n,e))return}return t(n,...r)},bb=Le({patchProp:ub},Qw);let Ld;function Eb(){return Ld||(Ld=Aw(bb))}const Cb=(...t)=>{const e=Eb().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Ib(r);if(!s)return;const i=e._component;!se(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ib(t){return $e(t)?document.querySelector(t):t}const hn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Tb={},kb=ae("span",{class:"loading-gif"},"Loading",-1),Ab=[kb];function Sb(t,e){return le(),je("div",null,Ab)}const xb=hn(Tb,[["render",Sb]]);var Rb=!1;/*!
  * pinia v2.0.36
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let uD;const Xa=t=>uD=t,cD=Symbol();function qc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ai;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ai||(ai={}));function Fb(){const t=am(!0),e=t.run(()=>Fe({}));let n=[],r=[];const s=ms({install(i){Xa(s),s._a=i,i.provide(cD,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Rb?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const lD=()=>{};function $d(t,e,n,r=lD){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&um()&&r1(s),s}function Qr(t,...e){t.slice().forEach(n=>{n(...e)})}function Hc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];qc(s)&&qc(r)&&t.hasOwnProperty(n)&&!Me(r)&&!Wn(r)?t[n]=Hc(s,r):t[n]=r}return t}const Nb=Symbol();function Ob(t){return!qc(t)||!t.hasOwnProperty(Nb)}const{assign:Un}=Object;function Pb(t){return!!(Me(t)&&t.effect)}function Mb(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let u;function c(){a||(n.state.value[t]=s?s():{});const l=P1(n.state.value[t]);return Un(l,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=ms(It(()=>{Xa(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return u=hD(t,c,e,n,r,!0),u}function hD(t,e,n={},r,s,i){let o;const a=Un({actions:{}},n),u={deep:!0};let c,l,h=ms([]),f=ms([]),d;const D=r.state.value[t];!i&&!D&&(r.state.value[t]={}),Fe({});let y;function _(z){let x;c=l=!1,typeof z=="function"?(z(r.state.value[t]),x={type:ai.patchFunction,storeId:t,events:d}):(Hc(r.state.value[t],z),x={type:ai.patchObject,payload:z,storeId:t,events:d});const Y=y=Symbol();nh().then(()=>{y===Y&&(c=!0)}),l=!0,Qr(h,x,r.state.value[t])}const k=i?function(){const{state:x}=n,Y=x?x():{};this.$patch(X=>{Un(X,Y)})}:lD;function C(){o.stop(),h=[],f=[],r._s.delete(t)}function O(z,x){return function(){Xa(r);const Y=Array.from(arguments),X=[],Ce=[];function V(Re){X.push(Re)}function de(Re){Ce.push(Re)}Qr(f,{args:Y,name:z,store:Q,after:V,onError:de});let Oe;try{Oe=x.apply(this&&this.$id===t?this:Q,Y)}catch(Re){throw Qr(Ce,Re),Re}return Oe instanceof Promise?Oe.then(Re=>(Qr(X,Re),Re)).catch(Re=>(Qr(Ce,Re),Promise.reject(Re))):(Qr(X,Oe),Oe)}}const N={_p:r,$id:t,$onAction:$d.bind(null,f),$patch:_,$reset:k,$subscribe(z,x={}){const Y=$d(h,z,x.detached,()=>X()),X=o.run(()=>ri(()=>r.state.value[t],Ce=>{(x.flush==="sync"?l:c)&&z({storeId:t,type:ai.direct,events:d},Ce)},Un({},u,x)));return Y},$dispose:C},Q=Os(N);r._s.set(t,Q);const U=r._e.run(()=>(o=am(),o.run(()=>e())));for(const z in U){const x=U[z];if(Me(x)&&!Pb(x)||Wn(x))i||(D&&Ob(x)&&(Me(x)?x.value=D[z]:Hc(x,D[z])),r.state.value[t][z]=x);else if(typeof x=="function"){const Y=O(z,x);U[z]=Y,a.actions[z]=x}}return Un(Q,U),Un(ue(Q),U),Object.defineProperty(Q,"$state",{get:()=>r.state.value[t],set:z=>{_(x=>{Un(x,z)})}}),r._p.forEach(z=>{Un(Q,o.run(()=>z({store:Q,app:r._a,pinia:r,options:a})))}),D&&i&&n.hydrate&&n.hydrate(Q.$state,D),c=!0,l=!0,Q}function Lb(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,u){const c=hh();return a=a||c&&Nt(cD,null),a&&Xa(a),a=uD,a._s.has(r)||(i?hD(r,e,s,a):Mb(r,s,a)),a._s.get(r)}return o.$id=r,o}function fD(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=fD(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function dD(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=fD(t))&&(r&&(r+=" "),r+=e);return r}function $b(t){Object.keys(t).forEach(function(e){t[e]===void 0&&delete t[e]})}function Uo(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Uo=function(e){return typeof e}:Uo=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Uo(t)}function Ub(t,e){switch(Uo(e)){case"number":return e;case"string":return e;case"object":return e===null?null:e[t]}return null}function Bb(t){return t.classList.contains("xyz-appear")?"appear":t.classList.contains("xyz-in")?"in":t.classList.contains("xyz-out")?"out":null}function Ud(t){t._xyzAppearObserver&&t._xyzAppearObserver.disconnect(),t._xyzAnimTimeout&&clearTimeout(t._xyzAnimTimeout),t.removeEventListener("animationend",t._xyzAnimEnd),t.removeEventListener("animationcancelled",t._xyzAnimEnd),delete t._xyzAppearObserver,delete t._xyzAnimTimeout,delete t._xyzAnimEnd}function Vb(t,e){return function(n,r){Ud(n);function s(){Ud(n),r()}var i=Bb(n);function o(){var u=Ub(i,t);if(typeof u=="number"){n._xyzAnimTimeout=setTimeout(s,u);return}var c="xyz-".concat(i,"-keyframes"),l=new Set([n]);if(u==="auto"){var h=n.querySelectorAll(".xyz-nested, .xyz-".concat(i,"-nested"));h.forEach(l.add,l)}function f(d){l.delete(d),l.size===0&&s()}n._xyzAnimTimeout=setTimeout(function(){l.forEach(function(d){var D=d.offsetParent||d.getClientRects().length;D||f(d);var y=window.getComputedStyle(d).getPropertyValue("animation-name");y.indexOf(c)===-1&&f(d)})}),n._xyzAnimEnd=function(d){d.animationName===c&&f(d.target)},n.addEventListener("animationend",n._xyzAnimEnd,!1),n.addEventListener("animationcancelled",n._xyzAnimEnd,!1)}if(i==="appear"&&e){var a=Object.assign({},e);n.classList.add("xyz-paused-all"),n._xyzAppearObserver=new IntersectionObserver(function(u,c){u.forEach(function(l){l.isIntersecting&&(n.classList.remove("xyz-paused-all"),c.disconnect(),o())})},a),n._xyzAppearObserver.observe(n)}else o()}}var dn={appearFrom:"xyz-appear-from",appearActive:"xyz-appear",appearTo:"xyz-appear-to",inFrom:"xyz-in-from",inActive:"xyz-in",inTo:"xyz-in-to",outFrom:"xyz-out-from",outActive:"xyz-out",outTo:"xyz-out-to"},pD={appear:Boolean,appearVisible:[Boolean,Object],duration:[Number,String,Object],mode:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,enterFromClass:String,enterActiveClass:String,enterToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},jb=Object.assign({},pD,{tag:{type:String,default:"div"},moveClass:String});function gD(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.assign({},t,e,{style:Object.assign({},t==null?void 0:t.style,e==null?void 0:e.style),class:dD(t==null?void 0:t.class,e==null?void 0:e.class)})}function mD(t){$b(t),t.appear=!!(t.appear||t.appearVisible);var e=t.appear,n=t.appearVisible,r=t.duration,s=Vb(r,n),i={css:!0,type:"animation",appearFromClass:dn.appearFrom,appearActiveClass:dn.appearActive,appearToClass:dn.appearTo,enterFromClass:dn.inFrom,enterActiveClass:dn.inActive,enterToClass:dn.inTo,leaveFromClass:dn.outFrom,leaveActiveClass:dn.outActive,leaveToClass:dn.outTo,onEnter:s,onLeave:s};e&&(i.onAppear=s);var o=gD(i,t);return delete o.appearVisible,delete o.duration,o}function DD(t,e){var n=mD(Object.assign({},e.attrs,t));return Tr(Wi,n,e.slots)}DD.props=pD;function yD(t,e){var n=mD(Object.assign({},e.attrs,t));function r(){var s=e.slots.default?e.slots.default():[],i=Ha(s);return i.forEach(function(o,a){o.props=gD({style:{"--xyz-index":a,"--xyz-index-rev":i.length-a-1}},o.props)}),s}return Tr(pb,n,r)}yD.props=jb;function Bd(t,e){var n=e.value;t.setAttribute("xyz",dD(t._xyzOriginal,n))}var zb={beforeMount:function(e){e._xyzOriginal=e.getAttribute("xyz"),Bd.apply(void 0,arguments)},updated:Bd},qb={install:function(e){e.component("XyzTransition",DD),e.component("XyzTransitionGroup",yD),e.directive("xyz",zb)}};/*!
  * vue-router v4.2.0
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Zr=typeof window<"u";function Hb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const _e=Object.assign;function Xu(t,e){const n={};for(const r in e){const s=e[r];n[r]=zt(s)?s.map(t):t(s)}return n}const ui=()=>{},zt=Array.isArray,Kb=/\/$/,Wb=t=>t.replace(Kb,"");function Ju(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let u=e.indexOf("?");return a<u&&a>=0&&(u=-1),u>-1&&(r=e.slice(0,u),i=e.slice(u+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Xb(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Gb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Vd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Qb(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ys(e.matched[r],n.matched[s])&&_D(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ys(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function _D(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Yb(t[n],e[n]))return!1;return!0}function Yb(t,e){return zt(t)?jd(t,e):zt(e)?jd(e,t):t===e}function jd(t,e){return zt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Xb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Ii;(function(t){t.pop="pop",t.push="push"})(Ii||(Ii={}));var ci;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ci||(ci={}));function Jb(t){if(!t)if(Zr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Wb(t)}const Zb=/^[^#]+#/;function eE(t,e){return t.replace(Zb,"#")+e}function tE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ja=()=>({left:window.pageXOffset,top:window.pageYOffset});function nE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=tE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function zd(t,e){return(history.state?history.state.position-e:-1)+t}const Kc=new Map;function rE(t,e){Kc.set(t,e)}function sE(t){const e=Kc.get(t);return Kc.delete(t),e}let iE=()=>location.protocol+"//"+location.host;function vD(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,u=s.slice(a);return u[0]!=="/"&&(u="/"+u),Vd(u,"")}return Vd(n,t)+r+s}function oE(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const d=vD(t,location),D=n.value,y=e.value;let _=0;if(f){if(n.value=d,e.value=f,o&&o===D){o=null;return}_=y?f.position-y.position:0}else r(d);s.forEach(k=>{k(n.value,D,{delta:_,type:Ii.pop,direction:_?_>0?ci.forward:ci.back:ci.unknown})})};function u(){o=n.value}function c(f){s.push(f);const d=()=>{const D=s.indexOf(f);D>-1&&s.splice(D,1)};return i.push(d),d}function l(){const{history:f}=window;f.state&&f.replaceState(_e({},f.state,{scroll:Ja()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:u,listen:c,destroy:h}}function qd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ja():null}}function aE(t){const{history:e,location:n}=window,r={value:vD(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(u,c,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+u:iE()+t+u;try{e[l?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),n[l?"replace":"assign"](f)}}function o(u,c){const l=_e({},e.state,qd(s.value.back,u,s.value.forward,!0),c,{position:s.value.position});i(u,l,!0),r.value=u}function a(u,c){const l=_e({},s.value,e.state,{forward:u,scroll:Ja()});i(l.current,l,!0);const h=_e({},qd(r.value,u,null),{position:l.position+1},c);i(u,h,!1),r.value=u}return{location:r,state:s,push:a,replace:o}}function uE(t){t=Jb(t);const e=aE(t),n=oE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=_e({location:"",base:t,go:r,createHref:eE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function cE(t){return typeof t=="string"||t&&typeof t=="object"}function wD(t){return typeof t=="string"||typeof t=="symbol"}const Mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bD=Symbol("");var Hd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Hd||(Hd={}));function _s(t,e){return _e(new Error,{type:t,[bD]:!0},e)}function pn(t,e){return t instanceof Error&&bD in t&&(e==null||!!(t.type&e))}const Kd="[^/]+?",lE={sensitive:!1,strict:!1,start:!0,end:!0},hE=/[.+*?^${}()[\]/\\]/g;function fE(t,e){const n=_e({},lE,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const l=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(hE,"\\$&"),d+=40;else if(f.type===1){const{value:D,repeatable:y,optional:_,regexp:k}=f;i.push({name:D,repeatable:y,optional:_});const C=k||Kd;if(C!==Kd){d+=10;try{new RegExp(`(${C})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${D}" (${C}): `+N.message)}}let O=y?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(O=_&&c.length<2?`(?:/${O})`:"/"+O),_&&(O+="?"),s+=O,d+=20,_&&(d+=-8),y&&(d+=-20),C===".*"&&(d+=-50)}l.push(d)}r.push(l)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const l=c.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const d=l[f]||"",D=i[f-1];h[D.name]=d&&D.repeatable?d.split("/"):d}return h}function u(c){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const d of f)if(d.type===0)l+=d.value;else if(d.type===1){const{value:D,repeatable:y,optional:_}=d,k=D in c?c[D]:"";if(zt(k)&&!y)throw new Error(`Provided param "${D}" is an array but it is not repeatable (* or + modifiers)`);const C=zt(k)?k.join("/"):k;if(!C)if(_)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${D}"`);l+=C}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:u}}function dE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function pE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=dE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Wd(r))return 1;if(Wd(s))return-1}return s.length-r.length}function Wd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const gE={type:0,value:""},mE=/[a-zA-Z0-9_]/;function DE(t){if(!t)return[[]];if(t==="/")return[[gE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,u,c="",l="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:l,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=u}for(;a<t.length;){if(u=t[a++],u==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:u==="/"?(c&&h(),o()):u===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:u==="("?n=2:mE.test(u)?f():(h(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&a--);break;case 2:u===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+u:n=3:l+=u;break;case 3:h(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function yE(t,e,n){const r=fE(DE(t.path),n),s=_e(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function _E(t,e){const n=[],r=new Map;e=Yd({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,h,f){const d=!f,D=vE(l);D.aliasOf=f&&f.record;const y=Yd(e,l),_=[D];if("alias"in l){const O=typeof l.alias=="string"?[l.alias]:l.alias;for(const N of O)_.push(_e({},D,{components:f?f.record.components:D.components,path:N,aliasOf:f?f.record:D}))}let k,C;for(const O of _){const{path:N}=O;if(h&&N[0]!=="/"){const Q=h.record.path,U=Q[Q.length-1]==="/"?"":"/";O.path=h.record.path+(N&&U+N)}if(k=yE(O,h,y),f?f.alias.push(k):(C=C||k,C!==k&&C.alias.push(k),d&&l.name&&!Qd(k)&&o(l.name)),D.children){const Q=D.children;for(let U=0;U<Q.length;U++)i(Q[U],k,f&&f.children[U])}f=f||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&u(k)}return C?()=>{o(C)}:ui}function o(l){if(wD(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function u(l){let h=0;for(;h<n.length&&pE(l,n[h])>=0&&(l.record.path!==n[h].record.path||!ED(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Qd(l)&&r.set(l.record.name,l)}function c(l,h){let f,d={},D,y;if("name"in l&&l.name){if(f=r.get(l.name),!f)throw _s(1,{location:l});y=f.record.name,d=_e(Gd(h.params,f.keys.filter(C=>!C.optional).map(C=>C.name)),l.params&&Gd(l.params,f.keys.map(C=>C.name))),D=f.stringify(d)}else if("path"in l)D=l.path,f=n.find(C=>C.re.test(D)),f&&(d=f.parse(D),y=f.record.name);else{if(f=h.name?r.get(h.name):n.find(C=>C.re.test(h.path)),!f)throw _s(1,{location:l,currentLocation:h});y=f.record.name,d=_e({},h.params,l.params),D=f.stringify(d)}const _=[];let k=f;for(;k;)_.unshift(k.record),k=k.parent;return{name:y,path:D,params:d,matched:_,meta:bE(_)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Gd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function vE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:wE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function wE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Qd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function bE(t){return t.reduce((e,n)=>_e(e,n.meta),{})}function Yd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ED(t,e){return e.children.some(n=>n===t||ED(t,n))}const CD=/#/g,EE=/&/g,CE=/\//g,IE=/=/g,TE=/\?/g,ID=/\+/g,kE=/%5B/g,AE=/%5D/g,TD=/%5E/g,SE=/%60/g,kD=/%7B/g,xE=/%7C/g,AD=/%7D/g,RE=/%20/g;function gh(t){return encodeURI(""+t).replace(xE,"|").replace(kE,"[").replace(AE,"]")}function FE(t){return gh(t).replace(kD,"{").replace(AD,"}").replace(TD,"^")}function Wc(t){return gh(t).replace(ID,"%2B").replace(RE,"+").replace(CD,"%23").replace(EE,"%26").replace(SE,"`").replace(kD,"{").replace(AD,"}").replace(TD,"^")}function NE(t){return Wc(t).replace(IE,"%3D")}function OE(t){return gh(t).replace(CD,"%23").replace(TE,"%3F")}function PE(t){return t==null?"":OE(t).replace(CE,"%2F")}function ia(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ME(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ID," "),o=i.indexOf("="),a=ia(o<0?i:i.slice(0,o)),u=o<0?null:ia(i.slice(o+1));if(a in e){let c=e[a];zt(c)||(c=e[a]=[c]),c.push(u)}else e[a]=u}return e}function Xd(t){let e="";for(let n in t){const r=t[n];if(n=NE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(zt(r)?r.map(i=>i&&Wc(i)):[r&&Wc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function LE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const $E=Symbol(""),Jd=Symbol(""),Za=Symbol(""),mh=Symbol(""),Gc=Symbol("");function Hs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Vn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const u=h=>{h===!1?a(_s(4,{from:n,to:e})):h instanceof Error?a(h):cE(h)?a(_s(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,u);let l=Promise.resolve(c);t.length<3&&(l=l.then(u)),l.catch(h=>a(h))})}function Zu(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(UE(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Vn(c,n,r,i,o))}else{let u=a();s.push(()=>u.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=Hb(c)?c.default:c;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&Vn(f,n,r,i,o)()}))}}return s}function UE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Zd(t){const e=Nt(Za),n=Nt(mh),r=It(()=>e.resolve(De(t.to))),s=It(()=>{const{matched:u}=r.value,{length:c}=u,l=u[c-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(ys.bind(null,l));if(f>-1)return f;const d=ep(u[c-2]);return c>1&&ep(l)===d&&h[h.length-1].path!==d?h.findIndex(ys.bind(null,u[c-2])):f}),i=It(()=>s.value>-1&&zE(n.params,r.value.params)),o=It(()=>s.value>-1&&s.value===n.matched.length-1&&_D(n.params,r.value.params));function a(u={}){return jE(u)?e[De(t.replace)?"replace":"push"](De(t.to)).catch(ui):Promise.resolve()}return{route:r,href:It(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const BE=sh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Zd,setup(t,{slots:e}){const n=Os(Zd(t)),{options:r}=Nt(Za),s=It(()=>({[tp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[tp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Tr("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),VE=BE;function jE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function zE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!zt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ep(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const tp=(t,e,n)=>t??e??n,qE=sh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Nt(Gc),s=It(()=>t.route||r.value),i=Nt(Jd,0),o=It(()=>{let c=De(i);const{matched:l}=s.value;let h;for(;(h=l[c])&&!h.components;)c++;return c}),a=It(()=>s.value.matched[o.value]);Lo(Jd,It(()=>o.value+1)),Lo($E,a),Lo(Gc,s);const u=Fe();return ri(()=>[u.value,a.value,t.name],([c,l,h],[f,d,D])=>{l&&(l.instances[h]=c,d&&d!==l&&c&&c===f&&(l.leaveGuards.size||(l.leaveGuards=d.leaveGuards),l.updateGuards.size||(l.updateGuards=d.updateGuards))),c&&l&&(!d||!ys(l,d)||!f)&&(l.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=s.value,l=t.name,h=a.value,f=h&&h.components[l];if(!f)return np(n.default,{Component:f,route:c});const d=h.props[l],D=d?d===!0?c.params:typeof d=="function"?d(c):d:null,_=Tr(f,_e({},D,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[l]=null)},ref:u}));return np(n.default,{Component:_,route:c})||_}}});function np(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const SD=qE;function HE(t){const e=_E(t.routes,t),n=t.parseQuery||ME,r=t.stringifyQuery||Xd,s=t.history,i=Hs(),o=Hs(),a=Hs(),u=F1(Mn);let c=Mn;Zr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Xu.bind(null,b=>""+b),h=Xu.bind(null,PE),f=Xu.bind(null,ia);function d(b,$){let F,q;return wD(b)?(F=e.getRecordMatcher(b),q=$):q=b,e.addRoute(q,F)}function D(b){const $=e.getRecordMatcher(b);$&&e.removeRoute($)}function y(){return e.getRoutes().map(b=>b.record)}function _(b){return!!e.getRecordMatcher(b)}function k(b,$){if($=_e({},$||u.value),typeof b=="string"){const m=Ju(n,b,$.path),v=e.resolve({path:m.path},$),E=s.createHref(m.fullPath);return _e(m,v,{params:f(v.params),hash:ia(m.hash),redirectedFrom:void 0,href:E})}let F;if("path"in b)F=_e({},b,{path:Ju(n,b.path,$.path).path});else{const m=_e({},b.params);for(const v in m)m[v]==null&&delete m[v];F=_e({},b,{params:h(m)}),$.params=h($.params)}const q=e.resolve(F,$),me=b.hash||"";q.params=l(f(q.params));const p=Gb(r,_e({},b,{hash:FE(me),path:q.path})),g=s.createHref(p);return _e({fullPath:p,hash:me,query:r===Xd?LE(b.query):b.query||{}},q,{redirectedFrom:void 0,href:g})}function C(b){return typeof b=="string"?Ju(n,b,u.value.path):_e({},b)}function O(b,$){if(c!==b)return _s(8,{from:$,to:b})}function N(b){return z(b)}function Q(b){return N(_e(C(b),{replace:!0}))}function U(b){const $=b.matched[b.matched.length-1];if($&&$.redirect){const{redirect:F}=$;let q=typeof F=="function"?F(b):F;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=C(q):{path:q},q.params={}),_e({query:b.query,hash:b.hash,params:"path"in q?{}:b.params},q)}}function z(b,$){const F=c=k(b),q=u.value,me=b.state,p=b.force,g=b.replace===!0,m=U(F);if(m)return z(_e(C(m),{state:typeof m=="object"?_e({},me,m.state):me,force:p,replace:g}),$||F);const v=F;v.redirectedFrom=$;let E;return!p&&Qb(r,q,F)&&(E=_s(16,{to:v,from:q}),Gt(q,q,!0,!1)),(E?Promise.resolve(E):X(v,q)).catch(I=>pn(I)?pn(I,2)?I:Nn(I):ge(I,v,q)).then(I=>{if(I){if(pn(I,2))return z(_e({replace:g},C(I.to),{state:typeof I.to=="object"?_e({},me,I.to.state):me,force:p}),$||v)}else I=V(v,q,!0,g,me);return Ce(v,q,I),I})}function x(b,$){const F=O(b,$);return F?Promise.reject(F):Promise.resolve()}function Y(b){const $=Kr.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(b):b()}function X(b,$){let F;const[q,me,p]=KE(b,$);F=Zu(q.reverse(),"beforeRouteLeave",b,$);for(const m of q)m.leaveGuards.forEach(v=>{F.push(Vn(v,b,$))});const g=x.bind(null,b,$);return F.push(g),et(F).then(()=>{F=[];for(const m of i.list())F.push(Vn(m,b,$));return F.push(g),et(F)}).then(()=>{F=Zu(me,"beforeRouteUpdate",b,$);for(const m of me)m.updateGuards.forEach(v=>{F.push(Vn(v,b,$))});return F.push(g),et(F)}).then(()=>{F=[];for(const m of b.matched)if(m.beforeEnter&&!$.matched.includes(m))if(zt(m.beforeEnter))for(const v of m.beforeEnter)F.push(Vn(v,b,$));else F.push(Vn(m.beforeEnter,b,$));return F.push(g),et(F)}).then(()=>(b.matched.forEach(m=>m.enterCallbacks={}),F=Zu(p,"beforeRouteEnter",b,$),F.push(g),et(F))).then(()=>{F=[];for(const m of o.list())F.push(Vn(m,b,$));return F.push(g),et(F)}).catch(m=>pn(m,8)?m:Promise.reject(m))}function Ce(b,$,F){for(const q of a.list())Y(()=>q(b,$,F))}function V(b,$,F,q,me){const p=O(b,$);if(p)return p;const g=$===Mn,m=Zr?history.state:{};F&&(q||g?s.replace(b.fullPath,_e({scroll:g&&m&&m.scroll},me)):s.push(b.fullPath,me)),u.value=b,Gt(b,$,F,g),Nn()}let de;function Oe(){de||(de=s.listen((b,$,F)=>{if(!Do.listening)return;const q=k(b),me=U(q);if(me){z(_e(me,{replace:!0}),q).catch(ui);return}c=q;const p=u.value;Zr&&rE(zd(p.fullPath,F.delta),Ja()),X(q,p).catch(g=>pn(g,12)?g:pn(g,2)?(z(g.to,q).then(m=>{pn(m,20)&&!F.delta&&F.type===Ii.pop&&s.go(-1,!1)}).catch(ui),Promise.reject()):(F.delta&&s.go(-F.delta,!1),ge(g,q,p))).then(g=>{g=g||V(q,p,!1),g&&(F.delta&&!pn(g,8)?s.go(-F.delta,!1):F.type===Ii.pop&&pn(g,20)&&s.go(-1,!1)),Ce(q,p,g)}).catch(ui)}))}let Re=Hs(),Pe=Hs(),be;function ge(b,$,F){Nn(b);const q=Pe.list();return q.length?q.forEach(me=>me(b,$,F)):console.error(b),Promise.reject(b)}function fn(){return be&&u.value!==Mn?Promise.resolve():new Promise((b,$)=>{Re.add([b,$])})}function Nn(b){return be||(be=!b,Oe(),Re.list().forEach(([$,F])=>b?F(b):$()),Re.reset()),b}function Gt(b,$,F,q){const{scrollBehavior:me}=t;if(!Zr||!me)return Promise.resolve();const p=!F&&sE(zd(b.fullPath,0))||(q||!F)&&history.state&&history.state.scroll||null;return nh().then(()=>me(b,$,p)).then(g=>g&&nE(g)).catch(g=>ge(g,b,$))}const pt=b=>s.go(b);let Hr;const Kr=new Set,Do={currentRoute:u,listening:!0,addRoute:d,removeRoute:D,hasRoute:_,getRoutes:y,resolve:k,options:t,push:N,replace:Q,go:pt,back:()=>pt(-1),forward:()=>pt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Pe.add,isReady:fn,install(b){const $=this;b.component("RouterLink",VE),b.component("RouterView",SD),b.config.globalProperties.$router=$,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>De(u)}),Zr&&!Hr&&u.value===Mn&&(Hr=!0,N(s.location).catch(me=>{}));const F={};for(const me in Mn)F[me]=It(()=>u.value[me]);b.provide(Za,$),b.provide(mh,Os(F)),b.provide(Gc,u);const q=b.unmount;Kr.add(b),b.unmount=function(){Kr.delete(b),Kr.size<1&&(c=Mn,de&&de(),de=null,u.value=Mn,Hr=!1,be=!1),q()}}};function et(b){return b.reduce(($,F)=>$.then(()=>Y(F)),Promise.resolve())}return Do}function KE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>ys(c,a))?r.push(a):n.push(a));const u=t.matched[o];u&&(e.matched.find(c=>ys(c,u))||s.push(u))}return[n,r,s]}function WE(){return Nt(Za)}function GE(){return Nt(mh)}const QE={class:"min-h-screen flex place-items-center"},YE={__name:"App",setup(t){return(e,n)=>(le(),je("main",QE,[ye(De(SD),null,{default:yt(({Component:r})=>[ye(Wi,{name:"fade",mode:"out-in"},{default:yt(()=>[(le(),_t(fw(r)))]),_:2},1024)]),_:1})]))}},XE=hn(YE,[["__scopeId","data-v-0102e05e"]]),JE={},ZE={class:"bg-lime-300 p-3 font-bold rounded-md shadow-md uppercase duration-700 hover:bg-lime-500"};function eC(t,e){return le(),je("button",ZE,[Lc(t.$slots,"default")])}const kr=hn(JE,[["render",eC]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},tC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},RD={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;u||(d=64,o||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xD(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new nC;const f=i<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const D=c<<6&192|h;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rC=function(t){const e=xD(t);return RD.encodeByteArray(e,!0)},oa=function(t){return rC(t).replace(/\./g,"")},FD=function(t){try{return RD.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=()=>sC().__FIREBASE_DEFAULTS__,oC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&FD(t[1]);return e&&JSON.parse(e)},Dh=()=>{try{return iC()||oC()||aC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ND=t=>{var e,n;return(n=(e=Dh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},uC=t=>{const e=ND(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},OD=()=>{var t;return(t=Dh())===null||t===void 0?void 0:t.config},PD=t=>{var e;return(e=Dh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[oa(JSON.stringify(n)),oa(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function MD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dC(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function LD(){try{return typeof indexedDB=="object"}catch{return!1}}function $D(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function pC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="FirebaseError";class Wt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gC,Object.setPrototypeOf(this,Wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$r.prototype.create)}}class $r{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mC(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Wt(s,a,r)}}function mC(t,e){return t.replace(DC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const DC=/\{\$([^}]+)}/g;function yC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ti(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(rp(i)&&rp(o)){if(!Ti(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function rp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _C(t,e){const n=new vC(t,e);return n.subscribe.bind(n)}class vC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ec),s.error===void 0&&(s.error=ec),s.complete===void 0&&(s.complete=ec);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ec(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=1e3,EC=2,CC=4*60*60*1e3,IC=.5;function sp(t,e=bC,n=EC){const r=e*Math.pow(n,t),s=Math.round(IC*r*(Math.random()-.5)*2);return Math.min(CC,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return t&&t._delegate?t._delegate:t}class qt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AC(e))try{this.getOrInitializeService({instanceIdentifier:fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fr){return this.instances.has(e)}getOptions(e=fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fr){return this.component?this.component.multipleInstances?e:fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kC(t){return t===fr?void 0:t}function AC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const xC={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},RC=fe.INFO,FC={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},NC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=FC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eu{constructor(e){this.name=e,this._logLevel=RC,this._logHandler=NC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const OC=(t,e)=>e.some(n=>t instanceof n);let ip,op;function PC(){return ip||(ip=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MC(){return op||(op=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const UD=new WeakMap,Qc=new WeakMap,BD=new WeakMap,tc=new WeakMap,yh=new WeakMap;function LC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Qn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&UD.set(n,t)}).catch(()=>{}),yh.set(e,t),e}function $C(t){if(Qc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Qc.set(t,e)}let Yc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||BD.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UC(t){Yc=t(Yc)}function BC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nc(this),e,...n);return BD.set(r,e.sort?e.sort():[e]),Qn(r)}:MC().includes(t)?function(...e){return t.apply(nc(this),e),Qn(UD.get(this))}:function(...e){return Qn(t.apply(nc(this),e))}}function VC(t){return typeof t=="function"?BC(t):(t instanceof IDBTransaction&&$C(t),OC(t,PC())?new Proxy(t,Yc):t)}function Qn(t){if(t instanceof IDBRequest)return LC(t);if(tc.has(t))return tc.get(t);const e=VC(t);return e!==t&&(tc.set(t,e),yh.set(e,t)),e}const nc=t=>yh.get(t);function jC(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Qn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Qn(o.result),u.oldVersion,u.newVersion,Qn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const zC=["get","getKey","getAll","getAllKeys","count"],qC=["put","add","delete","clear"],rc=new Map;function ap(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rc.get(e))return rc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=qC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||zC.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&u.done]))[0]};return rc.set(e,i),i}UC(t=>({...t,get:(e,n,r)=>ap(e,n)||t.get(e,n,r),has:(e,n)=>!!ap(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xc="@firebase/app",up="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new eu("@firebase/app"),WC="@firebase/app-compat",GC="@firebase/analytics-compat",QC="@firebase/analytics",YC="@firebase/app-check-compat",XC="@firebase/app-check",JC="@firebase/auth",ZC="@firebase/auth-compat",e3="@firebase/database",t3="@firebase/database-compat",n3="@firebase/functions",r3="@firebase/functions-compat",s3="@firebase/installations",i3="@firebase/installations-compat",o3="@firebase/messaging",a3="@firebase/messaging-compat",u3="@firebase/performance",c3="@firebase/performance-compat",l3="@firebase/remote-config",h3="@firebase/remote-config-compat",f3="@firebase/storage",d3="@firebase/storage-compat",p3="@firebase/firestore",g3="@firebase/firestore-compat",m3="firebase",D3="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="[DEFAULT]",y3={[Xc]:"fire-core",[WC]:"fire-core-compat",[QC]:"fire-analytics",[GC]:"fire-analytics-compat",[XC]:"fire-app-check",[YC]:"fire-app-check-compat",[JC]:"fire-auth",[ZC]:"fire-auth-compat",[e3]:"fire-rtdb",[t3]:"fire-rtdb-compat",[n3]:"fire-fn",[r3]:"fire-fn-compat",[s3]:"fire-iid",[i3]:"fire-iid-compat",[o3]:"fire-fcm",[a3]:"fire-fcm-compat",[u3]:"fire-perf",[c3]:"fire-perf-compat",[l3]:"fire-rc",[h3]:"fire-rc-compat",[f3]:"fire-gcs",[d3]:"fire-gcs-compat",[p3]:"fire-fst",[g3]:"fire-fst-compat","fire-js":"fire-js",[m3]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=new Map,Zc=new Map;function _3(t,e){try{t.container.addComponent(e)}catch(n){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function un(t){const e=t.name;if(Zc.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;Zc.set(e,t);for(const n of aa.values())_3(n,t);return!0}function Ur(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v3={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yn=new $r("app","Firebase",v3);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w3{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=D3;function VD(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Yn.create("bad-app-name",{appName:String(s)});if(n||(n=OD()),!n)throw Yn.create("no-options");const i=aa.get(s);if(i){if(Ti(n,i.options)&&Ti(r,i.config))return i;throw Yn.create("duplicate-app",{appName:s})}const o=new SC(s);for(const u of Zc.values())o.addComponent(u);const a=new w3(n,r,o);return aa.set(s,a),a}function _h(t=Jc){const e=aa.get(t);if(!e&&t===Jc&&OD())return VD();if(!e)throw Yn.create("no-app",{appName:t});return e}function Pt(t,e,n){var r;let s=(r=y3[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ar.warn(a.join(" "));return}un(new qt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b3="firebase-heartbeat-database",E3=1,ki="firebase-heartbeat-store";let sc=null;function jD(){return sc||(sc=jC(b3,E3,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ki)}}}).catch(t=>{throw Yn.create("idb-open",{originalErrorMessage:t.message})})),sc}async function C3(t){try{return await(await jD()).transaction(ki).objectStore(ki).get(zD(t))}catch(e){if(e instanceof Wt)Ar.warn(e.message);else{const n=Yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ar.warn(n.message)}}}async function cp(t,e){try{const r=(await jD()).transaction(ki,"readwrite");await r.objectStore(ki).put(e,zD(t)),await r.done}catch(n){if(n instanceof Wt)Ar.warn(n.message);else{const r=Yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ar.warn(r.message)}}}function zD(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I3=1024,T3=30*24*60*60*1e3;class k3{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new S3(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=lp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=T3}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lp(),{heartbeatsToSend:n,unsentEntries:r}=A3(this._heartbeatsCache.heartbeats),s=oa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function lp(){return new Date().toISOString().substring(0,10)}function A3(t,e=I3){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),hp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),hp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class S3{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LD()?$D().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await C3(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function hp(t){return oa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x3(t){un(new qt("platform-logger",e=>new HC(e),"PRIVATE")),un(new qt("heartbeat",e=>new k3(e),"PRIVATE")),Pt(Xc,up,t),Pt(Xc,up,"esm2017"),Pt("fire-js","")}x3("");function vh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function qD(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const R3=qD,HD=new $r("auth","Firebase",qD());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=new eu("@firebase/auth");function F3(t,...e){ua.logLevel<=fe.WARN&&ua.warn(`Auth (${Ps}): ${t}`,...e)}function Bo(t,...e){ua.logLevel<=fe.ERROR&&ua.error(`Auth (${Ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,...e){throw wh(t,...e)}function rn(t,...e){return wh(t,...e)}function KD(t,e,n){const r=Object.assign(Object.assign({},R3()),{[e]:n});return new $r("auth","Firebase",r).create(e,{appName:t.name})}function N3(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&cn(t,"argument-error"),KD(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return HD.create(t,...e)}function ne(t,e,...n){if(!t)throw wh(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bo(e),new Error(e)}function Tn(t,e){t||Dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function O3(){return fp()==="http:"||fp()==="https:"}function fp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P3(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(O3()||MD()||"connection"in navigator)?navigator.onLine:!0}function M3(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=hC()||fC()}get(){return P3()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L3={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $3=new Qi(3e4,6e4);function GD(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yi(t,e,n,r,s={}){return QD(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Gi(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),WD.fetch()(YD(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},i))})}async function QD(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},L3),e);try{const s=new B3(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Co(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Co(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Co(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Co(t,"user-disabled",o);const l=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw KD(t,l,c);cn(t,l)}}catch(s){if(s instanceof Wt)throw s;cn(t,"network-request-failed",{message:String(s)})}}async function U3(t,e,n,r,s={}){const i=await Yi(t,e,n,r,s);return"mfaPendingCredential"in i&&cn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function YD(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?bh(t.config,s):`${t.config.apiScheme}://${s}`}class B3{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),$3.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Co(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=rn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V3(t,e){return Yi(t,"POST","/v1/accounts:delete",e)}async function j3(t,e){return Yi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function z3(t,e=!1){const n=qe(t),r=await n.getIdToken(e),s=Eh(r);ne(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:li(ic(s.auth_time)),issuedAtTime:li(ic(s.iat)),expirationTime:li(ic(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ic(t){return Number(t)*1e3}function Eh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bo("JWT malformed, contained fewer than 3 sections"),null;try{const s=FD(n);return s?JSON.parse(s):(Bo("Failed to decode base64 JWT payload"),null)}catch(s){return Bo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function q3(t){const e=Eh(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wt&&H3(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function H3({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K3{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=li(this.lastLoginAt),this.creationTime=li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ai(t,j3(n,{idToken:r}));ne(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Q3(i.providerUserInfo):[],a=G3(t.providerData,o),u=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=u?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new XD(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function W3(t){const e=qe(t);await ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function G3(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Q3(t){return t.map(e=>{var{providerId:n}=e,r=vh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y3(t,e){const n=await QD(t,{},async()=>{const r=Gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=YD(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",WD.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):q3(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Y3(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Si;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=vh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new K3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new XD(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ai(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return z3(this,e)}reload(){return W3(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ca(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ai(this,V3(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,u,c,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,D=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,k=(c=n.createdAt)!==null&&c!==void 0?c:void 0,C=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:O,emailVerified:N,isAnonymous:Q,providerData:U,stsTokenManager:z}=n;ne(O&&z,e,"internal-error");const x=Si.fromJSON(this.name,z);ne(typeof O=="string",e,"internal-error"),Ln(h,e.name),Ln(f,e.name),ne(typeof N=="boolean",e,"internal-error"),ne(typeof Q=="boolean",e,"internal-error"),Ln(d,e.name),Ln(D,e.name),Ln(y,e.name),Ln(_,e.name),Ln(k,e.name),Ln(C,e.name);const Y=new Cr({uid:O,auth:e,email:f,emailVerified:N,displayName:h,isAnonymous:Q,photoURL:D,phoneNumber:d,tenantId:y,stsTokenManager:x,createdAt:k,lastLoginAt:C});return U&&Array.isArray(U)&&(Y.providerData=U.map(X=>Object.assign({},X))),_&&(Y._redirectEventId=_),Y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Si;s.updateFromServerResponse(n);const i=new Cr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ca(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=new Map;function yn(t){Tn(t instanceof Function,"Expected a class definition");let e=dp.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}JD.type="NONE";const pp=JD;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t,e,n){return`firebase:${t}:${e}:${n}`}class as{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Vo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Vo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new as(yn(pp),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||yn(pp);const o=Vo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const l=await c._get(o);if(l){const h=Cr._fromJSON(e,l);c!==i&&(a=h),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new as(i,e,r):(i=u[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new as(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ty(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ZD(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ry(e))return"Blackberry";if(sy(e))return"Webos";if(Ch(e))return"Safari";if((e.includes("chrome/")||ey(e))&&!e.includes("edge/"))return"Chrome";if(ny(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ZD(t=lt()){return/firefox\//i.test(t)}function Ch(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ey(t=lt()){return/crios\//i.test(t)}function ty(t=lt()){return/iemobile/i.test(t)}function ny(t=lt()){return/android/i.test(t)}function ry(t=lt()){return/blackberry/i.test(t)}function sy(t=lt()){return/webos/i.test(t)}function tu(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function X3(t=lt()){var e;return tu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function J3(){return dC()&&document.documentMode===10}function iy(t=lt()){return tu(t)||ny(t)||sy(t)||ry(t)||/windows phone/i.test(t)||ty(t)}function Z3(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t,e=[]){let n;switch(t){case"Browser":n=gp(lt());break;case"Worker":n=`${gp(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ps}/${r}`}async function ay(t,e){return Yi(t,"GET","/v2/recaptchaConfig",GD(t,e))}function mp(t){return t!==void 0&&t.enterprise!==void 0}class uy{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function cy(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=rn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",eI().appendChild(r)})}function tI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const nI="https://www.google.com/recaptcha/enterprise.js?render=",rI="recaptcha-enterprise",sI="NO_RECAPTCHA";class iI{constructor(e){this.type=rI,this.auth=Xi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{ay(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new uy(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function s(i,o,a){const u=window.grecaptcha;mp(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(sI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&mp(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}cy(nI+a).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const u=e(i);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dp(this),this.idTokenSubscription=new Dp(this),this.beforeStateQueue=new oI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=HD,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await as.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ca(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=M3()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?qe(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}async initializeRecaptchaConfig(){const e=await ay(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new uy(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new iI(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $r("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ne(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&F3(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xi(t){return qe(t)}class Dp{constructor(e){this.auth=e,this.observer=null,this.addObserver=_C(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t,e){const n=Ur(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ti(i,e??{}))return s;cn(s,"already-initialized")}return n.initialize({options:e})}function cI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lI(t,e,n){const r=Xi(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=ly(e),{host:o,port:a}=hI(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||fI()}function ly(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hI(t){const e=ly(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:yp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:yp(o)}}}function yp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(t,e){return U3(t,"POST","/v1/accounts:signInWithIdp",GD(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="http://localhost";class Sr extends hy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=vh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Sr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,us(e,n)}buildRequest(){const e={requestUri:dI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends Ih{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Ji{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sr._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $t.credential(n,r)}catch{return null}}}$t.GOOGLE_SIGN_IN_METHOD="google.com";$t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Ji{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Ji{constructor(){super("twitter.com")}static credential(e,n){return Sr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Cr._fromIdTokenResponse(e,r,s),o=_p(r);return new vs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=_p(r);return new vs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function _p(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends Wt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,la.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new la(e,n,r,s)}}function fy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?la._fromErrorAndOperation(t,i,e,r):i})}async function pI(t,e,n=!1){const r=await Ai(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gI(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Ai(t,fy(r,s,e,t),n);ne(i.idToken,r,"internal-error");const o=Eh(i.idToken);ne(o,r,"internal-error");const{sub:a}=o;return ne(t.uid===a,r,"user-mismatch"),vs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&cn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mI(t,e,n=!1){const r="signIn",s=await fy(t,r,e),i=await vs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function DI(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function yI(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function _I(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}function vI(t){return qe(t).signOut()}const ha="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ha,"1"),this.storage.removeItem(ha),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(){const t=lt();return Ch(t)||tu(t)}const bI=1e3,EI=10;class py extends dy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wI()&&Z3(),this.fallbackToPolling=iy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);J3()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,EI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}py.type="LOCAL";const CI=py;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy extends dy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gy.type="SESSION";const my=gy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new nu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),u=await II(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,u)=>{const c=Th("",20);s.port1.start();const l=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(l),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function kI(t){sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function AI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xI(){return Dy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy="firebaseLocalStorageDb",RI=1,fa="firebaseLocalStorage",_y="fbase_key";class Zi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ru(t,e){return t.transaction([fa],e?"readwrite":"readonly").objectStore(fa)}function FI(){const t=indexedDB.deleteDatabase(yy);return new Zi(t).toPromise()}function tl(){const t=indexedDB.open(yy,RI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fa,{keyPath:_y})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fa)?e(r):(r.close(),await FI(),e(await tl()))})})}async function vp(t,e,n){const r=ru(t,!0).put({[_y]:e,value:n});return new Zi(r).toPromise()}async function NI(t,e){const n=ru(t,!1).get(e),r=await new Zi(n).toPromise();return r===void 0?null:r.value}function wp(t,e){const n=ru(t,!0).delete(e);return new Zi(n).toPromise()}const OI=800,PI=3;class vy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>PI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nu._getInstance(xI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await AI(),!this.activeServiceWorker)return;this.sender=new TI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tl();return await vp(e,ha,"1"),await wp(e,ha),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>NI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ru(s,!1).getAll();return new Zi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vy.type="LOCAL";const MI=vy;new Qi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t,e){return e?yn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh extends hy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LI(t){return mI(t.auth,new kh(t),t.bypassAuthState)}function $I(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),gI(n,new kh(t),t.bypassAuthState)}async function UI(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),pI(n,new kh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LI;case"linkViaPopup":case"linkViaRedirect":return UI;case"reauthViaPopup":case"reauthViaRedirect":return $I;default:cn(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=new Qi(2e3,1e4);async function VI(t,e,n){const r=Xi(t);N3(t,e,Ih);const s=wy(r,n);return new Dr(r,"signInViaPopup",e,s).executeNotNull()}class Dr extends by{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Dr.currentPopupAction&&Dr.currentPopupAction.cancel(),Dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=Th();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BI.get())};e()}}Dr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI="pendingRedirect",jo=new Map;class zI extends by{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=jo.get(this.auth._key());if(!e){try{const r=await qI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}jo.set(this.auth._key(),e)}return this.bypassAuthState||jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qI(t,e){const n=WI(e),r=KI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function HI(t,e){jo.set(t._key(),e)}function KI(t){return yn(t._redirectPersistence)}function WI(t){return Vo(jI,t.config.apiKey,t.name)}async function GI(t,e,n=!1){const r=Xi(t),s=wy(r,e),o=await new zI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=10*60*1e3;class YI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ey(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QI&&this.cachedEventUids.clear(),this.cachedEventUids.has(bp(e))}saveEventToCache(e){this.cachedEventUids.add(bp(e)),this.lastProcessedEventTime=Date.now()}}function bp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ey({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ey(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(t,e={}){return Yi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eT=/^https?/;async function tT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JI(t);for(const n of e)try{if(nT(n))return}catch{}cn(t,"unauthorized-domain")}function nT(t){const e=el(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!eT.test(n))return!1;if(ZI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=new Qi(3e4,6e4);function Ep(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sT(t){return new Promise((e,n)=>{var r,s,i;function o(){Ep(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ep(),n(rn(t,"network-request-failed"))},timeout:rT.get()})}if(!((s=(r=sn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=sn().gapi)===null||i===void 0)&&i.load)o();else{const a=tI("iframefcb");return sn()[a]=()=>{gapi.load?o():n(rn(t,"network-request-failed"))},cy(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw zo=null,e})}let zo=null;function iT(t){return zo=zo||sT(t),zo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=new Qi(5e3,15e3),aT="__/auth/iframe",uT="emulator/auth/iframe",cT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hT(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bh(e,uT):`https://${t.config.authDomain}/${aT}`,r={apiKey:e.apiKey,appName:t.name,v:Ps},s=lT.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Gi(r).slice(1)}`}async function fT(t){const e=await iT(t),n=sn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:hT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),a=sn().setTimeout(()=>{i(o)},oT.get());function u(){sn().clearTimeout(a),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pT=500,gT=600,mT="_blank",DT="http://localhost";class Cp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yT(t,e,n,r=pT,s=gT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},dT),{width:r.toString(),height:s.toString(),top:i,left:o}),c=lt().toLowerCase();n&&(a=ey(c)?mT:n),ZD(c)&&(e=e||DT,u.scrollbars="yes");const l=Object.entries(u).reduce((f,[d,D])=>`${f}${d}=${D},`,"");if(X3(c)&&a!=="_self")return _T(e||"",a),new Cp(null);const h=window.open(e||"",a,l);ne(h,t,"popup-blocked");try{h.focus()}catch{}return new Cp(h)}function _T(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="__/auth/handler",wT="emulator/auth/handler",bT=encodeURIComponent("fac");async function Ip(t,e,n,r,s,i){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ps,eventId:s};if(e instanceof Ih){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(i||{}))o[l]=h}if(e instanceof Ji){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const u=await t._getAppCheckToken(),c=u?`#${bT}=${encodeURIComponent(u)}`:"";return`${ET(t)}?${Gi(a).slice(1)}${c}`}function ET({config:t}){return t.emulator?bh(t,wT):`https://${t.authDomain}/${vT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="webStorageSupport";class CT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=my,this._completeRedirectFn=GI,this._overrideRedirectResult=HI}async _openPopup(e,n,r,s){var i;Tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ip(e,n,r,el(),s);return yT(e,o,Th())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ip(e,n,r,el(),s);return kI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fT(e),r=new YI(e);return n.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oc,{type:oc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[oc];o!==void 0&&n(!!o),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iy()||Ch()||tu()}}const IT=CT;var Tp="@firebase/auth",kp="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function AT(t){un(new qt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oy(t)},c=new aI(r,s,i,u);return cI(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),un(new qt("auth-internal",e=>{const n=Xi(e.getProvider("auth").getImmediate());return(r=>new TT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(Tp,kp,kT(t)),Pt(Tp,kp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=5*60,xT=PD("authIdTokenMaxAge")||ST;let Ap=null;const RT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xT)return;const s=n==null?void 0:n.token;Ap!==s&&(Ap=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Cy(t=_h()){const e=Ur(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uI(t,{popupRedirectResolver:IT,persistence:[MI,CI,my]}),r=PD("authTokenSyncURL");if(r){const i=RT(r);yI(n,i,()=>i(n.currentUser)),DI(n,o=>i(o))}const s=ND("auth");return s&&lI(n,`http://${s}`),n}AT("Browser");var FT="firebase",NT="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(FT,NT,"app");const OT=(t,e)=>e.some(n=>t instanceof n);let Sp,xp;function PT(){return Sp||(Sp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MT(){return xp||(xp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Iy=new WeakMap,nl=new WeakMap,Ty=new WeakMap,ac=new WeakMap,Ah=new WeakMap;function LT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Xn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Iy.set(n,t)}).catch(()=>{}),Ah.set(e,t),e}function $T(t){if(nl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});nl.set(t,e)}let rl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ty.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UT(t){rl=t(rl)}function BT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(uc(this),e,...n);return Ty.set(r,e.sort?e.sort():[e]),Xn(r)}:MT().includes(t)?function(...e){return t.apply(uc(this),e),Xn(Iy.get(this))}:function(...e){return Xn(t.apply(uc(this),e))}}function VT(t){return typeof t=="function"?BT(t):(t instanceof IDBTransaction&&$T(t),OT(t,PT())?new Proxy(t,rl):t)}function Xn(t){if(t instanceof IDBRequest)return LT(t);if(ac.has(t))return ac.get(t);const e=VT(t);return e!==t&&(ac.set(t,e),Ah.set(e,t)),e}const uc=t=>Ah.get(t);function jT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Xn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Xn(o.result),u.oldVersion,u.newVersion,Xn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const zT=["get","getKey","getAll","getAllKeys","count"],qT=["put","add","delete","clear"],cc=new Map;function Rp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cc.get(e))return cc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=qT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||zT.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&u.done]))[0]};return cc.set(e,i),i}UT(t=>({...t,get:(e,n,r)=>Rp(e,n)||t.get(e,n,r),has:(e,n)=>!!Rp(e,n)||t.has(e,n)}));const ky="@firebase/installations",Sh="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=1e4,Sy=`w:${Sh}`,xy="FIS_v2",HT="https://firebaseinstallations.googleapis.com/v1",KT=60*60*1e3,WT="installations",GT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},xr=new $r(WT,GT,QT);function Ry(t){return t instanceof Wt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy({projectId:t}){return`${HT}/projects/${t}/installations`}function Ny(t){return{token:t.token,requestStatus:2,expiresIn:XT(t.expiresIn),creationTime:Date.now()}}async function Oy(t,e){const r=(await e.json()).error;return xr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Py({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function YT(t,{refreshToken:e}){const n=Py(t);return n.append("Authorization",JT(e)),n}async function My(t){const e=await t();return e.status>=500&&e.status<600?t():e}function XT(t){return Number(t.replace("s","000"))}function JT(t){return`${xy} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZT({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Fy(t),s=Py(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:xy,appId:t.appId,sdkVersion:Sy},a={method:"POST",headers:s,body:JSON.stringify(o)},u=await My(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Ny(c.authToken)}}else throw await Oy("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=/^[cdef][\w-]{21}$/,sl="";function nk(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=rk(t);return tk.test(n)?n:sl}catch{return sl}}function rk(t){return ek(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=new Map;function Uy(t,e){const n=su(t);By(n,e),sk(n,e)}function By(t,e){const n=$y.get(t);if(n)for(const r of n)r(e)}function sk(t,e){const n=ik();n&&n.postMessage({key:t,fid:e}),ok()}let yr=null;function ik(){return!yr&&"BroadcastChannel"in self&&(yr=new BroadcastChannel("[Firebase] FID Change"),yr.onmessage=t=>{By(t.data.key,t.data.fid)}),yr}function ok(){$y.size===0&&yr&&(yr.close(),yr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak="firebase-installations-database",uk=1,Rr="firebase-installations-store";let lc=null;function xh(){return lc||(lc=jT(ak,uk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rr)}}})),lc}async function da(t,e){const n=su(t),s=(await xh()).transaction(Rr,"readwrite"),i=s.objectStore(Rr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Uy(t,e.fid),e}async function Vy(t){const e=su(t),r=(await xh()).transaction(Rr,"readwrite");await r.objectStore(Rr).delete(e),await r.done}async function iu(t,e){const n=su(t),s=(await xh()).transaction(Rr,"readwrite"),i=s.objectStore(Rr),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Uy(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rh(t){let e;const n=await iu(t.appConfig,r=>{const s=ck(r),i=lk(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===sl?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ck(t){const e=t||{fid:nk(),registrationStatus:0};return jy(e)}function lk(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(xr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=hk(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:fk(t)}:{installationEntry:e}}async function hk(t,e){try{const n=await ZT(t,e);return da(t.appConfig,n)}catch(n){throw Ry(n)&&n.customData.serverCode===409?await Vy(t.appConfig):await da(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function fk(t){let e=await Fp(t.appConfig);for(;e.registrationStatus===1;)await Ly(100),e=await Fp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Rh(t);return r||n}return e}function Fp(t){return iu(t,e=>{if(!e)throw xr.create("installation-not-found");return jy(e)})}function jy(t){return dk(t)?{fid:t.fid,registrationStatus:0}:t}function dk(t){return t.registrationStatus===1&&t.registrationTime+Ay<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk({appConfig:t,heartbeatServiceProvider:e},n){const r=gk(t,n),s=YT(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Sy,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},u=await My(()=>fetch(r,a));if(u.ok){const c=await u.json();return Ny(c)}else throw await Oy("Generate Auth Token",u)}function gk(t,{fid:e}){return`${Fy(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fh(t,e=!1){let n;const r=await iu(t.appConfig,i=>{if(!zy(i))throw xr.create("not-registered");const o=i.authToken;if(!e&&yk(o))return i;if(o.requestStatus===1)return n=mk(t,e),i;{if(!navigator.onLine)throw xr.create("app-offline");const a=vk(i);return n=Dk(t,a),a}});return n?await n:r.authToken}async function mk(t,e){let n=await Np(t.appConfig);for(;n.authToken.requestStatus===1;)await Ly(100),n=await Np(t.appConfig);const r=n.authToken;return r.requestStatus===0?Fh(t,e):r}function Np(t){return iu(t,e=>{if(!zy(e))throw xr.create("not-registered");const n=e.authToken;return wk(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Dk(t,e){try{const n=await pk(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await da(t.appConfig,r),n}catch(n){if(Ry(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Vy(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await da(t.appConfig,r)}throw n}}function zy(t){return t!==void 0&&t.registrationStatus===2}function yk(t){return t.requestStatus===2&&!_k(t)}function _k(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+KT}function vk(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function wk(t){return t.requestStatus===1&&t.requestTime+Ay<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(t){const e=t,{installationEntry:n,registrationPromise:r}=await Rh(e);return r?r.catch(console.error):Fh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ek(t,e=!1){const n=t;return await Ck(n),(await Fh(n,e)).token}async function Ck(t){const{registrationPromise:e}=await Rh(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(t){if(!t||!t.options)throw hc("App Configuration");if(!t.name)throw hc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw hc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function hc(t){return xr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="installations",Tk="installations-internal",kk=t=>{const e=t.getProvider("app").getImmediate(),n=Ik(e),r=Ur(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Ak=t=>{const e=t.getProvider("app").getImmediate(),n=Ur(e,qy).getImmediate();return{getId:()=>bk(n),getToken:s=>Ek(n,s)}};function Sk(){un(new qt(qy,kk,"PUBLIC")),un(new qt(Tk,Ak,"PRIVATE"))}Sk();Pt(ky,Sh);Pt(ky,Sh,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="analytics",xk="firebase_id",Rk="origin",Fk=60*1e3,Nk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Nh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new eu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},kt=new $r("analytics","Analytics",Ok);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(t){if(!t.startsWith(Nh)){const e=kt.create("invalid-gtag-resource",{gtagURL:t});return vt.warn(e.message),""}return t}function Hy(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Mk(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Lk(t,e){const n=Mk("firebase-js-sdk-policy",{createScriptURL:Pk}),r=document.createElement("script"),s=`${Nh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function $k(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Uk(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const u=(await Hy(n)).find(c=>c.measurementId===s);u&&await e[u.appId]}}catch(a){vt.error(a)}t("config",s,i)}async function Bk(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Hy(n);for(const u of o){const c=a.find(h=>h.measurementId===u),l=c&&e[c.appId];if(l)i.push(l);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){vt.error(i)}}function Vk(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,u]=o;await Bk(t,e,n,a,u)}else if(i==="config"){const[a,u]=o;await Uk(t,e,n,r,a,u)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){vt.error(a)}}return s}function jk(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Vk(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function zk(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Nh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=30,Hk=1e3;class Kk{constructor(e={},n=Hk){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ky=new Kk;function Wk(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Gk(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Wk(r)},i=Nk.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw kt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Qk(t,e=Ky,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw kt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw kt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Jk;return setTimeout(async()=>{a.abort()},n!==void 0?n:Fk),Wy({appId:r,apiKey:s,measurementId:i},o,a,e)}async function Wy(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Ky){var i;const{appId:o,measurementId:a}=t;try{await Yk(r,e)}catch(u){if(a)return vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await Gk(t);return s.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!Xk(c)){if(s.deleteThrottleMetadata(o),a)return vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const l=Number((i=c==null?void 0:c.customData)===null||i===void 0?void 0:i.httpStatus)===503?sp(n,s.intervalMillis,qk):sp(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return s.setThrottleMetadata(o,h),vt.debug(`Calling attemptFetch again in ${l} millis`),Wy(t,h,r,s)}}function Yk(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(kt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Xk(t){if(!(t instanceof Wt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Jk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Zk(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(){if(LD())try{await $D()}catch(t){return vt.warn(kt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return vt.warn(kt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function tA(t,e,n,r,s,i,o){var a;const u=Qk(t);u.then(d=>{n[d.measurementId]=d.appId,t.options.measurementId&&d.measurementId!==t.options.measurementId&&vt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>vt.error(d)),e.push(u);const c=eA().then(d=>{if(d)return r.getId()}),[l,h]=await Promise.all([u,c]);zk(i)||Lk(i,l.measurementId),s("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[Rk]="firebase",f.update=!0,h!=null&&(f[xk]=h),s("config",l.measurementId,f),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.app=e}_delete(){return delete hi[this.app.options.appId],Promise.resolve()}}let hi={},Op=[];const Pp={};let fc="dataLayer",rA="gtag",Mp,Gy,Lp=!1;function sA(){const t=[];if(MD()&&t.push("This is a browser extension environment."),pC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=kt.create("invalid-analytics-context",{errorInfo:e});vt.warn(n.message)}}function iA(t,e,n){sA();const r=t.options.appId;if(!r)throw kt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw kt.create("no-api-key");if(hi[r]!=null)throw kt.create("already-exists",{id:r});if(!Lp){$k(fc);const{wrappedGtag:i,gtagCore:o}=jk(hi,Op,Pp,fc,rA);Gy=i,Mp=o,Lp=!0}return hi[r]=tA(t,Op,Pp,e,Mp,fc,n),new nA(t)}function oA(t=_h()){t=qe(t);const e=Ur(t,pa);return e.isInitialized()?e.getImmediate():aA(t)}function aA(t,e={}){const n=Ur(t,pa);if(n.isInitialized()){const s=n.getImmediate();if(Ti(e,n.getOptions()))return s;throw kt.create("already-initialized")}return n.initialize({options:e})}function uA(t,e,n,r){t=qe(t),Zk(Gy,hi[t.app.options.appId],e,n,r).catch(s=>vt.error(s))}const $p="@firebase/analytics",Up="0.10.0";function cA(){un(new qt(pa,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return iA(r,s,n)},"PUBLIC")),un(new qt("analytics-internal",t,"PRIVATE")),Pt($p,Up),Pt($p,Up,"esm2017");function t(e){try{const n=e.getProvider(pa).getImmediate();return{logEvent:(r,s,i)=>uA(n,r,s,i)}}catch(n){throw kt.create("interop-component-reg-failed",{reason:n})}}}cA();var lA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Oh=Oh||{},Z=lA||self;function ga(){}function ou(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function eo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function hA(t){return Object.prototype.hasOwnProperty.call(t,dc)&&t[dc]||(t[dc]=++fA)}var dc="closure_uid_"+(1e9*Math.random()>>>0),fA=0;function dA(t,e,n){return t.call.apply(t.bind,arguments)}function pA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ot(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ot=dA:ot=pA,ot.apply(null,arguments)}function Io(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function or(){this.s=this.s,this.o=this.o}var gA=0;or.prototype.s=!1;or.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),gA!=0)&&hA(this)};or.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ph(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Bp(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ou(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var mA=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",ga,e),Z.removeEventListener("test",ga,e)}catch{}return t}();function ma(t){return/^[\s\xa0]*$/.test(t)}var Vp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function pc(t,e){return t<e?-1:t>e?1:0}function au(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function en(t){return au().indexOf(t)!=-1}function Mh(t){return Mh[" "](t),t}Mh[" "]=ga;function Yy(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var DA=en("Opera"),ws=en("Trident")||en("MSIE"),Xy=en("Edge"),il=Xy||ws,Jy=en("Gecko")&&!(au().toLowerCase().indexOf("webkit")!=-1&&!en("Edge"))&&!(en("Trident")||en("MSIE"))&&!en("Edge"),yA=au().toLowerCase().indexOf("webkit")!=-1&&!en("Edge");function Zy(){var t=Z.document;return t?t.documentMode:void 0}var Da;e:{var gc="",mc=function(){var t=au();if(Jy)return/rv:([^\);]+)(\)|;)/.exec(t);if(Xy)return/Edge\/([\d\.]+)/.exec(t);if(ws)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(yA)return/WebKit\/(\S+)/.exec(t);if(DA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(mc&&(gc=mc?mc[1]:""),ws){var Dc=Zy();if(Dc!=null&&Dc>parseFloat(gc)){Da=String(Dc);break e}}Da=gc}var _A={};function vA(){return Yy(_A,9,function(){let t=0;const e=Vp(String(Da)).split("."),n=Vp("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=pc(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||pc(s[2].length==0,i[2].length==0)||pc(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var ol;if(Z.document&&ws){var jp=Zy();ol=jp||parseInt(Da,10)||void 0}else ol=void 0;var wA=ol;function xi(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Jy){e:{try{Mh(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:bA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&xi.$.h.call(this)}}Qe(xi,at);var bA={2:"touch",3:"pen",4:"mouse"};xi.prototype.h=function(){xi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var to="closure_listenable_"+(1e6*Math.random()|0),EA=0;function CA(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++EA,this.fa=this.ia=!1}function uu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Lh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function e_(t){const e={};for(const n in t)e[n]=t[n];return e}const zp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function t_(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<zp.length;i++)n=zp[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function cu(t){this.src=t,this.g={},this.h=0}cu.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ul(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new CA(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function al(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Qy(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(uu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ul(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var $h="closure_lm_"+(1e6*Math.random()|0),yc={};function n_(t,e,n,r,s){if(r&&r.once)return s_(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)n_(t,e[i],n,r,s);return null}return n=Vh(n),t&&t[to]?t.O(e,n,eo(r)?!!r.capture:!!r,s):r_(t,e,n,!1,r,s)}function r_(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=eo(s)?!!s.capture:!!s,a=Bh(t);if(a||(t[$h]=a=new cu(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=IA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)mA||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(o_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function IA(){function t(n){return e.call(t.src,t.listener,n)}const e=TA;return t}function s_(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)s_(t,e[i],n,r,s);return null}return n=Vh(n),t&&t[to]?t.P(e,n,eo(r)?!!r.capture:!!r,s):r_(t,e,n,!0,r,s)}function i_(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)i_(t,e[i],n,r,s);else r=eo(r)?!!r.capture:!!r,n=Vh(n),t&&t[to]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ul(i,n,r,s),-1<n&&(uu(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Bh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ul(e,n,r,s)),(n=-1<t?e[t]:null)&&Uh(n))}function Uh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[to])al(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(o_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Bh(e))?(al(n,t),n.h==0&&(n.src=null,e[$h]=null)):uu(t)}}}function o_(t){return t in yc?yc[t]:yc[t]="on"+t}function TA(t,e){if(t.fa)t=!0;else{e=new xi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Uh(t),t=n.call(r,e)}return t}function Bh(t){return t=t[$h],t instanceof cu?t:null}var _c="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vh(t){return typeof t=="function"?t:(t[_c]||(t[_c]=function(e){return t.handleEvent(e)}),t[_c])}function Ge(){or.call(this),this.i=new cu(this),this.S=this,this.J=null}Qe(Ge,or);Ge.prototype[to]=!0;Ge.prototype.removeEventListener=function(t,e,n,r){i_(this,t,e,n,r)};function Ze(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var s=e;e=new at(r,t),t_(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=To(o,r,!0,e)&&s}if(o=e.g=t,s=To(o,r,!0,e)&&s,s=To(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=To(o,r,!1,e)&&s}Ge.prototype.N=function(){if(Ge.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)uu(n[r]);delete t.g[e],t.h--}}this.J=null};Ge.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ge.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function To(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&al(t.i,o),s=a.call(u,r)!==!1&&s}}return s&&!r.defaultPrevented}var jh=Z.JSON.stringify;function kA(){var t=c_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class AA{constructor(){this.h=this.g=null}add(e,n){const r=a_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var a_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new SA,t=>t.reset());class SA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function xA(t){Z.setTimeout(()=>{throw t},0)}function u_(t,e){cl||RA(),ll||(cl(),ll=!0),c_.add(t,e)}var cl;function RA(){var t=Z.Promise.resolve(void 0);cl=function(){t.then(FA)}}var ll=!1,c_=new AA;function FA(){for(var t;t=kA();){try{t.h.call(t.g)}catch(n){xA(n)}var e=a_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ll=!1}function lu(t,e){Ge.call(this),this.h=t||1,this.g=e||Z,this.j=ot(this.qb,this),this.l=Date.now()}Qe(lu,Ge);P=lu.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ze(this,"tick"),this.ga&&(zh(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function zh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){lu.$.N.call(this),zh(this),delete this.g};function qh(t,e,n){if(typeof t=="function")n&&(t=ot(t,n));else if(t&&typeof t.handleEvent=="function")t=ot(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function l_(t){t.g=qh(()=>{t.g=null,t.i&&(t.i=!1,l_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class NA extends or{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:l_(this)}N(){super.N(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ri(t){or.call(this),this.h=t,this.g={}}Qe(Ri,or);var qp=[];function h_(t,e,n,r){Array.isArray(n)||(n&&(qp[0]=n.toString()),n=qp);for(var s=0;s<n.length;s++){var i=n_(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function f_(t){Lh(t.g,function(e,n){this.g.hasOwnProperty(n)&&Uh(e)},t),t.g={}}Ri.prototype.N=function(){Ri.$.N.call(this),f_(this)};Ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function hu(){this.g=!0}hu.prototype.Ea=function(){this.g=!1};function OA(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function PA(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function ns(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+LA(t,n)+(r?" "+r:"")})}function MA(t,e){t.info(function(){return"TIMEOUT: "+e})}hu.prototype.info=function(){};function LA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return jh(n)}catch{return e}}var Br={},Hp=null;function fu(){return Hp=Hp||new Ge}Br.Ta="serverreachability";function d_(t){at.call(this,Br.Ta,t)}Qe(d_,at);function Fi(t){const e=fu();Ze(e,new d_(e))}Br.STAT_EVENT="statevent";function p_(t,e){at.call(this,Br.STAT_EVENT,t),this.stat=e}Qe(p_,at);function dt(t){const e=fu();Ze(e,new p_(e,t))}Br.Ua="timingevent";function g_(t,e){at.call(this,Br.Ua,t),this.size=e}Qe(g_,at);function no(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var du={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},m_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Hh(){}Hh.prototype.h=null;function Kp(t){return t.h||(t.h=t.i())}function D_(){}var ro={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Kh(){at.call(this,"d")}Qe(Kh,at);function Wh(){at.call(this,"c")}Qe(Wh,at);var hl;function pu(){}Qe(pu,Hh);pu.prototype.g=function(){return new XMLHttpRequest};pu.prototype.i=function(){return{}};hl=new pu;function so(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ri(this),this.P=$A,t=il?125:void 0,this.V=new lu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new y_}function y_(){this.i=null,this.g="",this.h=!1}var $A=45e3,fl={},ya={};P=so.prototype;P.setTimeout=function(t){this.P=t};function dl(t,e,n){t.L=1,t.v=mu(kn(e)),t.s=n,t.S=!0,__(t,null)}function __(t,e){t.G=Date.now(),io(t),t.A=kn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),k_(n.i,"t",r),t.C=0,n=t.l.I,t.h=new y_,t.g=G_(t.l,n?e:null,!t.s),0<t.O&&(t.M=new NA(ot(t.Pa,t,t.g),t.O)),h_(t.U,t.g,"readystatechange",t.nb),e=t.I?e_(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Fi(),OA(t.j,t.u,t.A,t.m,t.W,t.s)}P.nb=function(t){t=t.target;const e=this.M;e&&_n(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const l=_n(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||il||this.g&&(this.h.h||this.g.ja()||Yp(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Fi(3):Fi(2)),gu(this);var n=this.g.da();this.aa=n;t:if(v_(this)){var r=Yp(this.g);t="";var s=r.length,i=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_r(this),fi(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,PA(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ma(a)){var c=a;break t}}c=null}if(n=c)ns(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pl(this,n);else{this.i=!1,this.o=3,dt(12),_r(this),fi(this);break e}}this.S?(w_(this,l,o),il&&this.i&&l==3&&(h_(this.U,this.V,"tick",this.mb),this.V.start())):(ns(this.j,this.m,o,null),pl(this,o)),l==4&&_r(this),this.i&&!this.J&&(l==4?q_(this.l,this):(this.i=!1,io(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),_r(this),fi(this)}}}catch{}finally{}};function v_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function w_(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=UA(t,n),s==ya){e==4&&(t.o=4,dt(14),r=!1),ns(t.j,t.m,null,"[Incomplete Response]");break}else if(s==fl){t.o=4,dt(15),ns(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ns(t.j,t.m,s,null),pl(t,s);v_(t)&&s!=ya&&s!=fl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,dt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ef(e),e.L=!0,dt(11))):(ns(t.j,t.m,n,"[Invalid Chunked Response]"),_r(t),fi(t))}P.mb=function(){if(this.g){var t=_n(this.g),e=this.g.ja();this.C<e.length&&(gu(this),w_(this,t,e),this.i&&t!=4&&io(this))}};function UA(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ya:(n=Number(e.substring(n,r)),isNaN(n)?fl:(r+=1,r+n>e.length?ya:(e=e.substr(r,n),t.C=r+n,e)))}P.cancel=function(){this.J=!0,_r(this)};function io(t){t.Y=Date.now()+t.P,b_(t,t.P)}function b_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=no(ot(t.lb,t),e)}function gu(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}P.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(MA(this.j,this.A),this.L!=2&&(Fi(),dt(17)),_r(this),this.o=2,fi(this)):b_(this,this.Y-t)};function fi(t){t.l.H==0||t.J||q_(t.l,t)}function _r(t){gu(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,zh(t.V),f_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function pl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||gl(n.h,t))){if(!t.K&&gl(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)wa(n),_u(n);else break e;Zh(n),dt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.M&&n.A==0&&!n.v&&(n.v=no(ot(n.ib,n),6e3));if(1>=x_(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else vr(n,11)}else if((t.K||n.g==t)&&wa(n),!ma(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const l=c[3];l!=null&&(n.qa=l,n.j.info("VER="+n.qa));const h=c[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const D=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(D){var i=r.h;i.g||D.indexOf("spdy")==-1&&D.indexOf("quic")==-1&&D.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Gh(i,i.h),i.h=null))}if(r.F){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Se(r.G,r.F,y))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=W_(r,r.I?r.oa:null,r.Y),o.K){R_(r.h,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(gu(a),io(a)),r.g=o}else j_(r);0<n.i.length&&vu(n)}else c[0]!="stop"&&c[0]!="close"||vr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?vr(n,7):Jh(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}Fi(4)}catch{}}function BA(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ou(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function VA(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ou(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function E_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ou(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=VA(t),r=BA(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var C_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ir(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ir){this.h=e!==void 0?e:t.h,_a(this,t.j),this.s=t.s,this.g=t.g,va(this,t.m),this.l=t.l,e=t.i;var n=new Ni;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Wp(this,n),this.o=t.o}else t&&(n=String(t).match(C_))?(this.h=!!e,_a(this,n[1]||"",!0),this.s=Xs(n[2]||""),this.g=Xs(n[3]||"",!0),va(this,n[4]),this.l=Xs(n[5]||"",!0),Wp(this,n[6]||"",!0),this.o=Xs(n[7]||"")):(this.h=!!e,this.i=new Ni(null,this.h))}Ir.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Js(e,Gp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Js(e,Gp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Js(n,n.charAt(0)=="/"?HA:qA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Js(n,WA)),t.join("")};function kn(t){return new Ir(t)}function _a(t,e,n){t.j=n?Xs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function va(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Wp(t,e,n){e instanceof Ni?(t.i=e,GA(t.i,t.h)):(n||(e=Js(e,KA)),t.i=new Ni(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function mu(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Js(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,zA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gp=/[#\/\?@]/g,qA=/[#\?:]/g,HA=/[#\?]/g,KA=/[#\?@]/g,WA=/#/g;function Ni(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ar(t){t.g||(t.g=new Map,t.h=0,t.i&&jA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=Ni.prototype;P.add=function(t,e){ar(this),this.i=null,t=Ms(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function I_(t,e){ar(t),e=Ms(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function T_(t,e){return ar(t),e=Ms(t,e),t.g.has(e)}P.forEach=function(t,e){ar(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};P.sa=function(){ar(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};P.Z=function(t){ar(this);let e=[];if(typeof t=="string")T_(this,t)&&(e=e.concat(this.g.get(Ms(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return ar(this),this.i=null,t=Ms(this,t),T_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function k_(t,e,n){I_(t,e),0<n.length&&(t.i=null,t.g.set(Ms(t,e),Ph(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ms(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function GA(t,e){e&&!t.j&&(ar(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(I_(this,r),k_(this,s,n))},t)),t.j=e}var QA=class{constructor(t,e){this.h=t,this.g=e}};function A_(t){this.l=t||YA,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ka&&Z.g.Ka()&&Z.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var YA=10;function S_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function x_(t){return t.h?1:t.g?t.g.size:0}function gl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Gh(t,e){t.g?t.g.add(e):t.h=e}function R_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}A_.prototype.cancel=function(){if(this.i=F_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function F_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ph(t.i)}function Qh(){}Qh.prototype.stringify=function(t){return Z.JSON.stringify(t,void 0)};Qh.prototype.parse=function(t){return Z.JSON.parse(t,void 0)};function XA(){this.g=new Qh}function JA(t,e,n){const r=n||"";try{E_(t,function(s,i){let o=s;eo(s)&&(o=jh(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function ZA(t,e){const n=new hu;if(Z.Image){const r=new Image;r.onload=Io(ko,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Io(ko,n,r,"TestLoadImage: error",!1,e),r.onabort=Io(ko,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Io(ko,n,r,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ko(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function oo(t){this.l=t.fc||null,this.j=t.ob||!1}Qe(oo,Hh);oo.prototype.g=function(){return new Du(this.l,this.j)};oo.prototype.i=function(t){return function(){return t}}({});function Du(t,e){Ge.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Yh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qe(Du,Ge);var Yh=0;P=Du.prototype;P.open=function(t,e){if(this.readyState!=Yh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Oi(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ao(this)),this.readyState=Yh};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Oi(this)),this.g&&(this.readyState=3,Oi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;N_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function N_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ao(this):Oi(this),this.readyState==3&&N_(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,ao(this))};P.Ya=function(t){this.g&&(this.response=t,ao(this))};P.ka=function(){this.g&&ao(this)};function ao(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Oi(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Oi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Du.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var eS=Z.JSON.parse;function Ne(t){Ge.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=O_,this.L=this.M=!1}Qe(Ne,Ge);var O_="",tS=/^https?$/i,nS=["POST","PUT"];P=Ne.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():hl.g(),this.C=this.u?Kp(this.u):Kp(hl),this.g.onreadystatechange=ot(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Qp(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Z.FormData&&t instanceof Z.FormData,!(0<=Qy(nS,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{L_(this),0<this.B&&((this.L=rS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ot(this.ua,this)):this.A=qh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Qp(this,i)}};function rS(t){return ws&&vA()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof Oh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ze(this,"timeout"),this.abort(8))};function Qp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,P_(t),yu(t)}function P_(t){t.F||(t.F=!0,Ze(t,"complete"),Ze(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ze(this,"complete"),Ze(this,"abort"),yu(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yu(this,!0)),Ne.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?M_(this):this.kb())};P.kb=function(){M_(this)};function M_(t){if(t.h&&typeof Oh<"u"&&(!t.C[1]||_n(t)!=4||t.da()!=2)){if(t.v&&_n(t)==4)qh(t.La,0,t);else if(Ze(t,"readystatechange"),_n(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.I).match(C_)[1]||null;if(!s&&Z.self&&Z.self.location){var i=Z.self.location.protocol;s=i.substr(0,i.length-1)}r=!tS.test(s?s.toLowerCase():"")}n=r}if(n)Ze(t,"complete"),Ze(t,"success");else{t.m=6;try{var o=2<_n(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",P_(t)}}finally{yu(t)}}}}function yu(t,e){if(t.g){L_(t);const n=t.g,r=t.C[0]?ga:null;t.g=null,t.C=null,e||Ze(t,"ready");try{n.onreadystatechange=r}catch{}}}function L_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}function _n(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),eS(e)}};function Yp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case O_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $_(t){let e="";return Lh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Xh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function Ks(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function U_(t){this.Ga=0,this.i=[],this.j=new hu,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ks("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ks("baseRetryDelayMs",5e3,t),this.hb=Ks("retryDelaySeedMs",1e4,t),this.eb=Ks("forwardChannelMaxRetries",2,t),this.xa=Ks("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new A_(t&&t.concurrentRequestLimit),this.Ja=new XA,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}P=U_.prototype;P.qa=8;P.H=1;function Jh(t){if(B_(t),t.H==3){var e=t.W++,n=kn(t.G);Se(n,"SID",t.J),Se(n,"RID",e),Se(n,"TYPE","terminate"),uo(t,n),e=new so(t,t.j,e,void 0),e.L=2,e.v=mu(kn(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon&&(n=Z.navigator.sendBeacon(e.v.toString(),"")),!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=G_(e.l,null),e.g.ha(e.v)),e.G=Date.now(),io(e)}K_(t)}function _u(t){t.g&&(ef(t),t.g.cancel(),t.g=null)}function B_(t){_u(t),t.u&&(Z.clearTimeout(t.u),t.u=null),wa(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function vu(t){S_(t.h)||t.m||(t.m=!0,u_(t.Na,t),t.C=0)}function sS(t,e){return x_(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=no(ot(t.Na,t,e),H_(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new so(this,this.j,t,void 0);let i=this.s;if(this.U&&(i?(i=e_(i),t_(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=V_(this,s,e),n=kn(this.G),Se(n,"RID",t),Se(n,"CVER",22),this.F&&Se(n,"X-HTTP-Session-Id",this.F),uo(this,n),i&&(this.O?e="headers="+encodeURIComponent(String($_(i)))+"&"+e:this.o&&Xh(n,this.o,i)),Gh(this.h,s),this.bb&&Se(n,"TYPE","init"),this.P?(Se(n,"$req",e),Se(n,"SID","null"),s.ba=!0,dl(s,n,null)):dl(s,n,e),this.H=2}}else this.H==3&&(t?Xp(this,t):this.i.length==0||S_(this.h)||Xp(this))};function Xp(t,e){var n;e?n=e.m:n=t.W++;const r=kn(t.G);Se(r,"SID",t.J),Se(r,"RID",n),Se(r,"AID",t.V),uo(t,r),t.o&&t.s&&Xh(r,t.o,t.s),n=new so(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=V_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Gh(t.h,n),dl(n,r,e)}function uo(t,e){t.ma&&Lh(t.ma,function(n,r){Se(e,r,n)}),t.l&&E_({},function(n,r){Se(e,r,n)})}function V_(t,e,n){n=Math.min(t.i.length,n);var r=t.l?ot(t.l.Va,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let c=s[u].h;const l=s[u].g;if(c-=i,0>c)i=Math.max(0,s[u].h-100),a=!1;else try{JA(l,o,"req"+c+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function j_(t){t.g||t.u||(t.ba=1,u_(t.Ma,t),t.A=0)}function Zh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=no(ot(t.Ma,t),H_(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,z_(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=no(ot(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,dt(10),_u(this),z_(this))};function ef(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function z_(t){t.g=new so(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=kn(t.wa);Se(e,"RID","rpc"),Se(e,"SID",t.J),Se(e,"CI",t.M?"0":"1"),Se(e,"AID",t.V),Se(e,"TYPE","xmlhttp"),uo(t,e),t.o&&t.s&&Xh(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=mu(kn(e)),n.s=null,n.S=!0,__(n,t)}P.ib=function(){this.v!=null&&(this.v=null,_u(this),Zh(this),dt(19))};function wa(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function q_(t,e){var n=null;if(t.g==e){wa(t),ef(t),t.g=null;var r=2}else if(gl(t.h,e))n=e.F,R_(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=fu(),Ze(r,new g_(r,n)),vu(t)}else j_(t);else if(s=e.o,s==3||s==0&&0<t.ta||!(r==1&&sS(t,e)||r==2&&Zh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:vr(t,5);break;case 4:vr(t,10);break;case 3:vr(t,6);break;default:vr(t,2)}}}function H_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function vr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=ot(t.pb,t);n||(n=new Ir("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||_a(n,"https"),mu(n)),ZA(n.toString(),r)}else dt(2);t.H=0,t.l&&t.l.za(e),K_(t),B_(t)}P.pb=function(t){t?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function K_(t){if(t.H=0,t.pa=[],t.l){const e=F_(t.h);(e.length!=0||t.i.length!=0)&&(Bp(t.pa,e),Bp(t.pa,t.i),t.h.i.length=0,Ph(t.i),t.i.length=0),t.l.ya()}}function W_(t,e,n){var r=n instanceof Ir?kn(n):new Ir(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),va(r,r.m);else{var s=Z.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Ir(null,void 0);r&&_a(i,r),e&&(i.g=e),s&&va(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Se(r,n,e),Se(r,"VER",t.qa),uo(t,r),r}function G_(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ne(new oo({ob:!0})):new Ne(t.va),e.Oa(t.I),e}function Q_(){}P=Q_.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.Va=function(){};function ba(){if(ws&&!(10<=Number(wA)))throw Error("Environmental error: no available transport.")}ba.prototype.g=function(t,e){return new St(t,e)};function St(t,e){Ge.call(this),this.g=new U_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ma(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ma(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ls(this)}Qe(St,Ge);St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;dt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=W_(t,null,t.Y),vu(t)};St.prototype.close=function(){Jh(this.g)};St.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=jh(t),t=n);e.i.push(new QA(e.fb++,t)),e.H==3&&vu(e)};St.prototype.N=function(){this.g.l=null,delete this.j,Jh(this.g),delete this.g,St.$.N.call(this)};function Y_(t){Kh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Qe(Y_,Kh);function X_(){Wh.call(this),this.status=1}Qe(X_,Wh);function Ls(t){this.g=t}Qe(Ls,Q_);Ls.prototype.Ba=function(){Ze(this.g,"a")};Ls.prototype.Aa=function(t){Ze(this.g,new Y_(t))};Ls.prototype.za=function(t){Ze(this.g,new X_)};Ls.prototype.ya=function(){Ze(this.g,"b")};function iS(){this.blockSize=-1}function Ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Qe(Ht,iS);Ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function vc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Ht.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)vc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){vc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){vc(this,r),s=0;break}}this.h=s,this.i+=e};Ht.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ve(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var oS={};function tf(t){return-128<=t&&128>t?Yy(oS,t,function(e){return new ve([e|0],0>e?-1:0)}):new ve([t|0],0>t?-1:0)}function tn(t){if(isNaN(t)||!isFinite(t))return cs;if(0>t)return Xe(tn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ml;return new ve(e,0)}function J_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Xe(J_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=tn(Math.pow(e,8)),r=cs,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=tn(Math.pow(e,i)),r=r.R(i).add(tn(o))):(r=r.R(n),r=r.add(tn(o)))}return r}var ml=4294967296,cs=tf(0),Dl=tf(1),Jp=tf(16777216);P=ve.prototype;P.ea=function(){if(Rt(this))return-Xe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ml+r)*e,e*=ml}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(vn(this))return"0";if(Rt(this))return"-"+Xe(this).toString(t);for(var e=tn(Math.pow(t,6)),n=this,r="";;){var s=Ca(n,e).g;n=Ea(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,vn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function vn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Rt(t){return t.h==-1}P.X=function(t){return t=Ea(this,t),Rt(t)?-1:vn(t)?0:1};function Xe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ve(n,~t.h).add(Dl)}P.abs=function(){return Rt(this)?Xe(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ve(n,n[n.length-1]&-2147483648?-1:0)};function Ea(t,e){return t.add(Xe(e))}P.R=function(t){if(vn(this)||vn(t))return cs;if(Rt(this))return Rt(t)?Xe(this).R(Xe(t)):Xe(Xe(this).R(t));if(Rt(t))return Xe(this.R(Xe(t)));if(0>this.X(Jp)&&0>t.X(Jp))return tn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,u=t.D(s)&65535;n[2*r+2*s]+=o*u,Ao(n,2*r+2*s),n[2*r+2*s+1]+=i*u,Ao(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Ao(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Ao(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ve(n,0)};function Ao(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ws(t,e){this.g=t,this.h=e}function Ca(t,e){if(vn(e))throw Error("division by zero");if(vn(t))return new Ws(cs,cs);if(Rt(t))return e=Ca(Xe(t),e),new Ws(Xe(e.g),Xe(e.h));if(Rt(e))return e=Ca(t,Xe(e)),new Ws(Xe(e.g),e.h);if(30<t.g.length){if(Rt(t)||Rt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Dl,r=e;0>=r.X(t);)n=Zp(n),r=Zp(r);var s=Yr(n,1),i=Yr(r,1);for(r=Yr(r,2),n=Yr(n,2);!vn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Yr(r,1),n=Yr(n,1)}return e=Ea(t,s.R(e)),new Ws(s,e)}for(s=cs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=tn(n),o=i.R(e);Rt(o)||0<o.X(t);)n-=r,i=tn(n),o=i.R(e);vn(i)&&(i=Dl),s=s.add(i),t=Ea(t,o)}return new Ws(s,t)}P.gb=function(t){return Ca(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ve(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ve(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ve(n,this.h^t.h)};function Zp(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ve(n,t.h)}function Yr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ve(s,t.h)}ba.prototype.createWebChannel=ba.prototype.g;St.prototype.send=St.prototype.u;St.prototype.open=St.prototype.m;St.prototype.close=St.prototype.close;du.NO_ERROR=0;du.TIMEOUT=8;du.HTTP_ERROR=6;m_.COMPLETE="complete";D_.EventType=ro;ro.OPEN="a";ro.CLOSE="b";ro.ERROR="c";ro.MESSAGE="d";Ge.prototype.listen=Ge.prototype.O;Ne.prototype.listenOnce=Ne.prototype.P;Ne.prototype.getLastError=Ne.prototype.Sa;Ne.prototype.getLastErrorCode=Ne.prototype.Ia;Ne.prototype.getStatus=Ne.prototype.da;Ne.prototype.getResponseJson=Ne.prototype.Wa;Ne.prototype.getResponseText=Ne.prototype.ja;Ne.prototype.send=Ne.prototype.ha;Ne.prototype.setWithCredentials=Ne.prototype.Oa;Ht.prototype.digest=Ht.prototype.l;Ht.prototype.reset=Ht.prototype.reset;Ht.prototype.update=Ht.prototype.j;ve.prototype.add=ve.prototype.add;ve.prototype.multiply=ve.prototype.R;ve.prototype.modulo=ve.prototype.gb;ve.prototype.compare=ve.prototype.X;ve.prototype.toNumber=ve.prototype.ea;ve.prototype.toString=ve.prototype.toString;ve.prototype.getBits=ve.prototype.D;ve.fromNumber=tn;ve.fromString=J_;var aS=function(){return new ba},uS=function(){return fu()},wc=du,cS=m_,lS=Br,eg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},hS=oo,So=D_,fS=Ne,dS=Ht,ls=ve;const tg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s="9.22.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new eu("@firebase/firestore");function ng(){return Fr.logLevel}function j(t,...e){if(Fr.logLevel<=fe.DEBUG){const n=e.map(nf);Fr.debug(`Firestore (${$s}): ${t}`,...n)}}function An(t,...e){if(Fr.logLevel<=fe.ERROR){const n=e.map(nf);Fr.error(`Firestore (${$s}): ${t}`,...n)}}function bs(t,...e){if(Fr.logLevel<=fe.WARN){const n=e.map(nf);Fr.warn(`Firestore (${$s}): ${t}`,...n)}}function nf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${$s}) INTERNAL ASSERTION FAILED: `+t;throw An(e),new Error(e)}function ke(t,e){t||J()}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Wt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class gS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mS{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new bn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string"),new Z_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new nt(e)}}class DS{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class yS{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new DS(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _S{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vS{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.T=n.token,new _S(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=wS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function Es(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new He(0,0))}static max(){return new te(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Pi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends Pi{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const bS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Pi{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return bS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new L(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new L(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Te.fromString(e))}static fromName(e){return new H(Te.fromString(e).popFirst(5))}static empty(){return new H(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Te(e.slice()))}}function ES(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new nr(s,H.empty(),e)}function CS(t){return new nr(t.readTime,t.key,-1)}class nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new nr(te.min(),H.empty(),-1)}static max(){return new nr(te.max(),H.empty(),-1)}}function IS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==TS)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(s=>s?A.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new A((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(l=>{o[c]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,n){return new A((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function lo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}rf.ct=-1;function wu(t){return t==null}function Ia(t){return t===0&&1/t==-1/0}function AS(t){return typeof t=="number"&&Number.isInteger(t)&&!Ia(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function tv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xo(this.root,e,this.comparator,!1)}getReverseIterator(){return new xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xo(this.root,e,this.comparator,!0)}}class xo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=s??Ye.EMPTY,this.right=i??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ye(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ye(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sg(this.data.getIterator())}getIteratorFrom(e){return new sg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class sg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Tt([])}unionWith(e){let n=new ut(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Es(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new nv("Invalid base64 string: "+s):s}}(e);return new ht(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const SS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rr(t){if(ke(!!t),typeof t=="string"){let e=0;const n=SS.exec(t);if(ke(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Nr(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function of(t){const e=t.mapValue.fields.__previous_value__;return sf(e)?of(e):e}function Mi(t){const e=rr(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n,r,s,i,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Li{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Li("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Li&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sf(t)?4:RS(t)?9007199254740991:10:J()}function ln(t,e){if(t===e)return!0;const n=Or(t);if(n!==Or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mi(t).isEqual(Mi(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=rr(r.timestampValue),o=rr(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Nr(r.bytesValue).isEqual(Nr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ve(r.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(r.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ve(r.integerValue)===Ve(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ve(r.doubleValue),o=Ve(s.doubleValue);return i===o?Ia(i)===Ia(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Es(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(rg(i)!==rg(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ln(i[a],o[a])))return!1;return!0}(t,e);default:return J()}}function $i(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function Cs(t,e){if(t===e)return 0;const n=Or(t),r=Or(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ve(s.integerValue||s.doubleValue),a=Ve(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ig(t.timestampValue,e.timestampValue);case 4:return ig(Mi(t),Mi(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Nr(s),a=Nr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=pe(o[u],a[u]);if(c!==0)return c}return pe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=pe(Ve(s.latitude),Ve(i.latitude));return o!==0?o:pe(Ve(s.longitude),Ve(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=Cs(o[u],a[u]);if(c)return c}return pe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Ro.mapValue&&i===Ro.mapValue)return 0;if(s===Ro.mapValue)return 1;if(i===Ro.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),u=i.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let l=0;l<a.length&&l<c.length;++l){const h=pe(a[l],c[l]);if(h!==0)return h;const f=Cs(o[a[l]],u[c[l]]);if(f!==0)return f}return pe(a.length,c.length)}(t.mapValue,e.mapValue);default:throw J()}}function ig(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=rr(t),r=rr(e),s=pe(n.seconds,r.seconds);return s!==0?s:pe(n.nanos,r.nanos)}function Is(t){return yl(t)}function yl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=rr(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Nr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=yl(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${yl(r.fields[a])}`;return i+"}"}(t.mapValue):J();var e,n}function og(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _l(t){return!!t&&"integerValue"in t}function af(t){return!!t&&"arrayValue"in t}function ag(t){return!!t&&"nullValue"in t}function ug(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qo(t){return!!t&&"mapValue"in t}function di(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=di(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=di(t.arrayValue.values[n]);return e}return Object.assign({},t)}function RS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=di(n)}setAll(e){let n=it.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=di(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());qo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];qo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Vr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Dt(di(this.value))}}function rv(t){const e=[];return Vr(t.fields,(n,r)=>{const s=new it([n]);if(qo(r)){const i=rv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Tt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new rt(e,0,te.min(),te.min(),te.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,s){return new rt(e,1,n,te.min(),r,s,0)}static newNoDocument(e,n){return new rt(e,2,n,te.min(),te.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,te.min(),te.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n){this.position=e,this.inclusive=n}}function cg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Cs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function lg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n="asc"){this.field=e,this.dir=n}}function FS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{}class ze extends sv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new OS(e,n,r):n==="array-contains"?new LS(e,r):n==="in"?new $S(e,r):n==="not-in"?new US(e,r):n==="array-contains-any"?new BS(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new PS(e,r):new MS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Cs(n,this.value)):n!==null&&Or(this.value)===Or(n)&&this.matchesComparison(Cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Kt extends sv{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Kt(e,n)}matches(e){return iv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function iv(t){return t.op==="and"}function ov(t){return NS(t)&&iv(t)}function NS(t){for(const e of t.filters)if(e instanceof Kt)return!1;return!0}function vl(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+Is(t.value);if(ov(t))return t.filters.map(e=>vl(e)).join(",");{const e=t.filters.map(n=>vl(n)).join(",");return`${t.op}(${e})`}}function av(t,e){return t instanceof ze?function(n,r){return r instanceof ze&&n.op===r.op&&n.field.isEqual(r.field)&&ln(n.value,r.value)}(t,e):t instanceof Kt?function(n,r){return r instanceof Kt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&av(i,r.filters[o]),!0):!1}(t,e):void J()}function uv(t){return t instanceof ze?function(e){return`${e.field.canonicalString()} ${e.op} ${Is(e.value)}`}(t):t instanceof Kt?function(e){return e.op.toString()+" {"+e.getFilters().map(uv).join(" ,")+"}"}(t):"Filter"}class OS extends ze{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class PS extends ze{constructor(e,n){super(e,"in",n),this.keys=cv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class MS extends ze{constructor(e,n){super(e,"not-in",n),this.keys=cv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class LS extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return af(n)&&$i(n.arrayValue,this.value)}}class $S extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$i(this.value.arrayValue,n)}}class US extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if($i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!$i(this.value.arrayValue,n)}}class BS extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!af(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$i(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function hg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new VS(t,e,n,r,s,i,o)}function uf(t){const e=re(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),wu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Is(r)).join(",")),e.dt=n}return e.dt}function cf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!FS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!av(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lg(t.startAt,e.startAt)&&lg(t.endAt,e.endAt)}function wl(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.wt=null,this._t=null,this.startAt,this.endAt}}function jS(t,e,n,r,s,i,o,a){return new Us(t,e,n,r,s,i,o,a)}function bu(t){return new Us(t)}function fg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function lf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Eu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function lv(t){return t.collectionGroup!==null}function fs(t){const e=re(t);if(e.wt===null){e.wt=[];const n=Eu(e),r=lf(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new hs(n)),e.wt.push(new hs(it.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new hs(it.keyField(),i))}}}return e.wt}function Sn(t){const e=re(t);if(!e._t)if(e.limitType==="F")e._t=hg(e.path,e.collectionGroup,fs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of fs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new hs(i.field,o))}const r=e.endAt?new Ta(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ta(e.startAt.position,e.startAt.inclusive):null;e._t=hg(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e._t}function bl(t,e){e.getFirstInequalityField(),Eu(t);const n=t.filters.concat([e]);return new Us(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ka(t,e,n){return new Us(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cu(t,e){return cf(Sn(t),Sn(e))&&t.limitType===e.limitType}function hv(t){return`${uf(Sn(t))}|lt:${t.limitType}`}function El(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>uv(r)).join(", ")}]`),wu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Is(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Is(r)).join(",")),`Target(${n})`}(Sn(t))}; limitType=${t.limitType})`}function Iu(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):H.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of fs(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=cg(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,fs(n),r)||n.endAt&&!function(s,i,o){const a=cg(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,fs(n),r))}(t,e)}function zS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fv(t){return(e,n)=>{let r=!1;for(const s of fs(t)){const i=qS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function qS(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),u=o.data.field(s);return a!==null&&u!==null?Cs(a,u):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bs=class{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return tv(this.inner)}size(){return this.innerSize}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=new xe(H.comparator);function xn(){return HS}const dv=new xe(H.comparator);function Zs(...t){let e=dv;for(const n of t)e=e.insert(n.key,n);return e}function pv(t){let e=dv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function wr(){return pi()}function gv(){return pi()}function pi(){return new Bs(t=>t.toString(),(t,e)=>t.isEqual(e))}const KS=new xe(H.comparator),WS=new ut(H.comparator);function oe(...t){let e=WS;for(const n of t)e=e.add(n);return e}const GS=new ut(pe);function QS(){return GS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ia(e)?"-0":e}}function Dv(t){return{integerValue:""+t}}function YS(t,e){return AS(e)?Dv(e):mv(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(){this._=void 0}}function XS(t,e,n){return t instanceof Aa?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&sf(s)&&(s=of(s)),s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Ui?_v(t,e):t instanceof Bi?vv(t,e):function(r,s){const i=yv(r,s),o=dg(i)+dg(r.gt);return _l(i)&&_l(r.gt)?Dv(o):mv(r.serializer,o)}(t,e)}function JS(t,e,n){return t instanceof Ui?_v(t,e):t instanceof Bi?vv(t,e):n}function yv(t,e){return t instanceof Sa?_l(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Aa extends Tu{}class Ui extends Tu{constructor(e){super(),this.elements=e}}function _v(t,e){const n=wv(e);for(const r of t.elements)n.some(s=>ln(s,r))||n.push(r);return{arrayValue:{values:n}}}class Bi extends Tu{constructor(e){super(),this.elements=e}}function vv(t,e){let n=wv(e);for(const r of t.elements)n=n.filter(s=>!ln(s,r));return{arrayValue:{values:n}}}class Sa extends Tu{constructor(e,n){super(),this.serializer=e,this.gt=n}}function dg(t){return Ve(t.integerValue||t.doubleValue)}function wv(t){return af(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ZS(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ui&&r instanceof Ui||n instanceof Bi&&r instanceof Bi?Es(n.elements,r.elements,ln):n instanceof Sa&&r instanceof Sa?ln(n.gt,r.gt):n instanceof Aa&&r instanceof Aa}(t.transform,e.transform)}class e2{constructor(e,n){this.version=e,this.transformResults=n}}class jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ho(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ku{}function bv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Cv(t.key,jt.none()):new ho(t.key,t.data,jt.none());{const n=t.data,r=Dt.empty();let s=new ut(it.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ur(t.key,r,new Tt(s.toArray()),jt.none())}}function t2(t,e,n){t instanceof ho?function(r,s,i){const o=r.value.clone(),a=gg(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ur?function(r,s,i){if(!Ho(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=gg(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Ev(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function gi(t,e,n,r){return t instanceof ho?function(s,i,o,a){if(!Ho(s.precondition,i))return o;const u=s.value.clone(),c=mg(s.fieldTransforms,a,i);return u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ur?function(s,i,o,a){if(!Ho(s.precondition,i))return o;const u=mg(s.fieldTransforms,a,i),c=i.data;return c.setAll(Ev(s)),c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(t,e,n,r):function(s,i,o){return Ho(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function n2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=yv(r.transform,s||null);i!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,i))}return n||null}function pg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Es(n,r,(s,i)=>ZS(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ho extends ku{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ur extends ku{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ev(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function gg(t,e,n){const r=new Map;ke(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,JS(o,a,n[s]))}return r}function mg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,XS(i,o,e))}return r}class Cv extends ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class r2 extends ku{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&t2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=gi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=gi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=bv(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&Es(this.mutations,e.mutations,(n,r)=>pg(n,r))&&Es(this.baseMutations,e.baseMutations,(n,r)=>pg(n,r))}}class hf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ke(e.mutations.length===r.length);let s=KS;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new hf(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,ce;function a2(t){switch(t){default:return J();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Iv(t){if(t===void 0)return An("GRPC error has no .code"),w.UNKNOWN;switch(t){case Be.OK:return w.OK;case Be.CANCELLED:return w.CANCELLED;case Be.UNKNOWN:return w.UNKNOWN;case Be.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Be.INTERNAL:return w.INTERNAL;case Be.UNAVAILABLE:return w.UNAVAILABLE;case Be.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Be.NOT_FOUND:return w.NOT_FOUND;case Be.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Be.ABORTED:return w.ABORTED;case Be.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Be.DATA_LOSS:return w.DATA_LOSS;default:return J()}}(ce=Be||(Be={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Fo}static getOrCreateInstance(){return Fo===null&&(Fo=new ff),Fo}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Fo=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2=new ls([4294967295,4294967295],0);function Dg(t){const e=u2().encode(t),n=new dS;return n.update(e),new Uint8Array(n.digest())}function yg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ls([n,r],0),new ls([s,i],0)]}class df{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ei(`Invalid padding: ${n}`);if(r<0)throw new ei(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ei(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ei(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=ls.fromNumber(this.It)}Et(e,n,r){let s=e.add(n.multiply(ls.fromNumber(r)));return s.compare(c2)===1&&(s=new ls([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Dg(e),[r,s]=yg(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(r,s,i);if(!this.At(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new df(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Dg(e),[r,s]=yg(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(r,s,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ei extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,fo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Au(te.min(),s,new xe(pe),xn(),oe())}}class fo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fo(r,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n,r,s){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=s}}class Tv{constructor(e,n){this.targetId=e,this.Vt=n}}class kv{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class _g{constructor(){this.St=0,this.Dt=wg(),this.Ct=ht.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=oe(),n=oe(),r=oe();return this.Dt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:J()}}),new fo(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=wg()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class l2{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=xn(),this.zt=vg(),this.Wt=new xe(pe)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,s)=>{this.te(s)&&n(s)})}ne(e){var n;const r=e.targetId,s=e.Vt.count,i=this.se(r);if(i){const o=i.target;if(wl(o))if(s===0){const a=new H(o.path);this.Yt(r,a,rt.newNoDocument(a,te.min()))}else ke(s===1);else{const a=this.ie(r);if(a!==s){const u=this.re(e,a);if(u!==0){this.ee(r);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,c)}(n=ff.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(c,l,h){var f,d,D,y,_,k;const C={localCacheCount:l,existenceFilterCount:h.count},O=h.unchangedNames;return O&&(C.bloomFilter={applied:c===0,hashCount:(f=O==null?void 0:O.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(y=(D=(d=O==null?void 0:O.bits)===null||d===void 0?void 0:d.bitmap)===null||D===void 0?void 0:D.length)!==null&&y!==void 0?y:0,padding:(k=(_=O==null?void 0:O.bits)===null||_===void 0?void 0:_.padding)!==null&&k!==void 0?k:0}),C}(u,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:s}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let u,c;try{u=Nr(i).toUint8Array()}catch(l){if(l instanceof nv)return bs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{c=new df(u,o,a)}catch(l){return bs(l instanceof ei?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return c.It===0?1:s!==n-this.oe(e.targetId,c)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),s++)}),s}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&wl(a.target)){const u=new H(a.target.path);this.jt.get(u)!==null||this.ae(o,u)||this.Yt(o,u,rt.newNoDocument(u,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let r=oe();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.se(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const s=new Au(e,n,this.Wt,this.jt,r);return this.jt=xn(),this.zt=vg(),this.Wt=new xe(pe),s}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,n)?s.Bt(n,1):s.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new _g,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new ut(pe),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new _g),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function vg(){return new xe(H.comparator)}function wg(){return new xe(H.comparator)}const h2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),f2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),d2=(()=>({and:"AND",or:"OR"}))();class p2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cl(t,e){return t.useProto3Json||wu(e)?e:{value:e}}function xa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Av(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function g2(t,e){return xa(t,e.toTimestamp())}function on(t){return ke(!!t),te.fromTimestamp(function(e){const n=rr(e);return new He(n.seconds,n.nanos)}(t))}function pf(t,e){return function(n){return new Te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Sv(t){const e=Te.fromString(t);return ke(Nv(e)),e}function Il(t,e){return pf(t.databaseId,e.path)}function bc(t,e){const n=Sv(e);if(n.get(1)!==t.databaseId.projectId)throw new L(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(xv(n))}function Tl(t,e){return pf(t.databaseId,e)}function m2(t){const e=Sv(t);return e.length===4?Te.emptyPath():xv(e)}function kl(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xv(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function bg(t,e,n){return{name:Il(t,e),fields:n.value.mapValue.fields}}function D2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,c){return u.useProto3Json?(ke(c===void 0||typeof c=="string"),ht.fromBase64String(c||"")):(ke(c===void 0||c instanceof Uint8Array),ht.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?w.UNKNOWN:Iv(u.code);return new L(c,u.message||"")}(o);n=new kv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=bc(t,r.document.name),i=on(r.document.updateTime),o=r.document.createTime?on(r.document.createTime):te.min(),a=new Dt({mapValue:{fields:r.document.fields}}),u=rt.newFoundDocument(s,i,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Ko(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=bc(t,r.document),i=r.readTime?on(r.readTime):te.min(),o=rt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ko([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=bc(t,r.document),i=r.removedTargetIds||[];n=new Ko([],i,s,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new o2(s,i),a=r.targetId;n=new Tv(a,o)}}return n}function y2(t,e){let n;if(e instanceof ho)n={update:bg(t,e.key,e.value)};else if(e instanceof Cv)n={delete:Il(t,e.key)};else if(e instanceof ur)n={update:bg(t,e.key,e.data),updateMask:k2(e.fieldMask)};else{if(!(e instanceof r2))return J();n={verify:Il(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Aa)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ui)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Bi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Sa)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:g2(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function _2(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?on(r.updateTime):on(s);return i.isEqual(te.min())&&(i=on(s)),new e2(i,r.transformResults||[])}(n,e))):[]}function v2(t,e){return{documents:[Tl(t,e.path)]}}function w2(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Tl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Tl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(u){if(u.length!==0)return Fv(Kt.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(u){if(u.length!==0)return u.map(c=>function(l){return{field:es(l.field),direction:C2(l.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Cl(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function b2(t){let e=m2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ke(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=Rv(l);return h instanceof Kt&&ov(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new hs(ts(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,wu(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(l){const h=!!l.before,f=l.values||[];return new Ta(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(l){const h=!l.before,f=l.values||[];return new Ta(f,h)}(n.endAt)),jS(e,s,o,i,a,"F",u,c)}function E2(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Rv(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ts(e.unaryFilter.field);return ze.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ts(e.unaryFilter.field);return ze.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ts(e.unaryFilter.field);return ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ts(e.unaryFilter.field);return ze.create(i,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(e){return ze.create(ts(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Kt.create(e.compositeFilter.filters.map(n=>Rv(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return J()}}(e.compositeFilter.op))}(t):J()}function C2(t){return h2[t]}function I2(t){return f2[t]}function T2(t){return d2[t]}function es(t){return{fieldPath:t.canonicalString()}}function ts(t){return it.fromServerFormat(t.fieldPath)}function Fv(t){return t instanceof ze?function(e){if(e.op==="=="){if(ug(e.value))return{unaryFilter:{field:es(e.field),op:"IS_NAN"}};if(ag(e.value))return{unaryFilter:{field:es(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ug(e.value))return{unaryFilter:{field:es(e.field),op:"IS_NOT_NAN"}};if(ag(e.value))return{unaryFilter:{field:es(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:es(e.field),op:I2(e.op),value:e.value}}}(t):t instanceof Kt?function(e){const n=e.getFilters().map(r=>Fv(r));return n.length===1?n[0]:{compositeFilter:{op:T2(e.op),filters:n}}}(t):J()}function k2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Nv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,r,s,i=te.min(),o=te.min(),a=ht.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e){this.fe=e}}function S2(t){const e=b2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ka(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(){this.rn=new R2}addToCollectionParentIndex(e,n){return this.rn.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(nr.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class R2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(Te.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Ts(0)}static Mn(){return new Ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(){this.changes=new Bs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&gi(r.mutation,s,Tt.empty(),He.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const s=wr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Zs();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=xn();const o=pi(),a=pi();return n.forEach((u,c)=>{const l=r.get(c.key);s.has(c.key)&&(l===void 0||l.mutation instanceof ur)?i=i.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),gi(l.mutation,c,l.mutation.getFieldMask(),He.now())):o.set(c.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,l)=>o.set(c,l)),n.forEach((c,l)=>{var h;return a.set(c,new N2(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=pi();let s=new xe((o,a)=>o-a),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let l=r.get(u)||Tt.empty();l=a.applyToLocalView(c,l),r.set(u,l);const h=(s.get(a.batchId)||oe()).add(u);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=gv();l.forEach(f=>{if(!i.has(f)){const d=bv(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return H.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):lv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):A.resolve(wr());let a=-1,u=i;return o.next(c=>A.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?A.resolve():this.remoteDocumentCache.getEntry(e,l).next(f=>{u=u.insert(l,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,oe())).next(l=>({batchId:a,changes:pv(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let s=Zs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Zs();return this.indexManager.getCollectionParents(e,s).next(o=>A.forEach(o,a=>{const u=function(c,l){return new Us(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(c=>{c.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(i=>{s.forEach((a,u)=>{const c=u.getKey();i.get(c)===null&&(i=i.insert(c,rt.newInvalidDocument(c)))});let o=Zs();return i.forEach((a,u)=>{const c=s.get(a);c!==void 0&&gi(c.mutation,u,Tt.empty(),He.now()),Iu(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return A.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:on(r.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:S2(r.bundledQuery),readTime:on(r.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(){this.overlays=new xe(H.comparator),this.ls=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=wr();return A.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.we(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.ls.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const s=wr(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return A.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new xe((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let l=i.get(c.largestBatchId);l===null&&(l=wr(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=wr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=s)););return A.resolve(a)}we(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.ls.get(s.largestBatchId).delete(r.key);this.ls.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new i2(n,r));let i=this.ls.get(n);i===void 0&&(i=oe(),this.ls.set(n,i)),this.ls.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(){this.fs=new ut(Ke.ds),this.ws=new ut(Ke._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Ke(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new H(new Te([])),r=new Ke(n,e),s=new Ke(n,e+1),i=[];return this.ws.forEachInRange([r,s],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new H(new Te([])),r=new Ke(n,e),s=new Ke(n,e+1);let i=oe();return this.ws.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ke(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return H.comparator(e.key,n.key)||pe(e.As,n.As)}static _s(e,n){return pe(e.As,n.As)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new ut(Ke.ds)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new s2(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new Ke(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.bs(r),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),s=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([r,s],o=>{const a=this.Ps(o.As);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(pe);return n.forEach(s=>{const i=new Ke(s,0),o=new Ke(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{r=r.add(a.As)})}),A.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new Ke(new H(i),0);let a=new ut(pe);return this.Rs.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.As)),!0)},o),A.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const s=this.Ps(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ke(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return A.forEach(n.mutations,s=>{const i=new Ke(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Ke(n,0),s=this.Rs.firstAfterOrEqual(r);return A.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e){this.Ds=e,this.docs=new xe(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=xn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():rt.newInvalidDocument(s))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=xn();const o=n.path,a=new H(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||IS(CS(l),r)<=0||(s.has(l.key)||Iu(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,r,s){J()}Cs(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new U2(this)}getSize(e){return A.resolve(this.size)}}class U2 extends F2{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.os.addEntry(e,s)):this.os.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e){this.persistence=e,this.xs=new Bs(n=>uf(n),cf),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Ns=0,this.ks=new gf,this.targetCount=0,this.Ms=Ts.kn()}forEachTarget(e,n){return this.xs.forEach((r,s)=>n(s)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),A.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Ts(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Fn(n),A.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),A.waitFor(i).next(()=>s)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e,n){this.$s={},this.overlays={},this.Os=new rf(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new B2(this),this.indexManager=new x2,this.remoteDocumentCache=function(r){return new $2(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new A2(n),this.qs=new P2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new M2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new L2(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const s=new j2(this.Os.next());return this.referenceDelegate.Us(),r(s).next(i=>this.referenceDelegate.Ks(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gs(e,n){return A.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class j2 extends kS{constructor(e){super(),this.currentSequenceNumber=e}}class mf{constructor(e){this.persistence=e,this.Qs=new gf,this.js=null}static zs(e){return new mf(e)}get Ws(){if(this.js)return this.js;throw J()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),A.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(s=>this.Ws.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ws.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Ws,r=>{const s=H.fromPath(r);return this.Hs(e,s).next(i=>{i||n.removeEntry(s,te.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return A.or([()=>A.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=s}static Li(e,n){let r=oe(),s=oe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Df(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ki(e,n).next(i=>i||this.Gi(e,n,s,r)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(fg(n))return A.resolve(null);let r=Sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ka(n,null,"F"),r=Sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=oe(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ji(n,a);return this.zi(n,c,o,u.readTime)?this.Ki(e,ka(n,null,"F")):this.Wi(e,c,n,u)}))})))}Gi(e,n,r,s){return fg(n)||s.isEqual(te.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(i=>{const o=this.ji(n,i);return this.zi(n,o,r,s)?this.Qi(e,n):(ng()<=fe.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),El(n)),this.Wi(e,o,n,ES(s,-1)))})}ji(e,n){let r=new ut(fv(e));return n.forEach((s,i)=>{Iu(e,i)&&(r=r.add(i))}),r}zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Qi(e,n){return ng()<=fe.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",El(n)),this.Ui.getDocumentsMatchingQuery(e,n,nr.min())}Wi(e,n,r,s){return this.Ui.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e,n,r,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new xe(pe),this.Yi=new Bs(i=>uf(i),cf),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new O2(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function H2(t,e,n,r){return new q2(t,e,n,r)}async function Ov(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=oe();for(const c of s){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return n.localDocuments.getDocuments(r,u).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function K2(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const l=u.batch,h=l.keys();let f=A.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(D=>{const y=u.docVersions.get(d);ke(y!==null),D.version.compareTo(y)<0&&(l.applyToRemoteDocument(D,u),D.isValidDocument()&&(D.setReadTime(u.commitVersion),c.addEntry(D)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=oe();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Pv(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function W2(t,e){const n=re(t),r=e.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const f=s.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,l.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(ht.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,r)),s=s.insert(h,d),function(D,y,_){return D.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(f,d,l)&&a.push(n.Bs.updateTargetData(i,d))});let u=xn(),c=oe();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(G2(i,o,e.documentUpdates).next(l=>{u=l.nr,c=l.sr})),!r.isEqual(te.min())){const l=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.Ji=s,i))}function G2(t,e,n){let r=oe(),s=oe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=xn();return n.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{nr:o,sr:s}})}function Q2(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Y2(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Bs.getTargetData(r,e).next(i=>i?(s=i,A.resolve(s)):n.Bs.allocateTargetId(r).next(o=>(s=new Hn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Al(t,e,n){const r=re(t),s=r.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!lo(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(s.target)}function Eg(t,e,n){const r=re(t);let s=te.min(),i=oe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const l=re(a),h=l.Yi.get(c);return h!==void 0?A.resolve(l.Ji.get(h)):l.Bs.getTargetData(u,c)}(r,o,Sn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?s:te.min(),n?i:oe())).next(a=>(X2(r,zS(e),a),{documents:a,ir:i})))}function X2(t,e,n){let r=t.Xi.get(e)||te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Xi.set(e,r)}class Cg{constructor(){this.activeTargetIds=QS()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class J2{constructor(){this.Hr=new Cg,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Cg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No=null;function Ec(){return No===null?No=268435456+Math.round(2147483648*Math.random()):No++,"0x"+No.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e8={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t8{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="WebChannelConnection";class n8 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,s,i){const o=Ec(),a=this.To(e,n);j("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const u={};return this.Eo(u,s,i),this.Ao(e,a,u,r).then(c=>(j("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw bs("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",r),c})}vo(e,n,r,s,i,o){return this.Io(e,n,r,s,i)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+$s,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}To(e,n){const r=e8[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,s){const i=Ec();return new Promise((o,a)=>{const u=new fS;u.setWithCredentials(!0),u.listenOnce(cS.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case wc.NO_ERROR:const l=u.getResponseJson();j(tt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case wc.TIMEOUT:j(tt,`RPC '${e}' ${i} timed out`),a(new L(w.DEADLINE_EXCEEDED,"Request time out"));break;case wc.HTTP_ERROR:const h=u.getStatus();if(j(tt,`RPC '${e}' ${i} failed with status:`,h,"response text:",u.getResponseText()),h>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const D=function(y){const _=y.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(_)>=0?_:w.UNKNOWN}(d.status);a(new L(D,d.message))}else a(new L(w.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new L(w.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{j(tt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);j(tt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",c,r,15)})}Ro(e,n,r){const s=Ec(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=aS(),a=uS(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new hS({})),this.Eo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const l=i.join("");j(tt,`Creating RPC '${e}' stream ${s}: ${l}`,u);const h=o.createWebChannel(l,u);let f=!1,d=!1;const D=new t8({ro:_=>{d?j(tt,`Not sending because RPC '${e}' stream ${s} is closed:`,_):(f||(j(tt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),j(tt,`RPC '${e}' stream ${s} sending:`,_),h.send(_))},oo:()=>h.close()}),y=(_,k,C)=>{_.listen(k,O=>{try{C(O)}catch(N){setTimeout(()=>{throw N},0)}})};return y(h,So.EventType.OPEN,()=>{d||j(tt,`RPC '${e}' stream ${s} transport opened.`)}),y(h,So.EventType.CLOSE,()=>{d||(d=!0,j(tt,`RPC '${e}' stream ${s} transport closed`),D.wo())}),y(h,So.EventType.ERROR,_=>{d||(d=!0,bs(tt,`RPC '${e}' stream ${s} transport errored:`,_),D.wo(new L(w.UNAVAILABLE,"The operation could not be completed")))}),y(h,So.EventType.MESSAGE,_=>{var k;if(!d){const C=_.data[0];ke(!!C);const O=C,N=O.error||((k=O[0])===null||k===void 0?void 0:k.error);if(N){j(tt,`RPC '${e}' stream ${s} received error:`,N);const Q=N.status;let U=function(x){const Y=Be[x];if(Y!==void 0)return Iv(Y)}(Q),z=N.message;U===void 0&&(U=w.INTERNAL,z="Unknown error status: "+Q+" with message "+N.message),d=!0,D.wo(new L(U,z)),h.close()}else j(tt,`RPC '${e}' stream ${s} received:`,C),D._o(C)}}),y(a,lS.STAT_EVENT,_=>{_.stat===eg.PROXY?j(tt,`RPC '${e}' stream ${s} detected buffering proxy`):_.stat===eg.NOPROXY&&j(tt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.fo()},0),D}}function Cc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t){return new p2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=s,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e,n,r,s,i,o,a,u){this.ii=e,this.$o=r,this.Oo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Mv(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Fo===n&&this.Zo(r,s)},r=>{e(()=>{const s=new L(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(s)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{r(()=>this.tu(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class r8 extends Lv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=D2(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?te.min():i.readTime?on(i.readTime):te.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=kl(this.serializer),n.addTarget=function(s,i){let o;const a=i.target;if(o=wl(a)?{documents:v2(s,a)}:{query:w2(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Av(s,i.resumeToken);const u=Cl(s,i.expectedCount);u!==null&&(o.expectedCount=u)}else if(i.snapshotVersion.compareTo(te.min())>0){o.readTime=xa(s,i.snapshotVersion.toTimestamp());const u=Cl(s,i.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,e);const r=E2(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=kl(this.serializer),n.removeTarget=e,this.Wo(n)}}class s8 extends Lv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=_2(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.cu(r,n)}return ke(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=kl(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>y2(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i8 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new L(w.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Io(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(w.UNKNOWN,s.toString())})}vo(e,n,r,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(w.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class o8{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(An(n),this.mu=!1):j("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a8{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{jr(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=re(a);u.vu.add(4),await po(u),u.bu.set("Unknown"),u.vu.delete(4),await xu(u)}(this))})}),this.bu=new o8(r,s)}}async function xu(t){if(jr(t))for(const e of t.Ru)await e(!0)}async function po(t){for(const e of t.Ru)await e(!1)}function $v(t,e){const n=re(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),vf(n)?_f(n):Vs(n).Ko()&&yf(n,e))}function Uv(t,e){const n=re(t),r=Vs(n);n.Au.delete(e),r.Ko()&&Bv(n,e),n.Au.size===0&&(r.Ko()?r.jo():jr(n)&&n.bu.set("Unknown"))}function yf(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vs(t).su(e)}function Bv(t,e){t.Vu.qt(e),Vs(t).iu(e)}function _f(t){t.Vu=new l2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Vs(t).start(),t.bu.gu()}function vf(t){return jr(t)&&!Vs(t).Uo()&&t.Au.size>0}function jr(t){return re(t).vu.size===0}function Vv(t){t.Vu=void 0}async function u8(t){t.Au.forEach((e,n)=>{yf(t,e)})}async function c8(t,e){Vv(t),vf(t)?(t.bu.Iu(e),_f(t)):t.bu.set("Unknown")}async function l8(t,e,n){if(t.bu.set("Online"),e instanceof kv&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ra(t,r)}else if(e instanceof Ko?t.Vu.Ht(e):e instanceof Tv?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(te.min()))try{const r=await Pv(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Vu.ce(i);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.Au.get(u);c&&s.Au.set(u,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,u)=>{const c=s.Au.get(a);if(!c)return;s.Au.set(a,c.withResumeToken(ht.EMPTY_BYTE_STRING,c.snapshotVersion)),Bv(s,a);const l=new Hn(c.target,a,u,c.sequenceNumber);yf(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await Ra(t,r)}}async function Ra(t,e,n){if(!lo(e))throw e;t.vu.add(1),await po(t),t.bu.set("Offline"),n||(n=()=>Pv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await xu(t)})}function jv(t,e){return e().catch(n=>Ra(t,n,e))}async function Ru(t){const e=re(t),n=sr(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;h8(e);)try{const s=await Q2(e.localStore,r);if(s===null){e.Eu.length===0&&n.jo();break}r=s.batchId,f8(e,s)}catch(s){await Ra(e,s)}zv(e)&&qv(e)}function h8(t){return jr(t)&&t.Eu.length<10}function f8(t,e){t.Eu.push(e);const n=sr(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function zv(t){return jr(t)&&!sr(t).Uo()&&t.Eu.length>0}function qv(t){sr(t).start()}async function d8(t){sr(t).hu()}async function p8(t){const e=sr(t);for(const n of t.Eu)e.uu(n.mutations)}async function g8(t,e,n){const r=t.Eu.shift(),s=hf.from(r,e,n);await jv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ru(t)}async function m8(t,e){e&&sr(t).ou&&await async function(n,r){if(s=r.code,a2(s)&&s!==w.ABORTED){const i=n.Eu.shift();sr(n).Qo(),await jv(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Ru(n)}var s}(t,e),zv(t)&&qv(t)}async function Tg(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=jr(n);n.vu.add(3),await po(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await xu(n)}async function D8(t,e){const n=re(t);e?(n.vu.delete(2),await xu(n)):e||(n.vu.add(2),await po(n),n.bu.set("Unknown"))}function Vs(t){return t.Su||(t.Su=function(e,n,r){const s=re(e);return s.fu(),new r8(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{uo:u8.bind(null,t),ao:c8.bind(null,t),nu:l8.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),vf(t)?_f(t):t.bu.set("Unknown")):(await t.Su.stop(),Vv(t))})),t.Su}function sr(t){return t.Du||(t.Du=function(e,n,r){const s=re(e);return s.fu(),new s8(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{uo:d8.bind(null,t),ao:m8.bind(null,t),au:p8.bind(null,t),cu:g8.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Ru(t)):(await t.Du.stop(),t.Eu.length>0&&(j("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new wf(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bf(t,e){if(An("AsyncQueue",`${e}: ${t}`),lo(t))return new L(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Zs(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ds;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.Cu=new xe(H.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):J():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ks{constructor(e,n,r,s,i,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ks(e,n,ds.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y8{constructor(){this.Nu=void 0,this.listeners=[]}}class _8{constructor(){this.queries=new Bs(e=>hv(e),Cu),this.onlineState="Unknown",this.ku=new Set}}async function Ef(t,e){const n=re(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new y8),s)try{i.Nu=await n.onListen(r)}catch(o){const a=bf(o,`Initialization of query '${El(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&If(n)}async function Cf(t,e){const n=re(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function v8(t,e){const n=re(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(s)&&(r=!0);o.Nu=s}}r&&If(n)}function w8(t,e,n){const r=re(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function If(t){t.ku.forEach(e=>{e.next()})}class Tf{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.key=e}}class Kv{constructor(e){this.key=e}}class b8{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=oe(),this.mutatedKeys=oe(),this.tc=fv(e),this.ec=new ds(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new kg,s=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const f=s.get(l),d=Iu(this.query,h)?h:null,D=!!f&&this.mutatedKeys.has(f.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let _=!1;f&&d?f.data.isEqual(d.data)?D!==y&&(r.track({type:3,doc:d}),_=!0):this.rc(f,d)||(r.track({type:2,doc:d}),_=!0,(u&&this.tc(d,u)>0||c&&this.tc(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),_=!0):f&&!d&&(r.track({type:1,doc:f}),_=!0,(u||c)&&(a=!0)),_&&(d?(o=o.add(d),i=y?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{ec:o,ic:r,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((c,l)=>function(h,f){const d=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return d(h)-d(f)}(c.type,l.type)||this.tc(c.doc,l.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,u=a!==this.Xu;return this.Xu=a,i.length!==0||u?{snapshot:new ks(this.query,e.ec,s,i,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new kg,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=oe(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new Kv(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new Hv(r))}),n}hc(e){this.Yu=e.ir,this.Zu=oe();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return ks.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class E8{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class C8{constructor(e){this.key=e,this.fc=!1}}class I8{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Bs(a=>hv(a),Cu),this._c=new Map,this.mc=new Set,this.gc=new xe(H.comparator),this.yc=new Map,this.Ic=new gf,this.Tc={},this.Ec=new Map,this.Ac=Ts.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function T8(t,e){const n=M8(t);let r,s;const i=n.wc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.lc();else{const o=await Y2(n.localStore,Sn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await k8(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&$v(n.remoteStore,o)}return s}async function k8(t,e,n,r,s){t.Rc=(h,f,d)=>async function(D,y,_,k){let C=y.view.sc(_);C.zi&&(C=await Eg(D.localStore,y.query,!1).then(({documents:Q})=>y.view.sc(Q,C)));const O=k&&k.targetChanges.get(y.targetId),N=y.view.applyChanges(C,D.isPrimaryClient,O);return Sg(D,y.targetId,N.cc),N.snapshot}(t,h,f,d);const i=await Eg(t.localStore,e,!0),o=new b8(e,i.ir),a=o.sc(i.documents),u=fo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,u);Sg(t,n,c.cc);const l=new E8(e,n,o);return t.wc.set(e,l),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),c.snapshot}async function A8(t,e){const n=re(t),r=n.wc.get(e),s=n._c.get(r.targetId);if(s.length>1)return n._c.set(r.targetId,s.filter(i=>!Cu(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Al(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Uv(n.remoteStore,r.targetId),Sl(n,r.targetId)}).catch(co)):(Sl(n,r.targetId),await Al(n.localStore,r.targetId,!0))}async function S8(t,e,n){const r=L8(t);try{const s=await function(i,o){const a=re(i),u=He.now(),c=o.reduce((f,d)=>f.add(d.key),oe());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=xn(),D=oe();return a.Zi.getEntries(f,c).next(y=>{d=y,d.forEach((_,k)=>{k.isValidDocument()||(D=D.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(y=>{l=y;const _=[];for(const k of o){const C=n2(k,l.get(k.key).overlayedDocument);C!=null&&_.push(new ur(k.key,C,rv(C.value.mapValue),jt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,u,_,o)}).next(y=>{h=y;const _=y.applyToLocalDocumentSet(l,D);return a.documentOverlayCache.saveOverlays(f,y.batchId,_)})}).then(()=>({batchId:h.batchId,changes:pv(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let u=i.Tc[i.currentUser.toKey()];u||(u=new xe(pe)),u=u.insert(o,a),i.Tc[i.currentUser.toKey()]=u}(r,s.batchId,n),await go(r,s.changes),await Ru(r.remoteStore)}catch(s){const i=bf(s,"Failed to persist write");n.reject(i)}}async function Wv(t,e){const n=re(t);try{const r=await W2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.yc.get(i);o&&(ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.fc=!0:s.modifiedDocuments.size>0?ke(o.fc):s.removedDocuments.size>0&&(ke(o.fc),o.fc=!1))}),await go(n,r,e)}catch(r){await co(r)}}function Ag(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=re(i);a.onlineState=o;let u=!1;a.queries.forEach((c,l)=>{for(const h of l.listeners)h.Mu(o)&&(u=!0)}),u&&If(a)}(r.eventManager,e),s.length&&r.dc.nu(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function x8(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.yc.get(e),i=s&&s.key;if(i){let o=new xe(H.comparator);o=o.insert(i,rt.newNoDocument(i,te.min()));const a=oe().add(i),u=new Au(te.min(),new Map,new xe(pe),o,a);await Wv(r,u),r.gc=r.gc.remove(i),r.yc.delete(e),kf(r)}else await Al(r.localStore,e,!1).then(()=>Sl(r,e,n)).catch(co)}async function R8(t,e){const n=re(t),r=e.batch.batchId;try{const s=await K2(n.localStore,e);Qv(n,r,null),Gv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await go(n,s)}catch(s){await co(s)}}async function F8(t,e,n){const r=re(t);try{const s=await function(i,o){const a=re(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(l=>(ke(l!==null),c=l.keys(),a.mutationQueue.removeMutationBatch(u,l))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(r.localStore,e);Qv(r,e,n),Gv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await go(r,s)}catch(s){await co(s)}}function Gv(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function Qv(t,e,n){const r=re(t);let s=r.Tc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Tc[r.currentUser.toKey()]=s}}function Sl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||Yv(t,r)})}function Yv(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Uv(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),kf(t))}function Sg(t,e,n){for(const r of n)r instanceof Hv?(t.Ic.addReference(r.key,e),N8(t,r)):r instanceof Kv?(j("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||Yv(t,r.key)):J()}function N8(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(j("SyncEngine","New document in limbo: "+n),t.mc.add(r),kf(t))}function kf(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new H(Te.fromString(e)),r=t.Ac.next();t.yc.set(r,new C8(n)),t.gc=t.gc.insert(n,r),$v(t.remoteStore,new Hn(Sn(bu(n.path)),r,"TargetPurposeLimboResolution",rf.ct))}}async function go(t,e,n){const r=re(t),s=[],i=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,u)=>{o.push(r.Rc(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const l=Df.Li(u.targetId,c);i.push(l)}}))}),await Promise.all(o),r.dc.nu(s),await async function(a,u){const c=re(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>A.forEach(u,h=>A.forEach(h.Fi,f=>c.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>A.forEach(h.Bi,f=>c.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!lo(l))throw l;j("LocalStore","Failed to update sequence numbers: "+l)}for(const l of u){const h=l.targetId;if(!l.fromCache){const f=c.Ji.get(h),d=f.snapshotVersion,D=f.withLastLimboFreeSnapshotVersion(d);c.Ji=c.Ji.insert(h,D)}}}(r.localStore,i))}async function O8(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await Ov(n.localStore,e);n.currentUser=e,function(s,i){s.Ec.forEach(o=>{o.forEach(a=>{a.reject(new L(w.CANCELLED,i))})}),s.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await go(n,r.er)}}function P8(t,e){const n=re(t),r=n.yc.get(e);if(r&&r.fc)return oe().add(r.key);{let s=oe();const i=n._c.get(e);if(!i)return s;for(const o of i){const a=n.wc.get(o);s=s.unionWith(a.view.nc)}return s}}function M8(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=P8.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=x8.bind(null,e),e.dc.nu=v8.bind(null,e.eventManager),e.dc.Pc=w8.bind(null,e.eventManager),e}function L8(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=R8.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=F8.bind(null,e),e}class xg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Su(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return H2(this.persistence,new z2,e.initialUser,this.serializer)}createPersistence(e){return new V2(mf.zs,this.serializer)}createSharedClientState(e){return new J2}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $8{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ag(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=O8.bind(null,this.syncEngine),await D8(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new _8}createDatastore(e){const n=Su(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new n8(s));var s;return function(i,o,a,u){return new i8(i,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Ag(this.syncEngine,a,0),o=Ig.D()?new Ig:new Z2,new a8(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,u,c){const l=new I8(r,s,i,o,a,u);return c&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=re(e);j("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await po(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U8{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=nt.UNAUTHENTICATED,this.clientId=ev.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ic(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ov(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Rg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await V8(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Tg(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Tg(e.remoteStore,i)),t._onlineComponents=e}function B8(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function V8(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ic(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!B8(n))throw n;bs("Error using user provided cache. Falling back to memory cache: "+n),await Ic(t,new xg)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await Ic(t,new xg);return t._offlineComponents}async function Xv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await Rg(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await Rg(t,new $8))),t._onlineComponents}function j8(t){return Xv(t).then(e=>e.syncEngine)}async function Fa(t){const e=await Xv(t),n=e.eventManager;return n.onListen=T8.bind(null,e.syncEngine),n.onUnlisten=A8.bind(null,e.syncEngine),n}function z8(t,e,n={}){const r=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,u){const c=new Af({next:h=>{i.enqueueAndForget(()=>Cf(s,l));const f=h.docs.has(o);!f&&h.fromCache?u.reject(new L(w.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?u.reject(new L(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new Tf(bu(o.path),c,{includeMetadataChanges:!0,Ku:!0});return Ef(s,l)}(await Fa(t),t.asyncQueue,e,n,r)),r.promise}function q8(t,e,n={}){const r=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,u){const c=new Af({next:h=>{i.enqueueAndForget(()=>Cf(s,l)),h.fromCache&&a.source==="server"?u.reject(new L(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new Tf(o,c,{includeMetadataChanges:!0,Ku:!0});return Ef(s,l)}(await Fa(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(t,e,n){if(!n)throw new L(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function H8(t,e,n,r){if(e===!0&&r===!0)throw new L(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ng(t){if(!H.isDocumentKey(t))throw new L(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Og(t){if(H.isDocumentKey(t))throw new L(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function At(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fu(t);throw new L(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function K8(t,e){if(e<=0)throw new L(w.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}H8("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Nu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new pS;switch(n.type){case"firstParty":return new yS(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Fg.get(e);n&&(j("ComponentProvider","Removing Datastore"),Fg.delete(e),n.terminate())}(this),Promise.resolve()}}function W8(t,e,n,r={}){var s;const i=(t=At(t,Nu))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&bs("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=nt.MOCK_USER;else{o=lC(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new L(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new nt(u)}t._authCredentials=new gS(new Z_(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class Fn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fn(this.firestore,e,this._query)}}class Jn extends Fn{constructor(e,n,r){super(e,n,bu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new H(e))}withConverter(e){return new Jn(this.firestore,e,this._path)}}function xl(t,e,...n){if(t=qe(t),Zv("collection","path",e),t instanceof Nu){const r=Te.fromString(e,...n);return Og(r),new Jn(t,null,r)}{if(!(t instanceof ct||t instanceof Jn))throw new L(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Og(r),new Jn(t.firestore,null,r)}}function En(t,e,...n){if(t=qe(t),arguments.length===1&&(e=ev.A()),Zv("doc","path",e),t instanceof Nu){const r=Te.fromString(e,...n);return Ng(r),new ct(t,null,new H(r))}{if(!(t instanceof ct||t instanceof Jn))throw new L(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Ng(r),new ct(t.firestore,t instanceof Jn?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G8{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Mv(this,"async_queue_retry"),this.Xc=()=>{const n=Cc();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Cc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Cc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new bn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!lo(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw An("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const s=wf.createAndSchedule(this,e,n,r,i=>this.na(i));return this.zc.push(s),s}Zc(){this.Wc&&J()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function Mg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class ir extends Nu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new G8,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||e0(this),this._firestoreClient.terminate()}}function Q8(t,e){const n=typeof t=="object"?t:_h(),r=typeof t=="string"?t:e||"(default)",s=Ur(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=uC("firestore");i&&W8(s,...i)}return s}function Ou(t){return t._firestoreClient||e0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function e0(t){var e,n,r;const s=t._freezeSettings(),i=function(o,a,u,c){return new xS(o,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Jv(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new U8(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this._byteString=e}static fromBase64String(e){try{return new As(ht.fromBase64String(e))}catch(n){throw new L(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new As(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y8=/^__.*__$/;class X8{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new ho(e,this.data,n,this.fieldTransforms)}}class t0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ur(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function n0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Rf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Rf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:r,la:!1});return s.fa(e),s}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:r,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Na(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(n0(this.ca)&&Y8.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class J8{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Su(e)}ya(e,n,r,s=!1){return new Rf({ca:e,methodName:n,ga:r,path:it.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mu(t){const e=t._freezeSettings(),n=Su(t._databaseId);return new J8(t._databaseId,!!e.ignoreUndefinedProperties,n)}function r0(t,e,n,r,s,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,s);Ff("Data must be an object, but it was:",o,r);const a=s0(r,o);let u,c;if(i.merge)u=new Tt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=Rl(e,h,n);if(!o.contains(f))throw new L(w.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);o0(l,f)||l.push(f)}u=new Tt(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new X8(new Dt(a),u,c)}class Lu extends Sf{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Lu}}function Z8(t,e,n,r){const s=t.ya(1,e,n);Ff("Data must be an object, but it was:",s,r);const i=[],o=Dt.empty();Vr(r,(u,c)=>{const l=Nf(e,u,n);c=qe(c);const h=s.da(l);if(c instanceof Lu)i.push(l);else{const f=mo(c,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new Tt(i);return new t0(o,a,s.fieldTransforms)}function ex(t,e,n,r,s,i){const o=t.ya(1,e,n),a=[Rl(e,r,n)],u=[s];if(i.length%2!=0)throw new L(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Rl(e,i[f])),u.push(i[f+1]);const c=[],l=Dt.empty();for(let f=a.length-1;f>=0;--f)if(!o0(c,a[f])){const d=a[f];let D=u[f];D=qe(D);const y=o.da(d);if(D instanceof Lu)c.push(d);else{const _=mo(D,y);_!=null&&(c.push(d),l.set(d,_))}}const h=new Tt(c);return new t0(l,h,o.fieldTransforms)}function tx(t,e,n,r=!1){return mo(n,t.ya(r?4:3,e))}function mo(t,e){if(i0(t=qe(t)))return Ff("Unsupported field value:",e,t),s0(t,e);if(t instanceof Sf)return function(n,r){if(!n0(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=mo(o,r.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=qe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return YS(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=He.fromDate(n);return{timestampValue:xa(r.serializer,s)}}if(n instanceof He){const s=new He(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:xa(r.serializer,s)}}if(n instanceof xf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof As)return{bytesValue:Av(r.serializer,n._byteString)};if(n instanceof ct){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:pf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Fu(n)}`)}(t,e)}function s0(t,e){const n={};return tv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vr(t,(r,s)=>{const i=mo(s,e.ha(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function i0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof xf||t instanceof As||t instanceof ct||t instanceof Sf)}function Ff(t,e,n){if(!i0(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Fu(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Rl(t,e,n){if((e=qe(e))instanceof Pu)return e._internalPath;if(typeof e=="string")return Nf(t,e);throw Na("Field path arguments must be of type string or ",t,!1,void 0,n)}const nx=new RegExp("[~\\*/\\[\\]]");function Nf(t,e,n){if(e.search(nx)>=0)throw Na(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pu(...e.split("."))._internalPath}catch{throw Na(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Na(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new L(w.INVALID_ARGUMENT,a+t+u)}function o0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Of("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rx extends a0{data(){return super.data()}}function Of(t,e){return typeof e=="string"?Nf(t,e):e instanceof Pu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pf{}class Mf extends Pf{}function sx(t,e,...n){let r=[];e instanceof Pf&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof $f).length,o=s.filter(a=>a instanceof Lf).length;if(i>1||i>0&&o>0)throw new L(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Lf extends Mf{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Lf(e,n,r)}_apply(e){const n=this._parse(e);return c0(e._query,n),new Fn(e.firestore,e.converter,bl(e._query,n))}_parse(e){const n=Mu(e.firestore);return function(s,i,o,a,u,c,l){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new L(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){$g(l,c);const f=[];for(const d of l)f.push(Lg(a,s,d));h={arrayValue:{values:f}}}else h=Lg(a,s,l)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||$g(l,c),h=tx(o,i,l,c==="in"||c==="not-in");return ze.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class $f extends Pf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new $f(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)c0(i,a),i=bl(i,a)}(e._query,n),new Fn(e.firestore,e.converter,bl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Uf extends Mf{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Uf(e,n)}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new L(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new L(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new hs(s,i);return function(a,u){if(lf(a)===null){const c=Eu(a);c!==null&&l0(a,c,u.field)}}(r,o),o}(e._query,this._field,this._direction);return new Fn(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Us(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function ix(t,e="asc"){const n=e,r=Of("orderBy",t);return Uf._create(r,n)}class Bf extends Mf{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Bf(e,n,r)}_apply(e){return new Fn(e.firestore,e.converter,ka(e._query,this._limit,this._limitType))}}function ox(t){return K8("limitToLast",t),Bf._create("limitToLast",t,"L")}function Lg(t,e,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new L(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lv(e)&&n.indexOf("/")!==-1)throw new L(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!H.isDocumentKey(r))throw new L(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return og(t,new H(r))}if(n instanceof ct)return og(t,n._key);throw new L(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fu(n)}.`)}function $g(t,e){if(!Array.isArray(t)||t.length===0)throw new L(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function c0(t,e){if(e.isInequality()){const r=Eu(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new L(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=lf(t);i!==null&&l0(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function l0(t,e,n){if(!n.isEqual(e))throw new L(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class ax{convertValue(e,n="none"){switch(Or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Vr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new xf(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=of(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Mi(e));default:return null}}convertTimestamp(e){const n=rr(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);ke(Nv(r));const s=new Li(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||An(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class f0 extends a0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Of("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Wo extends f0{data(e={}){return super.data(e)}}class d0{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ti(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Wo(this._firestore,this._userDataWriter,r.key,r,new ti(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new Wo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ti(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Wo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ti(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,c=-1;return o.type!==0&&(u=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:ux(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ux(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){t=At(t,ct);const e=At(t.firestore,ir);return z8(Ou(e),t._key).then(n=>D0(e,t,n))}class Vf extends ax{constructor(e){super(),this.firestore=e}convertBytes(e){return new As(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function cx(t){t=At(t,Fn);const e=At(t.firestore,ir),n=Ou(e),r=new Vf(e);return u0(t._query),q8(n,t._query).then(s=>new d0(e,r,t,s))}function p0(t,e,n){t=At(t,ct);const r=At(t.firestore,ir),s=h0(t.converter,e,n);return jf(r,[r0(Mu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,jt.none())])}function lx(t,e,n,...r){t=At(t,ct);const s=At(t.firestore,ir),i=Mu(s);let o;return o=typeof(e=qe(e))=="string"||e instanceof Pu?ex(i,"updateDoc",t._key,e,n,r):Z8(i,"updateDoc",t._key,e),jf(s,[o.toMutation(t._key,jt.exists(!0))])}function g0(t,e){const n=At(t.firestore,ir),r=En(t),s=h0(t.converter,e);return jf(n,[r0(Mu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function m0(t,...e){var n,r,s;t=qe(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Mg(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Mg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let u,c,l;if(t instanceof ct)c=At(t.firestore,ir),l=bu(t._key.path),u={next:h=>{e[o]&&e[o](D0(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=At(t,Fn);c=At(h.firestore,ir),l=h._query;const f=new Vf(c);u={next:d=>{e[o]&&e[o](new d0(c,f,h,d))},error:e[o+1],complete:e[o+2]},u0(t._query)}return function(h,f,d,D){const y=new Af(D),_=new Tf(f,y,d);return h.asyncQueue.enqueueAndForget(async()=>Ef(await Fa(h),_)),()=>{y.Dc(),h.asyncQueue.enqueueAndForget(async()=>Cf(await Fa(h),_))}}(Ou(c),l,a,u)}function jf(t,e){return function(n,r){const s=new bn;return n.asyncQueue.enqueueAndForget(async()=>S8(await j8(n),r,s)),s.promise}(Ou(t),e)}function D0(t,e,n){const r=n.docs.get(e._key),s=new Vf(t);return new f0(t,s,e._key,r,new ti(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){$s=n})(Ps),un(new qt("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new ir(new mS(n.getProvider("auth-internal")),new vS(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Li(a.options.projectId,u)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Pt(tg,"3.12.0",t),Pt(tg,"3.12.0","esm2017")})();const hx={apiKey:"AIzaSyAL-n2MaA1vDuXii5uS20YB12yzQWDIlEs",authDomain:"chat-f2257.firebaseapp.com",databaseURL:"https://chat-f2257-default-rtdb.europe-west1.firebasedatabase.app",projectId:"chat-f2257",storageBucket:"chat-f2257.appspot.com",messagingSenderId:"205769011137",appId:"1:205769011137:web:37b1c44b9c6d1143328940",measurementId:"G-FC9R3F875Q"},zf=VD(hx),Zn=Q8(zf);Cy(zf);oA(zf);const zr=Lb("user",()=>{const t=WE(),e=new $t,n=Cy(),r=Fe(!0),s=Fe({uid:"0",exist:void 0});_I(n,l=>{l?(s.value.auth=!0,s.value.uid=l.uid,console.log("auth: "+l.uid),console.log("authexist: "+s.value.exist),u(),r.value=!1):(s.value.auth=!1,s.value.uid="0",s.value.exist=void 0,console.log("NE"),r.value=!1)});const i=async()=>(console.log(n.currentUser),n.currentUser),o=()=>{VI(n,e).then(l=>{h.value.uid=$t.credentialFromResult(l).uid,h.value.auth=!0,r.value=!1;const h=l.user}).catch(l=>{r.value=!1,l.code,l.message,l.email,$t.credentialFromError(l)}),r.value=!1},a=()=>{vI(n).then(()=>{s.value.auth=!1,s.value.uid="0",localStorage.removeItem("auth"),r.value=!1,t.push({path:"/"})}).catch(l=>{})},u=()=>{const l=En(Zn,"users",s.value.uid);console.log("testas: "+s.value.uid),m0(l,d=>{s.value.lobbyId=d.data().lobby}),console.log("testas"),s.value.fetchingUser=!0;const h=En(Zn,"users",s.value.uid);let f;Vi(h).then(d=>{console.log("FIRST CIRCLE"+d.exists()),d.exists()?(s.value.exist=!0,s.value.nickname=d.data().nickname):s.value.exist=!1,s.value.fetchingUser=!1}).catch(d=>{console.log(d),s.value.fetchingUser=!1}),console.log("get user exist function:"+f)};return{user:s,signIn:o,logOut:a,checkIfUserExist:u,registerUser:async l=>{const h=l.toLowerCase(),f=En(Zn,"users",s.value.uid);await p0(f,{nickname:h}),s.value.exist=!0,s.value.nickname=h},fetchingUser:r,ifLoggedIn:i}}),mi=/^[a-z0-9]+(-[a-z0-9]+)*$/,$u=(t,e,n,r="")=>{const s=t.split(":");if(t.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;r=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const a=s.pop(),u=s.pop(),c={provider:s.length>0?s[0]:r,prefix:u,name:a};return e&&!Go(c)?null:c}const i=s[0],o=i.split("-");if(o.length>1){const a={provider:r,prefix:o.shift(),name:o.join("-")};return e&&!Go(a)?null:a}if(n&&r===""){const a={provider:r,prefix:"",name:i};return e&&!Go(a,n)?null:a}return null},Go=(t,e)=>t?!!((t.provider===""||t.provider.match(mi))&&(e&&t.prefix===""||t.prefix.match(mi))&&t.name.match(mi)):!1,y0=Object.freeze({left:0,top:0,width:16,height:16}),Oa=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Uu=Object.freeze({...y0,...Oa}),Fl=Object.freeze({...Uu,body:"",hidden:!1});function fx(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function Ug(t,e){const n=fx(t,e);for(const r in Fl)r in Oa?r in t&&!(r in n)&&(n[r]=Oa[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function dx(t,e){const n=t.icons,r=t.aliases||Object.create(null),s=Object.create(null);function i(o){if(n[o])return s[o]=[];if(!(o in s)){s[o]=null;const a=r[o]&&r[o].parent,u=a&&i(a);u&&(s[o]=[a].concat(u))}return s[o]}return(e||Object.keys(n).concat(Object.keys(r))).forEach(i),s}function px(t,e,n){const r=t.icons,s=t.aliases||Object.create(null);let i={};function o(a){i=Ug(r[a]||s[a],i)}return o(e),n.forEach(o),Ug(t,i)}function _0(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(s=>{e(s,null),n.push(s)});const r=dx(t);for(const s in r){const i=r[s];i&&(e(s,px(t,s,i)),n.push(s))}return n}const gx={provider:"",aliases:{},not_found:{},...y0};function Tc(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function v0(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!Tc(t,gx))return null;const n=e.icons;for(const s in n){const i=n[s];if(!s.match(mi)||typeof i.body!="string"||!Tc(i,Fl))return null}const r=e.aliases||Object.create(null);for(const s in r){const i=r[s],o=i.parent;if(!s.match(mi)||typeof o!="string"||!n[o]&&!r[o]||!Tc(i,Fl))return null}return e}const Bg=Object.create(null);function mx(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function Pr(t,e){const n=Bg[t]||(Bg[t]=Object.create(null));return n[e]||(n[e]=mx(t,e))}function qf(t,e){return v0(e)?_0(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function Dx(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let ji=!1;function w0(t){return typeof t=="boolean"&&(ji=t),ji}function yx(t){const e=typeof t=="string"?$u(t,!0,ji):t;if(e){const n=Pr(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function _x(t,e){const n=$u(t,!0,ji);if(!n)return!1;const r=Pr(n.provider,n.prefix);return Dx(r,n.name,e)}function vx(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),ji&&!e&&!t.prefix){let s=!1;return v0(t)&&(t.prefix="",_0(t,(i,o)=>{o&&_x(i,o)&&(s=!0)})),s}const n=t.prefix;if(!Go({provider:e,prefix:n,name:"a"}))return!1;const r=Pr(e,n);return!!qf(r,t)}const b0=Object.freeze({width:null,height:null}),E0=Object.freeze({...b0,...Oa}),wx=/(-?[0-9.]*[0-9]+[0-9.]*)/g,bx=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Vg(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(wx);if(r===null||!r.length)return t;const s=[];let i=r.shift(),o=bx.test(i);for(;;){if(o){const a=parseFloat(i);isNaN(a)?s.push(i):s.push(Math.ceil(a*e*n)/n)}else s.push(i);if(i=r.shift(),i===void 0)return s.join("");o=!o}}const Ex=t=>t==="unset"||t==="undefined"||t==="none";function Cx(t,e){const n={...Uu,...t},r={...E0,...e},s={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(D=>{const y=[],_=D.hFlip,k=D.vFlip;let C=D.rotate;_?k?C+=2:(y.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),y.push("scale(-1 1)"),s.top=s.left=0):k&&(y.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),y.push("scale(1 -1)"),s.top=s.left=0);let O;switch(C<0&&(C-=Math.floor(C/4)*4),C=C%4,C){case 1:O=s.height/2+s.top,y.unshift("rotate(90 "+O.toString()+" "+O.toString()+")");break;case 2:y.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:O=s.width/2+s.left,y.unshift("rotate(-90 "+O.toString()+" "+O.toString()+")");break}C%2===1&&(s.left!==s.top&&(O=s.left,s.left=s.top,s.top=O),s.width!==s.height&&(O=s.width,s.width=s.height,s.height=O)),y.length&&(i='<g transform="'+y.join(" ")+'">'+i+"</g>")});const o=r.width,a=r.height,u=s.width,c=s.height;let l,h;o===null?(h=a===null?"1em":a==="auto"?c:a,l=Vg(h,u/c)):(l=o==="auto"?u:o,h=a===null?Vg(l,c/u):a==="auto"?c:a);const f={},d=(D,y)=>{Ex(y)||(f[D]=y.toString())};return d("width",l),d("height",h),f.viewBox=s.left.toString()+" "+s.top.toString()+" "+u.toString()+" "+c.toString(),{attributes:f,body:i}}const Ix=/\sid="(\S+)"/g,Tx="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let kx=0;function Ax(t,e=Tx){const n=[];let r;for(;r=Ix.exec(t);)n.push(r[1]);if(!n.length)return t;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(kx++).toString(),a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+s+"$3")}),t=t.replace(new RegExp(s,"g"),""),t}const Nl=Object.create(null);function Sx(t,e){Nl[t]=e}function Ol(t){return Nl[t]||Nl[""]}function Hf(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Kf=Object.create(null),Gs=["https://api.simplesvg.com","https://api.unisvg.com"],Qo=[];for(;Gs.length>0;)Gs.length===1||Math.random()>.5?Qo.push(Gs.shift()):Qo.push(Gs.pop());Kf[""]=Hf({resources:["https://api.iconify.design"].concat(Qo)});function xx(t,e){const n=Hf(e);return n===null?!1:(Kf[t]=n,!0)}function Wf(t){return Kf[t]}const Rx=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let jg=Rx();function Fx(t,e){const n=Wf(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let s=0;n.resources.forEach(o=>{s=Math.max(s,o.length)});const i=e+".json?icons=";r=n.maxURL-s-n.path.length-i.length}return r}function Nx(t){return t===404}const Ox=(t,e,n)=>{const r=[],s=Fx(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},a=0;return n.forEach((u,c)=>{a+=u.length+1,a>=s&&c>0&&(r.push(o),o={type:i,provider:t,prefix:e,icons:[]},a=u.length),o.icons.push(u)}),r.push(o),r};function Px(t){if(typeof t=="string"){const e=Wf(t);if(e)return e.path}return"/"}const Mx=(t,e,n)=>{if(!jg){n("abort",424);return}let r=Px(e.provider);switch(e.type){case"icons":{const i=e.prefix,a=e.icons.join(","),u=new URLSearchParams({icons:a});r+=i+".json?"+u.toString();break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let s=503;jg(t+r).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(Nx(o)?"abort":"next",o)});return}return s=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",s)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",s)})},Lx={prepare:Ox,send:Mx};function $x(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((s,i)=>s.provider!==i.provider?s.provider.localeCompare(i.provider):s.prefix!==i.prefix?s.prefix.localeCompare(i.prefix):s.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(s=>{if(r.name===s.name&&r.prefix===s.prefix&&r.provider===s.provider)return;r=s;const i=s.provider,o=s.prefix,a=s.name,u=n[i]||(n[i]=Object.create(null)),c=u[o]||(u[o]=Pr(i,o));let l;a in c.icons?l=e.loaded:o===""||c.missing.has(a)?l=e.missing:l=e.pending;const h={provider:i,prefix:o,name:a};l.push(h)}),e}function C0(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(s=>s.id!==e))})}function Ux(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,s=t.prefix;e.forEach(i=>{const o=i.icons,a=o.pending.length;o.pending=o.pending.filter(u=>{if(u.prefix!==s)return!0;const c=u.name;if(t.icons[c])o.loaded.push({provider:r,prefix:s,name:c});else if(t.missing.has(c))o.missing.push({provider:r,prefix:s,name:c});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||C0([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let Bx=0;function Vx(t,e,n){const r=Bx++,s=C0.bind(null,n,r);if(!e.pending.length)return s;const i={id:r,icons:e,callback:t,abort:s};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),s}function jx(t,e=!0,n=!1){const r=[];return t.forEach(s=>{const i=typeof s=="string"?$u(s,e,n):s;i&&r.push(i)}),r}var zx={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function qx(t,e,n,r){const s=t.resources.length,i=t.random?Math.floor(Math.random()*s):t.index;let o;if(t.random){let U=t.resources.slice(0);for(o=[];U.length>1;){const z=Math.floor(Math.random()*U.length);o.push(U[z]),U=U.slice(0,z).concat(U.slice(z+1))}o=o.concat(U)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const a=Date.now();let u="pending",c=0,l,h=null,f=[],d=[];typeof r=="function"&&d.push(r);function D(){h&&(clearTimeout(h),h=null)}function y(){u==="pending"&&(u="aborted"),D(),f.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),f=[]}function _(U,z){z&&(d=[]),typeof U=="function"&&d.push(U)}function k(){return{startTime:a,payload:e,status:u,queriesSent:c,queriesPending:f.length,subscribe:_,abort:y}}function C(){u="failed",d.forEach(U=>{U(void 0,l)})}function O(){f.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),f=[]}function N(U,z,x){const Y=z!=="success";switch(f=f.filter(X=>X!==U),u){case"pending":break;case"failed":if(Y||!t.dataAfterTimeout)return;break;default:return}if(z==="abort"){l=x,C();return}if(Y){l=x,f.length||(o.length?Q():C());return}if(D(),O(),!t.random){const X=t.resources.indexOf(U.resource);X!==-1&&X!==t.index&&(t.index=X)}u="completed",d.forEach(X=>{X(x)})}function Q(){if(u!=="pending")return;D();const U=o.shift();if(U===void 0){if(f.length){h=setTimeout(()=>{D(),u==="pending"&&(O(),C())},t.timeout);return}C();return}const z={status:"pending",resource:U,callback:(x,Y)=>{N(z,x,Y)}};f.push(z),c++,h=setTimeout(Q,t.rotate),n(U,e,z.callback)}return setTimeout(Q),k}function I0(t){const e={...zx,...t};let n=[];function r(){n=n.filter(a=>a().status==="pending")}function s(a,u,c){const l=qx(e,a,u,(h,f)=>{r(),c&&c(h,f)});return n.push(l),l}function i(a){return n.find(u=>a(u))||null}return{query:s,find:i,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:r}}function zg(){}const kc=Object.create(null);function Hx(t){if(!kc[t]){const e=Wf(t);if(!e)return;const n=I0(e),r={config:e,redundancy:n};kc[t]=r}return kc[t]}function Kx(t,e,n){let r,s;if(typeof t=="string"){const i=Ol(t);if(!i)return n(void 0,424),zg;s=i.send;const o=Hx(t);o&&(r=o.redundancy)}else{const i=Hf(t);if(i){r=I0(i);const o=t.resources?t.resources[0]:"",a=Ol(o);a&&(s=a.send)}}return!r||!s?(n(void 0,424),zg):r.query(e,s,n)().abort}const qg="iconify2",zi="iconify",T0=zi+"-count",Hg=zi+"-version",k0=36e5,Wx=168;function Pl(t,e){try{return t.getItem(e)}catch{}}function Gf(t,e,n){try{return t.setItem(e,n),!0}catch{}}function Kg(t,e){try{t.removeItem(e)}catch{}}function Ml(t,e){return Gf(t,T0,e.toString())}function Ll(t){return parseInt(Pl(t,T0))||0}const Bu={local:!0,session:!0},A0={local:new Set,session:new Set};let Qf=!1;function Gx(t){Qf=t}let Oo=typeof window>"u"?{}:window;function S0(t){const e=t+"Storage";try{if(Oo&&Oo[e]&&typeof Oo[e].length=="number")return Oo[e]}catch{}Bu[t]=!1}function x0(t,e){const n=S0(t);if(!n)return;const r=Pl(n,Hg);if(r!==qg){if(r){const a=Ll(n);for(let u=0;u<a;u++)Kg(n,zi+u.toString())}Gf(n,Hg,qg),Ml(n,0);return}const s=Math.floor(Date.now()/k0)-Wx,i=a=>{const u=zi+a.toString(),c=Pl(n,u);if(typeof c=="string"){try{const l=JSON.parse(c);if(typeof l=="object"&&typeof l.cached=="number"&&l.cached>s&&typeof l.provider=="string"&&typeof l.data=="object"&&typeof l.data.prefix=="string"&&e(l,a))return!0}catch{}Kg(n,u)}};let o=Ll(n);for(let a=o-1;a>=0;a--)i(a)||(a===o-1?(o--,Ml(n,o)):A0[t].add(a))}function R0(){if(!Qf){Gx(!0);for(const t in Bu)x0(t,e=>{const n=e.data,r=e.provider,s=n.prefix,i=Pr(r,s);if(!qf(i,n).length)return!1;const o=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,o):o,!0})}}function Qx(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in Bu)x0(r,s=>{const i=s.data;return s.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function Yx(t,e){Qf||R0();function n(r){let s;if(!Bu[r]||!(s=S0(r)))return;const i=A0[r];let o;if(i.size)i.delete(o=Array.from(i).shift());else if(o=Ll(s),!Ml(s,o+1))return;const a={cached:Math.floor(Date.now()/k0),provider:t.provider,data:e};return Gf(s,zi+o.toString(),JSON.stringify(a))}e.lastModified&&!Qx(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function Wg(){}function Xx(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Ux(t)}))}function Jx(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,s=t.iconsToLoad;delete t.iconsToLoad;let i;if(!s||!(i=Ol(n)))return;i.prepare(n,r,s).forEach(a=>{Kx(n,a,u=>{if(typeof u!="object")a.icons.forEach(c=>{t.missing.add(c)});else try{const c=qf(t,u);if(!c.length)return;const l=t.pendingIcons;l&&c.forEach(h=>{l.delete(h)}),Yx(t,u)}catch(c){console.error(c)}Xx(t)})})}))}const Zx=(t,e)=>{const n=jx(t,!0,w0()),r=$x(n);if(!r.pending.length){let u=!0;return e&&setTimeout(()=>{u&&e(r.loaded,r.missing,r.pending,Wg)}),()=>{u=!1}}const s=Object.create(null),i=[];let o,a;return r.pending.forEach(u=>{const{provider:c,prefix:l}=u;if(l===a&&c===o)return;o=c,a=l,i.push(Pr(c,l));const h=s[c]||(s[c]=Object.create(null));h[l]||(h[l]=[])}),r.pending.forEach(u=>{const{provider:c,prefix:l,name:h}=u,f=Pr(c,l),d=f.pendingIcons||(f.pendingIcons=new Set);d.has(h)||(d.add(h),s[c][l].push(h))}),i.forEach(u=>{const{provider:c,prefix:l}=u;s[c][l].length&&Jx(u,s[c][l])}),e?Vx(e,r,i):Wg};function e4(t,e){const n={...t};for(const r in e){const s=e[r],i=typeof s;r in b0?(s===null||s&&(i==="string"||i==="number"))&&(n[r]=s):i===typeof n[r]&&(n[r]=r==="rotate"?s%4:s)}return n}const t4=/[\s,]+/;function n4(t,e){e.split(t4).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function r4(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(t);return isNaN(s)?0:r(s)}else if(n!==t){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/s,i%1===0?r(i):0)}}return e}function s4(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function i4(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function o4(t){return"data:image/svg+xml,"+i4(t)}function a4(t){return'url("'+o4(t)+'")'}const Gg={...E0,inline:!1},u4={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},c4={display:"inline-block"},$l={backgroundColor:"currentColor"},F0={backgroundColor:"transparent"},Qg={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Yg={webkitMask:$l,mask:$l,background:F0};for(const t in Yg){const e=Yg[t];for(const n in Qg)e[t+n]=Qg[n]}const Yo={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";Yo[t+"-flip"]=e,Yo[t.slice(0,1)+"-flip"]=e,Yo[t+"Flip"]=e});function Xg(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Jg=(t,e)=>{const n=e4(Gg,e),r={...u4},s=e.mode||"svg",i={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let y in e){const _=e[y];if(_!==void 0)switch(y){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[y]=_===!0||_==="true"||_===1;break;case"flip":typeof _=="string"&&n4(n,_);break;case"color":i.color=_;break;case"rotate":typeof _=="string"?n[y]=r4(_):typeof _=="number"&&(n[y]=_);break;case"ariaHidden":case"aria-hidden":_!==!0&&_!=="true"&&delete r["aria-hidden"];break;default:{const k=Yo[y];k?(_===!0||_==="true"||_===1)&&(n[k]=!0):Gg[y]===void 0&&(r[y]=_)}}}const u=Cx(t,n),c=u.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),s==="svg"){r.style={...i,...a},Object.assign(r,c);let y=0,_=e.id;return typeof _=="string"&&(_=_.replace(/-/g,"_")),r.innerHTML=Ax(u.body,_?()=>_+"ID"+y++:"iconifyVue"),Tr("svg",r)}const{body:l,width:h,height:f}=t,d=s==="mask"||(s==="bg"?!1:l.indexOf("currentColor")!==-1),D=s4(l,{...c,width:h+"",height:f+""});return r.style={...i,"--svg":a4(D),width:Xg(c.width),height:Xg(c.height),...c4,...d?$l:F0,...a},Tr("span",r)};w0(!0);Sx("",Lx);if(typeof document<"u"&&typeof window<"u"){R0();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!vx(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const s=e[n];if(typeof s!="object"||!s||s.resources===void 0)continue;xx(n,s)||console.error(r)}catch{console.error(r)}}}}const l4={...Uu,body:""},Vu=sh({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=$u(t,!1,!0))===null)return this.abortLoading(),null;const r=yx(n);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:Zx([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const s=["iconify"];return n.prefix!==""&&s.push("iconify--"+n.prefix),n.provider!==""&&s.push("iconify--"+n.provider),{data:r,classes:s}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!e)return Jg(l4,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),Jg({...Uu,...e.data},n)}});const h4={class:"top-bar p-4 flex flex-col gap-4 bg-slate-200 border-b-2 border-lime-600 md:flex-row md:justify-between"},f4={class:"flex flex-col gap-y-2 md:flex-row gap-x-2 md:place-items-center"},d4={class:"flex flex-col text-center md:flex-row md:place-items-center gap-x-2"},p4={class:"font-bold"},g4={key:0,class:"flex place-items-center justify-center gap-2"},m4={class:"font-bold"},D4={__name:"TopBar",setup(t){const e=zr();Fe();const n=Fe(!1),r=async()=>{await navigator.clipboard.writeText(e.user.lobbyId),n.value=!0,setTimeout(()=>{n.value=!1},1e3)};return(s,i)=>(le(),je("div",h4,[ae("div",f4,[ye(kr,{onClick:De(e).logOut},{default:yt(()=>[nn("log out")]),_:1},8,["onClick"]),Lc(s.$slots,"default",{},void 0,!0),Lc(s.$slots,"id",{},void 0,!0)]),ae("div",d4,[ae("span",null,[nn("Username: "),ae("span",p4,Cn(De(e).user.nickname),1)]),De(e).user.lobbyId!=="undefined"?(le(),je("div",g4,[nn(" Your Lobby: "),ae("span",m4,Cn(De(e).user.lobbyId),1),ye(De(Vu),{icon:"ph:copy",onClick:r,class:Ki(["text-lg cursor-pointer",{copy:n.value}])},null,8,["class"])])):Vt("",!0)])]))}},N0=hn(D4,[["__scopeId","data-v-b41c8649"]]);function y4(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function _4(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var s=[null];s.push.apply(s,arguments);var i=Function.bind.apply(e,s);return new i}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var O0={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.mapStringToUnicode=t.keysStartingWith=t.fromUnicodeToEmoji=t.emojiMap=t.checkTextWithAutoSuggestionsAndUnicode=t.checkTextWithAutoSuggestions=t.checkText=void 0;var e={"o/":"👋","</3":"💔","<3":"💗","8-D":"😁","8D":"😁",":-D":"😁",":-3":"😁",":3":"😁",":D":"😁","B^D":"😁","X-D":"😁",XD:"😁","x-D":"😁",xD:"😁",":')":"😂",":'-)":"😂",":-))":"😃","8)":"😄",":)":"😊",":-)":"😄",":]":"😄",":^)":"😄",":c)":"😄",":o)":"😄",":}":"😄",":っ)":"😄","0:)":"😇","0:-)":"😇","0:-3":"😇","0:3":"😇","0;^)":"😇","O:-)":"😇","3:)":"😈","3:-)":"😈","}:)":"😈","}:-)":"😈","*)":"😉","*-)":"😉",":-,":"😉",";)":"😉",";-)":"😉",";-]":"😉",";D":"😉",";]":"😉",";^)":"😉",":-|":"😐",":|":"😐",":(":"😞",":-(":"😒",":-<":"😒",":-[":"😒",":-c":"😒",":<":"😒",":[":"😒",":c":"😒",":{":"😒",":っC":"😒","%)":"😖","%-)":"😖",":-P":"😜",":-b":"😜",":-p":"😜",":-Þ":"😜",":-þ":"😜",":P":"😜",":b":"😜",":p":"😜",":Þ":"😜",":þ":"😜",";(":"😜","X-P":"😜",XP:"😜","d:":"😜","x-p":"😜",xp:"😜",":-||":"😠",":@":"😠",":-.":"😡",":-/":"😡",":/":"😐",":L":"😡",":S":"😡",":\\":"😡",":'(":"😢",":'-(":"😢","^5":"😤","^<_<":"😤","o/\\o":"😤","|-O":"😫","|;-)":"😫",":###..":"😰",":#":"😅",":-###..":"😰","D-':":"😱",D8:"😱","D:":"😱","D:<":"😱","D;":"😱",DX:"😱","v.v":"😱","8-0":"😲",":-O":"😲",":-o":"😲",":O":"😲",":o":"😲","O-O":"😲",O_O:"😲",O_o:"😲","o-o":"😲",o_O:"😲",o_o:"😲",":$":"😳","#-)":"😵",":&":"😶",":-#":"😶",":-&":"😶",":-X":"😶",":X":"😶",":-J":"😼",":*":"😘",":^*":"😽",ಠ_ಠ:"🙅","*\\0/*":"🙆","\\o/":"🙆",":>":"😄",">.<":"😡",">:(":"😠",">:)":"😈",">:-)":"😈",">:/":"😡",">:O":"😲",">:P":"😜",">:[":"😒",">:\\":"😡",">;)":"😈",">_>^":"😤","^^":"😊",":sweat:":"😅",":smile:":"😄",":laughing:":"😆",":blush:":"😊",":smiley:":"😃",":relaxed:":"☺️",":smirk:":"😏",":heart_eyes:":"😍",":kissing_heart:":"😘",":kissing_closed_eyes:":"😚",":flushed:":"😳",":relieved:":"😌",":satisfied:":"😆",":grin:":"😁",":wink:":"😉",":stuck_out_tongue_winking_eye:":"😜",":stuck_out_tongue_closed_eyes:":"😝",":grinning:":"😀",":kissing:":"😗",":kissing_smiling_eyes:":"😙",":stuck_out_tongue:":"😛",":sleeping:":"😴",":worried:":"😟",":frowning:":"😦",":anguished:":"😧",":open_mouth:":"😮",":grimacing:":"😬",":confused:":"😕",":hushed:":"😯",":expressionless:":"😑",":unamused:":"😒",":sweat_smile:":"😅",":disappointed_relieved:":"😥",":weary:":"😩",":pensive:":"😔",":disappointed:":"😞",":confounded:":"😖",":fearful:":"😨",":cold_sweat:":"😰",":persevere:":"😣",":cry:":"😢",":sob:":"😭",":joy:":"😂",":astonished:":"😲",":scream:":"😱",":tired_face:":"😫",":angry:":"😠",":rage:":"😡",":triumph:":"😤",":sleepy:":"😪",":yum:":"😋",":mask:":"😷",":sunglasses:":"😎",":dizzy_face:":"😵",":imp:":"👿",":smiling_imp:":"😈",":neutral_face:":"😐",":no_mouth:":"😶",":innocent:":"😇",":alien:":"👽",":yellow_heart:":"💛",":blue_heart:":"💙",":purple_heart:":"💜",":heart:":"❤️",":green_heart:":"💚",":broken_heart:":"💔",":heartbeat:":"💓",":heartpulse:":"💗",":two_hearts:":"💕",":revolving_hearts:":"💞",":cupid:":"💘",":sparkling_heart:":"💖",":sparkles:":"✨",":star:":"⭐",":star2:":"🌟",":dizzy:":"💫",":boom:":"💥",":collision:":"💥",":anger:":"💢",":exclamation:":"❗",":question:":"❓",":grey_exclamation:":"❕",":grey_question:":"❔",":zzz:":"💤",":dash:":"💨",":sweat_drops:":"💦",":notes:":"🎶",":musical_note:":"🎵",":fire:":"🔥",":hankey:":"💩",":poop:":"💩",":shit:":"💩",":+1:":"👍",":thumbsup:":"👍",":-1:":"👎",":thumbsdown:":"👎",":ok_hand:":"👌",":punch:":"👊",":facepunch:":"👊",":fist:":"✊",":v:":"✌️",":wave:":"👋",":hand:":"✋",":raised_hand:":"✋",":open_hands:":"👐",":point_up:":"☝️",":point_down:":"👇",":point_left:":"👈",":point_right:":"👉",":raised_hands:":"🙌",":pray:":"🙏",":point_up_2:":"👆",":clap:":"👏",":muscle:":"💪",":metal:":"🤘",":fu:":"🖕",":walking:":"🚶",":runner:":"🏃",":running:":"🏃",":couple:":"👫",":family:":"👪",":two_men_holding_hands:":"👬",":two_women_holding_hands:":"👭",":dancer:":"💃",":dancers:":"👯",":no_good:":"🙅",":information_desk_person:":"💁",":raising_hand:":"🙋",":bride_with_veil:":"👰",":bow:":"🙇",":couplekiss:":"💏",":couple_with_heart:":"💑",":massage:":"💆",":haircut:":"💇",":nail_care:":"💅",":boy:":"👦",":girl:":"👧",":woman:":"👩",":man:":"👨",":baby:":"👶",":older_woman:":"👵",":older_man:":"👴",":man_with_gua_pi_mao:":"👲",":construction_worker:":"👷",":cop:":"👮",":angel:":"👼",":princess:":"👸",":smiley_cat:":"😺",":smile_cat:":"😸",":heart_eyes_cat:":"😻",":kissing_cat:":"😽",":smirk_cat:":"😼",":scream_cat:":"🙀",":crying_cat_face:":"😿",":joy_cat:":"😹",":pouting_cat:":"😾",":japanese_ogre:":"👹",":japanese_goblin:":"👺",":see_no_evil:":"🙈",":hear_no_evil:":"🙉",":speak_no_evil:":"🙊",":skull:":"💀",":feet:":"🐾",":lips:":"👄",":kiss:":"💋",":droplet:":"💧",":ear:":"👂",":eyes:":"👀",":nose:":"👃",":tongue:":"👅",":love_letter:":"💌",":bust_in_silhouette:":"👤",":busts_in_silhouette:":"👥",":speech_balloon:":"💬",":thought_balloon:":"💭",":sunny:":"☀️",":umbrella:":"☔",":cloud:":"☁️",":snowflake:":"❄️",":snowman:":"⛄",":zap:":"⚡",":cyclone:":"🌀",":foggy:":"🌁",":ocean:":"🌊",":cat:":"🐱",":dog:":"🐶",":mouse:":"🐭",":hamster:":"🐹",":rabbit:":"🐰",":wolf:":"🐺",":frog:":"🐸",":tiger:":"🐯",":koala:":"🐨",":bear:":"🐻",":pig:":"🐷",":pig_nose:":"🐽",":cow:":"🐮",":boar:":"🐗",":monkey_face:":"🐵",":monkey:":"🐒",":horse:":"🐴",":racehorse:":"🐎",":camel:":"🐫",":sheep:":"🐑",":elephant:":"🐘",":panda_face:":"🐼",":snake:":"🐍",":bird:":"🐦",":baby_chick:":"🐤",":hatched_chick:":"🐥",":hatching_chick:":"🐣",":chicken:":"🐔",":penguin:":"🐧",":turtle:":"🐢",":bug:":"🐛",":honeybee:":"🐝",":ant:":"🐜",":beetle:":"🐞",":snail:":"🐌",":octopus:":"🐙",":tropical_fish:":"🐠",":fish:":"🐟",":whale:":"🐳",":whale2:":"🐋",":dolphin:":"🐬",":cow2:":"🐄",":ram:":"🐏",":rat:":"🐀",":water_buffalo:":"🐃",":tiger2:":"🐅",":rabbit2:":"🐇",":dragon:":"🐉",":goat:":"🐐",":rooster:":"🐓",":dog2:":"🐕",":pig2:":"🐖",":mouse2:":"🐁",":ox:":"🐂",":dragon_face:":"🐲",":blowfish:":"🐡",":crocodile:":"🐊",":dromedary_camel:":"🐪",":leopard:":"🐆",":cat2:":"🐈",":poodle:":"🐩",":paw_prints:":"🐾",":bouquet:":"💐",":cherry_blossom:":"🌸",":tulip:":"🌷",":four_leaf_clover:":"🍀",":rose:":"🌹",":sunflower:":"🌻",":hibiscus:":"🌺",":maple_leaf:":"🍁",":leaves:":"🍃",":fallen_leaf:":"🍂",":herb:":"🌿",":mushroom:":"🍄",":cactus:":"🌵",":palm_tree:":"🌴",":evergreen_tree:":"🌲",":deciduous_tree:":"🌳",":chestnut:":"🌰",":seedling:":"🌱",":blossom:":"🌼",":ear_of_rice:":"🌾",":shell:":"🐚",":globe_with_meridians:":"🌐",":sun_with_face:":"🌞",":full_moon_with_face:":"🌝",":new_moon_with_face:":"🌚",":new_moon:":"🌑",":waxing_crescent_moon:":"🌒",":first_quarter_moon:":"🌓",":waxing_gibbous_moon:":"🌔",":full_moon:":"🌕",":waning_gibbous_moon:":"🌖",":last_quarter_moon:":"🌗",":waning_crescent_moon:":"🌘",":last_quarter_moon_with_face:":"🌜",":first_quarter_moon_with_face:":"🌛",":moon:":"🌔",":earth_africa:":"🌍",":earth_americas:":"🌎",":earth_asia:":"🌏",":volcano:":"🌋",":milky_way:":"🌌",":partly_sunny:":"⛅",":bamboo:":"🎍",":gift_heart:":"💝",":dolls:":"🎎",":school_satchel:":"🎒",":mortar_board:":"🎓",":flags:":"🎏",":fireworks:":"🎆",":sparkler:":"🎇",":wind_chime:":"🎐",":rice_scene:":"🎑",":jack_o_lantern:":"🎃",":ghost:":"👻",":santa:":"🎅",":christmas_tree:":"🎄",":gift:":"🎁",":bell:":"🔔",":no_bell:":"🔕",":tanabata_tree:":"🎋",":tada:":"🎉",":confetti_ball:":"🎊",":balloon:":"🎈",":crystal_ball:":"🔮",":cd:":"💿",":dvd:":"📀",":floppy_disk:":"💾",":camera:":"📷",":video_camera:":"📹",":movie_camera:":"🎥",":computer:":"💻",":tv:":"📺",":iphone:":"📱",":phone:":"☎️",":telephone:":"☎️",":telephone_receiver:":"📞",":pager:":"📟",":fax:":"📠",":minidisc:":"💽",":vhs:":"📼",":sound:":"🔉",":speaker:":"🔈",":mute:":"🔇",":loudspeaker:":"📢",":mega:":"📣",":hourglass:":"⌛",":hourglass_flowing_sand:":"⏳",":alarm_clock:":"⏰",":watch:":"⌚",":radio:":"📻",":satellite:":"📡",":loop:":"➿",":mag:":"🔍",":mag_right:":"🔎",":unlock:":"🔓",":lock:":"🔒",":lock_with_ink_pen:":"🔏",":closed_lock_with_key:":"🔐",":key:":"🔑",":bulb:":"💡",":flashlight:":"🔦",":high_brightness:":"🔆",":low_brightness:":"🔅",":electric_plug:":"🔌",":battery:":"🔋",":calling:":"📲",":email:":"✉️",":mailbox:":"📫",":postbox:":"📮",":bath:":"🛀",":bathtub:":"🛁",":shower:":"🚿",":toilet:":"🚽",":wrench:":"🔧",":nut_and_bolt:":"🔩",":hammer:":"🔨",":seat:":"💺",":moneybag:":"💰",":yen:":"💴",":dollar:":"💵",":pound:":"💷",":euro:":"💶",":credit_card:":"💳",":money_with_wings:":"💸",":e-mail:":"📧",":inbox_tray:":"📥",":outbox_tray:":"📤",":envelope:":"✉️",":incoming_envelope:":"📨",":postal_horn:":"📯",":mailbox_closed:":"📪",":mailbox_with_mail:":"📬",":mailbox_with_no_mail:":"📭",":package:":"📦",":door:":"🚪",":smoking:":"🚬",":bomb:":"💣",":gun:":"🔫",":hocho:":"🔪",":pill:":"💊",":syringe:":"💉",":page_facing_up:":"📄",":page_with_curl:":"📃",":bookmark_tabs:":"📑",":bar_chart:":"📊",":chart_with_upwards_trend:":"📈",":chart_with_downwards_trend:":"📉",":scroll:":"📜",":clipboard:":"📋",":calendar:":"📆",":date:":"📅",":card_index:":"📇",":file_folder:":"📁",":open_file_folder:":"📂",":scissors:":"✂️",":pushpin:":"📌",":paperclip:":"📎",":black_nib:":"✒️",":pencil2:":"✏️",":straight_ruler:":"📏",":triangular_ruler:":"📐",":closed_book:":"📕",":green_book:":"📗",":blue_book:":"📘",":orange_book:":"📙",":notebook:":"📓",":notebook_with_decorative_cover:":"📔",":ledger:":"📒",":books:":"📚",":bookmark:":"🔖",":name_badge:":"📛",":microscope:":"🔬",":telescope:":"🔭",":newspaper:":"📰",":football:":"🏈",":basketball:":"🏀",":soccer:":"⚽",":baseball:":"⚾",":tennis:":"🎾",":8ball:":"🎱",":rugby_football:":"🏉",":bowling:":"🎳",":golf:":"⛳",":mountain_bicyclist:":"🚵",":bicyclist:":"🚴",":horse_racing:":"🏇",":snowboarder:":"🏂",":swimmer:":"🏊",":surfer:":"🏄",":ski:":"🎿",":spades:":"♠️",":hearts:":"♥️",":clubs:":"♣️",":diamonds:":"♦️",":gem:":"💎",":ring:":"💍",":trophy:":"🏆",":musical_score:":"🎼",":musical_keyboard:":"🎹",":violin:":"🎻",":space_invader:":"👾",":video_game:":"🎮",":black_joker:":"🃏",":flower_playing_cards:":"🎴",":game_die:":"🎲",":dart:":"🎯",":mahjong:":"🀄",":clapper:":"🎬",":memo:":"📝",":pencil:":"📝",":book:":"📖",":art:":"🎨",":microphone:":"🎤",":headphones:":"🎧",":trumpet:":"🎺",":saxophone:":"🎷",":guitar:":"🎸",":shoe:":"👞",":sandal:":"👡",":high_heel:":"👠",":lipstick:":"💄",":boot:":"👢",":shirt:":"👕",":tshirt:":"👕",":necktie:":"👔",":womans_clothes:":"👚",":dress:":"👗",":running_shirt_with_sash:":"🎽",":jeans:":"👖",":kimono:":"👘",":bikini:":"👙",":ribbon:":"🎀",":tophat:":"🎩",":crown:":"👑",":womans_hat:":"👒",":mans_shoe:":"👞",":closed_umbrella:":"🌂",":briefcase:":"💼",":handbag:":"👜",":pouch:":"👝",":purse:":"👛",":eyeglasses:":"👓",":fishing_pole_and_fish:":"🎣",":coffee:":"☕",":tea:":"🍵",":sake:":"🍶",":baby_bottle:":"🍼",":beer:":"🍺",":beers:":"🍻",":cocktail:":"🍸",":tropical_drink:":"🍹",":wine_glass:":"🍷",":fork_and_knife:":"🍴",":pizza:":"🍕",":hamburger:":"🍔",":fries:":"🍟",":poultry_leg:":"🍗",":meat_on_bone:":"🍖",":spaghetti:":"🍝",":curry:":"🍛",":fried_shrimp:":"🍤",":bento:":"🍱",":sushi:":"🍣",":fish_cake:":"🍥",":rice_ball:":"🍙",":rice_cracker:":"🍘",":rice:":"🍚",":ramen:":"🍜",":stew:":"🍲",":oden:":"🍢",":dango:":"🍡",":egg:":"🥚",":bread:":"🍞",":doughnut:":"🍩",":custard:":"🍮",":icecream:":"🍦",":ice_cream:":"🍨",":shaved_ice:":"🍧",":birthday:":"🎂",":cake:":"🍰",":cookie:":"🍪",":chocolate_bar:":"🍫",":candy:":"🍬",":lollipop:":"🍭",":honey_pot:":"🍯",":apple:":"🍎",":green_apple:":"🍏",":tangerine:":"🍊",":lemon:":"🍋",":cherries:":"🍒",":grapes:":"🍇",":watermelon:":"🍉",":strawberry:":"🍓",":peach:":"🍑",":melon:":"🍈",":banana:":"🍌",":pear:":"🍐",":pineapple:":"🍍",":sweet_potato:":"🍠",":eggplant:":"🍆",":tomato:":"🍅",":corn:":"🌽",":house:":"🏠",":house_with_garden:":"🏡",":school:":"🏫",":office:":"🏢",":post_office:":"🏣",":hospital:":"🏥",":bank:":"🏦",":convenience_store:":"🏪",":love_hotel:":"🏩",":hotel:":"🏨",":wedding:":"💒",":church:":"⛪",":department_store:":"🏬",":european_post_office:":"🏤",":city_sunrise:":"🌇",":city_sunset:":"🌆",":japanese_castle:":"🏯",":european_castle:":"🏰",":tent:":"⛺",":factory:":"🏭",":tokyo_tower:":"🗼",":japan:":"🗾",":mount_fuji:":"🗻",":sunrise_over_mountains:":"🌄",":sunrise:":"🌅",":stars:":"🌠",":statue_of_liberty:":"🗽",":bridge_at_night:":"🌉",":carousel_horse:":"🎠",":rainbow:":"🌈",":ferris_wheel:":"🎡",":fountain:":"⛲",":roller_coaster:":"🎢",":ship:":"🚢",":speedboat:":"🚤",":boat:":"⛵",":sailboat:":"⛵",":rowboat:":"🚣",":anchor:":"⚓",":rocket:":"🚀",":airplane:":"✈️",":helicopter:":"🚁",":steam_locomotive:":"🚂",":tram:":"🚊",":mountain_railway:":"🚞",":bike:":"🚲",":aerial_tramway:":"🚡",":suspension_railway:":"🚟",":mountain_cableway:":"🚠",":tractor:":"🚜",":blue_car:":"🚙",":oncoming_automobile:":"🚘",":car:":"🚗",":red_car:":"🚗",":taxi:":"🚕",":oncoming_taxi:":"🚖",":articulated_lorry:":"🚛",":bus:":"🚌",":oncoming_bus:":"🚍",":rotating_light:":"🚨",":police_car:":"🚓",":oncoming_police_car:":"🚔",":fire_engine:":"🚒",":ambulance:":"🚑",":minibus:":"🚐",":truck:":"🚚",":train:":"🚋",":station:":"🚉",":train2:":"🚆",":bullettrain_front:":"🚅",":bullettrain_side:":"🚄",":light_rail:":"🚈",":monorail:":"🚝",":railway_car:":"🚃",":trolleybus:":"🚎",":ticket:":"🎫",":fuelpump:":"⛽",":vertical_traffic_light:":"🚦",":traffic_light:":"🚥",":warning:":"⚠️",":construction:":"🚧",":beginner:":"🔰",":atm:":"🏧",":slot_machine:":"🎰",":busstop:":"🚏",":barber:":"💈",":hotsprings:":"♨️",":checkered_flag:":"🏁",":crossed_flags:":"🎌",":izakaya_lantern:":"🏮",":moyai:":"🗿",":circus_tent:":"🎪",":performing_arts:":"🎭",":round_pushpin:":"📍",":triangular_flag_on_post:":"🚩",":jp:":"🇯🇵",":kr:":"🇰🇷",":cn:":"🇨🇳",":us:":"🇺🇸",":fr:":"🇫🇷",":es:":"🇪🇸",":it:":"🇮🇹",":ru:":"🇷🇺",":gb:":"🇬🇧",":uk:":"🇬🇧",":de:":"🇩🇪",":one:":"1️⃣",":two:":"2️⃣",":three:":"3️⃣",":four:":"4️⃣",":five:":"5️⃣",":six:":"6️⃣",":seven:":"7️⃣",":eight:":"8️⃣",":nine:":"9️⃣",":keycap_ten:":"🔟",":1234:":"🔢",":zero:":"0️⃣",":hash:":"#️⃣",":symbols:":"🔣",":arrow_backward:":"◀️",":arrow_down:":"⬇️",":arrow_forward:":"▶️",":arrow_left:":"⬅️",":capital_abcd:":"🔠",":abcd:":"🔡",":abc:":"🔤",":arrow_lower_left:":"↙️",":arrow_lower_right:":"↘️",":arrow_right:":"➡️",":arrow_up:":"⬆️",":arrow_upper_left:":"↖️",":arrow_upper_right:":"↗️",":arrow_double_down:":"⏬",":arrow_double_up:":"⏫",":arrow_down_small:":"🔽",":arrow_heading_down:":"⤵️",":arrow_heading_up:":"⤴️",":leftwards_arrow_with_hook:":"↩️",":arrow_right_hook:":"↪️",":left_right_arrow:":"↔️",":arrow_up_down:":"↕️",":arrow_up_small:":"🔼",":arrows_clockwise:":"🔃",":arrows_counterclockwise:":"🔄",":rewind:":"⏪",":fast_forward:":"⏩",":information_source:":"ℹ️",":ok:":"🆗",":twisted_rightwards_arrows:":"🔀",":repeat:":"🔁",":repeat_one:":"🔂",":new:":"🆕",":top:":"🔝",":up:":"🆙",":cool:":"🆒",":free:":"🆓",":ng:":"🆖",":cinema:":"🎦",":koko:":"🈁",":signal_strength:":"📶",":u5272:":"🈹",":u5408:":"🈴",":u55b6:":"🈺",":u6307:":"🈯",":u6708:":"🈷️",":u6709:":"🈶",":u6e80:":"🈵",":u7121:":"🈚",":u7533:":"🈸",":u7a7a:":"🈳",":u7981:":"🈲",":sa:":"🈂️",":restroom:":"🚻",":mens:":"🚹",":womens:":"🚺",":baby_symbol:":"🚼",":no_smoking:":"🚭",":parking:":"🅿️",":wheelchair:":"♿",":metro:":"🚇",":baggage_claim:":"🛄",":accept:":"🉑",":wc:":"🚾",":potable_water:":"🚰",":put_litter_in_its_place:":"🚮",":secret:":"㊙️",":congratulations:":"㊗️",":m:":"Ⓜ️",":passport_control:":"🛂",":left_luggage:":"🛅",":customs:":"🛃",":ideograph_advantage:":"🉐",":cl:":"🆑",":sos:":"🆘",":id:":"🆔",":no_entry_sign:":"🚫",":underage:":"🔞",":no_mobile_phones:":"📵",":do_not_litter:":"🚯",":non-potable_water:":"🚱",":no_bicycles:":"🚳",":no_pedestrians:":"🚷",":children_crossing:":"🚸",":no_entry:":"⛔",":eight_spoked_asterisk:":"✳️",":sparkle:":"❇️",":eight_pointed_black_star:":"✴️",":heart_decoration:":"💟",":vs:":"🆚",":vibration_mode:":"📳",":mobile_phone_off:":"📴",":chart:":"💹",":currency_exchange:":"💱",":aries:":"♈",":taurus:":"♉",":gemini:":"♊",":cancer:":"♋",":leo:":"♌",":virgo:":"♍",":libra:":"♎",":scorpius:":"♏",":sagittarius:":"♐",":capricorn:":"♑",":aquarius:":"♒",":pisces:":"♓",":ophiuchus:":"⛎",":six_pointed_star:":"🔯",":negative_squared_cross_mark:":"❎",":a:":"🅰️",":b:":"🅱️",":ab:":"🆎",":o2:":"🅾️",":diamond_shape_with_a_dot_inside:":"💠",":recycle:":"♻️",":end:":"🔚",":back:":"🔙",":on:":"🔛",":soon:":"🔜",":clock1:":"🕐",":clock130:":"🕜",":clock10:":"🕙",":clock1030:":"🕥",":clock11:":"🕚",":clock1130:":"🕦",":clock12:":"🕛",":clock1230:":"🕧",":clock2:":"🕑",":clock230:":"🕝",":clock3:":"🕒",":clock330:":"🕞",":clock4:":"🕓",":clock430:":"🕟",":clock5:":"🕔",":clock530:":"🕠",":clock6:":"🕕",":clock630:":"🕡",":clock7:":"🕖",":clock730:":"🕢",":clock8:":"🕗",":clock830:":"🕣",":clock9:":"🕘",":clock930:":"🕤",":heavy_dollar_sign:":"💲",":copyright:":"©️",":registered:":"®️",":tm:":"™️",":x:":"❌",":heavy_exclamation_mark:":"❗",":bangbang:":"‼️",":interrobang:":"⁉️",":o:":"⭕",":heavy_multiplication_x:":"✖️",":heavy_plus_sign:":"➕",":heavy_minus_sign:":"➖",":heavy_division_sign:":"➗",":white_flower:":"💮",":100:":"💯",":heavy_check_mark:":"✔️",":ballot_box_with_check:":"☑️",":radio_button:":"🔘",":link:":"🔗",":curly_loop:":"➰",":wavy_dash:":"〰️",":part_alternation_mark:":"〽️"};t.emojiMap=e;var n={":100:":"1f4af",":1234:":"1f522",":interrobang:":"2049",":tm:":"2122",":information_source:":"2139",":left_right_arrow:":"2194",":arrow_up_down:":"2195",":arrow_upper_left:":"2196",":arrow_upper_right:":"2197",":arrow_lower_right:":"2198",":arrow_lower_left:":"2199",":keyboard:":"2328",":sunny:":"2600",":cloud:":"2601",":umbrella:":"2602",":snowman:":"2603",":comet:":"2604",":ballot_box_with_check:":"2611",":umbrella_with_rain_drops:":"2614",":coffee:":"2615",":shamrock:":"2618",":skull_and_crossbones:":"2620",":radioactive_sign:":"2622",":biohazard_sign:":"2623",":orthodox_cross:":"2626",":wheel_of_dharma:":"2638",":white_frowning_face:":"2639",":aries:":"2648",":taurus:":"2649",":sagittarius:":"2650",":capricorn:":"2651",":aquarius:":"2652",":pisces:":"2653",":spades:":"2660",":clubs:":"2663",":hearts:":"2665",":diamonds:":"2666",":hotsprings:":"2668",":hammer_and_pick:":"2692",":anchor:":"2693",":crossed_swords:":"2694",":scales:":"2696",":alembic:":"2697",":gear:":"2699",":scissors:":"2702",":white_check_mark:":"2705",":airplane:":"2708",":email:":"2709",":envelope:":"2709",":black_nib:":"2712",":heavy_check_mark:":"2714",":heavy_multiplication_x:":"2716",":star_of_david:":"2721",":sparkles:":"2728",":eight_spoked_asterisk:":"2733",":eight_pointed_black_star:":"2734",":snowflake:":"2744",":sparkle:":"2747",":question:":"2753",":grey_question:":"2754",":grey_exclamation:":"2755",":exclamation:":"2757",":heavy_exclamation_mark:":"2757",":heavy_heart_exclamation_mark_ornament:":"2763",":heart:":"2764",":heavy_plus_sign:":"2795",":heavy_minus_sign:":"2796",":heavy_division_sign:":"2797",":arrow_heading_up:":"2934",":arrow_heading_down:":"2935",":wavy_dash:":"3030",":congratulations:":"3297",":secret:":"3299",":copyright:":"00a9",":registered:":"00ae",":bangbang:":"203c",":leftwards_arrow_with_hook:":"21a9",":arrow_right_hook:":"21aa",":watch:":"231a",":hourglass:":"231b",":eject:":"23cf",":fast_forward:":"23e9",":rewind:":"23ea",":arrow_double_up:":"23eb",":arrow_double_down:":"23ec",":black_right_pointing_double_triangle_with_vertical_bar:":"23ed",":black_left_pointing_double_triangle_with_vertical_bar:":"23ee",":black_right_pointing_triangle_with_double_vertical_bar:":"23ef",":alarm_clock:":"23f0",":stopwatch:":"23f1",":timer_clock:":"23f2",":hourglass_flowing_sand:":"23f3",":double_vertical_bar:":"23f8",":black_square_for_stop:":"23f9",":black_circle_for_record:":"23fa",":m:":"24c2",":black_small_square:":"25aa",":white_small_square:":"25ab",":arrow_forward:":"25b6",":arrow_backward:":"25c0",":white_medium_square:":"25fb",":black_medium_square:":"25fc",":white_medium_small_square:":"25fd",":black_medium_small_square:":"25fe",":phone:":"260e",":telephone:":"260e",":point_up:":"261d",":star_and_crescent:":"262a",":peace_symbol:":"262e",":yin_yang:":"262f",":relaxed:":"263a",":gemini:":"264a",":cancer:":"264b",":leo:":"264c",":virgo:":"264d",":libra:":"264e",":scorpius:":"264f",":recycle:":"267b",":wheelchair:":"267f",":atom_symbol:":"269b",":fleur_de_lis:":"269c",":warning:":"26a0",":zap:":"26a1",":white_circle:":"26aa",":black_circle:":"26ab",":coffin:":"26b0",":funeral_urn:":"26b1",":soccer:":"26bd",":baseball:":"26be",":snowman_without_snow:":"26c4",":partly_sunny:":"26c5",":thunder_cloud_and_rain:":"26c8",":ophiuchus:":"26ce",":pick:":"26cf",":helmet_with_white_cross:":"26d1",":chains:":"26d3",":no_entry:":"26d4",":shinto_shrine:":"26e9",":church:":"26ea",":mountain:":"26f0",":umbrella_on_ground:":"26f1",":fountain:":"26f2",":golf:":"26f3",":ferry:":"26f4",":boat:":"26f5",":sailboat:":"26f5",":skier:":"26f7",":ice_skate:":"26f8",":person_with_ball:":"26f9",":tent:":"26fa",":fuelpump:":"26fd",":fist:":"270a",":hand:":"270b",":raised_hand:":"270b",":v:":"270c",":writing_hand:":"270d",":pencil2:":"270f",":latin_cross:":"271d",":x:":"274c",":negative_squared_cross_mark:":"274e",":arrow_right:":"27a1",":curly_loop:":"27b0",":loop:":"27bf",":arrow_left:":"2b05",":arrow_up:":"2b06",":arrow_down:":"2b07",":black_large_square:":"2b1b",":white_large_square:":"2b1c",":star:":"2b50",":o:":"2b55",":part_alternation_mark:":"303d",":mahjong:":"1f004",":black_joker:":"1f0cf",":a:":"1f170",":b:":"1f171",":o2:":"1f17e",":parking:":"1f17f",":ab:":"1f18e",":cl:":"1f191",":cool:":"1f192",":free:":"1f193",":id:":"1f194",":new:":"1f195",":ng:":"1f196",":ok:":"1f197",":sos:":"1f198",":up:":"1f199",":vs:":"1f19a",":koko:":"1f201",":sa:":"1f202",":u7121:":"1f21a",":u6307:":"1f22f",":u7981:":"1f232",":u7a7a:":"1f233",":u5408:":"1f234",":u6e80:":"1f235",":u6709:":"1f236",":u6708:":"1f237",":u7533:":"1f238",":u5272:":"1f239",":u55b6:":"1f23a",":ideograph_advantage:":"1f250",":accept:":"1f251",":cyclone:":"1f300",":foggy:":"1f301",":closed_umbrella:":"1f302",":night_with_stars:":"1f303",":sunrise_over_mountains:":"1f304",":sunrise:":"1f305",":city_sunset:":"1f306",":city_sunrise:":"1f307",":rainbow:":"1f308",":bridge_at_night:":"1f309",":ocean:":"1f30a",":volcano:":"1f30b",":milky_way:":"1f30c",":earth_africa:":"1f30d",":earth_americas:":"1f30e",":earth_asia:":"1f30f",":globe_with_meridians:":"1f310",":new_moon:":"1f311",":waxing_crescent_moon:":"1f312",":first_quarter_moon:":"1f313",":moon:":"1f314",":waxing_gibbous_moon:":"1f314",":full_moon:":"1f315",":waning_gibbous_moon:":"1f316",":last_quarter_moon:":"1f317",":waning_crescent_moon:":"1f318",":crescent_moon:":"1f319",":new_moon_with_face:":"1f31a",":first_quarter_moon_with_face:":"1f31b",":last_quarter_moon_with_face:":"1f31c",":full_moon_with_face:":"1f31d",":sun_with_face:":"1f31e",":star2:":"1f31f",":stars:":"1f320",":thermometer:":"1f321",":mostly_sunny:":"1f324",":sun_small_cloud:":"1f324",":barely_sunny:":"1f325",":sun_behind_cloud:":"1f325",":partly_sunny_rain:":"1f326",":sun_behind_rain_cloud:":"1f326",":rain_cloud:":"1f327",":snow_cloud:":"1f328",":lightning:":"1f329",":lightning_cloud:":"1f329",":tornado:":"1f32a",":tornado_cloud:":"1f32a",":fog:":"1f32b",":wind_blowing_face:":"1f32c",":hotdog:":"1f32d",":taco:":"1f32e",":burrito:":"1f32f",":chestnut:":"1f330",":seedling:":"1f331",":evergreen_tree:":"1f332",":deciduous_tree:":"1f333",":palm_tree:":"1f334",":cactus:":"1f335",":hot_pepper:":"1f336",":tulip:":"1f337",":cherry_blossom:":"1f338",":rose:":"1f339",":hibiscus:":"1f33a",":sunflower:":"1f33b",":blossom:":"1f33c",":corn:":"1f33d",":ear_of_rice:":"1f33e",":herb:":"1f33f",":four_leaf_clover:":"1f340",":maple_leaf:":"1f341",":fallen_leaf:":"1f342",":leaves:":"1f343",":mushroom:":"1f344",":tomato:":"1f345",":eggplant:":"1f346",":grapes:":"1f347",":melon:":"1f348",":watermelon:":"1f349",":tangerine:":"1f34a",":lemon:":"1f34b",":banana:":"1f34c",":pineapple:":"1f34d",":apple:":"1f34e",":green_apple:":"1f34f",":pear:":"1f350",":peach:":"1f351",":cherries:":"1f352",":strawberry:":"1f353",":hamburger:":"1f354",":pizza:":"1f355",":meat_on_bone:":"1f356",":poultry_leg:":"1f357",":rice_cracker:":"1f358",":rice_ball:":"1f359",":rice:":"1f35a",":curry:":"1f35b",":ramen:":"1f35c",":spaghetti:":"1f35d",":bread:":"1f35e",":fries:":"1f35f",":sweet_potato:":"1f360",":dango:":"1f361",":oden:":"1f362",":sushi:":"1f363",":fried_shrimp:":"1f364",":fish_cake:":"1f365",":icecream:":"1f366",":shaved_ice:":"1f367",":ice_cream:":"1f368",":doughnut:":"1f369",":cookie:":"1f36a",":chocolate_bar:":"1f36b",":candy:":"1f36c",":lollipop:":"1f36d",":custard:":"1f36e",":honey_pot:":"1f36f",":cake:":"1f370",":bento:":"1f371",":stew:":"1f372",":egg:":"1f373",":fork_and_knife:":"1f374",":tea:":"1f375",":sake:":"1f376",":wine_glass:":"1f377",":cocktail:":"1f378",":tropical_drink:":"1f379",":beer:":"1f37a",":beers:":"1f37b",":baby_bottle:":"1f37c",":knife_fork_plate:":"1f37d",":champagne:":"1f37e",":popcorn:":"1f37f",":ribbon:":"1f380",":gift:":"1f381",":birthday:":"1f382",":jack_o_lantern:":"1f383",":christmas_tree:":"1f384",":santa:":"1f385",":fireworks:":"1f386",":sparkler:":"1f387",":balloon:":"1f388",":tada:":"1f389",":confetti_ball:":"1f38a",":tanabata_tree:":"1f38b",":crossed_flags:":"1f38c",":bamboo:":"1f38d",":dolls:":"1f38e",":flags:":"1f38f",":wind_chime:":"1f390",":rice_scene:":"1f391",":school_satchel:":"1f392",":mortar_board:":"1f393",":medal:":"1f396",":reminder_ribbon:":"1f397",":studio_microphone:":"1f399",":level_slider:":"1f39a",":control_knobs:":"1f39b",":film_frames:":"1f39e",":admission_tickets:":"1f39f",":carousel_horse:":"1f3a0",":ferris_wheel:":"1f3a1",":roller_coaster:":"1f3a2",":fishing_pole_and_fish:":"1f3a3",":microphone:":"1f3a4",":movie_camera:":"1f3a5",":cinema:":"1f3a6",":headphones:":"1f3a7",":art:":"1f3a8",":tophat:":"1f3a9",":circus_tent:":"1f3aa",":ticket:":"1f3ab",":clapper:":"1f3ac",":performing_arts:":"1f3ad",":video_game:":"1f3ae",":dart:":"1f3af",":slot_machine:":"1f3b0",":8ball:":"1f3b1",":game_die:":"1f3b2",":bowling:":"1f3b3",":flower_playing_cards:":"1f3b4",":musical_note:":"1f3b5",":notes:":"1f3b6",":saxophone:":"1f3b7",":guitar:":"1f3b8",":musical_keyboard:":"1f3b9",":trumpet:":"1f3ba",":violin:":"1f3bb",":musical_score:":"1f3bc",":running_shirt_with_sash:":"1f3bd",":tennis:":"1f3be",":ski:":"1f3bf",":basketball:":"1f3c0",":checkered_flag:":"1f3c1",":snowboarder:":"1f3c2",":runner:":"1f3c3",":running:":"1f3c3",":surfer:":"1f3c4",":sports_medal:":"1f3c5",":trophy:":"1f3c6",":horse_racing:":"1f3c7",":football:":"1f3c8",":rugby_football:":"1f3c9",":swimmer:":"1f3ca",":weight_lifter:":"1f3cb",":golfer:":"1f3cc",":racing_motorcycle:":"1f3cd",":racing_car:":"1f3ce",":cricket_bat_and_ball:":"1f3cf",":volleyball:":"1f3d0",":field_hockey_stick_and_ball:":"1f3d1",":ice_hockey_stick_and_puck:":"1f3d2",":table_tennis_paddle_and_ball:":"1f3d3",":snow_capped_mountain:":"1f3d4",":camping:":"1f3d5",":beach_with_umbrella:":"1f3d6",":building_construction:":"1f3d7",":house_buildings:":"1f3d8",":cityscape:":"1f3d9",":derelict_house_building:":"1f3da",":classical_building:":"1f3db",":desert:":"1f3dc",":desert_island:":"1f3dd",":national_park:":"1f3de",":stadium:":"1f3df",":house:":"1f3e0",":house_with_garden:":"1f3e1",":office:":"1f3e2",":post_office:":"1f3e3",":european_post_office:":"1f3e4",":hospital:":"1f3e5",":bank:":"1f3e6",":atm:":"1f3e7",":hotel:":"1f3e8",":love_hotel:":"1f3e9",":convenience_store:":"1f3ea",":school:":"1f3eb",":department_store:":"1f3ec",":factory:":"1f3ed",":izakaya_lantern:":"1f3ee",":lantern:":"1f3ee",":japanese_castle:":"1f3ef",":european_castle:":"1f3f0",":waving_white_flag:":"1f3f3",":waving_black_flag:":"1f3f4",":rosette:":"1f3f5",":label:":"1f3f7",":badminton_racquet_and_shuttlecock:":"1f3f8",":bow_and_arrow:":"1f3f9",":amphora:":"1f3fa",":skin-tone-2:":"1f3fb",":skin-tone-3:":"1f3fc",":skin-tone-4:":"1f3fd",":skin-tone-5:":"1f3fe",":skin-tone-6:":"1f3ff",":rat:":"1f400",":mouse2:":"1f401",":ox:":"1f402",":water_buffalo:":"1f403",":cow2:":"1f404",":tiger2:":"1f405",":leopard:":"1f406",":rabbit2:":"1f407",":cat2:":"1f408",":dragon:":"1f409",":crocodile:":"1f40a",":whale2:":"1f40b",":snail:":"1f40c",":snake:":"1f40d",":racehorse:":"1f40e",":ram:":"1f40f",":goat:":"1f410",":sheep:":"1f411",":monkey:":"1f412",":rooster:":"1f413",":chicken:":"1f414",":dog2:":"1f415",":pig2:":"1f416",":boar:":"1f417",":elephant:":"1f418",":octopus:":"1f419",":shell:":"1f41a",":bug:":"1f41b",":ant:":"1f41c",":bee:":"1f41d",":honeybee:":"1f41d",":beetle:":"1f41e",":fish:":"1f41f",":tropical_fish:":"1f420",":blowfish:":"1f421",":turtle:":"1f422",":hatching_chick:":"1f423",":baby_chick:":"1f424",":hatched_chick:":"1f425",":bird:":"1f426",":penguin:":"1f427",":koala:":"1f428",":poodle:":"1f429",":dromedary_camel:":"1f42a",":camel:":"1f42b",":dolphin:":"1f42c",":flipper:":"1f42c",":mouse:":"1f42d",":cow:":"1f42e",":tiger:":"1f42f",":rabbit:":"1f430",":cat:":"1f431",":dragon_face:":"1f432",":whale:":"1f433",":horse:":"1f434",":monkey_face:":"1f435",":dog:":"1f436",":pig:":"1f437",":frog:":"1f438",":hamster:":"1f439",":wolf:":"1f43a",":bear:":"1f43b",":panda_face:":"1f43c",":pig_nose:":"1f43d",":feet:":"1f43e",":paw_prints:":"1f43e",":chipmunk:":"1f43f",":eyes:":"1f440",":eye:":"1f441",":ear:":"1f442",":nose:":"1f443",":lips:":"1f444",":tongue:":"1f445",":point_up_2:":"1f446",":point_down:":"1f447",":point_left:":"1f448",":point_right:":"1f449",":facepunch:":"1f44a",":punch:":"1f44a",":wave:":"1f44b",":ok_hand:":"1f44c",":+1:":"1f44d",":thumbsup:":"1f44d",":-1:":"1f44e",":thumbsdown:":"1f44e",":clap:":"1f44f",":open_hands:":"1f450",":crown:":"1f451",":womans_hat:":"1f452",":eyeglasses:":"1f453",":necktie:":"1f454",":shirt:":"1f455",":tshirt:":"1f455",":jeans:":"1f456",":dress:":"1f457",":kimono:":"1f458",":bikini:":"1f459",":womans_clothes:":"1f45a",":purse:":"1f45b",":handbag:":"1f45c",":pouch:":"1f45d",":mans_shoe:":"1f45e",":shoe:":"1f45e",":athletic_shoe:":"1f45f",":high_heel:":"1f460",":sandal:":"1f461",":boot:":"1f462",":footprints:":"1f463",":bust_in_silhouette:":"1f464",":busts_in_silhouette:":"1f465",":boy:":"1f466",":girl:":"1f467",":man:":"1f468",":woman:":"1f469",":family:":"1f46a",":man-woman-boy:":"1f46a",":couple:":"1f46b",":man_and_woman_holding_hands:":"1f46b",":two_men_holding_hands:":"1f46c",":two_women_holding_hands:":"1f46d",":cop:":"1f46e",":dancers:":"1f46f",":bride_with_veil:":"1f470",":person_with_blond_hair:":"1f471",":man_with_gua_pi_mao:":"1f472",":man_with_turban:":"1f473",":older_man:":"1f474",":older_woman:":"1f475",":baby:":"1f476",":construction_worker:":"1f477",":princess:":"1f478",":japanese_ogre:":"1f479",":japanese_goblin:":"1f47a",":ghost:":"1f47b",":angel:":"1f47c",":alien:":"1f47d",":space_invader:":"1f47e",":imp:":"1f47f",":skull:":"1f480",":information_desk_person:":"1f481",":guardsman:":"1f482",":dancer:":"1f483",":lipstick:":"1f484",":nail_care:":"1f485",":massage:":"1f486",":haircut:":"1f487",":barber:":"1f488",":syringe:":"1f489",":pill:":"1f48a",":kiss:":"1f48b",":love_letter:":"1f48c",":ring:":"1f48d",":gem:":"1f48e",":couplekiss:":"1f48f",":bouquet:":"1f490",":couple_with_heart:":"1f491",":wedding:":"1f492",":heartbeat:":"1f493",":broken_heart:":"1f494",":two_hearts:":"1f495",":sparkling_heart:":"1f496",":heartpulse:":"1f497",":cupid:":"1f498",":blue_heart:":"1f499",":green_heart:":"1f49a",":yellow_heart:":"1f49b",":purple_heart:":"1f49c",":gift_heart:":"1f49d",":revolving_hearts:":"1f49e",":heart_decoration:":"1f49f",":diamond_shape_with_a_dot_inside:":"1f4a0",":bulb:":"1f4a1",":anger:":"1f4a2",":bomb:":"1f4a3",":zzz:":"1f4a4",":boom:":"1f4a5",":collision:":"1f4a5",":sweat_drops:":"1f4a6",":droplet:":"1f4a7",":dash:":"1f4a8",":hankey:":"1f4a9",":poop:":"1f4a9",":shit:":"1f4a9",":muscle:":"1f4aa",":dizzy:":"1f4ab",":speech_balloon:":"1f4ac",":thought_balloon:":"1f4ad",":white_flower:":"1f4ae",":moneybag:":"1f4b0",":currency_exchange:":"1f4b1",":heavy_dollar_sign:":"1f4b2",":credit_card:":"1f4b3",":yen:":"1f4b4",":dollar:":"1f4b5",":euro:":"1f4b6",":pound:":"1f4b7",":money_with_wings:":"1f4b8",":chart:":"1f4b9",":seat:":"1f4ba",":computer:":"1f4bb",":briefcase:":"1f4bc",":minidisc:":"1f4bd",":floppy_disk:":"1f4be",":cd:":"1f4bf",":dvd:":"1f4c0",":file_folder:":"1f4c1",":open_file_folder:":"1f4c2",":page_with_curl:":"1f4c3",":page_facing_up:":"1f4c4",":date:":"1f4c5",":calendar:":"1f4c6",":card_index:":"1f4c7",":chart_with_upwards_trend:":"1f4c8",":chart_with_downwards_trend:":"1f4c9",":bar_chart:":"1f4ca",":clipboard:":"1f4cb",":pushpin:":"1f4cc",":round_pushpin:":"1f4cd",":paperclip:":"1f4ce",":straight_ruler:":"1f4cf",":triangular_ruler:":"1f4d0",":bookmark_tabs:":"1f4d1",":ledger:":"1f4d2",":notebook:":"1f4d3",":notebook_with_decorative_cover:":"1f4d4",":closed_book:":"1f4d5",":book:":"1f4d6",":open_book:":"1f4d6",":green_book:":"1f4d7",":blue_book:":"1f4d8",":orange_book:":"1f4d9",":books:":"1f4da",":name_badge:":"1f4db",":scroll:":"1f4dc",":memo:":"1f4dd",":pencil:":"1f4dd",":telephone_receiver:":"1f4de",":pager:":"1f4df",":fax:":"1f4e0",":satellite_antenna:":"1f4e1",":loudspeaker:":"1f4e2",":mega:":"1f4e3",":outbox_tray:":"1f4e4",":inbox_tray:":"1f4e5",":package:":"1f4e6",":e-mail:":"1f4e7",":incoming_envelope:":"1f4e8",":envelope_with_arrow:":"1f4e9",":mailbox_closed:":"1f4ea",":mailbox:":"1f4eb",":mailbox_with_mail:":"1f4ec",":mailbox_with_no_mail:":"1f4ed",":postbox:":"1f4ee",":postal_horn:":"1f4ef",":newspaper:":"1f4f0",":iphone:":"1f4f1",":calling:":"1f4f2",":vibration_mode:":"1f4f3",":mobile_phone_off:":"1f4f4",":no_mobile_phones:":"1f4f5",":signal_strength:":"1f4f6",":camera:":"1f4f7",":camera_with_flash:":"1f4f8",":video_camera:":"1f4f9",":tv:":"1f4fa",":radio:":"1f4fb",":vhs:":"1f4fc",":film_projector:":"1f4fd",":prayer_beads:":"1f4ff",":twisted_rightwards_arrows:":"1f500",":repeat:":"1f501",":repeat_one:":"1f502",":arrows_clockwise:":"1f503",":arrows_counterclockwise:":"1f504",":low_brightness:":"1f505",":high_brightness:":"1f506",":mute:":"1f507",":speaker:":"1f508",":sound:":"1f509",":loud_sound:":"1f50a",":battery:":"1f50b",":electric_plug:":"1f50c",":mag:":"1f50d",":mag_right:":"1f50e",":lock_with_ink_pen:":"1f50f",":closed_lock_with_key:":"1f510",":key:":"1f511",":lock:":"1f512",":unlock:":"1f513",":bell:":"1f514",":no_bell:":"1f515",":bookmark:":"1f516",":link:":"1f517",":radio_button:":"1f518",":back:":"1f519",":end:":"1f51a",":on:":"1f51b",":soon:":"1f51c",":top:":"1f51d",":underage:":"1f51e",":keycap_ten:":"1f51f",":capital_abcd:":"1f520",":abcd:":"1f521",":symbols:":"1f523",":abc:":"1f524",":fire:":"1f525",":flashlight:":"1f526",":wrench:":"1f527",":hammer:":"1f528",":nut_and_bolt:":"1f529",":hocho:":"1f52a",":knife:":"1f52a",":gun:":"1f52b",":microscope:":"1f52c",":telescope:":"1f52d",":crystal_ball:":"1f52e",":six_pointed_star:":"1f52f",":beginner:":"1f530",":trident:":"1f531",":black_square_button:":"1f532",":white_square_button:":"1f533",":red_circle:":"1f534",":large_blue_circle:":"1f535",":large_orange_diamond:":"1f536",":large_blue_diamond:":"1f537",":small_orange_diamond:":"1f538",":small_blue_diamond:":"1f539",":small_red_triangle:":"1f53a",":small_red_triangle_down:":"1f53b",":arrow_up_small:":"1f53c",":arrow_down_small:":"1f53d",":om_symbol:":"1f549",":dove_of_peace:":"1f54a",":kaaba:":"1f54b",":mosque:":"1f54c",":synagogue:":"1f54d",":menorah_with_nine_branches:":"1f54e",":clock1:":"1f550",":clock2:":"1f551",":clock3:":"1f552",":clock4:":"1f553",":clock5:":"1f554",":clock6:":"1f555",":clock7:":"1f556",":clock8:":"1f557",":clock9:":"1f558",":clock10:":"1f559",":clock11:":"1f55a",":clock12:":"1f55b",":clock130:":"1f55c",":clock230:":"1f55d",":clock330:":"1f55e",":clock430:":"1f55f",":clock530:":"1f560",":clock630:":"1f561",":clock730:":"1f562",":clock830:":"1f563",":clock930:":"1f564",":clock1030:":"1f565",":clock1130:":"1f566",":clock1230:":"1f567",":candle:":"1f56f",":mantelpiece_clock:":"1f570",":hole:":"1f573",":man_in_business_suit_levitating:":"1f574",":sleuth_or_spy:":"1f575",":dark_sunglasses:":"1f576",":spider:":"1f577",":spider_web:":"1f578",":joystick:":"1f579",":linked_paperclips:":"1f587",":lower_left_ballpoint_pen:":"1f58a",":lower_left_fountain_pen:":"1f58b",":lower_left_paintbrush:":"1f58c",":lower_left_crayon:":"1f58d",":raised_hand_with_fingers_splayed:":"1f590",":middle_finger:":"1f595",":reversed_hand_with_middle_finger_extended:":"1f595",":spock-hand:":"1f596",":desktop_computer:":"1f5a5",":printer:":"1f5a8",":three_button_mouse:":"1f5b1",":trackball:":"1f5b2",":frame_with_picture:":"1f5bc",":card_index_dividers:":"1f5c2",":card_file_box:":"1f5c3",":file_cabinet:":"1f5c4",":wastebasket:":"1f5d1",":spiral_note_pad:":"1f5d2",":spiral_calendar_pad:":"1f5d3",":compression:":"1f5dc",":old_key:":"1f5dd",":rolled_up_newspaper:":"1f5de",":dagger_knife:":"1f5e1",":speaking_head_in_silhouette:":"1f5e3",":left_speech_bubble:":"1f5e8",":right_anger_bubble:":"1f5ef",":ballot_box_with_ballot:":"1f5f3",":world_map:":"1f5fa",":mount_fuji:":"1f5fb",":tokyo_tower:":"1f5fc",":statue_of_liberty:":"1f5fd",":japan:":"1f5fe",":moyai:":"1f5ff",":grinning:":"1f600",":grin:":"1f601",":joy:":"1f602",":smiley:":"1f603",":smile:":"1f604",":sweat_smile:":"1f605",":laughing:":"1f606",":satisfied:":"1f606",":innocent:":"1f607",":smiling_imp:":"1f608",":wink:":"1f609",":blush:":"1f60a",":yum:":"1f60b",":relieved:":"1f60c",":heart_eyes:":"1f60d",":sunglasses:":"1f60e",":smirk:":"1f60f",":neutral_face:":"1f610",":expressionless:":"1f611",":unamused:":"1f612",":sweat:":"1f613",":pensive:":"1f614",":confused:":"1f615",":confounded:":"1f616",":kissing:":"1f617",":kissing_heart:":"1f618",":kissing_smiling_eyes:":"1f619",":kissing_closed_eyes:":"1f61a",":stuck_out_tongue:":"1f61b",":stuck_out_tongue_winking_eye:":"1f61c",":stuck_out_tongue_closed_eyes:":"1f61d",":disappointed:":"1f61e",":worried:":"1f61f",":angry:":"1f620",":rage:":"1f621",":cry:":"1f622",":persevere:":"1f623",":triumph:":"1f624",":disappointed_relieved:":"1f625",":frowning:":"1f626",":anguished:":"1f627",":fearful:":"1f628",":weary:":"1f629",":sleepy:":"1f62a",":tired_face:":"1f62b",":grimacing:":"1f62c",":sob:":"1f62d",":open_mouth:":"1f62e",":hushed:":"1f62f",":cold_sweat:":"1f630",":scream:":"1f631",":astonished:":"1f632",":flushed:":"1f633",":sleeping:":"1f634",":dizzy_face:":"1f635",":no_mouth:":"1f636",":mask:":"1f637",":smile_cat:":"1f638",":joy_cat:":"1f639",":smiley_cat:":"1f63a",":heart_eyes_cat:":"1f63b",":smirk_cat:":"1f63c",":kissing_cat:":"1f63d",":pouting_cat:":"1f63e",":crying_cat_face:":"1f63f",":scream_cat:":"1f640",":slightly_frowning_face:":"1f641",":slightly_smiling_face:":"1f642",":upside_down_face:":"1f643",":face_with_rolling_eyes:":"1f644",":no_good:":"1f645",":ok_woman:":"1f646",":bow:":"1f647",":see_no_evil:":"1f648",":hear_no_evil:":"1f649",":speak_no_evil:":"1f64a",":raising_hand:":"1f64b",":raised_hands:":"1f64c",":person_frowning:":"1f64d",":person_with_pouting_face:":"1f64e",":pray:":"1f64f",":rocket:":"1f680",":helicopter:":"1f681",":steam_locomotive:":"1f682",":railway_car:":"1f683",":bullettrain_side:":"1f684",":bullettrain_front:":"1f685",":train2:":"1f686",":metro:":"1f687",":light_rail:":"1f688",":station:":"1f689",":tram:":"1f68a",":train:":"1f68b",":bus:":"1f68c",":oncoming_bus:":"1f68d",":trolleybus:":"1f68e",":busstop:":"1f68f",":minibus:":"1f690",":ambulance:":"1f691",":fire_engine:":"1f692",":police_car:":"1f693",":oncoming_police_car:":"1f694",":taxi:":"1f695",":oncoming_taxi:":"1f696",":car:":"1f697",":red_car:":"1f697",":oncoming_automobile:":"1f698",":blue_car:":"1f699",":truck:":"1f69a",":articulated_lorry:":"1f69b",":tractor:":"1f69c",":monorail:":"1f69d",":mountain_railway:":"1f69e",":suspension_railway:":"1f69f",":mountain_cableway:":"1f6a0",":aerial_tramway:":"1f6a1",":ship:":"1f6a2",":rowboat:":"1f6a3",":speedboat:":"1f6a4",":traffic_light:":"1f6a5",":vertical_traffic_light:":"1f6a6",":construction:":"1f6a7",":rotating_light:":"1f6a8",":triangular_flag_on_post:":"1f6a9",":door:":"1f6aa",":no_entry_sign:":"1f6ab",":smoking:":"1f6ac",":no_smoking:":"1f6ad",":put_litter_in_its_place:":"1f6ae",":do_not_litter:":"1f6af",":potable_water:":"1f6b0",":non-potable_water:":"1f6b1",":bike:":"1f6b2",":no_bicycles:":"1f6b3",":bicyclist:":"1f6b4",":mountain_bicyclist:":"1f6b5",":walking:":"1f6b6",":no_pedestrians:":"1f6b7",":children_crossing:":"1f6b8",":mens:":"1f6b9",":womens:":"1f6ba",":restroom:":"1f6bb",":baby_symbol:":"1f6bc",":toilet:":"1f6bd",":wc:":"1f6be",":shower:":"1f6bf",":bath:":"1f6c0",":bathtub:":"1f6c1",":passport_control:":"1f6c2",":customs:":"1f6c3",":baggage_claim:":"1f6c4",":left_luggage:":"1f6c5",":couch_and_lamp:":"1f6cb",":sleeping_accommodation:":"1f6cc",":shopping_bags:":"1f6cd",":bellhop_bell:":"1f6ce",":bed:":"1f6cf",":place_of_worship:":"1f6d0",":hammer_and_wrench:":"1f6e0",":shield:":"1f6e1",":oil_drum:":"1f6e2",":motorway:":"1f6e3",":railway_track:":"1f6e4",":motor_boat:":"1f6e5",":small_airplane:":"1f6e9",":airplane_departure:":"1f6eb",":airplane_arriving:":"1f6ec",":satellite:":"1f6f0",":passenger_ship:":"1f6f3",":zipper_mouth_face:":"1f910",":money_mouth_face:":"1f911",":face_with_thermometer:":"1f912",":nerd_face:":"1f913",":thinking_face:":"1f914",":face_with_head_bandage:":"1f915",":robot_face:":"1f916",":hugging_face:":"1f917",":the_horns:":"1f918",":sign_of_the_horns:":"1f918",":crab:":"1f980",":lion_face:":"1f981",":scorpion:":"1f982",":turkey:":"1f983",":unicorn_face:":"1f984",":cheese_wedge:":"1f9c0",":hash:":"0023-20e3",":keycap_star:":"002a-20e3",":zero:":"0030-20e3",":one:":"0031-20e3",":two:":"0032-20e3",":three:":"0033-20e3",":four:":"0034-20e3",":five:":"0035-20e3",":six:":"0036-20e3",":seven:":"0037-20e3",":eight:":"0038-20e3",":nine:":"0039-20e3",":man-man-boy:":"1f468-200d-1f468-200d-1f466",":man-man-boy-boy:":"1f468-200d-1f468-200d-1f466-200d-1f466",":man-man-girl:":"1f468-200d-1f468-200d-1f467",":man-man-girl-boy:":"1f468-200d-1f468-200d-1f467-200d-1f466",":man-man-girl-girl:":"1f468-200d-1f468-200d-1f467-200d-1f467",":man-woman-boy-boy:":"1f468-200d-1f469-200d-1f466-200d-1f466",":man-woman-girl:":"1f468-200d-1f469-200d-1f467",":man-woman-girl-boy:":"1f468-200d-1f469-200d-1f467-200d-1f466",":man-woman-girl-girl:":"1f468-200d-1f469-200d-1f467-200d-1f467",":man-heart-man:":"1f468-200d-2764-fe0f-200d-1f468",":man-kiss-man:":"1f468-200d-2764-fe0f-200d-1f48b-200d-1f468",":woman-woman-boy:":"1f469-200d-1f469-200d-1f466",":woman-woman-boy-boy:":"1f469-200d-1f469-200d-1f466-200d-1f466",":woman-woman-girl:":"1f469-200d-1f469-200d-1f467",":woman-woman-girl-boy:":"1f469-200d-1f469-200d-1f467-200d-1f466",":woman-woman-girl-girl:":"1f469-200d-1f469-200d-1f467-200d-1f467",":woman-heart-woman:":"1f469-200d-2764-fe0f-200d-1f469",":woman-kiss-woman:":"1f469-200d-2764-fe0f-200d-1f48b-200d-1f469"};t.mapStringToUnicode=n;var r=new Set(["__defineGetter__","__defineSetter__","__lookupGetter__","__lookupSetter__","__proto__","constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]),s=function(c){var l=c&&c.split(" "),h=[];return l&&l.forEach(function(f){var d=f;f in r?d=f:f in e&&(d=e[f]),h.push(d)}),h.join(" ")};t.checkText=s;var i=function(c,l){return Object.keys(c).filter(function(h){return h.startsWith(l)})};t.keysStartingWith=i;var o=function(c){var l=c&&c.split(" "),h=[];return l&&l.forEach(function(f){var d=f;if(f in r)d=f;else if(f in e)d=e[f];else{var D=i(e,f);D.length===1&&(d=e[D[0]])}h.push(d)}),h.join(" ")};t.checkTextWithAutoSuggestions=o;var a=function(c){return String.fromCodePoint(parseInt(c,16))};t.fromUnicodeToEmoji=a;var u=function(c){var l=c&&c.split(" "),h=[];return l&&l.forEach(function(f){var d=f;if(f in r)d=f;else if(f in n)d=a(n[f]);else{var D=i(n,f);D.length===1&&(d=a(n[D[0]]))}h.push(d)}),h.join(" ")};t.checkTextWithAutoSuggestionsAndUnicode=u})(O0);const v4={class:"bg-white p-2 rounded-md flex flex-col shadow-md msg"},w4={class:"font-bold"},b4={__name:"Message",props:{author:{type:String},message:{type:String}},setup(t){const e=t,{author:n,message:r}=e;return(s,i)=>(le(),je("li",v4,[ae("span",w4,Cn(De(n))+":",1),ae("span",null,Cn(De(O0.checkText)(De(r))),1)]))}},E4=hn(b4,[["__scopeId","data-v-08eeda86"]]);const C4={class:"container mx-auto"},I4={class:"main-wrapper flex flex-col bg-lime-200 rounded-md overflow-hidden shadow-md"},T4={key:0,class:"text-red-500"},k4={key:1,class:"chat-logs flex flex-col place-content-between"},A4={class:"p-4 flex flex-col gap-y-2"},S4=["onSubmit"],x4={type:"submit"},R4={__name:"Logs",setup(t){const e=Fe(),n=GE(),r=zr(),s=Fe(""),i=Fe(!1),o=Fe([]),a=Fe(""),u=Fe(!1),c=Fe(!1),l=()=>{const h=En(Zn,"chats",e.value),f=xl(h,e.value);a.value.length<1||c.value||(c.value=!0,u.value=!0,g0(f,{time:new Date().getTime(),author:r.user.nickname,message:a.value}),a.value="",setTimeout(()=>{u.value=!1,c.value=!1},1e3))};return Mm(async()=>{await r.ifLoggedIn()||(console.log("User is not"),Pa.push({name:"home"}))}),ih(async()=>{e.value=n.params.id;try{const h=En(Zn,"chats",e.value);if((await Vi(h)).data()!==void 0){const d=xl(h,e.value),D=await cx(d);console.log("bbz",D);const y=sx(d,ix("time"),ox(10));m0(y,_=>{const k=[];_.forEach(C=>{console.log(C.id," => ",C.data()),k.unshift({id:C.id,author:C.data().author,message:C.data().message})}),o.value=k})}else s.value="Chat not found",console.log("nera")}catch(h){s.value="Lobby doesn't exist or something went wrong",i.value=!1,console.log(h)}console.log("lobbyid: "+e.value)}),(h,f)=>{const d=dw("auto-animate");return le(),je("div",C4,[ae("div",I4,[ye(N0,null,{id:yt(()=>[ae("span",null,"Current Lobby id: "+Cn(e.value),1)]),default:yt(()=>[ye(kr,{onClick:f[0]||(f[0]=D=>De(Pa).push({path:"/"}))},{default:yt(()=>[nn("Back")]),_:1})]),_:1}),s.value!==""?(le(),je("span",T4,Cn(s.value),1)):(le(),je("div",k4,[ta((le(),je("ul",A4,[(le(!0),je(mt,null,pw(o.value,D=>(le(),_t(E4,{author:D.author,message:D.message,key:D.id},null,8,["author","message"]))),128))])),[[d]])])),ae("form",{onSubmit:ph(l,["prevent"]),class:"flex place-items-center gap-x-2 p-4 align-text-top md:justify-stretch"},[ta(ae("input",{type:"text",maxlength:"150","onUpdate:modelValue":f[1]||(f[1]=D=>a.value=D),class:"max-h-40 rounded-md shadow-md pb-20 pl-2"},null,512),[[dh,a.value,void 0,{trim:!0}]]),ae("button",x4,[ye(De(Vu),{icon:"bi:send-fill",class:Ki([{typed:u.value},"text-2xl"])},null,8,["class"])])],40,S4)])])}}},F4=hn(R4,[["__scopeId","data-v-2ab97da4"]]);const P0=t=>(K1("data-v-462f9c3a"),t=t(),W1(),t),N4={class:"container mx-auto"},O4={class:"uppercase",key:1},P4=P0(()=>ae("p",{key:"1"}," Chatzy is a chat application built with VUE.JS where you can chat with your friends! ",-1)),M4=P0(()=>ae("span",{key:"3"},"Sign In with Google",-1)),L4={__name:"SignIn",setup(t){const e=zr();return(n,r)=>{const s=Bm("XyzTransitionGroup");return le(),je("div",N4,[ye(s,{appear:"",class:"bbz text-center flex flex-col place-items-center"},{default:yt(()=>[(le(),je("h1",O4,"Chatzy")),P4,ae("button",{class:"flex justify-center place-items-center gap-2 bg-lime-500 text-white font-bold p-3 mt-3 rounded-lg hover:bg-lime-600 duration-500",onClick:r[0]||(r[0]=(...i)=>De(e).signIn&&De(e).signIn(...i)),key:"2"},[M4,ye(De(Vu),{icon:"mdi:google"})])]),_:1})])}}},$4=hn(L4,[["__scopeId","data-v-462f9c3a"]]),U4={key:0,class:"text-center"},B4=ae("span",null,"Looks like It's your first time here. ",-1),V4=ae("span",null,"Please enter your username, It will be visible to other chat members.",-1),j4={__name:"CreateUsername",setup(t){const e=Fe(""),n=zr();return(r,s)=>De(n).user.fetchingUser?Vt("",!0):(le(),je("div",U4,[B4,V4,ae("form",{onSubmit:s[1]||(s[1]=ph(i=>De(n).registerUser(e.value),["prevent"])),class:"flex flex-col place-items-center gap-y-4"},[ta(ae("input",{type:"text",maxlength:"10",placeholder:"Your username","onUpdate:modelValue":s[0]||(s[0]=i=>e.value=i),class:"p-2 rounded-lg shadow-md mt-3"},null,512),[[dh,e.value]]),ye(kr,null,{default:yt(()=>[nn("Im ready!")]),_:1})],32)]))}};function z4(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var qi={exports:{}};const q4={},H4=Object.freeze(Object.defineProperty({__proto__:null,default:q4},Symbol.toStringTag,{value:"Module"})),K4=_4(H4);var M0=typeof process<"u"&&process.pid?process.pid.toString(36):"",L0="";if(typeof __webpack_require__!="function"&&typeof z4<"u"){var Ac="",Zg=K4;if(Zg.networkInterfaces)var Sc=Zg.networkInterfaces();if(Sc){e:for(let t in Sc){const e=Sc[t],n=e.length;for(var Xr=0;Xr<n;Xr++)if(e[Xr]!==void 0&&e[Xr].mac&&e[Xr].mac!="00:00:00:00:00:00"){Ac=e[Xr].mac;break e}}L0=Ac?parseInt(Ac.replace(/\:|\D+/gi,"")).toString(36):""}}qi.exports=qi.exports.default=function(t,e){return(t||"")+L0+M0+Hi().toString(36)+(e||"")};qi.exports.process=function(t,e){return(t||"")+M0+Hi().toString(36)+(e||"")};qi.exports.time=function(t,e){return(t||"")+Hi().toString(36)+(e||"")};function Hi(){var t=Date.now(),e=Hi.last||t;return Hi.last=t>e?t:e+1}var W4=qi.exports;const G4=y4(W4),Q4={key:0,class:"modal fixed w-screen h-screen flex flex-col justify-center place-items-center"},Y4={class:"modal-content container bg-lime-400 flex flex-col relative z-10"},X4={class:"modal-top text-center p-4"},J4={class:"modal-center text-center bg-white p-2"},Z4={key:1},eR={__name:"CreateLobby",props:{toggle:{type:Boolean}},setup(t){const e=t,n=zr(),r=Fe(!1),s=Fe(!1),i=Fe("Create a lobby");let o;const a=async()=>{o=G4();const u=En(Zn,"users",n.user.uid);if((await Vi(u)).data().lobby){r.value=!0,i.value="You already have a lobby!",console.log("yra jau");return}const l=En(Zn,"chats",o),h=xl(l,o);await Vi(l),await p0(l,{}),await g0(h,{}),await lx(u,{lobby:o}),s.value=!0,i.value="Lobby created!"};return(u,c)=>e.toggle?(le(),je("div",Q4,[ae("div",{class:"overlay fixed w-screen h-screen bg-lime-950 bg-opacity-30 blur-md top-0 left-0",onClick:c[0]||(c[0]=l=>u.$emit("toggle-back"))}),ae("div",Y4,[ae("div",X4,Cn(i.value),1),ae("div",J4,[!r.value&&!s.value?(le(),_t(kr,{key:0,onClick:a},{default:yt(()=>[nn(" Create ")]),_:1})):Vt("",!0),s.value?(le(),je("div",Z4,[ae("span",null,"Your lobby code: "+Cn(De(o)),1)])):Vt("",!0)])])])):Vt("",!0)}},tR={key:0,class:"modal fixed w-screen h-screen flex flex-col justify-center place-items-center"},nR={class:"modal-content container bg-lime-400 flex flex-col relative z-10"},rR=ae("div",{class:"modal-top text-center p-4"},[ae("span",null,"Enter a Lobby Code")],-1),sR={class:"modal-center text-center bg-white p-2"},iR=["onSubmit"],oR={key:1,class:"text-red-700 text-sm"},aR={__name:"JoinLobby",props:{toggle:{type:Boolean}},setup(t){const e=t,n=Fe(),r=Fe(),s=async()=>{try{const o=En(Zn,"chats",r.value);(await Vi(o)).data()!==void 0?(n.value="",Pa.push({path:`/chat&id=${r.value}`})):n.value="Something went wrong or lobby doesn't exist"}catch{n.value="Something went wrong or lobby doesn't exist"}},i=()=>{navigator.clipboard.readText().then(o=>{r.value=o}).catch(o=>{})};return(o,a)=>e.toggle?(le(),je("div",tR,[ae("div",{class:"overlay fixed w-screen h-screen bg-lime-950 bg-opacity-30 blur-md top-0 left-0",onClick:a[0]||(a[0]=u=>o.$emit("toggle-back"))}),ae("div",nR,[rR,ae("div",sR,[ae("form",{class:"flex flex-col gap-y-2 justify-center place-items-center",onSubmit:ph(s,["prevent"])},[ye(De(Vu),{icon:"mdi:content-paste",onClick:i,class:"text-lg"}),ta(ae("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=u=>r.value=u),placeholder:"Lobby Code",class:"bg-lime-200 text-center place-self-stretch"},null,512),[[dh,r.value,void 0,{trim:!0}]]),!o.lobbyExist&&!o.lobbyCreated?(le(),_t(kr,{key:0,class:"place-self-stretch",onClick:o.makeLobby},{default:yt(()=>[nn(" Join ")]),_:1},8,["onClick"])):Vt("",!0),n.value!==""?(le(),je("span",oR,Cn(n.value),1)):Vt("",!0)],40,iR)])])])):Vt("",!0)}};const uR={class:"actions flex flex-col gap-y-4 p-4 justify-center place-items-center place-content-center"},cR={__name:"Actions",setup(t){const e=Fe(!1),n=Fe(!1);console.log("hi2");const r=()=>{e.value=!e.value},s=()=>{n.value=!n.value};return(i,o)=>(le(),je("div",uR,[n.value?(le(),_t(aR,{key:0,toggle:n.value,onToggleBack:s},null,8,["toggle"])):Vt("",!0),e.value?(le(),_t(eR,{key:1,toggle:e.value,onToggleBack:r},null,8,["toggle"])):Vt("",!0),ye(kr,{onClick:r},{default:yt(()=>[nn("Create chat lobby")]),_:1}),ye(kr,{onClick:s},{default:yt(()=>[nn("Join chat lobby")]),_:1})]))}},lR=hn(cR,[["__scopeId","data-v-1357e2f8"]]);const hR={class:"main-wrapper flex flex-col bg-lime-200 rounded-md overflow-hidden shadow-md"},fR={__name:"ChatContent",setup(t){return(e,n)=>(le(),je("div",hR,[ye(N0),ye(lR)]))}},dR=hn(fR,[["__scopeId","data-v-ed8cdaf4"]]);const pR={class:"container mx-auto"},gR={__name:"Chat",setup(t){const e=zr();return(n,r)=>(le(),_t(Wi,{name:"fade",mode:"out-in"},{default:yt(()=>[ae("div",pR,[De(e).user.exist?(le(),_t(dR,{key:1})):(le(),_t(j4,{key:0}))])]),_:1}))}},mR=hn(gR,[["__scopeId","data-v-fe711c75"]]),DR={__name:"ChatView",setup(t){const e=zr();return(n,r)=>{const s=Bm("loading");return De(e).fetchingUser?(le(),_t(s,{key:0})):!De(e).user.auth&&!De(e).fetchingUser?(le(),_t($4,{key:1})):De(e).user.auth&&!De(e).fetchingUser?(le(),_t(mR,{key:2})):Vt("",!0)}}},Pa=HE({history:uE("/"),routes:[{path:"/",name:"home",props:!0,component:DR},{path:"/chat&id=:id",name:"chat",props:!0,component:F4}]}),$0=new Set,wt=new WeakMap,ps=new WeakMap,Mr=new WeakMap,Ul=new WeakMap,yR=new WeakMap,Ss=new WeakMap,Ma=new WeakMap,ni=new WeakSet;let Lr;const wn="__aa_tgt",Bl="__aa_del",_R=t=>{const e=CR(t);e&&e.forEach(n=>IR(n))},vR=t=>{t.forEach(e=>{e.target===Lr&&bR(),wt.has(e.target)&&qr(e.target)})};function wR(t){const e=Ul.get(t);e==null||e.disconnect();let n=wt.get(t),r=0;const s=5;n||(n=xs(t),wt.set(t,n));const{offsetWidth:i,offsetHeight:o}=Lr,u=[n.top-s,i-(n.left+s+n.width),o-(n.top+s+n.height),n.left-s].map(l=>`${-1*Math.floor(l)}px`).join(" "),c=new IntersectionObserver(()=>{++r>1&&qr(t)},{root:Lr,threshold:1,rootMargin:u});c.observe(t),Ul.set(t,c)}function qr(t){clearTimeout(Ma.get(t));const e=ju(t),n=typeof e=="function"?500:e.duration;Ma.set(t,setTimeout(async()=>{const r=Mr.get(t);try{await(r==null?void 0:r.finished),wt.set(t,xs(t)),wR(t)}catch{}},n))}function bR(){clearTimeout(Ma.get(Lr)),Ma.set(Lr,setTimeout(()=>{$0.forEach(t=>j0(t,e=>U0(()=>qr(e))))},100))}function ER(t){setTimeout(()=>{yR.set(t,setInterval(()=>U0(qr.bind(null,t)),2e3))},Math.round(2e3*Math.random()))}function U0(t){typeof requestIdleCallback=="function"?requestIdleCallback(()=>t()):requestAnimationFrame(()=>t())}let Vl,rs;typeof window<"u"&&(Lr=document.documentElement,Vl=new MutationObserver(_R),rs=new ResizeObserver(vR),rs.observe(Lr));function CR(t){return t.reduce((r,s)=>[...r,...Array.from(s.addedNodes),...Array.from(s.removedNodes)],[]).every(r=>r.nodeName==="#comment")?!1:t.reduce((r,s)=>{if(r===!1)return!1;if(s.target instanceof Element){if(xc(s.target),!r.has(s.target)){r.add(s.target);for(let i=0;i<s.target.children.length;i++){const o=s.target.children.item(i);if(o){if(Bl in o)return!1;xc(s.target,o),r.add(o)}}}if(s.removedNodes.length)for(let i=0;i<s.removedNodes.length;i++){const o=s.removedNodes[i];if(Bl in o)return!1;o instanceof Element&&(r.add(o),xc(s.target,o),ps.set(o,[s.previousSibling,s.nextSibling]))}}return r},new Set)}function xc(t,e){!e&&!(wn in t)?Object.defineProperty(t,wn,{value:t}):e&&!(wn in e)&&Object.defineProperty(e,wn,{value:t})}function IR(t){var e;const n=t.isConnected,r=wt.has(t);n&&ps.has(t)&&ps.delete(t),Mr.has(t)&&((e=Mr.get(t))===null||e===void 0||e.cancel()),r&&n?TR(t):r&&!n?AR(t):kR(t)}function Xt(t){return Number(t.replace(/[^0-9.\-]/g,""))}function xs(t){const e=t.getBoundingClientRect();return{top:e.top+window.scrollY,left:e.left+window.scrollX,width:e.width,height:e.height}}function B0(t,e,n){let r=e.width,s=e.height,i=n.width,o=n.height;const a=getComputedStyle(t);if(a.getPropertyValue("box-sizing")==="content-box"){const c=Xt(a.paddingTop)+Xt(a.paddingBottom)+Xt(a.borderTopWidth)+Xt(a.borderBottomWidth),l=Xt(a.paddingLeft)+Xt(a.paddingRight)+Xt(a.borderRightWidth)+Xt(a.borderLeftWidth);r-=l,i-=l,s-=c,o-=c}return[r,i,s,o].map(Math.round)}function ju(t){return wn in t&&Ss.has(t[wn])?Ss.get(t[wn]):{duration:250,easing:"ease-in-out"}}function V0(t){if(wn in t)return t[wn]}function Yf(t){const e=V0(t);return e?ni.has(e):!1}function j0(t,...e){e.forEach(n=>n(t,Ss.has(t)));for(let n=0;n<t.children.length;n++){const r=t.children.item(n);r&&e.forEach(s=>s(r,Ss.has(r)))}}function TR(t){const e=wt.get(t),n=xs(t);if(!Yf(t))return wt.set(t,n);let r;if(!e)return;const s=ju(t);if(typeof s!="function"){const i=e.left-n.left,o=e.top-n.top,[a,u,c,l]=B0(t,e,n),h={transform:`translate(${i}px, ${o}px)`},f={transform:"translate(0, 0)"};a!==u&&(h.width=`${a}px`,f.width=`${u}px`),c!==l&&(h.height=`${c}px`,f.height=`${l}px`),r=t.animate([h,f],{duration:s.duration,easing:s.easing})}else r=new Animation(s(t,"remain",e,n)),r.play();Mr.set(t,r),wt.set(t,n),r.addEventListener("finish",qr.bind(null,t))}function kR(t){const e=xs(t);wt.set(t,e);const n=ju(t);if(!Yf(t))return;let r;typeof n!="function"?r=t.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"}):(r=new Animation(n(t,"add",e)),r.play()),Mr.set(t,r),r.addEventListener("finish",qr.bind(null,t))}function AR(t){var e;if(!ps.has(t)||!wt.has(t))return;const[n,r]=ps.get(t);Object.defineProperty(t,Bl,{value:!0}),r&&r.parentNode&&r.parentNode instanceof Element?r.parentNode.insertBefore(t,r):n&&n.parentNode?n.parentNode.appendChild(t):(e=V0(t))===null||e===void 0||e.appendChild(t);function s(){var f;t.remove(),wt.delete(t),ps.delete(t),Mr.delete(t),(f=Ul.get(t))===null||f===void 0||f.disconnect()}if(!Yf(t))return s();const[i,o,a,u]=SR(t),c=ju(t),l=wt.get(t);let h;Object.assign(t.style,{position:"absolute",top:`${i}px`,left:`${o}px`,width:`${a}px`,height:`${u}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),typeof c!="function"?h=t.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:c.duration,easing:"ease-out"}):(h=new Animation(c(t,"remove",l)),h.play()),Mr.set(t,h),h.addEventListener("finish",s)}function SR(t){const e=wt.get(t),[n,,r]=B0(t,e,xs(t));let s=t.parentElement;for(;s&&(getComputedStyle(s).position==="static"||s instanceof HTMLBodyElement);)s=s.parentElement;s||(s=document.body);const i=getComputedStyle(s),o=wt.get(s)||xs(s),a=Math.round(e.top-o.top)-Xt(i.borderTopWidth),u=Math.round(e.left-o.left)-Xt(i.borderLeftWidth);return[a,u,n,r]}function xR(t,e={}){return Vl&&rs&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&typeof e!="function"&&!e.disrespectUserMotionPreference||(ni.add(t),getComputedStyle(t).position==="static"&&Object.assign(t.style,{position:"relative"}),j0(t,qr,ER,s=>rs==null?void 0:rs.observe(s)),typeof e=="function"?Ss.set(t,e):Ss.set(t,{duration:250,easing:"ease-in-out",...e}),Vl.observe(t,{childList:!0}),$0.add(t))),Object.freeze({parent:t,enable:()=>{ni.add(t)},disable:()=>{ni.delete(t)},isEnabled:()=>ni.has(t)})}const RR={mounted:(t,e)=>{xR(t,e.value||{})}},FR={install(t){t.directive("auto-animate",RR)}},js=Cb(XE);js.component("loading",xb);js.use(Fb());js.use(qb);js.use(Pa);js.use(FR);js.mount("#app");
