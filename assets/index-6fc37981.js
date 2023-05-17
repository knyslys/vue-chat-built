(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function vu(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const be={},Ys=[],Mt=()=>{},d0=()=>!1,p0=/^on[^a-z]/,wa=t=>p0.test(t),wu=t=>t.startsWith("onUpdate:"),Fe=Object.assign,_u=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},g0=Object.prototype.hasOwnProperty,le=(t,e)=>g0.call(t,e),G=Array.isArray,Xs=t=>_a(t)==="[object Map]",Cg=t=>_a(t)==="[object Set]",re=t=>typeof t=="function",je=t=>typeof t=="string",Eu=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",Ag=t=>ke(t)&&re(t.then)&&re(t.catch),kg=Object.prototype.toString,_a=t=>kg.call(t),m0=t=>_a(t).slice(8,-1),Rg=t=>_a(t)==="[object Object]",Iu=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Eo=vu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ea=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},y0=/-(\w)/g,nn=Ea(t=>t.replace(y0,(e,n)=>n?n.toUpperCase():"")),v0=/\B([A-Z])/g,_r=Ea(t=>t.replace(v0,"-$1").toLowerCase()),Ia=Ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ic=Ea(t=>t?`on${Ia(t)}`:""),ri=(t,e)=>!Object.is(t,e),Io=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Fo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ll=t=>{const e=parseFloat(t);return isNaN(e)?t:e},w0=t=>{const e=je(t)?Number(t):NaN;return isNaN(e)?t:e};let Cf;const ul=()=>Cf||(Cf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bu(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=je(s)?b0(s):bu(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(je(t))return t;if(ke(t))return t}}const _0=/;(?![^(]*\))/g,E0=/:([^]+)/,I0=new RegExp("\\/\\*.*?\\*\\/","gs");function b0(t){const e={};return t.replace(I0,"").split(_0).forEach(n=>{if(n){const s=n.split(E0);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Tu(t){let e="";if(je(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=Tu(t[n]);s&&(e+=s+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const T0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",S0=vu(T0);function xg(t){return!!t||t===""}const Kn=t=>je(t)?t:t==null?"":G(t)||ke(t)&&(t.toString===kg||!re(t.toString))?JSON.stringify(t,Ng,2):String(t),Ng=(t,e)=>e&&e.__v_isRef?Ng(t,e.value):Xs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Cg(e)?{[`Set(${e.size})`]:[...e.values()]}:ke(e)&&!G(e)&&!Rg(e)?String(e):e;let Et;class Dg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Et,!e&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){Et=this}off(){Et=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Og(t){return new Dg(t)}function C0(t,e=Et){e&&e.active&&e.effects.push(t)}function Pg(){return Et}function A0(t){Et&&Et.cleanups.push(t)}const Su=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Mg=t=>(t.w&Wn)>0,Lg=t=>(t.n&Wn)>0,k0=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Wn},R0=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Mg(r)&&!Lg(r)?r.delete(t):e[n++]=r,r.w&=~Wn,r.n&=~Wn}e.length=n}},$o=new WeakMap;let Fr=0,Wn=1;const hl=30;let Dt;const ps=Symbol(""),fl=Symbol("");class Cu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,C0(this,s)}run(){if(!this.active)return this.fn();let e=Dt,n=Fn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Dt,Dt=this,Fn=!0,Wn=1<<++Fr,Fr<=hl?k0(this):Af(this),this.fn()}finally{Fr<=hl&&R0(this),Wn=1<<--Fr,Dt=this.parent,Fn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(Af(this),this.onStop&&this.onStop(),this.active=!1)}}function Af(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Fn=!0;const Fg=[];function Er(){Fg.push(Fn),Fn=!1}function Ir(){const t=Fg.pop();Fn=t===void 0?!0:t}function wt(t,e,n){if(Fn&&Dt){let s=$o.get(t);s||$o.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Su()),$g(r)}}function $g(t,e){let n=!1;Fr<=hl?Lg(t)||(t.n|=Wn,n=!Mg(t)):n=!t.has(Dt),n&&(t.add(Dt),Dt.deps.push(t))}function yn(t,e,n,s,r,i){const o=$o.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?Iu(n)&&a.push(o.get("length")):(a.push(o.get(ps)),Xs(t)&&a.push(o.get(fl)));break;case"delete":G(t)||(a.push(o.get(ps)),Xs(t)&&a.push(o.get(fl)));break;case"set":Xs(t)&&a.push(o.get(ps));break}if(a.length===1)a[0]&&dl(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);dl(Su(c))}}function dl(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&kf(s);for(const s of n)s.computed||kf(s)}function kf(t,e){(t!==Dt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function x0(t,e){var n;return(n=$o.get(t))==null?void 0:n.get(e)}const N0=vu("__proto__,__v_isRef,__isVue"),Ug=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Eu)),D0=Au(),O0=Au(!1,!0),P0=Au(!0),Rf=M0();function M0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ae(this);for(let i=0,o=this.length;i<o;i++)wt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ae)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Er();const s=ae(this)[e].apply(this,n);return Ir(),s}}),t}function L0(t){const e=ae(this);return wt(e,"has",t),e.hasOwnProperty(t)}function Au(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?J0:qg:e?zg:jg).get(s))return s;const o=G(s);if(!t){if(o&&le(Rf,r))return Reflect.get(Rf,r,i);if(r==="hasOwnProperty")return L0}const a=Reflect.get(s,r,i);return(Eu(r)?Ug.has(r):N0(r))||(t||wt(s,"get",r),e)?a:Me(a)?o&&Iu(r)?a:a.value:ke(a)?t?Hg(a):br(a):a}}const F0=Vg(),$0=Vg(!0);function Vg(t=!1){return function(n,s,r,i){let o=n[s];if(or(o)&&Me(o)&&!Me(r))return!1;if(!t&&(!Uo(r)&&!or(r)&&(o=ae(o),r=ae(r)),!G(n)&&Me(o)&&!Me(r)))return o.value=r,!0;const a=G(n)&&Iu(s)?Number(s)<n.length:le(n,s),c=Reflect.set(n,s,r,i);return n===ae(i)&&(a?ri(r,o)&&yn(n,"set",s,r):yn(n,"add",s,r)),c}}function U0(t,e){const n=le(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&yn(t,"delete",e,void 0),s}function V0(t,e){const n=Reflect.has(t,e);return(!Eu(e)||!Ug.has(e))&&wt(t,"has",e),n}function B0(t){return wt(t,"iterate",G(t)?"length":ps),Reflect.ownKeys(t)}const Bg={get:D0,set:F0,deleteProperty:U0,has:V0,ownKeys:B0},j0={get:P0,set(t,e){return!0},deleteProperty(t,e){return!0}},z0=Fe({},Bg,{get:O0,set:$0}),ku=t=>t,ba=t=>Reflect.getPrototypeOf(t);function so(t,e,n=!1,s=!1){t=t.__v_raw;const r=ae(t),i=ae(e);n||(e!==i&&wt(r,"get",e),wt(r,"get",i));const{has:o}=ba(r),a=s?ku:n?Nu:ii;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function ro(t,e=!1){const n=this.__v_raw,s=ae(n),r=ae(t);return e||(t!==r&&wt(s,"has",t),wt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function io(t,e=!1){return t=t.__v_raw,!e&&wt(ae(t),"iterate",ps),Reflect.get(t,"size",t)}function xf(t){t=ae(t);const e=ae(this);return ba(e).has.call(e,t)||(e.add(t),yn(e,"add",t,t)),this}function Nf(t,e){e=ae(e);const n=ae(this),{has:s,get:r}=ba(n);let i=s.call(n,t);i||(t=ae(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?ri(e,o)&&yn(n,"set",t,e):yn(n,"add",t,e),this}function Df(t){const e=ae(this),{has:n,get:s}=ba(e);let r=n.call(e,t);r||(t=ae(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&yn(e,"delete",t,void 0),i}function Of(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&yn(t,"clear",void 0,void 0),n}function oo(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ae(o),c=e?ku:t?Nu:ii;return!t&&wt(a,"iterate",ps),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function ao(t,e,n){return function(...s){const r=this.__v_raw,i=ae(r),o=Xs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?ku:e?Nu:ii;return!e&&wt(i,"iterate",c?fl:ps),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Sn(t){return function(...e){return t==="delete"?!1:this}}function q0(){const t={get(i){return so(this,i)},get size(){return io(this)},has:ro,add:xf,set:Nf,delete:Df,clear:Of,forEach:oo(!1,!1)},e={get(i){return so(this,i,!1,!0)},get size(){return io(this)},has:ro,add:xf,set:Nf,delete:Df,clear:Of,forEach:oo(!1,!0)},n={get(i){return so(this,i,!0)},get size(){return io(this,!0)},has(i){return ro.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:oo(!0,!1)},s={get(i){return so(this,i,!0,!0)},get size(){return io(this,!0)},has(i){return ro.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:oo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ao(i,!1,!1),n[i]=ao(i,!0,!1),e[i]=ao(i,!1,!0),s[i]=ao(i,!0,!0)}),[t,n,e,s]}const[H0,K0,W0,G0]=q0();function Ru(t,e){const n=e?t?G0:W0:t?K0:H0;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(le(n,r)&&r in s?n:s,r,i)}const Q0={get:Ru(!1,!1)},Y0={get:Ru(!1,!0)},X0={get:Ru(!0,!1)},jg=new WeakMap,zg=new WeakMap,qg=new WeakMap,J0=new WeakMap;function Z0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function eE(t){return t.__v_skip||!Object.isExtensible(t)?0:Z0(m0(t))}function br(t){return or(t)?t:xu(t,!1,Bg,Q0,jg)}function tE(t){return xu(t,!1,z0,Y0,zg)}function Hg(t){return xu(t,!0,j0,X0,qg)}function xu(t,e,n,s,r){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=eE(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function $n(t){return or(t)?$n(t.__v_raw):!!(t&&t.__v_isReactive)}function or(t){return!!(t&&t.__v_isReadonly)}function Uo(t){return!!(t&&t.__v_isShallow)}function Kg(t){return $n(t)||or(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function ar(t){return Fo(t,"__v_skip",!0),t}const ii=t=>ke(t)?br(t):t,Nu=t=>ke(t)?Hg(t):t;function Wg(t){Fn&&Dt&&(t=ae(t),$g(t.dep||(t.dep=Su())))}function Gg(t,e){t=ae(t);const n=t.dep;n&&dl(n)}function Me(t){return!!(t&&t.__v_isRef===!0)}function qe(t){return Qg(t,!1)}function nE(t){return Qg(t,!0)}function Qg(t,e){return Me(t)?t:new sE(t,e)}class sE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:ii(e)}get value(){return Wg(this),this._value}set value(e){const n=this.__v_isShallow||Uo(e)||or(e);e=n?e:ae(e),ri(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ii(e),Gg(this))}}function Se(t){return Me(t)?t.value:t}const rE={get:(t,e,n)=>Se(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Me(r)&&!Me(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Yg(t){return $n(t)?t:new Proxy(t,rE)}function iE(t){const e=G(t)?new Array(t.length):{};for(const n in t)e[n]=aE(t,n);return e}class oE{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return x0(ae(this._object),this._key)}}function aE(t,e,n){const s=t[e];return Me(s)?s:new oE(t,e,n)}class cE{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Cu(e,()=>{this._dirty||(this._dirty=!0,Gg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ae(this);return Wg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function lE(t,e,n=!1){let s,r;const i=re(t);return i?(s=t,r=Mt):(s=t.get,r=t.set),new cE(s,r,i||!r,n)}function Un(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Ta(i,e,n)}return r}function kt(t,e,n,s){if(re(t)){const i=Un(t,e,n,s);return i&&Ag(i)&&i.catch(o=>{Ta(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(kt(t[i],e,n,s));return r}function Ta(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Un(c,null,10,[t,o,a]);return}}uE(t,n,r,s)}function uE(t,e,n,s=!0){console.error(t)}let oi=!1,pl=!1;const rt=[];let Yt=0;const Js=[];let hn=null,is=0;const Xg=Promise.resolve();let Du=null;function Ou(t){const e=Du||Xg;return t?e.then(this?t.bind(this):t):e}function hE(t){let e=Yt+1,n=rt.length;for(;e<n;){const s=e+n>>>1;ai(rt[s])<t?e=s+1:n=s}return e}function Pu(t){(!rt.length||!rt.includes(t,oi&&t.allowRecurse?Yt+1:Yt))&&(t.id==null?rt.push(t):rt.splice(hE(t.id),0,t),Jg())}function Jg(){!oi&&!pl&&(pl=!0,Du=Xg.then(em))}function fE(t){const e=rt.indexOf(t);e>Yt&&rt.splice(e,1)}function dE(t){G(t)?Js.push(...t):(!hn||!hn.includes(t,t.allowRecurse?is+1:is))&&Js.push(t),Jg()}function Pf(t,e=oi?Yt+1:0){for(;e<rt.length;e++){const n=rt[e];n&&n.pre&&(rt.splice(e,1),e--,n())}}function Zg(t){if(Js.length){const e=[...new Set(Js)];if(Js.length=0,hn){hn.push(...e);return}for(hn=e,hn.sort((n,s)=>ai(n)-ai(s)),is=0;is<hn.length;is++)hn[is]();hn=null,is=0}}const ai=t=>t.id==null?1/0:t.id,pE=(t,e)=>{const n=ai(t)-ai(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function em(t){pl=!1,oi=!0,rt.sort(pE);const e=Mt;try{for(Yt=0;Yt<rt.length;Yt++){const n=rt[Yt];n&&n.active!==!1&&Un(n,null,14)}}finally{Yt=0,rt.length=0,Zg(),oi=!1,Du=null,(rt.length||Js.length)&&em()}}function gE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||be;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||be;f&&(r=n.map(d=>je(d)?d.trim():d)),h&&(r=n.map(ll))}let a,c=s[a=Ic(e)]||s[a=Ic(nn(e))];!c&&i&&(c=s[a=Ic(_r(e))]),c&&kt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,kt(l,t,6,r)}}function tm(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!re(t)){const c=l=>{const u=tm(l,e,!0);u&&(a=!0,Fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ke(t)&&s.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):Fe(o,i),ke(t)&&s.set(t,o),o)}function Sa(t,e){return!t||!wa(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,_r(e))||le(t,e))}let Je=null,Ca=null;function Vo(t){const e=Je;return Je=t,Ca=t&&t.type.__scopeId||null,e}function nm(t){Ca=t}function sm(){Ca=null}function ws(t,e=Je,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Kf(-1);const i=Vo(e);let o;try{o=t(...r)}finally{Vo(i),s._d&&Kf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function bc(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:d,ctx:v,inheritAttrs:y}=t;let w,k;const S=Vo(t);try{if(n.shapeFlag&4){const O=r||s;w=Qt(u.call(O,O,h,i,d,f,v)),k=c}else{const O=e;w=Qt(O.length>1?O(i,{attrs:c,slots:a,emit:l}):O(i,null)),k=e.props?c:mE(c)}}catch(O){Wr.length=0,Ta(O,t,1),w=Ce(Rt)}let P=w;if(k&&y!==!1){const O=Object.keys(k),{shapeFlag:Q}=P;O.length&&Q&7&&(o&&O.some(wu)&&(k=yE(k,o)),P=Gn(P,k))}return n.dirs&&(P=Gn(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),w=P,Vo(S),w}const mE=t=>{let e;for(const n in t)(n==="class"||n==="style"||wa(n))&&((e||(e={}))[n]=t[n]);return e},yE=(t,e)=>{const n={};for(const s in t)(!wu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function vE(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Mf(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Sa(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Mf(s,o,l):!0:!!o;return!1}function Mf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Sa(n,i))return!0}return!1}function wE({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const _E=t=>t.__isSuspense;function EE(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):dE(t)}const co={};function qr(t,e,n){return rm(t,e,n)}function rm(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=be){var a;const c=Pg()===((a=We)==null?void 0:a.scope)?We:null;let l,u=!1,h=!1;if(Me(t)?(l=()=>t.value,u=Uo(t)):$n(t)?(l=()=>t,s=!0):G(t)?(h=!0,u=t.some(O=>$n(O)||Uo(O)),l=()=>t.map(O=>{if(Me(O))return O.value;if($n(O))return cs(O);if(re(O))return Un(O,c,2)})):re(t)?e?l=()=>Un(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),kt(t,c,3,[d])}:l=Mt,e&&s){const O=l;l=()=>cs(O())}let f,d=O=>{f=S.onStop=()=>{Un(O,c,4)}},v;if(hi)if(d=Mt,e?n&&kt(e,c,3,[l(),h?[]:void 0,d]):l(),r==="sync"){const O=gI();v=O.__watcherHandles||(O.__watcherHandles=[])}else return Mt;let y=h?new Array(t.length).fill(co):co;const w=()=>{if(S.active)if(e){const O=S.run();(s||u||(h?O.some((Q,U)=>ri(Q,y[U])):ri(O,y)))&&(f&&f(),kt(e,c,3,[O,y===co?void 0:h&&y[0]===co?[]:y,d]),y=O)}else S.run()};w.allowRecurse=!!e;let k;r==="sync"?k=w:r==="post"?k=()=>gt(w,c&&c.suspense):(w.pre=!0,c&&(w.id=c.uid),k=()=>Pu(w));const S=new Cu(l,k);e?n?w():y=S.run():r==="post"?gt(S.run.bind(S),c&&c.suspense):S.run();const P=()=>{S.stop(),c&&c.scope&&_u(c.scope.effects,S)};return v&&v.push(P),P}function IE(t,e,n){const s=this.proxy,r=je(t)?t.includes(".")?im(s,t):()=>s[t]:t.bind(s,s);let i;re(e)?i=e:(i=e.handler,n=e);const o=We;cr(this);const a=rm(r,i.bind(s),n);return o?cr(o):ms(),a}function im(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function cs(t,e){if(!ke(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Me(t))cs(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)cs(t[n],e);else if(Cg(t)||Xs(t))t.forEach(n=>{cs(n,e)});else if(Rg(t))for(const n in t)cs(t[n],e);return t}function Mu(t,e){const n=Je;if(n===null)return t;const s=Da(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=be]=e[i];o&&(re(o)&&(o={mounted:o,updated:o}),o.deep&&cs(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function ts(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Er(),kt(c,n,8,[t.el,a,t,e]),Ir())}}function om(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fu(()=>{t.isMounted=!0}),um(()=>{t.isUnmounting=!0}),t}const Ct=[Function,Array],am={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ct,onEnter:Ct,onAfterEnter:Ct,onEnterCancelled:Ct,onBeforeLeave:Ct,onLeave:Ct,onAfterLeave:Ct,onLeaveCancelled:Ct,onBeforeAppear:Ct,onAppear:Ct,onAfterAppear:Ct,onAppearCancelled:Ct},bE={name:"BaseTransition",props:am,setup(t,{slots:e}){const n=ju(),s=om();let r;return()=>{const i=e.default&&Aa(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==Rt){o=y;break}}const a=ae(t),{mode:c}=a;if(s.isLeaving)return Tc(o);const l=Lf(o);if(!l)return Tc(o);const u=ci(l,a,s,n);li(l,u);const h=n.subTree,f=h&&Lf(h);let d=!1;const{getTransitionKey:v}=l.type;if(v){const y=v();r===void 0?r=y:y!==r&&(r=y,d=!0)}if(f&&f.type!==Rt&&(!os(l,f)||d)){const y=ci(f,a,s,n);if(li(f,y),c==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Tc(o);c==="in-out"&&l.type!==Rt&&(y.delayLeave=(w,k,S)=>{const P=cm(s,f);P[String(f.key)]=f,w._leaveCb=()=>{k(),w._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},TE=bE;function cm(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ci(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:v,onBeforeAppear:y,onAppear:w,onAfterAppear:k,onAppearCancelled:S}=e,P=String(t.key),O=cm(n,t),Q=(x,Y)=>{x&&kt(x,s,9,Y)},U=(x,Y)=>{const X=Y[1];Q(x,Y),G(x)?x.every(Ie=>Ie.length<=1)&&X():x.length<=1&&X()},z={mode:i,persisted:o,beforeEnter(x){let Y=a;if(!n.isMounted)if(r)Y=y||a;else return;x._leaveCb&&x._leaveCb(!0);const X=O[P];X&&os(t,X)&&X.el._leaveCb&&X.el._leaveCb(),Q(Y,[x])},enter(x){let Y=c,X=l,Ie=u;if(!n.isMounted)if(r)Y=w||c,X=k||l,Ie=S||u;else return;let B=!1;const de=x._enterCb=Oe=>{B||(B=!0,Oe?Q(Ie,[x]):Q(X,[x]),z.delayedLeave&&z.delayedLeave(),x._enterCb=void 0)};Y?U(Y,[x,de]):de()},leave(x,Y){const X=String(t.key);if(x._enterCb&&x._enterCb(!0),n.isUnmounting)return Y();Q(h,[x]);let Ie=!1;const B=x._leaveCb=de=>{Ie||(Ie=!0,Y(),de?Q(v,[x]):Q(d,[x]),x._leaveCb=void 0,O[X]===t&&delete O[X])};O[X]=t,f?U(f,[x,B]):B()},clone(x){return ci(x,e,n,s)}};return z}function Tc(t){if(ka(t))return t=Gn(t),t.children=null,t}function Lf(t){return ka(t)?t.children?t.children[0]:void 0:t}function li(t,e){t.shapeFlag&6&&t.component?li(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Aa(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===mt?(o.patchFlag&128&&r++,s=s.concat(Aa(o.children,e,a))):(e||o.type!==Rt)&&s.push(a!=null?Gn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Lu(t,e){return re(t)?(()=>Fe({name:t.name},e,{setup:t}))():t}const Hr=t=>!!t.type.__asyncLoader,ka=t=>t.type.__isKeepAlive;function SE(t,e){lm(t,"a",e)}function CE(t,e){lm(t,"da",e)}function lm(t,e,n=We){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ra(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ka(r.parent.vnode)&&AE(s,e,n,r),r=r.parent}}function AE(t,e,n,s){const r=Ra(e,t,s,!0);hm(()=>{_u(s[e],r)},n)}function Ra(t,e,n=We,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Er(),cr(n);const a=kt(e,n,t,o);return ms(),Ir(),a});return s?r.unshift(i):r.push(i),i}}const bn=t=>(e,n=We)=>(!hi||t==="sp")&&Ra(t,(...s)=>e(...s),n),kE=bn("bm"),Fu=bn("m"),RE=bn("bu"),$u=bn("u"),um=bn("bum"),hm=bn("um"),xE=bn("sp"),NE=bn("rtg"),DE=bn("rtc");function OE(t,e=We){Ra("ec",t,e)}const fm="components";function dm(t,e){return ME(fm,t,!0,e)||t}const PE=Symbol.for("v-ndc");function ME(t,e,n=!0,s=!1){const r=Je||We;if(r){const i=r.type;if(t===fm){const a=fI(i,!1);if(a&&(a===e||a===nn(e)||a===Ia(nn(e))))return i}const o=Ff(r[t]||i[t],e)||Ff(r.appContext[t],e);return!o&&s?i:o}}function Ff(t,e){return t&&(t[e]||t[nn(e)]||t[Ia(nn(e))])}function LE(t,e,n,s){let r;const i=n&&n[s];if(G(t)||je(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ke(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function FE(t,e,n={},s,r){if(Je.isCE||Je.parent&&Hr(Je.parent)&&Je.parent.isCE)return e!=="default"&&(n.name=e),Ce("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),he();const o=i&&pm(i(n)),a=Ft(mt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function pm(t){return t.some(e=>zo(e)?!(e.type===Rt||e.type===mt&&!pm(e.children)):!0)?t:null}const gl=t=>t?Sm(t)?Da(t)||t.proxy:gl(t.parent):null,Kr=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gl(t.parent),$root:t=>gl(t.root),$emit:t=>t.emit,$options:t=>Uu(t),$forceUpdate:t=>t.f||(t.f=()=>Pu(t.update)),$nextTick:t=>t.n||(t.n=Ou.bind(t.proxy)),$watch:t=>IE.bind(t)}),Sc=(t,e)=>t!==be&&!t.__isScriptSetup&&le(t,e),$E={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Sc(s,e))return o[e]=1,s[e];if(r!==be&&le(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&le(l,e))return o[e]=3,i[e];if(n!==be&&le(n,e))return o[e]=4,n[e];ml&&(o[e]=0)}}const u=Kr[e];let h,f;if(u)return e==="$attrs"&&wt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==be&&le(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,le(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Sc(r,e)?(r[e]=n,!0):s!==be&&le(s,e)?(s[e]=n,!0):le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==be&&le(t,o)||Sc(e,o)||(a=i[0])&&le(a,o)||le(s,o)||le(Kr,o)||le(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function $f(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ml=!0;function UE(t){const e=Uu(t),n=t.proxy,s=t.ctx;ml=!1,e.beforeCreate&&Uf(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:v,activated:y,deactivated:w,beforeDestroy:k,beforeUnmount:S,destroyed:P,unmounted:O,render:Q,renderTracked:U,renderTriggered:z,errorCaptured:x,serverPrefetch:Y,expose:X,inheritAttrs:Ie,components:B,directives:de,filters:Oe}=e;if(l&&VE(l,s,null),o)for(const _e in o){const ge=o[_e];re(ge)&&(s[_e]=ge.bind(n))}if(r){const _e=r.call(n,n);ke(_e)&&(t.data=br(_e))}if(ml=!0,i)for(const _e in i){const ge=i[_e],an=re(ge)?ge.bind(n,n):re(ge.get)?ge.get.bind(n,n):Mt,Tn=!re(ge)&&re(ge.set)?ge.set.bind(n):Mt,Kt=It({get:an,set:Tn});Object.defineProperty(s,_e,{enumerable:!0,configurable:!0,get:()=>Kt.value,set:pt=>Kt.value=pt})}if(a)for(const _e in a)gm(a[_e],s,n,_e);if(c){const _e=re(c)?c.call(n):c;Reflect.ownKeys(_e).forEach(ge=>{bo(ge,_e[ge])})}u&&Uf(u,t,"c");function Pe(_e,ge){G(ge)?ge.forEach(an=>_e(an.bind(n))):ge&&_e(ge.bind(n))}if(Pe(kE,h),Pe(Fu,f),Pe(RE,d),Pe($u,v),Pe(SE,y),Pe(CE,w),Pe(OE,x),Pe(DE,U),Pe(NE,z),Pe(um,S),Pe(hm,O),Pe(xE,Y),G(X))if(X.length){const _e=t.exposed||(t.exposed={});X.forEach(ge=>{Object.defineProperty(_e,ge,{get:()=>n[ge],set:an=>n[ge]=an})})}else t.exposed||(t.exposed={});Q&&t.render===Mt&&(t.render=Q),Ie!=null&&(t.inheritAttrs=Ie),B&&(t.components=B),de&&(t.directives=de)}function VE(t,e,n=Mt){G(t)&&(t=yl(t));for(const s in t){const r=t[s];let i;ke(r)?"default"in r?i=Lt(r.from||s,r.default,!0):i=Lt(r.from||s):i=Lt(r),Me(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Uf(t,e,n){kt(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function gm(t,e,n,s){const r=s.includes(".")?im(n,s):()=>n[s];if(je(t)){const i=e[t];re(i)&&qr(r,i)}else if(re(t))qr(r,t.bind(n));else if(ke(t))if(G(t))t.forEach(i=>gm(i,e,n,s));else{const i=re(t.handler)?t.handler.bind(n):e[t.handler];re(i)&&qr(r,i,t)}}function Uu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Bo(c,l,o,!0)),Bo(c,e,o)),ke(e)&&i.set(e,c),c}function Bo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Bo(t,i,n,!0),r&&r.forEach(o=>Bo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=BE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const BE={data:Vf,props:Bf,emits:Bf,methods:$r,computed:$r,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:$r,directives:$r,watch:zE,provide:Vf,inject:jE};function Vf(t,e){return e?t?function(){return Fe(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function jE(t,e){return $r(yl(t),yl(e))}function yl(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ft(t,e){return t?[...new Set([].concat(t,e))]:e}function $r(t,e){return t?Fe(Object.create(null),t,e):e}function Bf(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:Fe(Object.create(null),$f(t),$f(e??{})):e}function zE(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const s in e)n[s]=ft(t[s],e[s]);return n}function mm(){return{app:null,config:{isNativeTag:d0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qE=0;function HE(t,e){return function(s,r=null){re(s)||(s=Fe({},s)),r!=null&&!ke(r)&&(r=null);const i=mm(),o=new Set;let a=!1;const c=i.app={_uid:qE++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:mI,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&re(l.install)?(o.add(l),l.install(c,...u)):re(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Ce(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Da(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){jo=c;try{return l()}finally{jo=null}}};return c}}let jo=null;function bo(t,e){if(We){let n=We.provides;const s=We.parent&&We.parent.provides;s===n&&(n=We.provides=Object.create(s)),n[t]=e}}function Lt(t,e,n=!1){const s=We||Je;if(s||jo){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:jo._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&re(e)?e.call(s&&s.proxy):e}}function KE(t,e,n,s=!1){const r={},i={};Fo(i,Na,1),t.propsDefaults=Object.create(null),ym(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:tE(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function WE(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ae(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Sa(t.emitsOptions,f))continue;const d=e[f];if(c)if(le(i,f))d!==i[f]&&(i[f]=d,l=!0);else{const v=nn(f);r[v]=vl(c,a,v,d,t,!1)}else d!==i[f]&&(i[f]=d,l=!0)}}}else{ym(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!le(e,h)&&((u=_r(h))===h||!le(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=vl(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!le(e,h))&&(delete i[h],l=!0)}l&&yn(t,"set","$attrs")}function ym(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Eo(c))continue;const l=e[c];let u;r&&le(r,u=nn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Sa(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ae(n),l=a||be;for(let u=0;u<i.length;u++){const h=i[u];n[h]=vl(r,c,h,l[h],t,!le(l,h))}}return o}function vl(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&re(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(cr(r),s=l[n]=c.call(null,e),ms())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===_r(n))&&(s=!0))}return s}function vm(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!re(t)){const u=h=>{c=!0;const[f,d]=vm(h,e,!0);Fe(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ke(t)&&s.set(t,Ys),Ys;if(G(i))for(let u=0;u<i.length;u++){const h=nn(i[u]);jf(h)&&(o[h]=be)}else if(i)for(const u in i){const h=nn(u);if(jf(h)){const f=i[u],d=o[h]=G(f)||re(f)?{type:f}:Fe({},f);if(d){const v=Hf(Boolean,d.type),y=Hf(String,d.type);d[0]=v>-1,d[1]=y<0||v<y,(v>-1||le(d,"default"))&&a.push(h)}}}const l=[o,a];return ke(t)&&s.set(t,l),l}function jf(t){return t[0]!=="$"}function zf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function qf(t,e){return zf(t)===zf(e)}function Hf(t,e){return G(e)?e.findIndex(n=>qf(n,t)):re(e)&&qf(e,t)?0:-1}const wm=t=>t[0]==="_"||t==="$stable",Vu=t=>G(t)?t.map(Qt):[Qt(t)],GE=(t,e,n)=>{if(e._n)return e;const s=ws((...r)=>Vu(e(...r)),n);return s._c=!1,s},_m=(t,e,n)=>{const s=t._ctx;for(const r in t){if(wm(r))continue;const i=t[r];if(re(i))e[r]=GE(r,i,s);else if(i!=null){const o=Vu(i);e[r]=()=>o}}},Em=(t,e)=>{const n=Vu(e);t.slots.default=()=>n},QE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),Fo(e,"_",n)):_m(e,t.slots={})}else t.slots={},e&&Em(t,e);Fo(t.slots,Na,1)},YE=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=be;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Fe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,_m(e,r)),o=e}else e&&(Em(t,e),o={default:1});if(i)for(const a in r)!wm(a)&&!(a in o)&&delete r[a]};function wl(t,e,n,s,r=!1){if(G(t)){t.forEach((f,d)=>wl(f,e&&(G(e)?e[d]:e),n,s,r));return}if(Hr(s)&&!r)return;const i=s.shapeFlag&4?Da(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===be?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(je(l)?(u[l]=null,le(h,l)&&(h[l]=null)):Me(l)&&(l.value=null)),re(c))Un(c,a,12,[o,u]);else{const f=je(c),d=Me(c);if(f||d){const v=()=>{if(t.f){const y=f?le(h,c)?h[c]:u[c]:c.value;r?G(y)&&_u(y,i):G(y)?y.includes(i)||y.push(i):f?(u[c]=[i],le(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,le(h,c)&&(h[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,gt(v,n)):v()}}}const gt=EE;function XE(t){return JE(t)}function JE(t,e){const n=ul();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Mt,insertStaticContent:v}=t,y=(p,g,m,_=null,b=null,T=null,L=!1,R=null,N=!!g.dynamicChildren)=>{if(p===g)return;p&&!os(p,g)&&(_=E(p),pt(p,b,T,!0),p=null),g.patchFlag===-2&&(N=!1,g.dynamicChildren=null);const{type:C,ref:K,shapeFlag:V}=g;switch(C){case xa:w(p,g,m,_);break;case Rt:k(p,g,m,_);break;case Cc:p==null&&S(g,m,_,L);break;case mt:B(p,g,m,_,b,T,L,R,N);break;default:V&1?Q(p,g,m,_,b,T,L,R,N):V&6?de(p,g,m,_,b,T,L,R,N):(V&64||V&128)&&C.process(p,g,m,_,b,T,L,R,N,D)}K!=null&&b&&wl(K,p&&p.ref,T,g||p,!g)},w=(p,g,m,_)=>{if(p==null)s(g.el=a(g.children),m,_);else{const b=g.el=p.el;g.children!==p.children&&l(b,g.children)}},k=(p,g,m,_)=>{p==null?s(g.el=c(g.children||""),m,_):g.el=p.el},S=(p,g,m,_)=>{[p.el,p.anchor]=v(p.children,g,m,_,p.el,p.anchor)},P=({el:p,anchor:g},m,_)=>{let b;for(;p&&p!==g;)b=f(p),s(p,m,_),p=b;s(g,m,_)},O=({el:p,anchor:g})=>{let m;for(;p&&p!==g;)m=f(p),r(p),p=m;r(g)},Q=(p,g,m,_,b,T,L,R,N)=>{L=L||g.type==="svg",p==null?U(g,m,_,b,T,L,R,N):Y(p,g,b,T,L,R,N)},U=(p,g,m,_,b,T,L,R)=>{let N,C;const{type:K,props:V,shapeFlag:W,transition:ee,dirs:ie}=p;if(N=p.el=o(p.type,T,V&&V.is,V),W&8?u(N,p.children):W&16&&x(p.children,N,null,_,b,T&&K!=="foreignObject",L,R),ie&&ts(p,null,_,"created"),z(N,p,p.scopeId,L,_),V){for(const we in V)we!=="value"&&!Eo(we)&&i(N,we,null,V[we],T,p.children,_,b,et);"value"in V&&i(N,"value",null,V.value),(C=V.onVnodeBeforeMount)&&Gt(C,_,p)}ie&&ts(p,null,_,"beforeMount");const Ee=(!b||b&&!b.pendingBranch)&&ee&&!ee.persisted;Ee&&ee.beforeEnter(N),s(N,g,m),((C=V&&V.onVnodeMounted)||Ee||ie)&&gt(()=>{C&&Gt(C,_,p),Ee&&ee.enter(N),ie&&ts(p,null,_,"mounted")},b)},z=(p,g,m,_,b)=>{if(m&&d(p,m),_)for(let T=0;T<_.length;T++)d(p,_[T]);if(b){let T=b.subTree;if(g===T){const L=b.vnode;z(p,L,L.scopeId,L.slotScopeIds,b.parent)}}},x=(p,g,m,_,b,T,L,R,N=0)=>{for(let C=N;C<p.length;C++){const K=p[C]=R?Nn(p[C]):Qt(p[C]);y(null,K,g,m,_,b,T,L,R)}},Y=(p,g,m,_,b,T,L)=>{const R=g.el=p.el;let{patchFlag:N,dynamicChildren:C,dirs:K}=g;N|=p.patchFlag&16;const V=p.props||be,W=g.props||be;let ee;m&&ns(m,!1),(ee=W.onVnodeBeforeUpdate)&&Gt(ee,m,g,p),K&&ts(g,p,m,"beforeUpdate"),m&&ns(m,!0);const ie=b&&g.type!=="foreignObject";if(C?X(p.dynamicChildren,C,R,m,_,ie,T):L||ge(p,g,R,null,m,_,ie,T,!1),N>0){if(N&16)Ie(R,g,V,W,m,_,b);else if(N&2&&V.class!==W.class&&i(R,"class",null,W.class,b),N&4&&i(R,"style",V.style,W.style,b),N&8){const Ee=g.dynamicProps;for(let we=0;we<Ee.length;we++){const $e=Ee[we],Nt=V[$e],Vs=W[$e];(Vs!==Nt||$e==="value")&&i(R,$e,Nt,Vs,b,p.children,m,_,et)}}N&1&&p.children!==g.children&&u(R,g.children)}else!L&&C==null&&Ie(R,g,V,W,m,_,b);((ee=W.onVnodeUpdated)||K)&&gt(()=>{ee&&Gt(ee,m,g,p),K&&ts(g,p,m,"updated")},_)},X=(p,g,m,_,b,T,L)=>{for(let R=0;R<g.length;R++){const N=p[R],C=g[R],K=N.el&&(N.type===mt||!os(N,C)||N.shapeFlag&70)?h(N.el):m;y(N,C,K,null,_,b,T,L,!0)}},Ie=(p,g,m,_,b,T,L)=>{if(m!==_){if(m!==be)for(const R in m)!Eo(R)&&!(R in _)&&i(p,R,m[R],null,L,g.children,b,T,et);for(const R in _){if(Eo(R))continue;const N=_[R],C=m[R];N!==C&&R!=="value"&&i(p,R,C,N,L,g.children,b,T,et)}"value"in _&&i(p,"value",m.value,_.value)}},B=(p,g,m,_,b,T,L,R,N)=>{const C=g.el=p?p.el:a(""),K=g.anchor=p?p.anchor:a("");let{patchFlag:V,dynamicChildren:W,slotScopeIds:ee}=g;ee&&(R=R?R.concat(ee):ee),p==null?(s(C,m,_),s(K,m,_),x(g.children,m,K,b,T,L,R,N)):V>0&&V&64&&W&&p.dynamicChildren?(X(p.dynamicChildren,W,m,b,T,L,R),(g.key!=null||b&&g===b.subTree)&&Im(p,g,!0)):ge(p,g,m,K,b,T,L,R,N)},de=(p,g,m,_,b,T,L,R,N)=>{g.slotScopeIds=R,p==null?g.shapeFlag&512?b.ctx.activate(g,m,_,L,N):Oe(g,m,_,b,T,L,N):Ne(p,g,N)},Oe=(p,g,m,_,b,T,L)=>{const R=p.component=aI(p,_,b);if(ka(p)&&(R.ctx.renderer=D),cI(R),R.asyncDep){if(b&&b.registerDep(R,Pe),!p.el){const N=R.subTree=Ce(Rt);k(null,N,g,m)}return}Pe(R,p,g,m,b,T,L)},Ne=(p,g,m)=>{const _=g.component=p.component;if(vE(p,g,m))if(_.asyncDep&&!_.asyncResolved){_e(_,g,m);return}else _.next=g,fE(_.update),_.update();else g.el=p.el,_.vnode=g},Pe=(p,g,m,_,b,T,L)=>{const R=()=>{if(p.isMounted){let{next:K,bu:V,u:W,parent:ee,vnode:ie}=p,Ee=K,we;ns(p,!1),K?(K.el=ie.el,_e(p,K,L)):K=ie,V&&Io(V),(we=K.props&&K.props.onVnodeBeforeUpdate)&&Gt(we,ee,K,ie),ns(p,!0);const $e=bc(p),Nt=p.subTree;p.subTree=$e,y(Nt,$e,h(Nt.el),E(Nt),p,b,T),K.el=$e.el,Ee===null&&wE(p,$e.el),W&&gt(W,b),(we=K.props&&K.props.onVnodeUpdated)&&gt(()=>Gt(we,ee,K,ie),b)}else{let K;const{el:V,props:W}=g,{bm:ee,m:ie,parent:Ee}=p,we=Hr(g);if(ns(p,!1),ee&&Io(ee),!we&&(K=W&&W.onVnodeBeforeMount)&&Gt(K,Ee,g),ns(p,!0),V&&me){const $e=()=>{p.subTree=bc(p),me(V,p.subTree,p,b,null)};we?g.type.__asyncLoader().then(()=>!p.isUnmounted&&$e()):$e()}else{const $e=p.subTree=bc(p);y(null,$e,m,_,p,b,T),g.el=$e.el}if(ie&&gt(ie,b),!we&&(K=W&&W.onVnodeMounted)){const $e=g;gt(()=>Gt(K,Ee,$e),b)}(g.shapeFlag&256||Ee&&Hr(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&p.a&&gt(p.a,b),p.isMounted=!0,g=m=_=null}},N=p.effect=new Cu(R,()=>Pu(C),p.scope),C=p.update=()=>N.run();C.id=p.uid,ns(p,!0),C()},_e=(p,g,m)=>{g.component=p;const _=p.vnode.props;p.vnode=g,p.next=null,WE(p,g.props,_,m),YE(p,g.children,m),Er(),Pf(),Ir()},ge=(p,g,m,_,b,T,L,R,N=!1)=>{const C=p&&p.children,K=p?p.shapeFlag:0,V=g.children,{patchFlag:W,shapeFlag:ee}=g;if(W>0){if(W&128){Tn(C,V,m,_,b,T,L,R,N);return}else if(W&256){an(C,V,m,_,b,T,L,R,N);return}}ee&8?(K&16&&et(C,b,T),V!==C&&u(m,V)):K&16?ee&16?Tn(C,V,m,_,b,T,L,R,N):et(C,b,T,!0):(K&8&&u(m,""),ee&16&&x(V,m,_,b,T,L,R,N))},an=(p,g,m,_,b,T,L,R,N)=>{p=p||Ys,g=g||Ys;const C=p.length,K=g.length,V=Math.min(C,K);let W;for(W=0;W<V;W++){const ee=g[W]=N?Nn(g[W]):Qt(g[W]);y(p[W],ee,m,null,b,T,L,R,N)}C>K?et(p,b,T,!0,!1,V):x(g,m,_,b,T,L,R,N,V)},Tn=(p,g,m,_,b,T,L,R,N)=>{let C=0;const K=g.length;let V=p.length-1,W=K-1;for(;C<=V&&C<=W;){const ee=p[C],ie=g[C]=N?Nn(g[C]):Qt(g[C]);if(os(ee,ie))y(ee,ie,m,null,b,T,L,R,N);else break;C++}for(;C<=V&&C<=W;){const ee=p[V],ie=g[W]=N?Nn(g[W]):Qt(g[W]);if(os(ee,ie))y(ee,ie,m,null,b,T,L,R,N);else break;V--,W--}if(C>V){if(C<=W){const ee=W+1,ie=ee<K?g[ee].el:_;for(;C<=W;)y(null,g[C]=N?Nn(g[C]):Qt(g[C]),m,ie,b,T,L,R,N),C++}}else if(C>W)for(;C<=V;)pt(p[C],b,T,!0),C++;else{const ee=C,ie=C,Ee=new Map;for(C=ie;C<=W;C++){const _t=g[C]=N?Nn(g[C]):Qt(g[C]);_t.key!=null&&Ee.set(_t.key,C)}let we,$e=0;const Nt=W-ie+1;let Vs=!1,bf=0;const Nr=new Array(Nt);for(C=0;C<Nt;C++)Nr[C]=0;for(C=ee;C<=V;C++){const _t=p[C];if($e>=Nt){pt(_t,b,T,!0);continue}let Wt;if(_t.key!=null)Wt=Ee.get(_t.key);else for(we=ie;we<=W;we++)if(Nr[we-ie]===0&&os(_t,g[we])){Wt=we;break}Wt===void 0?pt(_t,b,T,!0):(Nr[Wt-ie]=C+1,Wt>=bf?bf=Wt:Vs=!0,y(_t,g[Wt],m,null,b,T,L,R,N),$e++)}const Tf=Vs?ZE(Nr):Ys;for(we=Tf.length-1,C=Nt-1;C>=0;C--){const _t=ie+C,Wt=g[_t],Sf=_t+1<K?g[_t+1].el:_;Nr[C]===0?y(null,Wt,m,Sf,b,T,L,R,N):Vs&&(we<0||C!==Tf[we]?Kt(Wt,m,Sf,2):we--)}}},Kt=(p,g,m,_,b=null)=>{const{el:T,type:L,transition:R,children:N,shapeFlag:C}=p;if(C&6){Kt(p.component.subTree,g,m,_);return}if(C&128){p.suspense.move(g,m,_);return}if(C&64){L.move(p,g,m,D);return}if(L===mt){s(T,g,m);for(let V=0;V<N.length;V++)Kt(N[V],g,m,_);s(p.anchor,g,m);return}if(L===Cc){P(p,g,m);return}if(_!==2&&C&1&&R)if(_===0)R.beforeEnter(T),s(T,g,m),gt(()=>R.enter(T),b);else{const{leave:V,delayLeave:W,afterLeave:ee}=R,ie=()=>s(T,g,m),Ee=()=>{V(T,()=>{ie(),ee&&ee()})};W?W(T,ie,Ee):Ee()}else s(T,g,m)},pt=(p,g,m,_=!1,b=!1)=>{const{type:T,props:L,ref:R,children:N,dynamicChildren:C,shapeFlag:K,patchFlag:V,dirs:W}=p;if(R!=null&&wl(R,null,m,p,!0),K&256){g.ctx.deactivate(p);return}const ee=K&1&&W,ie=!Hr(p);let Ee;if(ie&&(Ee=L&&L.onVnodeBeforeUnmount)&&Gt(Ee,g,p),K&6)no(p.component,m,_);else{if(K&128){p.suspense.unmount(m,_);return}ee&&ts(p,null,g,"beforeUnmount"),K&64?p.type.remove(p,g,m,b,D,_):C&&(T!==mt||V>0&&V&64)?et(C,g,m,!1,!0):(T===mt&&V&384||!b&&K&16)&&et(N,g,m),_&&$s(p)}(ie&&(Ee=L&&L.onVnodeUnmounted)||ee)&&gt(()=>{Ee&&Gt(Ee,g,p),ee&&ts(p,null,g,"unmounted")},m)},$s=p=>{const{type:g,el:m,anchor:_,transition:b}=p;if(g===mt){Us(m,_);return}if(g===Cc){O(p);return}const T=()=>{r(m),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(p.shapeFlag&1&&b&&!b.persisted){const{leave:L,delayLeave:R}=b,N=()=>L(m,T);R?R(p.el,T,N):N()}else T()},Us=(p,g)=>{let m;for(;p!==g;)m=f(p),r(p),p=m;r(g)},no=(p,g,m)=>{const{bum:_,scope:b,update:T,subTree:L,um:R}=p;_&&Io(_),b.stop(),T&&(T.active=!1,pt(L,p,g,m)),R&&gt(R,g),gt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},et=(p,g,m,_=!1,b=!1,T=0)=>{for(let L=T;L<p.length;L++)pt(p[L],g,m,_,b)},E=p=>p.shapeFlag&6?E(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),$=(p,g,m)=>{p==null?g._vnode&&pt(g._vnode,null,null,!0):y(g._vnode||null,p,g,null,null,null,m),Pf(),Zg(),g._vnode=p},D={p:y,um:pt,m:Kt,r:$s,mt:Oe,mc:x,pc:ge,pbc:X,n:E,o:t};let q,me;return e&&([q,me]=e(D)),{render:$,hydrate:q,createApp:HE($,q)}}function ns({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Im(t,e,n=!1){const s=t.children,r=e.children;if(G(s)&&G(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Nn(r[i]),a.el=o.el),n||Im(o,a)),a.type===xa&&(a.el=o.el)}}function ZE(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const eI=t=>t.__isTeleport,mt=Symbol.for("v-fgt"),xa=Symbol.for("v-txt"),Rt=Symbol.for("v-cmt"),Cc=Symbol.for("v-stc"),Wr=[];let Pt=null;function he(t=!1){Wr.push(Pt=t?null:[])}function tI(){Wr.pop(),Pt=Wr[Wr.length-1]||null}let ui=1;function Kf(t){ui+=t}function bm(t){return t.dynamicChildren=ui>0?Pt||Ys:null,tI(),ui>0&&Pt&&Pt.push(t),t}function Le(t,e,n,s,r,i){return bm(fe(t,e,n,s,r,i,!0))}function Ft(t,e,n,s,r){return bm(Ce(t,e,n,s,r,!0))}function zo(t){return t?t.__v_isVNode===!0:!1}function os(t,e){return t.type===e.type&&t.key===e.key}const Na="__vInternal",Tm=({key:t})=>t??null,To=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||Me(t)||re(t)?{i:Je,r:t,k:e,f:!!n}:t:null);function fe(t,e=null,n=null,s=0,r=null,i=t===mt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Tm(e),ref:e&&To(e),scopeId:Ca,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Je};return a?(Bu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=je(n)?8:16),ui>0&&!o&&Pt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pt.push(c),c}const Ce=nI;function nI(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===PE)&&(t=Rt),zo(t)){const a=Gn(t,e,!0);return n&&Bu(a,n),ui>0&&!i&&Pt&&(a.shapeFlag&6?Pt[Pt.indexOf(t)]=a:Pt.push(a)),a.patchFlag|=-2,a}if(dI(t)&&(t=t.__vccOpts),e){e=sI(e);let{class:a,style:c}=e;a&&!je(a)&&(e.class=Tu(a)),ke(c)&&(Kg(c)&&!G(c)&&(c=Fe({},c)),e.style=bu(c))}const o=je(t)?1:_E(t)?128:eI(t)?64:ke(t)?4:re(t)?2:0;return fe(t,e,n,s,r,o,i,!0)}function sI(t){return t?Kg(t)||Na in t?Fe({},t):t:null}function Gn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?rI(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Tm(a),ref:e&&e.ref?n&&r?G(r)?r.concat(To(e)):[r,To(e)]:To(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gn(t.ssContent),ssFallback:t.ssFallback&&Gn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function gs(t=" ",e=0){return Ce(xa,null,t,e)}function $t(t="",e=!1){return e?(he(),Ft(Rt,null,t)):Ce(Rt,null,t)}function Qt(t){return t==null||typeof t=="boolean"?Ce(Rt):G(t)?Ce(mt,null,t.slice()):typeof t=="object"?Nn(t):Ce(xa,null,String(t))}function Nn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gn(t)}function Bu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Bu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Na in e)?e._ctx=Je:r===3&&Je&&(Je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:Je},n=32):(e=String(e),s&64?(n=16,e=[gs(e)]):n=8);t.children=e,t.shapeFlag|=n}function rI(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Tu([e.class,s.class]));else if(r==="style")e.style=bu([e.style,s.style]);else if(wa(r)){const i=e[r],o=s[r];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Gt(t,e,n,s=null){kt(t,e,7,[n,s])}const iI=mm();let oI=0;function aI(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||iI,i={uid:oI++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Dg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vm(s,r),emitsOptions:tm(s,r),emit:null,emitted:null,propsDefaults:be,inheritAttrs:s.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=gE.bind(null,i),t.ce&&t.ce(i),i}let We=null;const ju=()=>We||Je;let zu,Bs,Wf="__VUE_INSTANCE_SETTERS__";(Bs=ul()[Wf])||(Bs=ul()[Wf]=[]),Bs.push(t=>We=t),zu=t=>{Bs.length>1?Bs.forEach(e=>e(t)):Bs[0](t)};const cr=t=>{zu(t),t.scope.on()},ms=()=>{We&&We.scope.off(),zu(null)};function Sm(t){return t.vnode.shapeFlag&4}let hi=!1;function cI(t,e=!1){hi=e;const{props:n,children:s}=t.vnode,r=Sm(t);KE(t,n,r,e),QE(t,s);const i=r?lI(t,e):void 0;return hi=!1,i}function lI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ar(new Proxy(t.ctx,$E));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?hI(t):null;cr(t),Er();const i=Un(s,t,0,[t.props,r]);if(Ir(),ms(),Ag(i)){if(i.then(ms,ms),e)return i.then(o=>{Gf(t,o,e)}).catch(o=>{Ta(o,t,0)});t.asyncDep=i}else Gf(t,i,e)}else Cm(t,e)}function Gf(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=Yg(e)),Cm(t,n)}let Qf;function Cm(t,e,n){const s=t.type;if(!t.render){if(!e&&Qf&&!s.render){const r=s.template||Uu(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Fe(Fe({isCustomElement:i,delimiters:a},o),c);s.render=Qf(r,l)}}t.render=s.render||Mt}cr(t),Er(),UE(t),Ir(),ms()}function uI(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return wt(t,"get","$attrs"),e[n]}}))}function hI(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return uI(t)},slots:t.slots,emit:t.emit,expose:e}}function Da(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yg(ar(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Kr)return Kr[n](t)},has(e,n){return n in e||n in Kr}}))}function fI(t,e=!0){return re(t)?t.displayName||t.name:t.name||e&&t.__name}function dI(t){return re(t)&&"__vccOpts"in t}const It=(t,e)=>lE(t,e,hi);function _s(t,e,n){const s=arguments.length;return s===2?ke(e)&&!G(e)?zo(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&zo(n)&&(n=[n]),Ce(t,e,n))}const pI=Symbol.for("v-scx"),gI=()=>Lt(pI),mI="3.3.2",yI="http://www.w3.org/2000/svg",as=typeof document<"u"?document:null,Yf=as&&as.createElement("template"),vI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?as.createElementNS(yI,t):as.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>as.createTextNode(t),createComment:t=>as.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>as.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Yf.innerHTML=s?`<svg>${t}</svg>`:t;const a=Yf.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function wI(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function _I(t,e,n){const s=t.style,r=je(n);if(n&&!r){if(e&&!je(e))for(const i in e)n[i]==null&&_l(s,i,"");for(const i in n)_l(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Xf=/\s*!important$/;function _l(t,e,n){if(G(n))n.forEach(s=>_l(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=EI(t,e);Xf.test(n)?t.setProperty(_r(s),n.replace(Xf,""),"important"):t[s]=n}}const Jf=["Webkit","Moz","ms"],Ac={};function EI(t,e){const n=Ac[e];if(n)return n;let s=nn(e);if(s!=="filter"&&s in t)return Ac[e]=s;s=Ia(s);for(let r=0;r<Jf.length;r++){const i=Jf[r]+s;if(i in t)return Ac[e]=i}return e}const Zf="http://www.w3.org/1999/xlink";function II(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Zf,e.slice(6,e.length)):t.setAttributeNS(Zf,e,n);else{const i=S0(e);n==null||i&&!xg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function bI(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=xg(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Hs(t,e,n,s){t.addEventListener(e,n,s)}function TI(t,e,n,s){t.removeEventListener(e,n,s)}function SI(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=CI(e);if(s){const l=i[e]=RI(s,r);Hs(t,a,l,c)}else o&&(TI(t,a,o,c),i[e]=void 0)}}const ed=/(?:Once|Passive|Capture)$/;function CI(t){let e;if(ed.test(t)){e={};let s;for(;s=t.match(ed);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_r(t.slice(2)),e]}let kc=0;const AI=Promise.resolve(),kI=()=>kc||(AI.then(()=>kc=0),kc=Date.now());function RI(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;kt(xI(s,n.value),e,5,[s])};return n.value=t,n.attached=kI(),n}function xI(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const td=/^on[a-z]/,NI=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?wI(t,s,r):e==="style"?_I(t,n,s):wa(e)?wu(e)||SI(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):DI(t,e,s,r))?bI(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),II(t,e,s,r))};function DI(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&td.test(e)&&re(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||td.test(e)&&je(n)?!1:e in t}const Cn="transition",Dr="animation",Oa=(t,{slots:e})=>_s(TE,km(t),e);Oa.displayName="Transition";const Am={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},OI=Oa.props=Fe({},am,Am),ss=(t,e=[])=>{G(t)?t.forEach(n=>n(...e)):t&&t(...e)},nd=t=>t?G(t)?t.some(e=>e.length>1):t.length>1:!1;function km(t){const e={};for(const B in t)B in Am||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,v=PI(r),y=v&&v[0],w=v&&v[1],{onBeforeEnter:k,onEnter:S,onEnterCancelled:P,onLeave:O,onLeaveCancelled:Q,onBeforeAppear:U=k,onAppear:z=S,onAppearCancelled:x=P}=e,Y=(B,de,Oe)=>{Rn(B,de?u:a),Rn(B,de?l:o),Oe&&Oe()},X=(B,de)=>{B._isLeaving=!1,Rn(B,h),Rn(B,d),Rn(B,f),de&&de()},Ie=B=>(de,Oe)=>{const Ne=B?z:S,Pe=()=>Y(de,B,Oe);ss(Ne,[de,Pe]),sd(()=>{Rn(de,B?c:i),un(de,B?u:a),nd(Ne)||rd(de,s,y,Pe)})};return Fe(e,{onBeforeEnter(B){ss(k,[B]),un(B,i),un(B,o)},onBeforeAppear(B){ss(U,[B]),un(B,c),un(B,l)},onEnter:Ie(!1),onAppear:Ie(!0),onLeave(B,de){B._isLeaving=!0;const Oe=()=>X(B,de);un(B,h),xm(),un(B,f),sd(()=>{B._isLeaving&&(Rn(B,h),un(B,d),nd(O)||rd(B,s,w,Oe))}),ss(O,[B,Oe])},onEnterCancelled(B){Y(B,!1),ss(P,[B])},onAppearCancelled(B){Y(B,!0),ss(x,[B])},onLeaveCancelled(B){X(B),ss(Q,[B])}})}function PI(t){if(t==null)return null;if(ke(t))return[Rc(t.enter),Rc(t.leave)];{const e=Rc(t);return[e,e]}}function Rc(t){return w0(t)}function un(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Rn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function sd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let MI=0;function rd(t,e,n,s){const r=t._endId=++MI,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Rm(t,e);if(!o)return s();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=d=>{d.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function Rm(t,e){const n=window.getComputedStyle(t),s=v=>(n[v]||"").split(", "),r=s(`${Cn}Delay`),i=s(`${Cn}Duration`),o=id(r,i),a=s(`${Dr}Delay`),c=s(`${Dr}Duration`),l=id(a,c);let u=null,h=0,f=0;e===Cn?o>0&&(u=Cn,h=o,f=i.length):e===Dr?l>0&&(u=Dr,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?Cn:Dr:null,f=u?u===Cn?i.length:c.length:0);const d=u===Cn&&/\b(transform|all)(,|$)/.test(s(`${Cn}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function id(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>od(n)+od(t[s])))}function od(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function xm(){return document.body.offsetHeight}const Nm=new WeakMap,Dm=new WeakMap,Om={name:"TransitionGroup",props:Fe({},OI,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=ju(),s=om();let r,i;return $u(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!BI(r[0].el,n.vnode.el,o))return;r.forEach($I),r.forEach(UI);const a=r.filter(VI);xm(),a.forEach(c=>{const l=c.el,u=l.style;un(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=l._moveCb=f=>{f&&f.target!==l||(!f||/transform$/.test(f.propertyName))&&(l.removeEventListener("transitionend",h),l._moveCb=null,Rn(l,o))};l.addEventListener("transitionend",h)})}),()=>{const o=ae(t),a=km(o);let c=o.tag||mt;r=i,i=e.default?Aa(e.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&li(u,ci(u,a,s,n))}if(r)for(let l=0;l<r.length;l++){const u=r[l];li(u,ci(u,a,s,n)),Nm.set(u,u.el.getBoundingClientRect())}return Ce(c,null,i)}}},LI=t=>delete t.mode;Om.props;const FI=Om;function $I(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function UI(t){Dm.set(t,t.el.getBoundingClientRect())}function VI(t){const e=Nm.get(t),n=Dm.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function BI(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:i}=Rm(s);return r.removeChild(s),i}const ad=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>Io(e,n):e};function jI(t){t.target.composing=!0}function cd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const qu={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=ad(r);const i=s||r.props&&r.props.type==="number";Hs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ll(a)),t._assign(a)}),n&&Hs(t,"change",()=>{t.value=t.value.trim()}),e||(Hs(t,"compositionstart",jI),Hs(t,"compositionend",cd),Hs(t,"change",cd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=ad(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&ll(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},zI=["ctrl","shift","alt","meta"],qI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>zI.some(n=>t[`${n}Key`]&&!e.includes(n))},Hu=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=qI[e[r]];if(i&&i(n,e))return}return t(n,...s)},HI=Fe({patchProp:NI},vI);let ld;function KI(){return ld||(ld=XE(HI))}const WI=(...t)=>{const e=KI().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=GI(s);if(!r)return;const i=e._component;!re(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function GI(t){return je(t)?document.querySelector(t):t}const xs=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},QI={},YI=fe("span",{class:"loading-gif"},"Loading",-1),XI=[YI];function JI(t,e){return he(),Le("div",null,XI)}const ZI=xs(QI,[["render",JI]]);var eb=!1;/*!
  * pinia v2.0.36
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Pm;const Pa=t=>Pm=t,Mm=Symbol();function El(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Gr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Gr||(Gr={}));function tb(){const t=Og(!0),e=t.run(()=>qe({}));let n=[],s=[];const r=ar({install(i){Pa(r),r._a=i,i.provide(Mm,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!eb?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Lm=()=>{};function ud(t,e,n,s=Lm){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Pg()&&A0(r),r}function js(t,...e){t.slice().forEach(n=>{n(...e)})}function Il(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];El(r)&&El(s)&&t.hasOwnProperty(n)&&!Me(s)&&!$n(s)?t[n]=Il(r,s):t[n]=s}return t}const nb=Symbol();function sb(t){return!El(t)||!t.hasOwnProperty(nb)}const{assign:xn}=Object;function rb(t){return!!(Me(t)&&t.effect)}function ib(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=iE(n.state.value[t]);return xn(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=ar(It(()=>{Pa(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return c=Fm(t,l,e,n,s,!0),c}function Fm(t,e,n={},s,r,i){let o;const a=xn({actions:{}},n),c={deep:!0};let l,u,h=ar([]),f=ar([]),d;const v=s.state.value[t];!i&&!v&&(s.state.value[t]={}),qe({});let y;function w(z){let x;l=u=!1,typeof z=="function"?(z(s.state.value[t]),x={type:Gr.patchFunction,storeId:t,events:d}):(Il(s.state.value[t],z),x={type:Gr.patchObject,payload:z,storeId:t,events:d});const Y=y=Symbol();Ou().then(()=>{y===Y&&(l=!0)}),u=!0,js(h,x,s.state.value[t])}const k=i?function(){const{state:x}=n,Y=x?x():{};this.$patch(X=>{xn(X,Y)})}:Lm;function S(){o.stop(),h=[],f=[],s._s.delete(t)}function P(z,x){return function(){Pa(s);const Y=Array.from(arguments),X=[],Ie=[];function B(Ne){X.push(Ne)}function de(Ne){Ie.push(Ne)}js(f,{args:Y,name:z,store:Q,after:B,onError:de});let Oe;try{Oe=x.apply(this&&this.$id===t?this:Q,Y)}catch(Ne){throw js(Ie,Ne),Ne}return Oe instanceof Promise?Oe.then(Ne=>(js(X,Ne),Ne)).catch(Ne=>(js(Ie,Ne),Promise.reject(Ne))):(js(X,Oe),Oe)}}const O={_p:s,$id:t,$onAction:ud.bind(null,f),$patch:w,$reset:k,$subscribe(z,x={}){const Y=ud(h,z,x.detached,()=>X()),X=o.run(()=>qr(()=>s.state.value[t],Ie=>{(x.flush==="sync"?u:l)&&z({storeId:t,type:Gr.direct,events:d},Ie)},xn({},c,x)));return Y},$dispose:S},Q=br(O);s._s.set(t,Q);const U=s._e.run(()=>(o=Og(),o.run(()=>e())));for(const z in U){const x=U[z];if(Me(x)&&!rb(x)||$n(x))i||(v&&sb(x)&&(Me(x)?x.value=v[z]:Il(x,v[z])),s.state.value[t][z]=x);else if(typeof x=="function"){const Y=P(z,x);U[z]=Y,a.actions[z]=x}}return xn(Q,U),xn(ae(Q),U),Object.defineProperty(Q,"$state",{get:()=>s.state.value[t],set:z=>{w(x=>{xn(x,z)})}}),s._p.forEach(z=>{xn(Q,o.run(()=>z({store:Q,app:s._a,pinia:s,options:a})))}),v&&i&&n.hydrate&&n.hydrate(Q.$state,v),l=!0,u=!0,Q}function ob(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=ju();return a=a||l&&Lt(Mm,null),a&&Pa(a),a=Pm,a._s.has(s)||(i?Fm(s,e,r,a):ib(s,r,a)),a._s.get(s)}return o.$id=s,o}function $m(t){var e,n,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=$m(t[e]))&&(s&&(s+=" "),s+=n);else for(e in t)t[e]&&(s&&(s+=" "),s+=e);return s}function Um(){for(var t,e,n=0,s="";n<arguments.length;)(t=arguments[n++])&&(e=$m(t))&&(s&&(s+=" "),s+=e);return s}function ab(t){Object.keys(t).forEach(function(e){t[e]===void 0&&delete t[e]})}function So(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?So=function(e){return typeof e}:So=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},So(t)}function cb(t,e){switch(So(e)){case"number":return e;case"string":return e;case"object":return e===null?null:e[t]}return null}function lb(t){return t.classList.contains("xyz-appear")?"appear":t.classList.contains("xyz-in")?"in":t.classList.contains("xyz-out")?"out":null}function hd(t){t._xyzAppearObserver&&t._xyzAppearObserver.disconnect(),t._xyzAnimTimeout&&clearTimeout(t._xyzAnimTimeout),t.removeEventListener("animationend",t._xyzAnimEnd),t.removeEventListener("animationcancelled",t._xyzAnimEnd),delete t._xyzAppearObserver,delete t._xyzAnimTimeout,delete t._xyzAnimEnd}function ub(t,e){return function(n,s){hd(n);function r(){hd(n),s()}var i=lb(n);function o(){var c=cb(i,t);if(typeof c=="number"){n._xyzAnimTimeout=setTimeout(r,c);return}var l="xyz-".concat(i,"-keyframes"),u=new Set([n]);if(c==="auto"){var h=n.querySelectorAll(".xyz-nested, .xyz-".concat(i,"-nested"));h.forEach(u.add,u)}function f(d){u.delete(d),u.size===0&&r()}n._xyzAnimTimeout=setTimeout(function(){u.forEach(function(d){var v=d.offsetParent||d.getClientRects().length;v||f(d);var y=window.getComputedStyle(d).getPropertyValue("animation-name");y.indexOf(l)===-1&&f(d)})}),n._xyzAnimEnd=function(d){d.animationName===l&&f(d.target)},n.addEventListener("animationend",n._xyzAnimEnd,!1),n.addEventListener("animationcancelled",n._xyzAnimEnd,!1)}if(i==="appear"&&e){var a=Object.assign({},e);n.classList.add("xyz-paused-all"),n._xyzAppearObserver=new IntersectionObserver(function(c,l){c.forEach(function(u){u.isIntersecting&&(n.classList.remove("xyz-paused-all"),l.disconnect(),o())})},a),n._xyzAppearObserver.observe(n)}else o()}}var cn={appearFrom:"xyz-appear-from",appearActive:"xyz-appear",appearTo:"xyz-appear-to",inFrom:"xyz-in-from",inActive:"xyz-in",inTo:"xyz-in-to",outFrom:"xyz-out-from",outActive:"xyz-out",outTo:"xyz-out-to"},Vm={appear:Boolean,appearVisible:[Boolean,Object],duration:[Number,String,Object],mode:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,enterFromClass:String,enterActiveClass:String,enterToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hb=Object.assign({},Vm,{tag:{type:String,default:"div"},moveClass:String});function Bm(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.assign({},t,e,{style:Object.assign({},t==null?void 0:t.style,e==null?void 0:e.style),class:Um(t==null?void 0:t.class,e==null?void 0:e.class)})}function jm(t){ab(t),t.appear=!!(t.appear||t.appearVisible);var e=t.appear,n=t.appearVisible,s=t.duration,r=ub(s,n),i={css:!0,type:"animation",appearFromClass:cn.appearFrom,appearActiveClass:cn.appearActive,appearToClass:cn.appearTo,enterFromClass:cn.inFrom,enterActiveClass:cn.inActive,enterToClass:cn.inTo,leaveFromClass:cn.outFrom,leaveActiveClass:cn.outActive,leaveToClass:cn.outTo,onEnter:r,onLeave:r};e&&(i.onAppear=r);var o=Bm(i,t);return delete o.appearVisible,delete o.duration,o}function zm(t,e){var n=jm(Object.assign({},e.attrs,t));return _s(Oa,n,e.slots)}zm.props=Vm;function qm(t,e){var n=jm(Object.assign({},e.attrs,t));function s(){var r=e.slots.default?e.slots.default():[],i=Aa(r);return i.forEach(function(o,a){o.props=Bm({style:{"--xyz-index":a,"--xyz-index-rev":i.length-a-1}},o.props)}),r}return _s(FI,n,s)}qm.props=hb;function fd(t,e){var n=e.value;t.setAttribute("xyz",Um(t._xyzOriginal,n))}var fb={beforeMount:function(e){e._xyzOriginal=e.getAttribute("xyz"),fd.apply(void 0,arguments)},updated:fd},db={install:function(e){e.component("XyzTransition",zm),e.component("XyzTransitionGroup",qm),e.directive("xyz",fb)}};/*!
  * vue-router v4.2.0
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ks=typeof window<"u";function pb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ye=Object.assign;function xc(t,e){const n={};for(const s in e){const r=e[s];n[s]=Bt(r)?r.map(t):t(r)}return n}const Qr=()=>{},Bt=Array.isArray,gb=/\/$/,mb=t=>t.replace(gb,"");function Nc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=_b(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function yb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function dd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function vb(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&lr(e.matched[s],n.matched[r])&&Hm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function lr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Hm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!wb(t[n],e[n]))return!1;return!0}function wb(t,e){return Bt(t)?pd(t,e):Bt(e)?pd(e,t):t===e}function pd(t,e){return Bt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function _b(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var fi;(function(t){t.pop="pop",t.push="push"})(fi||(fi={}));var Yr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Yr||(Yr={}));function Eb(t){if(!t)if(Ks){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mb(t)}const Ib=/^[^#]+#/;function bb(t,e){return t.replace(Ib,"#")+e}function Tb(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ma=()=>({left:window.pageXOffset,top:window.pageYOffset});function Sb(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Tb(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function gd(t,e){return(history.state?history.state.position-e:-1)+t}const bl=new Map;function Cb(t,e){bl.set(t,e)}function Ab(t){const e=bl.get(t);return bl.delete(t),e}let kb=()=>location.protocol+"//"+location.host;function Km(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),dd(c,"")}return dd(n,t)+s+r}function Rb(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const d=Km(t,location),v=n.value,y=e.value;let w=0;if(f){if(n.value=d,e.value=f,o&&o===v){o=null;return}w=y?f.position-y.position:0}else s(d);r.forEach(k=>{k(n.value,v,{delta:w,type:fi.pop,direction:w?w>0?Yr.forward:Yr.back:Yr.unknown})})};function c(){o=n.value}function l(f){r.push(f);const d=()=>{const v=r.indexOf(f);v>-1&&r.splice(v,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(ye({},f.state,{scroll:Ma()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function md(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Ma():null}}function xb(t){const{history:e,location:n}=window,s={value:Km(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:kb()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(c,l){const u=ye({},e.state,md(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ye({},r.value,e.state,{forward:c,scroll:Ma()});i(u.current,u,!0);const h=ye({},md(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Nb(t){t=Eb(t);const e=xb(t),n=Rb(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ye({location:"",base:t,go:s,createHref:bb.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Db(t){return typeof t=="string"||t&&typeof t=="object"}function Wm(t){return typeof t=="string"||typeof t=="symbol"}const An={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Gm=Symbol("");var yd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yd||(yd={}));function ur(t,e){return ye(new Error,{type:t,[Gm]:!0},e)}function ln(t,e){return t instanceof Error&&Gm in t&&(e==null||!!(t.type&e))}const vd="[^/]+?",Ob={sensitive:!1,strict:!1,start:!0,end:!0},Pb=/[.+*?^${}()[\]/\\]/g;function Mb(t,e){const n=ye({},Ob,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(Pb,"\\$&"),d+=40;else if(f.type===1){const{value:v,repeatable:y,optional:w,regexp:k}=f;i.push({name:v,repeatable:y,optional:w});const S=k||vd;if(S!==vd){d+=10;try{new RegExp(`(${S})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${v}" (${S}): `+O.message)}}let P=y?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(P=w&&l.length<2?`(?:/${P})`:"/"+P),w&&(P+="?"),r+=P,d+=20,w&&(d+=-8),y&&(d+=-20),S===".*"&&(d+=-50)}u.push(d)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",v=i[f-1];h[v.name]=d&&v.repeatable?d.split("/"):d}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:v,repeatable:y,optional:w}=d,k=v in l?l[v]:"";if(Bt(k)&&!y)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const S=Bt(k)?k.join("/"):k;if(!S)if(w)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=S}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Lb(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Fb(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Lb(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(wd(s))return 1;if(wd(r))return-1}return r.length-s.length}function wd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $b={type:0,value:""},Ub=/[a-zA-Z0-9_]/;function Vb(t){if(!t)return[[]];if(t==="/")return[[$b]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:Ub.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function Bb(t,e,n){const s=Mb(Vb(t.path),n),r=ye(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function jb(t,e){const n=[],s=new Map;e=Id({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const d=!f,v=zb(u);v.aliasOf=f&&f.record;const y=Id(e,u),w=[v];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of P)w.push(ye({},v,{components:f?f.record.components:v.components,path:O,aliasOf:f?f.record:v}))}let k,S;for(const P of w){const{path:O}=P;if(h&&O[0]!=="/"){const Q=h.record.path,U=Q[Q.length-1]==="/"?"":"/";P.path=h.record.path+(O&&U+O)}if(k=Bb(P,h,y),f?f.alias.push(k):(S=S||k,S!==k&&S.alias.push(k),d&&u.name&&!Ed(k)&&o(u.name)),v.children){const Q=v.children;for(let U=0;U<Q.length;U++)i(Q[U],k,f&&f.children[U])}f=f||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return S?()=>{o(S)}:Qr}function o(u){if(Wm(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Fb(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Qm(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ed(u)&&s.set(u.record.name,u)}function l(u,h){let f,d={},v,y;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw ur(1,{location:u});y=f.record.name,d=ye(_d(h.params,f.keys.filter(S=>!S.optional).map(S=>S.name)),u.params&&_d(u.params,f.keys.map(S=>S.name))),v=f.stringify(d)}else if("path"in u)v=u.path,f=n.find(S=>S.re.test(v)),f&&(d=f.parse(v),y=f.record.name);else{if(f=h.name?s.get(h.name):n.find(S=>S.re.test(h.path)),!f)throw ur(1,{location:u,currentLocation:h});y=f.record.name,d=ye({},h.params,u.params),v=f.stringify(d)}const w=[];let k=f;for(;k;)w.unshift(k.record),k=k.parent;return{name:y,path:v,params:d,matched:w,meta:Hb(w)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function _d(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function zb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:qb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function qb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Ed(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Hb(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function Id(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Qm(t,e){return e.children.some(n=>n===t||Qm(t,n))}const Ym=/#/g,Kb=/&/g,Wb=/\//g,Gb=/=/g,Qb=/\?/g,Xm=/\+/g,Yb=/%5B/g,Xb=/%5D/g,Jm=/%5E/g,Jb=/%60/g,Zm=/%7B/g,Zb=/%7C/g,ey=/%7D/g,eT=/%20/g;function Ku(t){return encodeURI(""+t).replace(Zb,"|").replace(Yb,"[").replace(Xb,"]")}function tT(t){return Ku(t).replace(Zm,"{").replace(ey,"}").replace(Jm,"^")}function Tl(t){return Ku(t).replace(Xm,"%2B").replace(eT,"+").replace(Ym,"%23").replace(Kb,"%26").replace(Jb,"`").replace(Zm,"{").replace(ey,"}").replace(Jm,"^")}function nT(t){return Tl(t).replace(Gb,"%3D")}function sT(t){return Ku(t).replace(Ym,"%23").replace(Qb,"%3F")}function rT(t){return t==null?"":sT(t).replace(Wb,"%2F")}function qo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function iT(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Xm," "),o=i.indexOf("="),a=qo(o<0?i:i.slice(0,o)),c=o<0?null:qo(i.slice(o+1));if(a in e){let l=e[a];Bt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function bd(t){let e="";for(let n in t){const s=t[n];if(n=nT(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Bt(s)?s.map(i=>i&&Tl(i)):[s&&Tl(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function oT(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Bt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const aT=Symbol(""),Td=Symbol(""),Wu=Symbol(""),Gu=Symbol(""),Sl=Symbol("");function Or(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Dn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ur(4,{from:n,to:e})):h instanceof Error?a(h):Db(h)?a(ur(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Dc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(cT(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Dn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=pb(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Dn(f,n,s,i,o)()}))}}return r}function cT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Sd(t){const e=Lt(Wu),n=Lt(Gu),s=It(()=>e.resolve(Se(t.to))),r=It(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(lr.bind(null,u));if(f>-1)return f;const d=Cd(c[l-2]);return l>1&&Cd(u)===d&&h[h.length-1].path!==d?h.findIndex(lr.bind(null,c[l-2])):f}),i=It(()=>r.value>-1&&fT(n.params,s.value.params)),o=It(()=>r.value>-1&&r.value===n.matched.length-1&&Hm(n.params,s.value.params));function a(c={}){return hT(c)?e[Se(t.replace)?"replace":"push"](Se(t.to)).catch(Qr):Promise.resolve()}return{route:s,href:It(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const lT=Lu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sd,setup(t,{slots:e}){const n=br(Sd(t)),{options:s}=Lt(Wu),r=It(()=>({[Ad(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ad(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:_s("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),uT=lT;function hT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function fT(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Bt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Cd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ad=(t,e,n)=>t??e??n,dT=Lu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Lt(Sl),r=It(()=>t.route||s.value),i=Lt(Td,0),o=It(()=>{let l=Se(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=It(()=>r.value.matched[o.value]);bo(Td,It(()=>o.value+1)),bo(aT,a),bo(Sl,r);const c=qe();return qr(()=>[c.value,a.value,t.name],([l,u,h],[f,d,v])=>{u&&(u.instances[h]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!lr(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return kd(n.default,{Component:f,route:l});const d=h.props[u],v=d?d===!0?l.params:typeof d=="function"?d(l):d:null,w=_s(f,ye({},v,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return kd(n.default,{Component:w,route:l})||w}}});function kd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ty=dT;function pT(t){const e=jb(t.routes,t),n=t.parseQuery||iT,s=t.stringifyQuery||bd,r=t.history,i=Or(),o=Or(),a=Or(),c=nE(An);let l=An;Ks&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=xc.bind(null,E=>""+E),h=xc.bind(null,rT),f=xc.bind(null,qo);function d(E,$){let D,q;return Wm(E)?(D=e.getRecordMatcher(E),q=$):q=E,e.addRoute(q,D)}function v(E){const $=e.getRecordMatcher(E);$&&e.removeRoute($)}function y(){return e.getRoutes().map(E=>E.record)}function w(E){return!!e.getRecordMatcher(E)}function k(E,$){if($=ye({},$||c.value),typeof E=="string"){const m=Nc(n,E,$.path),_=e.resolve({path:m.path},$),b=r.createHref(m.fullPath);return ye(m,_,{params:f(_.params),hash:qo(m.hash),redirectedFrom:void 0,href:b})}let D;if("path"in E)D=ye({},E,{path:Nc(n,E.path,$.path).path});else{const m=ye({},E.params);for(const _ in m)m[_]==null&&delete m[_];D=ye({},E,{params:h(m)}),$.params=h($.params)}const q=e.resolve(D,$),me=E.hash||"";q.params=u(f(q.params));const p=yb(s,ye({},E,{hash:tT(me),path:q.path})),g=r.createHref(p);return ye({fullPath:p,hash:me,query:s===bd?oT(E.query):E.query||{}},q,{redirectedFrom:void 0,href:g})}function S(E){return typeof E=="string"?Nc(n,E,c.value.path):ye({},E)}function P(E,$){if(l!==E)return ur(8,{from:$,to:E})}function O(E){return z(E)}function Q(E){return O(ye(S(E),{replace:!0}))}function U(E){const $=E.matched[E.matched.length-1];if($&&$.redirect){const{redirect:D}=$;let q=typeof D=="function"?D(E):D;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=S(q):{path:q},q.params={}),ye({query:E.query,hash:E.hash,params:"path"in q?{}:E.params},q)}}function z(E,$){const D=l=k(E),q=c.value,me=E.state,p=E.force,g=E.replace===!0,m=U(D);if(m)return z(ye(S(m),{state:typeof m=="object"?ye({},me,m.state):me,force:p,replace:g}),$||D);const _=D;_.redirectedFrom=$;let b;return!p&&vb(s,q,D)&&(b=ur(16,{to:_,from:q}),Kt(q,q,!0,!1)),(b?Promise.resolve(b):X(_,q)).catch(T=>ln(T)?ln(T,2)?T:Tn(T):ge(T,_,q)).then(T=>{if(T){if(ln(T,2))return z(ye({replace:g},S(T.to),{state:typeof T.to=="object"?ye({},me,T.to.state):me,force:p}),$||_)}else T=B(_,q,!0,g,me);return Ie(_,q,T),T})}function x(E,$){const D=P(E,$);return D?Promise.reject(D):Promise.resolve()}function Y(E){const $=Us.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(E):E()}function X(E,$){let D;const[q,me,p]=gT(E,$);D=Dc(q.reverse(),"beforeRouteLeave",E,$);for(const m of q)m.leaveGuards.forEach(_=>{D.push(Dn(_,E,$))});const g=x.bind(null,E,$);return D.push(g),et(D).then(()=>{D=[];for(const m of i.list())D.push(Dn(m,E,$));return D.push(g),et(D)}).then(()=>{D=Dc(me,"beforeRouteUpdate",E,$);for(const m of me)m.updateGuards.forEach(_=>{D.push(Dn(_,E,$))});return D.push(g),et(D)}).then(()=>{D=[];for(const m of E.matched)if(m.beforeEnter&&!$.matched.includes(m))if(Bt(m.beforeEnter))for(const _ of m.beforeEnter)D.push(Dn(_,E,$));else D.push(Dn(m.beforeEnter,E,$));return D.push(g),et(D)}).then(()=>(E.matched.forEach(m=>m.enterCallbacks={}),D=Dc(p,"beforeRouteEnter",E,$),D.push(g),et(D))).then(()=>{D=[];for(const m of o.list())D.push(Dn(m,E,$));return D.push(g),et(D)}).catch(m=>ln(m,8)?m:Promise.reject(m))}function Ie(E,$,D){for(const q of a.list())Y(()=>q(E,$,D))}function B(E,$,D,q,me){const p=P(E,$);if(p)return p;const g=$===An,m=Ks?history.state:{};D&&(q||g?r.replace(E.fullPath,ye({scroll:g&&m&&m.scroll},me)):r.push(E.fullPath,me)),c.value=E,Kt(E,$,D,g),Tn()}let de;function Oe(){de||(de=r.listen((E,$,D)=>{if(!no.listening)return;const q=k(E),me=U(q);if(me){z(ye(me,{replace:!0}),q).catch(Qr);return}l=q;const p=c.value;Ks&&Cb(gd(p.fullPath,D.delta),Ma()),X(q,p).catch(g=>ln(g,12)?g:ln(g,2)?(z(g.to,q).then(m=>{ln(m,20)&&!D.delta&&D.type===fi.pop&&r.go(-1,!1)}).catch(Qr),Promise.reject()):(D.delta&&r.go(-D.delta,!1),ge(g,q,p))).then(g=>{g=g||B(q,p,!1),g&&(D.delta&&!ln(g,8)?r.go(-D.delta,!1):D.type===fi.pop&&ln(g,20)&&r.go(-1,!1)),Ie(q,p,g)}).catch(Qr)}))}let Ne=Or(),Pe=Or(),_e;function ge(E,$,D){Tn(E);const q=Pe.list();return q.length?q.forEach(me=>me(E,$,D)):console.error(E),Promise.reject(E)}function an(){return _e&&c.value!==An?Promise.resolve():new Promise((E,$)=>{Ne.add([E,$])})}function Tn(E){return _e||(_e=!E,Oe(),Ne.list().forEach(([$,D])=>E?D(E):$()),Ne.reset()),E}function Kt(E,$,D,q){const{scrollBehavior:me}=t;if(!Ks||!me)return Promise.resolve();const p=!D&&Ab(gd(E.fullPath,0))||(q||!D)&&history.state&&history.state.scroll||null;return Ou().then(()=>me(E,$,p)).then(g=>g&&Sb(g)).catch(g=>ge(g,E,$))}const pt=E=>r.go(E);let $s;const Us=new Set,no={currentRoute:c,listening:!0,addRoute:d,removeRoute:v,hasRoute:w,getRoutes:y,resolve:k,options:t,push:O,replace:Q,go:pt,back:()=>pt(-1),forward:()=>pt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Pe.add,isReady:an,install(E){const $=this;E.component("RouterLink",uT),E.component("RouterView",ty),E.config.globalProperties.$router=$,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Se(c)}),Ks&&!$s&&c.value===An&&($s=!0,O(r.location).catch(me=>{}));const D={};for(const me in An)D[me]=It(()=>c.value[me]);E.provide(Wu,$),E.provide(Gu,br(D)),E.provide(Sl,c);const q=E.unmount;Us.add(E),E.unmount=function(){Us.delete(E),Us.size<1&&(l=An,de&&de(),de=null,c.value=An,$s=!1,_e=!1),q()}}};function et(E){return E.reduce(($,D)=>$.then(()=>Y(D)),Promise.resolve())}return no}function gT(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>lr(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>lr(l,c))||r.push(c))}return[n,s,r]}function mT(){return Lt(Gu)}const yT={class:"min-h-screen flex place-items-center"},vT={__name:"App",setup(t){return(e,n)=>(he(),Le("main",yT,[Ce(Se(ty))]))}},wT={},_T={class:"bg-lime-300 p-3 font-bold rounded-md shadow-md uppercase"};function ET(t,e){return he(),Le("button",_T,[FE(t.$slots,"default")])}const Ho=xs(wT,[["render",ET]]);/**
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
 */const ny=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},IT=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(f=64)),s.push(n[u],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ny(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):IT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new bT;const f=i<<2|a>>4;if(s.push(f),l!==64){const d=a<<4&240|l>>2;if(s.push(d),h!==64){const v=l<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TT=function(t){const e=ny(t);return sy.encodeByteArray(e,!0)},Ko=function(t){return TT(t).replace(/\./g,"")},ry=function(t){try{return sy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ST(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const CT=()=>ST().__FIREBASE_DEFAULTS__,AT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ry(t[1]);return e&&JSON.parse(e)},Qu=()=>{try{return CT()||AT()||kT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},iy=t=>{var e,n;return(n=(e=Qu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},RT=t=>{const e=iy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},oy=()=>{var t;return(t=Qu())===null||t===void 0?void 0:t.config},ay=t=>{var e;return(e=Qu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class xT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function NT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ko(JSON.stringify(n)),Ko(JSON.stringify(o)),a].join(".")}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function DT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function cy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function OT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PT(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ly(){try{return typeof indexedDB=="object"}catch{return!1}}function uy(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function MT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const LT="FirebaseError";class Ht extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=LT,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns.prototype.create)}}class Ns{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?FT(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ht(r,a,s)}}function FT(t,e){return t.replace($T,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const $T=/\{\$([^}]+)}/g;function UT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function di(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Rd(i)&&Rd(o)){if(!di(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Rd(t){return t!==null&&typeof t=="object"}/**
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
 */function Oi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function VT(t,e){const n=new BT(t,e);return n.subscribe.bind(n)}class BT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");jT(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Oc),r.error===void 0&&(r.error=Oc),r.complete===void 0&&(r.complete=Oc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oc(){}/**
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
 */const zT=1e3,qT=2,HT=4*60*60*1e3,KT=.5;function xd(t,e=zT,n=qT){const s=e*Math.pow(n,t),r=Math.round(KT*s*(Math.random()-.5)*2);return Math.min(HT,s+r)}/**
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
 */function ze(t){return t&&t._delegate?t._delegate:t}class jt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const rs="[DEFAULT]";/**
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
 */class WT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new xT;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QT(e))try{this.getOrInitializeService({instanceIdentifier:rs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=rs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rs){return this.instances.has(e)}getOptions(e=rs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:GT(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=rs){return this.component?this.component.multipleInstances?e:rs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GT(t){return t===rs?void 0:t}function QT(t){return t.instantiationMode==="EAGER"}/**
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
 */class YT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const XT={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},JT=ue.INFO,ZT={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},eS=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=ZT[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class La{constructor(e){this.name=e,this._logLevel=JT,this._logHandler=eS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const tS=(t,e)=>e.some(n=>t instanceof n);let Nd,Dd;function nS(){return Nd||(Nd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sS(){return Dd||(Dd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hy=new WeakMap,Cl=new WeakMap,fy=new WeakMap,Pc=new WeakMap,Yu=new WeakMap;function rS(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Vn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hy.set(n,t)}).catch(()=>{}),Yu.set(e,t),e}function iS(t){if(Cl.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Cl.set(t,e)}let Al={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oS(t){Al=t(Al)}function aS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Mc(this),e,...n);return fy.set(s,e.sort?e.sort():[e]),Vn(s)}:sS().includes(t)?function(...e){return t.apply(Mc(this),e),Vn(hy.get(this))}:function(...e){return Vn(t.apply(Mc(this),e))}}function cS(t){return typeof t=="function"?aS(t):(t instanceof IDBTransaction&&iS(t),tS(t,nS())?new Proxy(t,Al):t)}function Vn(t){if(t instanceof IDBRequest)return rS(t);if(Pc.has(t))return Pc.get(t);const e=cS(t);return e!==t&&(Pc.set(t,e),Yu.set(e,t)),e}const Mc=t=>Yu.get(t);function lS(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Vn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Vn(o.result),c.oldVersion,c.newVersion,Vn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const uS=["get","getKey","getAll","getAllKeys","count"],hS=["put","add","delete","clear"],Lc=new Map;function Od(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lc.get(e))return Lc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=hS.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||uS.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Lc.set(e,i),i}oS(t=>({...t,get:(e,n,s)=>Od(e,n)||t.get(e,n,s),has:(e,n)=>!!Od(e,n)||t.has(e,n)}));/**
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
 */class fS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dS(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function dS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kl="@firebase/app",Pd="0.9.10";/**
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
 */const Es=new La("@firebase/app"),pS="@firebase/app-compat",gS="@firebase/analytics-compat",mS="@firebase/analytics",yS="@firebase/app-check-compat",vS="@firebase/app-check",wS="@firebase/auth",_S="@firebase/auth-compat",ES="@firebase/database",IS="@firebase/database-compat",bS="@firebase/functions",TS="@firebase/functions-compat",SS="@firebase/installations",CS="@firebase/installations-compat",AS="@firebase/messaging",kS="@firebase/messaging-compat",RS="@firebase/performance",xS="@firebase/performance-compat",NS="@firebase/remote-config",DS="@firebase/remote-config-compat",OS="@firebase/storage",PS="@firebase/storage-compat",MS="@firebase/firestore",LS="@firebase/firestore-compat",FS="firebase",$S="9.22.0";/**
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
 */const Rl="[DEFAULT]",US={[kl]:"fire-core",[pS]:"fire-core-compat",[mS]:"fire-analytics",[gS]:"fire-analytics-compat",[vS]:"fire-app-check",[yS]:"fire-app-check-compat",[wS]:"fire-auth",[_S]:"fire-auth-compat",[ES]:"fire-rtdb",[IS]:"fire-rtdb-compat",[bS]:"fire-fn",[TS]:"fire-fn-compat",[SS]:"fire-iid",[CS]:"fire-iid-compat",[AS]:"fire-fcm",[kS]:"fire-fcm-compat",[RS]:"fire-perf",[xS]:"fire-perf-compat",[NS]:"fire-rc",[DS]:"fire-rc-compat",[OS]:"fire-gcs",[PS]:"fire-gcs-compat",[MS]:"fire-fst",[LS]:"fire-fst-compat","fire-js":"fire-js",[FS]:"fire-js-all"};/**
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
 */const Wo=new Map,xl=new Map;function VS(t,e){try{t.container.addComponent(e)}catch(n){Es.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function sn(t){const e=t.name;if(xl.has(e))return Es.debug(`There were multiple attempts to register component ${e}.`),!1;xl.set(e,t);for(const n of Wo.values())VS(n,t);return!0}function Ds(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const BS={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Bn=new Ns("app","Firebase",BS);/**
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
 */class jS{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
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
 */const Tr=$S;function dy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Rl,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Bn.create("bad-app-name",{appName:String(r)});if(n||(n=oy()),!n)throw Bn.create("no-options");const i=Wo.get(r);if(i){if(di(n,i.options)&&di(s,i.config))return i;throw Bn.create("duplicate-app",{appName:r})}const o=new YT(r);for(const c of xl.values())o.addComponent(c);const a=new jS(n,s,o);return Wo.set(r,a),a}function Xu(t=Rl){const e=Wo.get(t);if(!e&&t===Rl&&oy())return dy();if(!e)throw Bn.create("no-app",{appName:t});return e}function xt(t,e,n){var s;let r=(s=US[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Es.warn(a.join(" "));return}sn(new jt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const zS="firebase-heartbeat-database",qS=1,pi="firebase-heartbeat-store";let Fc=null;function py(){return Fc||(Fc=lS(zS,qS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pi)}}}).catch(t=>{throw Bn.create("idb-open",{originalErrorMessage:t.message})})),Fc}async function HS(t){try{return await(await py()).transaction(pi).objectStore(pi).get(gy(t))}catch(e){if(e instanceof Ht)Es.warn(e.message);else{const n=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Es.warn(n.message)}}}async function Md(t,e){try{const s=(await py()).transaction(pi,"readwrite");await s.objectStore(pi).put(e,gy(t)),await s.done}catch(n){if(n instanceof Ht)Es.warn(n.message);else{const s=Bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Es.warn(s.message)}}}function gy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const KS=1024,WS=30*24*60*60*1e3;class GS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ld();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=WS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ld(),{heartbeatsToSend:n,unsentEntries:s}=QS(this._heartbeatsCache.heartbeats),r=Ko(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ld(){return new Date().toISOString().substring(0,10)}function QS(t,e=KS){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Fd(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Fd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class YS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ly()?uy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await HS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Md(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Md(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Fd(t){return Ko(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function XS(t){sn(new jt("platform-logger",e=>new fS(e),"PRIVATE")),sn(new jt("heartbeat",e=>new GS(e),"PRIVATE")),xt(kl,Pd,t),xt(kl,Pd,"esm2017"),xt("fire-js","")}XS("");function Ju(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function my(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JS=my,yy=new Ns("auth","Firebase",my());/**
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
 */const Go=new La("@firebase/auth");function ZS(t,...e){Go.logLevel<=ue.WARN&&Go.warn(`Auth (${Tr}): ${t}`,...e)}function Co(t,...e){Go.logLevel<=ue.ERROR&&Go.error(`Auth (${Tr}): ${t}`,...e)}/**
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
 */function rn(t,...e){throw Zu(t,...e)}function Zt(t,...e){return Zu(t,...e)}function vy(t,e,n){const s=Object.assign(Object.assign({},JS()),{[e]:n});return new Ns("auth","Firebase",s).create(e,{appName:t.name})}function eC(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&rn(t,"argument-error"),vy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return yy.create(t,...e)}function ne(t,e,...n){if(!t)throw Zu(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Co(e),new Error(e)}function vn(t,e){t||fn(e)}/**
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
 */function Nl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tC(){return $d()==="http:"||$d()==="https:"}function $d(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function nC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tC()||cy()||"connection"in navigator)?navigator.onLine:!0}function sC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Pi{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=DT()||OT()}get(){return nC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function eh(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const iC=new Pi(3e4,6e4);function _y(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mi(t,e,n,s,r={}){return Ey(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Oi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),wy.fetch()(Iy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Ey(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},rC),e);try{const r=new aC(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw lo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw lo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw lo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw lo(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw vy(t,u,l);rn(t,u)}}catch(r){if(r instanceof Ht)throw r;rn(t,"network-request-failed",{message:String(r)})}}async function oC(t,e,n,s,r={}){const i=await Mi(t,e,n,s,r);return"mfaPendingCredential"in i&&rn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Iy(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?eh(t.config,r):`${t.config.apiScheme}://${r}`}class aC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Zt(this.auth,"network-request-failed")),iC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function lo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Zt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function cC(t,e){return Mi(t,"POST","/v1/accounts:delete",e)}async function lC(t,e){return Mi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uC(t,e=!1){const n=ze(t),s=await n.getIdToken(e),r=th(s);ne(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Xr($c(r.auth_time)),issuedAtTime:Xr($c(r.iat)),expirationTime:Xr($c(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $c(t){return Number(t)*1e3}function th(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Co("JWT malformed, contained fewer than 3 sections"),null;try{const r=ry(n);return r?JSON.parse(r):(Co("Failed to decode base64 JWT payload"),null)}catch(r){return Co("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function hC(t){const e=th(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ht&&fC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function fC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class by{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xr(this.lastLoginAt),this.creationTime=Xr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await gi(t,lC(n,{idToken:s}));ne(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?mC(i.providerUserInfo):[],a=gC(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new by(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function pC(t){const e=ze(t);await Qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gC(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function mC(t){return t.map(e=>{var{providerId:n}=e,s=Ju(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function yC(t,e){const n=await Ey(t,{},async()=>{const s=Oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Iy(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await yC(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new mi;return s&&(ne(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ne(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ne(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mi,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
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
 */function kn(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ys{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Ju(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new by(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gi(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uC(this,e)}reload(){return pC(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ys(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Qo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await gi(this,cC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:O,isAnonymous:Q,providerData:U,stsTokenManager:z}=n;ne(P&&z,e,"internal-error");const x=mi.fromJSON(this.name,z);ne(typeof P=="string",e,"internal-error"),kn(h,e.name),kn(f,e.name),ne(typeof O=="boolean",e,"internal-error"),ne(typeof Q=="boolean",e,"internal-error"),kn(d,e.name),kn(v,e.name),kn(y,e.name),kn(w,e.name),kn(k,e.name),kn(S,e.name);const Y=new ys({uid:P,auth:e,email:f,emailVerified:O,displayName:h,isAnonymous:Q,photoURL:v,phoneNumber:d,tenantId:y,stsTokenManager:x,createdAt:k,lastLoginAt:S});return U&&Array.isArray(U)&&(Y.providerData=U.map(X=>Object.assign({},X))),w&&(Y._redirectEventId=w),Y}static async _fromIdTokenResponse(e,n,s=!1){const r=new mi;r.updateFromServerResponse(n);const i=new ys({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Qo(i),i}}/**
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
 */const Ud=new Map;function dn(t){vn(t instanceof Function,"Expected a class definition");let e=Ud.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ud.set(t,e),e)}/**
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
 */class Ty{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ty.type="NONE";const Vd=Ty;/**
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
 */function Ao(t,e,n){return`firebase:${t}:${e}:${n}`}class Zs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ao(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ao("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ys._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Zs(dn(Vd),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||dn(Vd);const o=Ao(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=ys._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Zs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Zs(i,e,s))}}/**
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
 */function Bd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ay(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ry(e))return"Blackberry";if(xy(e))return"Webos";if(nh(e))return"Safari";if((e.includes("chrome/")||Cy(e))&&!e.includes("edge/"))return"Chrome";if(ky(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Sy(t=ut()){return/firefox\//i.test(t)}function nh(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cy(t=ut()){return/crios\//i.test(t)}function Ay(t=ut()){return/iemobile/i.test(t)}function ky(t=ut()){return/android/i.test(t)}function Ry(t=ut()){return/blackberry/i.test(t)}function xy(t=ut()){return/webos/i.test(t)}function Fa(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vC(t=ut()){var e;return Fa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wC(){return PT()&&document.documentMode===10}function Ny(t=ut()){return Fa(t)||ky(t)||xy(t)||Ry(t)||/windows phone/i.test(t)||Ay(t)}function _C(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Dy(t,e=[]){let n;switch(t){case"Browser":n=Bd(ut());break;case"Worker":n=`${Bd(ut())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Tr}/${s}`}async function Oy(t,e){return Mi(t,"GET","/v2/recaptchaConfig",_y(t,e))}function jd(t){return t!==void 0&&t.enterprise!==void 0}class Py{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function EC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function My(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Zt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",EC().appendChild(s)})}function IC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const bC="https://www.google.com/recaptcha/enterprise.js?render=",TC="recaptcha-enterprise",SC="NO_RECAPTCHA";class CC{constructor(e){this.type=TC,this.auth=Li(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Oy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Py(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;jd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(SC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&jd(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}My(bC+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
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
 */class AC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class kC{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zd(this),this.idTokenSubscription=new zd(this),this.beforeStateQueue=new AC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Zs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ze(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}async initializeRecaptchaConfig(){const e=await Oy(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Py(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new CC(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ns("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Zs.create(this,[dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ne(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ZS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Li(t){return ze(t)}class zd{constructor(e){this.auth=e,this.observer=null,this.addObserver=VT(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function RC(t,e){const n=Ds(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(di(i,e??{}))return r;rn(r,"already-initialized")}return n.initialize({options:e})}function xC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function NC(t,e,n){const s=Li(t);ne(s._canInitEmulator,s,"emulator-config-failed"),ne(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Ly(e),{host:o,port:a}=DC(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||OC()}function Ly(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DC(t){const e=Ly(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:qd(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:qd(o)}}}function qd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Fy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
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
 */async function er(t,e){return oC(t,"POST","/v1/accounts:signInWithIdp",_y(t,e))}/**
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
 */const PC="http://localhost";class Is extends Fy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Ju(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Is(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return er(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,er(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,er(e,n)}buildRequest(){const e={requestUri:PC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Oi(n)}return e}}/**
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
 */class sh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fi extends sh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class On extends Fi{constructor(){super("facebook.com")}static credential(e){return Is._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
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
 */class Ot extends Fi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Is._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ot.credential(n,s)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
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
 */class Pn extends Fi{constructor(){super("github.com")}static credential(e){return Is._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
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
 */class Mn extends Fi{constructor(){super("twitter.com")}static credential(e,n){return Is._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Mn.credential(n,s)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
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
 */class hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await ys._fromIdTokenResponse(e,s,r),o=Hd(s);return new hr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Hd(s);return new hr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Hd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Yo extends Ht{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Yo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Yo(e,n,s,r)}}function $y(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yo._fromErrorAndOperation(t,i,e,s):i})}async function MC(t,e,n=!1){const s=await gi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hr._forOperation(t,"link",s)}/**
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
 */async function LC(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await gi(t,$y(s,r,e,t),n);ne(i.idToken,s,"internal-error");const o=th(i.idToken);ne(o,s,"internal-error");const{sub:a}=o;return ne(t.uid===a,s,"user-mismatch"),hr._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&rn(s,"user-mismatch"),i}}/**
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
 */async function FC(t,e,n=!1){const s="signIn",r=await $y(t,s,e),i=await hr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function $C(t,e,n,s){return ze(t).onIdTokenChanged(e,n,s)}function UC(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function VC(t,e,n,s){return ze(t).onAuthStateChanged(e,n,s)}function BC(t){return ze(t).signOut()}const Xo="__sak";/**
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
 */class Uy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xo,"1"),this.storage.removeItem(Xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function jC(){const t=ut();return nh(t)||Fa(t)}const zC=1e3,qC=10;class Vy extends Uy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jC()&&_C(),this.fallbackToPolling=Ny(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);wC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,qC):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},zC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vy.type="LOCAL";const HC=Vy;/**
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
 */class By extends Uy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}By.type="SESSION";const jy=By;/**
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
 */function KC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $a{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new $a(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await KC(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$a.receivers=[];/**
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
 */function rh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class WC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=rh("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function en(){return window}function GC(t){en().location.href=t}/**
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
 */function zy(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function QC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function XC(){return zy()?self:null}/**
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
 */const qy="firebaseLocalStorageDb",JC=1,Jo="firebaseLocalStorage",Hy="fbase_key";class $i{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ua(t,e){return t.transaction([Jo],e?"readwrite":"readonly").objectStore(Jo)}function ZC(){const t=indexedDB.deleteDatabase(qy);return new $i(t).toPromise()}function Dl(){const t=indexedDB.open(qy,JC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Jo,{keyPath:Hy})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Jo)?e(s):(s.close(),await ZC(),e(await Dl()))})})}async function Kd(t,e,n){const s=Ua(t,!0).put({[Hy]:e,value:n});return new $i(s).toPromise()}async function eA(t,e){const n=Ua(t,!1).get(e),s=await new $i(n).toPromise();return s===void 0?null:s.value}function Wd(t,e){const n=Ua(t,!0).delete(e);return new $i(n).toPromise()}const tA=800,nA=3;class Ky{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>nA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$a._getInstance(XC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await QC(),!this.activeServiceWorker)return;this.sender=new WC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dl();return await Kd(e,Xo,"1"),await Wd(e,Xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Kd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>eA(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ua(r,!1).getAll();return new $i(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ky.type="LOCAL";const sA=Ky;new Pi(3e4,6e4);/**
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
 */function Wy(t,e){return e?dn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ih extends Fy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return er(e,this._buildIdpRequest())}_linkToIdToken(e,n){return er(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return er(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rA(t){return FC(t.auth,new ih(t),t.bypassAuthState)}function iA(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),LC(n,new ih(t),t.bypassAuthState)}async function oA(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),MC(n,new ih(t),t.bypassAuthState)}/**
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
 */class Gy{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rA;case"linkViaPopup":case"linkViaRedirect":return oA;case"reauthViaPopup":case"reauthViaRedirect":return iA;default:rn(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const aA=new Pi(2e3,1e4);async function cA(t,e,n){const s=Li(t);eC(t,e,sh);const r=Wy(s,n);return new ls(s,"signInViaPopup",e,r).executeNotNull()}class ls extends Gy{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ls.currentPopupAction&&ls.currentPopupAction.cancel(),ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=rh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aA.get())};e()}}ls.currentPopupAction=null;/**
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
 */const lA="pendingRedirect",ko=new Map;class uA extends Gy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ko.get(this.auth._key());if(!e){try{const s=await hA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ko.set(this.auth._key(),e)}return this.bypassAuthState||ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hA(t,e){const n=pA(e),s=dA(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function fA(t,e){ko.set(t._key(),e)}function dA(t){return dn(t._redirectPersistence)}function pA(t){return Ao(lA,t.config.apiKey,t.name)}async function gA(t,e,n=!1){const s=Li(t),r=Wy(s,e),o=await new uA(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const mA=10*60*1e3;class yA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Qy(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gd(e))}saveEventToCache(e){this.cachedEventUids.add(Gd(e)),this.lastProcessedEventTime=Date.now()}}function Gd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qy(t);default:return!1}}/**
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
 */async function wA(t,e={}){return Mi(t,"GET","/v1/projects",e)}/**
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
 */const _A=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EA=/^https?/;async function IA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wA(t);for(const n of e)try{if(bA(n))return}catch{}rn(t,"unauthorized-domain")}function bA(t){const e=Nl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!EA.test(n))return!1;if(_A.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const TA=new Pi(3e4,6e4);function Qd(){const t=en().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SA(t){return new Promise((e,n)=>{var s,r,i;function o(){Qd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qd(),n(Zt(t,"network-request-failed"))},timeout:TA.get()})}if(!((r=(s=en().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=en().gapi)===null||i===void 0)&&i.load)o();else{const a=IC("iframefcb");return en()[a]=()=>{gapi.load?o():n(Zt(t,"network-request-failed"))},My(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ro=null,e})}let Ro=null;function CA(t){return Ro=Ro||SA(t),Ro}/**
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
 */const AA=new Pi(5e3,15e3),kA="__/auth/iframe",RA="emulator/auth/iframe",xA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DA(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?eh(e,RA):`https://${t.config.authDomain}/${kA}`,s={apiKey:e.apiKey,appName:t.name,v:Tr},r=NA.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Oi(s).slice(1)}`}async function OA(t){const e=await CA(t),n=en().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:DA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xA,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),a=en().setTimeout(()=>{i(o)},AA.get());function c(){en().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const PA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MA=500,LA=600,FA="_blank",$A="http://localhost";class Yd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UA(t,e,n,s=MA,r=LA){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},PA),{width:s.toString(),height:r.toString(),top:i,left:o}),l=ut().toLowerCase();n&&(a=Cy(l)?FA:n),Sy(l)&&(e=e||$A,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[d,v])=>`${f}${d}=${v},`,"");if(vC(l)&&a!=="_self")return VA(e||"",a),new Yd(null);const h=window.open(e||"",a,u);ne(h,t,"popup-blocked");try{h.focus()}catch{}return new Yd(h)}function VA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const BA="__/auth/handler",jA="emulator/auth/handler",zA=encodeURIComponent("fac");async function Xd(t,e,n,s,r,i){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Tr,eventId:r};if(e instanceof sh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",UT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Fi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${zA}=${encodeURIComponent(c)}`:"";return`${qA(t)}?${Oi(a).slice(1)}${l}`}function qA({config:t}){return t.emulator?eh(t,jA):`https://${t.authDomain}/${BA}`}/**
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
 */const Uc="webStorageSupport";class HA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jy,this._completeRedirectFn=gA,this._overrideRedirectResult=fA}async _openPopup(e,n,s,r){var i;vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Xd(e,n,s,Nl(),r);return UA(e,o,rh())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Xd(e,n,s,Nl(),r);return GC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(vn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await OA(e),s=new yA(e);return n.register("authEvent",r=>(ne(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Uc,{type:Uc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Uc];o!==void 0&&n(!!o),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ny()||nh()||Fa()}}const KA=HA;var Jd="@firebase/auth",Zd="0.23.2";/**
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
 */class WA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function GA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function QA(t){sn(new jt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dy(t)},l=new kC(s,r,i,c);return xC(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),sn(new jt("auth-internal",e=>{const n=Li(e.getProvider("auth").getImmediate());return(s=>new WA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(Jd,Zd,GA(t)),xt(Jd,Zd,"esm2017")}/**
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
 */const YA=5*60,XA=ay("authIdTokenMaxAge")||YA;let ep=null;const JA=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>XA)return;const r=n==null?void 0:n.token;ep!==r&&(ep=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Yy(t=Xu()){const e=Ds(t,"auth");if(e.isInitialized())return e.getImmediate();const n=RC(t,{popupRedirectResolver:KA,persistence:[sA,HC,jy]}),s=ay("authTokenSyncURL");if(s){const i=JA(s);UC(n,i,()=>i(n.currentUser)),$C(n,o=>i(o))}const r=iy("auth");return r&&NC(n,`http://${r}`),n}QA("Browser");var ZA="firebase",e1="9.22.0";/**
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
 */xt(ZA,e1,"app");const t1=(t,e)=>e.some(n=>t instanceof n);let tp,np;function n1(){return tp||(tp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function s1(){return np||(np=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xy=new WeakMap,Ol=new WeakMap,Jy=new WeakMap,Vc=new WeakMap,oh=new WeakMap;function r1(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(jn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xy.set(n,t)}).catch(()=>{}),oh.set(e,t),e}function i1(t){if(Ol.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ol.set(t,e)}let Pl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ol.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function o1(t){Pl=t(Pl)}function a1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Bc(this),e,...n);return Jy.set(s,e.sort?e.sort():[e]),jn(s)}:s1().includes(t)?function(...e){return t.apply(Bc(this),e),jn(Xy.get(this))}:function(...e){return jn(t.apply(Bc(this),e))}}function c1(t){return typeof t=="function"?a1(t):(t instanceof IDBTransaction&&i1(t),t1(t,n1())?new Proxy(t,Pl):t)}function jn(t){if(t instanceof IDBRequest)return r1(t);if(Vc.has(t))return Vc.get(t);const e=c1(t);return e!==t&&(Vc.set(t,e),oh.set(e,t)),e}const Bc=t=>oh.get(t);function l1(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=jn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(jn(o.result),c.oldVersion,c.newVersion,jn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const u1=["get","getKey","getAll","getAllKeys","count"],h1=["put","add","delete","clear"],jc=new Map;function sp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(jc.get(e))return jc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=h1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||u1.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return jc.set(e,i),i}o1(t=>({...t,get:(e,n,s)=>sp(e,n)||t.get(e,n,s),has:(e,n)=>!!sp(e,n)||t.has(e,n)}));const Zy="@firebase/installations",ah="0.6.4";/**
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
 */const ev=1e4,tv=`w:${ah}`,nv="FIS_v2",f1="https://firebaseinstallations.googleapis.com/v1",d1=60*60*1e3,p1="installations",g1="Installations";/**
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
 */const m1={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},bs=new Ns(p1,g1,m1);function sv(t){return t instanceof Ht&&t.code.includes("request-failed")}/**
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
 */function rv({projectId:t}){return`${f1}/projects/${t}/installations`}function iv(t){return{token:t.token,requestStatus:2,expiresIn:v1(t.expiresIn),creationTime:Date.now()}}async function ov(t,e){const s=(await e.json()).error;return bs.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function av({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function y1(t,{refreshToken:e}){const n=av(t);return n.append("Authorization",w1(e)),n}async function cv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function v1(t){return Number(t.replace("s","000"))}function w1(t){return`${nv} ${t}`}/**
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
 */async function _1({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=rv(t),r=av(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:nv,appId:t.appId,sdkVersion:tv},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await cv(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:iv(l.authToken)}}else throw await ov("Create Installation",c)}/**
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
 */function lv(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function E1(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const I1=/^[cdef][\w-]{21}$/,Ml="";function b1(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=T1(t);return I1.test(n)?n:Ml}catch{return Ml}}function T1(t){return E1(t).substr(0,22)}/**
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
 */function Va(t){return`${t.appName}!${t.appId}`}/**
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
 */const uv=new Map;function hv(t,e){const n=Va(t);fv(n,e),S1(n,e)}function fv(t,e){const n=uv.get(t);if(n)for(const s of n)s(e)}function S1(t,e){const n=C1();n&&n.postMessage({key:t,fid:e}),A1()}let us=null;function C1(){return!us&&"BroadcastChannel"in self&&(us=new BroadcastChannel("[Firebase] FID Change"),us.onmessage=t=>{fv(t.data.key,t.data.fid)}),us}function A1(){uv.size===0&&us&&(us.close(),us=null)}/**
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
 */const k1="firebase-installations-database",R1=1,Ts="firebase-installations-store";let zc=null;function ch(){return zc||(zc=l1(k1,R1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ts)}}})),zc}async function Zo(t,e){const n=Va(t),r=(await ch()).transaction(Ts,"readwrite"),i=r.objectStore(Ts),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&hv(t,e.fid),e}async function dv(t){const e=Va(t),s=(await ch()).transaction(Ts,"readwrite");await s.objectStore(Ts).delete(e),await s.done}async function Ba(t,e){const n=Va(t),r=(await ch()).transaction(Ts,"readwrite"),i=r.objectStore(Ts),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&hv(t,a.fid),a}/**
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
 */async function lh(t){let e;const n=await Ba(t.appConfig,s=>{const r=x1(s),i=N1(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Ml?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function x1(t){const e=t||{fid:b1(),registrationStatus:0};return pv(e)}function N1(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(bs.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=D1(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:O1(t)}:{installationEntry:e}}async function D1(t,e){try{const n=await _1(t,e);return Zo(t.appConfig,n)}catch(n){throw sv(n)&&n.customData.serverCode===409?await dv(t.appConfig):await Zo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function O1(t){let e=await rp(t.appConfig);for(;e.registrationStatus===1;)await lv(100),e=await rp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await lh(t);return s||n}return e}function rp(t){return Ba(t,e=>{if(!e)throw bs.create("installation-not-found");return pv(e)})}function pv(t){return P1(t)?{fid:t.fid,registrationStatus:0}:t}function P1(t){return t.registrationStatus===1&&t.registrationTime+ev<Date.now()}/**
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
 */async function M1({appConfig:t,heartbeatServiceProvider:e},n){const s=L1(t,n),r=y1(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:tv,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await cv(()=>fetch(s,a));if(c.ok){const l=await c.json();return iv(l)}else throw await ov("Generate Auth Token",c)}function L1(t,{fid:e}){return`${rv(t)}/${e}/authTokens:generate`}/**
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
 */async function uh(t,e=!1){let n;const s=await Ba(t.appConfig,i=>{if(!gv(i))throw bs.create("not-registered");const o=i.authToken;if(!e&&U1(o))return i;if(o.requestStatus===1)return n=F1(t,e),i;{if(!navigator.onLine)throw bs.create("app-offline");const a=B1(i);return n=$1(t,a),a}});return n?await n:s.authToken}async function F1(t,e){let n=await ip(t.appConfig);for(;n.authToken.requestStatus===1;)await lv(100),n=await ip(t.appConfig);const s=n.authToken;return s.requestStatus===0?uh(t,e):s}function ip(t){return Ba(t,e=>{if(!gv(e))throw bs.create("not-registered");const n=e.authToken;return j1(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function $1(t,e){try{const n=await M1(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Zo(t.appConfig,s),n}catch(n){if(sv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await dv(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Zo(t.appConfig,s)}throw n}}function gv(t){return t!==void 0&&t.registrationStatus===2}function U1(t){return t.requestStatus===2&&!V1(t)}function V1(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+d1}function B1(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function j1(t){return t.requestStatus===1&&t.requestTime+ev<Date.now()}/**
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
 */async function z1(t){const e=t,{installationEntry:n,registrationPromise:s}=await lh(e);return s?s.catch(console.error):uh(e).catch(console.error),n.fid}/**
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
 */async function q1(t,e=!1){const n=t;return await H1(n),(await uh(n,e)).token}async function H1(t){const{registrationPromise:e}=await lh(t);e&&await e}/**
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
 */function K1(t){if(!t||!t.options)throw qc("App Configuration");if(!t.name)throw qc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw qc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function qc(t){return bs.create("missing-app-config-values",{valueName:t})}/**
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
 */const mv="installations",W1="installations-internal",G1=t=>{const e=t.getProvider("app").getImmediate(),n=K1(e),s=Ds(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Q1=t=>{const e=t.getProvider("app").getImmediate(),n=Ds(e,mv).getImmediate();return{getId:()=>z1(n),getToken:r=>q1(n,r)}};function Y1(){sn(new jt(mv,G1,"PUBLIC")),sn(new jt(W1,Q1,"PRIVATE"))}Y1();xt(Zy,ah);xt(Zy,ah,"esm2017");/**
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
 */const ea="analytics",X1="firebase_id",J1="origin",Z1=60*1e3,ek="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",hh="https://www.googletagmanager.com/gtag/js";/**
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
 */const vt=new La("@firebase/analytics");/**
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
 */const tk={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Tt=new Ns("analytics","Analytics",tk);/**
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
 */function nk(t){if(!t.startsWith(hh)){const e=Tt.create("invalid-gtag-resource",{gtagURL:t});return vt.warn(e.message),""}return t}function yv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function sk(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function rk(t,e){const n=sk("firebase-js-sdk-policy",{createScriptURL:nk}),s=document.createElement("script"),r=`${hh}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function ik(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function ok(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await yv(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){vt.error(a)}t("config",r,i)}async function ak(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await yv(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){vt.error(i)}}function ck(t,e,n,s){async function r(i,...o){try{if(i==="event"){const[a,c]=o;await ak(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await ok(t,e,n,s,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){vt.error(a)}}return r}function lk(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=ck(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function uk(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(hh)&&n.src.includes(t))return n;return null}/**
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
 */const hk=30,fk=1e3;class dk{constructor(e={},n=fk){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const vv=new dk;function pk(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function gk(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:pk(s)},i=ek.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Tt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function mk(t,e=vv,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw Tt.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Tt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new wk;return setTimeout(async()=>{a.abort()},n!==void 0?n:Z1),wv({appId:s,apiKey:r,measurementId:i},o,a,e)}async function wv(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=vv){var i;const{appId:o,measurementId:a}=t;try{await yk(s,e)}catch(c){if(a)return vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await gk(t);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!vk(l)){if(r.deleteThrottleMetadata(o),a)return vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?xd(n,r.intervalMillis,hk):xd(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,h),vt.debug(`Calling attemptFetch again in ${u} millis`),wv(t,h,s,r)}}function yk(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(Tt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function vk(t){if(!(t instanceof Ht)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class wk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function _k(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
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
 */async function Ek(){if(ly())try{await uy()}catch(t){return vt.warn(Tt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return vt.warn(Tt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ik(t,e,n,s,r,i,o){var a;const c=mk(t);c.then(d=>{n[d.measurementId]=d.appId,t.options.measurementId&&d.measurementId!==t.options.measurementId&&vt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>vt.error(d)),e.push(c);const l=Ek().then(d=>{if(d)return s.getId()}),[u,h]=await Promise.all([c,l]);uk(i)||rk(i,u.measurementId),r("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[J1]="firebase",f.update=!0,h!=null&&(f[X1]=h),r("config",u.measurementId,f),u.measurementId}/**
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
 */class bk{constructor(e){this.app=e}_delete(){return delete Jr[this.app.options.appId],Promise.resolve()}}let Jr={},op=[];const ap={};let Hc="dataLayer",Tk="gtag",cp,_v,lp=!1;function Sk(){const t=[];if(cy()&&t.push("This is a browser extension environment."),MT()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=Tt.create("invalid-analytics-context",{errorInfo:e});vt.warn(n.message)}}function Ck(t,e,n){Sk();const s=t.options.appId;if(!s)throw Tt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Tt.create("no-api-key");if(Jr[s]!=null)throw Tt.create("already-exists",{id:s});if(!lp){ik(Hc);const{wrappedGtag:i,gtagCore:o}=lk(Jr,op,ap,Hc,Tk);_v=i,cp=o,lp=!0}return Jr[s]=Ik(t,op,ap,e,cp,Hc,n),new bk(t)}function Ak(t=Xu()){t=ze(t);const e=Ds(t,ea);return e.isInitialized()?e.getImmediate():kk(t)}function kk(t,e={}){const n=Ds(t,ea);if(n.isInitialized()){const r=n.getImmediate();if(di(e,n.getOptions()))return r;throw Tt.create("already-initialized")}return n.initialize({options:e})}function Rk(t,e,n,s){t=ze(t),_k(_v,Jr[t.app.options.appId],e,n,s).catch(r=>vt.error(r))}const up="@firebase/analytics",hp="0.10.0";function xk(){sn(new jt(ea,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Ck(s,r,n)},"PUBLIC")),sn(new jt("analytics-internal",t,"PRIVATE")),xt(up,hp),xt(up,hp,"esm2017");function t(e){try{const n=e.getProvider(ea).getImmediate();return{logEvent:(s,r,i)=>Rk(n,s,r,i)}}catch(n){throw Tt.create("interop-component-reg-failed",{reason:n})}}}xk();var Nk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,fh=fh||{},Z=Nk||self;function ta(){}function ja(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ui(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Dk(t){return Object.prototype.hasOwnProperty.call(t,Kc)&&t[Kc]||(t[Kc]=++Ok)}var Kc="closure_uid_"+(1e9*Math.random()>>>0),Ok=0;function Pk(t,e,n){return t.call.apply(t.bind,arguments)}function Mk(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ot(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ot=Pk:ot=Mk,ot.apply(null,arguments)}function uo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Jn(){this.s=this.s,this.o=this.o}var Lk=0;Jn.prototype.s=!1;Jn.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),Lk!=0)&&Dk(this)};Jn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ev=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function dh(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function fp(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ja(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var Fk=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",ta,e),Z.removeEventListener("test",ta,e)}catch{}return t}();function na(t){return/^[\s\xa0]*$/.test(t)}var dp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Wc(t,e){return t<e?-1:t>e?1:0}function za(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function Xt(t){return za().indexOf(t)!=-1}function ph(t){return ph[" "](t),t}ph[" "]=ta;function Iv(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var $k=Xt("Opera"),fr=Xt("Trident")||Xt("MSIE"),bv=Xt("Edge"),Ll=bv||fr,Tv=Xt("Gecko")&&!(za().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge"))&&!(Xt("Trident")||Xt("MSIE"))&&!Xt("Edge"),Uk=za().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge");function Sv(){var t=Z.document;return t?t.documentMode:void 0}var sa;e:{var Gc="",Qc=function(){var t=za();if(Tv)return/rv:([^\);]+)(\)|;)/.exec(t);if(bv)return/Edge\/([\d\.]+)/.exec(t);if(fr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Uk)return/WebKit\/(\S+)/.exec(t);if($k)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Qc&&(Gc=Qc?Qc[1]:""),fr){var Yc=Sv();if(Yc!=null&&Yc>parseFloat(Gc)){sa=String(Yc);break e}}sa=Gc}var Vk={};function Bk(){return Iv(Vk,9,function(){let t=0;const e=dp(String(sa)).split("."),n=dp("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Wc(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Wc(r[2].length==0,i[2].length==0)||Wc(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Fl;if(Z.document&&fr){var pp=Sv();Fl=pp||parseInt(sa,10)||void 0}else Fl=void 0;var jk=Fl;function yi(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Tv){e:{try{ph(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:zk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&yi.$.h.call(this)}}Qe(yi,at);var zk={2:"touch",3:"pen",4:"mouse"};yi.prototype.h=function(){yi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Vi="closure_listenable_"+(1e6*Math.random()|0),qk=0;function Hk(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++qk,this.fa=this.ia=!1}function qa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function gh(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Cv(t){const e={};for(const n in t)e[n]=t[n];return e}const gp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Av(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<gp.length;i++)n=gp[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ha(t){this.src=t,this.g={},this.h=0}Ha.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ul(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Hk(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function $l(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Ev(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(qa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ul(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var mh="closure_lm_"+(1e6*Math.random()|0),Xc={};function kv(t,e,n,s,r){if(s&&s.once)return xv(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)kv(t,e[i],n,s,r);return null}return n=wh(n),t&&t[Vi]?t.O(e,n,Ui(s)?!!s.capture:!!s,r):Rv(t,e,n,!1,s,r)}function Rv(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ui(r)?!!r.capture:!!r,a=vh(t);if(a||(t[mh]=a=new Ha(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Kk(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Fk||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Dv(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Kk(){function t(n){return e.call(t.src,t.listener,n)}const e=Wk;return t}function xv(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)xv(t,e[i],n,s,r);return null}return n=wh(n),t&&t[Vi]?t.P(e,n,Ui(s)?!!s.capture:!!s,r):Rv(t,e,n,!0,s,r)}function Nv(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Nv(t,e[i],n,s,r);else s=Ui(s)?!!s.capture:!!s,n=wh(n),t&&t[Vi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ul(i,n,s,r),-1<n&&(qa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=vh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ul(e,n,s,r)),(n=-1<t?e[t]:null)&&yh(n))}function yh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Vi])$l(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Dv(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=vh(e))?($l(n,t),n.h==0&&(n.src=null,e[mh]=null)):qa(t)}}}function Dv(t){return t in Xc?Xc[t]:Xc[t]="on"+t}function Wk(t,e){if(t.fa)t=!0;else{e=new yi(e,this);var n=t.listener,s=t.la||t.src;t.ia&&yh(t),t=n.call(s,e)}return t}function vh(t){return t=t[mh],t instanceof Ha?t:null}var Jc="__closure_events_fn_"+(1e9*Math.random()>>>0);function wh(t){return typeof t=="function"?t:(t[Jc]||(t[Jc]=function(e){return t.handleEvent(e)}),t[Jc])}function Ge(){Jn.call(this),this.i=new Ha(this),this.S=this,this.J=null}Qe(Ge,Jn);Ge.prototype[Vi]=!0;Ge.prototype.removeEventListener=function(t,e,n,s){Nv(this,t,e,n,s)};function Ze(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var r=e;e=new at(s,t),Av(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=ho(o,s,!0,e)&&r}if(o=e.g=t,r=ho(o,s,!0,e)&&r,r=ho(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=ho(o,s,!1,e)&&r}Ge.prototype.N=function(){if(Ge.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)qa(n[s]);delete t.g[e],t.h--}}this.J=null};Ge.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ge.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ho(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&$l(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var _h=Z.JSON.stringify;function Gk(){var t=Mv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Qk{constructor(){this.h=this.g=null}add(e,n){const s=Ov.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ov=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Yk,t=>t.reset());class Yk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Xk(t){Z.setTimeout(()=>{throw t},0)}function Pv(t,e){Vl||Jk(),Bl||(Vl(),Bl=!0),Mv.add(t,e)}var Vl;function Jk(){var t=Z.Promise.resolve(void 0);Vl=function(){t.then(Zk)}}var Bl=!1,Mv=new Qk;function Zk(){for(var t;t=Gk();){try{t.h.call(t.g)}catch(n){Xk(n)}var e=Ov;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Bl=!1}function Ka(t,e){Ge.call(this),this.h=t||1,this.g=e||Z,this.j=ot(this.qb,this),this.l=Date.now()}Qe(Ka,Ge);M=Ka.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ze(this,"tick"),this.ga&&(Eh(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Eh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){Ka.$.N.call(this),Eh(this),delete this.g};function Ih(t,e,n){if(typeof t=="function")n&&(t=ot(t,n));else if(t&&typeof t.handleEvent=="function")t=ot(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function Lv(t){t.g=Ih(()=>{t.g=null,t.i&&(t.i=!1,Lv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class eR extends Jn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Lv(this)}N(){super.N(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vi(t){Jn.call(this),this.h=t,this.g={}}Qe(vi,Jn);var mp=[];function Fv(t,e,n,s){Array.isArray(n)||(n&&(mp[0]=n.toString()),n=mp);for(var r=0;r<n.length;r++){var i=kv(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function $v(t){gh(t.g,function(e,n){this.g.hasOwnProperty(n)&&yh(e)},t),t.g={}}vi.prototype.N=function(){vi.$.N.call(this),$v(this)};vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wa(){this.g=!0}Wa.prototype.Ea=function(){this.g=!1};function tR(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function nR(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Qs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+rR(t,n)+(s?" "+s:"")})}function sR(t,e){t.info(function(){return"TIMEOUT: "+e})}Wa.prototype.info=function(){};function rR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return _h(n)}catch{return e}}var Os={},yp=null;function Ga(){return yp=yp||new Ge}Os.Ta="serverreachability";function Uv(t){at.call(this,Os.Ta,t)}Qe(Uv,at);function wi(t){const e=Ga();Ze(e,new Uv(e))}Os.STAT_EVENT="statevent";function Vv(t,e){at.call(this,Os.STAT_EVENT,t),this.stat=e}Qe(Vv,at);function dt(t){const e=Ga();Ze(e,new Vv(e,t))}Os.Ua="timingevent";function Bv(t,e){at.call(this,Os.Ua,t),this.size=e}Qe(Bv,at);function Bi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var Qa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},jv={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function bh(){}bh.prototype.h=null;function vp(t){return t.h||(t.h=t.i())}function zv(){}var ji={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Th(){at.call(this,"d")}Qe(Th,at);function Sh(){at.call(this,"c")}Qe(Sh,at);var jl;function Ya(){}Qe(Ya,bh);Ya.prototype.g=function(){return new XMLHttpRequest};Ya.prototype.i=function(){return{}};jl=new Ya;function zi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new vi(this),this.P=iR,t=Ll?125:void 0,this.V=new Ka(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new qv}function qv(){this.i=null,this.g="",this.h=!1}var iR=45e3,zl={},ra={};M=zi.prototype;M.setTimeout=function(t){this.P=t};function ql(t,e,n){t.L=1,t.v=Ja(wn(e)),t.s=n,t.S=!0,Hv(t,null)}function Hv(t,e){t.G=Date.now(),qi(t),t.A=wn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Zv(n.i,"t",s),t.C=0,n=t.l.I,t.h=new qv,t.g=_w(t.l,n?e:null,!t.s),0<t.O&&(t.M=new eR(ot(t.Pa,t,t.g),t.O)),Fv(t.U,t.g,"readystatechange",t.nb),e=t.I?Cv(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),wi(),tR(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&pn(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=pn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Ll||this.g&&(this.h.h||this.g.ja()||Ip(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?wi(3):wi(2)),Xa(this);var n=this.g.da();this.aa=n;t:if(Kv(this)){var s=Ip(this.g);t="";var r=s.length,i=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hs(this),Zr(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,nR(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!na(a)){var l=a;break t}}l=null}if(n=l)Qs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hl(this,n);else{this.i=!1,this.o=3,dt(12),hs(this),Zr(this);break e}}this.S?(Wv(this,u,o),Ll&&this.i&&u==3&&(Fv(this.U,this.V,"tick",this.mb),this.V.start())):(Qs(this.j,this.m,o,null),Hl(this,o)),u==4&&hs(this),this.i&&!this.J&&(u==4?mw(this.l,this):(this.i=!1,qi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),hs(this),Zr(this)}}}catch{}finally{}};function Kv(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Wv(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=oR(t,n),r==ra){e==4&&(t.o=4,dt(14),s=!1),Qs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==zl){t.o=4,dt(15),Qs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Qs(t.j,t.m,r,null),Hl(t,r);Kv(t)&&r!=ra&&r!=zl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,dt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Dh(e),e.L=!0,dt(11))):(Qs(t.j,t.m,n,"[Invalid Chunked Response]"),hs(t),Zr(t))}M.mb=function(){if(this.g){var t=pn(this.g),e=this.g.ja();this.C<e.length&&(Xa(this),Wv(this,t,e),this.i&&t!=4&&qi(this))}};function oR(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ra:(n=Number(e.substring(n,s)),isNaN(n)?zl:(s+=1,s+n>e.length?ra:(e=e.substr(s,n),t.C=s+n,e)))}M.cancel=function(){this.J=!0,hs(this)};function qi(t){t.Y=Date.now()+t.P,Gv(t,t.P)}function Gv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Bi(ot(t.lb,t),e)}function Xa(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(sR(this.j,this.A),this.L!=2&&(wi(),dt(17)),hs(this),this.o=2,Zr(this)):Gv(this,this.Y-t)};function Zr(t){t.l.H==0||t.J||mw(t.l,t)}function hs(t){Xa(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,Eh(t.V),$v(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Hl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Kl(n.h,t))){if(!t.K&&Kl(n.h,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)aa(n),tc(n);else break e;Nh(n),dt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&n.A==0&&!n.v&&(n.v=Bi(ot(n.ib,n),6e3));if(1>=nw(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else fs(n,11)}else if((t.K||n.g==t)&&aa(n),!na(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.J=l[1],n.oa=l[2];const u=l[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const h=l[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const v=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=s.h;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ch(i,i.h),i.h=null))}if(s.F){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.Da=y,Re(s.G,s.F,y))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=ww(s,s.I?s.oa:null,s.Y),o.K){sw(s.h,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Xa(a),qi(a)),s.g=o}else pw(s);0<n.i.length&&nc(n)}else l[0]!="stop"&&l[0]!="close"||fs(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?fs(n,7):xh(n):l[0]!="noop"&&n.l&&n.l.Aa(l),n.A=0)}}wi(4)}catch{}}function aR(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ja(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function cR(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ja(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Qv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ja(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=cR(t),s=aR(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Yv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function vs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof vs){this.h=e!==void 0?e:t.h,ia(this,t.j),this.s=t.s,this.g=t.g,oa(this,t.m),this.l=t.l,e=t.i;var n=new _i;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),wp(this,n),this.o=t.o}else t&&(n=String(t).match(Yv))?(this.h=!!e,ia(this,n[1]||"",!0),this.s=Ur(n[2]||""),this.g=Ur(n[3]||"",!0),oa(this,n[4]),this.l=Ur(n[5]||"",!0),wp(this,n[6]||"",!0),this.o=Ur(n[7]||"")):(this.h=!!e,this.i=new _i(null,this.h))}vs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vr(e,_p,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vr(e,_p,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Vr(n,n.charAt(0)=="/"?fR:hR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vr(n,pR)),t.join("")};function wn(t){return new vs(t)}function ia(t,e,n){t.j=n?Ur(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function oa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function wp(t,e,n){e instanceof _i?(t.i=e,gR(t.i,t.h)):(n||(e=Vr(e,dR)),t.i=new _i(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function Ja(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ur(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,uR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function uR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var _p=/[#\/\?@]/g,hR=/[#\?:]/g,fR=/[#\?]/g,dR=/[#\?@]/g,pR=/#/g;function _i(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Zn(t){t.g||(t.g=new Map,t.h=0,t.i&&lR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=_i.prototype;M.add=function(t,e){Zn(this),this.i=null,t=Sr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Xv(t,e){Zn(t),e=Sr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Jv(t,e){return Zn(t),e=Sr(t,e),t.g.has(e)}M.forEach=function(t,e){Zn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};M.sa=function(){Zn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};M.Z=function(t){Zn(this);let e=[];if(typeof t=="string")Jv(this,t)&&(e=e.concat(this.g.get(Sr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return Zn(this),this.i=null,t=Sr(this,t),Jv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Zv(t,e,n){Xv(t,e),0<n.length&&(t.i=null,t.g.set(Sr(t,e),dh(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Sr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gR(t,e){e&&!t.j&&(Zn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Xv(this,s),Zv(this,r,n))},t)),t.j=e}var mR=class{constructor(t,e){this.h=t,this.g=e}};function ew(t){this.l=t||yR,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ka&&Z.g.Ka()&&Z.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yR=10;function tw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function nw(t){return t.h?1:t.g?t.g.size:0}function Kl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ch(t,e){t.g?t.g.add(e):t.h=e}function sw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ew.prototype.cancel=function(){if(this.i=rw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function rw(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return dh(t.i)}function Ah(){}Ah.prototype.stringify=function(t){return Z.JSON.stringify(t,void 0)};Ah.prototype.parse=function(t){return Z.JSON.parse(t,void 0)};function vR(){this.g=new Ah}function wR(t,e,n){const s=n||"";try{Qv(t,function(r,i){let o=r;Ui(r)&&(o=_h(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function _R(t,e){const n=new Wa;if(Z.Image){const s=new Image;s.onload=uo(fo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=uo(fo,n,s,"TestLoadImage: error",!1,e),s.onabort=uo(fo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=uo(fo,n,s,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function fo(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Hi(t){this.l=t.fc||null,this.j=t.ob||!1}Qe(Hi,bh);Hi.prototype.g=function(){return new Za(this.l,this.j)};Hi.prototype.i=function(t){return function(){return t}}({});function Za(t,e){Ge.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=kh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Qe(Za,Ge);var kh=0;M=Za.prototype;M.open=function(t,e){if(this.readyState!=kh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ei(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ki(this)),this.readyState=kh};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ei(this)),this.g&&(this.readyState=3,Ei(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;iw(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function iw(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ki(this):Ei(this),this.readyState==3&&iw(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,Ki(this))};M.Ya=function(t){this.g&&(this.response=t,Ki(this))};M.ka=function(){this.g&&Ki(this)};function Ki(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ei(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ei(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Za.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ER=Z.JSON.parse;function De(t){Ge.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ow,this.L=this.M=!1}Qe(De,Ge);var ow="",IR=/^https?$/i,bR=["POST","PUT"];M=De.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():jl.g(),this.C=this.u?vp(this.u):vp(jl),this.g.onreadystatechange=ot(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Ep(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=Z.FormData&&t instanceof Z.FormData,!(0<=Ev(bR,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{lw(this),0<this.B&&((this.L=TR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ot(this.ua,this)):this.A=Ih(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ep(this,i)}};function TR(t){return fr&&Bk()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof fh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ze(this,"timeout"),this.abort(8))};function Ep(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,aw(t),ec(t)}function aw(t){t.F||(t.F=!0,Ze(t,"complete"),Ze(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ze(this,"complete"),Ze(this,"abort"),ec(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ec(this,!0)),De.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?cw(this):this.kb())};M.kb=function(){cw(this)};function cw(t){if(t.h&&typeof fh<"u"&&(!t.C[1]||pn(t)!=4||t.da()!=2)){if(t.v&&pn(t)==4)Ih(t.La,0,t);else if(Ze(t,"readystatechange"),pn(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.I).match(Yv)[1]||null;if(!r&&Z.self&&Z.self.location){var i=Z.self.location.protocol;r=i.substr(0,i.length-1)}s=!IR.test(r?r.toLowerCase():"")}n=s}if(n)Ze(t,"complete"),Ze(t,"success");else{t.m=6;try{var o=2<pn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",aw(t)}}finally{ec(t)}}}}function ec(t,e){if(t.g){lw(t);const n=t.g,s=t.C[0]?ta:null;t.g=null,t.C=null,e||Ze(t,"ready");try{n.onreadystatechange=s}catch{}}}function lw(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}function pn(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ER(e)}};function Ip(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case ow:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function uw(t){let e="";return gh(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Rh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=uw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function Pr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function hw(t){this.Ga=0,this.i=[],this.j=new Wa,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Pr("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Pr("baseRetryDelayMs",5e3,t),this.hb=Pr("retryDelaySeedMs",1e4,t),this.eb=Pr("forwardChannelMaxRetries",2,t),this.xa=Pr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new ew(t&&t.concurrentRequestLimit),this.Ja=new vR,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}M=hw.prototype;M.qa=8;M.H=1;function xh(t){if(fw(t),t.H==3){var e=t.W++,n=wn(t.G);Re(n,"SID",t.J),Re(n,"RID",e),Re(n,"TYPE","terminate"),Wi(t,n),e=new zi(t,t.j,e,void 0),e.L=2,e.v=Ja(wn(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon&&(n=Z.navigator.sendBeacon(e.v.toString(),"")),!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=_w(e.l,null),e.g.ha(e.v)),e.G=Date.now(),qi(e)}vw(t)}function tc(t){t.g&&(Dh(t),t.g.cancel(),t.g=null)}function fw(t){tc(t),t.u&&(Z.clearTimeout(t.u),t.u=null),aa(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function nc(t){tw(t.h)||t.m||(t.m=!0,Pv(t.Na,t),t.C=0)}function SR(t,e){return nw(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Bi(ot(t.Na,t,e),yw(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new zi(this,this.j,t,void 0);let i=this.s;if(this.U&&(i?(i=Cv(i),Av(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=dw(this,r,e),n=wn(this.G),Re(n,"RID",t),Re(n,"CVER",22),this.F&&Re(n,"X-HTTP-Session-Id",this.F),Wi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(uw(i)))+"&"+e:this.o&&Rh(n,this.o,i)),Ch(this.h,r),this.bb&&Re(n,"TYPE","init"),this.P?(Re(n,"$req",e),Re(n,"SID","null"),r.ba=!0,ql(r,n,null)):ql(r,n,e),this.H=2}}else this.H==3&&(t?bp(this,t):this.i.length==0||tw(this.h)||bp(this))};function bp(t,e){var n;e?n=e.m:n=t.W++;const s=wn(t.G);Re(s,"SID",t.J),Re(s,"RID",n),Re(s,"AID",t.V),Wi(t,s),t.o&&t.s&&Rh(s,t.o,t.s),n=new zi(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=dw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ch(t.h,n),ql(n,s,e)}function Wi(t,e){t.ma&&gh(t.ma,function(n,s){Re(e,s,n)}),t.l&&Qv({},function(n,s){Re(e,s,n)})}function dw(t,e,n){n=Math.min(t.i.length,n);var s=t.l?ot(t.l.Va,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{wR(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,s}function pw(t){t.g||t.u||(t.ba=1,Pv(t.Ma,t),t.A=0)}function Nh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Bi(ot(t.Ma,t),yw(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,gw(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Bi(ot(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,dt(10),tc(this),gw(this))};function Dh(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function gw(t){t.g=new zi(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=wn(t.wa);Re(e,"RID","rpc"),Re(e,"SID",t.J),Re(e,"CI",t.M?"0":"1"),Re(e,"AID",t.V),Re(e,"TYPE","xmlhttp"),Wi(t,e),t.o&&t.s&&Rh(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=Ja(wn(e)),n.s=null,n.S=!0,Hv(n,t)}M.ib=function(){this.v!=null&&(this.v=null,tc(this),Nh(this),dt(19))};function aa(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function mw(t,e){var n=null;if(t.g==e){aa(t),Dh(t),t.g=null;var s=2}else if(Kl(t.h,e))n=e.F,sw(t.h,e),s=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Ga(),Ze(s,new Bv(s,n)),nc(t)}else pw(t);else if(r=e.o,r==3||r==0&&0<t.ta||!(s==1&&SR(t,e)||s==2&&Nh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:fs(t,5);break;case 4:fs(t,10);break;case 3:fs(t,6);break;default:fs(t,2)}}}function yw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function fs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=ot(t.pb,t);n||(n=new vs("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||ia(n,"https"),Ja(n)),_R(n.toString(),s)}else dt(2);t.H=0,t.l&&t.l.za(e),vw(t),fw(t)}M.pb=function(t){t?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function vw(t){if(t.H=0,t.pa=[],t.l){const e=rw(t.h);(e.length!=0||t.i.length!=0)&&(fp(t.pa,e),fp(t.pa,t.i),t.h.i.length=0,dh(t.i),t.i.length=0),t.l.ya()}}function ww(t,e,n){var s=n instanceof vs?wn(n):new vs(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),oa(s,s.m);else{var r=Z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new vs(null,void 0);s&&ia(i,s),e&&(i.g=e),r&&oa(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&Re(s,n,e),Re(s,"VER",t.qa),Wi(t,s),s}function _w(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new De(new Hi({ob:!0})):new De(t.va),e.Oa(t.I),e}function Ew(){}M=Ew.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.Va=function(){};function ca(){if(fr&&!(10<=Number(jk)))throw Error("Environmental error: no available transport.")}ca.prototype.g=function(t,e){return new St(t,e)};function St(t,e){Ge.call(this),this.g=new hw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!na(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!na(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Cr(this)}Qe(St,Ge);St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;dt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=ww(t,null,t.Y),nc(t)};St.prototype.close=function(){xh(this.g)};St.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=_h(t),t=n);e.i.push(new mR(e.fb++,t)),e.H==3&&nc(e)};St.prototype.N=function(){this.g.l=null,delete this.j,xh(this.g),delete this.g,St.$.N.call(this)};function Iw(t){Th.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Qe(Iw,Th);function bw(){Sh.call(this),this.status=1}Qe(bw,Sh);function Cr(t){this.g=t}Qe(Cr,Ew);Cr.prototype.Ba=function(){Ze(this.g,"a")};Cr.prototype.Aa=function(t){Ze(this.g,new Iw(t))};Cr.prototype.za=function(t){Ze(this.g,new bw)};Cr.prototype.ya=function(){Ze(this.g,"b")};function CR(){this.blockSize=-1}function zt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Qe(zt,CR);zt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Zc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}zt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Zc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Zc(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Zc(this,s),r=0;break}}this.h=r,this.i+=e};zt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function ve(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var AR={};function Oh(t){return-128<=t&&128>t?Iv(AR,t,function(e){return new ve([e|0],0>e?-1:0)}):new ve([t|0],0>t?-1:0)}function Jt(t){if(isNaN(t)||!isFinite(t))return tr;if(0>t)return Xe(Jt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Wl;return new ve(e,0)}function Tw(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Xe(Tw(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Jt(Math.pow(e,8)),s=tr,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Jt(Math.pow(e,i)),s=s.R(i).add(Jt(o))):(s=s.R(n),s=s.add(Jt(o)))}return s}var Wl=4294967296,tr=Oh(0),Gl=Oh(1),Tp=Oh(16777216);M=ve.prototype;M.ea=function(){if(At(this))return-Xe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Wl+s)*e,e*=Wl}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(gn(this))return"0";if(At(this))return"-"+Xe(this).toString(t);for(var e=Jt(Math.pow(t,6)),n=this,s="";;){var r=ua(n,e).g;n=la(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,gn(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function gn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function At(t){return t.h==-1}M.X=function(t){return t=la(this,t),At(t)?-1:gn(t)?0:1};function Xe(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new ve(n,~t.h).add(Gl)}M.abs=function(){return At(this)?Xe(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new ve(n,n[n.length-1]&-2147483648?-1:0)};function la(t,e){return t.add(Xe(e))}M.R=function(t){if(gn(this)||gn(t))return tr;if(At(this))return At(t)?Xe(this).R(Xe(t)):Xe(Xe(this).R(t));if(At(t))return Xe(this.R(Xe(t)));if(0>this.X(Tp)&&0>t.X(Tp))return Jt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,po(n,2*s+2*r),n[2*s+2*r+1]+=i*c,po(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,po(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,po(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new ve(n,0)};function po(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Mr(t,e){this.g=t,this.h=e}function ua(t,e){if(gn(e))throw Error("division by zero");if(gn(t))return new Mr(tr,tr);if(At(t))return e=ua(Xe(t),e),new Mr(Xe(e.g),Xe(e.h));if(At(e))return e=ua(t,Xe(e)),new Mr(Xe(e.g),e.h);if(30<t.g.length){if(At(t)||At(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Gl,s=e;0>=s.X(t);)n=Sp(n),s=Sp(s);var r=zs(n,1),i=zs(s,1);for(s=zs(s,2),n=zs(n,2);!gn(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=zs(s,1),n=zs(n,1)}return e=la(t,r.R(e)),new Mr(r,e)}for(r=tr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Jt(n),o=i.R(e);At(o)||0<o.X(t);)n-=s,i=Jt(n),o=i.R(e);gn(i)&&(i=Gl),r=r.add(i),t=la(t,o)}return new Mr(r,t)}M.gb=function(t){return ua(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new ve(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new ve(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new ve(n,this.h^t.h)};function Sp(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new ve(n,t.h)}function zs(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ve(r,t.h)}ca.prototype.createWebChannel=ca.prototype.g;St.prototype.send=St.prototype.u;St.prototype.open=St.prototype.m;St.prototype.close=St.prototype.close;Qa.NO_ERROR=0;Qa.TIMEOUT=8;Qa.HTTP_ERROR=6;jv.COMPLETE="complete";zv.EventType=ji;ji.OPEN="a";ji.CLOSE="b";ji.ERROR="c";ji.MESSAGE="d";Ge.prototype.listen=Ge.prototype.O;De.prototype.listenOnce=De.prototype.P;De.prototype.getLastError=De.prototype.Sa;De.prototype.getLastErrorCode=De.prototype.Ia;De.prototype.getStatus=De.prototype.da;De.prototype.getResponseJson=De.prototype.Wa;De.prototype.getResponseText=De.prototype.ja;De.prototype.send=De.prototype.ha;De.prototype.setWithCredentials=De.prototype.Oa;zt.prototype.digest=zt.prototype.l;zt.prototype.reset=zt.prototype.reset;zt.prototype.update=zt.prototype.j;ve.prototype.add=ve.prototype.add;ve.prototype.multiply=ve.prototype.R;ve.prototype.modulo=ve.prototype.gb;ve.prototype.compare=ve.prototype.X;ve.prototype.toNumber=ve.prototype.ea;ve.prototype.toString=ve.prototype.toString;ve.prototype.getBits=ve.prototype.D;ve.fromNumber=Jt;ve.fromString=Tw;var kR=function(){return new ca},RR=function(){return Ga()},el=Qa,xR=jv,NR=Os,Cp={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},DR=Hi,go=zv,OR=De,PR=zt,nr=ve;const Ap="@firebase/firestore";/**
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
 */let Ar="9.22.0";/**
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
 */const Ss=new La("@firebase/firestore");function kp(){return Ss.logLevel}function j(t,...e){if(Ss.logLevel<=ue.DEBUG){const n=e.map(Ph);Ss.debug(`Firestore (${Ar}): ${t}`,...n)}}function _n(t,...e){if(Ss.logLevel<=ue.ERROR){const n=e.map(Ph);Ss.error(`Firestore (${Ar}): ${t}`,...n)}}function dr(t,...e){if(Ss.logLevel<=ue.WARN){const n=e.map(Ph);Ss.warn(`Firestore (${Ar}): ${t}`,...n)}}function Ph(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${Ar}) INTERNAL ASSERTION FAILED: `+t;throw _n(e),new Error(e)}function Ae(t,e){t||J()}function se(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Ht{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Sw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class LR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FR{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ae(typeof s.accessToken=="string"),new Sw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new nt(e)}}class $R{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class UR{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new $R(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class VR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BR{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.T=n.token,new VR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function jR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Cw{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=jR(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function pe(t,e){return t<e?-1:t>e?1:0}function pr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new He(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ii{constructor(e,n,s){n===void 0?n=0:n>e.length&&J(),s===void 0?s=e.length-n:s>e.length-n&&J(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ii.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ii?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends Ii{construct(e,n,s){return new Te(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new F(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const zR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Ii{construct(e,n,s){return new it(e,n,s)}static isValidIdentifier(e){return zR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new F(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new F(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new F(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new F(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Te.fromString(e))}static fromName(e){return new H(Te.fromString(e).popFirst(5))}static empty(){return new H(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Te(e.slice()))}}function qR(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=te.fromTimestamp(s===1e9?new He(n+1,0):new He(n,s));return new Qn(r,H.empty(),e)}function HR(t){return new Qn(t.readTime,t.key,-1)}class Qn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Qn(te.min(),H.empty(),-1)}static max(){return new Qn(te.max(),H.empty(),-1)}}function KR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const WR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class GR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Gi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==WR)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(r=>r?A.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new A((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new A((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Qi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Mh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Mh.ct=-1;function sc(t){return t==null}function ha(t){return t===0&&1/t==-1/0}function QR(t){return typeof t=="number"&&Number.isInteger(t)&&!ha(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Rp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Aw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class xe{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mo(this.root,e,this.comparator,!0)}}class mo{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ye.RED,this.left=r??Ye.EMPTY,this.right=i??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ye(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ye.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ye(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xp(this.data.getIterator())}getIteratorFrom(e){return new xp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class xp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new bt([])}unionWith(e){let n=new ct(it.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return pr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class kw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new kw("Invalid base64 string: "+r):r}}(e);return new ht(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const YR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yn(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=YR.exec(t);if(Ae(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cs(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
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
 */function Lh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fh(t){const e=t.mapValue.fields.__previous_value__;return Lh(e)?Fh(e):e}function bi(t){const e=Yn(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class XR{constructor(e,n,s,r,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ti{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ti("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ti&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const yo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function As(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lh(t)?4:JR(t)?9007199254740991:10:J()}function on(t,e){if(t===e)return!0;const n=As(t);if(n!==As(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bi(t).isEqual(bi(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Yn(s.timestampValue),o=Yn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Cs(s.bytesValue).isEqual(Cs(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ve(s.geoPointValue.latitude)===Ve(r.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ve(s.integerValue)===Ve(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ve(s.doubleValue),o=Ve(r.doubleValue);return i===o?ha(i)===ha(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return pr(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Rp(i)!==Rp(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!on(i[a],o[a])))return!1;return!0}(t,e);default:return J()}}function Si(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function gr(t,e){if(t===e)return 0;const n=As(t),s=As(e);if(n!==s)return pe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ve(r.integerValue||r.doubleValue),a=Ve(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Np(t.timestampValue,e.timestampValue);case 4:return Np(bi(t),bi(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Cs(r),a=Cs(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=pe(o[c],a[c]);if(l!==0)return l}return pe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=pe(Ve(r.latitude),Ve(i.latitude));return o!==0?o:pe(Ve(r.longitude),Ve(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=gr(o[c],a[c]);if(l)return l}return pe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===yo.mapValue&&i===yo.mapValue)return 0;if(r===yo.mapValue)return 1;if(i===yo.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=pe(a[u],l[u]);if(h!==0)return h;const f=gr(o[a[u]],c[l[u]]);if(f!==0)return f}return pe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw J()}}function Np(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=Yn(t),s=Yn(e),r=pe(n.seconds,s.seconds);return r!==0?r:pe(n.nanos,s.nanos)}function mr(t){return Ql(t)}function Ql(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Yn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Cs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Ql(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ql(s.fields[a])}`;return i+"}"}(t.mapValue):J();var e,n}function Dp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Yl(t){return!!t&&"integerValue"in t}function $h(t){return!!t&&"arrayValue"in t}function Op(t){return!!t&&"nullValue"in t}function Pp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xo(t){return!!t&&"mapValue"in t}function ei(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ps(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ei(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ei(t.arrayValue.values[n]);return e}return Object.assign({},t)}function JR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!xo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ei(n)}setAll(e){let n=it.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ei(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());xo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];xo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Ps(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new yt(ei(this.value))}}function Rw(t){const e=[];return Ps(t.fields,(n,s)=>{const r=new it([n]);if(xo(s)){const i=Rw(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new bt(e)}/**
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
 */class st{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new st(e,0,te.min(),te.min(),te.min(),yt.empty(),0)}static newFoundDocument(e,n,s,r){return new st(e,1,n,te.min(),s,r,0)}static newNoDocument(e,n){return new st(e,2,n,te.min(),te.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,te.min(),te.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fa{constructor(e,n){this.position=e,this.inclusive=n}}function Mp(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=H.comparator(H.fromName(o.referenceValue),n.key):s=gr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Lp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class sr{constructor(e,n="asc"){this.field=e,this.dir=n}}function ZR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class xw{}class Be extends xw{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new tx(e,n,s):n==="array-contains"?new rx(e,s):n==="in"?new ix(e,s):n==="not-in"?new ox(e,s):n==="array-contains-any"?new ax(e,s):new Be(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new nx(e,s):new sx(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(gr(n,this.value)):n!==null&&As(this.value)===As(n)&&this.matchesComparison(gr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class qt extends xw{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new qt(e,n)}matches(e){return Nw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Nw(t){return t.op==="and"}function Dw(t){return ex(t)&&Nw(t)}function ex(t){for(const e of t.filters)if(e instanceof qt)return!1;return!0}function Xl(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+mr(t.value);if(Dw(t))return t.filters.map(e=>Xl(e)).join(",");{const e=t.filters.map(n=>Xl(n)).join(",");return`${t.op}(${e})`}}function Ow(t,e){return t instanceof Be?function(n,s){return s instanceof Be&&n.op===s.op&&n.field.isEqual(s.field)&&on(n.value,s.value)}(t,e):t instanceof qt?function(n,s){return s instanceof qt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Ow(i,s.filters[o]),!0):!1}(t,e):void J()}function Pw(t){return t instanceof Be?function(e){return`${e.field.canonicalString()} ${e.op} ${mr(e.value)}`}(t):t instanceof qt?function(e){return e.op.toString()+" {"+e.getFilters().map(Pw).join(" ,")+"}"}(t):"Filter"}class tx extends Be{constructor(e,n,s){super(e,n,s),this.key=H.fromName(s.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class nx extends Be{constructor(e,n){super(e,"in",n),this.keys=Mw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sx extends Be{constructor(e,n){super(e,"not-in",n),this.keys=Mw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Mw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>H.fromName(s.referenceValue))}class rx extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $h(n)&&Si(n.arrayValue,this.value)}}class ix extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Si(this.value.arrayValue,n)}}class ox extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(Si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Si(this.value.arrayValue,n)}}class ax extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$h(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Si(this.value.arrayValue,s))}}/**
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
 */class cx{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function Fp(t,e=null,n=[],s=[],r=null,i=null,o=null){return new cx(t,e,n,s,r,i,o)}function Uh(t){const e=se(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Xl(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>mr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>mr(s)).join(",")),e.dt=n}return e.dt}function Vh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ZR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ow(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Lp(t.startAt,e.startAt)&&Lp(t.endAt,e.endAt)}function Jl(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class kr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function lx(t,e,n,s,r,i,o,a){return new kr(t,e,n,s,r,i,o,a)}function rc(t){return new kr(t)}function $p(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Bh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ic(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Lw(t){return t.collectionGroup!==null}function rr(t){const e=se(t);if(e.wt===null){e.wt=[];const n=ic(e),s=Bh(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new sr(n)),e.wt.push(new sr(it.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new sr(it.keyField(),i))}}}return e.wt}function En(t){const e=se(t);if(!e._t)if(e.limitType==="F")e._t=Fp(e.path,e.collectionGroup,rr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of rr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new sr(i.field,o))}const s=e.endAt?new fa(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new fa(e.startAt.position,e.startAt.inclusive):null;e._t=Fp(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Zl(t,e){e.getFirstInequalityField(),ic(t);const n=t.filters.concat([e]);return new kr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function eu(t,e,n){return new kr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function oc(t,e){return Vh(En(t),En(e))&&t.limitType===e.limitType}function Fw(t){return`${Uh(En(t))}|lt:${t.limitType}`}function tu(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Pw(s)).join(", ")}]`),sc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>mr(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>mr(s)).join(",")),`Target(${n})`}(En(t))}; limitType=${t.limitType})`}function ac(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):H.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of rr(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Mp(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,rr(n),s)||n.endAt&&!function(r,i,o){const a=Mp(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,rr(n),s))}(t,e)}function ux(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $w(t){return(e,n)=>{let s=!1;for(const r of rr(t)){const i=hx(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function hx(t,e,n){const s=t.field.isKeyField()?H.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?gr(a,c):J()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return J()}}/**
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
 */let Rr=class{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ps(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Aw(this.inner)}size(){return this.innerSize}};/**
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
 */const fx=new xe(H.comparator);function In(){return fx}const Uw=new xe(H.comparator);function Br(...t){let e=Uw;for(const n of t)e=e.insert(n.key,n);return e}function Vw(t){let e=Uw;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ds(){return ti()}function Bw(){return ti()}function ti(){return new Rr(t=>t.toString(),(t,e)=>t.isEqual(e))}const dx=new xe(H.comparator),px=new ct(H.comparator);function oe(...t){let e=px;for(const n of t)e=e.add(n);return e}const gx=new ct(pe);function mx(){return gx}/**
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
 */function jw(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ha(e)?"-0":e}}function zw(t){return{integerValue:""+t}}function yx(t,e){return QR(e)?zw(e):jw(t,e)}/**
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
 */class cc{constructor(){this._=void 0}}function vx(t,e,n){return t instanceof da?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Lh(r)&&(r=Fh(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Ci?Hw(t,e):t instanceof Ai?Kw(t,e):function(s,r){const i=qw(s,r),o=Up(i)+Up(s.gt);return Yl(i)&&Yl(s.gt)?zw(o):jw(s.serializer,o)}(t,e)}function wx(t,e,n){return t instanceof Ci?Hw(t,e):t instanceof Ai?Kw(t,e):n}function qw(t,e){return t instanceof pa?Yl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class da extends cc{}class Ci extends cc{constructor(e){super(),this.elements=e}}function Hw(t,e){const n=Ww(e);for(const s of t.elements)n.some(r=>on(r,s))||n.push(s);return{arrayValue:{values:n}}}class Ai extends cc{constructor(e){super(),this.elements=e}}function Kw(t,e){let n=Ww(e);for(const s of t.elements)n=n.filter(r=>!on(r,s));return{arrayValue:{values:n}}}class pa extends cc{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Up(t){return Ve(t.integerValue||t.doubleValue)}function Ww(t){return $h(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function _x(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ci&&s instanceof Ci||n instanceof Ai&&s instanceof Ai?pr(n.elements,s.elements,on):n instanceof pa&&s instanceof pa?on(n.gt,s.gt):n instanceof da&&s instanceof da}(t.transform,e.transform)}class Ex{constructor(e,n){this.version=e,this.transformResults=n}}class Ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ut}static exists(e){return new Ut(void 0,e)}static updateTime(e){return new Ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function No(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class lc{}function Gw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Yw(t.key,Ut.none()):new Yi(t.key,t.data,Ut.none());{const n=t.data,s=yt.empty();let r=new ct(it.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new es(t.key,s,new bt(r.toArray()),Ut.none())}}function Ix(t,e,n){t instanceof Yi?function(s,r,i){const o=s.value.clone(),a=Bp(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof es?function(s,r,i){if(!No(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Bp(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Qw(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function ni(t,e,n,s){return t instanceof Yi?function(r,i,o,a){if(!No(r.precondition,i))return o;const c=r.value.clone(),l=jp(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof es?function(r,i,o,a){if(!No(r.precondition,i))return o;const c=jp(r.fieldTransforms,a,i),l=i.data;return l.setAll(Qw(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return No(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function bx(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=qw(s.transform,r||null);i!=null&&(n===null&&(n=yt.empty()),n.set(s.field,i))}return n||null}function Vp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&pr(n,s,(r,i)=>_x(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yi extends lc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class es extends lc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Qw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Bp(t,e,n){const s=new Map;Ae(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,wx(o,a,n[r]))}return s}function jp(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,vx(i,o,e))}return s}class Yw extends lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Tx extends lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Sx{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Ix(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ni(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ni(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Bw();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Gw(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(te.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&pr(this.mutations,e.mutations,(n,s)=>Vp(n,s))&&pr(this.baseMutations,e.baseMutations,(n,s)=>Vp(n,s))}}class jh{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Ae(e.mutations.length===s.length);let r=dx;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new jh(e,n,s,r)}}/**
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
 */class Cx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ax{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ue,ce;function kx(t){switch(t){default:return J();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Xw(t){if(t===void 0)return _n("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ue.OK:return I.OK;case Ue.CANCELLED:return I.CANCELLED;case Ue.UNKNOWN:return I.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return I.INTERNAL;case Ue.UNAVAILABLE:return I.UNAVAILABLE;case Ue.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ue.NOT_FOUND:return I.NOT_FOUND;case Ue.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ue.ABORTED:return I.ABORTED;case Ue.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ue.DATA_LOSS:return I.DATA_LOSS;default:return J()}}(ce=Ue||(Ue={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class zh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return vo}static getOrCreateInstance(){return vo===null&&(vo=new zh),vo}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let vo=null;/**
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
 */function Rx(){return new TextEncoder}/**
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
 */const xx=new nr([4294967295,4294967295],0);function zp(t){const e=Rx().encode(t),n=new PR;return n.update(e),new Uint8Array(n.digest())}function qp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new nr([n,s],0),new nr([r,i],0)]}class qh{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new jr(`Invalid padding: ${n}`);if(s<0)throw new jr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new jr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new jr(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=nr.fromNumber(this.It)}Et(e,n,s){let r=e.add(n.multiply(nr.fromNumber(s)));return r.compare(xx)===1&&(r=new nr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=zp(e),[s,r]=qp(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new qh(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=zp(e),[s,r]=qp(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class jr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class uc{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Xi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new uc(te.min(),r,new xe(pe),In(),oe())}}class Xi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Xi(s,n,oe(),oe(),oe())}}/**
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
 */class Do{constructor(e,n,s,r){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=r}}class Jw{constructor(e,n){this.targetId=e,this.Vt=n}}class Zw{constructor(e,n,s=ht.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Hp{constructor(){this.St=0,this.Dt=Wp(),this.Ct=ht.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=oe(),n=oe(),s=oe();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:J()}}),new Xi(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=Wp()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Nx{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=In(),this.zt=Kp(),this.Wt=new xe(pe)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(e){var n;const s=e.targetId,r=e.Vt.count,i=this.se(s);if(i){const o=i.target;if(Jl(o))if(r===0){const a=new H(o.path);this.Yt(s,a,st.newNoDocument(a,te.min()))}else Ae(r===1);else{const a=this.ie(s);if(a!==r){const c=this.re(e,a);if(c!==0){this.ee(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,l)}(n=zh.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var f,d,v,y,w,k;const S={localCacheCount:u,existenceFilterCount:h.count},P=h.unchangedNames;return P&&(S.bloomFilter={applied:l===0,hashCount:(f=P==null?void 0:P.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(y=(v=(d=P==null?void 0:P.bits)===null||d===void 0?void 0:d.bitmap)===null||v===void 0?void 0:v.length)!==null&&y!==void 0?y:0,padding:(k=(w=P==null?void 0:P.bits)===null||w===void 0?void 0:w.padding)!==null&&k!==void 0?k:0}),S}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:r}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=Cs(i).toUint8Array()}catch(u){if(u instanceof kw)return dr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new qh(c,o,a)}catch(u){return dr(u instanceof jr?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:r!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),r++)}),r}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&Jl(a.target)){const c=new H(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,st.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=oe();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const r=new uc(e,n,this.Wt,this.jt,s);return this.jt=In(),this.zt=Kp(),this.Wt=new xe(pe),r}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Hp,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new ct(pe),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Hp),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Kp(){return new xe(H.comparator)}function Wp(){return new xe(H.comparator)}const Dx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ox=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Px=(()=>({and:"AND",or:"OR"}))();class Mx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function nu(t,e){return t.useProto3Json||sc(e)?e:{value:e}}function ga(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function e_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Lx(t,e){return ga(t,e.toTimestamp())}function tn(t){return Ae(!!t),te.fromTimestamp(function(e){const n=Yn(e);return new He(n.seconds,n.nanos)}(t))}function Hh(t,e){return function(n){return new Te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function t_(t){const e=Te.fromString(t);return Ae(i_(e)),e}function su(t,e){return Hh(t.databaseId,e.path)}function tl(t,e){const n=t_(e);if(n.get(1)!==t.databaseId.projectId)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(n_(n))}function ru(t,e){return Hh(t.databaseId,e)}function Fx(t){const e=t_(t);return e.length===4?Te.emptyPath():n_(e)}function iu(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function n_(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gp(t,e,n){return{name:su(t,e),fields:n.value.mapValue.fields}}function $x(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Ae(l===void 0||typeof l=="string"),ht.fromBase64String(l||"")):(Ae(l===void 0||l instanceof Uint8Array),ht.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:Xw(c.code);return new F(l,c.message||"")}(o);n=new Zw(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=tl(t,s.document.name),i=tn(s.document.updateTime),o=s.document.createTime?tn(s.document.createTime):te.min(),a=new yt({mapValue:{fields:s.document.fields}}),c=st.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Do(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=tl(t,s.document),i=s.readTime?tn(s.readTime):te.min(),o=st.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Do([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=tl(t,s.document),i=s.removedTargetIds||[];n=new Do([],i,r,null)}else{if(!("filter"in e))return J();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new Ax(r,i),a=s.targetId;n=new Jw(a,o)}}return n}function Ux(t,e){let n;if(e instanceof Yi)n={update:Gp(t,e.key,e.value)};else if(e instanceof Yw)n={delete:su(t,e.key)};else if(e instanceof es)n={update:Gp(t,e.key,e.data),updateMask:Gx(e.fieldMask)};else{if(!(e instanceof Tx))return J();n={verify:su(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof da)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ci)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ai)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof pa)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw J()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Lx(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:J()}(t,e.precondition)),n}function Vx(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?tn(s.updateTime):tn(r);return i.isEqual(te.min())&&(i=tn(r)),new Ex(i,s.transformResults||[])}(n,e))):[]}function Bx(t,e){return{documents:[ru(t,e.path)]}}function jx(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=ru(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ru(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return r_(qt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ws(u.field),direction:Hx(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=nu(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function zx(t){let e=Fx(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ae(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=s_(u);return h instanceof qt&&Dw(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new sr(Gs(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,sc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new fa(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new fa(f,h)}(n.endAt)),lx(e,r,o,i,a,"F",c,l)}function qx(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function s_(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Gs(e.unaryFilter.field);return Be.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Gs(e.unaryFilter.field);return Be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Gs(e.unaryFilter.field);return Be.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Gs(e.unaryFilter.field);return Be.create(i,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(e){return Be.create(Gs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return qt.create(e.compositeFilter.filters.map(n=>s_(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return J()}}(e.compositeFilter.op))}(t):J()}function Hx(t){return Dx[t]}function Kx(t){return Ox[t]}function Wx(t){return Px[t]}function Ws(t){return{fieldPath:t.canonicalString()}}function Gs(t){return it.fromServerFormat(t.fieldPath)}function r_(t){return t instanceof Be?function(e){if(e.op==="=="){if(Pp(e.value))return{unaryFilter:{field:Ws(e.field),op:"IS_NAN"}};if(Op(e.value))return{unaryFilter:{field:Ws(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Pp(e.value))return{unaryFilter:{field:Ws(e.field),op:"IS_NOT_NAN"}};if(Op(e.value))return{unaryFilter:{field:Ws(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ws(e.field),op:Kx(e.op),value:e.value}}}(t):t instanceof qt?function(e){const n=e.getFilters().map(s=>r_(s));return n.length===1?n[0]:{compositeFilter:{op:Wx(e.op),filters:n}}}(t):J()}function Gx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function i_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ln{constructor(e,n,s,r,i=te.min(),o=te.min(),a=ht.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Qx{constructor(e){this.fe=e}}function Yx(t){const e=zx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?eu(e,e.limit,"L"):e}/**
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
 */class Xx{constructor(){this.rn=new Jx}addToCollectionParentIndex(e,n){return this.rn.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Qn.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Qn.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class Jx{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ct(Te.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ct(Te.comparator)).toArray()}}/**
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
 */class yr{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new yr(0)}static Mn(){return new yr(-1)}}/**
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
 */class Zx{constructor(){this.changes=new Rr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class eN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class tN{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&ni(s.mutation,r,bt.empty(),He.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,oe()).next(()=>s))}getLocalViewOfDocuments(e,n,s=oe()){const r=ds();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Br();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ds();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,oe()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=In();const o=ti(),a=ti();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof es)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ni(u.mutation,l,u.mutation.getFieldMask(),He.now())):o.set(l.key,bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new eN(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=ti();let r=new xe((o,a)=>o-a),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||bt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||oe()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Bw();u.forEach(f=>{if(!i.has(f)){const d=Gw(n.get(f),s.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return A.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return H.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Lw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):A.resolve(ds());let a=-1,c=i;return o.next(l=>A.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,oe())).next(u=>({batchId:a,changes:Vw(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(s=>{let r=Br();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Br();return this.indexManager.getCollectionParents(e,r).next(o=>A.forEach(o,a=>{const c=function(l,u){return new kr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,st.newInvalidDocument(l)))});let o=Br();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&ni(l.mutation,c,bt.empty(),He.now()),ac(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class nN{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return A.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:tn(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:Yx(s.bundledQuery),readTime:tn(s.readTime)}}(n)),A.resolve()}}/**
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
 */class sN{constructor(){this.overlays=new xe(H.comparator),this.ls=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ds();return A.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.we(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const r=ds(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return A.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new xe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=ds(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ds(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return A.resolve(a)}we(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Cx(n,s));let i=this.ls.get(n);i===void 0&&(i=oe(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
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
 */class Kh{constructor(){this.fs=new ct(Ke.ds),this.ws=new ct(Ke._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new Ke(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new Ke(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new H(new Te([])),s=new Ke(n,e),r=new Ke(n,e+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new H(new Te([])),s=new Ke(n,e),r=new Ke(n,e+1);let i=oe();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ke(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ke{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return H.comparator(e.key,n.key)||pe(e.As,n.As)}static _s(e,n){return pe(e.As,n.As)||H.comparator(e.key,n.key)}}/**
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
 */class rN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new ct(Ke.ds)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Sx(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new Ke(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ke(n,0),r=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ct(pe);return n.forEach(r=>{const i=new Ke(r,0),o=new Ke(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),A.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;H.isDocumentKey(i)||(i=i.child(""));const o=new Ke(new H(i),0);let a=new ct(pe);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.As)),!0)},o),A.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ae(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return A.forEach(n.mutations,r=>{const i=new Ke(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new Ke(n,0),r=this.Rs.firstAfterOrEqual(s);return A.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class iN{constructor(e){this.Ds=e,this.docs=new xe(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let s=In();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():st.newInvalidDocument(r))}),A.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=In();const o=n.path,a=new H(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||KR(HR(u),s)<=0||(r.has(u.key)||ac(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,s,r){J()}Cs(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new oN(this)}getSize(e){return A.resolve(this.size)}}class oN extends Zx{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(e,r)):this.os.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class aN{constructor(e){this.persistence=e,this.xs=new Rr(n=>Uh(n),Vh),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Kh,this.targetCount=0,this.Ms=yr.kn()}forEachTarget(e,n){return this.xs.forEach((s,r)=>n(r)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),A.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new yr(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Fn(n),A.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),A.waitFor(i).next(()=>r)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.ks.containsKey(n))}}/**
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
 */class cN{constructor(e,n){this.$s={},this.overlays={},this.Os=new Mh(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new aN(this),this.indexManager=new Xx,this.remoteDocumentCache=function(s){return new iN(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new Qx(n),this.qs=new nN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new rN(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){j("MemoryPersistence","Starting transaction:",e);const r=new lN(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(e,n){return A.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class lN extends GR{constructor(e){super(),this.currentSequenceNumber=e}}class Wh{constructor(e){this.persistence=e,this.Qs=new Kh,this.js=null}static zs(e){return new Wh(e)}get Ws(){if(this.js)return this.js;throw J()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),A.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Ws,s=>{const r=H.fromPath(s);return this.Hs(e,r).next(i=>{i||n.removeEntry(r,te.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return A.or([()=>A.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class Gh{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(e,n){let s=oe(),r=oe();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Gh(e,n.fromCache,s,r)}}/**
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
 */class uN{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ki(e,n).next(i=>i||this.Gi(e,n,r,s)).next(i=>i||this.Qi(e,n))}Ki(e,n){if($p(n))return A.resolve(null);let s=En(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=eu(n,null,"F"),s=En(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=oe(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,eu(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,s,r){return $p(n)||r.isEqual(te.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(e,n):(kp()<=ue.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),tu(n)),this.Wi(e,o,n,qR(r,-1)))})}ji(e,n){let s=new ct($w(e));return n.forEach((r,i)=>{ac(e,i)&&(s=s.add(i))}),s}zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,n){return kp()<=ue.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",tu(n)),this.Ui.getDocumentsMatchingQuery(e,n,Qn.min())}Wi(e,n,s,r){return this.Ui.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class hN{constructor(e,n,s,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new xe(pe),this.Yi=new Rr(i=>Uh(i),Vh),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tN(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function fN(t,e,n,s){return new hN(t,e,n,s)}async function o_(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=oe();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function dN(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=A.resolve();return h.forEach(d=>{f=f.next(()=>l.getEntry(a,d)).next(v=>{const y=c.docVersions.get(d);Ae(y!==null),v.version.compareTo(y)<0&&(u.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),l.addEntry(v)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=oe();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function a_(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function pN(t,e){const n=se(t),s=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(ht.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),r=r.insert(h,d),function(v,y,w){return v.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(f,d,u)&&a.push(n.Bs.updateTargetData(i,d))});let c=In(),l=oe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(gN(i,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!s.isEqual(te.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=r,i))}function gN(t,e,n){let s=oe(),r=oe();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=In();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(te.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:r}})}function mN(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function yN(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,e).next(i=>i?(r=i,A.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new Ln(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function ou(t,e,n){const s=se(t),r=s.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Qi(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function Qp(t,e,n){const s=se(t);let r=te.min(),i=oe();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=se(a),h=u.Yi.get(l);return h!==void 0?A.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(s,o,En(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?r:te.min(),n?i:oe())).next(a=>(vN(s,ux(e),a),{documents:a,ir:i})))}function vN(t,e,n){let s=t.Xi.get(e)||te.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Xi.set(e,s)}class Yp{constructor(){this.activeTargetIds=mx()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wN{constructor(){this.Hr=new Yp,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Yp,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _N{Yr(e){}shutdown(){}}/**
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
 */class Xp{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wo=null;function nl(){return wo===null?wo=268435456+Math.round(2147483648*Math.random()):wo++,"0x"+wo.toString(16)}/**
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
 */const EN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class IN{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const tt="WebChannelConnection";class bN extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,r,i){const o=nl(),a=this.To(e,n);j("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.Eo(c,r,i),this.Ao(e,a,c,s).then(l=>(j("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw dr("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}vo(e,n,s,r,i,o){return this.Io(e,n,s,r,i)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ar,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}To(e,n){const s=EN[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,r){const i=nl();return new Promise((o,a)=>{const c=new OR;c.setWithCredentials(!0),c.listenOnce(xR.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case el.NO_ERROR:const u=c.getResponseJson();j(tt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case el.TIMEOUT:j(tt,`RPC '${e}' ${i} timed out`),a(new F(I.DEADLINE_EXCEEDED,"Request time out"));break;case el.HTTP_ERROR:const h=c.getStatus();if(j(tt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const v=function(y){const w=y.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(w)>=0?w:I.UNKNOWN}(d.status);a(new F(v,d.message))}else a(new F(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new F(I.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{j(tt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);j(tt,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=nl(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=kR(),a=RR(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new DR({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");j(tt,`Creating RPC '${e}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,d=!1;const v=new IN({ro:w=>{d?j(tt,`Not sending because RPC '${e}' stream ${r} is closed:`,w):(f||(j(tt,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),j(tt,`RPC '${e}' stream ${r} sending:`,w),h.send(w))},oo:()=>h.close()}),y=(w,k,S)=>{w.listen(k,P=>{try{S(P)}catch(O){setTimeout(()=>{throw O},0)}})};return y(h,go.EventType.OPEN,()=>{d||j(tt,`RPC '${e}' stream ${r} transport opened.`)}),y(h,go.EventType.CLOSE,()=>{d||(d=!0,j(tt,`RPC '${e}' stream ${r} transport closed`),v.wo())}),y(h,go.EventType.ERROR,w=>{d||(d=!0,dr(tt,`RPC '${e}' stream ${r} transport errored:`,w),v.wo(new F(I.UNAVAILABLE,"The operation could not be completed")))}),y(h,go.EventType.MESSAGE,w=>{var k;if(!d){const S=w.data[0];Ae(!!S);const P=S,O=P.error||((k=P[0])===null||k===void 0?void 0:k.error);if(O){j(tt,`RPC '${e}' stream ${r} received error:`,O);const Q=O.status;let U=function(x){const Y=Ue[x];if(Y!==void 0)return Xw(Y)}(Q),z=O.message;U===void 0&&(U=I.INTERNAL,z="Unknown error status: "+Q+" with message "+O.message),d=!0,v.wo(new F(U,z)),h.close()}else j(tt,`RPC '${e}' stream ${r} received:`,S),v._o(S)}}),y(a,NR.STAT_EVENT,w=>{w.stat===Cp.PROXY?j(tt,`RPC '${e}' stream ${r} detected buffering proxy`):w.stat===Cp.NOPROXY&&j(tt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{v.fo()},0),v}}function sl(){return typeof document<"u"?document:null}/**
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
 */function hc(t){return new Mx(t,!0)}/**
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
 */class c_{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&j("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class l_{constructor(e,n,s,r,i,o,a,c){this.ii=e,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new c_(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(_n(n.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{e(()=>{const r=new F(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TN extends l_{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=$x(this.serializer,e),s=function(r){if(!("targetChange"in r))return te.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?te.min():i.readTime?tn(i.readTime):te.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=iu(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=Jl(a)?{documents:Bx(r,a)}:{query:jx(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=e_(r,i.resumeToken);const c=nu(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(te.min())>0){o.readTime=ga(r,i.snapshotVersion.toTimestamp());const c=nu(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=qx(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=iu(this.serializer),n.removeTarget=e,this.Wo(n)}}class SN extends l_{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=Vx(e.writeResults,e.commitTime),s=tn(e.commitTime);return this.listener.cu(s,n)}return Ae(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=iu(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Ux(this.serializer,s))};this.Wo(n)}}/**
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
 */class CN extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new F(I.UNKNOWN,r.toString())})}vo(e,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(I.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class AN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(_n(n),this.mu=!1):j("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class kN{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{Ms(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=se(a);c.vu.add(4),await Ji(c),c.bu.set("Unknown"),c.vu.delete(4),await fc(c)}(this))})}),this.bu=new AN(s,r)}}async function fc(t){if(Ms(t))for(const e of t.Ru)await e(!0)}async function Ji(t){for(const e of t.Ru)await e(!1)}function u_(t,e){const n=se(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Xh(n)?Yh(n):xr(n).Ko()&&Qh(n,e))}function h_(t,e){const n=se(t),s=xr(n);n.Au.delete(e),s.Ko()&&f_(n,e),n.Au.size===0&&(s.Ko()?s.jo():Ms(n)&&n.bu.set("Unknown"))}function Qh(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xr(t).su(e)}function f_(t,e){t.Vu.qt(e),xr(t).iu(e)}function Yh(t){t.Vu=new Nx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),xr(t).start(),t.bu.gu()}function Xh(t){return Ms(t)&&!xr(t).Uo()&&t.Au.size>0}function Ms(t){return se(t).vu.size===0}function d_(t){t.Vu=void 0}async function RN(t){t.Au.forEach((e,n)=>{Qh(t,e)})}async function xN(t,e){d_(t),Xh(t)?(t.bu.Iu(e),Yh(t)):t.bu.set("Unknown")}async function NN(t,e,n){if(t.bu.set("Online"),e instanceof Zw&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ma(t,s)}else if(e instanceof Do?t.Vu.Ht(e):e instanceof Jw?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(te.min()))try{const s=await a_(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Au.get(c);l&&r.Au.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Au.get(a);if(!l)return;r.Au.set(a,l.withResumeToken(ht.EMPTY_BYTE_STRING,l.snapshotVersion)),f_(r,a);const u=new Ln(l.target,a,c,l.sequenceNumber);Qh(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){j("RemoteStore","Failed to raise snapshot:",s),await ma(t,s)}}async function ma(t,e,n){if(!Qi(e))throw e;t.vu.add(1),await Ji(t),t.bu.set("Offline"),n||(n=()=>a_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await fc(t)})}function p_(t,e){return e().catch(n=>ma(t,n,e))}async function dc(t){const e=se(t),n=Xn(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;DN(e);)try{const r=await mN(e.localStore,s);if(r===null){e.Eu.length===0&&n.jo();break}s=r.batchId,ON(e,r)}catch(r){await ma(e,r)}g_(e)&&m_(e)}function DN(t){return Ms(t)&&t.Eu.length<10}function ON(t,e){t.Eu.push(e);const n=Xn(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function g_(t){return Ms(t)&&!Xn(t).Uo()&&t.Eu.length>0}function m_(t){Xn(t).start()}async function PN(t){Xn(t).hu()}async function MN(t){const e=Xn(t);for(const n of t.Eu)e.uu(n.mutations)}async function LN(t,e,n){const s=t.Eu.shift(),r=jh.from(s,e,n);await p_(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await dc(t)}async function FN(t,e){e&&Xn(t).ou&&await async function(n,s){if(r=s.code,kx(r)&&r!==I.ABORTED){const i=n.Eu.shift();Xn(n).Qo(),await p_(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await dc(n)}var r}(t,e),g_(t)&&m_(t)}async function Jp(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const s=Ms(n);n.vu.add(3),await Ji(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await fc(n)}async function $N(t,e){const n=se(t);e?(n.vu.delete(2),await fc(n)):e||(n.vu.add(2),await Ji(n),n.bu.set("Unknown"))}function xr(t){return t.Su||(t.Su=function(e,n,s){const r=se(e);return r.fu(),new TN(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:RN.bind(null,t),ao:xN.bind(null,t),nu:NN.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Xh(t)?Yh(t):t.bu.set("Unknown")):(await t.Su.stop(),d_(t))})),t.Su}function Xn(t){return t.Du||(t.Du=function(e,n,s){const r=se(e);return r.fu(),new SN(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:PN.bind(null,t),ao:FN.bind(null,t),au:MN.bind(null,t),cu:LN.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await dc(t)):(await t.Du.stop(),t.Eu.length>0&&(j("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class Jh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Jh(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zh(t,e){if(_n("AsyncQueue",`${e}: ${t}`),Qi(t))return new F(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ir{constructor(e){this.comparator=e?(n,s)=>e(n,s)||H.comparator(n.key,s.key):(n,s)=>H.comparator(n.key,s.key),this.keyedMap=Br(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new ir(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ir)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ir;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Zp{constructor(){this.Cu=new xe(H.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):J():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class vr{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new vr(e,n,ir.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class UN{constructor(){this.Nu=void 0,this.listeners=[]}}class VN{constructor(){this.queries=new Rr(e=>Fw(e),oc),this.onlineState="Unknown",this.ku=new Set}}async function y_(t,e){const n=se(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new UN),r)try{i.Nu=await n.onListen(s)}catch(o){const a=Zh(o,`Initialization of query '${tu(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&ef(n)}async function v_(t,e){const n=se(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function BN(t,e){const n=se(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&ef(n)}function jN(t,e,n){const s=se(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function ef(t){t.ku.forEach(e=>{e.next()})}class w_{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new vr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=vr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class __{constructor(e){this.key=e}}class E_{constructor(e){this.key=e}}class zN{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=oe(),this.mutatedKeys=oe(),this.tc=$w(e),this.ec=new ir(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new Zp,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),d=ac(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let w=!1;f&&d?f.data.isEqual(d.data)?v!==y&&(s.track({type:3,doc:d}),w=!0):this.rc(f,d)||(s.track({type:2,doc:d}),w=!0,(c&&this.tc(d,c)>0||l&&this.tc(d,l)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),w=!0):f&&!d&&(s.track({type:1,doc:f}),w=!0,(c||l)&&(a=!0)),w&&(d?(o=o.add(d),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((l,u)=>function(h,f){const d=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return d(h)-d(f)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new vr(this.query,e.ec,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Zp,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=oe(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new E_(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new __(s))}),n}hc(e){this.Yu=e.ir,this.Zu=oe();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return vr.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class qN{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class HN{constructor(e){this.key=e,this.fc=!1}}class KN{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Rr(a=>Fw(a),oc),this._c=new Map,this.mc=new Set,this.gc=new xe(H.comparator),this.yc=new Map,this.Ic=new Kh,this.Tc={},this.Ec=new Map,this.Ac=yr.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function WN(t,e){const n=sD(t);let s,r;const i=n.wc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await yN(n.localStore,En(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await GN(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&u_(n.remoteStore,o)}return r}async function GN(t,e,n,s,r){t.Rc=(h,f,d)=>async function(v,y,w,k){let S=y.view.sc(w);S.zi&&(S=await Qp(v.localStore,y.query,!1).then(({documents:Q})=>y.view.sc(Q,S)));const P=k&&k.targetChanges.get(y.targetId),O=y.view.applyChanges(S,v.isPrimaryClient,P);return tg(v,y.targetId,O.cc),O.snapshot}(t,h,f,d);const i=await Qp(t.localStore,e,!0),o=new zN(e,i.ir),a=o.sc(i.documents),c=Xi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);tg(t,n,l.cc);const u=new qN(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function QN(t,e){const n=se(t),s=n.wc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!oc(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ou(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),h_(n.remoteStore,s.targetId),au(n,s.targetId)}).catch(Gi)):(au(n,s.targetId),await ou(n.localStore,s.targetId,!0))}async function YN(t,e,n){const s=rD(t);try{const r=await function(i,o){const a=se(i),c=He.now(),l=o.reduce((f,d)=>f.add(d.key),oe());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=In(),v=oe();return a.Zi.getEntries(f,l).next(y=>{d=y,d.forEach((w,k)=>{k.isValidDocument()||(v=v.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(y=>{u=y;const w=[];for(const k of o){const S=bx(k,u.get(k.key).overlayedDocument);S!=null&&w.push(new es(k.key,S,Rw(S.value.mapValue),Ut.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,w,o)}).next(y=>{h=y;const w=y.applyToLocalDocumentSet(u,v);return a.documentOverlayCache.saveOverlays(f,y.batchId,w)})}).then(()=>({batchId:h.batchId,changes:Vw(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new xe(pe)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Zi(s,r.changes),await dc(s.remoteStore)}catch(r){const i=Zh(r,"Failed to persist write");n.reject(i)}}async function I_(t,e){const n=se(t);try{const s=await pN(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(Ae(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?Ae(o.fc):r.removedDocuments.size>0&&(Ae(o.fc),o.fc=!1))}),await Zi(n,s,e)}catch(s){await Gi(s)}}function eg(t,e,n){const s=se(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=se(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&ef(a)}(s.eventManager,e),r.length&&s.dc.nu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function XN(t,e,n){const s=se(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.yc.get(e),i=r&&r.key;if(i){let o=new xe(H.comparator);o=o.insert(i,st.newNoDocument(i,te.min()));const a=oe().add(i),c=new uc(te.min(),new Map,new xe(pe),o,a);await I_(s,c),s.gc=s.gc.remove(i),s.yc.delete(e),tf(s)}else await ou(s.localStore,e,!1).then(()=>au(s,e,n)).catch(Gi)}async function JN(t,e){const n=se(t),s=e.batch.batchId;try{const r=await dN(n.localStore,e);T_(n,s,null),b_(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Zi(n,r)}catch(r){await Gi(r)}}async function ZN(t,e,n){const s=se(t);try{const r=await function(i,o){const a=se(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Ae(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);T_(s,e,n),b_(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Zi(s,r)}catch(r){await Gi(r)}}function b_(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function T_(t,e,n){const s=se(t);let r=s.Tc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Tc[s.currentUser.toKey()]=r}}function au(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||S_(t,s)})}function S_(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(h_(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),tf(t))}function tg(t,e,n){for(const s of n)s instanceof __?(t.Ic.addReference(s.key,e),eD(t,s)):s instanceof E_?(j("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||S_(t,s.key)):J()}function eD(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(j("SyncEngine","New document in limbo: "+n),t.mc.add(s),tf(t))}function tf(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new H(Te.fromString(e)),s=t.Ac.next();t.yc.set(s,new HN(n)),t.gc=t.gc.insert(n,s),u_(t.remoteStore,new Ln(En(rc(n.path)),s,"TargetPurposeLimboResolution",Mh.ct))}}async function Zi(t,e,n){const s=se(t),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Gh.Li(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,c){const l=se(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(c,h=>A.forEach(h.Fi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>A.forEach(h.Bi,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Qi(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Ji.get(h),d=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(d);l.Ji=l.Ji.insert(h,v)}}}(s.localStore,i))}async function tD(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const s=await o_(n.localStore,e);n.currentUser=e,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new F(I.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Zi(n,s.er)}}function nD(t,e){const n=se(t),s=n.yc.get(e);if(s&&s.fc)return oe().add(s.key);{let r=oe();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function sD(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=I_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XN.bind(null,e),e.dc.nu=BN.bind(null,e.eventManager),e.dc.Pc=jN.bind(null,e.eventManager),e}function rD(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZN.bind(null,e),e}class ng{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=hc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return fN(this.persistence,new uN,e.initialUser,this.serializer)}createPersistence(e){return new cN(Wh.zs,this.serializer)}createSharedClientState(e){return new wN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class iD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>eg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=tD.bind(null,this.syncEngine),await $N(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new VN}createDatastore(e){const n=hc(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new bN(r));var r;return function(i,o,a,c){return new CN(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>eg(this.syncEngine,a,0),o=Xp.D()?new Xp:new _N,new kN(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new KN(s,r,i,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=se(e);j("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Ji(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class C_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):_n("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class oD{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=nt.UNAUTHENTICATED,this.clientId=Cw.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Zh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function rl(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await o_(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cD(t);j("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Jp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Jp(e.remoteStore,i)),t._onlineComponents=e}function aD(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function cD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await rl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!aD(n))throw n;dr("Error using user provided cache. Falling back to memory cache: "+n),await rl(t,new ng)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await rl(t,new ng);return t._offlineComponents}async function A_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await sg(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await sg(t,new iD))),t._onlineComponents}function lD(t){return A_(t).then(e=>e.syncEngine)}async function cu(t){const e=await A_(t),n=e.eventManager;return n.onListen=WN.bind(null,e.syncEngine),n.onUnlisten=QN.bind(null,e.syncEngine),n}function uD(t,e,n={}){const s=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new C_({next:h=>{i.enqueueAndForget(()=>v_(r,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new F(I.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new F(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new w_(rc(o.path),l,{includeMetadataChanges:!0,Ku:!0});return y_(r,u)}(await cu(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function k_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const rg=new Map;/**
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
 */function R_(t,e,n){if(!n)throw new F(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hD(t,e,n,s){if(e===!0&&s===!0)throw new F(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ig(t){if(!H.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function og(t){if(H.isDocumentKey(t))throw new F(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Vt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pc(t);throw new F(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class ag{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new F(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=k_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new F(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new F(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new F(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class gc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ag({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ag(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new MR;switch(n.type){case"firstParty":return new UR(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=rg.get(e);n&&(j("ComponentProvider","Removing Datastore"),rg.delete(e),n.terminate())}(this),Promise.resolve()}}function fD(t,e,n,s={}){var r;const i=(t=Vt(t,gc))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&dr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=nt.MOCK_USER;else{o=NT(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new F(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new nt(c)}t._authCredentials=new LR(new Sw(o,a))}}/**
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
 */class lt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}}class Ls{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ls(this.firestore,e,this._query)}}class qn extends Ls{constructor(e,n,s){super(e,n,rc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new H(e))}withConverter(e){return new qn(this.firestore,e,this._path)}}function lu(t,e,...n){if(t=ze(t),R_("collection","path",e),t instanceof gc){const s=Te.fromString(e,...n);return og(s),new qn(t,null,s)}{if(!(t instanceof lt||t instanceof qn))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Te.fromString(e,...n));return og(s),new qn(t.firestore,null,s)}}function mn(t,e,...n){if(t=ze(t),arguments.length===1&&(e=Cw.A()),R_("doc","path",e),t instanceof gc){const s=Te.fromString(e,...n);return ig(s),new lt(t,null,new H(s))}{if(!(t instanceof lt||t instanceof qn))throw new F(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Te.fromString(e,...n));return ig(s),new lt(t.firestore,t instanceof qn?t.converter:null,new H(s))}}/**
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
 */class dD{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new c_(this,"async_queue_retry"),this.Xc=()=>{const n=sl();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=sl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=sl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new zn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Qi(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw _n("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=Jh.createAndSchedule(this,e,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&J()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function cg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class ks extends gc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new dD,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||x_(this),this._firestoreClient.terminate()}}function pD(t,e){const n=typeof t=="object"?t:Xu(),s=typeof t=="string"?t:e||"(default)",r=Ds(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=RT("firestore");i&&fD(r,...i)}return r}function nf(t){return t._firestoreClient||x_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function x_(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new XR(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,k_(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new oD(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class wr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wr(ht.fromBase64String(e))}catch(n){throw new F(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wr(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class mc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class sf{constructor(e){this._methodName=e}}/**
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
 */class rf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
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
 */const gD=/^__.*__$/;class mD{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new es(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yi(e,this.data,n,this.fieldTransforms)}}class N_{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new es(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function D_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class of{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new of(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.fa(e),r}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return ya(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(D_(this.ca)&&gD.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class yD{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||hc(e)}ya(e,n,s,r=!1){return new of({ca:e,methodName:n,ga:s,path:it.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yc(t){const e=t._freezeSettings(),n=hc(t._databaseId);return new yD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function O_(t,e,n,s,r,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,r);af("Data must be an object, but it was:",o,s);const a=P_(s,o);let c,l;if(i.merge)c=new bt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=uu(e,h,n);if(!o.contains(f))throw new F(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);L_(u,f)||u.push(f)}c=new bt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new mD(new yt(a),c,l)}class vc extends sf{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vc}}function vD(t,e,n,s){const r=t.ya(1,e,n);af("Data must be an object, but it was:",r,s);const i=[],o=yt.empty();Ps(s,(c,l)=>{const u=cf(e,c,n);l=ze(l);const h=r.da(u);if(l instanceof vc)i.push(u);else{const f=eo(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new bt(i);return new N_(o,a,r.fieldTransforms)}function wD(t,e,n,s,r,i){const o=t.ya(1,e,n),a=[uu(e,s,n)],c=[r];if(i.length%2!=0)throw new F(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(uu(e,i[f])),c.push(i[f+1]);const l=[],u=yt.empty();for(let f=a.length-1;f>=0;--f)if(!L_(l,a[f])){const d=a[f];let v=c[f];v=ze(v);const y=o.da(d);if(v instanceof vc)l.push(d);else{const w=eo(v,y);w!=null&&(l.push(d),u.set(d,w))}}const h=new bt(l);return new N_(u,h,o.fieldTransforms)}function _D(t,e,n,s=!1){return eo(n,t.ya(s?4:3,e))}function eo(t,e){if(M_(t=ze(t)))return af("Unsupported field value:",e,t),P_(t,e);if(t instanceof sf)return function(n,s){if(!D_(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=eo(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=ze(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return yx(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=He.fromDate(n);return{timestampValue:ga(s.serializer,r)}}if(n instanceof He){const r=new He(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ga(s.serializer,r)}}if(n instanceof rf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof wr)return{bytesValue:e_(s.serializer,n._byteString)};if(n instanceof lt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Hh(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${pc(n)}`)}(t,e)}function P_(t,e){const n={};return Aw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ps(t,(s,r)=>{const i=eo(r,e.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function M_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof rf||t instanceof wr||t instanceof lt||t instanceof sf)}function af(t,e,n){if(!M_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=pc(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function uu(t,e,n){if((e=ze(e))instanceof mc)return e._internalPath;if(typeof e=="string")return cf(t,e);throw ya("Field path arguments must be of type string or ",t,!1,void 0,n)}const ED=new RegExp("[~\\*/\\[\\]]");function cf(t,e,n){if(e.search(ED)>=0)throw ya(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mc(...e.split("."))._internalPath}catch{throw ya(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ya(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new F(I.INVALID_ARGUMENT,a+t+c)}function L_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class F_{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ID(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(lf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ID extends F_{data(){return super.data()}}function lf(t,e){return typeof e=="string"?cf(t,e):e instanceof mc?e._internalPath:e._delegate._internalPath}/**
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
 */function bD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uf{}class $_ extends uf{}function TD(t,e,...n){let s=[];e instanceof uf&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof ff).length,o=r.filter(a=>a instanceof hf).length;if(i>1||i>0&&o>0)throw new F(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class hf extends $_{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new hf(e,n,s)}_apply(e){const n=this._parse(e);return U_(e._query,n),new Ls(e.firestore,e.converter,Zl(e._query,n))}_parse(e){const n=yc(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new F(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){ug(u,l);const f=[];for(const d of u)f.push(lg(a,r,d));h={arrayValue:{values:f}}}else h=lg(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||ug(u,l),h=_D(o,i,u,l==="in"||l==="not-in");return Be.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class ff extends uf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ff(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)U_(i,a),i=Zl(i,a)}(e._query,n),new Ls(e.firestore,e.converter,Zl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class df extends $_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new df(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new F(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new F(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new sr(r,i);return function(a,c){if(Bh(a)===null){const l=ic(a);l!==null&&V_(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Ls(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new kr(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function SD(t,e="asc"){const n=e,s=lf("orderBy",t);return df._create(s,n)}function lg(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new F(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Lw(e)&&n.indexOf("/")!==-1)throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Te.fromString(n));if(!H.isDocumentKey(s))throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Dp(t,new H(s))}if(n instanceof lt)return Dp(t,n._key);throw new F(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pc(n)}.`)}function ug(t,e){if(!Array.isArray(t)||t.length===0)throw new F(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function U_(t,e){if(e.isInequality()){const s=ic(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new F(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Bh(t);i!==null&&V_(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function V_(t,e,n){if(!n.isEqual(e))throw new F(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class CD{convertValue(e,n="none"){switch(As(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Ps(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new rf(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Fh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(bi(e));default:return null}}convertTimestamp(e){const n=Yn(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Te.fromString(e);Ae(i_(s));const r=new Ti(s.get(1),s.get(3)),i=new H(s.popFirst(5));return r.isEqual(n)||_n(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function B_(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class zr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class j_ extends F_{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Oo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(lf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Oo extends j_{data(e={}){return super.data(e)}}class AD{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new zr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Oo(this._firestore,this._userDataWriter,s.key,s,new zr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Oo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new zr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Oo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new zr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:kD(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
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
 */function ki(t){t=Vt(t,lt);const e=Vt(t.firestore,ks);return uD(nf(e),t._key).then(n=>W_(e,t,n))}class z_ extends CD{constructor(e){super(),this.firestore=e}convertBytes(e){return new wr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function q_(t,e,n){t=Vt(t,lt);const s=Vt(t.firestore,ks),r=B_(t.converter,e,n);return pf(s,[O_(yc(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Ut.none())])}function RD(t,e,n,...s){t=Vt(t,lt);const r=Vt(t.firestore,ks),i=yc(r);let o;return o=typeof(e=ze(e))=="string"||e instanceof mc?wD(i,"updateDoc",t._key,e,n,s):vD(i,"updateDoc",t._key,e),pf(r,[o.toMutation(t._key,Ut.exists(!0))])}function H_(t,e){const n=Vt(t.firestore,ks),s=mn(t),r=B_(t.converter,e);return pf(n,[O_(yc(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Ut.exists(!1))]).then(()=>s)}function K_(t,...e){var n,s,r;t=ze(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||cg(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(cg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,l,u;if(t instanceof lt)l=Vt(t.firestore,ks),u=rc(t._key.path),c={next:h=>{e[o]&&e[o](W_(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Vt(t,Ls);l=Vt(h.firestore,ks),u=h._query;const f=new z_(l);c={next:d=>{e[o]&&e[o](new AD(l,f,h,d))},error:e[o+1],complete:e[o+2]},bD(t._query)}return function(h,f,d,v){const y=new C_(v),w=new w_(f,y,d);return h.asyncQueue.enqueueAndForget(async()=>y_(await cu(h),w)),()=>{y.Dc(),h.asyncQueue.enqueueAndForget(async()=>v_(await cu(h),w))}}(nf(l),u,a,c)}function pf(t,e){return function(n,s){const r=new zn;return n.asyncQueue.enqueueAndForget(async()=>YN(await lD(n),s,r)),r.promise}(nf(t),e)}function W_(t,e,n){const s=n.docs.get(e._key),r=new z_(t);return new j_(t,r,e._key,s,new zr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ar=n})(Tr),sn(new jt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new ks(new FR(n.getProvider("auth-internal")),new BR(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new F(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ti(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),xt(Ap,"3.12.0",t),xt(Ap,"3.12.0","esm2017")})();const xD={apiKey:"AIzaSyAL-n2MaA1vDuXii5uS20YB12yzQWDIlEs",authDomain:"chat-f2257.firebaseapp.com",databaseURL:"https://chat-f2257-default-rtdb.europe-west1.firebasedatabase.app",projectId:"chat-f2257",storageBucket:"chat-f2257.appspot.com",messagingSenderId:"205769011137",appId:"1:205769011137:web:37b1c44b9c6d1143328940",measurementId:"G-FC9R3F875Q"},gf=dy(xD),Hn=pD(gf);Yy(gf);Ak(gf);const Fs=ob("user",()=>{const t=new Ot,e=Yy(),n=qe(!0),s=qe({auth:!1,uid:"0",exist:void 0});VC(e,c=>{c?(s.value.auth=!0,s.value.uid=c.uid,console.log("auth: "+c.uid),console.log("authexist: "+s.value.exist),o(),n.value=!1):(s.value.auth=!1,s.value.uid="0",s.value.exist=void 0,console.log("NE"),n.value=!1)});const r=()=>{cA(e,t).then(c=>{l.value.uid=Ot.credentialFromResult(c).uid,l.value.auth=!0,n.value=!1;const l=c.user}).catch(c=>{n.value=!1,c.code,c.message,c.email,Ot.credentialFromError(c)}),n.value=!1},i=()=>{BC(e).then(()=>{s.value.auth=!1,s.value.uid="0",localStorage.removeItem("auth"),n.value=!1}).catch(c=>{})},o=()=>{const c=mn(Hn,"users",s.value.uid);console.log("testas: "+s.value.uid),K_(c,h=>{s.value.lobbyId=h.data().lobby}),console.log("testas"),s.value.fetchingUser=!0;const l=mn(Hn,"users",s.value.uid);let u;ki(l).then(h=>{console.log("FIRST CIRCLE"+h.exists()),h.exists()?(s.value.exist=!0,s.value.nickname=h.data().nickname):s.value.exist=!1,s.value.fetchingUser=!1}).catch(h=>{console.log(h),s.value.fetchingUser=!1}),console.log("get user exist function:"+u)};return{user:s,signIn:r,logOut:i,checkIfUserExist:o,registerUser:async c=>{const l=c.toLowerCase(),u=mn(Hn,"users",s.value.uid);await q_(u,{nickname:l}),s.value.exist=!0,s.value.nickname=l},fetchingUser:n}}),ND={class:"top-bar p-4 flex justify-between place-items-center bg-lime-400"},DD={class:"font-bold"},OD={key:0},PD={class:"font-bold"},G_={__name:"TopBar",setup(t){const e=Fs();return qe(),(n,s)=>(he(),Le("div",ND,[Ce(Ho,{onClick:Se(e).logOut},{default:ws(()=>[gs("log out")]),_:1},8,["onClick"]),fe("span",null,[gs("Username: "),fe("span",DD,Kn(Se(e).user.nickname),1)]),Se(e).user.lobbyId!=="undefined"?(he(),Le("span",OD,[gs("Lobby: "),fe("span",PD,Kn(Se(e).user.lobbyId),1)])):$t("",!0)]))}},MD={__name:"Message",props:{author:{type:String},message:{type:String}},setup(t){const e=t,{author:n,message:s}=e;return(r,i)=>(he(),Le("li",null,[fe("span",null,Kn(Se(n))+":",1),fe("span",null,Kn(Se(s)),1)]))}};const LD=t=>(nm("data-v-3dbbdb15"),t=t(),sm(),t),FD={class:"container mx-auto"},$D={class:"main-wrapper flex flex-col bg-lime-200"},UD={key:0,class:"text-red-500"},VD={key:1,class:"chat-logs flex flex-col place-content-between"},BD={class:"p-4 flex flex-col gap-y-2"},jD=["onSubmit"],zD=LD(()=>fe("button",{type:"submit"},"Send",-1)),qD={__name:"Logs",setup(t){const e=qe(),n=mT(),s=Fs(),r=qe(""),i=qe(!1),o=qe([]),a=qe(""),c=()=>{const l=mn(Hn,"chats",e.value),u=lu(l,e.value);H_(u,{time:new Date().getTime(),author:s.user.nickname,message:a.value})};return Fu(async()=>{e.value=n.params.id,s.user.auth||(console.log("User is not"),If.push({name:"home"})),$u(async()=>{i.value&&console.log("chat")});try{const l=mn(Hn,"chats",e.value);if((await ki(l)).data()!==void 0){const h=lu(l,e.value),f=TD(h,SD("time"));K_(f,d=>{const v=[];d.forEach(y=>{console.log(y.id," => ",y.data()),v.push({id:y.id,author:y.data().author,message:y.data().message})}),o.value=v})}else console.log("nera")}catch(l){r.value="Lobby doesn't exist or something went wrong",i.value=!1,console.log(l)}console.log("lobbyid: "+e.value)}),(l,u)=>(he(),Le("div",FD,[fe("div",$D,[Ce(G_),r.value!==""?(he(),Le("span",UD,Kn(r.value),1)):(he(),Le("div",VD,[fe("ul",BD,[(he(!0),Le(mt,null,LE(o.value,h=>(he(),Ft(MD,{author:h.author,message:h.message,key:h.id},null,8,["author","message"]))),128))]),fe("form",{onSubmit:Hu(c,["prevent"]),class:"flex place-items-center gap-x-2"},[Mu(fe("textarea",{type:"text","onUpdate:modelValue":u[0]||(u[0]=h=>a.value=h),class:"max-h-40"},null,512),[[qu,a.value,void 0,{trim:!0}]]),zD],40,jD)]))])]))}},HD=xs(qD,[["__scopeId","data-v-3dbbdb15"]]),si=/^[a-z0-9]+(-[a-z0-9]+)*$/,wc=(t,e,n,s="")=>{const r=t.split(":");if(t.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;s=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const a=r.pop(),c=r.pop(),l={provider:r.length>0?r[0]:s,prefix:c,name:a};return e&&!Po(l)?null:l}const i=r[0],o=i.split("-");if(o.length>1){const a={provider:s,prefix:o.shift(),name:o.join("-")};return e&&!Po(a)?null:a}if(n&&s===""){const a={provider:s,prefix:"",name:i};return e&&!Po(a,n)?null:a}return null},Po=(t,e)=>t?!!((t.provider===""||t.provider.match(si))&&(e&&t.prefix===""||t.prefix.match(si))&&t.name.match(si)):!1,Q_=Object.freeze({left:0,top:0,width:16,height:16}),va=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),_c=Object.freeze({...Q_,...va}),hu=Object.freeze({..._c,body:"",hidden:!1});function KD(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const s=((t.rotate||0)+(e.rotate||0))%4;return s&&(n.rotate=s),n}function hg(t,e){const n=KD(t,e);for(const s in hu)s in va?s in t&&!(s in n)&&(n[s]=va[s]):s in e?n[s]=e[s]:s in t&&(n[s]=t[s]);return n}function WD(t,e){const n=t.icons,s=t.aliases||Object.create(null),r=Object.create(null);function i(o){if(n[o])return r[o]=[];if(!(o in r)){r[o]=null;const a=s[o]&&s[o].parent,c=a&&i(a);c&&(r[o]=[a].concat(c))}return r[o]}return(e||Object.keys(n).concat(Object.keys(s))).forEach(i),r}function GD(t,e,n){const s=t.icons,r=t.aliases||Object.create(null);let i={};function o(a){i=hg(s[a]||r[a],i)}return o(e),n.forEach(o),hg(t,i)}function Y_(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(r=>{e(r,null),n.push(r)});const s=WD(t);for(const r in s){const i=s[r];i&&(e(r,GD(t,r,i)),n.push(r))}return n}const QD={provider:"",aliases:{},not_found:{},...Q_};function il(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function X_(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!il(t,QD))return null;const n=e.icons;for(const r in n){const i=n[r];if(!r.match(si)||typeof i.body!="string"||!il(i,hu))return null}const s=e.aliases||Object.create(null);for(const r in s){const i=s[r],o=i.parent;if(!r.match(si)||typeof o!="string"||!n[o]&&!s[o]||!il(i,hu))return null}return e}const fg=Object.create(null);function YD(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function Rs(t,e){const n=fg[t]||(fg[t]=Object.create(null));return n[e]||(n[e]=YD(t,e))}function mf(t,e){return X_(e)?Y_(e,(n,s)=>{s?t.icons[n]=s:t.missing.add(n)}):[]}function XD(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let Ri=!1;function J_(t){return typeof t=="boolean"&&(Ri=t),Ri}function JD(t){const e=typeof t=="string"?wc(t,!0,Ri):t;if(e){const n=Rs(e.provider,e.prefix),s=e.name;return n.icons[s]||(n.missing.has(s)?null:void 0)}}function ZD(t,e){const n=wc(t,!0,Ri);if(!n)return!1;const s=Rs(n.provider,n.prefix);return XD(s,n.name,e)}function eO(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),Ri&&!e&&!t.prefix){let r=!1;return X_(t)&&(t.prefix="",Y_(t,(i,o)=>{o&&ZD(i,o)&&(r=!0)})),r}const n=t.prefix;if(!Po({provider:e,prefix:n,name:"a"}))return!1;const s=Rs(e,n);return!!mf(s,t)}const Z_=Object.freeze({width:null,height:null}),e0=Object.freeze({...Z_,...va}),tO=/(-?[0-9.]*[0-9]+[0-9.]*)/g,nO=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function dg(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const s=t.split(tO);if(s===null||!s.length)return t;const r=[];let i=s.shift(),o=nO.test(i);for(;;){if(o){const a=parseFloat(i);isNaN(a)?r.push(i):r.push(Math.ceil(a*e*n)/n)}else r.push(i);if(i=s.shift(),i===void 0)return r.join("");o=!o}}const sO=t=>t==="unset"||t==="undefined"||t==="none";function rO(t,e){const n={..._c,...t},s={...e0,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,s].forEach(v=>{const y=[],w=v.hFlip,k=v.vFlip;let S=v.rotate;w?k?S+=2:(y.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),y.push("scale(-1 1)"),r.top=r.left=0):k&&(y.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),y.push("scale(1 -1)"),r.top=r.left=0);let P;switch(S<0&&(S-=Math.floor(S/4)*4),S=S%4,S){case 1:P=r.height/2+r.top,y.unshift("rotate(90 "+P.toString()+" "+P.toString()+")");break;case 2:y.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:P=r.width/2+r.left,y.unshift("rotate(-90 "+P.toString()+" "+P.toString()+")");break}S%2===1&&(r.left!==r.top&&(P=r.left,r.left=r.top,r.top=P),r.width!==r.height&&(P=r.width,r.width=r.height,r.height=P)),y.length&&(i='<g transform="'+y.join(" ")+'">'+i+"</g>")});const o=s.width,a=s.height,c=r.width,l=r.height;let u,h;o===null?(h=a===null?"1em":a==="auto"?l:a,u=dg(h,c/l)):(u=o==="auto"?c:o,h=a===null?dg(u,l/c):a==="auto"?l:a);const f={},d=(v,y)=>{sO(y)||(f[v]=y.toString())};return d("width",u),d("height",h),f.viewBox=r.left.toString()+" "+r.top.toString()+" "+c.toString()+" "+l.toString(),{attributes:f,body:i}}const iO=/\sid="(\S+)"/g,oO="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let aO=0;function cO(t,e=oO){const n=[];let s;for(;s=iO.exec(t);)n.push(s[1]);if(!n.length)return t;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(aO++).toString(),a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")}),t=t.replace(new RegExp(r,"g"),""),t}const fu=Object.create(null);function lO(t,e){fu[t]=e}function du(t){return fu[t]||fu[""]}function yf(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const vf=Object.create(null),Lr=["https://api.simplesvg.com","https://api.unisvg.com"],Mo=[];for(;Lr.length>0;)Lr.length===1||Math.random()>.5?Mo.push(Lr.shift()):Mo.push(Lr.pop());vf[""]=yf({resources:["https://api.iconify.design"].concat(Mo)});function uO(t,e){const n=yf(e);return n===null?!1:(vf[t]=n,!0)}function wf(t){return vf[t]}const hO=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let pg=hO();function fO(t,e){const n=wf(t);if(!n)return 0;let s;if(!n.maxURL)s=0;else{let r=0;n.resources.forEach(o=>{r=Math.max(r,o.length)});const i=e+".json?icons=";s=n.maxURL-r-n.path.length-i.length}return s}function dO(t){return t===404}const pO=(t,e,n)=>{const s=[],r=fO(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},a=0;return n.forEach((c,l)=>{a+=c.length+1,a>=r&&l>0&&(s.push(o),o={type:i,provider:t,prefix:e,icons:[]},a=c.length),o.icons.push(c)}),s.push(o),s};function gO(t){if(typeof t=="string"){const e=wf(t);if(e)return e.path}return"/"}const mO=(t,e,n)=>{if(!pg){n("abort",424);return}let s=gO(e.provider);switch(e.type){case"icons":{const i=e.prefix,a=e.icons.join(","),c=new URLSearchParams({icons:a});s+=i+".json?"+c.toString();break}case"custom":{const i=e.uri;s+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let r=503;pg(t+s).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(dO(o)?"abort":"next",o)});return}return r=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",r)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",r)})},yO={prepare:pO,send:mO};function vO(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((r,i)=>r.provider!==i.provider?r.provider.localeCompare(i.provider):r.prefix!==i.prefix?r.prefix.localeCompare(i.prefix):r.name.localeCompare(i.name));let s={provider:"",prefix:"",name:""};return t.forEach(r=>{if(s.name===r.name&&s.prefix===r.prefix&&s.provider===r.provider)return;s=r;const i=r.provider,o=r.prefix,a=r.name,c=n[i]||(n[i]=Object.create(null)),l=c[o]||(c[o]=Rs(i,o));let u;a in l.icons?u=e.loaded:o===""||l.missing.has(a)?u=e.missing:u=e.pending;const h={provider:i,prefix:o,name:a};u.push(h)}),e}function t0(t,e){t.forEach(n=>{const s=n.loaderCallbacks;s&&(n.loaderCallbacks=s.filter(r=>r.id!==e))})}function wO(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const s=t.provider,r=t.prefix;e.forEach(i=>{const o=i.icons,a=o.pending.length;o.pending=o.pending.filter(c=>{if(c.prefix!==r)return!0;const l=c.name;if(t.icons[l])o.loaded.push({provider:s,prefix:r,name:l});else if(t.missing.has(l))o.missing.push({provider:s,prefix:r,name:l});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||t0([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let _O=0;function EO(t,e,n){const s=_O++,r=t0.bind(null,n,s);if(!e.pending.length)return r;const i={id:s,icons:e,callback:t,abort:r};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),r}function IO(t,e=!0,n=!1){const s=[];return t.forEach(r=>{const i=typeof r=="string"?wc(r,e,n):r;i&&s.push(i)}),s}var bO={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function TO(t,e,n,s){const r=t.resources.length,i=t.random?Math.floor(Math.random()*r):t.index;let o;if(t.random){let U=t.resources.slice(0);for(o=[];U.length>1;){const z=Math.floor(Math.random()*U.length);o.push(U[z]),U=U.slice(0,z).concat(U.slice(z+1))}o=o.concat(U)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const a=Date.now();let c="pending",l=0,u,h=null,f=[],d=[];typeof s=="function"&&d.push(s);function v(){h&&(clearTimeout(h),h=null)}function y(){c==="pending"&&(c="aborted"),v(),f.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),f=[]}function w(U,z){z&&(d=[]),typeof U=="function"&&d.push(U)}function k(){return{startTime:a,payload:e,status:c,queriesSent:l,queriesPending:f.length,subscribe:w,abort:y}}function S(){c="failed",d.forEach(U=>{U(void 0,u)})}function P(){f.forEach(U=>{U.status==="pending"&&(U.status="aborted")}),f=[]}function O(U,z,x){const Y=z!=="success";switch(f=f.filter(X=>X!==U),c){case"pending":break;case"failed":if(Y||!t.dataAfterTimeout)return;break;default:return}if(z==="abort"){u=x,S();return}if(Y){u=x,f.length||(o.length?Q():S());return}if(v(),P(),!t.random){const X=t.resources.indexOf(U.resource);X!==-1&&X!==t.index&&(t.index=X)}c="completed",d.forEach(X=>{X(x)})}function Q(){if(c!=="pending")return;v();const U=o.shift();if(U===void 0){if(f.length){h=setTimeout(()=>{v(),c==="pending"&&(P(),S())},t.timeout);return}S();return}const z={status:"pending",resource:U,callback:(x,Y)=>{O(z,x,Y)}};f.push(z),l++,h=setTimeout(Q,t.rotate),n(U,e,z.callback)}return setTimeout(Q),k}function n0(t){const e={...bO,...t};let n=[];function s(){n=n.filter(a=>a().status==="pending")}function r(a,c,l){const u=TO(e,a,c,(h,f)=>{s(),l&&l(h,f)});return n.push(u),u}function i(a){return n.find(c=>a(c))||null}return{query:r,find:i,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:s}}function gg(){}const ol=Object.create(null);function SO(t){if(!ol[t]){const e=wf(t);if(!e)return;const n=n0(e),s={config:e,redundancy:n};ol[t]=s}return ol[t]}function CO(t,e,n){let s,r;if(typeof t=="string"){const i=du(t);if(!i)return n(void 0,424),gg;r=i.send;const o=SO(t);o&&(s=o.redundancy)}else{const i=yf(t);if(i){s=n0(i);const o=t.resources?t.resources[0]:"",a=du(o);a&&(r=a.send)}}return!s||!r?(n(void 0,424),gg):s.query(e,r,n)().abort}const mg="iconify2",xi="iconify",s0=xi+"-count",yg=xi+"-version",r0=36e5,AO=168;function pu(t,e){try{return t.getItem(e)}catch{}}function _f(t,e,n){try{return t.setItem(e,n),!0}catch{}}function vg(t,e){try{t.removeItem(e)}catch{}}function gu(t,e){return _f(t,s0,e.toString())}function mu(t){return parseInt(pu(t,s0))||0}const Ec={local:!0,session:!0},i0={local:new Set,session:new Set};let Ef=!1;function kO(t){Ef=t}let _o=typeof window>"u"?{}:window;function o0(t){const e=t+"Storage";try{if(_o&&_o[e]&&typeof _o[e].length=="number")return _o[e]}catch{}Ec[t]=!1}function a0(t,e){const n=o0(t);if(!n)return;const s=pu(n,yg);if(s!==mg){if(s){const a=mu(n);for(let c=0;c<a;c++)vg(n,xi+c.toString())}_f(n,yg,mg),gu(n,0);return}const r=Math.floor(Date.now()/r0)-AO,i=a=>{const c=xi+a.toString(),l=pu(n,c);if(typeof l=="string"){try{const u=JSON.parse(l);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>r&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&e(u,a))return!0}catch{}vg(n,c)}};let o=mu(n);for(let a=o-1;a>=0;a--)i(a)||(a===o-1?(o--,gu(n,o)):i0[t].add(a))}function c0(){if(!Ef){kO(!0);for(const t in Ec)a0(t,e=>{const n=e.data,s=e.provider,r=n.prefix,i=Rs(s,r);if(!mf(i,n).length)return!1;const o=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,o):o,!0})}}function RO(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const s in Ec)a0(s,r=>{const i=r.data;return r.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function xO(t,e){Ef||c0();function n(s){let r;if(!Ec[s]||!(r=o0(s)))return;const i=i0[s];let o;if(i.size)i.delete(o=Array.from(i).shift());else if(o=mu(r),!gu(r,o+1))return;const a={cached:Math.floor(Date.now()/r0),provider:t.provider,data:e};return _f(r,xi+o.toString(),JSON.stringify(a))}e.lastModified&&!RO(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function wg(){}function NO(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,wO(t)}))}function DO(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:s}=t,r=t.iconsToLoad;delete t.iconsToLoad;let i;if(!r||!(i=du(n)))return;i.prepare(n,s,r).forEach(a=>{CO(n,a,c=>{if(typeof c!="object")a.icons.forEach(l=>{t.missing.add(l)});else try{const l=mf(t,c);if(!l.length)return;const u=t.pendingIcons;u&&l.forEach(h=>{u.delete(h)}),xO(t,c)}catch(l){console.error(l)}NO(t)})})}))}const OO=(t,e)=>{const n=IO(t,!0,J_()),s=vO(n);if(!s.pending.length){let c=!0;return e&&setTimeout(()=>{c&&e(s.loaded,s.missing,s.pending,wg)}),()=>{c=!1}}const r=Object.create(null),i=[];let o,a;return s.pending.forEach(c=>{const{provider:l,prefix:u}=c;if(u===a&&l===o)return;o=l,a=u,i.push(Rs(l,u));const h=r[l]||(r[l]=Object.create(null));h[u]||(h[u]=[])}),s.pending.forEach(c=>{const{provider:l,prefix:u,name:h}=c,f=Rs(l,u),d=f.pendingIcons||(f.pendingIcons=new Set);d.has(h)||(d.add(h),r[l][u].push(h))}),i.forEach(c=>{const{provider:l,prefix:u}=c;r[l][u].length&&DO(c,r[l][u])}),e?EO(e,s,i):wg};function PO(t,e){const n={...t};for(const s in e){const r=e[s],i=typeof r;s in Z_?(r===null||r&&(i==="string"||i==="number"))&&(n[s]=r):i===typeof n[s]&&(n[s]=s==="rotate"?r%4:r)}return n}const MO=/[\s,]+/;function LO(t,e){e.split(MO).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function FO(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function s(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(t);return isNaN(r)?0:s(r)}else if(n!==t){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/r,i%1===0?s(i):0)}}return e}function $O(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in e)n+=" "+s+'="'+e[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function UO(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function VO(t){return"data:image/svg+xml,"+UO(t)}function BO(t){return'url("'+VO(t)+'")'}const _g={...e0,inline:!1},jO={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},zO={display:"inline-block"},yu={backgroundColor:"currentColor"},l0={backgroundColor:"transparent"},Eg={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Ig={webkitMask:yu,mask:yu,background:l0};for(const t in Ig){const e=Ig[t];for(const n in Eg)e[t+n]=Eg[n]}const Lo={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";Lo[t+"-flip"]=e,Lo[t.slice(0,1)+"-flip"]=e,Lo[t+"Flip"]=e});function bg(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Tg=(t,e)=>{const n=PO(_g,e),s={...jO},r=e.mode||"svg",i={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let y in e){const w=e[y];if(w!==void 0)switch(y){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[y]=w===!0||w==="true"||w===1;break;case"flip":typeof w=="string"&&LO(n,w);break;case"color":i.color=w;break;case"rotate":typeof w=="string"?n[y]=FO(w):typeof w=="number"&&(n[y]=w);break;case"ariaHidden":case"aria-hidden":w!==!0&&w!=="true"&&delete s["aria-hidden"];break;default:{const k=Lo[y];k?(w===!0||w==="true"||w===1)&&(n[k]=!0):_g[y]===void 0&&(s[y]=w)}}}const c=rO(t,n),l=c.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),r==="svg"){s.style={...i,...a},Object.assign(s,l);let y=0,w=e.id;return typeof w=="string"&&(w=w.replace(/-/g,"_")),s.innerHTML=cO(c.body,w?()=>w+"ID"+y++:"iconifyVue"),_s("svg",s)}const{body:u,width:h,height:f}=t,d=r==="mask"||(r==="bg"?!1:u.indexOf("currentColor")!==-1),v=$O(u,{...l,width:h+"",height:f+""});return s.style={...i,"--svg":BO(v),width:bg(l.width),height:bg(l.height),...zO,...d?yu:l0,...a},_s("span",s)};J_(!0);lO("",yO);if(typeof document<"u"&&typeof window<"u"){c0();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!eO(s))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const s="IconifyProviders["+n+"] is invalid.";try{const r=e[n];if(typeof r!="object"||!r||r.resources===void 0)continue;uO(n,r)||console.error(s)}catch{console.error(s)}}}}const qO={..._c,body:""},HO=Lu({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=wc(t,!1,!0))===null)return this.abortLoading(),null;const s=JD(n);if(!s)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",s!==null&&(this._loadingIcon={name:t,abort:OO([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const r=["iconify"];return n.prefix!==""&&r.push("iconify--"+n.prefix),n.provider!==""&&r.push("iconify--"+n.provider),{data:s,classes:r}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!e)return Tg(qO,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),Tg({..._c,...e.data},n)}});const u0=t=>(nm("data-v-462f9c3a"),t=t(),sm(),t),KO={class:"container mx-auto"},WO={class:"uppercase",key:1},GO=u0(()=>fe("p",{key:"1"}," Chatzy is a chat application built with VUE.JS where you can chat with your friends! ",-1)),QO=u0(()=>fe("span",{key:"3"},"Sign In with Google",-1)),YO={__name:"SignIn",setup(t){const e=Fs();return(n,s)=>{const r=dm("XyzTransitionGroup");return he(),Le("div",KO,[Ce(r,{appear:"",class:"bbz text-center flex flex-col place-items-center"},{default:ws(()=>[(he(),Le("h1",WO,"Chatzy")),GO,fe("button",{class:"flex justify-center place-items-center gap-2 bg-lime-500 text-white font-bold p-3 mt-3 rounded-lg hover:bg-lime-600 duration-500",onClick:s[0]||(s[0]=(...i)=>Se(e).signIn&&Se(e).signIn(...i)),key:"2"},[QO,Ce(Se(HO),{icon:"mdi:google"})])]),_:1})])}}},XO=xs(YO,[["__scopeId","data-v-462f9c3a"]]),JO={key:0,class:"text-center"},ZO=fe("span",null,"Looks like It's your first time here. ",-1),eP=fe("span",null,"Please enter your username, It will be visible to other chat members.",-1),tP={__name:"CreateUsername",setup(t){const e=qe(""),n=Fs();return(s,r)=>Se(n).user.fetchingUser?$t("",!0):(he(),Le("div",JO,[ZO,eP,fe("form",{onSubmit:r[1]||(r[1]=Hu(i=>Se(n).registerUser(e.value),["prevent"])),class:"flex flex-col place-items-center gap-y-4"},[Mu(fe("input",{type:"text",maxlength:"10",placeholder:"Your username","onUpdate:modelValue":r[0]||(r[0]=i=>e.value=i),class:"p-2 rounded-lg shadow-md mt-3"},null,512),[[qu,e.value]]),Ce(Ho,null,{default:ws(()=>[gs("Im ready!")]),_:1})],32)]))}};function nP(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function sP(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function s(){if(this instanceof s){var r=[null];r.push.apply(r,arguments);var i=Function.bind.apply(e,r);return new i}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(s){var r=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(n,s,r.get?r:{enumerable:!0,get:function(){return t[s]}})}),n}function rP(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ni={exports:{}};const iP={},oP=Object.freeze(Object.defineProperty({__proto__:null,default:iP},Symbol.toStringTag,{value:"Module"})),aP=sP(oP);var h0=typeof process<"u"&&process.pid?process.pid.toString(36):"",f0="";if(typeof __webpack_require__!="function"&&typeof rP<"u"){var al="",Sg=aP;if(Sg.networkInterfaces)var cl=Sg.networkInterfaces();if(cl){e:for(let t in cl){const e=cl[t],n=e.length;for(var qs=0;qs<n;qs++)if(e[qs]!==void 0&&e[qs].mac&&e[qs].mac!="00:00:00:00:00:00"){al=e[qs].mac;break e}}f0=al?parseInt(al.replace(/\:|\D+/gi,"")).toString(36):""}}Ni.exports=Ni.exports.default=function(t,e){return(t||"")+f0+h0+Di().toString(36)+(e||"")};Ni.exports.process=function(t,e){return(t||"")+h0+Di().toString(36)+(e||"")};Ni.exports.time=function(t,e){return(t||"")+Di().toString(36)+(e||"")};function Di(){var t=Date.now(),e=Di.last||t;return Di.last=t>e?t:e+1}var cP=Ni.exports;const lP=nP(cP),uP={key:0,class:"modal fixed w-screen h-screen flex flex-col justify-center place-items-center"},hP={class:"modal-content container bg-lime-400 flex flex-col relative z-10"},fP={class:"modal-top text-center p-4"},dP={class:"modal-center text-center bg-white p-2"},pP={key:1},gP={__name:"CreateLobby",props:{toggle:{type:Boolean}},setup(t){const e=t,n=Fs(),s=qe(!1),r=qe(!1),i=qe("Create a lobby");let o;const a=async()=>{o=lP();const c=mn(Hn,"users",n.user.uid);if((await ki(c)).data().lobby){s.value=!0,i.value="You already have a lobby!",console.log("yra jau");return}const u=mn(Hn,"chats",o),h=lu(u,o);await ki(u),await q_(u,{}),await H_(h,{}),await RD(c,{lobby:o}),r.value=!0,i.value="Lobby created!"};return(c,l)=>e.toggle?(he(),Le("div",uP,[fe("div",{class:"overlay fixed w-screen h-screen bg-lime-950 bg-opacity-30 blur-md top-0 left-0",onClick:l[0]||(l[0]=u=>c.$emit("toggle-back"))}),fe("div",hP,[fe("div",fP,Kn(i.value),1),fe("div",dP,[!s.value&&!r.value?(he(),Le("button",{key:0,onClick:a}," Create ")):$t("",!0),r.value?(he(),Le("span",pP,"Your lobby code: "+Kn(Se(o)),1)):$t("",!0)])])])):$t("",!0)}},mP={key:0,class:"modal fixed w-screen h-screen flex flex-col justify-center place-items-center"},yP={class:"modal-content container bg-lime-400 flex flex-col relative z-10"},vP=fe("div",{class:"modal-top text-center p-4"},[fe("span",null,"Enter a Lobby Code")],-1),wP={class:"modal-center text-center bg-white p-2"},_P=["onSubmit"],EP={key:1,class:"text-red-700 text-sm"},IP={__name:"JoinLobby",props:{toggle:{type:Boolean}},setup(t){const e=t,n=qe(),s=qe(),r=async()=>{try{const i=mn(Hn,"chats",s.value),o=await ki(i);n.value="",If.push({path:`/chat&id=${s.value}`})}catch{n.value="Something went wrong or lobby doesn't exist"}};return(i,o)=>e.toggle?(he(),Le("div",mP,[fe("div",{class:"overlay fixed w-screen h-screen bg-lime-950 bg-opacity-30 blur-md top-0 left-0",onClick:o[0]||(o[0]=a=>i.$emit("toggle-back"))}),fe("div",yP,[vP,fe("div",wP,[fe("form",{class:"flex flex-col gap-y-2",onSubmit:Hu(r,["prevent"])},[Mu(fe("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=a=>s.value=a),placeholder:"Lobby Code",class:"bg-lime-200 text-center"},null,512),[[qu,s.value,void 0,{number:!0}]]),!i.lobbyExist&&!i.lobbyCreated?(he(),Le("button",{key:0,onClick:o[2]||(o[2]=(...a)=>i.makeLobby&&i.makeLobby(...a))}," Join ")):$t("",!0),n.value!==""?(he(),Le("span",EP,Kn(n.value),1)):$t("",!0)],40,_P)])])])):$t("",!0)}};const bP={class:"actions flex flex-col gap-y-4 p-4 justify-center place-items-center place-content-center"},TP={__name:"Actions",setup(t){const e=qe(!1),n=qe(!1);console.log("hi2");const s=()=>{e.value=!e.value},r=()=>{n.value=!n.value};return(i,o)=>(he(),Le("div",bP,[n.value?(he(),Ft(IP,{key:0,toggle:n.value,onToggleBack:r},null,8,["toggle"])):$t("",!0),e.value?(he(),Ft(gP,{key:1,toggle:e.value,onToggleBack:s},null,8,["toggle"])):$t("",!0),Ce(Ho,{onClick:s},{default:ws(()=>[gs("Create chat lobby")]),_:1}),Ce(Ho,{onClick:r},{default:ws(()=>[gs("Join chat lobby")]),_:1})]))}},SP=xs(TP,[["__scopeId","data-v-1357e2f8"]]);const CP={class:"main-wrapper flex flex-col bg-lime-200"},AP={__name:"ChatContent",setup(t){return(e,n)=>(he(),Le("div",CP,[Ce(G_),Ce(SP)]))}},kP=xs(AP,[["__scopeId","data-v-8d5e2950"]]);const RP={class:"container mx-auto"},xP={__name:"Chat",setup(t){const e=Fs();return(n,s)=>(he(),Ft(Oa,{name:"fade",mode:"out-in"},{default:ws(()=>[fe("div",RP,[Se(e).user.exist?(he(),Ft(kP,{key:1})):(he(),Ft(tP,{key:0}))])]),_:1}))}},NP=xs(xP,[["__scopeId","data-v-fe711c75"]]),DP={__name:"ChatView",setup(t){const e=Fs();return(n,s)=>{const r=dm("loading");return Se(e).fetchingUser?(he(),Ft(r,{key:0})):!Se(e).user.auth&&!Se(e).fetchingUser?(he(),Ft(XO,{key:1})):Se(e).user.auth&&!Se(e).fetchingUser?(he(),Ft(NP,{key:2})):$t("",!0)}}},If=pT({history:Nb("/"),routes:[{path:"/",name:"home",props:!0,component:DP},{path:"/chat&id=:id",name:"chat",props:!0,component:HD}]}),to=WI(vT);to.component("loading",ZI);to.use(tb());to.use(db);to.use(If);to.mount("#app");
