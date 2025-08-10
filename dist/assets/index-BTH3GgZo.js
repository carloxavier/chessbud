var hs=Object.defineProperty;var ds=(n,e,t)=>e in n?hs(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var R=(n,e,t)=>ds(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function fs(n){return n!==null?{comment:n,variations:[]}:{variations:[]}}function ps(n,e,t,r,i){const s={move:n,variations:i};return e&&(s.suffix=e),t&&(s.nag=t),r!==null&&(s.comment=r),s}function gs(...n){const[e,...t]=n;let r=e;for(const i of t)i!==null&&(r.variations=[i,...i.variations],i.variations=[],r=i);return e}function ms(n,e){if(e.marker&&e.marker.comment){let t=e.root;for(;;){const r=t.variations[0];if(!r){t.comment=e.marker.comment;break}t=r}}return{headers:n,root:e.root,result:(e.marker&&e.marker.result)??void 0}}function _s(n,e){function t(){this.constructor=n}t.prototype=e.prototype,n.prototype=new t}function Oe(n,e,t,r){var i=Error.call(this,n);return Object.setPrototypeOf&&Object.setPrototypeOf(i,Oe.prototype),i.expected=e,i.found=t,i.location=r,i.name="SyntaxError",i}_s(Oe,Error);function Pt(n,e,t){return t=t||" ",n.length>e?n:(e-=n.length,t+=t.repeat(e),n+t.slice(0,e))}Oe.prototype.format=function(n){var e="Error: "+this.message;if(this.location){var t=null,r;for(r=0;r<n.length;r++)if(n[r].source===this.location.source){t=n[r].text.split(/\r\n|\n|\r/g);break}var i=this.location.start,s=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(i):i,o=this.location.source+":"+s.line+":"+s.column;if(t){var a=this.location.end,c=Pt("",s.line.toString().length," "),u=t[i.line-1],g=i.line===a.line?a.column:u.length+1,v=g-i.column||1;e+=`
 --> `+o+`
`+c+` |
`+s.line+" | "+u+`
`+c+" | "+Pt("",i.column-1," ")+Pt("",v,"^")}else e+=`
 at `+o}return e};Oe.buildMessage=function(n,e){var t={literal:function(u){return'"'+i(u.text)+'"'},class:function(u){var g=u.parts.map(function(v){return Array.isArray(v)?s(v[0])+"-"+s(v[1]):s(v)});return"["+(u.inverted?"^":"")+g.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(u){return u.description}};function r(u){return u.charCodeAt(0).toString(16).toUpperCase()}function i(u){return u.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(g){return"\\x0"+r(g)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(g){return"\\x"+r(g)})}function s(u){return u.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(g){return"\\x0"+r(g)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(g){return"\\x"+r(g)})}function o(u){return t[u.type](u)}function a(u){var g=u.map(o),v,m;if(g.sort(),g.length>0){for(v=1,m=1;v<g.length;v++)g[v-1]!==g[v]&&(g[m]=g[v],m++);g.length=m}switch(g.length){case 1:return g[0];case 2:return g[0]+" or "+g[1];default:return g.slice(0,-1).join(", ")+", or "+g[g.length-1]}}function c(u){return u?'"'+i(u)+'"':"end of input"}return"Expected "+a(n)+" but "+c(e)+" found."};function vs(n,e){e=e!==void 0?e:{};var t={},r=e.grammarSource,i={pgn:Nn},s=Nn,o="[",a='"',c="]",u=".",g="O-O-O",v="O-O",m="0-0-0",A="0-0",y="$",N="{",P="}",H=";",Ie="(",fe=")",De="1-0",Me="0-1",Ee="1/2-1/2",tt="*",xe=/^[a-zA-Z]/,Se=/^[^"]/,we=/^[0-9]/,mn=/^[.]/,_n=/^[a-zA-Z1-8\-=]/,hi=/^[+#]/,vn=/^[!?]/,bn=/^[^}]/,yn=/^[^\r\n]/,In=/^[ \t\r\n]/,di=j("tag pair"),fi=M("[",!1),En=M('"',!1),pi=M("]",!1),gi=j("tag name"),At=W([["a","z"],["A","Z"]],!1,!1),mi=j("tag value"),Sn=W(['"'],!0,!1),_i=j("move number"),nt=W([["0","9"]],!1,!1),vi=M(".",!1),wn=W(["."],!1,!1),bi=j("standard algebraic notation"),yi=M("O-O-O",!1),Ii=M("O-O",!1),Ei=M("0-0-0",!1),Si=M("0-0",!1),Tn=W([["a","z"],["A","Z"],["1","8"],"-","="],!1,!1),wi=W(["+","#"],!1,!1),Ti=j("suffix annotation"),Cn=W(["!","?"],!1,!1),Ci=j("NAG"),Ai=M("$",!1),ki=j("brace comment"),Pi=M("{",!1),An=W(["}"],!0,!1),Oi=M("}",!1),Ri=j("rest of line comment"),Ni=M(";",!1),kn=W(["\r",`
`],!0,!1),Li=j("variation"),Di=M("(",!1),Mi=M(")",!1),xi=j("game termination marker"),Ui=M("1-0",!1),$i=M("0-1",!1),Bi=M("1/2-1/2",!1),Fi=M("*",!1),qi=j("whitespace"),Pn=W([" ","	","\r",`
`],!1,!1),Hi=function(l,d){return ms(l,d)},ji=function(l){return Object.fromEntries(l)},Vi=function(l,d){return[l,d]},Ki=function(l,d){return{root:l,marker:d}},Wi=function(l,d){return gs(fs(l),...d.flat())},zi=function(l,d,f,E,S){return ps(l,d,f,E,S)},Gi=function(l){return l},Ji=function(l){return l.replace(/[\r\n]+/g," ")},Qi=function(l){return l.trim()},Yi=function(l){return l},Xi=function(l,d){return{result:l,comment:d}},h=e.peg$currPos|0,Te=[{line:1,column:1}],V=h,rt=e.peg$maxFailExpected||[],_=e.peg$silentFails|0,Ue;if(e.startRule){if(!(e.startRule in i))throw new Error(`Can't start parsing from rule "`+e.startRule+'".');s=i[e.startRule]}function M(l,d){return{type:"literal",text:l,ignoreCase:d}}function W(l,d,f){return{type:"class",parts:l,inverted:d,ignoreCase:f}}function Zi(){return{type:"end"}}function j(l){return{type:"other",description:l}}function On(l){var d=Te[l],f;if(d)return d;if(l>=Te.length)f=Te.length-1;else for(f=l;!Te[--f];);for(d=Te[f],d={line:d.line,column:d.column};f<l;)n.charCodeAt(f)===10?(d.line++,d.column=1):d.column++,f++;return Te[l]=d,d}function Rn(l,d,f){var E=On(l),S=On(d),k={source:r,start:{offset:l,line:E.line,column:E.column},end:{offset:d,line:S.line,column:S.column}};return k}function I(l){h<V||(h>V&&(V=h,rt=[]),rt.push(l))}function es(l,d,f){return new Oe(Oe.buildMessage(l,d),l,d,f)}function Nn(){var l,d,f;return l=h,d=ts(),f=is(),l=Hi(d,f),l}function ts(){var l,d,f;for(l=h,d=[],f=Ln();f!==t;)d.push(f),f=Ln();return f=B(),l=ji(d),l}function Ln(){var l,d,f,E,S,k,pe;return _++,l=h,B(),n.charCodeAt(h)===91?(d=o,h++):(d=t,_===0&&I(fi)),d!==t?(B(),f=ns(),f!==t?(B(),n.charCodeAt(h)===34?(E=a,h++):(E=t,_===0&&I(En)),E!==t?(S=rs(),n.charCodeAt(h)===34?(k=a,h++):(k=t,_===0&&I(En)),k!==t?(B(),n.charCodeAt(h)===93?(pe=c,h++):(pe=t,_===0&&I(pi)),pe!==t?l=Vi(f,S):(h=l,l=t)):(h=l,l=t)):(h=l,l=t)):(h=l,l=t)):(h=l,l=t),_--,l===t&&_===0&&I(di),l}function ns(){var l,d,f;if(_++,l=h,d=[],f=n.charAt(h),xe.test(f)?h++:(f=t,_===0&&I(At)),f!==t)for(;f!==t;)d.push(f),f=n.charAt(h),xe.test(f)?h++:(f=t,_===0&&I(At));else d=t;return d!==t?l=n.substring(l,h):l=d,_--,l===t&&(d=t,_===0&&I(gi)),l}function rs(){var l,d,f;for(_++,l=h,d=[],f=n.charAt(h),Se.test(f)?h++:(f=t,_===0&&I(Sn));f!==t;)d.push(f),f=n.charAt(h),Se.test(f)?h++:(f=t,_===0&&I(Sn));return l=n.substring(l,h),_--,d=t,_===0&&I(mi),l}function is(){var l,d,f;return l=h,d=Dn(),B(),f=us(),f===t&&(f=null),B(),l=Ki(d,f),l}function Dn(){var l,d,f,E;for(l=h,d=kt(),d===t&&(d=null),f=[],E=Mn();E!==t;)f.push(E),E=Mn();return l=Wi(d,f),l}function Mn(){var l,d,f,E,S,k,pe,it;if(l=h,B(),ss(),B(),d=os(),d!==t){for(f=as(),f===t&&(f=null),E=[],S=xn();S!==t;)E.push(S),S=xn();for(S=B(),k=kt(),k===t&&(k=null),pe=[],it=Un();it!==t;)pe.push(it),it=Un();l=zi(d,f,E,k,pe)}else h=l,l=t;return l}function ss(){var l,d,f,E,S,k;for(_++,l=h,d=[],f=n.charAt(h),we.test(f)?h++:(f=t,_===0&&I(nt));f!==t;)d.push(f),f=n.charAt(h),we.test(f)?h++:(f=t,_===0&&I(nt));if(n.charCodeAt(h)===46?(f=u,h++):(f=t,_===0&&I(vi)),f!==t){for(E=B(),S=[],k=n.charAt(h),mn.test(k)?h++:(k=t,_===0&&I(wn));k!==t;)S.push(k),k=n.charAt(h),mn.test(k)?h++:(k=t,_===0&&I(wn));d=[d,f,E,S],l=d}else h=l,l=t;return _--,l===t&&(d=t,_===0&&I(_i)),l}function os(){var l,d,f,E,S,k;if(_++,l=h,d=h,n.substr(h,5)===g?(f=g,h+=5):(f=t,_===0&&I(yi)),f===t&&(n.substr(h,3)===v?(f=v,h+=3):(f=t,_===0&&I(Ii)),f===t&&(n.substr(h,5)===m?(f=m,h+=5):(f=t,_===0&&I(Ei)),f===t&&(n.substr(h,3)===A?(f=A,h+=3):(f=t,_===0&&I(Si)),f===t))))if(f=h,E=n.charAt(h),xe.test(E)?h++:(E=t,_===0&&I(At)),E!==t){if(S=[],k=n.charAt(h),_n.test(k)?h++:(k=t,_===0&&I(Tn)),k!==t)for(;k!==t;)S.push(k),k=n.charAt(h),_n.test(k)?h++:(k=t,_===0&&I(Tn));else S=t;S!==t?(E=[E,S],f=E):(h=f,f=t)}else h=f,f=t;return f!==t?(E=n.charAt(h),hi.test(E)?h++:(E=t,_===0&&I(wi)),E===t&&(E=null),f=[f,E],d=f):(h=d,d=t),d!==t?l=n.substring(l,h):l=d,_--,l===t&&(d=t,_===0&&I(bi)),l}function as(){var l,d,f;for(_++,l=h,d=[],f=n.charAt(h),vn.test(f)?h++:(f=t,_===0&&I(Cn));f!==t;)d.push(f),d.length>=2?f=t:(f=n.charAt(h),vn.test(f)?h++:(f=t,_===0&&I(Cn)));return d.length<1?(h=l,l=t):l=d,_--,l===t&&(d=t,_===0&&I(Ti)),l}function xn(){var l,d,f,E,S;if(_++,l=h,B(),n.charCodeAt(h)===36?(d=y,h++):(d=t,_===0&&I(Ai)),d!==t){if(f=h,E=[],S=n.charAt(h),we.test(S)?h++:(S=t,_===0&&I(nt)),S!==t)for(;S!==t;)E.push(S),S=n.charAt(h),we.test(S)?h++:(S=t,_===0&&I(nt));else E=t;E!==t?f=n.substring(f,h):f=E,f!==t?l=Gi(f):(h=l,l=t)}else h=l,l=t;return _--,l===t&&_===0&&I(Ci),l}function kt(){var l;return l=cs(),l===t&&(l=ls()),l}function cs(){var l,d,f,E,S;if(_++,l=h,n.charCodeAt(h)===123?(d=N,h++):(d=t,_===0&&I(Pi)),d!==t){for(f=h,E=[],S=n.charAt(h),bn.test(S)?h++:(S=t,_===0&&I(An));S!==t;)E.push(S),S=n.charAt(h),bn.test(S)?h++:(S=t,_===0&&I(An));f=n.substring(f,h),n.charCodeAt(h)===125?(E=P,h++):(E=t,_===0&&I(Oi)),E!==t?l=Ji(f):(h=l,l=t)}else h=l,l=t;return _--,l===t&&(d=t,_===0&&I(ki)),l}function ls(){var l,d,f,E,S;if(_++,l=h,n.charCodeAt(h)===59?(d=H,h++):(d=t,_===0&&I(Ni)),d!==t){for(f=h,E=[],S=n.charAt(h),yn.test(S)?h++:(S=t,_===0&&I(kn));S!==t;)E.push(S),S=n.charAt(h),yn.test(S)?h++:(S=t,_===0&&I(kn));f=n.substring(f,h),l=Qi(f)}else h=l,l=t;return _--,l===t&&(d=t,_===0&&I(Ri)),l}function Un(){var l,d,f,E;return _++,l=h,B(),n.charCodeAt(h)===40?(d=Ie,h++):(d=t,_===0&&I(Di)),d!==t?(f=Dn(),f!==t?(B(),n.charCodeAt(h)===41?(E=fe,h++):(E=t,_===0&&I(Mi)),E!==t?l=Yi(f):(h=l,l=t)):(h=l,l=t)):(h=l,l=t),_--,l===t&&_===0&&I(Li),l}function us(){var l,d,f;return _++,l=h,n.substr(h,3)===De?(d=De,h+=3):(d=t,_===0&&I(Ui)),d===t&&(n.substr(h,3)===Me?(d=Me,h+=3):(d=t,_===0&&I($i)),d===t&&(n.substr(h,7)===Ee?(d=Ee,h+=7):(d=t,_===0&&I(Bi)),d===t&&(n.charCodeAt(h)===42?(d=tt,h++):(d=t,_===0&&I(Fi))))),d!==t?(B(),f=kt(),f===t&&(f=null),l=Xi(d,f)):(h=l,l=t),_--,l===t&&(d=t,_===0&&I(xi)),l}function B(){var l,d;for(_++,l=[],d=n.charAt(h),In.test(d)?h++:(d=t,_===0&&I(Pn));d!==t;)l.push(d),d=n.charAt(h),In.test(d)?h++:(d=t,_===0&&I(Pn));return _--,d=t,_===0&&I(qi),l}if(Ue=s(),e.peg$library)return{peg$result:Ue,peg$currPos:h,peg$FAILED:t,peg$maxFailExpected:rt,peg$maxFailPos:V};if(Ue!==t&&h===n.length)return Ue;throw Ue!==t&&h<n.length&&I(Zi()),es(rt,V<n.length?n.charAt(V):null,V<n.length?Rn(V,V+1):Rn(V,V))}/**
 * @license
 * Copyright (c) 2025, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */const ct=0xffffffffffffffffn;function Ot(n,e){return(n<<e|n>>64n-e)&0xffffffffffffffffn}function $n(n,e){return n*e&ct}function bs(n){return function(){let e=BigInt(n&ct),t=BigInt(n>>64n&ct);const r=$n(Ot($n(e,5n),7n),9n);return t^=e,e=(Ot(e,24n)^t^t<<16n)&ct,t=Ot(t,37n),n=t<<64n|e,r}}const Et=bs(0xa187eb39cdcaed8f31c4b365b102e01en),ys=Array.from({length:2},()=>Array.from({length:6},()=>Array.from({length:128},()=>Et()))),Is=Array.from({length:8},()=>Et()),Es=Array.from({length:16},()=>Et()),Rt=Et(),$="w",q="b",L="p",jt="n",lt="b",Be="r",se="q",D="k",Nt="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";class st{constructor(e,t){R(this,"color");R(this,"from");R(this,"to");R(this,"piece");R(this,"captured");R(this,"promotion");R(this,"flags");R(this,"san");R(this,"lan");R(this,"before");R(this,"after");const{color:r,piece:i,from:s,to:o,flags:a,captured:c,promotion:u}=t,g=x(s),v=x(o);this.color=r,this.piece=i,this.from=g,this.to=v,this.san=e._moveToSan(t,e._moves({legal:!0})),this.lan=g+v,this.before=e.fen(),e._makeMove(t),this.after=e.fen(),e._undoMove(),this.flags="";for(const m in T)T[m]&a&&(this.flags+=ge[m]);c&&(this.captured=c),u&&(this.promotion=u,this.lan+=u)}isCapture(){return this.flags.indexOf(ge.CAPTURE)>-1}isPromotion(){return this.flags.indexOf(ge.PROMOTION)>-1}isEnPassant(){return this.flags.indexOf(ge.EP_CAPTURE)>-1}isKingsideCastle(){return this.flags.indexOf(ge.KSIDE_CASTLE)>-1}isQueensideCastle(){return this.flags.indexOf(ge.QSIDE_CASTLE)>-1}isBigPawn(){return this.flags.indexOf(ge.BIG_PAWN)>-1}}const U=-1,ge={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q",NULL_MOVE:"-"},T={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64,NULL_MOVE:128},Vt={Event:"?",Site:"?",Date:"????.??.??",Round:"?",White:"?",Black:"?",Result:"*"},Ss={WhiteTitle:null,BlackTitle:null,WhiteElo:null,BlackElo:null,WhiteUSCF:null,BlackUSCF:null,WhiteNA:null,BlackNA:null,WhiteType:null,BlackType:null,EventDate:null,EventSponsor:null,Section:null,Stage:null,Board:null,Opening:null,Variation:null,SubVariation:null,ECO:null,NIC:null,Time:null,UTCTime:null,UTCDate:null,TimeControl:null,SetUp:null,FEN:null,Termination:null,Annotator:null,Mode:null,PlyCount:null},ws={...Vt,...Ss},w={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},Lt={b:[16,32,17,15],w:[-16,-32,-17,-15]},Bn={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},Ts=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],Cs=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],As={p:1,n:2,b:4,r:8,q:16,k:32},ks="pnbrqkPNBRQK",Fn=[jt,lt,Be,se],Ps=7,Os=6,Rs=1,Ns=0,ot={[D]:T.KSIDE_CASTLE,[se]:T.QSIDE_CASTLE},ne={w:[{square:w.a1,flag:T.QSIDE_CASTLE},{square:w.h1,flag:T.KSIDE_CASTLE}],b:[{square:w.a8,flag:T.QSIDE_CASTLE},{square:w.h8,flag:T.KSIDE_CASTLE}]},Ls={b:Rs,w:Os},Dt="--";function ve(n){return n>>4}function He(n){return n&15}function vr(n){return"0123456789".indexOf(n)!==-1}function x(n){const e=He(n),t=ve(n);return"abcdefgh".substring(e,e+1)+"87654321".substring(t,t+1)}function $e(n){return n===$?q:$}function Ds(n){const e=n.split(/\s+/);if(e.length!==6)return{ok:!1,error:"Invalid FEN: must contain six space-delimited fields"};const t=parseInt(e[5],10);if(isNaN(t)||t<=0)return{ok:!1,error:"Invalid FEN: move number must be a positive integer"};const r=parseInt(e[4],10);if(isNaN(r)||r<0)return{ok:!1,error:"Invalid FEN: half move counter number must be a non-negative integer"};if(!/^(-|[abcdefgh][36])$/.test(e[3]))return{ok:!1,error:"Invalid FEN: en-passant square is invalid"};if(/[^kKqQ-]/.test(e[2]))return{ok:!1,error:"Invalid FEN: castling availability is invalid"};if(!/^(w|b)$/.test(e[1]))return{ok:!1,error:"Invalid FEN: side-to-move is invalid"};const i=e[0].split("/");if(i.length!==8)return{ok:!1,error:"Invalid FEN: piece data does not contain 8 '/'-delimited rows"};for(let o=0;o<i.length;o++){let a=0,c=!1;for(let u=0;u<i[o].length;u++)if(vr(i[o][u])){if(c)return{ok:!1,error:"Invalid FEN: piece data is invalid (consecutive number)"};a+=parseInt(i[o][u],10),c=!0}else{if(!/^[prnbqkPRNBQK]$/.test(i[o][u]))return{ok:!1,error:"Invalid FEN: piece data is invalid (invalid piece)"};a+=1,c=!1}if(a!==8)return{ok:!1,error:"Invalid FEN: piece data is invalid (too many squares in rank)"}}if(e[3][1]=="3"&&e[1]=="w"||e[3][1]=="6"&&e[1]=="b")return{ok:!1,error:"Invalid FEN: illegal en-passant square"};const s=[{color:"white",regex:/K/g},{color:"black",regex:/k/g}];for(const{color:o,regex:a}of s){if(!a.test(e[0]))return{ok:!1,error:`Invalid FEN: missing ${o} king`};if((e[0].match(a)||[]).length>1)return{ok:!1,error:`Invalid FEN: too many ${o} kings`}}return Array.from(i[0]+i[7]).some(o=>o.toUpperCase()==="P")?{ok:!1,error:"Invalid FEN: some pawns are on the edge rows"}:{ok:!0}}function Ms(n,e){const t=n.from,r=n.to,i=n.piece;let s=0,o=0,a=0;for(let c=0,u=e.length;c<u;c++){const g=e[c].from,v=e[c].to,m=e[c].piece;i===m&&t!==g&&r===v&&(s++,ve(t)===ve(g)&&o++,He(t)===He(g)&&a++)}return s>0?o>0&&a>0?x(t):a>0?x(t).charAt(1):x(t).charAt(0):""}function re(n,e,t,r,i,s=void 0,o=T.NORMAL){const a=ve(r);if(i===L&&(a===Ps||a===Ns))for(let c=0;c<Fn.length;c++){const u=Fn[c];n.push({color:e,from:t,to:r,piece:i,captured:s,promotion:u,flags:o|T.PROMOTION})}else n.push({color:e,from:t,to:r,piece:i,captured:s,flags:o})}function qn(n){let e=n.charAt(0);return e>="a"&&e<="h"?n.match(/[a-h]\d.*[a-h]\d/)?void 0:L:(e=e.toLowerCase(),e==="o"?D:e)}function Mt(n){return n.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}class en{constructor(e=Nt,{skipValidation:t=!1}={}){R(this,"_board",new Array(128));R(this,"_turn",$);R(this,"_header",{});R(this,"_kings",{w:U,b:U});R(this,"_epSquare",-1);R(this,"_halfMoves",0);R(this,"_moveNumber",0);R(this,"_history",[]);R(this,"_comments",{});R(this,"_castling",{w:0,b:0});R(this,"_hash",0n);R(this,"_positionCount",new Map);this.load(e,{skipValidation:t})}clear({preserveHeaders:e=!1}={}){this._board=new Array(128),this._kings={w:U,b:U},this._turn=$,this._castling={w:0,b:0},this._epSquare=U,this._halfMoves=0,this._moveNumber=1,this._history=[],this._comments={},this._header=e?this._header:{...ws},this._hash=this._computeHash(),this._positionCount=new Map,this._header.SetUp=null,this._header.FEN=null}load(e,{skipValidation:t=!1,preserveHeaders:r=!1}={}){let i=e.split(/\s+/);if(i.length>=2&&i.length<6){const a=["-","-","0","1"];e=i.concat(a.slice(-(6-i.length))).join(" ")}if(i=e.split(/\s+/),!t){const{ok:a,error:c}=Ds(e);if(!a)throw new Error(c)}const s=i[0];let o=0;this.clear({preserveHeaders:r});for(let a=0;a<s.length;a++){const c=s.charAt(a);if(c==="/")o+=8;else if(vr(c))o+=parseInt(c,10);else{const u=c<"a"?$:q;this._put({type:c.toLowerCase(),color:u},x(o)),o++}}this._turn=i[1],i[2].indexOf("K")>-1&&(this._castling.w|=T.KSIDE_CASTLE),i[2].indexOf("Q")>-1&&(this._castling.w|=T.QSIDE_CASTLE),i[2].indexOf("k")>-1&&(this._castling.b|=T.KSIDE_CASTLE),i[2].indexOf("q")>-1&&(this._castling.b|=T.QSIDE_CASTLE),this._epSquare=i[3]==="-"?U:w[i[3]],this._halfMoves=parseInt(i[4],10),this._moveNumber=parseInt(i[5],10),this._hash=this._computeHash(),this._updateSetup(e),this._incPositionCount()}fen({forceEnpassantSquare:e=!1}={}){var o,a;let t=0,r="";for(let c=w.a8;c<=w.h1;c++){if(this._board[c]){t>0&&(r+=t,t=0);const{color:u,type:g}=this._board[c];r+=u===$?g.toUpperCase():g.toLowerCase()}else t++;c+1&136&&(t>0&&(r+=t),c!==w.h1&&(r+="/"),t=0,c+=8)}let i="";this._castling[$]&T.KSIDE_CASTLE&&(i+="K"),this._castling[$]&T.QSIDE_CASTLE&&(i+="Q"),this._castling[q]&T.KSIDE_CASTLE&&(i+="k"),this._castling[q]&T.QSIDE_CASTLE&&(i+="q"),i=i||"-";let s="-";if(this._epSquare!==U)if(e)s=x(this._epSquare);else{const c=this._epSquare+(this._turn===$?16:-16),u=[c+1,c-1];for(const g of u){if(g&136)continue;const v=this._turn;if(((o=this._board[g])==null?void 0:o.color)===v&&((a=this._board[g])==null?void 0:a.type)===L){this._makeMove({color:v,from:g,to:this._epSquare,piece:L,captured:L,flags:T.EP_CAPTURE});const m=!this._isKingAttacked(v);if(this._undoMove(),m){s=x(this._epSquare);break}}}}return[r,this._turn,i,s,this._halfMoves,this._moveNumber].join(" ")}_pieceKey(e){if(!this._board[e])return 0n;const{color:t,type:r}=this._board[e],i={w:0,b:1}[t],s={p:0,n:1,b:2,r:3,q:4,k:5}[r];return ys[i][s][e]}_epKey(){return this._epSquare===U?0n:Is[this._epSquare&7]}_castlingKey(){const e=this._castling.w>>5|this._castling.b>>3;return Es[e]}_computeHash(){let e=0n;for(let t=w.a8;t<=w.h1;t++){if(t&136){t+=7;continue}this._board[t]&&(e^=this._pieceKey(t))}return e^=this._epKey(),e^=this._castlingKey(),this._turn==="b"&&(e^=Rt),e}_updateSetup(e){this._history.length>0||(e!==Nt?(this._header.SetUp="1",this._header.FEN=e):(this._header.SetUp=null,this._header.FEN=null))}reset(){this.load(Nt)}get(e){return this._board[w[e]]}findPiece(e){var r;const t=[];for(let i=w.a8;i<=w.h1;i++){if(i&136){i+=7;continue}!this._board[i]||((r=this._board[i])==null?void 0:r.color)!==e.color||this._board[i].color===e.color&&this._board[i].type===e.type&&t.push(x(i))}return t}put({type:e,color:t},r){return this._put({type:e,color:t},r)?(this._updateCastlingRights(),this._updateEnPassantSquare(),this._updateSetup(this.fen()),!0):!1}_set(e,t){this._hash^=this._pieceKey(e),this._board[e]=t,this._hash^=this._pieceKey(e)}_put({type:e,color:t},r){if(ks.indexOf(e.toLowerCase())===-1||!(r in w))return!1;const i=w[r];if(e==D&&!(this._kings[t]==U||this._kings[t]==i))return!1;const s=this._board[i];return s&&s.type===D&&(this._kings[s.color]=U),this._set(i,{type:e,color:t}),e===D&&(this._kings[t]=i),!0}_clear(e){this._hash^=this._pieceKey(e),delete this._board[e]}remove(e){const t=this.get(e);return this._clear(w[e]),t&&t.type===D&&(this._kings[t.color]=U),this._updateCastlingRights(),this._updateEnPassantSquare(),this._updateSetup(this.fen()),t}_updateCastlingRights(){var r,i,s,o,a,c,u,g,v,m,A,y;this._hash^=this._castlingKey();const e=((r=this._board[w.e1])==null?void 0:r.type)===D&&((i=this._board[w.e1])==null?void 0:i.color)===$,t=((s=this._board[w.e8])==null?void 0:s.type)===D&&((o=this._board[w.e8])==null?void 0:o.color)===q;(!e||((a=this._board[w.a1])==null?void 0:a.type)!==Be||((c=this._board[w.a1])==null?void 0:c.color)!==$)&&(this._castling.w&=-65),(!e||((u=this._board[w.h1])==null?void 0:u.type)!==Be||((g=this._board[w.h1])==null?void 0:g.color)!==$)&&(this._castling.w&=-33),(!t||((v=this._board[w.a8])==null?void 0:v.type)!==Be||((m=this._board[w.a8])==null?void 0:m.color)!==q)&&(this._castling.b&=-65),(!t||((A=this._board[w.h8])==null?void 0:A.type)!==Be||((y=this._board[w.h8])==null?void 0:y.color)!==q)&&(this._castling.b&=-33),this._hash^=this._castlingKey()}_updateEnPassantSquare(){var s,o;if(this._epSquare===U)return;const e=this._epSquare+(this._turn===$?-16:16),t=this._epSquare+(this._turn===$?16:-16),r=[t+1,t-1];if(this._board[e]!==null||this._board[this._epSquare]!==null||((s=this._board[t])==null?void 0:s.color)!==$e(this._turn)||((o=this._board[t])==null?void 0:o.type)!==L){this._hash^=this._epKey(),this._epSquare=U;return}const i=a=>{var c,u;return!(a&136)&&((c=this._board[a])==null?void 0:c.color)===this._turn&&((u=this._board[a])==null?void 0:u.type)===L};r.some(i)||(this._hash^=this._epKey(),this._epSquare=U)}_attacked(e,t,r){const i=[];for(let s=w.a8;s<=w.h1;s++){if(s&136){s+=7;continue}if(this._board[s]===void 0||this._board[s].color!==e)continue;const o=this._board[s],a=s-t;if(a===0)continue;const c=a+119;if(Ts[c]&As[o.type]){if(o.type===L){if(a>0&&o.color===$||a<=0&&o.color===q)if(r)i.push(x(s));else return!0;continue}if(o.type==="n"||o.type==="k")if(r){i.push(x(s));continue}else return!0;const u=Cs[c];let g=s+u,v=!1;for(;g!==t;){if(this._board[g]!=null){v=!0;break}g+=u}if(!v)if(r){i.push(x(s));continue}else return!0}}return r?i:!1}attackers(e,t){return t?this._attacked(t,w[e],!0):this._attacked(this._turn,w[e],!0)}_isKingAttacked(e){const t=this._kings[e];return t===-1?!1:this._attacked($e(e),t)}hash(){return this._hash.toString(16)}isAttacked(e,t){return this._attacked(t,w[e])}isCheck(){return this._isKingAttacked(this._turn)}inCheck(){return this.isCheck()}isCheckmate(){return this.isCheck()&&this._moves().length===0}isStalemate(){return!this.isCheck()&&this._moves().length===0}isInsufficientMaterial(){const e={b:0,n:0,r:0,q:0,k:0,p:0},t=[];let r=0,i=0;for(let s=w.a8;s<=w.h1;s++){if(i=(i+1)%2,s&136){s+=7;continue}const o=this._board[s];o&&(e[o.type]=o.type in e?e[o.type]+1:1,o.type===lt&&t.push(i),r++)}if(r===2)return!0;if(r===3&&(e[lt]===1||e[jt]===1))return!0;if(r===e[lt]+2){let s=0;const o=t.length;for(let a=0;a<o;a++)s+=t[a];if(s===0||s===o)return!0}return!1}isThreefoldRepetition(){return this._getPositionCount(this._hash)>=3}isDrawByFiftyMoves(){return this._halfMoves>=100}isDraw(){return this.isDrawByFiftyMoves()||this.isStalemate()||this.isInsufficientMaterial()||this.isThreefoldRepetition()}isGameOver(){return this.isCheckmate()||this.isDraw()}moves({verbose:e=!1,square:t=void 0,piece:r=void 0}={}){const i=this._moves({square:t,piece:r});return e?i.map(s=>new st(this,s)):i.map(s=>this._moveToSan(s,i))}_moves({legal:e=!0,piece:t=void 0,square:r=void 0}={}){var A;const i=r?r.toLowerCase():void 0,s=t==null?void 0:t.toLowerCase(),o=[],a=this._turn,c=$e(a);let u=w.a8,g=w.h1,v=!1;if(i)if(i in w)u=g=w[i],v=!0;else return[];for(let y=u;y<=g;y++){if(y&136){y+=7;continue}if(!this._board[y]||this._board[y].color===c)continue;const{type:N}=this._board[y];let P;if(N===L){if(s&&s!==N)continue;P=y+Lt[a][0],this._board[P]||(re(o,a,y,P,L),P=y+Lt[a][1],Ls[a]===ve(y)&&!this._board[P]&&re(o,a,y,P,L,void 0,T.BIG_PAWN));for(let H=2;H<4;H++)P=y+Lt[a][H],!(P&136)&&(((A=this._board[P])==null?void 0:A.color)===c?re(o,a,y,P,L,this._board[P].type,T.CAPTURE):P===this._epSquare&&re(o,a,y,P,L,L,T.EP_CAPTURE))}else{if(s&&s!==N)continue;for(let H=0,Ie=Bn[N].length;H<Ie;H++){const fe=Bn[N][H];for(P=y;P+=fe,!(P&136);){if(!this._board[P])re(o,a,y,P,N);else{if(this._board[P].color===a)break;re(o,a,y,P,N,this._board[P].type,T.CAPTURE);break}if(N===jt||N===D)break}}}}if((s===void 0||s===D)&&(!v||g===this._kings[a])){if(this._castling[a]&T.KSIDE_CASTLE){const y=this._kings[a],N=y+2;!this._board[y+1]&&!this._board[N]&&!this._attacked(c,this._kings[a])&&!this._attacked(c,y+1)&&!this._attacked(c,N)&&re(o,a,this._kings[a],N,D,void 0,T.KSIDE_CASTLE)}if(this._castling[a]&T.QSIDE_CASTLE){const y=this._kings[a],N=y-2;!this._board[y-1]&&!this._board[y-2]&&!this._board[y-3]&&!this._attacked(c,this._kings[a])&&!this._attacked(c,y-1)&&!this._attacked(c,N)&&re(o,a,this._kings[a],N,D,void 0,T.QSIDE_CASTLE)}}if(!e||this._kings[a]===-1)return o;const m=[];for(let y=0,N=o.length;y<N;y++)this._makeMove(o[y]),this._isKingAttacked(a)||m.push(o[y]),this._undoMove();return m}move(e,{strict:t=!1}={}){let r=null;if(typeof e=="string")r=this._moveFromSan(e,t);else if(e===null)r=this._moveFromSan(Dt,t);else if(typeof e=="object"){const s=this._moves();for(let o=0,a=s.length;o<a;o++)if(e.from===x(s[o].from)&&e.to===x(s[o].to)&&(!("promotion"in s[o])||e.promotion===s[o].promotion)){r=s[o];break}}if(!r)throw typeof e=="string"?new Error(`Invalid move: ${e}`):new Error(`Invalid move: ${JSON.stringify(e)}`);if(this.isCheck()&&r.flags&T.NULL_MOVE)throw new Error("Null move not allowed when in check");const i=new st(this,r);return this._makeMove(r),this._incPositionCount(),i}_push(e){this._history.push({move:e,kings:{b:this._kings.b,w:this._kings.w},turn:this._turn,castling:{b:this._castling.b,w:this._castling.w},epSquare:this._epSquare,halfMoves:this._halfMoves,moveNumber:this._moveNumber})}_movePiece(e,t){this._hash^=this._pieceKey(e),this._board[t]=this._board[e],delete this._board[e],this._hash^=this._pieceKey(t)}_makeMove(e){var i,s,o,a;const t=this._turn,r=$e(t);if(this._push(e),e.flags&T.NULL_MOVE){t===q&&this._moveNumber++,this._halfMoves++,this._turn=r,this._epSquare=U;return}if(this._hash^=this._epKey(),this._hash^=this._castlingKey(),e.captured&&(this._hash^=this._pieceKey(e.to)),this._movePiece(e.from,e.to),e.flags&T.EP_CAPTURE&&(this._turn===q?this._clear(e.to-16):this._clear(e.to+16)),e.promotion&&(this._clear(e.to),this._set(e.to,{type:e.promotion,color:t})),this._board[e.to].type===D){if(this._kings[t]=e.to,e.flags&T.KSIDE_CASTLE){const c=e.to-1,u=e.to+1;this._movePiece(u,c)}else if(e.flags&T.QSIDE_CASTLE){const c=e.to+1,u=e.to-2;this._movePiece(u,c)}this._castling[t]=0}if(this._castling[t]){for(let c=0,u=ne[t].length;c<u;c++)if(e.from===ne[t][c].square&&this._castling[t]&ne[t][c].flag){this._castling[t]^=ne[t][c].flag;break}}if(this._castling[r]){for(let c=0,u=ne[r].length;c<u;c++)if(e.to===ne[r][c].square&&this._castling[r]&ne[r][c].flag){this._castling[r]^=ne[r][c].flag;break}}if(this._hash^=this._castlingKey(),e.flags&T.BIG_PAWN){let c;t===q?c=e.to-16:c=e.to+16,!(e.to-1&136)&&((i=this._board[e.to-1])==null?void 0:i.type)===L&&((s=this._board[e.to-1])==null?void 0:s.color)===r||!(e.to+1&136)&&((o=this._board[e.to+1])==null?void 0:o.type)===L&&((a=this._board[e.to+1])==null?void 0:a.color)===r?(this._epSquare=c,this._hash^=this._epKey()):this._epSquare=U}else this._epSquare=U;e.piece===L?this._halfMoves=0:e.flags&(T.CAPTURE|T.EP_CAPTURE)?this._halfMoves=0:this._halfMoves++,t===q&&this._moveNumber++,this._turn=r,this._hash^=Rt}undo(){const e=this._hash,t=this._undoMove();if(t){const r=new st(this,t);return this._decPositionCount(e),r}return null}_undoMove(){const e=this._history.pop();if(e===void 0)return null;this._hash^=this._epKey(),this._hash^=this._castlingKey();const t=e.move;this._kings=e.kings,this._turn=e.turn,this._castling=e.castling,this._epSquare=e.epSquare,this._halfMoves=e.halfMoves,this._moveNumber=e.moveNumber,this._hash^=this._epKey(),this._hash^=this._castlingKey(),this._hash^=Rt;const r=this._turn,i=$e(r);if(t.flags&T.NULL_MOVE)return t;if(this._movePiece(t.to,t.from),t.piece&&(this._clear(t.from),this._set(t.from,{type:t.piece,color:r})),t.captured)if(t.flags&T.EP_CAPTURE){let s;r===q?s=t.to-16:s=t.to+16,this._set(s,{type:L,color:i})}else this._set(t.to,{type:t.captured,color:i});if(t.flags&(T.KSIDE_CASTLE|T.QSIDE_CASTLE)){let s,o;t.flags&T.KSIDE_CASTLE?(s=t.to+1,o=t.to-1):(s=t.to-2,o=t.to+1),this._movePiece(o,s)}return t}pgn({newline:e=`
`,maxWidth:t=0}={}){const r=[];let i=!1;for(const m in this._header)this._header[m]&&r.push(`[${m} "${this._header[m]}"]`+e),i=!0;i&&this._history.length&&r.push(e);const s=m=>{const A=this._comments[this.fen()];if(typeof A<"u"){const y=m.length>0?" ":"";m=`${m}${y}{${A}}`}return m},o=[];for(;this._history.length>0;)o.push(this._undoMove());const a=[];let c="";for(o.length===0&&a.push(s(""));o.length>0;){c=s(c);const m=o.pop();if(!m)break;if(!this._history.length&&m.color==="b"){const A=`${this._moveNumber}. ...`;c=c?`${c} ${A}`:A}else m.color==="w"&&(c.length&&a.push(c),c=this._moveNumber+".");c=c+" "+this._moveToSan(m,this._moves({legal:!0})),this._makeMove(m)}if(c.length&&a.push(s(c)),a.push(this._header.Result||"*"),t===0)return r.join("")+a.join(" ");const u=function(){return r.length>0&&r[r.length-1]===" "?(r.pop(),!0):!1},g=function(m,A){for(const y of A.split(" "))if(y){if(m+y.length>t){for(;u();)m--;r.push(e),m=0}r.push(y),m+=y.length,r.push(" "),m++}return u()&&m--,m};let v=0;for(let m=0;m<a.length;m++){if(v+a[m].length>t&&a[m].includes("{")){v=g(v,a[m]);continue}v+a[m].length>t&&m!==0?(r[r.length-1]===" "&&r.pop(),r.push(e),v=0):m!==0&&(r.push(" "),v++),r.push(a[m]),v+=a[m].length}return r.join("")}header(...e){for(let t=0;t<e.length;t+=2)typeof e[t]=="string"&&typeof e[t+1]=="string"&&(this._header[e[t]]=e[t+1]);return this._header}setHeader(e,t){return this._header[e]=t??Vt[e]??null,this.getHeaders()}removeHeader(e){return e in this._header?(this._header[e]=Vt[e]||null,!0):!1}getHeaders(){const e={};for(const[t,r]of Object.entries(this._header))r!==null&&(e[t]=r);return e}loadPgn(e,{strict:t=!1,newlineChar:r=`\r?
`}={}){r!==`\r?
`&&(e=e.replace(new RegExp(r,"g"),`
`));const i=vs(e);this.reset();const s=i.headers;let o="";for(const u in s)u.toLowerCase()==="fen"&&(o=s[u]),this.header(u,s[u]);if(!t)o&&this.load(o,{preserveHeaders:!0});else if(s.SetUp==="1"){if(!("FEN"in s))throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");this.load(s.FEN,{preserveHeaders:!0})}let a=i.root;for(;a;){if(a.move){const u=this._moveFromSan(a.move,t);if(u==null)throw new Error(`Invalid move in PGN: ${a.move}`);this._makeMove(u),this._incPositionCount()}a.comment!==void 0&&(this._comments[this.fen()]=a.comment),a=a.variations[0]}const c=i.result;c&&Object.keys(this._header).length&&this._header.Result!==c&&this.setHeader("Result",c)}_moveToSan(e,t){let r="";if(e.flags&T.KSIDE_CASTLE)r="O-O";else if(e.flags&T.QSIDE_CASTLE)r="O-O-O";else{if(e.flags&T.NULL_MOVE)return Dt;if(e.piece!==L){const i=Ms(e,t);r+=e.piece.toUpperCase()+i}e.flags&(T.CAPTURE|T.EP_CAPTURE)&&(e.piece===L&&(r+=x(e.from)[0]),r+="x"),r+=x(e.to),e.promotion&&(r+="="+e.promotion.toUpperCase())}return this._makeMove(e),this.isCheck()&&(this.isCheckmate()?r+="#":r+="+"),this._undoMove(),r}_moveFromSan(e,t=!1){let r=Mt(e);if(t||(r==="0-0"?r="O-O":r==="0-0-0"&&(r="O-O-O")),r==Dt)return{color:this._turn,from:0,to:0,piece:"k",flags:T.NULL_MOVE};let i=qn(r),s=this._moves({legal:!0,piece:i});for(let m=0,A=s.length;m<A;m++)if(r===Mt(this._moveToSan(s[m],s)))return s[m];if(t)return null;let o,a,c,u,g,v=!1;if(a=r.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/),a?(o=a[1],c=a[2],u=a[3],g=a[4],c.length==1&&(v=!0)):(a=r.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/),a&&(o=a[1],c=a[2],u=a[3],g=a[4],c.length==1&&(v=!0))),i=qn(r),s=this._moves({legal:!0,piece:o||i}),!u)return null;for(let m=0,A=s.length;m<A;m++)if(c){if((!o||o.toLowerCase()==s[m].piece)&&w[c]==s[m].from&&w[u]==s[m].to&&(!g||g.toLowerCase()==s[m].promotion))return s[m];if(v){const y=x(s[m].from);if((!o||o.toLowerCase()==s[m].piece)&&w[u]==s[m].to&&(c==y[0]||c==y[1])&&(!g||g.toLowerCase()==s[m].promotion))return s[m]}}else if(r===Mt(this._moveToSan(s[m],s)).replace("x",""))return s[m];return null}ascii(){let e=`   +------------------------+
`;for(let t=w.a8;t<=w.h1;t++){if(He(t)===0&&(e+=" "+"87654321"[ve(t)]+" |"),this._board[t]){const r=this._board[t].type,s=this._board[t].color===$?r.toUpperCase():r.toLowerCase();e+=" "+s+" "}else e+=" . ";t+1&136&&(e+=`|
`,t+=8)}return e+=`   +------------------------+
`,e+="     a  b  c  d  e  f  g  h",e}perft(e){const t=this._moves({legal:!1});let r=0;const i=this._turn;for(let s=0,o=t.length;s<o;s++)this._makeMove(t[s]),this._isKingAttacked(i)||(e-1>0?r+=this.perft(e-1):r++),this._undoMove();return r}setTurn(e){return this._turn==e?!1:(this.move("--"),!0)}turn(){return this._turn}board(){const e=[];let t=[];for(let r=w.a8;r<=w.h1;r++)this._board[r]==null?t.push(null):t.push({square:x(r),type:this._board[r].type,color:this._board[r].color}),r+1&136&&(e.push(t),t=[],r+=8);return e}squareColor(e){if(e in w){const t=w[e];return(ve(t)+He(t))%2===0?"light":"dark"}return null}history({verbose:e=!1}={}){const t=[],r=[];for(;this._history.length>0;)t.push(this._undoMove());for(;;){const i=t.pop();if(!i)break;e?r.push(new st(this,i)):r.push(this._moveToSan(i,this._moves())),this._makeMove(i)}return r}_getPositionCount(e){return this._positionCount.get(e)??0}_incPositionCount(){this._positionCount.set(this._hash,(this._positionCount.get(this._hash)??0)+1)}_decPositionCount(e){const t=this._positionCount.get(e)??0;t===1?this._positionCount.delete(e):this._positionCount.set(e,t-1)}_pruneComments(){const e=[],t={},r=i=>{i in this._comments&&(t[i]=this._comments[i])};for(;this._history.length>0;)e.push(this._undoMove());for(r(this.fen());;){const i=e.pop();if(!i)break;this._makeMove(i),r(this.fen())}this._comments=t}getComment(){return this._comments[this.fen()]}setComment(e){this._comments[this.fen()]=e.replace("{","[").replace("}","]")}deleteComment(){return this.removeComment()}removeComment(){const e=this._comments[this.fen()];return delete this._comments[this.fen()],e}getComments(){return this._pruneComments(),Object.keys(this._comments).map(e=>({fen:e,comment:this._comments[e]}))}deleteComments(){return this.removeComments()}removeComments(){return this._pruneComments(),Object.keys(this._comments).map(e=>{const t=this._comments[e];return delete this._comments[e],{fen:e,comment:t}})}setCastlingRights(e,t){for(const i of[D,se])t[i]!==void 0&&(t[i]?this._castling[e]|=ot[i]:this._castling[e]&=~ot[i]);this._updateCastlingRights();const r=this.getCastlingRights(e);return(t[D]===void 0||t[D]===r[D])&&(t[se]===void 0||t[se]===r[se])}getCastlingRights(e){return{[D]:(this._castling[e]&ot[D])!==0,[se]:(this._castling[e]&ot[se])!==0}}moveNumber(){return this._moveNumber}}const b={modeSelector:document.getElementById("mode-selector"),lessonsContainer:document.getElementById("lessons-container"),practiceContainer:document.getElementById("practice-container"),challengesContainer:document.getElementById("challenges-container"),newPuzzleButton:document.getElementById("new-puzzle-button"),boardEl:document.getElementById("board"),messageArea:document.getElementById("message-area").querySelector("h2"),gameInfo:document.getElementById("game-info"),geminiOutput:document.getElementById("gemini-output"),geminiLoading:document.getElementById("gemini-loading"),geminiContent:document.getElementById("gemini-content"),lessonProgressNav:document.getElementById("lesson-progress-nav"),completionDialog:document.getElementById("completion-dialog"),dialogTitle:document.getElementById("dialog-title"),dialogMessage:document.getElementById("dialog-message"),dialogButtons:document.getElementById("dialog-buttons"),authContainer:document.getElementById("auth-container"),practiceModeButton:document.getElementById("practice-mode-button"),challengesModeButton:document.getElementById("challenges-mode-button"),lockIconPractice:document.getElementById("lock-icon-practice"),prevChallengeButton:document.getElementById("prev-challenge-button"),nextChallengeButton:document.getElementById("next-challenge-button"),challengeDayDisplay:document.getElementById("challenge-day-display"),closeDialogButton:document.getElementById("close-dialog-button")},p={currentMode:"lessons",game:null,selectedSquare:null,auth:null,currentUser:null,pendingActionAfterLogin:null,lessonState:{piece:null,type:null,inProgress:!1,pieceCoords:null},challengeState:{inProgress:!1,currentChallengeIndex:0,maxChallengeIndex:0}},je=["pawn","knight","bishop","rook","queen","king"],Ve={pawn:{name:"Peón",symbol:"♙"},knight:{name:"Caballo",symbol:"♘"},bishop:{name:"Alfil",symbol:"♗"},rook:{name:"Torre",symbol:"♖"},queen:{name:"Reina",symbol:"♕"},king:{name:"Rey",symbol:"♔"}},br={pawn:{move:[{piece:[4,1],highlights:[[4,2],[4,3]]}],capture:[{piece:[4,4],enemy:[3,5],highlights:[[3,5]]}]},knight:{move:[{piece:[1,0],highlights:[[0,2],[2,2],[3,1]]}],capture:[{piece:[4,4],enemy:[5,6],highlights:[[5,6]]}]},bishop:{move:[{piece:[2,0],highlights:[[0,2],[1,1],[3,1],[4,2],[5,3],[6,4],[7,5]]}],capture:[{piece:[2,2],enemy:[5,5],highlights:[[5,5]]}]},rook:{move:[{piece:[0,0],highlights:[[0,7],[7,0]]}],capture:[{piece:[0,0],enemy:[0,5],highlights:[[0,5]]}]},queen:{move:[{piece:[3,3],highlights:[[3,0],[0,3],[5,5],[1,5]]}],capture:[{piece:[3,3],enemy:[7,7],highlights:[[7,7]]}]},king:{move:[{piece:[4,0],highlights:[[3,0],[3,1],[4,1],[5,1],[5,0]]}],capture:[{piece:[4,4],enemy:[5,5],highlights:[[5,5]]}]}},Hn=[{fen:"r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",goal:"Juegan las blancas. ¡Desarrolla tus piezas!"},{fen:"4k3/8/8/8/8/8/4P3/4K3 w - - 0 1",goal:"Juegan las blancas. ¡Intenta coronar el peón!"}],xs={w:{p:"♙",r:"♖",n:"♘",b:"♗",q:"♕",k:"♔"},b:{p:"♟",r:"♜",n:"♞",b:"♝",q:"♛",k:"♚"}},jn=[{fen:"8/8/8/8/8/2N5/8/8 w - - 0 1",goal:"Lleva el caballo a f6",goalSquare:"f6"},{fen:"8/8/8/8/8/8/8/R7 w - - 0 1",goal:"Lleva la torre a h8",goalSquare:"h8"},{fen:"8/8/8/8/8/8/1B6/8 w - - 0 1",goal:"Lleva el alfil a g7",goalSquare:"g7"},{fen:"8/8/8/8/8/8/8/Q7 w - - 0 1",goal:"Lleva la reina a e5",goalSquare:"e5"},{fen:"4K3/8/8/8/8/8/8/8 w - - 0 1",goal:"Lleva el rey a c6",goalSquare:"c6"}];function Us(){const{boardEl:n}=b;n.innerHTML="";for(let e=7;e>=0;e--)for(let t=0;t<8;t++){const r=document.createElement("div");r.classList.add("square",(e+t)%2===0?"dark":"light"),r.dataset.square=`${String.fromCharCode(97+t)}${e+1}`,r.dataset.col=String(t),r.dataset.row=String(e),n.appendChild(r)}}function Ge(n){const{boardEl:e}=b,t=new en(n);e.querySelectorAll(".square").forEach(r=>{const i=r,s=t.get(i.dataset.square);if(i.innerHTML="",s){const o=document.createElement("span");o.classList.add("piece");const a=s.color,c=s.type;o.textContent=xs[a][c],i.appendChild(o)}})}function St(){const{boardEl:n}=b;n.querySelectorAll(".square").forEach(e=>{const t=e;t.innerHTML="",t.classList.remove("highlight","selected","goal-square")})}var Vn={};/**
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
 */const yr=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},$s=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ir={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,g=s>>2,v=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,A=u&63;c||(A=64,o||(m=64)),r.push(t[g],t[v],t[m],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(yr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):$s(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const v=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||v==null)throw new Bs;const m=s<<2|a>>4;if(r.push(m),u!==64){const A=a<<4&240|u>>2;if(r.push(A),v!==64){const y=u<<6&192|v;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Bs extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fs=function(n){const e=yr(n);return Ir.encodeByteArray(e,!0)},Er=function(n){return Fs(n).replace(/\./g,"")},Sr=function(n){try{return Ir.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Hs=()=>qs().__FIREBASE_DEFAULTS__,js=()=>{if(typeof process>"u"||typeof Vn>"u")return;const n=Vn.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vs=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Sr(n[1]);return e&&JSON.parse(e)},tn=()=>{try{return Hs()||js()||Vs()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ks=n=>{var e,t;return(t=(e=tn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},wr=()=>{var n;return(n=tn())===null||n===void 0?void 0:n.config},Tr=n=>{var e;return(e=tn())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Ws{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function F(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(F())}function Gs(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Js(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Qs(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ys(){const n=F();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Xs(){try{return typeof indexedDB=="object"}catch{return!1}}function Zs(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const eo="FirebaseError";class he extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=eo,Object.setPrototypeOf(this,he.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Je.prototype.create)}}class Je{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?to(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new he(i,a,r)}}function to(n,e){return n.replace(no,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const no=/\{\$([^}]+)}/g;function ro(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function gt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Kn(s)&&Kn(o)){if(!gt(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Kn(n){return n!==null&&typeof n=="object"}/**
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
 */function Qe(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function io(n,e){const t=new so(n,e);return t.subscribe.bind(t)}class so{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");oo(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=xt),i.error===void 0&&(i.error=xt),i.complete===void 0&&(i.complete=xt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oo(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function xt(){}/**
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
 */function de(n){return n&&n._delegate?n._delegate:n}class Re{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const me="[DEFAULT]";/**
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
 */class ao{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ws;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lo(e))try{this.getOrInitializeService({instanceIdentifier:me})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=me){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=me){return this.instances.has(e)}getOptions(e=me){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:co(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=me){return this.component?this.component.multipleInstances?e:me:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function co(n){return n===me?void 0:n}function lo(n){return n.instantiationMode==="EAGER"}/**
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
 */class uo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ao(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var O;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(O||(O={}));const ho={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},fo=O.INFO,po={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},go=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=po[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cr{constructor(e){this.name=e,this._logLevel=fo,this._logHandler=go,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ho[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const mo=(n,e)=>e.some(t=>n instanceof t);let Wn,zn;function _o(){return Wn||(Wn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vo(){return zn||(zn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ar=new WeakMap,Kt=new WeakMap,kr=new WeakMap,Ut=new WeakMap,nn=new WeakMap;function bo(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(le(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ar.set(t,n)}).catch(()=>{}),nn.set(e,n),e}function yo(n){if(Kt.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Kt.set(n,e)}let Wt={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Kt.get(n);if(e==="objectStoreNames")return n.objectStoreNames||kr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return le(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Io(n){Wt=n(Wt)}function Eo(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call($t(this),e,...t);return kr.set(r,e.sort?e.sort():[e]),le(r)}:vo().includes(n)?function(...e){return n.apply($t(this),e),le(Ar.get(this))}:function(...e){return le(n.apply($t(this),e))}}function So(n){return typeof n=="function"?Eo(n):(n instanceof IDBTransaction&&yo(n),mo(n,_o())?new Proxy(n,Wt):n)}function le(n){if(n instanceof IDBRequest)return bo(n);if(Ut.has(n))return Ut.get(n);const e=So(n);return e!==n&&(Ut.set(n,e),nn.set(e,n)),e}const $t=n=>nn.get(n);function wo(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=le(o);return r&&o.addEventListener("upgradeneeded",c=>{r(le(o.result),c.oldVersion,c.newVersion,le(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const To=["get","getKey","getAll","getAllKeys","count"],Co=["put","add","delete","clear"],Bt=new Map;function Gn(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Bt.get(e))return Bt.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Co.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||To.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&c.done]))[0]};return Bt.set(e,s),s}Io(n=>({...n,get:(e,t,r)=>Gn(e,t)||n.get(e,t,r),has:(e,t)=>!!Gn(e,t)||n.has(e,t)}));/**
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
 */class Ao{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ko(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ko(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zt="@firebase/app",Jn="0.10.13";/**
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
 */const ee=new Cr("@firebase/app"),Po="@firebase/app-compat",Oo="@firebase/analytics-compat",Ro="@firebase/analytics",No="@firebase/app-check-compat",Lo="@firebase/app-check",Do="@firebase/auth",Mo="@firebase/auth-compat",xo="@firebase/database",Uo="@firebase/data-connect",$o="@firebase/database-compat",Bo="@firebase/functions",Fo="@firebase/functions-compat",qo="@firebase/installations",Ho="@firebase/installations-compat",jo="@firebase/messaging",Vo="@firebase/messaging-compat",Ko="@firebase/performance",Wo="@firebase/performance-compat",zo="@firebase/remote-config",Go="@firebase/remote-config-compat",Jo="@firebase/storage",Qo="@firebase/storage-compat",Yo="@firebase/firestore",Xo="@firebase/vertexai-preview",Zo="@firebase/firestore-compat",ea="firebase",ta="10.14.1";/**
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
 */const Gt="[DEFAULT]",na={[zt]:"fire-core",[Po]:"fire-core-compat",[Ro]:"fire-analytics",[Oo]:"fire-analytics-compat",[Lo]:"fire-app-check",[No]:"fire-app-check-compat",[Do]:"fire-auth",[Mo]:"fire-auth-compat",[xo]:"fire-rtdb",[Uo]:"fire-data-connect",[$o]:"fire-rtdb-compat",[Bo]:"fire-fn",[Fo]:"fire-fn-compat",[qo]:"fire-iid",[Ho]:"fire-iid-compat",[jo]:"fire-fcm",[Vo]:"fire-fcm-compat",[Ko]:"fire-perf",[Wo]:"fire-perf-compat",[zo]:"fire-rc",[Go]:"fire-rc-compat",[Jo]:"fire-gcs",[Qo]:"fire-gcs-compat",[Yo]:"fire-fst",[Zo]:"fire-fst-compat",[Xo]:"fire-vertex","fire-js":"fire-js",[ea]:"fire-js-all"};/**
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
 */const mt=new Map,ra=new Map,Jt=new Map;function Qn(n,e){try{n.container.addComponent(e)}catch(t){ee.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ke(n){const e=n.name;if(Jt.has(e))return ee.debug(`There were multiple attempts to register component ${e}.`),!1;Jt.set(e,n);for(const t of mt.values())Qn(t,n);for(const t of ra.values())Qn(t,n);return!0}function Pr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Q(n){return n.settings!==void 0}/**
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
 */const ia={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ue=new Je("app","Firebase",ia);/**
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
 */class sa{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Re("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ue.create("app-deleted",{appName:this._name})}}/**
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
 */const Ye=ta;function Or(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ue.create("bad-app-name",{appName:String(i)});if(t||(t=wr()),!t)throw ue.create("no-options");const s=mt.get(i);if(s){if(gt(t,s.options)&&gt(r,s.config))return s;throw ue.create("duplicate-app",{appName:i})}const o=new uo(i);for(const c of Jt.values())o.addComponent(c);const a=new sa(t,r,o);return mt.set(i,a),a}function oa(n=Gt){const e=mt.get(n);if(!e&&n===Gt&&wr())return Or();if(!e)throw ue.create("no-app",{appName:n});return e}function Ce(n,e,t){var r;let i=(r=na[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ee.warn(a.join(" "));return}Ke(new Re(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const aa="firebase-heartbeat-database",ca=1,We="firebase-heartbeat-store";let Ft=null;function Rr(){return Ft||(Ft=wo(aa,ca,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(We)}catch(t){console.warn(t)}}}}).catch(n=>{throw ue.create("idb-open",{originalErrorMessage:n.message})})),Ft}async function la(n){try{const t=(await Rr()).transaction(We),r=await t.objectStore(We).get(Nr(n));return await t.done,r}catch(e){if(e instanceof he)ee.warn(e.message);else{const t=ue.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ee.warn(t.message)}}}async function Yn(n,e){try{const r=(await Rr()).transaction(We,"readwrite");await r.objectStore(We).put(e,Nr(n)),await r.done}catch(t){if(t instanceof he)ee.warn(t.message);else{const r=ue.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ee.warn(r.message)}}}function Nr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ua=1024,ha=30*24*60*60*1e3;class da{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pa(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xn();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ha}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ee.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xn(),{heartbeatsToSend:r,unsentEntries:i}=fa(this._heartbeatsCache.heartbeats),s=Er(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ee.warn(t),""}}}function Xn(){return new Date().toISOString().substring(0,10)}function fa(n,e=ua){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Zn(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Zn(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class pa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xs()?Zs().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await la(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Zn(n){return Er(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function ga(n){Ke(new Re("platform-logger",e=>new Ao(e),"PRIVATE")),Ke(new Re("heartbeat",e=>new da(e),"PRIVATE")),Ce(zt,Jn,n),Ce(zt,Jn,"esm2017"),Ce("fire-js","")}ga("");var ma="firebase",_a="10.14.1";/**
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
 */Ce(ma,_a,"app");function rn(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Lr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const va=Lr,Dr=new Je("auth","Firebase",Lr());/**
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
 */const _t=new Cr("@firebase/auth");function ba(n,...e){_t.logLevel<=O.WARN&&_t.warn(`Auth (${Ye}): ${n}`,...e)}function ut(n,...e){_t.logLevel<=O.ERROR&&_t.error(`Auth (${Ye}): ${n}`,...e)}/**
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
 */function G(n,...e){throw on(n,...e)}function K(n,...e){return on(n,...e)}function sn(n,e,t){const r=Object.assign(Object.assign({},va()),{[e]:t});return new Je("auth","Firebase",r).create(e,{appName:n.name})}function be(n){return sn(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ya(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&G(n,"argument-error"),sn(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function on(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Dr.create(n,...e)}function C(n,e,...t){if(!n)throw on(e,...t)}function Y(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ut(e),new Error(e)}function te(n,e){n||Y(e)}/**
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
 */function Qt(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ia(){return er()==="http:"||er()==="https:"}function er(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Ea(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ia()||Js()||"connection"in navigator)?navigator.onLine:!0}function Sa(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Xe{constructor(e,t){this.shortDelay=e,this.longDelay=t,te(t>e,"Short delay should be less than long delay!"),this.isMobile=zs()||Qs()}get(){return Ea()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function an(n,e){te(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Mr{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wa={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ta=new Xe(3e4,6e4);function cn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Le(n,e,t,r,i={}){return xr(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Qe(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:c},s);return Gs()||(u.referrerPolicy="no-referrer"),Mr.fetch()(Ur(n,n.config.apiHost,t,a),u)})}async function xr(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},wa),e);try{const i=new Aa(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw at(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw at(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw at(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw at(n,"user-disabled",o);const g=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw sn(n,g,u);G(n,g)}}catch(i){if(i instanceof he)throw i;G(n,"network-request-failed",{message:String(i)})}}async function Ca(n,e,t,r,i={}){const s=await Le(n,e,t,r,i);return"mfaPendingCredential"in s&&G(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Ur(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?an(n.config,i):`${n.config.apiScheme}://${i}`}class Aa{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(K(this.auth,"network-request-failed")),Ta.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function at(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=K(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function ka(n,e){return Le(n,"POST","/v1/accounts:delete",e)}async function $r(n,e){return Le(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fe(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pa(n,e=!1){const t=de(n),r=await t.getIdToken(e),i=ln(r);C(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fe(qt(i.auth_time)),issuedAtTime:Fe(qt(i.iat)),expirationTime:Fe(qt(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function qt(n){return Number(n)*1e3}function ln(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ut("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sr(t);return i?JSON.parse(i):(ut("Failed to decode base64 JWT payload"),null)}catch(i){return ut("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function tr(n){const e=ln(n);return C(e,"internal-error"),C(typeof e.exp<"u","internal-error"),C(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ze(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof he&&Oa(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Oa({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Ra{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fe(this.lastLoginAt),this.creationTime=Fe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vt(n){var e;const t=n.auth,r=await n.getIdToken(),i=await ze(n,$r(t,{idToken:r}));C(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Br(s.providerUserInfo):[],a=La(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),g=c?u:!1,v={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Yt(s.createdAt,s.lastLoginAt),isAnonymous:g};Object.assign(n,v)}async function Na(n){const e=de(n);await vt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function La(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Br(n){return n.map(e=>{var{providerId:t}=e,r=rn(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Da(n,e){const t=await xr(n,{},async()=>{const r=Qe({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Ur(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Mr.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ma(n,e){return Le(n,"POST","/v2/accounts:revokeToken",cn(n,e))}/**
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
 */class Ae{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken<"u","internal-error"),C(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){C(e.length!==0,"internal-error");const t=tr(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(C(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Da(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Ae;return r&&(C(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(C(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(C(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ae,this.toJSON())}_performRefresh(){return Y("not implemented")}}/**
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
 */function ie(n,e){C(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class X{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=rn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ra(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yt(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ze(this,this.stsTokenManager.getToken(this.auth,e));return C(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Pa(this,e)}reload(){return Na(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new X(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await vt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Q(this.auth.app))return Promise.reject(be(this.auth));const e=await this.getIdToken();return await ze(this,ka(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,g;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,A=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=t.photoURL)!==null&&o!==void 0?o:void 0,N=(a=t.tenantId)!==null&&a!==void 0?a:void 0,P=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,H=(u=t.createdAt)!==null&&u!==void 0?u:void 0,Ie=(g=t.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:fe,emailVerified:De,isAnonymous:Me,providerData:Ee,stsTokenManager:tt}=t;C(fe&&tt,e,"internal-error");const xe=Ae.fromJSON(this.name,tt);C(typeof fe=="string",e,"internal-error"),ie(v,e.name),ie(m,e.name),C(typeof De=="boolean",e,"internal-error"),C(typeof Me=="boolean",e,"internal-error"),ie(A,e.name),ie(y,e.name),ie(N,e.name),ie(P,e.name),ie(H,e.name),ie(Ie,e.name);const Se=new X({uid:fe,auth:e,email:m,emailVerified:De,displayName:v,isAnonymous:Me,photoURL:y,phoneNumber:A,tenantId:N,stsTokenManager:xe,createdAt:H,lastLoginAt:Ie});return Ee&&Array.isArray(Ee)&&(Se.providerData=Ee.map(we=>Object.assign({},we))),P&&(Se._redirectEventId=P),Se}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ae;i.updateFromServerResponse(t);const s=new X({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await vt(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];C(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Br(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ae;a.updateFromIdToken(r);const c=new X({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Yt(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
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
 */const nr=new Map;function Z(n){te(n instanceof Function,"Expected a class definition");let e=nr.get(n);return e?(te(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,nr.set(n,e),e)}/**
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
 */class Fr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Fr.type="NONE";const rr=Fr;/**
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
 */function ht(n,e,t){return`firebase:${n}:${e}:${t}`}class ke{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ht(this.userKey,i.apiKey,s),this.fullPersistenceKey=ht("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?X._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ke(Z(rr),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Z(rr);const o=ht(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const g=await u._get(o);if(g){const v=X._fromJSON(e,g);u!==s&&(a=v),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new ke(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ke(s,e,r))}}/**
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
 */function ir(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wr(e))return"Blackberry";if(zr(e))return"Webos";if(Hr(e))return"Safari";if((e.includes("chrome/")||jr(e))&&!e.includes("edge/"))return"Chrome";if(Kr(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qr(n=F()){return/firefox\//i.test(n)}function Hr(n=F()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jr(n=F()){return/crios\//i.test(n)}function Vr(n=F()){return/iemobile/i.test(n)}function Kr(n=F()){return/android/i.test(n)}function Wr(n=F()){return/blackberry/i.test(n)}function zr(n=F()){return/webos/i.test(n)}function un(n=F()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function xa(n=F()){var e;return un(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ua(){return Ys()&&document.documentMode===10}function Gr(n=F()){return un(n)||Kr(n)||zr(n)||Wr(n)||/windows phone/i.test(n)||Vr(n)}/**
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
 */function Jr(n,e=[]){let t;switch(n){case"Browser":t=ir(F());break;case"Worker":t=`${ir(F())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ye}/${r}`}/**
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
 */class $a{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Ba(n,e={}){return Le(n,"GET","/v2/passwordPolicy",cn(n,e))}/**
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
 */const Fa=6;class qa{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Fa,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Ha{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sr(this),this.idTokenSubscription=new sr(this),this.beforeStateQueue=new $a(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Z(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ke.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await $r(this,{idToken:e}),r=await X._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Q(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await vt(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sa()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Q(this.app))return Promise.reject(be(this));const t=e?de(e):null;return t&&C(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Q(this.app)?Promise.reject(be(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Q(this.app)?Promise.reject(be(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Z(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ba(this),t=new qa(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Je("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ma(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Z(e)||this._popupRedirectResolver;C(t,this,"argument-error"),this.redirectPersistenceManager=await ke.create(this,[Z(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&ba(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function wt(n){return de(n)}class sr{constructor(e){this.auth=e,this.observer=null,this.addObserver=io(t=>this.observer=t)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ja(n){hn=n}function Va(n){return hn.loadJS(n)}function Ka(){return hn.gapiScript}function Wa(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function za(n,e){const t=Pr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(gt(s,e??{}))return i;G(i,"already-initialized")}return t.initialize({options:e})}function Ga(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Z);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ja(n,e,t){const r=wt(n);C(r._canInitEmulator,r,"emulator-config-failed"),C(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Qr(e),{host:o,port:a}=Qa(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Ya()}function Qr(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Qa(n){const e=Qr(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:or(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:or(o)}}}function or(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ya(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Yr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Y("not implemented")}_getIdTokenResponse(e){return Y("not implemented")}_linkToIdToken(e,t){return Y("not implemented")}_getReauthenticationResolver(e){return Y("not implemented")}}/**
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
 */async function Pe(n,e){return Ca(n,"POST","/v1/accounts:signInWithIdp",cn(n,e))}/**
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
 */const Xa="http://localhost";class ye extends Yr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ye(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):G("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=rn(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ye(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Pe(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Pe(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pe(e,t)}buildRequest(){const e={requestUri:Xa,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qe(t)}return e}}/**
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
 */class dn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ze extends dn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class oe extends Ze{constructor(){super("facebook.com")}static credential(e){return ye._fromParams({providerId:oe.PROVIDER_ID,signInMethod:oe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oe.credentialFromTaggedObject(e)}static credentialFromError(e){return oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oe.credential(e.oauthAccessToken)}catch{return null}}}oe.FACEBOOK_SIGN_IN_METHOD="facebook.com";oe.PROVIDER_ID="facebook.com";/**
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
 */class J extends Ze{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ye._fromParams({providerId:J.PROVIDER_ID,signInMethod:J.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return J.credentialFromTaggedObject(e)}static credentialFromError(e){return J.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return J.credential(t,r)}catch{return null}}}J.GOOGLE_SIGN_IN_METHOD="google.com";J.PROVIDER_ID="google.com";/**
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
 */class ae extends Ze{constructor(){super("github.com")}static credential(e){return ye._fromParams({providerId:ae.PROVIDER_ID,signInMethod:ae.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ae.credentialFromTaggedObject(e)}static credentialFromError(e){return ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ae.credential(e.oauthAccessToken)}catch{return null}}}ae.GITHUB_SIGN_IN_METHOD="github.com";ae.PROVIDER_ID="github.com";/**
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
 */class ce extends Ze{constructor(){super("twitter.com")}static credential(e,t){return ye._fromParams({providerId:ce.PROVIDER_ID,signInMethod:ce.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ce.credentialFromTaggedObject(e)}static credentialFromError(e){return ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ce.credential(t,r)}catch{return null}}}ce.TWITTER_SIGN_IN_METHOD="twitter.com";ce.PROVIDER_ID="twitter.com";/**
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
 */class Ne{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await X._fromIdTokenResponse(e,r,i),o=ar(r);return new Ne({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=ar(r);return new Ne({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function ar(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class bt extends he{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new bt(e,t,r,i)}}function Xr(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?bt._fromErrorAndOperation(n,s,e,r):s})}async function Za(n,e,t=!1){const r=await ze(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ne._forOperation(n,"link",r)}/**
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
 */async function ec(n,e,t=!1){const{auth:r}=n;if(Q(r.app))return Promise.reject(be(r));const i="reauthenticate";try{const s=await ze(n,Xr(r,i,e,n),t);C(s.idToken,r,"internal-error");const o=ln(s.idToken);C(o,r,"internal-error");const{sub:a}=o;return C(n.uid===a,r,"user-mismatch"),Ne._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&G(r,"user-mismatch"),s}}/**
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
 */async function tc(n,e,t=!1){if(Q(n.app))return Promise.reject(be(n));const r="signIn",i=await Xr(n,r,e),s=await Ne._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function nc(n,e,t,r){return de(n).onIdTokenChanged(e,t,r)}function rc(n,e,t){return de(n).beforeAuthStateChanged(e,t)}function ic(n,e,t,r){return de(n).onAuthStateChanged(e,t,r)}function sc(n){return de(n).signOut()}const yt="__sak";/**
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
 */class Zr{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(yt,"1"),this.storage.removeItem(yt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const oc=1e3,ac=10;class ei extends Zr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Ua()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ac):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},oc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ei.type="LOCAL";const cc=ei;/**
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
 */class ti extends Zr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ti.type="SESSION";const ni=ti;/**
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
 */function lc(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Tt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Tt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),c=await lc(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tt.receivers=[];/**
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
 */function fn(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class uc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=fn("",20);i.port1.start();const g=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(v){const m=v;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(g),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(g),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function z(){return window}function hc(n){z().location.href=n}/**
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
 */function ri(){return typeof z().WorkerGlobalScope<"u"&&typeof z().importScripts=="function"}async function dc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fc(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function pc(){return ri()?self:null}/**
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
 */const ii="firebaseLocalStorageDb",gc=1,It="firebaseLocalStorage",si="fbase_key";class et{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ct(n,e){return n.transaction([It],e?"readwrite":"readonly").objectStore(It)}function mc(){const n=indexedDB.deleteDatabase(ii);return new et(n).toPromise()}function Xt(){const n=indexedDB.open(ii,gc);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(It,{keyPath:si})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(It)?e(r):(r.close(),await mc(),e(await Xt()))})})}async function cr(n,e,t){const r=Ct(n,!0).put({[si]:e,value:t});return new et(r).toPromise()}async function _c(n,e){const t=Ct(n,!1).get(e),r=await new et(t).toPromise();return r===void 0?null:r.value}function lr(n,e){const t=Ct(n,!0).delete(e);return new et(t).toPromise()}const vc=800,bc=3;class oi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xt(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>bc)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ri()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tt._getInstance(pc()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await dc(),!this.activeServiceWorker)return;this.sender=new uc(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xt();return await cr(e,yt,"1"),await lr(e,yt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>cr(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>_c(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>lr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ct(i,!1).getAll();return new et(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oi.type="LOCAL";const yc=oi;new Xe(3e4,6e4);/**
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
 */function ai(n,e){return e?Z(e):(C(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class pn extends Yr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Pe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Pe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ic(n){return tc(n.auth,new pn(n),n.bypassAuthState)}function Ec(n){const{auth:e,user:t}=n;return C(t,e,"internal-error"),ec(t,new pn(n),n.bypassAuthState)}async function Sc(n){const{auth:e,user:t}=n;return C(t,e,"internal-error"),Za(t,new pn(n),n.bypassAuthState)}/**
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
 */class ci{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ic;case"linkViaPopup":case"linkViaRedirect":return Sc;case"reauthViaPopup":case"reauthViaRedirect":return Ec;default:G(this.auth,"internal-error")}}resolve(e){te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){te(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const wc=new Xe(2e3,1e4);async function Tc(n,e,t){if(Q(n.app))return Promise.reject(K(n,"operation-not-supported-in-this-environment"));const r=wt(n);ya(n,e,dn);const i=ai(r,t);return new _e(r,"signInViaPopup",e,i).executeNotNull()}class _e extends ci{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,_e.currentPopupAction&&_e.currentPopupAction.cancel(),_e.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){te(this.filter.length===1,"Popup operations only handle one event");const e=fn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(K(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(K(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_e.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(K(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wc.get())};e()}}_e.currentPopupAction=null;/**
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
 */const Cc="pendingRedirect",dt=new Map;class Ac extends ci{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=dt.get(this.auth._key());if(!e){try{const r=await kc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}dt.set(this.auth._key(),e)}return this.bypassAuthState||dt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kc(n,e){const t=Rc(e),r=Oc(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Pc(n,e){dt.set(n._key(),e)}function Oc(n){return Z(n._redirectPersistence)}function Rc(n){return ht(Cc,n.config.apiKey,n.name)}async function Nc(n,e,t=!1){if(Q(n.app))return Promise.reject(be(n));const r=wt(n),i=ai(r,e),o=await new Ac(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Lc=10*60*1e3;class Dc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mc(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!li(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(K(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lc&&this.cachedEventUids.clear(),this.cachedEventUids.has(ur(e))}saveEventToCache(e){this.cachedEventUids.add(ur(e)),this.lastProcessedEventTime=Date.now()}}function ur(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function li({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Mc(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return li(n);default:return!1}}/**
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
 */async function xc(n,e={}){return Le(n,"GET","/v1/projects",e)}/**
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
 */const Uc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$c=/^https?/;async function Bc(n){if(n.config.emulator)return;const{authorizedDomains:e}=await xc(n);for(const t of e)try{if(Fc(t))return}catch{}G(n,"unauthorized-domain")}function Fc(n){const e=Qt(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!$c.test(t))return!1;if(Uc.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const qc=new Xe(3e4,6e4);function hr(){const n=z().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Hc(n){return new Promise((e,t)=>{var r,i,s;function o(){hr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hr(),t(K(n,"network-request-failed"))},timeout:qc.get()})}if(!((i=(r=z().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=z().gapi)===null||s===void 0)&&s.load)o();else{const a=Wa("iframefcb");return z()[a]=()=>{gapi.load?o():t(K(n,"network-request-failed"))},Va(`${Ka()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw ft=null,e})}let ft=null;function jc(n){return ft=ft||Hc(n),ft}/**
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
 */const Vc=new Xe(5e3,15e3),Kc="__/auth/iframe",Wc="emulator/auth/iframe",zc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jc(n){const e=n.config;C(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?an(e,Wc):`https://${n.config.authDomain}/${Kc}`,r={apiKey:e.apiKey,appName:n.name,v:Ye},i=Gc.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Qe(r).slice(1)}`}async function Qc(n){const e=await jc(n),t=z().gapi;return C(t,n,"internal-error"),e.open({where:document.body,url:Jc(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zc,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=K(n,"network-request-failed"),a=z().setTimeout(()=>{s(o)},Vc.get());function c(){z().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const Yc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xc=500,Zc=600,el="_blank",tl="http://localhost";class dr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nl(n,e,t,r=Xc,i=Zc){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Yc),{width:r.toString(),height:i.toString(),top:s,left:o}),u=F().toLowerCase();t&&(a=jr(u)?el:t),qr(u)&&(e=e||tl,c.scrollbars="yes");const g=Object.entries(c).reduce((m,[A,y])=>`${m}${A}=${y},`,"");if(xa(u)&&a!=="_self")return rl(e||"",a),new dr(null);const v=window.open(e||"",a,g);C(v,n,"popup-blocked");try{v.focus()}catch{}return new dr(v)}function rl(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const il="__/auth/handler",sl="emulator/auth/handler",ol=encodeURIComponent("fac");async function fr(n,e,t,r,i,s){C(n.config.authDomain,n,"auth-domain-config-required"),C(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ye,eventId:i};if(e instanceof dn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ro(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,v]of Object.entries({}))o[g]=v}if(e instanceof Ze){const g=e.getScopes().filter(v=>v!=="");g.length>0&&(o.scopes=g.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const g of Object.keys(a))a[g]===void 0&&delete a[g];const c=await n._getAppCheckToken(),u=c?`#${ol}=${encodeURIComponent(c)}`:"";return`${al(n)}?${Qe(a).slice(1)}${u}`}function al({config:n}){return n.emulator?an(n,sl):`https://${n.authDomain}/${il}`}/**
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
 */const Ht="webStorageSupport";class cl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ni,this._completeRedirectFn=Nc,this._overrideRedirectResult=Pc}async _openPopup(e,t,r,i){var s;te((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await fr(e,t,r,Qt(),i);return nl(e,o,fn())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await fr(e,t,r,Qt(),i);return hc(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(te(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Qc(e),r=new Dc(e);return t.register("authEvent",i=>(C(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ht,{type:Ht},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ht];o!==void 0&&t(!!o),G(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Bc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Gr()||Hr()||un()}}const ll=cl;var pr="@firebase/auth",gr="1.7.9";/**
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
 */class ul{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hl(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dl(n){Ke(new Re("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;C(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jr(n)},u=new Ha(r,i,s,c);return Ga(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ke(new Re("auth-internal",e=>{const t=wt(e.getProvider("auth").getImmediate());return(r=>new ul(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ce(pr,gr,hl(n)),Ce(pr,gr,"esm2017")}/**
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
 */const fl=5*60,pl=Tr("authIdTokenMaxAge")||fl;let mr=null;const gl=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>pl)return;const i=t==null?void 0:t.token;mr!==i&&(mr=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ml(n=oa()){const e=Pr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=za(n,{popupRedirectResolver:ll,persistence:[yc,cc,ni]}),r=Tr("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=gl(s.toString());rc(t,o,()=>o(t.currentUser)),nc(t,a=>o(a))}}const i=Ks("auth");return i&&Ja(t,`http://${i}`),t}function _l(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ja({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=K("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",_l().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dl("Browser");const vl={apiKey:"YOUR_API_KEY",authDomain:"YOUR_AUTH_DOMAIN",projectId:"YOUR_PROJECT_ID",storageBucket:"YOUR_STORAGE_BUCKET",messagingSenderId:"YOUR_MESSAGING_SENDER_ID",appId:"YOUR_APP_ID"};function bl(){try{const n=Or(vl),e=ml(n);p.auth=e,ic(e,t=>{p.currentUser=t,yl(t),Il(t),t&&p.pendingActionAfterLogin&&(p.pendingActionAfterLogin(),p.pendingActionAfterLogin=null)})}catch(n){console.error("Firebase initialization error: Make sure to replace the placeholder config with your actual Firebase project config.",n),b.authContainer.innerHTML='<p class="text-red-500">Error de Auth</p>'}}function yl(n){if(n){const e=(n.displayName||"").split(" ")[0]||"Usuario";b.authContainer.innerHTML=`
      <div class="flex items-center gap-2">
        <span class="text-gray-700">Hola, ${e}</span>
        <button id="logout-button" class="control-button bg-red-500 text-white px-3 py-1 rounded-lg text-sm">Salir</button>
      </div>`,document.getElementById("logout-button").addEventListener("click",()=>sc(p.auth))}else b.authContainer.innerHTML='<button id="login-button" class="control-button bg-blue-500 text-white px-4 py-2 rounded-lg">Iniciar Sesión con Google</button>',document.getElementById("login-button").addEventListener("click",gn)}function Il(n){var t;const e=!!n;b.practiceModeButton.classList.toggle("disabled",!e),b.lockIconPractice.style.display=e?"none":"block",!e&&p.currentMode==="practice"&&((t=document.querySelector('[data-mode="lessons"]'))==null||t.click())}function gn(){if(!p.auth){console.error("Firebase Auth is not initialized.");return}const n=new J;Tc(p.auth,n).catch(e=>console.error("Google sign-in error",e))}function ui(){const{lessonProgressNav:n}=b;n.innerHTML="";const e=p.lessonState.piece?je.indexOf(p.lessonState.piece):-1;je.forEach((t,r)=>{const i=document.createElement("div");i.className="flex flex-col items-center gap-1";const s=document.createElement("div");if(s.className="nav-piece",s.textContent=Ve[t].symbol,p.lessonState.piece&&(r<e?s.classList.add("completed"):r===e&&s.classList.add("active")),i.appendChild(s),p.lessonState.piece&&r===e){const o=document.createElement("div");o.className="flex gap-1.5";const a=["move","capture"];a.forEach((c,u)=>{if(br[t][c]){const g=document.createElement("div");g.className="lesson-step",u<=a.indexOf(p.lessonState.type)&&g.classList.add("active"),o.appendChild(g)}}),i.appendChild(o)}n.appendChild(i)})}function Zt(){St(),p.lessonState.inProgress=!0,p.selectedSquare=null,ui();const n=br[p.lessonState.piece][p.lessonState.type][0];p.lessonState.pieceCoords=n.piece;const e=document.querySelector(`[data-col='${n.piece[0]}'][data-row='${n.piece[1]}']`);if(e.innerHTML=`<span class="piece">${Ve[p.lessonState.piece].symbol}</span>`,n.enemy){const r=document.querySelector(`[data-col='${n.enemy[0]}'][data-row='${n.enemy[1]}']`);r.innerHTML='<span class="piece">♟</span>'}n.highlights.forEach(([r,i])=>{document.querySelector(`[data-col='${r}'][data-row='${i}']`).classList.add("highlight")});const t={move:"movimiento",capture:"captura"};b.messageArea.textContent=`Lección del ${Ve[p.lessonState.piece].name}: ${t[p.lessonState.type]}`}function El(n,e){e.innerHTML=n.innerHTML,n.innerHTML="",p.lessonState.inProgress=!1,document.querySelectorAll(".highlight").forEach(t=>t.classList.remove("highlight")),setTimeout(Sl,750)}function Sl(){const n=je.indexOf(p.lessonState.piece);let e,t,r;const i=p.lessonState.piece==="king"&&p.lessonState.type==="capture";if(b.dialogButtons.innerHTML="",i){t="¡FELICIDADES!",r="¡Has completado todas las lecciones! Inicia sesión para desbloquear el modo de Práctica con IA.",e=()=>wl();const a=document.createElement("button");a.className="control-button bg-blue-500 text-white p-3 rounded-lg shadow-md text-xl w-full",a.textContent="Iniciar Sesión para Jugar",a.onclick=()=>{p.pendingActionAfterLogin=()=>{document.querySelector('[data-mode="practice"]').click()},gn(),b.completionDialog.classList.add("hidden")},b.dialogButtons.appendChild(a)}else{if(p.lessonState.type==="move")t="¡Muy bien!",r=`¡Aprendiste a mover el ${Ve[p.lessonState.piece].name}! Ahora, a capturar.`,e=()=>{p.lessonState.type="capture",Zt()};else{const c=je[n+1];t="¡Excelente!",r=`¡Ya dominas el ${Ve[p.lessonState.piece].name}! ¿Listo para la siguiente pieza?`,e=()=>{p.lessonState.piece=c,p.lessonState.type="move",Zt()}}const a=document.createElement("button");a.className="control-button bg-green-500 text-white p-3 rounded-lg shadow-md text-xl w-full",a.textContent="Continuar",a.onclick=()=>{b.completionDialog.classList.add("hidden"),e()},b.dialogButtons.appendChild(a)}b.dialogTitle.textContent=t,b.dialogMessage.textContent=r;const s=b.closeDialogButton,o=s.cloneNode(!0);s.parentNode.replaceChild(o,s),o.addEventListener("click",()=>{b.completionDialog.classList.add("hidden"),i||e()},{once:!0}),b.completionDialog.classList.remove("hidden")}function wl(){St(),b.messageArea.textContent="¡Has completado el entrenamiento!",p.lessonState.piece=null,p.lessonState.type=null,ui()}function Tl(){const n=new Date("2024-01-01"),t=Math.abs(Number(new Date)-Number(n));return Math.floor(t/(1e3*60*60*24))}function pt(n){St(),p.challengeState.inProgress=!0,p.challengeState.currentChallengeIndex=n;const e=jn[n%jn.length];p.challengeState.currentChallenge=e;const{fen:t,goal:r,goalSquare:i}=e;p.game=new en(t),Ge(t),b.messageArea.textContent=r,document.querySelector(`[data-square="${i}"]`).classList.add("goal-square"),Cl()}function Cl(){const n=p.challengeState.currentChallengeIndex+1;b.challengeDayDisplay.textContent=`Reto del Día #${n}`,b.prevChallengeButton.disabled=n<=1,b.nextChallengeButton.disabled=n>p.challengeState.maxChallengeIndex}function Al(n,e){const{goalSquare:t}=p.challengeState.currentChallenge,r=n.dataset.square,i=e.dataset.square;if(p.game.move({from:r,to:i})){const o=p.game.fen().split(" ");o[1]="w",p.game.load(o.join(" ")),Ge(p.game.fen()),document.querySelector(`[data-square="${t}"]`).classList.add("goal-square"),i===t&&(p.challengeState.inProgress=!1,setTimeout(()=>{b.dialogTitle.textContent="¡Reto Completado!",b.dialogMessage.textContent="¡Lo has conseguido! ¿Quieres probar otro reto?",b.dialogButtons.innerHTML='<button id="dialog-next-challenge" class="control-button bg-yellow-500 text-white p-3 rounded-lg shadow-md text-xl w-full">Siguiente Reto</button>',b.completionDialog.classList.remove("hidden");const a=document.getElementById("dialog-next-challenge");a&&(a.onclick=()=>{b.completionDialog.classList.add("hidden"),p.challengeState.currentChallengeIndex<p.challengeState.maxChallengeIndex?pt(p.challengeState.currentChallengeIndex+1):b.messageArea.textContent="¡Has completado todos los retos de hoy!"})},500))}}function _r(){p.game=new en(Hn[Math.floor(Math.random()*Hn.length)].fen),b.messageArea.textContent="Juegan las blancas. ¡Tu turno!",p.selectedSquare=null,Ge(p.game.fen()),qe()}function qe(){if(p.game)if(p.game.game_over())b.gameInfo.innerHTML='<span class="turn-indicator bg-red-500">¡Juego Terminado!</span>';else{const n=p.game.turn()==="w"?"Blancas":"Negras",e=p.game.turn()==="w"?"bg-blue-500":"bg-gray-700";b.gameInfo.innerHTML=`<span class="turn-indicator ${e}">Turno de: ${n}</span>`}}async function kl(){qe(),b.geminiOutput.classList.remove("hidden"),b.geminiContent.classList.add("hidden"),b.geminiLoading.classList.remove("hidden");const n=p.game.fen(),e=p.game.moves();if(e.length===0){qe();return}let t=3,r=!1;for(;t>0&&!r;){const i=`Eres un tutor de ajedrez amable y divertido para un niño de 10 años. Juegas con las piezas negras. Es tu turno. La posición actual en FEN es: "${n}". Los movimientos legales que puedes hacer son: ${e.join(", ")}.
1. Elige tu mejor movimiento de la lista de movimientos legales y escríbelo en notación SAN (ej. "Nf6", "Qxg2").
2. En una nueva línea, explica tu movimiento de forma muy simple, corta y animada.
Formatea tu respuesta exactamente así:
MOVIMIENTO: [Tu movimiento en SAN]
EXPLICACIÓN: [Tu explicación]`;try{const o=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:i}]}]})});if(!o.ok)throw new Error("API Error");const c=(await o.json()).candidates[0].content.parts[0].text,u=c.match(/MOVIMIENTO: (.*)/),g=c.match(/EXPLICACIÓN: (.*)/s),v=u?u[1].trim():null,m=g?g[1].trim():"¡Veamos qué tal esto!";b.geminiContent.innerHTML=m.replace(/\n/g,"<br>"),v&&p.game.move(v,{sloppy:!0})?r=!0:t--}catch{t--}}if(!r){b.geminiContent.innerHTML="¡Vaya! Me he liado un poco, pero aquí va mi jugada.";const i=e[Math.floor(Math.random()*e.length)];p.game.move(i)}Ge(p.game.fen()),b.geminiLoading.classList.add("hidden"),b.geminiContent.classList.remove("hidden"),qe()}function Pl(){b.modeSelector.addEventListener("click",n=>{const e=n.target.closest("button");if(e){if(e.id==="practice-mode-button"&&!p.currentUser){b.dialogTitle.textContent="Función Bloqueada",b.dialogMessage.textContent="Necesitas iniciar sesión para jugar contra la IA y poner a prueba tus habilidades.",b.dialogButtons.innerHTML='<button id="dialog-login-button" class="control-button bg-blue-500 text-white p-3 rounded-lg shadow-md text-xl w-full">Iniciar Sesión con Google</button>',b.completionDialog.classList.remove("hidden"),document.getElementById("dialog-login-button").onclick=()=>{p.pendingActionAfterLogin=()=>{e.click()},gn(),b.completionDialog.classList.add("hidden")};return}p.currentMode=e.dataset.mode,document.querySelectorAll("#mode-selector button").forEach(t=>t.classList.remove("active")),e.classList.add("active"),St(),b.geminiOutput.classList.add("hidden"),b.lessonsContainer.style.display="none",b.practiceContainer.style.display="none",b.challengesContainer.style.display="none",b.gameInfo.innerHTML="",p.currentMode==="lessons"?(b.lessonsContainer.style.display="flex",p.lessonState.piece=je[0],p.lessonState.type="move",Zt()):p.currentMode==="challenges"?(b.challengesContainer.style.display="flex",p.challengeState.maxChallengeIndex=Tl(),pt(p.challengeState.maxChallengeIndex)):p.currentMode==="practice"&&(b.practiceContainer.style.display="flex",_r())}}),b.newPuzzleButton.addEventListener("click",_r),b.prevChallengeButton.addEventListener("click",()=>{p.challengeState.currentChallengeIndex>0&&pt(p.challengeState.currentChallengeIndex-1)}),b.nextChallengeButton.addEventListener("click",()=>{p.challengeState.currentChallengeIndex<p.challengeState.maxChallengeIndex&&pt(p.challengeState.currentChallengeIndex+1)}),b.boardEl.addEventListener("click",n=>{var t,r,i,s,o;const e=n.target.closest(".square");if(e)if(p.currentMode==="lessons"){if(!p.lessonState.inProgress)return;if(p.selectedSquare){const a=p.selectedSquare;(t=a.querySelector(".piece"))==null||t.classList.remove("selected"),p.selectedSquare=null,e.classList.contains("highlight")&&e!==a&&El(a,e)}else{const a=e.querySelector(".piece"),c=parseInt(e.dataset.col),u=parseInt(e.dataset.row);a&&p.lessonState.pieceCoords&&c===p.lessonState.pieceCoords[0]&&u===p.lessonState.pieceCoords[1]&&(p.selectedSquare=e,a.classList.add("selected"))}}else if(p.currentMode==="challenges"){if(!p.challengeState.inProgress)return;if(p.selectedSquare){const a=p.selectedSquare;(r=a.querySelector(".piece"))==null||r.classList.remove("selected"),document.querySelectorAll(".highlight").forEach(c=>c.classList.remove("highlight")),p.selectedSquare=null,Al(a,e)}else{const a=e.querySelector(".piece");a&&(p.selectedSquare=e,a.classList.add("selected"),p.game.moves({square:e.dataset.square,verbose:!0}).forEach(u=>{document.querySelector(`[data-square="${u.to}"]`).classList.add("highlight")}))}}else{if(!p.game||p.game.game_over()||p.game.turn()!=="w")return;if(p.selectedSquare){const a=p.selectedSquare.dataset.square,c=e.dataset.square;(s=(i=document.querySelector(`[data-square="${a}"]`))==null?void 0:i.querySelector(".piece"))==null||s.classList.remove("selected"),p.selectedSquare=null,a!==c&&p.game.move({from:a,to:c,promotion:"q"})&&(Ge(p.game.fen()),p.game.game_over()?qe():(b.gameInfo.innerHTML='<span class="turn-indicator bg-gray-700">Turno de: Negras</span>',setTimeout(kl,500)))}else{const a=e.dataset.square,c=p.game.get(a);c&&c.color===p.game.turn()&&(p.selectedSquare=e,(o=e.querySelector(".piece"))==null||o.classList.add("selected"))}}}),b.closeDialogButton.addEventListener("click",()=>{b.completionDialog.classList.add("hidden")})}function Ol(){Us(),bl(),document.querySelector('[data-mode="lessons"]').click()}Pl();Ol();
