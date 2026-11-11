var Qp=0,Qu=1,$p=2;var yf=1,wh=2,Ei=3,On=0,un=1,Ut=2,es=0,ei=1,dn=2,$u=3,ed=4,em=5,Ms=100,tm=101,nm=102,im=103,sm=104,rm=200,am=201,om=202,cm=203,nl=204,il=205,lm=206,hm=207,um=208,dm=209,fm=210,pm=211,mm=212,gm=213,xm=214,sl=0,rl=1,al=2,ur=3,ol=4,cl=5,ll=6,hl=7,_f=0,vm=1,bm=2,fi=0,ym=1,_m=2,Mm=3,Sm=4,wm=5,Em=6,Tm=7,td="attached",Am="detached",Mf=300,dr=301,fr=302,ul=303,dl=304,Vo=306,Ci=1e3,Ti=1001,la=1002,Zt=1003,Eh=1004;var sr=1005;var Gt=1006,ia=1007;var di=1008;var ni=1009,Sf=1010,wf=1011,ha=1012,Th=1013,Pi=1014,$n=1015,Cs=1016,Ah=1017,Rh=1018,pr=1020,Ef=35902,Tf=1021,Af=1022,_n=1023,Rf=1024,Cf=1025,cr=1026,mr=1027,Ch=1028,Ph=1029,Pf=1030,Ih=1031;var Lh=1033,fo=33776,po=33777,mo=33778,go=33779,fl=35840,pl=35841,ml=35842,gl=35843,xl=36196,vl=37492,bl=37496,yl=37808,_l=37809,Ml=37810,Sl=37811,wl=37812,El=37813,Tl=37814,Al=37815,Rl=37816,Cl=37817,Pl=37818,Il=37819,Ll=37820,Dl=37821,xo=36492,Ul=36494,kl=36495,If=36283,Fl=36284,Nl=36285,Ol=36286,Go=2200,Wo=2201,Rm=2202,gr=2300,xr=2301,yc=2302,rr=2400,ar=2401,vo=2402,Dh=2500,Cm=2501,Lf=0,qo=1,Sa=2,Pm=3200,Im=3201;var Df=0,Lm=1,Ji="",Dt="srgb",fn="srgb-linear",Xo="linear",gt="srgb";var zs=7680;var nd=519,Dm=512,Um=513,km=514,Uf=515,Fm=516,Nm=517,Om=518,zm=519,zl=35044;var id="300 es",Ai=2e3,bo=2001,Ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sd=1234567,sa=Math.PI/180,vr=180/Math.PI;function ti(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function Kt(i,e,t){return Math.max(e,Math.min(t,i))}function Uh(i,e){return(i%e+e)%e}function Bm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Hm(i,e,t){return i!==e?(t-i)/(e-i):0}function ra(i,e,t){return(1-t)*i+t*e}function Vm(i,e,t,n){return ra(i,e,1-Math.exp(-t*n))}function Gm(i,e=1){return e-Math.abs(Uh(i,e*2)-e)}function Wm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function qm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Xm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function jm(i,e){return i+Math.random()*(e-i)}function Ym(i){return i*(.5-Math.random())}function Km(i){i!==void 0&&(sd=i);let e=sd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zm(i){return i*sa}function Jm(i){return i*vr}function Qm(i){return(i&i-1)===0&&i!==0}function $m(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function e0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function t0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var kf={DEG2RAD:sa,RAD2DEG:vr,generateUUID:ti,clamp:Kt,euclideanModulo:Uh,mapLinear:Bm,inverseLerp:Hm,lerp:ra,damp:Vm,pingpong:Gm,smoothstep:Wm,smootherstep:qm,randInt:Xm,randFloat:jm,randFloatSpread:Ym,seededRandom:Km,degToRad:Zm,radToDeg:Jm,isPowerOfTwo:Qm,ceilPowerOfTwo:$m,floorPowerOfTwo:e0,setQuaternionFromProperEuler:t0,normalize:dt,denormalize:Qn},ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],b=s[1],y=s[4],v=s[7],I=s[2],A=s[5],R=s[8];return r[0]=a*x+o*b+c*I,r[3]=a*g+o*y+c*A,r[6]=a*p+o*v+c*R,r[1]=l*x+h*b+u*I,r[4]=l*g+h*y+u*A,r[7]=l*p+h*v+u*R,r[2]=d*x+f*b+m*I,r[5]=d*g+f*y+m*A,r[8]=d*p+f*v+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_c.makeScale(e,t)),this}rotate(e){return this.premultiply(_c.makeRotation(-e)),this}translate(e,t){return this.premultiply(_c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_c=new Ve;function Ff(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ua(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function n0(){let i=ua("canvas");return i.style.display="block",i}var rd={};function ta(i){i in rd||(rd[i]=!0,console.warn(i))}function i0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function s0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function r0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ze={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===gt&&(i.r=Ri(i.r),i.g=Ri(i.g),i.b=Ri(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===gt&&(i.r=lr(i.r),i.g=lr(i.g),i.b=lr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ji?Xo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ad=[.64,.33,.3,.6,.15,.06],od=[.2126,.7152,.0722],cd=[.3127,.329],ld=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hd=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[fn]:{primaries:ad,whitePoint:cd,transfer:Xo,toXYZ:ld,fromXYZ:hd,luminanceCoefficients:od,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:ad,whitePoint:cd,transfer:gt,toXYZ:ld,fromXYZ:hd,luminanceCoefficients:od,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}});var Bs,Bl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bs===void 0&&(Bs=ua("canvas")),Bs.width=e.width,Bs.height=e.height;let n=Bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ua("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ri(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},a0=0,yo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mc(s[a].image)):r.push(Mc(s[a]))}else r=Mc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Mc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var o0=0,rn=class i extends Ii{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ti,s=Ti,r=Gt,a=di,o=_n,c=ni,l=i.DEFAULT_ANISOTROPY,h=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=ti(),this.name="",this.source=new yo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ci:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case la:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ci:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case la:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Mf;rn.DEFAULT_ANISOTROPY=1;var Ye=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,v=(f+1)/2,I=(p+1)/2,A=(h+d)/4,R=(u+x)/4,L=(m+g)/4;return y>v&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=R/n):v>I?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=L/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=R/r,s=L/r),this.set(n,s,r,t),this}let b=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hl=class extends Ii{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new yo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends Hl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_o=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vl=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==m){let g=1-o,p=c*d+l*f+h*m+u*x,b=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let I=Math.sqrt(y),A=Math.atan2(I,p*b);g=Math.sin(g*A)/I,o=Math.sin(o*A)/I}let v=o*b;if(c=c*g+d*v,l=l*g+f*v,h=h*g+m*v,u=u*g+x*v,g===1-o){let I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ud.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ud.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sc=new E,ud=new bt,Wt=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ka.copy(n.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),Fa.subVectors(this.max,Wr),Hs.subVectors(e.a,Wr),Vs.subVectors(e.b,Wr),Gs.subVectors(e.c,Wr),qi.subVectors(Vs,Hs),Xi.subVectors(Gs,Vs),ms.subVectors(Hs,Gs);let t=[0,-qi.z,qi.y,0,-Xi.z,Xi.y,0,-ms.z,ms.y,qi.z,0,-qi.x,Xi.z,0,-Xi.x,ms.z,0,-ms.x,-qi.y,qi.x,0,-Xi.y,Xi.x,0,-ms.y,ms.x,0];return!wc(t,Hs,Vs,Gs,Fa)||(t=[1,0,0,0,1,0,0,0,1],!wc(t,Hs,Vs,Gs,Fa))?!1:(Na.crossVectors(qi,Xi),t=[Na.x,Na.y,Na.z],wc(t,Hs,Vs,Gs,Fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},bi=[new E,new E,new E,new E,new E,new E,new E,new E],Yn=new E,ka=new Wt,Hs=new E,Vs=new E,Gs=new E,qi=new E,Xi=new E,ms=new E,Wr=new E,Fa=new E,Na=new E,gs=new E;function wc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gs.fromArray(i,r);let o=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),c=e.dot(gs),l=t.dot(gs),h=n.dot(gs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var c0=new Wt,qr=new E,Ec=new E,In=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):c0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);let t=qr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(qr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(Ec)),this.expandByPoint(qr.copy(e.center).sub(Ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new E,Tc=new E,Oa=new E,ji=new E,Ac=new E,za=new E,Rc=new E,ws=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Tc.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(Tc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Oa),o=ji.dot(this.direction),c=-ji.dot(Oa),l=ji.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Tc).addScaledVector(Oa,d),f}intersectSphere(e,t){yi.subVectors(e.center,this.origin);let n=yi.dot(this.direction),s=yi.dot(yi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,s,r){Ac.subVectors(t,e),za.subVectors(n,e),Rc.crossVectors(Ac,za);let a=this.direction.dot(Rc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ji.subVectors(this.origin,e);let c=o*this.direction.dot(za.crossVectors(ji,za));if(c<0)return null;let l=o*this.direction.dot(Ac.cross(ji));if(l<0||c+l>a)return null;let h=-o*ji.dot(Rc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,x,g)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),a=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,x=l*u;t[0]=d+x*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,x=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,m=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,f=a*l,m=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(l0,e,h0)}lookAt(e,t,n){let s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Yi.crossVectors(n,Cn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Yi.crossVectors(n,Cn)),Yi.normalize(),Ba.crossVectors(Cn,Yi),s[0]=Yi.x,s[4]=Ba.x,s[8]=Cn.x,s[1]=Yi.y,s[5]=Ba.y,s[9]=Cn.y,s[2]=Yi.z,s[6]=Ba.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],b=n[3],y=n[7],v=n[11],I=n[15],A=s[0],R=s[4],L=s[8],S=s[12],_=s[1],D=s[5],B=s[9],O=s[13],W=s[2],Z=s[6],X=s[10],ee=s[14],q=s[3],ae=s[7],me=s[11],Re=s[15];return r[0]=a*A+o*_+c*W+l*q,r[4]=a*R+o*D+c*Z+l*ae,r[8]=a*L+o*B+c*X+l*me,r[12]=a*S+o*O+c*ee+l*Re,r[1]=h*A+u*_+d*W+f*q,r[5]=h*R+u*D+d*Z+f*ae,r[9]=h*L+u*B+d*X+f*me,r[13]=h*S+u*O+d*ee+f*Re,r[2]=m*A+x*_+g*W+p*q,r[6]=m*R+x*D+g*Z+p*ae,r[10]=m*L+x*B+g*X+p*me,r[14]=m*S+x*O+g*ee+p*Re,r[3]=b*A+y*_+v*W+I*q,r[7]=b*R+y*D+v*Z+I*ae,r[11]=b*L+y*B+v*X+I*me,r[15]=b*S+y*O+v*ee+I*Re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+x*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+g*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],b=u*g*l-x*d*l+x*c*f-o*g*f-u*c*p+o*d*p,y=m*d*l-h*g*l-m*c*f+a*g*f+h*c*p-a*d*p,v=h*x*l-m*u*l+m*o*f-a*x*f-h*o*p+a*u*p,I=m*u*c-h*x*c-m*o*d+a*x*d+h*o*g-a*u*g,A=t*b+n*y+s*v+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return e[0]=b*R,e[1]=(x*d*r-u*g*r-x*s*f+n*g*f+u*s*p-n*d*p)*R,e[2]=(o*g*r-x*c*r+x*s*l-n*g*l-o*s*p+n*c*p)*R,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*R,e[4]=y*R,e[5]=(h*g*r-m*d*r+m*s*f-t*g*f-h*s*p+t*d*p)*R,e[6]=(m*c*r-a*g*r-m*s*l+t*g*l+a*s*p-t*c*p)*R,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*f+t*c*f)*R,e[8]=v*R,e[9]=(m*u*r-h*x*r-m*n*f+t*x*f+h*n*p-t*u*p)*R,e[10]=(a*x*r-m*o*r+m*n*l-t*x*l-a*n*p+t*o*p)*R,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*R,e[12]=I*R,e[13]=(h*x*s-m*u*s+m*n*d-t*x*d-h*n*g+t*u*g)*R,e[14]=(m*o*s-a*x*s-m*n*c+t*x*c+a*n*g-t*o*g)*R,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,x=a*h,g=a*u,p=o*u,b=c*l,y=c*h,v=c*u,I=n.x,A=n.y,R=n.z;return s[0]=(1-(x+p))*I,s[1]=(f+v)*I,s[2]=(m-y)*I,s[3]=0,s[4]=(f-v)*A,s[5]=(1-(d+p))*A,s[6]=(g+b)*A,s[7]=0,s[8]=(m+y)*R,s[9]=(g-b)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ws.set(s[0],s[1],s[2]).length(),a=Ws.set(s[4],s[5],s[6]).length(),o=Ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kn.copy(this);let l=1/r,h=1/a,u=1/o;return Kn.elements[0]*=l,Kn.elements[1]*=l,Kn.elements[2]*=l,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=u,Kn.elements[9]*=u,Kn.elements[10]*=u,t.setFromRotationMatrix(Kn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ai){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,m;if(o===Ai)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===bo)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ai){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*l,f=(n+s)*h,m,x;if(o===Ai)m=(a+r)*u,x=-2*u;else if(o===bo)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ws=new E,Kn=new Ce,l0=new E(0,0,0),h0=new E(1,1,1),Yi=new E,Ba=new E,Cn=new E,dd=new Ce,fd=new bt,zn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fd.setFromEuler(this),this.setFromQuaternion(fd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var da=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},u0=0,pd=new E,qs=new bt,_i=new Ce,Ha=new E,Xr=new E,d0=new E,f0=new bt,md=new E(1,0,0),gd=new E(0,1,0),xd=new E(0,0,1),vd={type:"added"},p0={type:"removed"},Xs={type:"childadded",child:null},Cc={type:"childremoved",child:null},ht=class i extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new E,t=new zn,n=new bt,s=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Ve}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(md,e)}rotateY(e){return this.rotateOnAxis(gd,e)}rotateZ(e){return this.rotateOnAxis(xd,e)}translateOnAxis(e,t){return pd.copy(e).applyQuaternion(this.quaternion),this.position.add(pd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(md,e)}translateY(e){return this.translateOnAxis(gd,e)}translateZ(e){return this.translateOnAxis(xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ha.copy(e):Ha.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Xr,Ha,this.up):_i.lookAt(Ha,Xr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),qs.setFromRotationMatrix(_i),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(p0),Cc.child=e,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,e,d0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,f0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};ht.DEFAULT_UP=new E(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=new E,Mi=new E,Pc=new E,Si=new E,js=new E,Ys=new E,bd=new E,Ic=new E,Lc=new E,Dc=new E,Uc=new Ye,kc=new Ye,Fc=new Ye,Qi=class i{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zn.subVectors(e,t),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zn.subVectors(s,t),Mi.subVectors(n,t),Pc.subVectors(e,t);let a=Zn.dot(Zn),o=Zn.dot(Mi),c=Zn.dot(Pc),l=Mi.dot(Mi),h=Mi.dot(Pc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Si.x),c.addScaledVector(a,Si.y),c.addScaledVector(o,Si.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Uc.setScalar(0),kc.setScalar(0),Fc.setScalar(0),Uc.fromBufferAttribute(e,t),kc.fromBufferAttribute(e,n),Fc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Uc,r.x),a.addScaledVector(kc,r.y),a.addScaledVector(Fc,r.z),a}static isFrontFacing(e,t,n,s){return Zn.subVectors(n,t),Mi.subVectors(e,t),Zn.cross(Mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Zn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;js.subVectors(s,n),Ys.subVectors(r,n),Ic.subVectors(e,n);let c=js.dot(Ic),l=Ys.dot(Ic);if(c<=0&&l<=0)return t.copy(n);Lc.subVectors(e,s);let h=js.dot(Lc),u=Ys.dot(Lc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(js,a);Dc.subVectors(e,r);let f=js.dot(Dc),m=Ys.dot(Dc);if(m>=0&&f<=m)return t.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Ys,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return bd.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(bd,o);let p=1/(g+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(js,a).addScaledVector(Ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Va={h:0,s:0,l:0};function Nc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=Uh(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Nc(a,r,e+1/3),this.g=Nc(a,r,e),this.b=Nc(a,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=Dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let n=Nf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return Ze.fromWorkingColorSpace(hn.copy(this),e),Math.round(Kt(hn.r*255,0,255))*65536+Math.round(Kt(hn.g*255,0,255))*256+Math.round(Kt(hn.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(hn.copy(this),t);let n=hn.r,s=hn.g,r=hn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Dt){Ze.fromWorkingColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,s=hn.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(Va);let n=ra(Ki.h,Va.h,t),s=ra(Ki.s,Va.s,t),r=ra(Ki.l,Va.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new oe;oe.NAMES=Nf;var m0=0,Mn=class extends Ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=ti(),this.name="",this.blending=ei,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nl&&(n.blendSrc=this.blendSrc),this.blendDst!==il&&(n.blendDst=this.blendDst),this.blendEquation!==Ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Jt=class extends Mn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=_f,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new E,Ga=new ce,nt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zl,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ga.fromBufferAttribute(this,t),Ga.applyMatrix3(e),this.setXY(t,Ga.x,Ga.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zl&&(e.usage=this.usage),e}};var Mo=class extends nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var So=class extends nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},g0=0,Nn=new Ce,Oc=new ht,Ks=new E,Pn=new Wt,jr=new Wt,Yt=new E,rt=class i extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ff(e)?So:Mo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return Oc.lookAt(e),Oc.updateMatrix(),this.applyMatrix4(Oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];jr.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(Pn.min,jr.min),Pn.expandByPoint(Yt),Yt.addVectors(Pn.max,jr.max),Pn.expandByPoint(Yt)):(Pn.expandByPoint(jr.min),Pn.expandByPoint(jr.max))}Pn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Yt.fromBufferAttribute(o,l),c&&(Ks.fromBufferAttribute(e,l),Yt.add(Ks)),s=Math.max(s,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new E,c[L]=new E;let l=new E,h=new E,u=new E,d=new ce,f=new ce,m=new ce,x=new E,g=new E;function p(L,S,_){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,_),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(D),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(D),o[L].add(x),o[S].add(x),o[_].add(x),c[L].add(g),c[S].add(g),c[_].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,S=b.length;L<S;++L){let _=b[L],D=_.start,B=_.count;for(let O=D,W=D+B;O<W;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let y=new E,v=new E,I=new E,A=new E;function R(L){I.fromBufferAttribute(s,L),A.copy(I);let S=o[L];y.copy(S),y.sub(I.multiplyScalar(I.dot(S))).normalize(),v.crossVectors(A,S);let D=v.dot(c[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,D)}for(let L=0,S=b.length;L<S;++L){let _=b[L],D=_.start,B=_.count;for(let O=D,W=D+B;O<W;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new E,r=new E,a=new E,o=new E,c=new E,l=new E,h=new E,u=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new nt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yd=new Ce,xs=new ws,Wa=new In,_d=new E,qa=new E,Xa=new E,ja=new E,zc=new E,Ya=new E,Md=new E,Ka=new E,ke=class extends ht{constructor(e=new rt,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ya.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(zc.fromBufferAttribute(u,e),a?Ya.addScaledVector(zc,h):Ya.addScaledVector(zc.sub(t),h))}t.add(Ya)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(r),xs.copy(e.ray).recast(e.near),!(Wa.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Wa,_d)===null||xs.origin.distanceToSquared(_d)>(e.far-e.near)**2))&&(yd.copy(r).invert(),xs.copy(e.ray).applyMatrix4(yd),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,I=y;v<I;v+=3){let A=o.getX(v),R=o.getX(v+1),L=o.getX(v+2);s=Za(this,p,e,n,l,h,u,A,R,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let b=o.getX(g),y=o.getX(g+1),v=o.getX(g+2);s=Za(this,a,e,n,l,h,u,b,y,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,I=y;v<I;v+=3){let A=v,R=v+1,L=v+2;s=Za(this,p,e,n,l,h,u,A,R,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let b=g,y=g+1,v=g+2;s=Za(this,a,e,n,l,h,u,b,y,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function x0(i,e,t,n,s,r,a,o){let c;if(e.side===un?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===On,o),c===null)return null;Ka.copy(o),Ka.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ka);return l<t.near||l>t.far?null:{distance:l,point:Ka.clone(),object:i}}function Za(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,qa),i.getVertexPosition(c,Xa),i.getVertexPosition(l,ja);let h=x0(i,e,t,n,qa,Xa,ja,Md);if(h){let u=new E;Qi.getBarycoord(Md,qa,Xa,ja,u),s&&(h.uv=Qi.getInterpolatedAttribute(s,o,c,l,u,new ce)),r&&(h.uv1=Qi.getInterpolatedAttribute(r,o,c,l,u,new ce)),a&&(h.normal=Qi.getInterpolatedAttribute(a,o,c,l,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new E,materialIndex:0};Qi.getNormal(qa,Xa,ja,d.normal),h.face=d,h.barycoord=u}return h}var si=class i extends rt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function m(x,g,p,b,y,v,I,A,R,L,S){let _=v/R,D=I/L,B=v/2,O=I/2,W=A/2,Z=R+1,X=L+1,ee=0,q=0,ae=new E;for(let me=0;me<X;me++){let Re=me*D-O;for(let Xe=0;Xe<Z;Xe++){let xt=Xe*_-B;ae[x]=xt*b,ae[g]=Re*y,ae[p]=W,l.push(ae.x,ae.y,ae.z),ae[x]=0,ae[g]=0,ae[p]=A>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(Xe/R),u.push(1-me/L),ee+=1}}for(let me=0;me<L;me++)for(let Re=0;Re<R;Re++){let Xe=d+Re+Z*me,xt=d+Re+Z*(me+1),K=d+(Re+1)+Z*(me+1),se=d+(Re+1)+Z*me;c.push(Xe,xt,se),c.push(xt,K,se),q+=6}o.addGroup(f,q,S),f+=q,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function br(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function gn(i){let e={};for(let t=0;t<i.length;t++){let n=br(i[t]);for(let s in n)e[s]=n[s]}return e}function v0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Of(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var b0={clone:br,merge:gn},y0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ct=class extends Mn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y0,this.fragmentShader=_0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=v0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},yr=class extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zi=new E,Sd=new ce,wd=new ce,Vt=class extends yr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,Sd,wd),t.subVectors(wd,Sd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(sa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Zs=-90,Js=1,Gl=class extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(Zs,Js,e,t);s.layers=this.layers,this.add(s);let r=new Vt(Zs,Js,e,t);r.layers=this.layers,this.add(r);let a=new Vt(Zs,Js,e,t);a.layers=this.layers,this.add(a);let o=new Vt(Zs,Js,e,t);o.layers=this.layers,this.add(o);let c=new Vt(Zs,Js,e,t);c.layers=this.layers,this.add(c);let l=new Vt(Zs,Js,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},wo=class extends rn{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wl=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new wo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new si(5,5,5),r=new Ct({name:"CubemapFromEquirect",uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:es});r.uniforms.tEquirect.value=t;let a=new ke(s,r),o=t.minFilter;return t.minFilter===di&&(t.minFilter=Gt),new Gl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Bc=new E,M0=new E,S0=new Ve,Jn=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Bc.subVectors(n,t).cross(M0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Bc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||S0.getNormalMatrix(e),s=this.coplanarPoint(Bc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vs=new In,Ja=new E,fa=class{constructor(e=new Jn,t=new Jn,n=new Jn,s=new Jn,r=new Jn,a=new Jn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ai){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],x=s[10],g=s[11],p=s[12],b=s[13],y=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,g-f,v-p).normalize(),n[1].setComponents(c+r,d+l,g+f,v+p).normalize(),n[2].setComponents(c+a,d+h,g+m,v+b).normalize(),n[3].setComponents(c-a,d-h,g-m,v-b).normalize(),n[4].setComponents(c-o,d-u,g-x,v-y).normalize(),t===Ai)n[5].setComponents(c+o,d+u,g+x,v+y).normalize();else if(t===bo)n[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ja.x=s.normal.x>0?e.max.x:e.min.x,Ja.y=s.normal.y>0?e.max.y:e.min.y,Ja.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function w0(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Qt=class i extends rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let b=p*d-a;for(let y=0;y<l;y++){let v=y*u-r;m.push(v,-b,0),x.push(0,0,1),g.push(y/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){let y=b+l*p,v=b+l*(p+1),I=b+1+l*(p+1),A=b+1+l*p;f.push(y,v,A),f.push(v,I,A)}this.setIndex(f),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(x,3)),this.setAttribute("uv",new it(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},E0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,L0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,O0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,z0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Y0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,K0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Z0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ng=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_g=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ag=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ug=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Og=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$g=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ex=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ix=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ax=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ux=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ex=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ix=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ox=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ev=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:E0,alphahash_pars_fragment:T0,alphamap_fragment:A0,alphamap_pars_fragment:R0,alphatest_fragment:C0,alphatest_pars_fragment:P0,aomap_fragment:I0,aomap_pars_fragment:L0,batching_pars_vertex:D0,batching_vertex:U0,begin_vertex:k0,beginnormal_vertex:F0,bsdfs:N0,iridescence_fragment:O0,bumpmap_pars_fragment:z0,clipping_planes_fragment:B0,clipping_planes_pars_fragment:H0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:G0,color_fragment:W0,color_pars_fragment:q0,color_pars_vertex:X0,color_vertex:j0,common:Y0,cube_uv_reflection_fragment:K0,defaultnormal_vertex:Z0,displacementmap_pars_vertex:J0,displacementmap_vertex:Q0,emissivemap_fragment:$0,emissivemap_pars_fragment:eg,colorspace_fragment:tg,colorspace_pars_fragment:ng,envmap_fragment:ig,envmap_common_pars_fragment:sg,envmap_pars_fragment:rg,envmap_pars_vertex:ag,envmap_physical_pars_fragment:xg,envmap_vertex:og,fog_vertex:cg,fog_pars_vertex:lg,fog_fragment:hg,fog_pars_fragment:ug,gradientmap_pars_fragment:dg,lightmap_pars_fragment:fg,lights_lambert_fragment:pg,lights_lambert_pars_fragment:mg,lights_pars_begin:gg,lights_toon_fragment:vg,lights_toon_pars_fragment:bg,lights_phong_fragment:yg,lights_phong_pars_fragment:_g,lights_physical_fragment:Mg,lights_physical_pars_fragment:Sg,lights_fragment_begin:wg,lights_fragment_maps:Eg,lights_fragment_end:Tg,logdepthbuf_fragment:Ag,logdepthbuf_pars_fragment:Rg,logdepthbuf_pars_vertex:Cg,logdepthbuf_vertex:Pg,map_fragment:Ig,map_pars_fragment:Lg,map_particle_fragment:Dg,map_particle_pars_fragment:Ug,metalnessmap_fragment:kg,metalnessmap_pars_fragment:Fg,morphinstance_vertex:Ng,morphcolor_vertex:Og,morphnormal_vertex:zg,morphtarget_pars_vertex:Bg,morphtarget_vertex:Hg,normal_fragment_begin:Vg,normal_fragment_maps:Gg,normal_pars_fragment:Wg,normal_pars_vertex:qg,normal_vertex:Xg,normalmap_pars_fragment:jg,clearcoat_normal_fragment_begin:Yg,clearcoat_normal_fragment_maps:Kg,clearcoat_pars_fragment:Zg,iridescence_pars_fragment:Jg,opaque_fragment:Qg,packing:$g,premultiplied_alpha_fragment:ex,project_vertex:tx,dithering_fragment:nx,dithering_pars_fragment:ix,roughnessmap_fragment:sx,roughnessmap_pars_fragment:rx,shadowmap_pars_fragment:ax,shadowmap_pars_vertex:ox,shadowmap_vertex:cx,shadowmask_pars_fragment:lx,skinbase_vertex:hx,skinning_pars_vertex:ux,skinning_vertex:dx,skinnormal_vertex:fx,specularmap_fragment:px,specularmap_pars_fragment:mx,tonemapping_fragment:gx,tonemapping_pars_fragment:xx,transmission_fragment:vx,transmission_pars_fragment:bx,uv_pars_fragment:yx,uv_pars_vertex:_x,uv_vertex:Mx,worldpos_vertex:Sx,background_vert:wx,background_frag:Ex,backgroundCube_vert:Tx,backgroundCube_frag:Ax,cube_vert:Rx,cube_frag:Cx,depth_vert:Px,depth_frag:Ix,distanceRGBA_vert:Lx,distanceRGBA_frag:Dx,equirect_vert:Ux,equirect_frag:kx,linedashed_vert:Fx,linedashed_frag:Nx,meshbasic_vert:Ox,meshbasic_frag:zx,meshlambert_vert:Bx,meshlambert_frag:Hx,meshmatcap_vert:Vx,meshmatcap_frag:Gx,meshnormal_vert:Wx,meshnormal_frag:qx,meshphong_vert:Xx,meshphong_frag:jx,meshphysical_vert:Yx,meshphysical_frag:Kx,meshtoon_vert:Zx,meshtoon_frag:Jx,points_vert:Qx,points_frag:$x,shadow_vert:ev,shadow_frag:tv,sprite_vert:nv,sprite_frag:iv},le={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ui={basic:{uniforms:gn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:gn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new oe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:gn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:gn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:gn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new oe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:gn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:gn([le.points,le.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:gn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:gn([le.common,le.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:gn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:gn([le.sprite,le.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:gn([le.common,le.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:gn([le.lights,le.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};ui.physical={uniforms:gn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var Qa={r:0,b:0,g:0},bs=new zn,sv=new Ce;function rv(i,e,t,n,s,r,a){let o=new oe(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function x(b){let y=!1,v=m(b);v===null?p(o,c):v&&v.isColor&&(p(v,1),y=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,y){let v=m(y);v&&(v.isCubeTexture||v.mapping===Vo)?(h===void 0&&(h=new ke(new si(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:br(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),bs.copy(y.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sv.makeRotationFromEuler(bs)),h.material.toneMapped=Ze.getTransfer(v.colorSpace)!==gt,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ke(new Qt(2,2),new Ct({name:"BackgroundMaterial",uniforms:br(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(v.colorSpace)!==gt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,y){b.getRGB(Qa,Of(i)),n.buffers.color.setClear(Qa.r,Qa.g,Qa.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(o,c)},render:x,addToRenderList:g}}function av(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(_,D,B,O,W){let Z=!1,X=u(O,B,D);r!==X&&(r=X,l(r.object)),Z=f(_,O,B,W),Z&&m(_,O,B,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,v(_,D,B,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,D,B){let O=B.wireframe===!0,W=n[_.id];W===void 0&&(W={},n[_.id]=W);let Z=W[D.id];Z===void 0&&(Z={},W[D.id]=Z);let X=Z[O];return X===void 0&&(X=d(c()),Z[O]=X),X}function d(_){let D=[],B=[],O=[];for(let W=0;W<t;W++)D[W]=0,B[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:O,object:_,attributes:{},index:null}}function f(_,D,B,O){let W=r.attributes,Z=D.attributes,X=0,ee=B.getAttributes();for(let q in ee)if(ee[q].location>=0){let me=W[q],Re=Z[q];if(Re===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(Re=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(Re=_.instanceColor)),me===void 0||me.attribute!==Re||Re&&me.data!==Re.data)return!0;X++}return r.attributesNum!==X||r.index!==O}function m(_,D,B,O){let W={},Z=D.attributes,X=0,ee=B.getAttributes();for(let q in ee)if(ee[q].location>=0){let me=Z[q];me===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(me=_.instanceColor));let Re={};Re.attribute=me,me&&me.data&&(Re.data=me.data),W[q]=Re,X++}r.attributes=W,r.attributesNum=X,r.index=O}function x(){let _=r.newAttributes;for(let D=0,B=_.length;D<B;D++)_[D]=0}function g(_){p(_,0)}function p(_,D){let B=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;B[_]=1,O[_]===0&&(i.enableVertexAttribArray(_),O[_]=1),W[_]!==D&&(i.vertexAttribDivisor(_,D),W[_]=D)}function b(){let _=r.newAttributes,D=r.enabledAttributes;for(let B=0,O=D.length;B<O;B++)D[B]!==_[B]&&(i.disableVertexAttribArray(B),D[B]=0)}function y(_,D,B,O,W,Z,X){X===!0?i.vertexAttribIPointer(_,D,B,W,Z):i.vertexAttribPointer(_,D,B,O,W,Z)}function v(_,D,B,O){x();let W=O.attributes,Z=B.getAttributes(),X=D.defaultAttributeValues;for(let ee in Z){let q=Z[ee];if(q.location>=0){let ae=W[ee];if(ae===void 0&&(ee==="instanceMatrix"&&_.instanceMatrix&&(ae=_.instanceMatrix),ee==="instanceColor"&&_.instanceColor&&(ae=_.instanceColor)),ae!==void 0){let me=ae.normalized,Re=ae.itemSize,Xe=e.get(ae);if(Xe===void 0)continue;let xt=Xe.buffer,K=Xe.type,se=Xe.bytesPerElement,Ee=K===i.INT||K===i.UNSIGNED_INT||ae.gpuType===Th;if(ae.isInterleavedBufferAttribute){let ue=ae.data,Ue=ue.stride,ze=ae.offset;if(ue.isInstancedInterleavedBuffer){for(let je=0;je<q.locationSize;je++)p(q.location+je,ue.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let je=0;je<q.locationSize;je++)g(q.location+je);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let je=0;je<q.locationSize;je++)y(q.location+je,Re/q.locationSize,K,me,Ue*se,(ze+Re/q.locationSize*je)*se,Ee)}else{if(ae.isInstancedBufferAttribute){for(let ue=0;ue<q.locationSize;ue++)p(q.location+ue,ae.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ue=0;ue<q.locationSize;ue++)g(q.location+ue);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let ue=0;ue<q.locationSize;ue++)y(q.location+ue,Re/q.locationSize,K,me,Re*se,Re/q.locationSize*ue*se,Ee)}}else if(X!==void 0){let me=X[ee];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(q.location,me);break;case 3:i.vertexAttrib3fv(q.location,me);break;case 4:i.vertexAttrib4fv(q.location,me);break;default:i.vertexAttrib1fv(q.location,me)}}}}b()}function I(){L();for(let _ in n){let D=n[_];for(let B in D){let O=D[B];for(let W in O)h(O[W].object),delete O[W];delete D[B]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;let D=n[_.id];for(let B in D){let O=D[B];for(let W in O)h(O[W].object),delete O[W];delete D[B]}delete n[_.id]}function R(_){for(let D in n){let B=n[D];if(B[_.id]===void 0)continue;let O=B[_.id];for(let W in O)h(O[W].object),delete O[W];delete B[_.id]}}function L(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function ov(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function cv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==_n&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let L=R===Cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ni&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==$n&&!L)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=m>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:I,maxSamples:A}}function lv(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Jn,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let b=r?0:n,y=b*4,v=p.clippingState||null;c.value=v,v=h(m,d,y,f);for(let I=0;I!==y;++I)v[I]=t[I];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=f;y!==x;++y,v+=4)a.copy(u[y]).applyMatrix4(b,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function hv(i){let e=new WeakMap;function t(a,o){return o===ul?a.mapping=dr:o===dl&&(a.mapping=fr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ul||o===dl)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Wl(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var _r=class extends yr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},or=4,Ed=[.125,.215,.35,.446,.526,.582],Ss=20,Hc=new _r,Td=new oe,Vc=null,Gc=0,Wc=0,qc=!1,_s=(1+Math.sqrt(5))/2,Qs=1/_s,Ad=[new E(-_s,Qs,0),new E(_s,Qs,0),new E(-Qs,0,_s),new E(Qs,0,_s),new E(0,_s,-Qs),new E(0,_s,Qs),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],Mr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vc,Gc,Wc),this._renderer.xr.enabled=qc,e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Cs,format:_n,colorSpace:fn,depthBuffer:!1},s=Rd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uv(r)),this._blurMaterial=dv(r,e,t)}return s}_compileMaterial(e){let t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,Hc)}_sceneToCubeUV(e,t,n,s){let o=new Vt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Td),h.toneMapping=fi,h.autoClear=!1;let f=new Jt({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),m=new ke(new si,f),x=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,x=!0):(f.color.copy(Td),x=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):b===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let y=this._cubeSize;$a(s,b*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===dr||e.mapping===fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;$a(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Hc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ad[(s-r-1)%Ad.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ke(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ss-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Ss;g>Ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ss}`);let p=[],b=0;for(let R=0;R<Ss;++R){let L=R/x,S=Math.exp(-L*L/2);p.push(S),R===0?b+=S:R<g&&(b+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;let v=this._sizeLods[s],I=3*v*(s>y-or?s-y+or:0),A=4*(this._cubeSize-v);$a(t,I,A,3*v,2*v),c.setRenderTarget(t),c.render(u,Hc)}};function uv(i){let e=[],t=[],n=[],s=i,r=i-or+1+Ed.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-or?c=Ed[a-i+or-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,b=new Float32Array(x*m*f),y=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let A=0;A<f;A++){let R=A%3*2/3-1,L=A>2?0:-1,S=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];b.set(S,x*m*A),y.set(d,g*m*A);let _=[A,A,A,A,A,A];v.set(_,p*m*A)}let I=new rt;I.setAttribute("position",new nt(b,x)),I.setAttribute("uv",new nt(y,g)),I.setAttribute("faceIndex",new nt(v,p)),e.push(I),s>or&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rd(i,e,t){let n=new ii(i,e,t);return n.texture.mapping=Vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $a(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function dv(i,e,t){let n=new Float32Array(Ss),s=new E(0,1,0);return new Ct({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Cd(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Pd(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function kh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===ul||c===dl,h=c===dr||c===fr;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Mr(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Mr(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function pv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ta("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function mv(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)e.remove(x[g])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)e.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)e.update(x[g],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let b=f.array;x=f.version;for(let y=0,v=b.length;y<v;y+=3){let I=b[y+0],A=b[y+1],R=b[y+2];d.push(I,A,A,R,R,I)}}else if(m!==void 0){let b=m.array;x=m.version;for(let y=0,v=b.length/3-1;y<v;y+=3){let I=y+0,A=y+1,R=y+2;d.push(I,A,A,R,R,I)}}else return;let g=new(Ff(d)?So:Mo)(d,1);g.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function gv(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let b=0;b<m;b++)p+=f[b]*x[b];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function vv(i,e,t){let n=new WeakMap,s=new Ye;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let v=o.attributes.position.count*y,I=1;v>e.maxTextureSize&&(I=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*I*4*u),R=new _o(A,v,I,u);R.type=$n,R.needsUpdate=!0;let L=y*4;for(let _=0;_<u;_++){let D=g[_],B=p[_],O=b[_],W=v*I*4*_;for(let Z=0;Z<D.count;Z++){let X=Z*L;f===!0&&(s.fromBufferAttribute(D,Z),A[W+X+0]=s.x,A[W+X+1]=s.y,A[W+X+2]=s.z,A[W+X+3]=0),m===!0&&(s.fromBufferAttribute(B,Z),A[W+X+4]=s.x,A[W+X+5]=s.y,A[W+X+6]=s.z,A[W+X+7]=0),x===!0&&(s.fromBufferAttribute(O,Z),A[W+X+8]=s.x,A[W+X+9]=s.y,A[W+X+10]=s.z,A[W+X+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new ce(v,I)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function bv(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Sr=class extends rn{constructor(e,t,n,s,r,a,o,c,l,h=cr){if(h!==cr&&h!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===cr&&(n=Pi),n===void 0&&h===mr&&(n=pr),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Zt,this.minFilter=c!==void 0?c:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Bf=new rn,Id=new Sr(1,1),Hf=new _o,Vf=new Vl,Gf=new wo,Ld=[],Dd=[],Ud=new Float32Array(16),kd=new Float32Array(9),Fd=new Float32Array(4);function Ir(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ld[s];if(r===void 0&&(r=new Float32Array(s),Ld[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jo(i,e){let t=Dd[e];t===void 0&&(t=new Int32Array(e),Dd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function yv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function Mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function Sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function wv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,n))return;Fd.set(n),i.uniformMatrix2fv(this.addr,!1,Fd),Xt(t,n)}}function Ev(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,n))return;kd.set(n),i.uniformMatrix3fv(this.addr,!1,kd),Xt(t,n)}}function Tv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,n))return;Ud.set(n),i.uniformMatrix4fv(this.addr,!1,Ud),Xt(t,n)}}function Av(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function Cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function Pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function Iv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function Dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function Uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function kv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Id.compareFunction=Uf,r=Id):r=Bf,t.setTexture2D(e||r,s)}function Fv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Vf,s)}function Nv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Gf,s)}function Ov(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hf,s)}function zv(i){switch(i){case 5126:return yv;case 35664:return _v;case 35665:return Mv;case 35666:return Sv;case 35674:return wv;case 35675:return Ev;case 35676:return Tv;case 5124:case 35670:return Av;case 35667:case 35671:return Rv;case 35668:case 35672:return Cv;case 35669:case 35673:return Pv;case 5125:return Iv;case 36294:return Lv;case 36295:return Dv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Ov}}function Bv(i,e){i.uniform1fv(this.addr,e)}function Hv(i,e){let t=Ir(e,this.size,2);i.uniform2fv(this.addr,t)}function Vv(i,e){let t=Ir(e,this.size,3);i.uniform3fv(this.addr,t)}function Gv(i,e){let t=Ir(e,this.size,4);i.uniform4fv(this.addr,t)}function Wv(i,e){let t=Ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qv(i,e){let t=Ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xv(i,e){let t=Ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jv(i,e){i.uniform1iv(this.addr,e)}function Yv(i,e){i.uniform2iv(this.addr,e)}function Kv(i,e){i.uniform3iv(this.addr,e)}function Zv(i,e){i.uniform4iv(this.addr,e)}function Jv(i,e){i.uniform1uiv(this.addr,e)}function Qv(i,e){i.uniform2uiv(this.addr,e)}function $v(i,e){i.uniform3uiv(this.addr,e)}function eb(i,e){i.uniform4uiv(this.addr,e)}function tb(i,e,t){let n=this.cache,s=e.length,r=jo(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Bf,r[a])}function nb(i,e,t){let n=this.cache,s=e.length,r=jo(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Vf,r[a])}function ib(i,e,t){let n=this.cache,s=e.length,r=jo(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Gf,r[a])}function sb(i,e,t){let n=this.cache,s=e.length,r=jo(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Hf,r[a])}function rb(i){switch(i){case 5126:return Bv;case 35664:return Hv;case 35665:return Vv;case 35666:return Gv;case 35674:return Wv;case 35675:return qv;case 35676:return Xv;case 5124:case 35670:return jv;case 35667:case 35671:return Yv;case 35668:case 35672:return Kv;case 35669:case 35673:return Zv;case 5125:return Jv;case 36294:return Qv;case 36295:return $v;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return sb}}var ql=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zv(t.type)}},Xl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rb(t.type)}},jl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Xc=/(\w+)(\])?(\[|\.)?/g;function Nd(i,e){i.seq.push(e),i.map[e.id]=e}function ab(i,e,t){let n=i.name,s=n.length;for(Xc.lastIndex=0;;){let r=Xc.exec(n),a=Xc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Nd(t,l===void 0?new ql(o,i,e):new Xl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new jl(o),Nd(t,u)),t=u}}}var hr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ab(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Od(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ob=37297,cb=0;function lb(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var zd=new Ve;function hb(i){Ze._getMatrix(zd,Ze.workingColorSpace,i);let e=`mat3( ${zd.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case Xo:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Bd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+lb(i.getShaderSource(e),a)}else return s}function ub(i,e){let t=hb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function db(i,e){let t;switch(e){case ym:t="Linear";break;case _m:t="Reinhard";break;case Mm:t="Cineon";break;case Sm:t="ACESFilmic";break;case Em:t="AgX";break;case Tm:t="Neutral";break;case wm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var eo=new E;function fb(){Ze.getLuminanceCoefficients(eo);let i=eo.x.toFixed(4),e=eo.y.toFixed(4),t=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function mb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function na(i){return i!==""}function Hd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(i){return i.replace(xb,bb)}var vb=new Map;function bb(i,e){let t=We[e];if(t===void 0){let n=vb.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yl(t)}var yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gd(i){return i.replace(yb,_b)}function _b(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===wh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function Sb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case dr:case fr:e="ENVMAP_TYPE_CUBE";break;case Vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wb(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===fr&&(e="ENVMAP_MODE_REFRACTION"),e}function Eb(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _f:e="ENVMAP_BLENDING_MULTIPLY";break;case vm:e="ENVMAP_BLENDING_MIX";break;case bm:e="ENVMAP_BLENDING_ADD";break}return e}function Tb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ab(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Mb(t),l=Sb(t),h=wb(t),u=Eb(t),d=Tb(t),f=pb(t),m=mb(r),x=s.createProgram(),g,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(na).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(na).join(`
`),p.length>0&&(p+=`
`)):(g=[Wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),p=[Wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?We.tonemapping_pars_fragment:"",t.toneMapping!==fi?db("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,ub("linearToOutputTexel",t.outputColorSpace),fb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),a=Yl(a),a=Hd(a,t),a=Vd(a,t),o=Yl(o),o=Hd(o,t),o=Vd(o,t),a=Gd(a),o=Gd(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===id?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=b+g+a,v=b+p+o,I=Od(s,s.VERTEX_SHADER,y),A=Od(s,s.FRAGMENT_SHADER,v);s.attachShader(x,I),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(D){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x).trim(),O=s.getShaderInfoLog(I).trim(),W=s.getShaderInfoLog(A).trim(),Z=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,A);else{let ee=Bd(s,I,"vertex"),q=Bd(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+ee+`
`+q)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||W==="")&&(X=!1);X&&(D.diagnostics={runnable:Z,programLog:B,vertexShader:{log:O,prefix:g},fragmentShader:{log:W,prefix:p}})}s.deleteShader(I),s.deleteShader(A),L=new hr(s,x),S=gb(s,x)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,ob)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=A,this}var Rb=0,Kl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zl(e),t.set(e,n)),n}},Zl=class{constructor(e){this.id=Rb++,this.code=e,this.usedTimes=0}};function Cb(i,e,t,n,s,r,a){let o=new da,c=new Kl,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,_,D,B,O){let W=B.fog,Z=O.geometry,X=S.isMeshStandardMaterial?B.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),q=ee&&ee.mapping===Vo?ee.image.height:null,ae=m[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let me=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Re=me!==void 0?me.length:0,Xe=0;Z.morphAttributes.position!==void 0&&(Xe=1),Z.morphAttributes.normal!==void 0&&(Xe=2),Z.morphAttributes.color!==void 0&&(Xe=3);let xt,K,se,Ee;if(ae){let ut=ui[ae];xt=ut.vertexShader,K=ut.fragmentShader}else xt=S.vertexShader,K=S.fragmentShader,c.update(S),se=c.getVertexShaderID(S),Ee=c.getFragmentShaderID(S);let ue=i.getRenderTarget(),Ue=i.state.buffers.depth.getReversed(),ze=O.isInstancedMesh===!0,je=O.isBatchedMesh===!0,Lt=!!S.map,et=!!S.matcap,Ot=!!ee,N=!!S.aoMap,kn=!!S.lightMap,Je=!!S.bumpMap,Qe=!!S.normalMap,Le=!!S.displacementMap,Tt=!!S.emissiveMap,Pe=!!S.metalnessMap,P=!!S.roughnessMap,M=S.anisotropy>0,H=S.clearcoat>0,J=S.dispersion>0,$=S.iridescence>0,Y=S.sheen>0,Te=S.transmission>0,de=M&&!!S.anisotropyMap,xe=H&&!!S.clearcoatMap,tt=H&&!!S.clearcoatNormalMap,te=H&&!!S.clearcoatRoughnessMap,ve=$&&!!S.iridescenceMap,De=$&&!!S.iridescenceThicknessMap,Fe=Y&&!!S.sheenColorMap,be=Y&&!!S.sheenRoughnessMap,$e=!!S.specularMap,Ge=!!S.specularColorMap,Mt=!!S.specularIntensityMap,U=Te&&!!S.transmissionMap,he=Te&&!!S.thicknessMap,j=!!S.gradientMap,Q=!!S.alphaMap,ge=S.alphaTest>0,fe=!!S.alphaHash,Be=!!S.extensions,Nt=fi;S.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Nt=i.toneMapping);let cn={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:xt,fragmentShader:K,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:Ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:je,batchingColor:je&&O._colorsTexture!==null,instancing:ze,instancingColor:ze&&O.instanceColor!==null,instancingMorph:ze&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:fn,alphaToCoverage:!!S.alphaToCoverage,map:Lt,matcap:et,envMap:Ot,envMapMode:Ot&&ee.mapping,envMapCubeUVHeight:q,aoMap:N,lightMap:kn,bumpMap:Je,normalMap:Qe,displacementMap:d&&Le,emissiveMap:Tt,normalMapObjectSpace:Qe&&S.normalMapType===Lm,normalMapTangentSpace:Qe&&S.normalMapType===Df,metalnessMap:Pe,roughnessMap:P,anisotropy:M,anisotropyMap:de,clearcoat:H,clearcoatMap:xe,clearcoatNormalMap:tt,clearcoatRoughnessMap:te,dispersion:J,iridescence:$,iridescenceMap:ve,iridescenceThicknessMap:De,sheen:Y,sheenColorMap:Fe,sheenRoughnessMap:be,specularMap:$e,specularColorMap:Ge,specularIntensityMap:Mt,transmission:Te,transmissionMap:U,thicknessMap:he,gradientMap:j,opaque:S.transparent===!1&&S.blending===ei&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:ge,alphaHash:fe,combine:S.combine,mapUv:Lt&&x(S.map.channel),aoMapUv:N&&x(S.aoMap.channel),lightMapUv:kn&&x(S.lightMap.channel),bumpMapUv:Je&&x(S.bumpMap.channel),normalMapUv:Qe&&x(S.normalMap.channel),displacementMapUv:Le&&x(S.displacementMap.channel),emissiveMapUv:Tt&&x(S.emissiveMap.channel),metalnessMapUv:Pe&&x(S.metalnessMap.channel),roughnessMapUv:P&&x(S.roughnessMap.channel),anisotropyMapUv:de&&x(S.anisotropyMap.channel),clearcoatMapUv:xe&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:tt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:De&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:be&&x(S.sheenRoughnessMap.channel),specularMapUv:$e&&x(S.specularMap.channel),specularColorMapUv:Ge&&x(S.specularColorMap.channel),specularIntensityMapUv:Mt&&x(S.specularIntensityMap.channel),transmissionMapUv:U&&x(S.transmissionMap.channel),thicknessMapUv:he&&x(S.thicknessMap.channel),alphaMapUv:Q&&x(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Qe||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(Lt||Q),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ue,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Xe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Lt&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===gt,decodeVideoTextureEmissive:Tt&&S.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(S.emissiveMap.colorSpace)===gt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ut,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Be&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&S.extensions.multiDraw===!0||je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return cn.vertexUv1s=l.has(1),cn.vertexUv2s=l.has(2),cn.vertexUv3s=l.has(3),l.clear(),cn}function p(S){let _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(let D in S.defines)_.push(D),_.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(b(_,S),y(_,S),_.push(i.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function b(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function y(S,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){let _=m[S.type],D;if(_){let B=ui[_];D=b0.clone(B.uniforms)}else D=S.uniforms;return D}function I(S,_){let D;for(let B=0,O=h.length;B<O;B++){let W=h[B];if(W.cacheKey===_){D=W,++D.usedTimes;break}}return D===void 0&&(D=new Ab(i,_,S,r),h.push(D)),D}function A(S){if(--S.usedTimes===0){let _=h.indexOf(S);h[_]=h[h.length-1],h.pop(),S.destroy()}}function R(S){c.remove(S)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:I,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:L}}function Pb(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ib(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,m,x,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),e++,p}function o(u,d,f,m,x,g){let p=a(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,m,x,g){let p=a(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Ib),n.length>1&&n.sort(d||qd),s.length>1&&s.sort(d||qd)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Lb(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Xd,i.set(n,[a])):s>=r.length?(a=new Xd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Db(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new oe};break;case"SpotLight":t={position:new E,direction:new E,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":t={color:new oe,position:new E,halfWidth:new E,halfHeight:new E};break}return i[e.id]=t,t}}}function Ub(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var kb=0;function Fb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Nb(i){let e=new Db,t=Ub(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new E);let s=new E,r=new Ce,a=new Ce;function o(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,b=0,y=0,v=0,I=0,A=0,R=0;l.sort(Fb);for(let S=0,_=l.length;S<_;S++){let D=l[S],B=D.color,O=D.intensity,W=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=B.r*O,u+=B.g*O,d+=B.b*O;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],O);R++}else if(D.isDirectionalLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ee=D.shadow,q=t.get(D);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=D.shadow.matrix,b++}n.directional[f]=X,f++}else if(D.isSpotLight){let X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(B).multiplyScalar(O),X.distance=W,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[x]=X;let ee=D.shadow;if(D.map&&(n.spotLightMap[I]=D.map,I++,ee.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[x]=ee.matrix,D.castShadow){let q=t.get(D);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=Z,v++}x++}else if(D.isRectAreaLight){let X=e.get(D);X.color.copy(B).multiplyScalar(O),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=X,g++}else if(D.isPointLight){let X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){let ee=D.shadow,q=t.get(D);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,q.shadowCameraNear=ee.camera.near,q.shadowCameraFar=ee.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=D.shadow.matrix,y++}n.point[m]=X,m++}else if(D.isHemisphereLight){let X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(O),X.groundColor.copy(D.groundColor).multiplyScalar(O),n.hemi[p]=X,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==b||L.numPointShadows!==y||L.numSpotShadows!==v||L.numSpotMaps!==I||L.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,L.directionalLength=f,L.pointLength=m,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=b,L.numPointShadows=y,L.numSpotShadows=v,L.numSpotMaps=I,L.numLightProbes=R,n.version=kb++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let y=l[p];if(y.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(y.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:o,setupView:c,state:n}}function jd(i){let e=new Nb(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Ob(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new jd(i),e.set(s,[o])):r>=a.length?(o=new jd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Jl=class extends Mn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Pm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ql=class extends Mn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},zb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hb(i,e,t){let n=new fa,s=new ce,r=new ce,a=new Ye,o=new Jl({depthPacking:Im}),c=new Ql,l={},h=t.maxTextureSize,u={[On]:un,[un]:On,[Ut]:Ut},d=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:zb,fragmentShader:Bb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new rt;m.setAttribute("position",new nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ke(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yf;let p=this.type;this.render=function(A,R,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let S=i.getRenderTarget(),_=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),B=i.state;B.setBlending(es),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let O=p!==Ei&&this.type===Ei,W=p===Ei&&this.type!==Ei;for(let Z=0,X=A.length;Z<X;Z++){let ee=A[Z],q=ee.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ae=q.getFrameExtents();if(s.multiply(ae),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,q.mapSize.y=r.y)),q.map===null||O===!0||W===!0){let Re=this.type!==Ei?{minFilter:Zt,magFilter:Zt}:{};q.map!==null&&q.map.dispose(),q.map=new ii(s.x,s.y,Re),q.map.texture.name=ee.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let me=q.getViewportCount();for(let Re=0;Re<me;Re++){let Xe=q.getViewport(Re);a.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),B.viewport(a),q.updateMatrices(ee,Re),n=q.getFrustum(),v(R,L,q.camera,ee,this.type)}q.isPointLightShadow!==!0&&this.type===Ei&&b(q,L),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,_,D)};function b(A,R){let L=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ii(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,L,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,L,f,x,null)}function y(A,R,L,S){let _=null,D=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)_=D;else if(_=L.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let B=_.uuid,O=R.uuid,W=l[B];W===void 0&&(W={},l[B]=W);let Z=W[O];Z===void 0&&(Z=_.clone(),W[O]=Z,R.addEventListener("dispose",I)),_=Z}if(_.visible=R.visible,_.wireframe=R.wireframe,S===Ei?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:u[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let B=i.properties.get(_);B.light=L}return _}function v(A,R,L,S,_){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===Ei)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let O=e.update(A),W=A.material;if(Array.isArray(W)){let Z=O.groups;for(let X=0,ee=Z.length;X<ee;X++){let q=Z[X],ae=W[q.materialIndex];if(ae&&ae.visible){let me=y(A,ae,S,_);A.onBeforeShadow(i,A,R,L,O,me,q),i.renderBufferDirect(L,null,O,me,A,q),A.onAfterShadow(i,A,R,L,O,me,q)}}}else if(W.visible){let Z=y(A,W,S,_);A.onBeforeShadow(i,A,R,L,O,Z,null),i.renderBufferDirect(L,null,O,Z,A,null),A.onAfterShadow(i,A,R,L,O,Z,null)}}let B=A.children;for(let O=0,W=B.length;O<W;O++)v(B[O],R,L,S,_)}function I(A){A.target.removeEventListener("dispose",I);for(let L in l){let S=l[L],_=A.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}var Vb={[sl]:rl,[al]:ll,[ol]:hl,[ur]:cl,[rl]:sl,[ll]:al,[hl]:ol,[cl]:ur};function Gb(i,e){function t(){let U=!1,he=new Ye,j=null,Q=new Ye(0,0,0,0);return{setMask:function(ge){j!==ge&&!U&&(i.colorMask(ge,ge,ge,ge),j=ge)},setLocked:function(ge){U=ge},setClear:function(ge,fe,Be,Nt,cn){cn===!0&&(ge*=Nt,fe*=Nt,Be*=Nt),he.set(ge,fe,Be,Nt),Q.equals(he)===!1&&(i.clearColor(ge,fe,Be,Nt),Q.copy(he))},reset:function(){U=!1,j=null,Q.set(-1,0,0,0)}}}function n(){let U=!1,he=!1,j=null,Q=null,ge=null;return{setReversed:function(fe){if(he!==fe){let Be=e.get("EXT_clip_control");he?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);let Nt=ge;ge=null,this.setClear(Nt)}he=fe},getReversed:function(){return he},setTest:function(fe){fe?ue(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(fe){j!==fe&&!U&&(i.depthMask(fe),j=fe)},setFunc:function(fe){if(he&&(fe=Vb[fe]),Q!==fe){switch(fe){case sl:i.depthFunc(i.NEVER);break;case rl:i.depthFunc(i.ALWAYS);break;case al:i.depthFunc(i.LESS);break;case ur:i.depthFunc(i.LEQUAL);break;case ol:i.depthFunc(i.EQUAL);break;case cl:i.depthFunc(i.GEQUAL);break;case ll:i.depthFunc(i.GREATER);break;case hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=fe}},setLocked:function(fe){U=fe},setClear:function(fe){ge!==fe&&(he&&(fe=1-fe),i.clearDepth(fe),ge=fe)},reset:function(){U=!1,j=null,Q=null,ge=null,he=!1}}}function s(){let U=!1,he=null,j=null,Q=null,ge=null,fe=null,Be=null,Nt=null,cn=null;return{setTest:function(ut){U||(ut?ue(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(ut){he!==ut&&!U&&(i.stencilMask(ut),he=ut)},setFunc:function(ut,Xn,xi){(j!==ut||Q!==Xn||ge!==xi)&&(i.stencilFunc(ut,Xn,xi),j=ut,Q=Xn,ge=xi)},setOp:function(ut,Xn,xi){(fe!==ut||Be!==Xn||Nt!==xi)&&(i.stencilOp(ut,Xn,xi),fe=ut,Be=Xn,Nt=xi)},setLocked:function(ut){U=ut},setClear:function(ut){cn!==ut&&(i.clearStencil(ut),cn=ut)},reset:function(){U=!1,he=null,j=null,Q=null,ge=null,fe=null,Be=null,Nt=null,cn=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,b=null,y=null,v=null,I=null,A=null,R=new oe(0,0,0),L=0,S=!1,_=null,D=null,B=null,O=null,W=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ee=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=ee>=1):q.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=ee>=2);let ae=null,me={},Re=i.getParameter(i.SCISSOR_BOX),Xe=i.getParameter(i.VIEWPORT),xt=new Ye().fromArray(Re),K=new Ye().fromArray(Xe);function se(U,he,j,Q){let ge=new Uint8Array(4),fe=i.createTexture();i.bindTexture(U,fe),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<j;Be++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(he+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return fe}let Ee={};Ee[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),Ee[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ee[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(i.DEPTH_TEST),a.setFunc(ur),Je(!1),Qe(Qu),ue(i.CULL_FACE),N(es);function ue(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Ue(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function ze(U,he){return u[U]!==he?(i.bindFramebuffer(U,he),u[U]=he,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=he),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=he),!0):!1}function je(U,he){let j=f,Q=!1;if(U){j=d.get(he),j===void 0&&(j=[],d.set(he,j));let ge=U.textures;if(j.length!==ge.length||j[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Be=ge.length;fe<Be;fe++)j[fe]=i.COLOR_ATTACHMENT0+fe;j.length=ge.length,Q=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,Q=!0);Q&&i.drawBuffers(j)}function Lt(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let et={[Ms]:i.FUNC_ADD,[tm]:i.FUNC_SUBTRACT,[nm]:i.FUNC_REVERSE_SUBTRACT};et[im]=i.MIN,et[sm]=i.MAX;let Ot={[rm]:i.ZERO,[am]:i.ONE,[om]:i.SRC_COLOR,[nl]:i.SRC_ALPHA,[fm]:i.SRC_ALPHA_SATURATE,[um]:i.DST_COLOR,[lm]:i.DST_ALPHA,[cm]:i.ONE_MINUS_SRC_COLOR,[il]:i.ONE_MINUS_SRC_ALPHA,[dm]:i.ONE_MINUS_DST_COLOR,[hm]:i.ONE_MINUS_DST_ALPHA,[pm]:i.CONSTANT_COLOR,[mm]:i.ONE_MINUS_CONSTANT_COLOR,[gm]:i.CONSTANT_ALPHA,[xm]:i.ONE_MINUS_CONSTANT_ALPHA};function N(U,he,j,Q,ge,fe,Be,Nt,cn,ut){if(U===es){x===!0&&(Ue(i.BLEND),x=!1);return}if(x===!1&&(ue(i.BLEND),x=!0),U!==em){if(U!==g||ut!==S){if((p!==Ms||v!==Ms)&&(i.blendEquation(i.FUNC_ADD),p=Ms,v=Ms),ut)switch(U){case ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dn:i.blendFunc(i.ONE,i.ONE);break;case $u:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ed:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $u:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ed:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,y=null,I=null,A=null,R.set(0,0,0),L=0,g=U,S=ut}return}ge=ge||he,fe=fe||j,Be=Be||Q,(he!==p||ge!==v)&&(i.blendEquationSeparate(et[he],et[ge]),p=he,v=ge),(j!==b||Q!==y||fe!==I||Be!==A)&&(i.blendFuncSeparate(Ot[j],Ot[Q],Ot[fe],Ot[Be]),b=j,y=Q,I=fe,A=Be),(Nt.equals(R)===!1||cn!==L)&&(i.blendColor(Nt.r,Nt.g,Nt.b,cn),R.copy(Nt),L=cn),g=U,S=!1}function kn(U,he){U.side===Ut?Ue(i.CULL_FACE):ue(i.CULL_FACE);let j=U.side===un;he&&(j=!j),Je(j),U.blending===ei&&U.transparent===!1?N(es):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let Q=U.stencilWrite;o.setTest(Q),Q&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Tt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Je(U){_!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),_=U)}function Qe(U){U!==Qp?(ue(i.CULL_FACE),U!==D&&(U===Qu?i.cullFace(i.BACK):U===$p?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),D=U}function Le(U){U!==B&&(X&&i.lineWidth(U),B=U)}function Tt(U,he,j){U?(ue(i.POLYGON_OFFSET_FILL),(O!==he||W!==j)&&(i.polygonOffset(he,j),O=he,W=j)):Ue(i.POLYGON_OFFSET_FILL)}function Pe(U){U?ue(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function P(U){U===void 0&&(U=i.TEXTURE0+Z-1),ae!==U&&(i.activeTexture(U),ae=U)}function M(U,he,j){j===void 0&&(ae===null?j=i.TEXTURE0+Z-1:j=ae);let Q=me[j];Q===void 0&&(Q={type:void 0,texture:void 0},me[j]=Q),(Q.type!==U||Q.texture!==he)&&(ae!==j&&(i.activeTexture(j),ae=j),i.bindTexture(U,he||Ee[U]),Q.type=U,Q.texture=he)}function H(){let U=me[ae];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(U){xt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),xt.copy(U))}function be(U){K.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),K.copy(U))}function $e(U,he){let j=l.get(he);j===void 0&&(j=new WeakMap,l.set(he,j));let Q=j.get(U);Q===void 0&&(Q=i.getUniformBlockIndex(he,U.name),j.set(U,Q))}function Ge(U,he){let Q=l.get(he).get(U);c.get(he)!==Q&&(i.uniformBlockBinding(he,Q,U.__bindingPointIndex),c.set(he,Q))}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ae=null,me={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,b=null,y=null,v=null,I=null,A=null,R=new oe(0,0,0),L=0,S=!1,_=null,D=null,B=null,O=null,W=null,xt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ue,disable:Ue,bindFramebuffer:ze,drawBuffers:je,useProgram:Lt,setBlending:N,setMaterial:kn,setFlipSided:Je,setCullFace:Qe,setLineWidth:Le,setPolygonOffset:Tt,setScissorTest:Pe,activeTexture:P,bindTexture:M,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:$,texImage2D:ve,texImage3D:De,updateUBOMapping:$e,uniformBlockBinding:Ge,texStorage2D:tt,texStorage3D:te,texSubImage2D:Y,texSubImage3D:Te,compressedTexSubImage2D:de,compressedTexSubImage3D:xe,scissor:Fe,viewport:be,reset:Mt}}function Yd(i,e,t,n){let s=Wb(n);switch(t){case Tf:return i*e;case Rf:return i*e;case Cf:return i*e*2;case Ch:return i*e/s.components*s.byteLength;case Ph:return i*e/s.components*s.byteLength;case Pf:return i*e*2/s.components*s.byteLength;case Ih:return i*e*2/s.components*s.byteLength;case Af:return i*e*3/s.components*s.byteLength;case _n:return i*e*4/s.components*s.byteLength;case Lh:return i*e*4/s.components*s.byteLength;case fo:case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case mo:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pl:case gl:return Math.max(i,16)*Math.max(e,8)/4;case fl:case ml:return Math.max(i,8)*Math.max(e,8)/2;case xl:case vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case El:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Al:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Il:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xo:case Ul:case kl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case If:case Fl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Nl:case Ol:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wb(i){switch(i){case ni:case Sf:return{byteLength:1,components:1};case ha:case wf:case Cs:return{byteLength:2,components:1};case Ah:case Rh:return{byteLength:2,components:4};case Pi:case Th:case $n:return{byteLength:4,components:1};case Ef:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function qb(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,M){return f?new OffscreenCanvas(P,M):ua("canvas")}function x(P,M,H){let J=1,$=Pe(P);if(($.width>H||$.height>H)&&(J=H/Math.max($.width,$.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Y=Math.floor(J*$.width),Te=Math.floor(J*$.height);u===void 0&&(u=m(Y,Te));let de=M?m(Y,Te):u;return de.width=Y,de.height=Te,de.getContext("2d").drawImage(P,0,0,Y,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+Te+")."),de}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,M,H,J,$=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=M;if(M===i.RED&&(H===i.FLOAT&&(Y=i.R32F),H===i.HALF_FLOAT&&(Y=i.R16F),H===i.UNSIGNED_BYTE&&(Y=i.R8)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.R8UI),H===i.UNSIGNED_SHORT&&(Y=i.R16UI),H===i.UNSIGNED_INT&&(Y=i.R32UI),H===i.BYTE&&(Y=i.R8I),H===i.SHORT&&(Y=i.R16I),H===i.INT&&(Y=i.R32I)),M===i.RG&&(H===i.FLOAT&&(Y=i.RG32F),H===i.HALF_FLOAT&&(Y=i.RG16F),H===i.UNSIGNED_BYTE&&(Y=i.RG8)),M===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RG8UI),H===i.UNSIGNED_SHORT&&(Y=i.RG16UI),H===i.UNSIGNED_INT&&(Y=i.RG32UI),H===i.BYTE&&(Y=i.RG8I),H===i.SHORT&&(Y=i.RG16I),H===i.INT&&(Y=i.RG32I)),M===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),H===i.UNSIGNED_INT&&(Y=i.RGB32UI),H===i.BYTE&&(Y=i.RGB8I),H===i.SHORT&&(Y=i.RGB16I),H===i.INT&&(Y=i.RGB32I)),M===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),H===i.UNSIGNED_INT&&(Y=i.RGBA32UI),H===i.BYTE&&(Y=i.RGBA8I),H===i.SHORT&&(Y=i.RGBA16I),H===i.INT&&(Y=i.RGBA32I)),M===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),M===i.RGBA){let Te=$?Xo:Ze.getTransfer(J);H===i.FLOAT&&(Y=i.RGBA32F),H===i.HALF_FLOAT&&(Y=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Y=Te===gt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(P,M){let H;return P?M===null||M===Pi||M===pr?H=i.DEPTH24_STENCIL8:M===$n?H=i.DEPTH32F_STENCIL8:M===ha&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Pi||M===pr?H=i.DEPTH_COMPONENT24:M===$n?H=i.DEPTH_COMPONENT32F:M===ha&&(H=i.DEPTH_COMPONENT16),H}function I(P,M){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Zt&&P.minFilter!==Gt?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function A(P){let M=P.target;M.removeEventListener("dispose",A),L(M),M.isVideoTexture&&h.delete(M)}function R(P){let M=P.target;M.removeEventListener("dispose",R),_(M)}function L(P){let M=n.get(P);if(M.__webglInit===void 0)return;let H=P.source,J=d.get(H);if(J){let $=J[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(P),Object.keys(J).length===0&&d.delete(H)}n.remove(P)}function S(P){let M=n.get(P);i.deleteTexture(M.__webglTexture);let H=P.source,J=d.get(H);delete J[M.__cacheKey],a.memory.textures--}function _(P){let M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let $=0;$<M.__webglFramebuffer[J].length;$++)i.deleteFramebuffer(M.__webglFramebuffer[J][$]);else i.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)i.deleteFramebuffer(M.__webglFramebuffer[J]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let H=P.textures;for(let J=0,$=H.length;J<$;J++){let Y=n.get(H[J]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(H[J])}n.remove(P)}let D=0;function B(){D=0}function O(){let P=D;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function W(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function Z(P,M){let H=n.get(P);if(P.isVideoTexture&&Le(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){let J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(H,P,M);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function X(P,M){let H=n.get(P);if(P.version>0&&H.__version!==P.version){K(H,P,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function ee(P,M){let H=n.get(P);if(P.version>0&&H.__version!==P.version){K(H,P,M);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function q(P,M){let H=n.get(P);if(P.version>0&&H.__version!==P.version){se(H,P,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}let ae={[Ci]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[la]:i.MIRRORED_REPEAT},me={[Zt]:i.NEAREST,[Eh]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[ia]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},Re={[Dm]:i.NEVER,[zm]:i.ALWAYS,[Um]:i.LESS,[Uf]:i.LEQUAL,[km]:i.EQUAL,[Om]:i.GEQUAL,[Fm]:i.GREATER,[Nm]:i.NOTEQUAL};function Xe(P,M){if(M.type===$n&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Gt||M.magFilter===ia||M.magFilter===sr||M.magFilter===di||M.minFilter===Gt||M.minFilter===ia||M.minFilter===sr||M.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ae[M.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ae[M.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ae[M.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,me[M.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,me[M.minFilter]),M.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Zt||M.minFilter!==sr&&M.minFilter!==di||M.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function xt(P,M){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",A));let J=M.source,$=d.get(J);$===void 0&&($={},d.set(J,$));let Y=W(M);if(Y!==P.__cacheKey){$[Y]===void 0&&($[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),$[Y].usedTimes++;let Te=$[P.__cacheKey];Te!==void 0&&($[P.__cacheKey].usedTimes--,Te.usedTimes===0&&S(M)),P.__cacheKey=Y,P.__webglTexture=$[Y].texture}return H}function K(P,M,H){let J=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=i.TEXTURE_3D);let $=xt(P,M),Y=M.source;t.bindTexture(J,P.__webglTexture,i.TEXTURE0+H);let Te=n.get(Y);if(Y.version!==Te.__version||$===!0){t.activeTexture(i.TEXTURE0+H);let de=Ze.getPrimaries(Ze.workingColorSpace),xe=M.colorSpace===Ji?null:Ze.getPrimaries(M.colorSpace),tt=M.colorSpace===Ji||de===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let te=x(M.image,!1,s.maxTextureSize);te=Tt(M,te);let ve=r.convert(M.format,M.colorSpace),De=r.convert(M.type),Fe=y(M.internalFormat,ve,De,M.colorSpace,M.isVideoTexture);Xe(J,M);let be,$e=M.mipmaps,Ge=M.isVideoTexture!==!0,Mt=Te.__version===void 0||$===!0,U=Y.dataReady,he=I(M,te);if(M.isDepthTexture)Fe=v(M.format===mr,M.type),Mt&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,Fe,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Fe,te.width,te.height,0,ve,De,null));else if(M.isDataTexture)if($e.length>0){Ge&&Mt&&t.texStorage2D(i.TEXTURE_2D,he,Fe,$e[0].width,$e[0].height);for(let j=0,Q=$e.length;j<Q;j++)be=$e[j],Ge?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,be.width,be.height,ve,De,be.data):t.texImage2D(i.TEXTURE_2D,j,Fe,be.width,be.height,0,ve,De,be.data);M.generateMipmaps=!1}else Ge?(Mt&&t.texStorage2D(i.TEXTURE_2D,he,Fe,te.width,te.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,ve,De,te.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,te.width,te.height,0,ve,De,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ge&&Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Fe,$e[0].width,$e[0].height,te.depth);for(let j=0,Q=$e.length;j<Q;j++)if(be=$e[j],M.format!==_n)if(ve!==null)if(Ge){if(U)if(M.layerUpdates.size>0){let ge=Yd(be.width,be.height,M.format,M.type);for(let fe of M.layerUpdates){let Be=be.data.subarray(fe*ge/be.data.BYTES_PER_ELEMENT,(fe+1)*ge/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,fe,be.width,be.height,1,ve,Be)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,be.width,be.height,te.depth,ve,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Fe,be.width,be.height,te.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,be.width,be.height,te.depth,ve,De,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Fe,be.width,be.height,te.depth,0,ve,De,be.data)}else{Ge&&Mt&&t.texStorage2D(i.TEXTURE_2D,he,Fe,$e[0].width,$e[0].height);for(let j=0,Q=$e.length;j<Q;j++)be=$e[j],M.format!==_n?ve!==null?Ge?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,be.width,be.height,ve,be.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Fe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,be.width,be.height,ve,De,be.data):t.texImage2D(i.TEXTURE_2D,j,Fe,be.width,be.height,0,ve,De,be.data)}else if(M.isDataArrayTexture)if(Ge){if(Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,Fe,te.width,te.height,te.depth),U)if(M.layerUpdates.size>0){let j=Yd(te.width,te.height,M.format,M.type);for(let Q of M.layerUpdates){let ge=te.data.subarray(Q*j/te.data.BYTES_PER_ELEMENT,(Q+1)*j/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,te.width,te.height,1,ve,De,ge)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ve,De,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,te.width,te.height,te.depth,0,ve,De,te.data);else if(M.isData3DTexture)Ge?(Mt&&t.texStorage3D(i.TEXTURE_3D,he,Fe,te.width,te.height,te.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ve,De,te.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,te.width,te.height,te.depth,0,ve,De,te.data);else if(M.isFramebufferTexture){if(Mt)if(Ge)t.texStorage2D(i.TEXTURE_2D,he,Fe,te.width,te.height);else{let j=te.width,Q=te.height;for(let ge=0;ge<he;ge++)t.texImage2D(i.TEXTURE_2D,ge,Fe,j,Q,0,ve,De,null),j>>=1,Q>>=1}}else if($e.length>0){if(Ge&&Mt){let j=Pe($e[0]);t.texStorage2D(i.TEXTURE_2D,he,Fe,j.width,j.height)}for(let j=0,Q=$e.length;j<Q;j++)be=$e[j],Ge?U&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ve,De,be):t.texImage2D(i.TEXTURE_2D,j,Fe,ve,De,be);M.generateMipmaps=!1}else if(Ge){if(Mt){let j=Pe(te);t.texStorage2D(i.TEXTURE_2D,he,Fe,j.width,j.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,De,te)}else t.texImage2D(i.TEXTURE_2D,0,Fe,ve,De,te);g(M)&&p(J),Te.__version=Y.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function se(P,M,H){if(M.image.length!==6)return;let J=xt(P,M),$=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+H);let Y=n.get($);if($.version!==Y.__version||J===!0){t.activeTexture(i.TEXTURE0+H);let Te=Ze.getPrimaries(Ze.workingColorSpace),de=M.colorSpace===Ji?null:Ze.getPrimaries(M.colorSpace),xe=M.colorSpace===Ji||Te===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let tt=M.isCompressedTexture||M.image[0].isCompressedTexture,te=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let Q=0;Q<6;Q++)!tt&&!te?ve[Q]=x(M.image[Q],!0,s.maxCubemapSize):ve[Q]=te?M.image[Q].image:M.image[Q],ve[Q]=Tt(M,ve[Q]);let De=ve[0],Fe=r.convert(M.format,M.colorSpace),be=r.convert(M.type),$e=y(M.internalFormat,Fe,be,M.colorSpace),Ge=M.isVideoTexture!==!0,Mt=Y.__version===void 0||J===!0,U=$.dataReady,he=I(M,De);Xe(i.TEXTURE_CUBE_MAP,M);let j;if(tt){Ge&&Mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,$e,De.width,De.height);for(let Q=0;Q<6;Q++){j=ve[Q].mipmaps;for(let ge=0;ge<j.length;ge++){let fe=j[ge];M.format!==_n?Fe!==null?Ge?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,0,0,fe.width,fe.height,Fe,fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,$e,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,0,0,fe.width,fe.height,Fe,be,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge,$e,fe.width,fe.height,0,Fe,be,fe.data)}}}else{if(j=M.mipmaps,Ge&&Mt){j.length>0&&he++;let Q=Pe(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,$e,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(te){Ge?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ve[Q].width,ve[Q].height,Fe,be,ve[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$e,ve[Q].width,ve[Q].height,0,Fe,be,ve[Q].data);for(let ge=0;ge<j.length;ge++){let Be=j[ge].image[Q].image;Ge?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,0,0,Be.width,Be.height,Fe,be,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,$e,Be.width,Be.height,0,Fe,be,Be.data)}}else{Ge?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Fe,be,ve[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$e,Fe,be,ve[Q]);for(let ge=0;ge<j.length;ge++){let fe=j[ge];Ge?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,0,0,Fe,be,fe.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ge+1,$e,Fe,be,fe.image[Q])}}}g(M)&&p(i.TEXTURE_CUBE_MAP),Y.__version=$.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ee(P,M,H,J,$,Y){let Te=r.convert(H.format,H.colorSpace),de=r.convert(H.type),xe=y(H.internalFormat,Te,de,H.colorSpace),tt=n.get(M),te=n.get(H);if(te.__renderTarget=M,!tt.__hasExternalTextures){let ve=Math.max(1,M.width>>Y),De=Math.max(1,M.height>>Y);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,Y,xe,ve,De,M.depth,0,Te,de,null):t.texImage2D($,Y,xe,ve,De,0,Te,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Qe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,$,te.__webglTexture,0,Je(M)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,$,te.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(P,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,P),M.depthBuffer){let J=M.depthTexture,$=J&&J.isDepthTexture?J.type:null,Y=v(M.stencilBuffer,$),Te=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=Je(M);Qe(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,Y,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,Y,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Y,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,P)}else{let J=M.textures;for(let $=0;$<J.length;$++){let Y=J[$],Te=r.convert(Y.format,Y.colorSpace),de=r.convert(Y.type),xe=y(Y.internalFormat,Te,de,Y.colorSpace),tt=Je(M);H&&Qe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,xe,M.width,M.height):Qe(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,xe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,xe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);let $=J.__webglTexture,Y=Je(M);if(M.depthTexture.format===cr)Qe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(M.depthTexture.format===mr)Qe(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ze(P){let M=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let J=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){let $=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",$)};J.addEventListener("dispose",$),M.__depthDisposeCallback=$}M.__boundDepthTexture=J}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ue(M.__webglFramebuffer,P)}else if(H){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=i.createRenderbuffer(),ue(M.__webglDepthbuffer[J],P,!1);else{let $=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ue(M.__webglDepthbuffer,P,!1);else{let J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,$)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(P,M,H){let J=n.get(P);M!==void 0&&Ee(J.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ze(P)}function Lt(P){let M=P.texture,H=n.get(P),J=n.get(M);P.addEventListener("dispose",R);let $=P.textures,Y=P.isWebGLCubeRenderTarget===!0,Te=$.length>1;if(Te||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=M.version,a.memory.textures++),Y){H.__webglFramebuffer=[];for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[de]=[];for(let xe=0;xe<M.mipmaps.length;xe++)H.__webglFramebuffer[de][xe]=i.createFramebuffer()}else H.__webglFramebuffer[de]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)H.__webglFramebuffer[de]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Te)for(let de=0,xe=$.length;de<xe;de++){let tt=n.get($[de]);tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Qe(P)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let de=0;de<$.length;de++){let xe=$[de];H.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[de]);let tt=r.convert(xe.format,xe.colorSpace),te=r.convert(xe.type),ve=y(xe.internalFormat,tt,te,xe.colorSpace,P.isXRRenderTarget===!0),De=Je(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,ve,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,H.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,M);for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)Ee(H.__webglFramebuffer[de][xe],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe);else Ee(H.__webglFramebuffer[de],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let de=0,xe=$.length;de<xe;de++){let tt=$[de],te=n.get(tt);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),Xe(i.TEXTURE_2D,tt),Ee(H.__webglFramebuffer,P,tt,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),g(tt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,J.__webglTexture),Xe(de,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)Ee(H.__webglFramebuffer[xe],P,M,i.COLOR_ATTACHMENT0,de,xe);else Ee(H.__webglFramebuffer,P,M,i.COLOR_ATTACHMENT0,de,0);g(M)&&p(de),t.unbindTexture()}P.depthBuffer&&ze(P)}function et(P){let M=P.textures;for(let H=0,J=M.length;H<J;H++){let $=M[H];if(g($)){let Y=b(P),Te=n.get($).__webglTexture;t.bindTexture(Y,Te),p(Y),t.unbindTexture()}}}let Ot=[],N=[];function kn(P){if(P.samples>0){if(Qe(P)===!1){let M=P.textures,H=P.width,J=P.height,$=i.COLOR_BUFFER_BIT,Y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(P),de=M.length>1;if(de)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);let tt=n.get(M[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,H,J,0,0,H,J,$,i.NEAREST),c===!0&&(Ot.length=0,N.length=0,Ot.push(i.COLOR_ATTACHMENT0+xe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ot.push(Y),N.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,Te.__webglColorRenderbuffer[xe]);let tt=n.get(M[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let M=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Je(P){return Math.min(s.maxSamples,P.samples)}function Qe(P){let M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Le(P){let M=a.render.frame;h.get(P)!==M&&(h.set(P,M),P.update())}function Tt(P,M){let H=P.colorSpace,J=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==fn&&H!==Ji&&(Ze.getTransfer(H)===gt?(J!==_n||$!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function Pe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=ee,this.setTextureCube=q,this.rebindTextures=je,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=kn,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Qe}function Xb(i,e){function t(n,s=Ji){let r,a=Ze.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===Ah)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ef)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sf)return i.BYTE;if(n===wf)return i.SHORT;if(n===ha)return i.UNSIGNED_SHORT;if(n===Th)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Cs)return i.HALF_FLOAT;if(n===Tf)return i.ALPHA;if(n===Af)return i.RGB;if(n===_n)return i.RGBA;if(n===Rf)return i.LUMINANCE;if(n===Cf)return i.LUMINANCE_ALPHA;if(n===cr)return i.DEPTH_COMPONENT;if(n===mr)return i.DEPTH_STENCIL;if(n===Ch)return i.RED;if(n===Ph)return i.RED_INTEGER;if(n===Pf)return i.RG;if(n===Ih)return i.RG_INTEGER;if(n===Lh)return i.RGBA_INTEGER;if(n===fo||n===po||n===mo||n===go)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fl||n===pl||n===ml||n===gl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xl||n===vl||n===bl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xl||n===vl)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yl||n===_l||n===Ml||n===Sl||n===wl||n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_l)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ml)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===El)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Al)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Il)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ll)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xo||n===Ul||n===kl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===xo)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===If||n===Fl||n===Nl||n===Ol)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var $l=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},lt=class extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},jb={type:"move"},aa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jb)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new rn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ct({vertexShader:Yb,fragmentShader:Kb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new Qt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},th=class extends Ii{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,x=new eh,g=t.getContextAttributes(),p=null,b=null,y=[],v=[],I=new ce,A=null,R=new Vt;R.viewport=new Ye;let L=new Vt;L.viewport=new Ye;let S=[R,L],_=new $l,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let se=y[K];return se===void 0&&(se=new aa,y[K]=se),se.getTargetRaySpace()},this.getControllerGrip=function(K){let se=y[K];return se===void 0&&(se=new aa,y[K]=se),se.getGripSpace()},this.getHand=function(K){let se=y[K];return se===void 0&&(se=new aa,y[K]=se),se.getHandSpace()};function O(K){let se=v.indexOf(K.inputSource);if(se===-1)return;let Ee=y[se];Ee!==void 0&&(Ee.update(K.inputSource,K.frame,l||a),Ee.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Z);for(let K=0;K<y.length;K++){let se=v[K];se!==null&&(v[K]=null,y[K].disconnect(se))}D=null,B=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,xt.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){let se={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ii(f.framebufferWidth,f.framebufferHeight,{format:_n,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let se=null,Ee=null,ue=null;g.depth&&(ue=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=g.stencil?mr:cr,Ee=g.stencil?pr:Pi);let Ue={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ue),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new ii(d.textureWidth,d.textureHeight,{format:_n,type:ni,depthTexture:new Sr(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),xt.setContext(s),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(K){for(let se=0;se<K.removed.length;se++){let Ee=K.removed[se],ue=v.indexOf(Ee);ue>=0&&(v[ue]=null,y[ue].disconnect(Ee))}for(let se=0;se<K.added.length;se++){let Ee=K.added[se],ue=v.indexOf(Ee);if(ue===-1){for(let ze=0;ze<y.length;ze++)if(ze>=v.length){v.push(Ee),ue=ze;break}else if(v[ze]===null){v[ze]=Ee,ue=ze;break}if(ue===-1)break}let Ue=y[ue];Ue&&Ue.connect(Ee)}}let X=new E,ee=new E;function q(K,se,Ee){X.setFromMatrixPosition(se.matrixWorld),ee.setFromMatrixPosition(Ee.matrixWorld);let ue=X.distanceTo(ee),Ue=se.projectionMatrix.elements,ze=Ee.projectionMatrix.elements,je=Ue[14]/(Ue[10]-1),Lt=Ue[14]/(Ue[10]+1),et=(Ue[9]+1)/Ue[5],Ot=(Ue[9]-1)/Ue[5],N=(Ue[8]-1)/Ue[0],kn=(ze[8]+1)/ze[0],Je=je*N,Qe=je*kn,Le=ue/(-N+kn),Tt=Le*-N;if(se.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Tt),K.translateZ(Le),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ue[10]===-1)K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let Pe=je+Le,P=Lt+Le,M=Je-Tt,H=Qe+(ue-Tt),J=et*Lt/P*Pe,$=Ot*Lt/P*Pe;K.projectionMatrix.makePerspective(M,H,J,$,Pe,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,se){se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let se=K.near,Ee=K.far;x.texture!==null&&(x.depthNear>0&&(se=x.depthNear),x.depthFar>0&&(Ee=x.depthFar)),_.near=L.near=R.near=se,_.far=L.far=R.far=Ee,(D!==_.near||B!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),D=_.near,B=_.far),R.layers.mask=K.layers.mask|2,L.layers.mask=K.layers.mask|4,_.layers.mask=R.layers.mask|L.layers.mask;let ue=K.parent,Ue=_.cameras;ae(_,ue);for(let ze=0;ze<Ue.length;ze++)ae(Ue[ze],ue);Ue.length===2?q(_,R,L):_.projectionMatrix.copy(R.projectionMatrix),me(K,_,ue)};function me(K,se,Ee){Ee===null?K.matrix.copy(se.matrixWorld):(K.matrix.copy(Ee.matrixWorld),K.matrix.invert(),K.matrix.multiply(se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=vr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let Re=null;function Xe(K,se){if(h=se.getViewerPose(l||a),m=se,h!==null){let Ee=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let ue=!1;Ee.length!==_.cameras.length&&(_.cameras.length=0,ue=!0);for(let ze=0;ze<Ee.length;ze++){let je=Ee[ze],Lt=null;if(f!==null)Lt=f.getViewport(je);else{let Ot=u.getViewSubImage(d,je);Lt=Ot.viewport,ze===0&&(e.setRenderTargetTextures(b,Ot.colorTexture,d.ignoreDepthValues?void 0:Ot.depthStencilTexture),e.setRenderTarget(b))}let et=S[ze];et===void 0&&(et=new Vt,et.layers.enable(ze),et.viewport=new Ye,S[ze]=et),et.matrix.fromArray(je.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(je.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),ze===0&&(_.matrix.copy(et.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ue===!0&&_.cameras.push(et)}let Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){let ze=u.getDepthInformation(Ee[0]);ze&&ze.isValid&&ze.texture&&x.init(e,ze,s.renderState)}}for(let Ee=0;Ee<y.length;Ee++){let ue=v[Ee],Ue=y[Ee];ue!==null&&Ue!==void 0&&Ue.update(ue,se,l||a)}Re&&Re(K,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),m=null}let xt=new zf;xt.setAnimationLoop(Xe),this.setAnimationLoop=function(K){Re=K},this.dispose=function(){}}},ys=new zn,Zb=new Ce;function Jb(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Of(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,b,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===un&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===un&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=e.get(p),y=b.envMap,v=b.envMapRotation;y&&(g.envMap.value=y,ys.copy(v),ys.x*=-1,ys.y*=-1,ys.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),g.envMapRotation.value.setFromMatrix4(Zb.makeRotationFromEuler(ys)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,b,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qb(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){let v=y.program;n.uniformBlockBinding(b,v)}function l(b,y){let v=s[b.id];v===void 0&&(m(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",g));let I=y.program;n.updateUBOMapping(b,I);let A=e.render.frame;r[b.id]!==A&&(d(b),r[b.id]=A)}function h(b){let y=u();b.__bindingPointIndex=y;let v=i.createBuffer(),I=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let y=s[b.id],v=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,R=v.length;A<R;A++){let L=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,_=L.length;S<_;S++){let D=L[S];if(f(D,A,S,I)===!0){let B=D.__offset,O=Array.isArray(D.value)?D.value:[D.value],W=0;for(let Z=0;Z<O.length;Z++){let X=O[Z],ee=x(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,B+W,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,W),W+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,y,v,I){let A=b.value,R=y+"_"+v;if(I[R]===void 0)return typeof A=="number"||typeof A=="boolean"?I[R]=A:I[R]=A.clone(),!0;{let L=I[R];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return I[R]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function m(b){let y=b.uniforms,v=0,I=16;for(let R=0,L=y.length;R<L;R++){let S=Array.isArray(y[R])?y[R]:[y[R]];for(let _=0,D=S.length;_<D;_++){let B=S[_],O=Array.isArray(B.value)?B.value:[B.value];for(let W=0,Z=O.length;W<Z;W++){let X=O[W],ee=x(X),q=v%I,ae=q%ee.boundary,me=q+ae;v+=ae,me!==0&&I-me<ee.storage&&(v+=I-me),B.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=ee.storage}}}let A=v%I;return A>0&&(v+=I-A),b.__size=v,b.__cache={},this}function x(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function g(b){let y=b.target;y.removeEventListener("dispose",g);let v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Eo=class{constructor(e={}){let{canvas:t=n0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,b=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this.toneMapping=fi,this.toneMappingExposure=1;let v=this,I=!1,A=0,R=0,L=null,S=-1,_=null,D=new Ye,B=new Ye,O=null,W=new oe(0),Z=0,X=t.width,ee=t.height,q=1,ae=null,me=null,Re=new Ye(0,0,X,ee),Xe=new Ye(0,0,X,ee),xt=!1,K=new fa,se=!1,Ee=!1,ue=new Ce,Ue=new Ce,ze=new E,je=new Ye,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function Ot(){return L===null?q:1}let N=n;function kn(w,k){return t.getContext(w,k)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",fe,!1),N===null){let k="webgl2";if(N=kn(k,w),N===null)throw kn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Je,Qe,Le,Tt,Pe,P,M,H,J,$,Y,Te,de,xe,tt,te,ve,De,Fe,be,$e,Ge,Mt,U;function he(){Je=new pv(N),Je.init(),Ge=new Xb(N,Je),Qe=new cv(N,Je,e,Ge),Le=new Gb(N,Je),Qe.reverseDepthBuffer&&d&&Le.buffers.depth.setReversed(!0),Tt=new xv(N),Pe=new Pb,P=new qb(N,Je,Le,Pe,Qe,Ge,Tt),M=new hv(v),H=new fv(v),J=new w0(N),Mt=new av(N,J),$=new mv(N,J,Tt,Mt),Y=new bv(N,$,J,Tt),Fe=new vv(N,Qe,P),te=new lv(Pe),Te=new Cb(v,M,H,Je,Qe,Mt,te),de=new Jb(v,Pe),xe=new Lb,tt=new Ob(Je),De=new rv(v,M,H,Le,Y,f,c),ve=new Hb(v,Y,Qe),U=new Qb(N,Tt,Qe,Le),be=new ov(N,Je,Tt),$e=new gv(N,Je,Tt),Tt.programs=Te.programs,v.capabilities=Qe,v.extensions=Je,v.properties=Pe,v.renderLists=xe,v.shadowMap=ve,v.state=Le,v.info=Tt}he();let j=new th(v,N);this.xr=j,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=Je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(X,ee,!1))},this.getSize=function(w){return w.set(X,ee)},this.setSize=function(w,k,V=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,ee=k,t.width=Math.floor(w*q),t.height=Math.floor(k*q),V===!0&&(t.style.width=w+"px",t.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(X*q,ee*q).floor()},this.setDrawingBufferSize=function(w,k,V){X=w,ee=k,q=V,t.width=Math.floor(w*V),t.height=Math.floor(k*V),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(Re)},this.setViewport=function(w,k,V,G){w.isVector4?Re.set(w.x,w.y,w.z,w.w):Re.set(w,k,V,G),Le.viewport(D.copy(Re).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(Xe)},this.setScissor=function(w,k,V,G){w.isVector4?Xe.set(w.x,w.y,w.z,w.w):Xe.set(w,k,V,G),Le.scissor(B.copy(Xe).multiplyScalar(q).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(w){Le.setScissorTest(xt=w)},this.setOpaqueSort=function(w){ae=w},this.setTransparentSort=function(w){me=w},this.getClearColor=function(w){return w.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(w=!0,k=!0,V=!0){let G=0;if(w){let F=!1;if(L!==null){let ne=L.texture.format;F=ne===Lh||ne===Ih||ne===Ph}if(F){let ne=L.texture.type,pe=ne===ni||ne===Pi||ne===ha||ne===pr||ne===Ah||ne===Rh,Me=De.getClearColor(),Se=De.getClearAlpha(),Ne=Me.r,He=Me.g,we=Me.b;pe?(m[0]=Ne,m[1]=He,m[2]=we,m[3]=Se,N.clearBufferuiv(N.COLOR,0,m)):(x[0]=Ne,x[1]=He,x[2]=we,x[3]=Se,N.clearBufferiv(N.COLOR,0,x))}else G|=N.COLOR_BUFFER_BIT}k&&(G|=N.DEPTH_BUFFER_BIT),V&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),xe.dispose(),tt.dispose(),Pe.dispose(),M.dispose(),H.dispose(),Y.dispose(),Mt.dispose(),U.dispose(),Te.dispose(),j.dispose(),j.removeEventListener("sessionstart",Wu),j.removeEventListener("sessionend",qu),ps.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let w=Tt.autoReset,k=ve.enabled,V=ve.autoUpdate,G=ve.needsUpdate,F=ve.type;he(),Tt.autoReset=w,ve.enabled=k,ve.autoUpdate=V,ve.needsUpdate=G,ve.type=F}function fe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Be(w){let k=w.target;k.removeEventListener("dispose",Be),Nt(k)}function Nt(w){cn(w),Pe.remove(w)}function cn(w){let k=Pe.get(w).programs;k!==void 0&&(k.forEach(function(V){Te.releaseProgram(V)}),w.isShaderMaterial&&Te.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,V,G,F,ne){k===null&&(k=Lt);let pe=F.isMesh&&F.matrixWorld.determinant()<0,Me=Kp(w,k,V,G,F);Le.setMaterial(G,pe);let Se=V.index,Ne=1;if(G.wireframe===!0){if(Se=$.getWireframeAttribute(V),Se===void 0)return;Ne=2}let He=V.drawRange,we=V.attributes.position,st=He.start*Ne,St=(He.start+He.count)*Ne;ne!==null&&(st=Math.max(st,ne.start*Ne),St=Math.min(St,(ne.start+ne.count)*Ne)),Se!==null?(st=Math.max(st,0),St=Math.min(St,Se.count)):we!=null&&(st=Math.max(st,0),St=Math.min(St,we.count));let At=St-st;if(At<0||At===1/0)return;Mt.setup(F,G,Me,V,Se);let yn,ot=be;if(Se!==null&&(yn=J.get(Se),ot=$e,ot.setIndex(yn)),F.isMesh)G.wireframe===!0?(Le.setLineWidth(G.wireframeLinewidth*Ot()),ot.setMode(N.LINES)):ot.setMode(N.TRIANGLES);else if(F.isLine){let Ae=G.linewidth;Ae===void 0&&(Ae=1),Le.setLineWidth(Ae*Ot()),F.isLineSegments?ot.setMode(N.LINES):F.isLineLoop?ot.setMode(N.LINE_LOOP):ot.setMode(N.LINE_STRIP)}else F.isPoints?ot.setMode(N.POINTS):F.isSprite&&ot.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ot.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))ot.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Ae=F._multiDrawStarts,vi=F._multiDrawCounts,ct=F._multiDrawCount,jn=Se?J.get(Se).bytesPerElement:1,Os=Pe.get(G).currentProgram.getUniforms();for(let Rn=0;Rn<ct;Rn++)Os.setValue(N,"_gl_DrawID",Rn),ot.render(Ae[Rn]/jn,vi[Rn])}else if(F.isInstancedMesh)ot.renderInstances(st,At,F.count);else if(V.isInstancedBufferGeometry){let Ae=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,vi=Math.min(V.instanceCount,Ae);ot.renderInstances(st,At,vi)}else ot.render(st,At)};function ut(w,k,V){w.transparent===!0&&w.side===Ut&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,Ua(w,k,V),w.side=On,w.needsUpdate=!0,Ua(w,k,V),w.side=Ut):Ua(w,k,V)}this.compile=function(w,k,V=null){V===null&&(V=w),p=tt.get(V),p.init(k),y.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==V&&w.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let G=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ne=F.material;if(ne)if(Array.isArray(ne))for(let pe=0;pe<ne.length;pe++){let Me=ne[pe];ut(Me,V,F),G.add(Me)}else ut(ne,V,F),G.add(ne)}),y.pop(),p=null,G},this.compileAsync=function(w,k,V=null){let G=this.compile(w,k,V);return new Promise(F=>{function ne(){if(G.forEach(function(pe){Pe.get(pe).currentProgram.isReady()&&G.delete(pe)}),G.size===0){F(w);return}setTimeout(ne,10)}Je.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Xn=null;function xi(w){Xn&&Xn(w)}function Wu(){ps.stop()}function qu(){ps.start()}let ps=new zf;ps.setAnimationLoop(xi),typeof self<"u"&&ps.setContext(self),this.setAnimationLoop=function(w){Xn=w,j.setAnimationLoop(w),w===null?ps.stop():ps.start()},j.addEventListener("sessionstart",Wu),j.addEventListener("sessionend",qu),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(k),k=j.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,k,L),p=tt.get(w,y.length),p.init(k),y.push(p),Ue.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),K.setFromProjectionMatrix(Ue),Ee=this.localClippingEnabled,se=te.init(this.clippingPlanes,Ee),g=xe.get(w,b.length),g.init(),b.push(g),j.enabled===!0&&j.isPresenting===!0){let ne=v.xr.getDepthSensingMesh();ne!==null&&bc(ne,k,-1/0,v.sortObjects)}bc(w,k,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ae,me),et=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,et&&De.addToRenderList(g,w),this.info.render.frame++,se===!0&&te.beginShadows();let V=p.state.shadowsArray;ve.render(V,w,k),se===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=g.opaque,F=g.transmissive;if(p.setupLights(),k.isArrayCamera){let ne=k.cameras;if(F.length>0)for(let pe=0,Me=ne.length;pe<Me;pe++){let Se=ne[pe];ju(G,F,w,Se)}et&&De.render(w);for(let pe=0,Me=ne.length;pe<Me;pe++){let Se=ne[pe];Xu(g,w,Se,Se.viewport)}}else F.length>0&&ju(G,F,w,k),et&&De.render(w),Xu(g,w,k);L!==null&&(P.updateMultisampleRenderTarget(L),P.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(v,w,k),Mt.resetDefaultState(),S=-1,_=null,y.pop(),y.length>0?(p=y[y.length-1],se===!0&&te.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function bc(w,k,V,G){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){G&&je.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ue);let pe=Y.update(w),Me=w.material;Me.visible&&g.push(w,pe,Me,V,je.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){let pe=Y.update(w),Me=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),je.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),je.copy(pe.boundingSphere.center)),je.applyMatrix4(w.matrixWorld).applyMatrix4(Ue)),Array.isArray(Me)){let Se=pe.groups;for(let Ne=0,He=Se.length;Ne<He;Ne++){let we=Se[Ne],st=Me[we.materialIndex];st&&st.visible&&g.push(w,pe,st,V,je.z,we)}}else Me.visible&&g.push(w,pe,Me,V,je.z,null)}}let ne=w.children;for(let pe=0,Me=ne.length;pe<Me;pe++)bc(ne[pe],k,V,G)}function Xu(w,k,V,G){let F=w.opaque,ne=w.transmissive,pe=w.transparent;p.setupLightsView(V),se===!0&&te.setGlobalState(v.clippingPlanes,V),G&&Le.viewport(D.copy(G)),F.length>0&&Da(F,k,V),ne.length>0&&Da(ne,k,V),pe.length>0&&Da(pe,k,V),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function ju(w,k,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new ii(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Cs:ni,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let ne=p.state.transmissionRenderTarget[G.id],pe=G.viewport||D;ne.setSize(pe.z,pe.w);let Me=v.getRenderTarget();v.setRenderTarget(ne),v.getClearColor(W),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),et&&De.render(V);let Se=v.toneMapping;v.toneMapping=fi;let Ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),se===!0&&te.setGlobalState(v.clippingPlanes,G),Da(w,V,G),P.updateMultisampleRenderTarget(ne),P.updateRenderTargetMipmap(ne),Je.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let we=0,st=k.length;we<st;we++){let St=k[we],At=St.object,yn=St.geometry,ot=St.material,Ae=St.group;if(ot.side===Ut&&At.layers.test(G.layers)){let vi=ot.side;ot.side=un,ot.needsUpdate=!0,Yu(At,V,G,yn,ot,Ae),ot.side=vi,ot.needsUpdate=!0,He=!0}}He===!0&&(P.updateMultisampleRenderTarget(ne),P.updateRenderTargetMipmap(ne))}v.setRenderTarget(Me),v.setClearColor(W,Z),Ne!==void 0&&(G.viewport=Ne),v.toneMapping=Se}function Da(w,k,V){let G=k.isScene===!0?k.overrideMaterial:null;for(let F=0,ne=w.length;F<ne;F++){let pe=w[F],Me=pe.object,Se=pe.geometry,Ne=G===null?pe.material:G,He=pe.group;Me.layers.test(V.layers)&&Yu(Me,k,V,Se,Ne,He)}}function Yu(w,k,V,G,F,ne){w.onBeforeRender(v,k,V,G,F,ne),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(v,k,V,G,w,ne),F.transparent===!0&&F.side===Ut&&F.forceSinglePass===!1?(F.side=un,F.needsUpdate=!0,v.renderBufferDirect(V,k,G,F,w,ne),F.side=On,F.needsUpdate=!0,v.renderBufferDirect(V,k,G,F,w,ne),F.side=Ut):v.renderBufferDirect(V,k,G,F,w,ne),w.onAfterRender(v,k,V,G,F,ne)}function Ua(w,k,V){k.isScene!==!0&&(k=Lt);let G=Pe.get(w),F=p.state.lights,ne=p.state.shadowsArray,pe=F.state.version,Me=Te.getParameters(w,F.state,ne,k,V),Se=Te.getProgramCacheKey(Me),Ne=G.programs;G.environment=w.isMeshStandardMaterial?k.environment:null,G.fog=k.fog,G.envMap=(w.isMeshStandardMaterial?H:M).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",Be),Ne=new Map,G.programs=Ne);let He=Ne.get(Se);if(He!==void 0){if(G.currentProgram===He&&G.lightsStateVersion===pe)return Zu(w,Me),He}else Me.uniforms=Te.getUniforms(w),w.onBeforeCompile(Me,v),He=Te.acquireProgram(Me,Se),Ne.set(Se,He),G.uniforms=Me.uniforms;let we=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(we.clippingPlanes=te.uniform),Zu(w,Me),G.needsLights=Jp(w),G.lightsStateVersion=pe,G.needsLights&&(we.ambientLightColor.value=F.state.ambient,we.lightProbe.value=F.state.probe,we.directionalLights.value=F.state.directional,we.directionalLightShadows.value=F.state.directionalShadow,we.spotLights.value=F.state.spot,we.spotLightShadows.value=F.state.spotShadow,we.rectAreaLights.value=F.state.rectArea,we.ltc_1.value=F.state.rectAreaLTC1,we.ltc_2.value=F.state.rectAreaLTC2,we.pointLights.value=F.state.point,we.pointLightShadows.value=F.state.pointShadow,we.hemisphereLights.value=F.state.hemi,we.directionalShadowMap.value=F.state.directionalShadowMap,we.directionalShadowMatrix.value=F.state.directionalShadowMatrix,we.spotShadowMap.value=F.state.spotShadowMap,we.spotLightMatrix.value=F.state.spotLightMatrix,we.spotLightMap.value=F.state.spotLightMap,we.pointShadowMap.value=F.state.pointShadowMap,we.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=He,G.uniformsList=null,He}function Ku(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=hr.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Zu(w,k){let V=Pe.get(w);V.outputColorSpace=k.outputColorSpace,V.batching=k.batching,V.batchingColor=k.batchingColor,V.instancing=k.instancing,V.instancingColor=k.instancingColor,V.instancingMorph=k.instancingMorph,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphColors=k.morphColors,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}function Kp(w,k,V,G,F){k.isScene!==!0&&(k=Lt),P.resetTextureUnits();let ne=k.fog,pe=G.isMeshStandardMaterial?k.environment:null,Me=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:fn,Se=(G.isMeshStandardMaterial?H:M).get(G.envMap||pe),Ne=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,He=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),we=!!V.morphAttributes.position,st=!!V.morphAttributes.normal,St=!!V.morphAttributes.color,At=fi;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(At=v.toneMapping);let yn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ot=yn!==void 0?yn.length:0,Ae=Pe.get(G),vi=p.state.lights;if(se===!0&&(Ee===!0||w!==_)){let Fn=w===_&&G.id===S;te.setState(G,w,Fn)}let ct=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==vi.state.version||Ae.outputColorSpace!==Me||F.isBatchedMesh&&Ae.batching===!1||!F.isBatchedMesh&&Ae.batching===!0||F.isBatchedMesh&&Ae.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ae.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ae.instancing===!1||!F.isInstancedMesh&&Ae.instancing===!0||F.isSkinnedMesh&&Ae.skinning===!1||!F.isSkinnedMesh&&Ae.skinning===!0||F.isInstancedMesh&&Ae.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ae.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ae.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ae.instancingMorph===!1&&F.morphTexture!==null||Ae.envMap!==Se||G.fog===!0&&Ae.fog!==ne||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==te.numPlanes||Ae.numIntersection!==te.numIntersection)||Ae.vertexAlphas!==Ne||Ae.vertexTangents!==He||Ae.morphTargets!==we||Ae.morphNormals!==st||Ae.morphColors!==St||Ae.toneMapping!==At||Ae.morphTargetsCount!==ot)&&(ct=!0):(ct=!0,Ae.__version=G.version);let jn=Ae.currentProgram;ct===!0&&(jn=Ua(G,k,F));let Os=!1,Rn=!1,Vr=!1,Rt=jn.getUniforms(),hi=Ae.uniforms;if(Le.useProgram(jn.program)&&(Os=!0,Rn=!0,Vr=!0),G.id!==S&&(S=G.id,Rn=!0),Os||_!==w){Le.buffers.depth.getReversed()?(ue.copy(w.projectionMatrix),s0(ue),r0(ue),Rt.setValue(N,"projectionMatrix",ue)):Rt.setValue(N,"projectionMatrix",w.projectionMatrix),Rt.setValue(N,"viewMatrix",w.matrixWorldInverse);let Gi=Rt.map.cameraPosition;Gi!==void 0&&Gi.setValue(N,ze.setFromMatrixPosition(w.matrixWorld)),Qe.logarithmicDepthBuffer&&Rt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Rt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),_!==w&&(_=w,Rn=!0,Vr=!0)}if(F.isSkinnedMesh){Rt.setOptional(N,F,"bindMatrix"),Rt.setOptional(N,F,"bindMatrixInverse");let Fn=F.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),Rt.setValue(N,"boneTexture",Fn.boneTexture,P))}F.isBatchedMesh&&(Rt.setOptional(N,F,"batchingTexture"),Rt.setValue(N,"batchingTexture",F._matricesTexture,P),Rt.setOptional(N,F,"batchingIdTexture"),Rt.setValue(N,"batchingIdTexture",F._indirectTexture,P),Rt.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&Rt.setValue(N,"batchingColorTexture",F._colorsTexture,P));let Gr=V.morphAttributes;if((Gr.position!==void 0||Gr.normal!==void 0||Gr.color!==void 0)&&Fe.update(F,V,jn),(Rn||Ae.receiveShadow!==F.receiveShadow)&&(Ae.receiveShadow=F.receiveShadow,Rt.setValue(N,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(hi.envMap.value=Se,hi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&k.environment!==null&&(hi.envMapIntensity.value=k.environmentIntensity),Rn&&(Rt.setValue(N,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&Zp(hi,Vr),ne&&G.fog===!0&&de.refreshFogUniforms(hi,ne),de.refreshMaterialUniforms(hi,G,q,ee,p.state.transmissionRenderTarget[w.id]),hr.upload(N,Ku(Ae),hi,P)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(hr.upload(N,Ku(Ae),hi,P),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Rt.setValue(N,"center",F.center),Rt.setValue(N,"modelViewMatrix",F.modelViewMatrix),Rt.setValue(N,"normalMatrix",F.normalMatrix),Rt.setValue(N,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Fn=G.uniformsGroups;for(let Gi=0,Wi=Fn.length;Gi<Wi;Gi++){let Ju=Fn[Gi];U.update(Ju,jn),U.bind(Ju,jn)}}return jn}function Zp(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Jp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,k,V){Pe.get(w.texture).__webglTexture=k,Pe.get(w.depthTexture).__webglTexture=V;let G=Pe.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){let V=Pe.get(w);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,V=0){L=w,A=k,R=V;let G=!0,F=null,ne=!1,pe=!1;if(w){let Se=Pe.get(w);if(Se.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(N.FRAMEBUFFER,null),G=!1;else if(Se.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(Se.__hasExternalTextures)P.rebindTextures(w,Pe.get(w.texture).__webglTexture,Pe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let we=w.depthTexture;if(Se.__boundDepthTexture!==we){if(we!==null&&Pe.has(we)&&(w.width!==we.image.width||w.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}let Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(pe=!0);let He=Pe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(He[k])?F=He[k][V]:F=He[k],ne=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?F=Pe.get(w).__webglMultisampledFramebuffer:Array.isArray(He)?F=He[V]:F=He,D.copy(w.viewport),B.copy(w.scissor),O=w.scissorTest}else D.copy(Re).multiplyScalar(q).floor(),B.copy(Xe).multiplyScalar(q).floor(),O=xt;if(Le.bindFramebuffer(N.FRAMEBUFFER,F)&&G&&Le.drawBuffers(w,F),Le.viewport(D),Le.scissor(B),Le.setScissorTest(O),ne){let Se=Pe.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se.__webglTexture,V)}else if(pe){let Se=Pe.get(w.texture),Ne=k||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.__webglTexture,V||0,Ne)}S=-1},this.readRenderTargetPixels=function(w,k,V,G,F,ne,pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){Le.bindFramebuffer(N.FRAMEBUFFER,Me);try{let Se=w.texture,Ne=Se.format,He=Se.type;if(!Qe.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-G&&V>=0&&V<=w.height-F&&N.readPixels(k,V,G,F,Ge.convert(Ne),Ge.convert(He),ne)}finally{let Se=L!==null?Pe.get(L).__webglFramebuffer:null;Le.bindFramebuffer(N.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(w,k,V,G,F,ne,pe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){let Se=w.texture,Ne=Se.format,He=Se.type;if(!Qe.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-G&&V>=0&&V<=w.height-F){Le.bindFramebuffer(N.FRAMEBUFFER,Me);let we=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,we),N.bufferData(N.PIXEL_PACK_BUFFER,ne.byteLength,N.STREAM_READ),N.readPixels(k,V,G,F,Ge.convert(Ne),Ge.convert(He),0);let st=L!==null?Pe.get(L).__webglFramebuffer:null;Le.bindFramebuffer(N.FRAMEBUFFER,st);let St=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await i0(N,St,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,we),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ne),N.deleteBuffer(we),N.deleteSync(St),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,V=0){w.isTexture!==!0&&(ta("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);let G=Math.pow(2,-V),F=Math.floor(w.image.width*G),ne=Math.floor(w.image.height*G),pe=k!==null?k.x:0,Me=k!==null?k.y:0;P.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,pe,Me,F,ne),Le.unbindTexture()},this.copyTextureToTexture=function(w,k,V=null,G=null,F=0){w.isTexture!==!0&&(ta("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],k=arguments[2],F=arguments[3]||0,V=null);let ne,pe,Me,Se,Ne,He,we,st,St,At=w.isCompressedTexture?w.mipmaps[F]:w.image;V!==null?(ne=V.max.x-V.min.x,pe=V.max.y-V.min.y,Me=V.isBox3?V.max.z-V.min.z:1,Se=V.min.x,Ne=V.min.y,He=V.isBox3?V.min.z:0):(ne=At.width,pe=At.height,Me=At.depth||1,Se=0,Ne=0,He=0),G!==null?(we=G.x,st=G.y,St=G.z):(we=0,st=0,St=0);let yn=Ge.convert(k.format),ot=Ge.convert(k.type),Ae;k.isData3DTexture?(P.setTexture3D(k,0),Ae=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(P.setTexture2DArray(k,0),Ae=N.TEXTURE_2D_ARRAY):(P.setTexture2D(k,0),Ae=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);let vi=N.getParameter(N.UNPACK_ROW_LENGTH),ct=N.getParameter(N.UNPACK_IMAGE_HEIGHT),jn=N.getParameter(N.UNPACK_SKIP_PIXELS),Os=N.getParameter(N.UNPACK_SKIP_ROWS),Rn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,At.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,At.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Se),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ne),N.pixelStorei(N.UNPACK_SKIP_IMAGES,He);let Vr=w.isDataArrayTexture||w.isData3DTexture,Rt=k.isDataArrayTexture||k.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let hi=Pe.get(w),Gr=Pe.get(k),Fn=Pe.get(hi.__renderTarget),Gi=Pe.get(Gr.__renderTarget);Le.bindFramebuffer(N.READ_FRAMEBUFFER,Fn.__webglFramebuffer),Le.bindFramebuffer(N.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Wi=0;Wi<Me;Wi++)Vr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.get(w).__webglTexture,F,He+Wi),w.isDepthTexture?(Rt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.get(k).__webglTexture,F,St+Wi),N.blitFramebuffer(Se,Ne,ne,pe,we,st,ne,pe,N.DEPTH_BUFFER_BIT,N.NEAREST)):Rt?N.copyTexSubImage3D(Ae,F,we,st,St+Wi,Se,Ne,ne,pe):N.copyTexSubImage2D(Ae,F,we,st,St+Wi,Se,Ne,ne,pe);Le.bindFramebuffer(N.READ_FRAMEBUFFER,null),Le.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Rt?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Ae,F,we,st,St,ne,pe,Me,yn,ot,At.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(Ae,F,we,st,St,ne,pe,Me,yn,At.data):N.texSubImage3D(Ae,F,we,st,St,ne,pe,Me,yn,ot,At):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,we,st,ne,pe,yn,ot,At.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,we,st,At.width,At.height,yn,At.data):N.texSubImage2D(N.TEXTURE_2D,F,we,st,ne,pe,yn,ot,At);N.pixelStorei(N.UNPACK_ROW_LENGTH,vi),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ct),N.pixelStorei(N.UNPACK_SKIP_PIXELS,jn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Os),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Rn),F===0&&k.generateMipmaps&&N.generateMipmap(Ae),Le.unbindTexture()},this.copyTextureToTexture3D=function(w,k,V=null,G=null,F=0){return w.isTexture!==!0&&(ta("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,w=arguments[2],k=arguments[3],F=arguments[4]||0),ta('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,k,V,G,F)},this.initRenderTarget=function(w){Pe.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),Le.unbindTexture()},this.resetState=function(){A=0,R=0,L=null,Le.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var Es=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},wr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zl,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},mn=new E,Ts=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Er=class extends Mn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$s,Yr=new E,er=new E,tr=new E,nr=new ce,Kr=new ce,Wf=new Ce,to=new E,Zr=new E,no=new E,Kd=new ce,jc=new ce,Zd=new ce,pa=class extends ht{constructor(e=new Er){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wr(t,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new Ts(n,3,0,!1)),$s.setAttribute("uv",new Ts(n,2,3,!1))}this.geometry=$s,this.material=e,this.center=new ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),er.setFromMatrixScale(this.matrixWorld),Wf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&er.multiplyScalar(-tr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;io(to.set(-.5,-.5,0),tr,a,er,s,r),io(Zr.set(.5,-.5,0),tr,a,er,s,r),io(no.set(.5,.5,0),tr,a,er,s,r),Kd.set(0,0),jc.set(1,0),Zd.set(1,1);let o=e.ray.intersectTriangle(to,Zr,no,!1,Yr);if(o===null&&(io(Zr.set(-.5,.5,0),tr,a,er,s,r),jc.set(0,1),o=e.ray.intersectTriangle(to,no,Zr,!1,Yr),o===null))return;let c=e.ray.origin.distanceTo(Yr);c<e.near||c>e.far||t.push({distance:c,point:Yr.clone(),uv:Qi.getInterpolation(Yr,to,Zr,no,Kd,jc,Zd,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function io(i,e,t,n,s,r){nr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Kr.x=r*nr.x-s*nr.y,Kr.y=s*nr.x+r*nr.y):Kr.copy(nr),i.copy(e),i.x+=Kr.x,i.y+=Kr.y,i.applyMatrix4(Wf)}var Jd=new E,Qd=new Ye,$d=new Ye,$b=new E,ef=new Ce,so=new E,Yc=new In,tf=new Ce,Kc=new ws,To=class extends ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=td,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,so),this.boundingBox.expandByPoint(so)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,so),this.boundingSphere.expandByPoint(so)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yc.copy(this.boundingSphere),Yc.applyMatrix4(s),e.ray.intersectsSphere(Yc)!==!1&&(tf.copy(s).invert(),Kc.copy(e.ray).applyMatrix4(tf),!(this.boundingBox!==null&&Kc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Kc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ye,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===td?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Am?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Qd.fromBufferAttribute(s.attributes.skinIndex,e),$d.fromBufferAttribute(s.attributes.skinWeight,e),Jd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=$d.getComponent(r);if(a!==0){let o=Qd.getComponent(r);ef.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector($b.copy(Jd).applyMatrix4(ef),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},ma=class extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}},Tr=class extends rn{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Zt,h=Zt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nf=new Ce,ey=new Ce,Ao=class i{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:ey;nf.multiplyMatrices(o,t[r]),nf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Tr(t,e,e,_n,$n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ma),this.bones.push(a),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},ri=class extends nt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ir=new Ce,sf=new Ce,ro=[],rf=new Wt,ty=new Ce,Jr=new ke,Qr=new In,As=class extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ri(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ty)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ir),rf.copy(e.boundingBox).applyMatrix4(ir),this.boundingBox.union(rf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ir),Qr.copy(e.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(Qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qr.copy(this.boundingSphere),Qr.applyMatrix4(n),e.ray.intersectsSphere(Qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ir),sf.multiplyMatrices(n,ir),Jr.matrixWorld=sf,Jr.raycast(e,ro);for(let a=0,o=ro.length;a<o;a++){let c=ro[a];c.instanceId=r,c.object=this,t.push(c)}ro.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ri(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tr(new Float32Array(s*this.count),s,this.count,Ch,$n));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ga=class extends Mn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ro=new E,Co=new E,af=new Ce,$r=new ws,ao=new In,Zc=new E,of=new E,Ar=class extends ht{constructor(e=new rt,t=new ga){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ro.fromBufferAttribute(t,s-1),Co.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ro.distanceTo(Co);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(s),ao.radius+=r,e.ray.intersectsSphere(ao)===!1)return;af.copy(s).invert(),$r.copy(e.ray).applyMatrix4(af);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=l){let p=h.getX(x),b=h.getX(x+1),y=oo(this,e,$r,c,p,b);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=oo(this,e,$r,c,x,g);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=l){let p=oo(this,e,$r,c,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=oo(this,e,$r,c,m-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function oo(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(Ro.fromBufferAttribute(a,s),Co.fromBufferAttribute(a,r),t.distanceSqToSegment(Ro,Co,Zc,of)>n)return;Zc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Zc);if(!(c<e.near||c>e.far))return{distance:c,point:of.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var cf=new E,lf=new E,Po=class extends Ar{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)cf.fromBufferAttribute(t,s),lf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+cf.distanceTo(lf);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Io=class extends Ar{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},xa=class extends Mn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hf=new Ce,nh=new ws,co=new In,lo=new E,Li=class extends ht{constructor(e=new rt,t=new xa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),co.radius+=r,e.ray.intersectsSphere(co)===!1)return;hf.copy(s).invert(),nh.copy(e.ray).applyMatrix4(hf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,x=f;m<x;m++){let g=l.getX(m);lo.fromBufferAttribute(u,g),uf(lo,g,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,x=f;m<x;m++)lo.fromBufferAttribute(u,m),uf(lo,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function uf(i,e,t,n,s,r,a){let o=nh.distanceSqToPoint(i);if(o<t){let c=new E;nh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ce:new E);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new E,s=[],r=[],a=[],o=new E,c=new Ce;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new E)}r[0]=new E,a[0]=new E;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Kt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Kt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Lo=class extends ai{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ce){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ih=class extends Lo{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Fh(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ho=new E,Jc=new Fh,Qc=new Fh,$c=new Fh,va=class extends ai{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new E){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(ho.subVectors(s[0],s[1]).add(s[0]),l=ho);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ho.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ho),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Jc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,g),Qc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,g),$c.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Jc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Qc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),$c.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Jc.calc(c),Qc.calc(c),$c.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new E().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function df(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function ny(i,e){let t=1-i;return t*t*e}function iy(i,e){return 2*(1-i)*i*e}function sy(i,e){return i*i*e}function oa(i,e,t,n){return ny(i,e)+iy(i,t)+sy(i,n)}function ry(i,e){let t=1-i;return t*t*t*e}function ay(i,e){let t=1-i;return 3*t*t*i*e}function oy(i,e){return 3*(1-i)*i*i*e}function cy(i,e){return i*i*i*e}function ca(i,e,t,n,s){return ry(i,e)+ay(i,t)+oy(i,n)+cy(i,s)}var sh=class extends ai{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ca(e,s.x,r.x,a.x,o.x),ca(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rh=class extends ai{constructor(e=new E,t=new E,n=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new E){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ca(e,s.x,r.x,a.x,o.x),ca(e,s.y,r.y,a.y,o.y),ca(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ah=class extends ai{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oh=class extends ai{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ch=class extends ai{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(oa(e,s.x,r.x,a.x),oa(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends ai{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(oa(e,s.x,r.x,a.x),oa(e,s.y,r.y,a.y),oa(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lh=class extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(df(o,c.x,l.x,h.x,u.x),df(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},ly=Object.freeze({__proto__:null,ArcCurve:ih,CatmullRomCurve3:va,CubicBezierCurve:sh,CubicBezierCurve3:rh,EllipseCurve:Lo,LineCurve:ah,LineCurve3:oh,QuadraticBezierCurve:ch,QuadraticBezierCurve3:Do,SplineCurve:lh});var Sn=class i extends rt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;b(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(f,2));function b(){let v=new E,I=new E,A=0,R=(t-e)/n;for(let L=0;L<=r;L++){let S=[],_=L/r,D=_*(t-e)+e;for(let B=0;B<=s;B++){let O=B/s,W=O*c+o,Z=Math.sin(W),X=Math.cos(W);I.x=D*Z,I.y=-_*n+g,I.z=D*X,u.push(I.x,I.y,I.z),v.set(Z,R,X).normalize(),d.push(v.x,v.y,v.z),f.push(O,1-_),S.push(m++)}x.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){let _=x[S][L],D=x[S+1][L],B=x[S+1][L+1],O=x[S][L+1];(e>0||S!==0)&&(h.push(_,D,O),A+=3),(t>0||S!==r-1)&&(h.push(D,B,O),A+=3)}l.addGroup(p,A,0),p+=A}function y(v){let I=m,A=new ce,R=new E,L=0,S=v===!0?e:t,_=v===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,g*_,0),d.push(0,_,0),f.push(.5,.5),m++;let D=m;for(let B=0;B<=s;B++){let W=B/s*c+o,Z=Math.cos(W),X=Math.sin(W);R.x=S*X,R.y=g*_,R.z=S*Z,u.push(R.x,R.y,R.z),d.push(0,_,0),A.x=Z*.5+.5,A.y=X*.5*_+.5,f.push(A.x,A.y),m++}for(let B=0;B<s;B++){let O=I+B,W=D+B;v===!0?h.push(W,W+1,O):h.push(W+1,W,O),L+=3}l.addGroup(p,L,v===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rr=class i extends Sn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hh=class i extends rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(r.slice(),3)),this.setAttribute("uv",new it(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let y=new E,v=new E,I=new E;for(let A=0;A<t.length;A+=3)f(t[A+0],y),f(t[A+1],v),f(t[A+2],I),c(y,v,I,b)}function c(b,y,v,I){let A=I+1,R=[];for(let L=0;L<=A;L++){R[L]=[];let S=b.clone().lerp(v,L/A),_=y.clone().lerp(v,L/A),D=A-L;for(let B=0;B<=D;B++)B===0&&L===A?R[L][B]=S:R[L][B]=S.clone().lerp(_,B/D)}for(let L=0;L<A;L++)for(let S=0;S<2*(A-L)-1;S++){let _=Math.floor(S/2);S%2===0?(d(R[L][_+1]),d(R[L+1][_]),d(R[L][_])):(d(R[L][_+1]),d(R[L+1][_+1]),d(R[L+1][_]))}}function l(b){let y=new E;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(b),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){let b=new E;for(let y=0;y<r.length;y+=3){b.x=r[y+0],b.y=r[y+1],b.z=r[y+2];let v=g(b)/2/Math.PI+.5,I=p(b)/Math.PI+.5;a.push(v,1-I)}m(),u()}function u(){for(let b=0;b<a.length;b+=6){let y=a[b+0],v=a[b+2],I=a[b+4],A=Math.max(y,v,I),R=Math.min(y,v,I);A>.9&&R<.1&&(y<.2&&(a[b+0]+=1),v<.2&&(a[b+2]+=1),I<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,y){let v=b*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function m(){let b=new E,y=new E,v=new E,I=new E,A=new ce,R=new ce,L=new ce;for(let S=0,_=0;S<r.length;S+=9,_+=6){b.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),A.set(a[_+0],a[_+1]),R.set(a[_+2],a[_+3]),L.set(a[_+4],a[_+5]),I.copy(b).add(y).add(v).divideScalar(3);let D=g(I);x(A,_+0,b,D),x(R,_+2,y,D),x(L,_+4,v,D)}}function x(b,y,v,I){I<0&&b.x===1&&(a[y]=b.x-1),v.x===0&&v.z===0&&(a[y]=I/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Uo=class i extends hh{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var wn=class i extends rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new E,d=new E,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let b=[],y=p/n,v=0;p===0&&a===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let I=0;I<=t;I++){let A=I/t;u.x=-e*Math.cos(s+A*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+y*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(A+v,1-y),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let y=h[p][b+1],v=h[p][b],I=h[p+1][b],A=h[p+1][b+1];(p!==0||a>0)&&f.push(y,v,A),(p!==n-1||c<Math.PI)&&f.push(v,I,A)}this.setIndex(f),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(x,3)),this.setAttribute("uv",new it(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Cr=class i extends rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new E,u=new E,d=new E;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,b=(s+1)*f+m;a.push(x,g,b),a.push(g,p,b)}this.setIndex(a),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ko=class i extends rt{constructor(e=new Do(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new E,c=new E,l=new ce,h=new E,u=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(f,2));function x(){for(let y=0;y<t;y++)g(y);g(r===!1?t:0),b(),p()}function g(y){h=e.getPointAt(y/t,h);let v=a.normals[y],I=a.binormals[y];for(let A=0;A<=s;A++){let R=A/s*Math.PI*2,L=Math.sin(R),S=-Math.cos(R);c.x=S*v.x+L*I.x,c.y=S*v.y+L*I.y,c.z=S*v.z+L*I.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=t;y++)for(let v=1;v<=s;v++){let I=(s+1)*(y-1)+(v-1),A=(s+1)*y+(v-1),R=(s+1)*y+v,L=(s+1)*(y-1)+v;m.push(I,A,L),m.push(A,R,L)}}function b(){for(let y=0;y<=t;y++)for(let v=0;v<=s;v++)l.x=y/t,l.y=v/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ly[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var $t=class extends Mn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Df,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ln=class extends $t{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function uo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function hy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function uy(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ff(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function qf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var ts=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uh=class extends ts{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rr,endingEnd:rr}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ar:r=e,o=2*t-n;break;case vo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ar:a=e,c=2*n-t;break;case vo:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,b=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*x+.5*m,v=f*g-f*x;for(let I=0;I!==o;++I)r[I]=p*a[h+I]+b*a[l+I]+y*a[c+I]+v*a[u+I];return r}},Fo=class extends ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},dh=class extends ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=uo(t,this.TimeBufferType),this.values=uo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:uo(e.times,Array),values:uo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gr:t=this.InterpolantFactoryMethodDiscrete;break;case xr:t=this.InterpolantFactoryMethodLinear;break;case yc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return xr;case this.InterpolantFactoryMethodSmooth:return yc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&hy(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===yc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=xr;var ns=class extends Bn{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=gr;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends Bn{};No.prototype.ValueTypeName="color";var Di=class extends Bn{};Di.prototype.ValueTypeName="number";var fh=class extends ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)bt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Hn=class extends Bn{InterpolantFactoryMethodLinear(e){return new fh(this.times,this.values,this.getValueSize(),e)}};Hn.prototype.ValueTypeName="quaternion";Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Bn{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=gr;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Vn=class extends Bn{};Vn.prototype.ValueTypeName="vector";var Ui=class{constructor(e="",t=-1,n=[],s=Dh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ti(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(fy(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=uy(c);c=ff(c,1,h),l=ff(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Di(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,x){if(f.length!==0){let g=[],p=[];qf(f,g,p,m),g.length!==0&&x.push(new u(d,g,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(let x in f){let g=[],p=[];for(let b=0;b!==d[m].morphTargets.length;++b){let y=d[m];g.push(y.time),p.push(y.morphTarget===x?1:0)}s.push(new Di(".morphTargetInfluence["+x+"]",g,p))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(Vn,f+".position",d,"pos",s),n(Hn,f+".quaternion",d,"rot",s),n(Vn,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function dy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Di;case"vector":case"vector2":case"vector3":case"vector4":return Vn;case"color":return No;case"quaternion":return Hn;case"bool":case"boolean":return ns;case"string":return is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function fy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=dy(i.type);if(i.times===void 0){let t=[],n=[];qf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var $i={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ph=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},wa=new ph,ki=class{constructor(e){this.manager=e!==void 0?e:wa,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ki.DEFAULT_MATERIAL_NAME="__DEFAULT";var wi={},mh=class extends Error{constructor(e,t){super(e),this.response=t}},ba=class extends ki{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=$i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:n,onError:s});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=wi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,x=0,g=new ReadableStream({start(p){b();function b(){u.read().then(({done:y,value:v})=>{if(y)p.close();else{x+=v.byteLength;let I=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let A=0,R=h.length;A<R;A++){let L=h[A];L.onProgress&&L.onProgress(I)}p.enqueue(v),b()}},y=>{p.error(y)})}}});return new Response(g)}else throw new mh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{$i.add(e,l);let h=wi[e];delete wi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=wi[e];if(h===void 0)throw this.manager.itemError(e),l;delete wi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var gh=class extends ki{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=$i.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=ua("img");function c(){h(),$i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var ss=class extends ki{constructor(e){super(e)}load(e,t,n,s){let r=new rn,a=new gh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ya=class extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var el=new Ce,pf=new E,mf=new E,_a=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fa,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(pf),mf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mf),t.updateMatrixWorld(),el.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(el),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(el)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xh=class extends _a{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=vr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Oo=class extends ya{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new xh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},gf=new Ce,ea=new E,tl=new E,vh=class extends _a{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ea.setFromMatrixPosition(e.matrixWorld),n.position.copy(ea),tl.copy(n.position),tl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(tl),n.updateMatrixWorld(),s.makeTranslation(-ea.x,-ea.y,-ea.z),gf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gf)}},Fi=class extends ya{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},bh=class extends _a{constructor(){super(new _r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pr=class extends ya{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new bh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var rs=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ma=class extends rt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var zo=class extends ki{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=$i.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return $i.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),$i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});$i.add(e,c),r.manager.itemStart(e)}};var Bo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=xf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function xf(){return performance.now()}var yh=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){bt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;bt.multiplyQuaternionsFlat(e,a,e,t,e,n),bt.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},Nh="\\[\\]\\.:\\/",py=new RegExp("["+Nh+"]","g"),Oh="[^"+Nh+"]",my="[^"+Nh.replace("\\.","")+"]",gy=/((?:WC+[\/:])*)/.source.replace("WC",Oh),xy=/(WCOD+)?/.source.replace("WCOD",my),vy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),by=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),yy=new RegExp("^"+gy+xy+vy+by+"$"),_y=["material","materials","bones","map"],_h=class{constructor(e,t,n){let s=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(py,"")}static parseTrackName(e){let t=yy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_y.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=_h;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mh=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:rr,endingEnd:rr};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Wo,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Cm:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Dh:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===Rm;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===Go){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=ar,s.endingEnd=ar):(e?s.endingStart=this.zeroSlopeAtStart?ar:rr:s.endingStart=vo,t?s.endingEnd=this.zeroSlopeAtEnd?ar:rr:s.endingEnd=vo)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},My=new Float32Array(1),Rs=class extends Ii{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;m=new yh(vt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Fo(new Float32Array(2),new Float32Array(2),1,My),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?Ui.findByName(s,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Dh),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new Mh(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Ui.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var vf=new Ce,Ho=class{constructor(e,t,n=0,s=1/0){this.ray=new ws(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new da,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vf),this}intersectObject(e,t=!0,n=[]){return Sh(e,this,n,t),n.sort(bf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Sh(e[s],this,n,t);return n.sort(bf),n}};function bf(i,e){return i.distance-e.distance}function Sh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Sh(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var wt=(i,e,t)=>Math.max(e,Math.min(t,i)),Ht=(i,e,t)=>i+(e-i)*t,Et=(i,e,t)=>{let n=wt((t-i)/(e-i),0,1);return n*n*(3-2*n)},kt=(i,e,t,n)=>Ht(i,e,1-Math.exp(-t*n)),xn=Math.PI*2;function Lr(i,e){let t=(e-i)%xn;return t>Math.PI&&(t-=xn),t<-Math.PI&&(t+=xn),t}function Gn(i,e,t,n){return i+Lr(i,e)*(1-Math.exp(-t*n))}function Dr(i){let e=i>>>0;return()=>{e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Yo(i,e){let t=Math.imul(i,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}function Ur(i,e){let t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,a=s*s*(3-2*s),o=r*r*(3-2*r);return Ht(Ht(Yo(t,n),Yo(t+1,n),a),Ht(Yo(t,n+1),Yo(t+1,n+1),a),o)}function Ni(i,e,t=4){let n=.5,s=0,r=1;for(let a=0;a<t;a++)s+=n*Ur(i*r,e*r),r*=2.03,n*=.5;return s}var pn=`
float h21(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
vec2 h22(vec2 p){ float n=h21(p); return vec2(n,h21(p+n+17.1)); }
float vn(vec2 p){ vec2 i=floor(p),f=fract(p); vec2 u=f*f*(3.-2.*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),u.x),mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),u.x),u.y); }
float fbm(vec2 p){ float a=.5,s=0.; for(int i=0;i<5;i++){ s+=a*vn(p); p=p*2.03+7.1; a*=.5; } return s; }
// returns (edge distance, cell random)
vec2 voro(vec2 p){ vec2 n=floor(p),f=fract(p); float md=8.,md2=8.; vec2 id=vec2(0.);
  for(int j=-1;j<=1;j++)for(int i=-1;i<=1;i++){ vec2 g=vec2(float(i),float(j)); vec2 o=h22(n+g)*.72+.14; vec2 r=g+o-f; float d=dot(r,r);
    if(d<md){ md2=md; md=d; id=n+g; } else if(d<md2){ md2=d; } }
  return vec2(sqrt(md2)-sqrt(md), h21(id)); }
`;function Ko(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new rt,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Xf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let m=Xf(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Xf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new nt(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let x=h.getComponent(d,m);o.setComponent(d+u,m,x)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function zh(i,e){if(e===Lf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Sa||e===qo){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Sa)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Ea=[{id:"path1",t:"seg",a:[0,52],b:[2,30],r:4.2,on:!0},{id:"path1b",t:"seg",a:[2,30],b:[-1,15],r:4.2,on:!0},{id:"court",t:"blob",cs:[[0,0,10.5],[-7.5,4,7],[8.5,-3,7.5],[3,8.5,6.8],[-5,-7,6.5],[10,7,4.6],[0,-9.5,5.2]],k:2.5,wob:1.1,on:!0},{id:"gate",t:"seg",a:[0,-12],b:[0,-34],r:4,on:!1},{id:"arena",t:"blob",cs:[[0,-50,14],[-9.5,-44,9],[10.5,-55,9.5],[6.5,-41,8],[-7,-59.5,8.5],[0,-37,6.6]],k:3,wob:1.3,on:!0}],Zo=[{x:-3.6,z:2.6,r:1.5,k:"rock",s:2.7},{x:5.4,z:-5.8,r:1.3,k:"rock",s:2.2},{x:4.8,z:3.9,r:2.2,k:"tree",s:7.5},{x:-7.4,z:-3.4,r:1,k:"stele",s:1.9},{x:-9.4,z:6,r:1.1,k:"rock",s:2,nc:!0},{x:-7.8,z:7.3,r:1,k:"rock",s:1.6,nc:!0},{x:-6.1,z:8.5,r:1.1,k:"rock",s:2.3,nc:!0},{seg:[-9.5,5.9,-6,8.6],r:1.25,k:"none"},{x:10.2,z:2.2,r:.8,k:"lantern",s:2.3},{x:-1.6,z:-8.2,r:.8,k:"lantern",s:2.3},{x:9.2,z:-6.5,r:1.2,k:"rock",s:1.7},{x:2.2,z:-27,r:.95,k:"none"},{x:-5,z:-11.4,r:1.1,k:"none"},{x:5,z:-11.4,r:1.1,k:"none"},{x:-6.2,z:-46.5,r:1.2,k:"pillar",s:5.6},{x:7.6,z:-52.5,r:1.2,k:"pillar",s:4.4},{x:11.5,z:-44.5,r:1.1,k:"pillar",s:6.4},{x:3.4,z:-62,r:1.4,k:"rock",s:2.8},{x:-12,z:-55.5,r:1.5,k:"rock",s:3.2},{x:-3.2,z:-40.2,r:1,k:"rock",s:1.7},{x:13.5,z:-58.5,r:1.2,k:"rock",s:2.4},{x:-9.5,z:-62.5,r:.8,k:"lantern",s:2.6},{x:14.5,z:-50,r:.8,k:"lantern",s:2.6}],qe={start:new E(0,0,49),shrine1:new E(1.5,0,44),court:new E(0,0,0),gate:new E(0,0,-14.5),shrine2:new E(2.2,0,-27),arena:new E(0,0,-50)};function Jo(i,e,t){if(i.t==="circ")return Math.hypot(e-i.c[0],t-i.c[1])-i.r;if(i.t==="blob"){let h=1e9;for(let u of i.cs){let d=Math.hypot(e-u[0],t-u[1])-u[2],f=wt(.5+.5*(h-d)/i.k,0,1);h=Ht(h,d,f)-i.k*f*(1-f)}return h+(Ni(e*.21+7.3,t*.21-3.1,2)-.5)*2*i.wob}let n=i.a[0],s=i.a[1],r=i.b[0],a=i.b[1],o=r-n,c=a-s,l=wt(((e-n)*o+(t-s)*c)/(o*o+c*c),0,1);return Math.hypot(e-n-o*l,t-s-c*l)-i.r}function an(i,e,t=!1,n=!0){let s=1e9;for(let r of Ea)(t||r.on)&&(s=Math.min(s,Jo(r,i,e)));if(n&&s<2.5)for(let r of Zo){if(r.nc)continue;let a;if(r.seg){let[o,c,l,h]=r.seg,u=l-o,d=h-c,f=wt(((i-o)*u+(e-c)*d)/(u*u+d*d),0,1);a=r.r-Math.hypot(i-o-u*f,e-c-d*f)}else a=r.r-Math.hypot(i-r.x,e-r.z);a>s&&(s=a)}return s}function Ps(i,e,t,n=1){let s=2,r=Math.cos(t),a=Math.sin(t);for(;s<45&&an(i+r*s,e+a*s,!0,!1)<n;)s+=.2;return[i+r*s,e+a*s]}function pi(i,e){Ea.find(t=>t.id===i).on=e}function as(i,e=.4){for(let t=0;t<3;t++){let n=an(i.x,i.z)+e;if(n<=0)return;let s=.05,r=an(i.x+s,i.z)-an(i.x-s,i.z),a=an(i.x,i.z+s)-an(i.x,i.z-s),o=Math.hypot(r,a)||1;i.x-=r/o*n,i.z-=a/o*n}}function Wn(i,e){let t=an(i,e,!0);if(t<=0)return 0;let n=Et(0,9,t),s=Ni(i*.045+3.1,e*.045-1.7,4),r=Math.abs(Ni(i*.09,e*.09,3)-.5)*2;return n*(s*9+r*3.5+t*.22)+Et(0,1.5,t)*.25*Ur(i*.7,e*.7)}var v1=new $t({color:4539982,roughness:.92}),b1=new $t({color:2825500,roughness:.8}),y1=new $t({color:5904919,roughness:.7}),_1=new $t({color:2303534,roughness:.55,metalness:.1});var jf=`uniform float uT; uniform vec3 uFocus,uBox,uWind; attribute vec3 aSeed;
vec3 wrap(vec3 base, float fall, float drift){ vec3 p=base*uBox; p.xz+=uWind.xz*uT*drift; p.y-=uT*fall;
  p.xz=mod(p.xz-uFocus.xz+uBox.xz*.5,uBox.xz)-uBox.xz*.5+uFocus.xz; p.y=mod(p.y,uBox.y); return p; }`,Qo=class{constructor(e,t={}){this.u={uT:{value:0},uFocus:{value:new E},uWind:{value:new E(2.6,0,-.95)},uGust:{value:1}};let n=this.u,s=a=>{let o=new Float32Array(a*3);for(let c=0;c<o.length;c++)o[c]=Math.random();return o};{let a=t.snow??7e3,o=new rt;o.setAttribute("position",new nt(s(a),3)),o.setAttribute("aSeed",new nt(s(a),3));let c=new Ct({transparent:!0,depthWrite:!1,blending:dn,uniforms:{...n,uBox:{value:new E(46,20,46)}},vertexShader:jf+`varying float vF; void main(){ vec3 p=wrap(position,1.3+aSeed.x*1.5,.55+aSeed.y*.5);
          p.x+=sin(uT*(.7+aSeed.z)+aSeed.x*40.)*.45; p.z+=cos(uT*(.6+aSeed.x)+aSeed.y*40.)*.45; vF=smoothstep(0.,.5,p.y)*smoothstep(uBox.y,uBox.y-4.,p.y)*(.45+.55*aSeed.z);
          vec4 mv=viewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv; gl_PointSize=(.1+aSeed.z*.16)*420./-mv.z; }`,fragmentShader:"varying float vF; void main(){ float r=length(gl_PointCoord-.5); gl_FragColor=vec4(vec3(.62,.74,1.)*1.25, smoothstep(.5,.05,r)*vF*.85); }"});this.snow=new Li(o,c),this.snow.frustumCulled=!1,this.snow.renderOrder=7,e.add(this.snow)}let r=(a,o,c,l,h=1)=>{let u=new Ma,d=new Qt(1,1,h,1);u.index=d.index,u.setAttribute("position",d.attributes.position),u.setAttribute("uv",d.attributes.uv),u.setAttribute("aBase",new ri(s(a),3)),u.setAttribute("aSeed",new ri(s(a),3)),u.instanceCount=a;let f=new Ct({transparent:!0,depthWrite:!1,blending:dn,uniforms:{...n,uBox:{value:o}},vertexShader:jf+"attribute vec3 aBase; varying vec2 vUv; varying float vF;"+c,fragmentShader:"varying vec2 vUv; varying float vF;"+l}),m=new ke(u,f);return m.frustumCulled=!1,m.renderOrder=7,e.add(m),m};this.mist=r(t.mist??90,new E(64,1.5,64),`void main(){ vUv=uv; vec3 p=wrap(aBase,0.,.32+aSeed.x*.25); p.y=.35+aBase.y*1.5;
        float s=6.+aSeed.y*8.; vF=(.5+.5*sin(uT*.25+aSeed.z*6.28))*(.6+.4*aSeed.x); vec4 mv=viewMatrix*vec4(p,1.); mv.xy+=(position.xy)*vec2(s,s*.42); gl_Position=projectionMatrix*mv; }`,"void main(){ vec2 d=vUv-.5; float a=exp(-dot(d,d)*13.); gl_FragColor=vec4(vec3(.30,.36,.56),a*a*.16*vF); }"),this.wind=r(t.wind??46,new E(50,5,50),`void main(){ vUv=uv; vec3 p=wrap(aBase,0.,3.4+aSeed.x*2.2); p.y=.5+aBase.y*4.5;
        vec3 w=normalize(uWind); float len=3.5+aSeed.y*5.; float x=position.x; p+=w*x*len; p.y+=sin(x*5.+uT*2.6+aSeed.z*20.)*.22;
        vec3 side=normalize(cross(w,normalize(cameraPosition-p))); p+=side*position.y*(.035+.03*aSeed.z);
        vF=smoothstep(.62,.95,sin(uT*.42+aSeed.x*6.28+aBase.x*3.)*.5+.5); gl_Position=projectionMatrix*viewMatrix*vec4(p,1.); }`,"void main(){ float a=sin(3.14159*vUv.x); a*=a*(1.-abs(vUv.y-.5)*2.); gl_FragColor=vec4(vec3(.7,.8,1.),a*.22*vF); }",14)}update(e,t){this.u.uT.value=e,this.u.uFocus.value.copy(t)}};var $o=class extends ki{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Xh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new au(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=rs.extractUrlBase(e);a=rs.resolveURL(l,this.path)}else a=rs.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ba(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Qf){try{a[Ke.KHR_BINARY_GLTF]=new ou(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new pu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:a[u]=new Wh;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[u]=new cu(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[u]=new lu;break;case Ke.KHR_MESH_QUANTIZATION:a[u]=new hu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Sy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Gh=class{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new oe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],fn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Pr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Fi(h),l.distance=u;break;case"spot":l=new Oo(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Oi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Wh=class{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return Jt}extendParams(e,t,n){let s=[];e.color=new oe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],fn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Dt))}return Promise.all(s)}},qh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Xh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(o,o)}return Promise.all(r)}},jh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Yh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Kh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new oe(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],fn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Dt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Jh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new oe().setRGB(o[0],o[1],o[2],fn),Promise.all(r)}},Qh=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},$h=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new oe().setRGB(o[0],o[1],o[2],fn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Dt)),Promise.all(r)}},eu=class{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},tu=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},nu=class{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},iu=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},su=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ru=class{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},au=class{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==qn.TRIANGLES&&l.mode!==qn.TRIANGLE_STRIP&&l.mode!==qn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let x=new Ce,g=new E,p=new bt,b=new E(1,1,1),y=new As(m.geometry,m.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&b.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,x.compose(g,p,b));for(let v in c)if(v==="_COLOR_0"){let I=c[v];y.instanceColor=new ri(I.array,I.itemSize,I.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,c[v]);ht.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Qf="glTF",Ta=12,Yf={JSON:1313821514,BIN:5130562},ou=class{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ta),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ta,r=new DataView(e,Ta),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Yf.JSON){let l=new Uint8Array(e,Ta+a,o);this.content=n.decode(l)}else if(c===Yf.BIN){let l=Ta+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},cu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=du[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=du[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=kr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let x=f.attributes[m],g=c[m];g!==void 0&&(x.normalized=g)}u(f)},o,l,fn,d)})})}},lu=class{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},hu=class{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}},ec=class extends ts{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,x=m-l,g=-2*f+3*d,p=f-d,b=1-g,y=p-d+u;for(let v=0;v!==o;v++){let I=a[x+v+o],A=a[x+v+c]*h,R=a[m+v+o],L=a[m+v]*h;r[v]=b*I+y*A+g*R+p*L}return r}},wy=new bt,uu=class extends ec{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return wy.fromArray(r).normalize().toArray(r),r}},qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Kf={9728:Zt,9729:Gt,9984:Eh,9985:ia,9986:sr,9987:di},Zf={33071:Ti,33648:la,10497:Ci},Bh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},du={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},os={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ey={CUBICSPLINE:void 0,LINEAR:xr,STEP:gr},Hh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ty(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new $t({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:On})),i.DefaultMaterial}function Is(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Oi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ay(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Ry(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Cy(i){let e,t=i.extensions&&i.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Vh(t.attributes):e=i.indices+":"+Vh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Vh(i.targets[n]);return e}function Vh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function fu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Py(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Iy=new Ce,pu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Sy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new ss(this.options.manager):this.textureLoader=new zo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ba(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Is(r,o,s),Oi(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(rs.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Bh[s.type],o=kr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new nt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Bh[s.type],l=kr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,g;if(f&&f!==u){let p=Math.floor(d/f),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,y=t.cache.get(b);y||(x=new l(o,p*f,s.count*f/h),y=new wr(x,f/h),t.cache.add(b,y)),g=new Ts(y,c,d%f/h,m)}else o===null?x=new l(s.count*c):x=new l(o,d,s.count*c),g=new nt(x,c,m);if(s.sparse!==void 0){let p=Bh.SCALAR,b=kr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,I=new b(a[1],y,s.sparse.count*p),A=new l(a[2],v,s.sparse.count*c);o!==null&&(g=new nt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,L=I.length;R<L;R++){let S=I[R];if(g.setX(S,A[R*c]),c>=2&&g.setY(S,A[R*c+1]),c>=3&&g.setZ(S,A[R*c+2]),c>=4&&g.setW(S,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Kf[d.magFilter]||Gt,h.minFilter=Kf[d.minFilter]||di,h.wrapS=Zf[d.wrapS]||Ci,h.wrapT=Zf[d.wrapT]||Ci,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Zt&&h.minFilter!==Gt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(x){let g=new rn(x);g.needsUpdate=!0,d(g)}),t.load(rs.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Oi(u,a),u.userData.mimeType=a.mimeType||Py(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new xa,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ga,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return $t}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Ke.KHR_MATERIALS_UNLIT]){let u=s[Ke.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new oe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],fn),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Dt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ut);let h=r.alphaMode||Hh.OPAQUE;if(h===Hh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Hh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Jt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Jt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Jt){let u=r.emissiveFactor;o.emissive=new oe().setRGB(u[0],u[1],u[2],fn)}return r.emissiveTexture!==void 0&&a!==Jt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Dt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Oi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Is(s,u,r),u})}createUniqueName(e){let t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Jf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Cy(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Jf(new rt,l,t),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Ty(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let x=h[f],g=a[f],p,b=l[f];if(g.mode===qn.TRIANGLES||g.mode===qn.TRIANGLE_STRIP||g.mode===qn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new To(x,b):new ke(x,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===qn.TRIANGLE_STRIP?p.geometry=zh(p.geometry,qo):g.mode===qn.TRIANGLE_FAN&&(p.geometry=zh(p.geometry,Sa));else if(g.mode===qn.LINES)p=new Po(x,b);else if(g.mode===qn.LINE_STRIP)p=new Ar(x,b);else if(g.mode===qn.LINE_LOOP)p=new Io(x,b);else if(g.mode===qn.POINTS)p=new Li(x,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ry(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Oi(p,r),g.extensions&&Is(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Is(s,u[0],r),u[0];let d=new lt;r.extensions&&Is(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(kf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new _r(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Oi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Ce;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ao(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],m=s.samplers[f.sampler],x=f.target,g=x.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,b=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",b)),l.push(m),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],x=u[3],g=u[4],p=[];for(let b=0,y=d.length;b<y;b++){let v=d[b],I=f[b],A=m[b],R=x[b],L=g[b];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let S=n._createAnimationTracks(v,I,A,R,L);if(S)for(let _=0;_<S.length;_++)p.push(S[_])}return new Ui(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Iy)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new ma:l.length>1?h=new lt:l.length===1?h=l[0]:h=new ht,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Oi(h,r),r.extensions&&Is(n,h,r),r.matrix!==void 0){let u=new Ce;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new lt;n.name&&(r.name=s.createUniqueName(n.name)),Oi(r,n),n.extensions&&Is(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Mn||d instanceof rn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];os[r.path]===os.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(os[r.path]){case os.weights:l=Di;break;case os.rotation:l=Hn;break;case os.position:case os.scale:l=Vn;break;default:n.itemSize===1?l=Di:l=Vn;break}let h=s.interpolation!==void 0?Ey[s.interpolation]:xr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let m=new l(c[d]+"."+os[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=fu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Hn?uu:ec;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ly(i,e,t){let n=e.attributes,s=new Wt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new E(c[0],c[1],c[2]),new E(l[0],l[1],l[2])),o.normalized){let h=fu(kr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new E,c=new E;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=fu(kr[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new In;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Jf(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=du[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Ze.workingColorSpace!==fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Oi(i,e),Ly(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Ay(i,e.targets,t):i})}var $f=(function(){"use strict";var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,r,a=WebAssembly.instantiate(o(s),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var b=new Uint8Array(p.length),y=0;y<p.length;++y){var v=p.charCodeAt(y);b[y]=v>96?v-97:v>64?v-39:v+4}for(var I=0,y=0;y<p.length;++y)b[I++]=b[y]<60?n[b[y]]:(b[y]-60)*64+b[++y];return b.buffer.slice(0,I)}function c(p,b,y,v,I,A){var R=r.exports.sbrk,L=y+3&-4,S=R(L*v),_=R(I.length),D=new Uint8Array(r.exports.memory.buffer);D.set(I,_);var B=p(S,y,v,_,I.length);if(B==0&&A&&A(S,L,v),b.set(D.subarray(S,S+y*v)),R(S-R(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var b={object:new Worker(p),pending:0,requests:{}};return b.object.onmessage=function(y){var v=y.data;b.pending-=v.count,b.requests[v.id][v.action](v.value),delete b.requests[v.id]},b}function m(p){for(var b="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),y=new Blob([b],{type:"text/javascript"}),v=URL.createObjectURL(y),I=0;I<p;++I)u[I]=f(v);URL.revokeObjectURL(v)}function x(p,b,y,v,I){for(var A=u[0],R=1;R<u.length;++R)u[R].pending<A.pending&&(A=u[R]);return new Promise(function(L,S){var _=new Uint8Array(y),D=d++;A.pending+=p,A.requests[D]={resolve:L,reject:S},A.object.postMessage({id:D,count:p,size:b,source:_,mode:v,filter:I},[_.buffer])})}function g(p){a.then(function(){var b=p.data;try{var y=new Uint8Array(b.count*b.size);c(r.exports[b.mode],y,b.count,b.size,b.source,r.exports[b.filter]),self.postMessage({id:b.id,count:b.count,action:"resolve",value:y},[y.buffer])}catch(v){self.postMessage({id:b.id,count:b.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,b,y,v,I){c(r.exports.meshopt_decodeVertexBuffer,p,b,y,v,r.exports[l[I]])},decodeIndexBuffer:function(p,b,y,v){c(r.exports.meshopt_decodeIndexBuffer,p,b,y,v)},decodeIndexSequence:function(p,b,y,v){c(r.exports.meshopt_decodeIndexSequence,p,b,y,v)},decodeGltfBuffer:function(p,b,y,v,I,A){c(r.exports[h[I]],p,b,y,v,r.exports[l[A]])},decodeGltfBufferAsync:function(p,b,y,v,I){return u.length>0?x(p,b,y,h[v],l[I]):a.then(function(){var A=new Uint8Array(p*b);return c(r.exports[h[v]],A,p,b,y,r.exports[l[I]]),A})}}})();function mu(i){let e=new Map,t=new Map,n=i.clone();return ep(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function ep(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)ep(i.children[n],e.children[n],t)}var Dy=i=>String(i).replace(/^\.\//,"").split("?")[0];globalThis.__A&&wa.setURLModifier(i=>globalThis.__A[Dy(i)]||i);var xu=new $o;xu.setMeshoptDecoder($f);var gu=new Map,cs={n:0,done:0,on:null},vu=globalThis.__MINI;function Uy(i){let e=new TextEncoder().encode(JSON.stringify(i.j)),t=new Uint8Array(vu.b64(i.b)),n=e.length+3&-4,s=t.length+3&-4,r=new Uint8Array(20+n+8+s),a=new DataView(r.buffer);return a.setUint32(0,1179937895,!0),a.setUint32(4,2,!0),a.setUint32(8,r.length,!0),a.setUint32(12,n,!0),a.setUint32(16,1313821514,!0),r.fill(32,20,20+n),r.set(e,20),a.setUint32(20+n,s,!0),a.setUint32(24+n,5130562,!0),r.set(t,28+n),r.buffer}var ky=i=>vu?vu.get(i).then(e=>xu.parseAsync(Uy(e),"./")):xu.loadAsync(i);function Ls(i){return gu.has(i)||(cs.n++,gu.set(i,ky(i).catch(()=>null).then(e=>(cs.done++,cs.on&&cs.on(i),e)))),gu.get(i)}var bu={},Fy={coin:"l_coin",jade:"l_jade",gourd:"l_gourd",pill:"l_pill",page:"l_scroll"},Ny={coin:.42,jade:.46,gourd:.5,pill:.42,page:.6};async function np(){try{let i=await fetch("./assets/loot.json",{cache:"no-store"}).then(e=>e.json());await Promise.all(Object.entries(Fy).map(async([e,t])=>{if(!i[t])return;let n=await Ls("./assets/"+i[t]);n&&(bu[e]=n.scene)}))}catch{}}var Ds=[{name:"\u51E1",col:[.8,.9,1.1],css:"#d9d4c6"},{name:"\u826F",col:[.4,1,2.6],css:"#8fd0ff"},{name:"\u73CD",col:[2.8,1.8,.5],css:"#f0cf7a"}],yu={coin:{name:"\u94DC\u94B1"},jade:{name:"\u9B42\u7389"},gourd:{name:"\u4F24\u836F"},pill:{name:"\u56DE\u6C14\u4E39"},page:{name:"\u5251\u8C31\u6B8B\u9875"}},zi=(i,e,t=.3,n=.4)=>new $t({color:i,emissive:e,metalness:t,roughness:n});function Oy(i){if(bu[i]){let n=bu[i].clone(!0),s=new Wt().setFromObject(n),r=s.getSize(new E),a=s.getCenter(new E),o=new lt;n.position.sub(a),o.add(n),o.scale.setScalar(Ny[i]/Math.max(r.x,r.y,r.z)),n.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.material=l.material.clone(),l.material.emissive=new oe(16777215),l.material.emissiveMap=l.material.map,l.material.emissiveIntensity=.55,l.material.metalness=.2,l.material.roughness=.55)});let c=new lt;return c.add(o),c.userData.glb=!0,c}let e=new lt,t=(n,s,r=0,a=0,o=0)=>{let c=new ke(n,s);return c.position.set(r,a,o),c.castShadow=!0,e.add(c),c};if(i==="coin"){let n=zi(11569738,3810312,.9,.35);t(new Cr(.11,.035,8,20),n).scale.z=.5}else if(i==="jade"){let n=zi(5228442,813640,.1,.15);t(new Uo(.15),n).scale.set(.8,1.25,.8)}else if(i==="gourd"){let n=zi(12081706,3805700,.1,.5);t(new wn(.13,14,10),n,0,-.06),t(new wn(.085,12,8),n,0,.11),t(new Sn(.02,.03,.07,6),zi(2759184,0),0,.21),t(new Cr(.075,.012,6,14),zi(3106,1024),0,.045).rotation.x=Math.PI/2}else if(i==="pill"){let n=zi(15257738,8018448,.2,.2);t(new wn(.1,14,10),n),t(new Cr(.13,.008,6,24),zi(16773312,9071136)).rotation.x=1.2}else{let n=zi(14206874,6967312,0,.8);t(new si(.26,.34,.012),n).rotation.z=.1,t(new Sn(.018,.018,.3,6),zi(5909012,1574916),0,.17).rotation.z=Math.PI/2+.1}return e}var tc=class{constructor(e,t,n){this.scene=e,this.fx=t,this.audio=n,this.items=[]}drop(e,t,n=0,s=0){let r=Oy(t);r.scale.setScalar(r.userData.glb?1:t==="page"||n===2?1.5:1.25),r.position.set(e.x,.9,e.z),r.visible=!1,this.scene.add(r);let a=Math.random()*6.283,o=1.6+Math.random()*2.2;this.items.push({g:r,type:t,rar:n,t:-s,vel:new E(Math.cos(a)*o,5+Math.random()*2,Math.sin(a)*o),state:"air",beam:null,ring:null,seed:Math.random()*9})}clear(){for(let e of this.items)this.scene.remove(e.g),this.fx.kill(e.beam),this.fx.kill(e.beam2),this.fx.kill(e.beam3),this.fx.kill(e.ring);this.items.length=0}update(e,t,n,s){let r=[],a=this.fx;for(let o=this.items.length-1;o>=0;o--){let c=this.items[o],l=c.g,h=Ds[c.rar];if(c.t+=e,!(c.t<0))if(l.visible=!0,l.rotation.y+=e*(c.state==="air"?9:1.6),c.state==="air"){if(c.vel.y-=22*e,l.position.addScaledVector(c.vel,e),s(l.position,.5),l.rotation.x+=e*7,l.position.y<=.45&&c.vel.y<0){c.state="rest",l.position.y=.45,l.rotation.x=0,this.audio.drop(c.rar),a.emit(l.position,6+c.rar*10,{color:h.col,speed:2+c.rar*2,life:.5,size:.07}),c.ring=a.footRing(l.position),c.ring.u.uCol.value.setRGB(...h.col),c.ring.m.scale.setScalar(.45+c.rar*.2),c.ring.a=.5+c.rar*.25,c.ring.m.position.set(l.position.x,.05,l.position.z);let u=[2.6,9,20][c.rar],d=h.col.map(f=>f*2.4);c.beam=a.beam(l.position,d,u,.7+c.rar*.9),c.beam.a=.8+c.rar*.1,c.rar>0&&(c.beam2=a.beam(l.position,[2.2,2.2,2.2],u*.75,.3+c.rar*.2),c.beam2.a=1,c.beam3=a.beam(l.position,h.col,u*1.1,2.6+c.rar*2.4),c.beam3.a=.3,a.shock(l.position,1.6+c.rar*1.4,h.col,.5,.15),a.flash(l.position,c.rar===2?16765562:9425151,30+c.rar*40,.5),a.impact(l.position,1+c.rar*.8,h.col,1.2)),c.rar===2&&(a.pillar(l.position,1.4,9,h.col,.8),a.emit({x:l.position.x,y:.4,z:l.position.z},50,{color:h.col,speed:7,life:.9,size:.09,grav:-2,up:3}))}}else if(c.state==="rest")l.position.y=.5+Math.sin(t*2.4+c.seed)*.07,c.rar===2&&Math.floor(c.t/1.4)!==Math.floor((c.t-e)/1.4)&&a.shock(l.position,2.2,h.col,.7,.1),Math.random()<.06+.2*c.rar&&a.emit({x:l.position.x,y:.3,z:l.position.z},1,{color:h.col,speed:.4,life:.9,size:.06,grav:-2,drag:0}),c.t>.5&&Math.hypot(n.pos.x-l.position.x,n.pos.z-l.position.z)<2.6&&(c.state="pull",c.pv=2,a.kill(c.beam),a.kill(c.beam2),a.kill(c.beam3),a.release(c.ring,.2),c.beam=c.beam2=c.beam3=c.ring=null);else{c.pv+=40*e;let u=n.pos.x-l.position.x,d=1.1-l.position.y,f=n.pos.z-l.position.z,m=Math.hypot(u,d,f),x=Math.min(m,c.pv*e);l.position.x+=u/m*x,l.position.y+=d/m*x,l.position.z+=f/m*x,l.scale.multiplyScalar(Math.exp(-2*e)),m<.35&&(a.emit(l.position,10,{color:h.col,speed:3,life:.35,size:.07}),this.scene.remove(l),this.items.splice(o,1),r.push(c))}}return r}};var zy="varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.,1.); }",ip=`
uniform sampler2D tDepth; uniform vec2 uProj; uniform float uNear,uFar;
float linZ(float d){ float n=d*2.-1.; return 2.*uNear*uFar/(uFar+uNear-n*(uFar-uNear)); }
vec3 vpos(vec2 uv){ float z=linZ(texture2D(tDepth,uv).x); return vec3((uv*2.-1.)*uProj*z,-z); }
float ign(vec2 p){ return fract(52.9829189*fract(dot(p,vec2(.06711056,.00583715)))); }
`,_u=new rt;_u.setAttribute("position",new nt(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));_u.setAttribute("uv",new nt(new Float32Array([0,0,2,0,0,2]),2));var Bi=(i,e)=>new Ct({vertexShader:zy,fragmentShader:i,uniforms:e,depthTest:!1,depthWrite:!1}),_e=i=>({value:i}),nc=class{constructor(e,t,n,s,r={}){this.r=e,this.scene=t,this.cam=n,this.sun=s,this.scale=r.scale||1,this.q={ao:!0,vol:!0,bloom:!0,fxaa:!0,steps:18,...r.quality},e.toneMapping=fi,e.autoClear=!0,this.quad=new ke(_u,null),this.quad.frustumCulled=!1,this.qs=new Es,this.qs.add(this.quad),this.qc=new yr;let a={tDepth:_e(null),uProj:_e(new ce),uNear:_e(.5),uFar:_e(400)};this.dep=a,this.mAO=Bi(ip+`uniform float uRadius,uInt; uniform vec2 uRes; varying vec2 vUv;
      void main(){ vec3 p=vpos(vUv); if(-p.z>uFar*.6){ gl_FragColor=vec4(1.,-p.z,0.,1.); return; }
        vec3 n=normalize(cross(dFdx(p),dFdy(p))); float rs=uRadius/(-p.z)/uProj.y*.5; float a=ign(gl_FragCoord.xy)*6.2832; float s=0.;
        for(int i=0;i<12;i++){ float fi=(float(i)+.5)/12.; float th=a+float(i)*2.39996; vec2 o=vec2(cos(th),sin(th))*sqrt(fi)*rs*vec2(uRes.y/uRes.x,1.);
          vec3 v=vpos(vUv+o)-p; float vv=dot(v,v); float f=max(uRadius*uRadius-vv,0.); s+=f*f*f*max((dot(v,n)-.03)/(vv+.01),0.); }
        float ao=max(0.,1.-uInt*s*5./(pow(uRadius,6.)*12.)); gl_FragColor=vec4(ao,-p.z,0.,1.); }`,{...a,uRadius:_e(.9),uInt:_e(1.5),uRes:_e(new ce)}),this.mAOBlur=Bi(`uniform sampler2D tA; uniform vec2 uDir; varying vec2 vUv;
      void main(){ vec2 c=texture2D(tA,vUv).xy; float s=c.x*.2, w=.2;
        for(int i=1;i<=3;i++){ for(int k=-1;k<=1;k+=2){ vec2 q=texture2D(tA,vUv+uDir*float(i*k)*1.5).xy; float ww=(.22-.05*float(i))*smoothstep(.06,.0,abs(q.y-c.y)/max(c.y,1.)); s+=q.x*ww; w+=ww; } }
        gl_FragColor=vec4(s/w,c.y,0.,1.); }`,{tA:_e(null),uDir:_e(new ce)}),this.mVol=Bi(ip+`#include <packing>
`+pn+`
      uniform sampler2D tShadow; uniform mat4 uShadowM,uCamW; uniform vec3 uCamPos,uSunDir,uSunCol,uAmb,uWind; uniform float uTime,uSigma,uH,uHasShadow,uMax,uDense; varying vec2 vUv;
      uniform vec4 uLP[10]; uniform vec3 uLC[10];
      float n3(vec3 p){ return mix(vn(p.xz+p.y*.37),vn(p.xz*1.9+11.+p.y*.61),.4); }
      void main(){ vec3 vp=vpos(vUv); vec3 wp=(uCamW*vec4(vp,1.)).xyz; vec3 rd=wp-uCamPos; float L=length(rd); rd/=L; float tmax=min(L,uMax);
        const int N=\${STEPS}; float ds=tmax/float(N); float t=ds*ign(gl_FragCoord.xy+uTime*60.); float T=1.; vec3 S=vec3(0.);
        float ca=dot(rd,-uSunDir); float g=.62; float ph=.35+(1.-g*g)/pow(1.+g*g-2.*g*ca,1.5)*.28;
        for(int i=0;i<N;i++){ vec3 p=uCamPos+rd*t; float h=max(p.y,0.);
          float nz=n3(vec3(p.xz*.11,p.y*.25)+uWind*uTime); float low=exp(-h/uH)*smoothstep(.25,.75,nz)*2.2; float d=uSigma*uDense*(low+.10*exp(-h/14.));
          float vis=1.; if(uHasShadow>.5){ vec4 sc=uShadowM*vec4(p,1.); sc.xyz/=sc.w; if(sc.x>0.&&sc.x<1.&&sc.y>0.&&sc.y<1.&&sc.z<1.) vis=step(sc.z-.002,unpackRGBAToDepth(texture2D(tShadow,sc.xy))); }
          vec3 li=uSunCol*vis*ph+uAmb;
          for(int k=0;k<10;k++){ vec3 dl=uLP[k].xyz-p; float dd=dot(dl,dl); li+=uLC[k]*(1./(1.+dd*1.4))*smoothstep(uLP[k].w*uLP[k].w,0.,dd); }
          float a=1.-exp(-d*ds); S+=T*a*li; T*=1.-a; t+=ds; }
        float far=smoothstep(uMax*.6,uMax*3.,L)*.5; S+=T*far*uAmb*2.; T*=1.-far;
        gl_FragColor=vec4(S,T); }`.replace("${STEPS}",String(this.q.steps)),{...a,tShadow:_e(null),uShadowM:_e(new Ce),uCamW:_e(new Ce),uCamPos:_e(new E),uSunDir:_e(new E),uSunCol:_e(new oe(.5,.62,1)),uAmb:_e(new oe(.035,.04,.075)),uWind:_e(new E(.05,0,.02)),uTime:_e(0),uSigma:_e(.022),uH:_e(1.3),uHasShadow:_e(0),uMax:_e(70),uDense:_e(1),uLP:_e(Array.from({length:10},()=>new Ye(0,-99,0,1))),uLC:_e(Array.from({length:10},()=>new oe(0,0,0)))}),this.mVolBlur=Bi(`uniform sampler2D tA; uniform vec2 uDir; varying vec2 vUv;
      void main(){ vec4 s=texture2D(tA,vUv)*.28; s+=(texture2D(tA,vUv+uDir*1.4)+texture2D(tA,vUv-uDir*1.4))*.22; s+=(texture2D(tA,vUv+uDir*3.2)+texture2D(tA,vUv-uDir*3.2))*.14; gl_FragColor=s; }`,{tA:_e(null),uDir:_e(new ce)}),this.mComp=Bi(`uniform sampler2D tScene,tAO,tVol; uniform float uAO,uVol; varying vec2 vUv;
      void main(){ vec3 c=texture2D(tScene,vUv).rgb; float ao=mix(1.,texture2D(tAO,vUv).x,uAO); float l=dot(c,vec3(.2126,.7152,.0722));
        c*=mix(vec3(ao)*vec3(.94,.97,1.06),vec3(1.),smoothstep(.35,2.2,l)); vec4 v=mix(vec4(0.,0.,0.,1.),texture2D(tVol,vUv),uVol); gl_FragColor=vec4(c*v.a+v.rgb,1.); }`,{tScene:_e(null),tAO:_e(null),tVol:_e(null),uAO:_e(1),uVol:_e(1)}),this.mDown=Bi(`uniform sampler2D tA; uniform vec2 uTx; uniform float uFirst; varying vec2 vUv;
      vec3 S(vec2 o){ vec3 c=texture2D(tA,vUv+o*uTx).rgb; return uFirst>.5 ? c/(1.+dot(c,vec3(.2126,.7152,.0722))*.25) : c; }
      void main(){ vec3 a=S(vec2(-2,2)),b=S(vec2(0,2)),c=S(vec2(2,2)),d=S(vec2(-2,0)),e=S(vec2(0,0)),f=S(vec2(2,0)),g=S(vec2(-2,-2)),h=S(vec2(0,-2)),i=S(vec2(2,-2)),j=S(vec2(-1,1)),k=S(vec2(1,1)),l=S(vec2(-1,-1)),m=S(vec2(1,-1));
        gl_FragColor=vec4(e*.125+(a+c+g+i)*.03125+(b+d+f+h)*.0625+(j+k+l+m)*.125,1.); }`,{tA:_e(null),uTx:_e(new ce),uFirst:_e(0)}),this.mUp=Bi(`uniform sampler2D tA,tB; uniform vec2 uTx; uniform float uMix; varying vec2 vUv;
      void main(){ vec3 s=texture2D(tA,vUv).rgb*4.; s+=(texture2D(tA,vUv+vec2(uTx.x,0.)).rgb+texture2D(tA,vUv-vec2(uTx.x,0.)).rgb+texture2D(tA,vUv+vec2(0.,uTx.y)).rgb+texture2D(tA,vUv-vec2(0.,uTx.y)).rgb)*2.;
        s+=texture2D(tA,vUv+uTx).rgb+texture2D(tA,vUv-uTx).rgb+texture2D(tA,vUv+vec2(uTx.x,-uTx.y)).rgb+texture2D(tA,vUv+vec2(-uTx.x,uTx.y)).rgb; gl_FragColor=vec4(mix(texture2D(tB,vUv).rgb,s/16.,uMix),1.); }`,{tA:_e(null),tB:_e(null),uTx:_e(new ce),uMix:_e(.62)}),this.mGrade=Bi(`uniform sampler2D tA,tBloom; uniform float uBloom,uExp,uHit,uFlash,uDesat,uVig,uBlur,uCA,uTime; uniform vec3 uTint; varying vec2 vUv;
      vec3 aces(vec3 x){ return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.); }
      vec3 S(vec2 uv){ return texture2D(tA,uv).rgb; }
      void main(){ vec2 d=vUv-.5; float r=length(d); vec2 ca=d*(uCA+uHit*.012)*r*2.;
        vec3 c=vec3(S(vUv+ca).r,S(vUv).g,S(vUv-ca).b);
        if(uBlur>0.){ vec3 a=c; for(int i=1;i<=7;i++) a+=S(vUv-d*uBlur*float(i)*.014); c=mix(c,a/8.,smoothstep(.08,.55,r)); }
        vec3 b=texture2D(tBloom,vUv).rgb; c=mix(c,b,uBloom)+b*uBloom*.6; c*=uExp*uTint;
        c=aces(c); float l=dot(c,vec3(.2126,.7152,.0722));
        c*=mix(vec3(.86,.96,1.14),vec3(1.06,1.,.92),smoothstep(.03,.55,l));          // cool shadows, warm highlights
        c=mix(c,c*c*(3.-2.*c),.2); c=c*.985+vec3(.006,.007,.014);                     // gentle S-curve, lifted indigo blacks
        l=dot(c,vec3(.2126,.7152,.0722)); c=mix(c,vec3(l)*vec3(.92,.94,1.06),uDesat);
        c*=1.-uVig*smoothstep(.35,1.,r)*.55; c+=vec3(.9,.05,.03)*uHit*smoothstep(.3,.8,r)*.45; c+=uFlash;
        c=clamp(c,0.,1.); c=mix(c*12.92,1.055*pow(c,vec3(1./2.4))-.055,step(.0031308,c));
        gl_FragColor=vec4(c,dot(c,vec3(.299,.587,.114))); }`,{tA:_e(null),tBloom:_e(null),uBloom:_e(.075),uExp:_e(1),uHit:_e(0),uFlash:_e(0),uDesat:_e(0),uVig:_e(1),uBlur:_e(0),uCA:_e(.0012),uTime:_e(0),uTint:_e(new E(1,1,1))}),this.mFinal=Bi(`uniform sampler2D tA; uniform vec2 uTx; uniform float uTime,uFxaa; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }
      void main(){ vec4 M=texture2D(tA,vUv); vec3 c=M.rgb;
        if(uFxaa>.5){ float lNW=texture2D(tA,vUv+vec2(-1,-1)*uTx).a,lNE=texture2D(tA,vUv+vec2(1,-1)*uTx).a,lSW=texture2D(tA,vUv+vec2(-1,1)*uTx).a,lSE=texture2D(tA,vUv+vec2(1,1)*uTx).a,lM=M.a;
          float mn=min(lM,min(min(lNW,lNE),min(lSW,lSE))),mx=max(lM,max(max(lNW,lNE),max(lSW,lSE)));
          vec2 dir=vec2(-((lNW+lNE)-(lSW+lSE)),(lNW+lSW)-(lNE+lSE)); float red=max((lNW+lNE+lSW+lSE)*.03125,.0078); float rc=1./(min(abs(dir.x),abs(dir.y))+red);
          dir=clamp(dir*rc,-8.,8.)*uTx; vec3 A=.5*(texture2D(tA,vUv+dir*(1./3.-.5)).rgb+texture2D(tA,vUv+dir*(2./3.-.5)).rgb); vec3 B=A*.5+.25*(texture2D(tA,vUv-dir*.5).rgb+texture2D(tA,vUv+dir*.5).rgb);
          float lB=dot(B,vec3(.299,.587,.114)); c=(lB<mn||lB>mx)?A:B;
          vec3 bl=(texture2D(tA,vUv+vec2(uTx.x,0.)).rgb+texture2D(tA,vUv-vec2(uTx.x,0.)).rgb+texture2D(tA,vUv+vec2(0.,uTx.y)).rgb+texture2D(tA,vUv-vec2(0.,uTx.y)).rgb)*.25; c+=(c-bl)*.25*(1.-smoothstep(.05,.25,mx-mn)); }
        float l=dot(c,vec3(.299,.587,.114)); c+=(h(vUv*vec2(1920.,1080.)+fract(uTime)*91.)-.5)*.022*(1.-l*.6); c+=(h(vUv*731.+uTime)-.5)/255.;
        gl_FragColor=vec4(c,1.); }`,{tA:_e(null),uTx:_e(new ce),uTime:_e(0),uFxaa:_e(1)}),this.lights=[],this.setSize(e.domElement.width,e.domElement.height)}get u(){return this.mGrade.uniforms}get fog(){return this.mVol.uniforms}setSize(e,t){let n=Math.max(8,Math.round(e*this.scale)),s=Math.max(8,Math.round(t*this.scale));this.w=n,this.h=s,this.pw=e,this.ph=t;for(let h of this.rts||[])h.dispose();this.rts=[];let r=(h,u,d={})=>{let f=new ii(Math.max(2,h|0),Math.max(2,u|0),{type:Cs,minFilter:Gt,magFilter:Gt,depthBuffer:!1,...d});return this.rts.push(f),f};this.tScene=r(n,s,{depthBuffer:!0,samples:0}),this.tScene.depthTexture=new Sr(n,s,Pi),this.tScene.depthTexture.minFilter=this.tScene.depthTexture.magFilter=Zt;let a=n>>1,o=s>>1;this.tAO=[r(a,o),r(a,o)],this.tVol=[r(a,o),r(a,o)],this.tComp=r(n,s),this.down=[],this.up=[];let c=n>>1,l=s>>1;for(let h=0;h<6;h++)this.down.push(r(c,l)),this.up.push(r(c,l)),c>>=1,l>>=1;this.tLdr=r(n,s,{type:ni})}pass(e,t){this.quad.material=e,this.r.setRenderTarget(t),this.r.render(this.qs,this.qc)}render(e,t){let n=this.r,s=this.cam,r=this.dep;n.setRenderTarget(this.tScene),n.render(this.scene,s),r.tDepth.value=this.tScene.depthTexture,r.uNear.value=s.near,r.uFar.value=s.far,r.uProj.value.set(1/s.projectionMatrix.elements[0],1/s.projectionMatrix.elements[5]);let a=this.tAO[0].width,o=this.tAO[0].height;if(this.q.ao){this.mAO.uniforms.uRes.value.set(a,o),this.pass(this.mAO,this.tAO[0]);let h=this.mAOBlur.uniforms;h.tA.value=this.tAO[0].texture,h.uDir.value.set(1/a,0),this.pass(this.mAOBlur,this.tAO[1]),h.tA.value=this.tAO[1].texture,h.uDir.value.set(0,1/o),this.pass(this.mAOBlur,this.tAO[0])}if(this.q.vol){let h=this.mVol.uniforms,u=this.sun.shadow;h.uTime.value=t,h.uCamW.value.copy(s.matrixWorld),h.uCamPos.value.setFromMatrixPosition(s.matrixWorld),h.uSunDir.value.copy(this.sun.target.position).sub(this.sun.position).normalize(),h.uHasShadow.value=u.map?1:0,u.map&&(h.tShadow.value=u.map.texture,h.uShadowM.value.copy(u.matrix));let d=h.uCamPos.value,f=this.lights.filter(x=>x.intensity>.01).sort((x,g)=>x.position.distanceToSquared(d)-g.position.distanceToSquared(d));for(let x=0;x<10;x++){let g=f[x];g?(h.uLP.value[x].set(g.position.x,g.position.y,g.position.z,Math.min(g.distance||12,14)),h.uLC.value[x].copy(g.color).multiplyScalar(g.intensity*(g.userData.fogK??.05))):(h.uLP.value[x].set(0,-99,0,1),h.uLC.value[x].setRGB(0,0,0))}this.pass(this.mVol,this.tVol[0]);let m=this.mVolBlur.uniforms;m.tA.value=this.tVol[0].texture,m.uDir.value.set(1/a,0),this.pass(this.mVolBlur,this.tVol[1]),m.tA.value=this.tVol[1].texture,m.uDir.value.set(0,1/o),this.pass(this.mVolBlur,this.tVol[0])}let c=this.mComp.uniforms;if(c.tScene.value=this.tScene.texture,c.tAO.value=this.tAO[0].texture,c.tVol.value=this.tVol[0].texture,c.uAO.value=this.q.ao?1:0,c.uVol.value=this.q.vol?1:0,this.pass(this.mComp,this.tComp),this.q.bloom){let h=this.mDown.uniforms,u=this.tComp;for(let m=0;m<6;m++)h.tA.value=u.texture,h.uTx.value.set(1/u.width,1/u.height),h.uFirst.value=m===0?1:0,this.pass(this.mDown,this.down[m]),u=this.down[m];let d=this.mUp.uniforms,f=this.down[5];for(let m=4;m>=0;m--)d.tA.value=f.texture,d.tB.value=this.down[m].texture,d.uTx.value.set(1/f.width,1/f.height),this.pass(this.mUp,this.up[m]),f=this.up[m];this.u.tBloom.value=f.texture}else this.u.tBloom.value=this.tComp.texture;this.u.tA.value=this.tComp.texture,this.u.uTime.value=t,this.pass(this.mGrade,this.tLdr);let l=this.mFinal.uniforms;l.tA.value=this.tLdr.texture,l.uTx.value.set(1/this.w,1/this.h),l.uTime.value=t,l.uFxaa.value=this.q.fxaa?1:0,this.pass(this.mFinal,null)}};function sp(i,e={}){let t=new Ct({side:un,depthWrite:!1,fog:!1,uniforms:{uMoon:_e(i.clone().normalize()),uTime:_e(0),uEnv:_e(0),uZen:_e(new oe(.012,.018,.045)),uHor:_e(new oe(.1,.11,.21)),uMoonCol:_e(new oe(.75,.86,1)),uStorm:_e(0)},vertexShader:"varying vec3 vD; void main(){ vD=normalize(position); vec4 p=projectionMatrix*viewMatrix*vec4(position+cameraPosition,1.); gl_Position=p.xyww; }",fragmentShader:pn+`uniform vec3 uMoon,uZen,uHor,uMoonCol; uniform float uTime,uEnv,uStorm; varying vec3 vD;
      void main(){ vec3 d=normalize(vD); float up=max(d.y,0.); vec3 c=mix(uHor,uZen,pow(up,.45)); float md=dot(d,uMoon);
        c+=uMoonCol*(pow(max(md,0.),6.)*.10+pow(max(md,0.),60.)*.5);
        vec2 q=d.xz/(d.y+.18); float cl=fbm(q*1.3+uTime*.01+fbm(q*2.+3.)*.6); float cov=smoothstep(.42-.2*uStorm,.78,cl)*smoothstep(-.02,.2,d.y);
        vec3 cc=mix(vec3(.02,.025,.05),uMoonCol*.75,pow(max(md,0.),3.)*.9*(1.-smoothstep(.5,.9,cl))+.06); cc=mix(cc,vec3(.25,.05,.05),uStorm*.5);
        float st=step(.9975,h21(floor(d.xz/(d.y+.5)*260.)))*smoothstep(.1,.5,d.y)*(1.-cov); c+=vec3(st)*1.5*(1.-uEnv);
        c=mix(c,cc,cov*.9); if(uEnv<.5) c+=uMoonCol*smoothstep(.9992,.99965,md)*14.*(1.-cov*.7);
        c=mix(c,uHor*1.1,smoothstep(.12,-.05,d.y)); gl_FragColor=vec4(min(c,vec3(6.)),1.); }`}),n=new ke(new wn(1,32,16),t);return n.scale.setScalar(e.radius||350),n.frustumCulled=!1,n.renderOrder=-10,n}function rp(i,e,t,n=1){let s=new Mr(i),r=new Es,a=e.parent;r.add(e),e.material.uniforms.uEnv.value=1;let o=s.fromScene(r,0,.1,1e3);return e.material.uniforms.uEnv.value=0,a&&a.add(e),s.dispose(),t.environment=o.texture,t.environmentIntensity=n,o}function ap(i,e={}){let t={macro:.28,moss:0,ground:.5,scale:.35,mossCol:[.045,.07,.05],wet:0,...e};return i.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vPw; varying vec3 vNw;`).replace("#include <project_vertex>",`#include <project_vertex>
        vec4 pw4=vec4(transformed,1.);
        #ifdef USE_SKINNING
        pw4=bindMatrixInverse*(boneMatX*skinWeight.x+boneMatY*skinWeight.y+boneMatZ*skinWeight.z+boneMatW*skinWeight.w)*bindMatrix*pw4;
        #endif
        #ifdef USE_INSTANCING
        pw4=instanceMatrix*pw4;
        #endif
        vPw=(modelMatrix*pw4).xyz; vNw=normalize(mat3(modelMatrix)*objectNormal);`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPw; varying vec3 vNw; float pMoss; float pGr;
`+pn).replace("#include <map_fragment>",`#include <map_fragment>
        { float m1=vn(vPw.xz*${t.scale.toFixed(3)}+vPw.y*.21), m2=vn(vPw.xz*${(t.scale*3.7).toFixed(3)}+vPw.y*1.3+9.);
          diffuseColor.rgb*=1.+${t.macro.toFixed(3)}*((m1*.65+m2*.35)-.5)*2.;
          float up=smoothstep(.35,.9,normalize(vNw).y); pMoss=${t.moss.toFixed(3)}*up*smoothstep(.35,.7,m1*.6+m2*.4);
          diffuseColor.rgb=mix(diffuseColor.rgb,vec3(${t.mossCol.join(",")})*(.6+.8*m2),pMoss);
          pGr=${t.ground.toFixed(3)}*smoothstep(.9,0.,vPw.y)*(.5+.5*m2); diffuseColor.rgb*=1.-pGr*.6; }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=clamp(roughnessFactor+pMoss*.2+pGr*.1-${t.wet.toFixed(3)}*smoothstep(.4,.9,normalize(vNw).y)*.5,.05,1.);`)},i.customProgramCacheKey=()=>"ps"+JSON.stringify(t),i.needsUpdate=!0,i}var Un={x0:-110,z0:-115,size:220},By=new ss,ls=(i,e)=>{let t=By.load("./assets/tex/"+i);return t.wrapS=t.wrapT=Ci,t.anisotropy=8,e&&(t.colorSpace=Dt),t};function Hy(i,e,t,n,s,r){let a=t-i,o=n-e,c=wt(((s-i)*a+(r-e)*o)/(a*a+o*o),0,1);return Math.hypot(s-i-a*c,r-e-o*c)}function Vy(i,e){let t=1e9;for(let n of Ea)n.t==="seg"?t=Math.min(t,Hy(n.a[0],n.a[1],n.b[0],n.b[1],i,e)-2.3-.6*Ur(i*.3,e*.3)):t=Math.min(t,Jo(n,i,e)+.8);return t}var Gy=Ea.find(i=>i.id==="arena");function op(i,e,t){let n=an(i,e,!0),s=Vy(i,e),r=Ni(i*.07+3,e*.07-2,3),a=Ni(i*.31,e*.31,3),o=Et(.7,-.5,s+(a-.5)*1.4),l=Jo(Gy,i,e)<-1.2?1:.8*wt(Et(.52,.72,Ni(i*.11+40,e*.11,3))*o+Et(.6,.8,r)*.4,0,1),h=n>.2?Et(.2,1.6,n)*(.55+.45*Et(.3,.6,r)):(1-o)*.22*Et(.4,.62,a);return h*=1-Et(18,34,n)*.75,Wn(i,e)>6&&(h*=.3),t[0]=o,t[1]=l,t[2]=wt(h,0,1),t[3]=wt(.5+n/16,0,1),t}function Wy(i=1024){let e=new Uint8Array(i*i*4),t=[0,0,0,0];for(let s=0;s<i;s++)for(let r=0;r<i;r++){op(Un.x0+(r+.5)/i*Un.size,Un.z0+(s+.5)/i*Un.size,t);let a=(s*i+r)*4;e[a]=t[0]*255,e[a+1]=t[1]*255,e[a+2]=t[2]*255,e[a+3]=t[3]*255}let n=new Tr(e,i,i,_n);return n.minFilter=n.magFilter=Gt,n.needsUpdate=!0,n}function qy(i,e){let n=new Qt(Un.size,Un.size,320,320);n.rotateX(-Math.PI/2),n.translate(Un.x0+Un.size/2,0,Un.z0+Un.size/2);let s=n.attributes.position;for(let c=0;c<s.count;c++)s.setY(c,Wn(s.getX(c),s.getZ(c)));n.computeVertexNormals();let r=new $t({color:16777215,roughness:1,metalness:0}),a={tMask:{value:e.mask},tSd:{value:ls("floor_diff.jpg",!0)},tSn:{value:ls("floor_nor.jpg")},tSr:{value:ls("floor_rough.jpg")},tDd:{value:ls("trail_diff.jpg",!0)},tDn:{value:ls("trail_nor.jpg")},tDr:{value:ls("trail_rough.jpg")},tRd:{value:ls("rock_diff.jpg",!0)},tRn:{value:ls("rock_nor.jpg")}};r.onBeforeCompile=c=>{Object.assign(c.uniforms,a,{uTime:e.uTime,uExt:{value:new E(Un.x0,Un.z0,Un.size)},uCourt:{value:new Ye(qe.court.x,qe.court.z,13,0)},uArena:{value:new Ye(qe.arena.x,qe.arena.z,17.2,0)}}),c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp; varying vec3 vWn;`).replace("#include <project_vertex>",`#include <project_vertex>
vWp=(modelMatrix*vec4(transformed,1.)).xyz; vWn=normalize(mat3(modelMatrix)*objectNormal);`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
      varying vec3 vWp; varying vec3 vWn; uniform sampler2D tMask,tSd,tSn,tSr,tDd,tDn,tDr,tRd,tRn; uniform vec3 uExt; uniform vec4 uCourt,uArena; uniform float uTime; vec3 gN; float gR; float gWet; float gSn;
      `+pn+`
      float rings(vec2 p, vec4 c){ float r=length(p-c.xy); float inside=smoothstep(c.z,c.z-.6,r); float a=atan(p.y-c.y,p.x-c.x);
        float l=0.; for(int i=1;i<=5;i++){ float rr=c.z*float(i)/5.5; l=max(l,smoothstep(.07,.0,abs(r-rr))); }
        float seg=smoothstep(.05,.0,abs(fract(a*6./6.2832*floor(2.+r*.9))-.5)*r*.35)*step(c.z*.18,r); return max(l,seg*.8)*inside; }`).replace("#include <map_fragment>",`
        vec2 st=vWp.xz; vec4 mk=texture2D(tMask,(st-uExt.xy)/uExt.z); float n1=fbm(st*.33), n2=vn(st*2.7);
        float slope=1.-clamp(vWn.y,0.,1.); float rockK=smoothstep(.22,.5,slope+ (n1-.5)*.15);
        vec2 u1=st/5.2, u2=(mat2(.8,-.6,.6,.8)*st)/13.7+.37;
        vec3 sA=texture2D(tSd,u1).rgb, sB=texture2D(tSd,u2).rgb; float tb=smoothstep(.35,.65,vn(st*.09)); vec3 stone=mix(sA,sB,tb*.55);
        vec3 dirt=texture2D(tDd,st/6.3).rgb*vec3(.62,.6,.7); vec3 rock=texture2D(tRd,vec2(st.x+st.y*.3,vWp.y*1.1+st.y*.5)/7.).rgb*vec3(.5,.52,.62);
        float rough0=texture2D(tSr,u1).g; float pav=smoothstep(.42,.58,mk.r+(rough0-.5)*.35+(n2-.5)*.2);
        float rg=0.; stone*=vec3(.62,.66,.78)*(1.-rg*.55);
        float moss=smoothstep(.5,.78,n1)*(1.-rough0*.0)*.7*(1.-mk.g*.5); stone=mix(stone,vec3(.035,.06,.04)*(.6+n2),moss*smoothstep(.3,.75,texture2D(tSr,u1*1.0).g));
        vec3 alb=mix(dirt,stone,pav); alb=mix(alb,rock,rockK); alb*=.8+.4*fbm(st*.06+9.);
        float hStone=1.-rough0; gWet=mk.g*smoothstep(.62,.3,hStone+ (n2-.5)*.3)*(1.-rockK)*mix(.55,1.,pav);
        float inA=smoothstep(.86,.97,mk.g); gWet=max(gWet,inA*.92);
        alb*=mix(1.,.42,gWet);
        // settled snow: drifts in patches, gathers off the worn stone and in the low joints between slabs, never on standing water or steep rock
        gSn=smoothstep(.50,.78,fbm(st*.17+3.3)*.62+vn(st*1.4)*.26+(1.-pav)*.22+smoothstep(.55,.2,hStone)*.2)*(1.-rockK)*(1.-smoothstep(.5,.95,gWet))*(1.-inA);
        gSn*=.55+.45*vn(st*6.); alb=mix(alb,vec3(.56,.63,.80)*(.85+.3*vn(st*9.)),gSn*.78); gWet*=1.-gSn; diffuseColor.rgb=alb;
        vec3 nS=mix(texture2D(tSn,u1).xyz,texture2D(tSn,u2).xyz,tb*.55)*2.-1., nD=texture2D(tDn,st/6.3).xyz*2.-1., nR=texture2D(tRn,vec2(st.x+st.y*.3,vWp.y*1.1+st.y*.5)/7.).xyz*2.-1.;
        gN=mix(mix(nD,nS,pav),nR,rockK); gN.xy*=mix(1.5,.12,gWet); gN.xy+=vec2(dFdx(rg),dFdy(rg))*0.;
        if(gWet>.3){ vec2 rp=st*.9+vec2(uTime*.11,uTime*.07), rq=st*2.3-vec2(uTime*.16,-uTime*.09); float e=.12;
          vec2 gr=vec2(vn(rp+vec2(e,0.))-vn(rp-vec2(e,0.)),vn(rp+vec2(0.,e))-vn(rp-vec2(0.,e)))+.5*vec2(vn(rq+vec2(e,0.))-vn(rq-vec2(e,0.)),vn(rq+vec2(0.,e))-vn(rq-vec2(0.,e)));
          gN.xy+=gWet*gr*.55; }
        gR=mix(mix(mix(texture2D(tDr,st/6.3).g*.95+.05,rough0*.9+.1,pav),.92,rockK),.82,gSn); gN.xy*=1.-gSn*.7;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(gR,.035,gWet);`).replace("#include <normal_fragment_maps>","normal=normalize(normal+(viewMatrix*vec4(gN.x,0.,-gN.y,0.)).xyz*.9);")};let o=new ke(n,r);return o.receiveShadow=!0,i.add(o),o}function Xy(i,e,t){let s=[],r=[],a=[];for(let x=0;x<3;x++){let g=x*2.1+.4,p=.1+x*.09,b=1-x*.16,y=Math.cos(g)*.05,v=Math.sin(g)*.05,I=s.length/3;for(let A=0;A<=5;A++){let R=A/5,L=R<.6?.011*(1-R*.4):.011+Math.sin((R-.6)/.4*Math.PI)*.03,S=Math.cos(g)*p*R*R,_=Math.sin(g)*p*R*R,D=-Math.sin(g)*L,B=Math.cos(g)*L;if(s.push(y+S-D,R*b,v+_-B,y+S+D,R*b,v+_+B),r.push(0,R,1,R),A<5){let O=I+A*2;a.push(O,O+1,O+2,O+1,O+3,O+2)}}}let o=new rt;o.setAttribute("position",new it(s,3)),o.setAttribute("uv",new it(r,2)),o.setIndex(a),o.computeVertexNormals();let c=new $t({color:16777215,roughness:.85,side:Ut});c.onBeforeCompile=x=>{Object.assign(x.uniforms,{uTime:e.uTime,uPush:e.uPush,uWind:e.uWind}),x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform vec4 uPush[8]; uniform vec3 uWind; varying float vV; varying float vSeed; varying float vGust;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
objectNormal=normalize(mix(objectNormal,vec3(0.,1.,0.),.75));`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vec3 o=(instanceMatrix*vec4(0.,0.,0.,1.)).xyz; float sc=length(instanceMatrix[1].xyz); float k=uv.y*uv.y; vSeed=fract(o.x*12.9898+o.z*78.233); vV=uv.y;
        float ph=dot(o.xz,uWind.xz)*.22; float gust=sin(uTime*.9-ph)*.5+.5; gust=gust*gust; float g2=sin(uTime*.37-ph*.31+1.7)*.5+.5; vGust=gust*g2;
        vec2 bend=uWind.xz*(.08+.34*gust*g2)*uWind.y+vec2(sin(uTime*3.1+vSeed*40.),cos(uTime*2.6+vSeed*31.))*.035*(1.+gust);
        for(int i=0;i<8;i++){ vec2 d=o.xz-uPush[i].xy; float dd=length(d); float f=smoothstep(uPush[i].z,0.,dd)*uPush[i].w; bend+=normalize(d+1e-4)*f*.7; transformed.y-=k*f*.35/sc; }
        // bend in world space, then back into the blade's local frame
        float sxz=length(instanceMatrix[0].xyz); vec3 bl=transpose(mat3(instanceMatrix))*vec3(bend.x,0.,bend.y)/(sxz*sxz)*min(sc,1.); transformed.xz+=bl.xz*k*1.0; transformed.y-=k*dot(bend,bend)*.28;`),x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
varying float vV; varying float vSeed; varying float vGust;`).replace("#include <map_fragment>",`
        vec3 base=vec3(.028,.03,.05), mid=mix(vec3(.16,.15,.24),vec3(.24,.21,.30),vSeed), tip=mix(vec3(.62,.58,.80),vec3(.86,.84,.98),vSeed);
        vec3 c=mix(base,mid,smoothstep(0.,.45,vV)); c=mix(c,tip,smoothstep(.55,.9,vV)); c*=.8+.5*vGust*smoothstep(.4,1.,vV); diffuseColor.rgb=c;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(.9,.55,smoothstep(.6,1.,vV));`)};let l=new As(o,c,t);l.receiveShadow=!0,l.frustumCulled=!1;let h=Dr(4411),u=new ht,d=[0,0,0,0],f=0,m=0;for(;f<t&&m<t*14;){m++;let x=(h()-.5)*150,g=66-h()*152;if(op(x,g,d),h()>d[2])continue;let p=Wn(x,g);if(Math.abs(Wn(x+1,g)-p)+Math.abs(Wn(x,g+1)-p)>.55+h()*.5)continue;let y=d[3]<.5?.25+h()*.3:.65+h()*.85+d[2]*.25;u.position.set(x,Wn(x,g)-.04,g),u.rotation.set((h()-.5)*.25,h()*6.283,(h()-.5)*.25);let v=.8+h()*.6;u.scale.set(v,y,v),u.updateMatrix(),l.setMatrixAt(f++,u.matrix)}return l.count=f,l.instanceMatrix.needsUpdate=!0,i.add(l),l}function jy(i){let e=Dr(909),t=new $t({color:790040,roughness:1,flatShading:!0}),n=new lt;for(let s=0;s<3;s++)for(let r=0;r<16+s*6;r++){let a=(r+e()*.7)/(16+s*6)*Math.PI*2,o=95+s*70+e()*30,c=45+s*45+e()*60,l=18+e()*30+s*12,h=new Rr(l,c,7,6,!0),u=h.attributes.position,d=e()*50;for(let m=0;m<u.count;m++){let x=u.getY(m)/c+.5,g=1+(Ni(u.getX(m)*.05+d,u.getY(m)*.04+u.getZ(m)*.05,3)-.5)*1.1*(1-x*.3);u.setX(m,u.getX(m)*g+(e()-.5)*2*x),u.setZ(m,u.getZ(m)*g),u.setY(m,u.getY(m)*(.85+.3*Ur(u.getX(m)*.08,d)))}h.computeVertexNormals();let f=new ke(h,t);f.position.set(Math.cos(a)*o,c*.42-8,Math.sin(a)*o-5),f.rotation.y=e()*6,n.add(f)}return i.add(n),n}var Mu={};async function cp(i){return await Promise.all(Object.entries(i).map(async([e,t])=>{let n=await Ls("./assets/"+t);n&&(Mu[e]=n.scene)})),Mu}function lp(i,e,t,n,s,r=0,a={}){let o=Mu[e];if(!o)return null;let c=o.clone(!0),l=new Wt().setFromObject(c),h=l.getSize(new E),u=s/(a.byW?Math.max(h.x,h.z):h.y),d=new lt;return c.position.set(-(l.min.x+l.max.x)/2,-l.min.y,-(l.min.z+l.max.z)/2),d.add(c),d.scale.setScalar(u),d.position.set(t,(a.y??Wn(t,n))-(a.sink||0),n),d.rotation.set(a.rx||0,r,a.rz||0),i.add(d),c.traverse(f=>{f.isMesh&&(f.castShadow=a.shadow!==!1,f.receiveShadow=!0,f.material=f.material.clone(),f.material.metalness=0,f.material.roughness=.88,f.material.map&&(f.material.map.anisotropy=8),a.tint&&f.material.color.multiply(new oe(a.tint)),ap(f.material,{macro:.22,moss:a.moss??.3,ground:a.ground??.7,scale:.5}))}),d}function hp(i,e={}){let t={uTime:{value:0},mask:Wy(),uWind:{value:new E(.94,1,-.34)},uPush:{value:Array.from({length:8},()=>new Ye(0,0,.001,0))}},n=qy(i,t),s=Xy(i,t,e.grass??22e4),r=jy(i);return{U:t,ground:n,grass:s,mountains:r,pushers:t.uPush.value,update(a){t.uTime.value=a},setPush(a,o,c,l,h){t.uPush.value[a].set(o,c,l,h)}}}function ic(i,e,t,n,s=24,r=14,a=16749128){let o=new Fi(a,s,r,1.8);o.position.set(e,t,n),o.userData.fogK=.06,o.userData.base=s,i.add(o);let c=new ke(new wn(.13,10,8),new Jt({color:new oe(16,6.5,1.6)}));return c.position.set(e,t,n),i.add(c),o}function up(i,e){let t=globalThis.__CFG||{},n=t.trees||22,s=t.rocks||64,r=Dr(20261111),a=[],o=()=>r()*6.283,c=i.userData.occluders=[],l=(u,d,f=o(),m=2.3)=>{e(i,"lantern",u,d,m,f,{moss:.4})&&a.push(ic(i,u,Wn(u,d)+m*.66,d))};for(let[u,d]of[[-3.9,47],[5.6,36.5],[-3.3,27],[3.6,18.5]])l(u,d);e(i,"stele",3.9,50.5,1.9,.5,{moss:.5}),e(i,"stele",-4.6,33,1.6,2.4,{moss:.5,rz:.15});for(let[u,d]of[[-4.4,43],[-3.7,38.5],[6.2,30],[5.4,24.5],[-4.6,21]])e(i,"post",u,d,2.5,o(),{moss:.1,ground:.4});{let u=e(i,"shrine",8.2,43.5,4.6,-1.15,{moss:.35});u&&(a.push(ic(i,7.6,2.1,43.2,34,16)),c.push({o:u,x:8.2,z:43.5,r:3.6,a:1}))}for(let u of Zo)u.k!=="none"&&(u.k==="lantern"?l(u.x,u.z,o(),u.s):u.obj=e(i,u.k,u.x,u.z,u.s,o(),u.k==="rock"?{moss:.45,sink:u.s*.1}:u.k==="tree"?{moss:0,ground:.3,sink:.3}:{moss:.4,rz:(r()-.5)*.2}));for(let u of[.75,2.3,3.75,5.6]){let[d,f]=Ps(0,0,u,1.6);e(i,"statue",d,f,3.7,Math.atan2(-d,-f),{moss:.45})}for(let u of[.1,1.2,2.95,4.35,5.05]){let[d,f]=Ps(0,0,u,.9);l(d,f)}for(let u of[1.75,3.3,6]){let[d,f]=Ps(0,0,u,1);e(i,"post",d,f,2.4,o(),{moss:.1})}let h=e(i,"gate",qe.gate.x,qe.gate.z,15.5,0,{byW:!0,moss:.25});h&&c.push({o:h,x:qe.gate.x,z:qe.gate.z,r:6.5,a:1}),e(i,"beast",-5,-11.4,2.4,.25,{moss:.4}),e(i,"beast",5,-11.4,2.4,-.25,{moss:.4}),e(i,"censer",qe.shrine2.x,qe.shrine2.z,1.5,.3,{moss:0,ground:.3}),a.push(ic(i,qe.shrine2.x,1.35,qe.shrine2.z,12,9)),l(-5.4,-20.5),l(5.5,-24.5);{let u=e(i,"shrine",-8.6,-25.5,4.2,1.2,{moss:.35});u&&(a.push(ic(i,-8,1.9,-25.3,30,15)),c.push({o:u,x:-8.6,z:-25.5,r:3.4,a:1}))}for(let u=0;u<13;u++){let d=u/13*6.283+.28;if(Math.abs(d-Math.PI/2)<.4)continue;let[f,m]=Ps(qe.arena.x,qe.arena.z,d,2.2+r()*1.5);e(i,"pillar",f,m,5+r()*4.5,o(),{rz:(r()-.5)*.16,moss:.35})}for(let u of[.9,2.25,3.9,5.5]){let[d,f]=Ps(qe.arena.x,qe.arena.z,u,.9);l(d,f,o(),2.6)}for(let u of[1.15,1.99]){let[d,f]=Ps(qe.arena.x,qe.arena.z,u,1.8);e(i,"statue",d,f,3.9,Math.atan2(-(d-qe.arena.x),-(f-qe.arena.z)),{moss:.45})}e(i,"hall",0,-83,34,0,{byW:!0,tint:9211048,moss:.3});for(let u=0,d=0;u<600&&d<n;u++){let f=(r()-.5)*84,m=62-r()*138,x=an(f,m,!0);x<3||x>17||m>52&&Math.abs(f)<11||(e(i,"tree",f,m,6.5+r()*6,o(),{moss:0,ground:.3,sink:.3}),d++)}for(let u=0,d=0;u<3e3&&d<s;u++){let f=(r()-.5)*78,m=62-r()*138,x=an(f,m,!0);if(x<1.7||x>9||m>53&&Math.abs(f)<10||r()>(x<4?.85:.35))continue;let g=2.2+r()*r()*6+(x>5?2.5:0);e(i,"rock",f,m,g,o(),{moss:.45,sink:g*.08}),d++}for(let u of Zo)u.obj&&(u.k==="tree"||u.k==="pillar")&&c.push({o:u.obj,x:u.x,z:u.z,r:u.k==="tree"?4.6:1.3,a:1});return a}var Yy=`
uniform float uType,uProg,uArc,uAlpha,uDir,uTime; uniform vec3 uCol; varying vec2 vUv;`+pn+`
void main(){ vec2 p=vUv*2.-1.; float r=length(p); float ang=atan(p.x,p.y); float a=0.; vec3 col=uCol;
  float ink=.75+.5*fbm(p*4.+uTime*.3);
  if(uType<.5){        // circle: thin rim, dashed inner ring turning, embers of noise filling up to the progress front
    float rim=smoothstep(.03,.0,abs(r-.95)); float dash=step(.5,fract(ang*9./6.2832+uTime*.25))*smoothstep(.018,.0,abs(r-.84))*.6;
    float n=fbm(p*3.2+vec2(0.,-uTime*.7)); float fr=uProg*.95; float front=smoothstep(.07,.0,abs(r-fr))*step(r,.95);
    float fill=step(r,fr)*(.05+.34*n*n)*smoothstep(0.,.5,r); a=rim+dash+front*1.2+fill; col*=1.+2.*front;
  } else if(uType<1.5){ // fan: radial streaks flow outward, bright arc marks the progress
    float inA=smoothstep(uArc*.5,uArc*.5-.1,abs(ang)); float st=vn(vec2(ang*16.,r*3.5-uTime*2.2)); float fr=uProg*.95;
    float rim=smoothstep(.03,.0,abs(r-.95))*inA; float sides=smoothstep(.035,.0,abs(abs(ang)-uArc*.5)*r)*step(r,.95)*smoothstep(.1,.3,r);
    float front=smoothstep(.06,.0,abs(r-fr))*inA; float fill=inA*step(r,fr)*(.04+.4*st*st*st)*smoothstep(.08,.4,r); a=rim+sides*.8+front*1.2+fill; col*=1.+2.*front;
  } else if(uType<2.5){ // lane: a blade shape tapering to a point, streaks racing along it
    float al=p.y*.5+.5; float w=mix(.92,.0,smoothstep(.6,1.,al))*smoothstep(-.02,.12,al); float ax=abs(p.x); float inside=smoothstep(w,w-.18,ax)*step(.001,w);
    float st=vn(vec2(p.x*7.,al*9.-uTime*4.5)); float edge=smoothstep(.14,.0,abs(ax-w+.05))*step(ax,w+.02);
    float front=smoothstep(.035,.0,abs(al-uProg))*inside; float fill=inside*(step(al,uProg)*(.06+.45*st*st*st)+.03); a=edge*.9+front*1.3+fill; col*=1.+2.*front;
  } else if(uType<3.5){ // expanding shock ring
    float w=.07; float d=abs(r-uProg); a=smoothstep(w,.0,d)*(1.-uProg*.6)*ink*1.4; col*=1.+2.*smoothstep(w*.4,0.,d);
  } else {              // sword slash crescent
    float band=smoothstep(.38,.62,r)*smoothstep(1.,.86,r); float lead=mix(-uArc*.5,uArc*.5,uProg)*uDir;
    float behind=(lead-ang)*uDir; float sw=smoothstep(uArc*.9,0.,behind)*step(0.,behind)*step(abs(ang),uArc*.5+.05);
    a=band*sw*(1.-smoothstep(.6,1.,uProg))*1.6; col*=1.+3.*smoothstep(.25,0.,behind)*band;
  }
  gl_FragColor=vec4(col,a*uAlpha); }`,Ky="varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",dp=new Qt(2,2);dp.rotateX(-Math.PI/2);var Aa=class{constructor(e,t,n){this.mat=new Ct({vertexShader:Ky,fragmentShader:Yy,transparent:!0,depthWrite:!1,blending:n?dn:ei,uniforms:{uType:{value:t},uProg:{value:0},uArc:{value:2},uAlpha:{value:1},uDir:{value:1},uTime:{value:0},uCol:{value:new oe(1,.1,.08)}}}),this.mesh=new ke(dp,this.mat),this.mesh.renderOrder=3,e.add(this.mesh),this.scene=e,this.alive=!0,this.t=0,this.dur=1,this.fade=.2,this.auto=!1}place(e,t,n,s,r=.06){return this.mesh.position.set(e.x,r,e.z),this.mesh.rotation.y=t+Math.PI,this.mesh.scale.set(n,1,s),this}set prog(e){this.mat.uniforms.uProg.value=e}kill(e=.18){this.auto=!0,this.t=0,this.dur=e,this.fadeOnly=!0}remove(){this.alive=!1,this.scene.remove(this.mesh),this.mat.dispose()}},sc=class{constructor(e,t,n=[.7,.85,1.6],s=18){this.rig=t,this.N=s,this.on=!1,this.pos=new Float32Array(s*2*3),this.al=new Float32Array(s*2);let r=this.geo=new rt;r.setAttribute("position",new nt(this.pos,3)),r.setAttribute("aA",new nt(this.al,1));let a=[];for(let o=0;o<s-1;o++){let c=o*2;a.push(c,c+1,c+2,c+1,c+3,c+2)}r.setIndex(a),this.mat=new Ct({transparent:!0,depthWrite:!1,side:Ut,blending:dn,uniforms:{uCol:{value:new oe(...n)}},vertexShader:"attribute float aA; varying float vA; void main(){ vA=aA; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 uCol; varying float vA; void main(){ gl_FragColor=vec4(uCol*vA,vA); }"}),this.mesh=new ke(r,this.mat),this.mesh.frustumCulled=!1,e.add(this.mesh),this.a=new E,this.b=new E,this.life=new Float32Array(s),this.scene=e}update(e){let t=this.N,n=this.pos;n.copyWithin(6,0,(t-1)*6),this.life.copyWithin(1,0,t-1),this.rig.base(this.a),this.rig.tip(this.b),n[0]=this.a.x,n[1]=this.a.y,n[2]=this.a.z,n[3]=this.b.x,n[4]=this.b.y,n[5]=this.b.z,this.life[0]=this.on?1:0;for(let s=0;s<t;s++){this.life[s]=Math.max(0,this.life[s]-e*5.5);let r=this.life[s]*(1-s/t);this.al[s*2]=0,this.al[s*2+1]=r*r}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aA.needsUpdate=!0}dispose(){this.scene.remove(this.mesh),this.geo.dispose(),this.mat.dispose()}},rc=class{constructor(e){this.scene=e,this.flats=[],this.bolts=[],this.lights=[];let t=this.N=2600;this.pp=new Float32Array(t*3),this.pv=new Float32Array(t*3),this.pc=new Float32Array(t*3),this.ps=new Float32Array(t),this.pl=new Float32Array(t),this.pm=new Float32Array(t),this.pg=new Float32Array(t),this.pk=new Float32Array(t*3),this.head=0;let n=this.pgeo=new rt;n.setAttribute("position",new nt(this.pp,3)),n.setAttribute("aC",new nt(this.pc,3)),n.setAttribute("aS",new nt(this.ps,1));let s=r=>new Ct({transparent:!0,depthWrite:!1,blending:r,vertexShader:"attribute vec3 aC; attribute float aS; varying vec3 vC; void main(){ vC=aC; vec4 mv=modelViewMatrix*vec4(position,1.); gl_Position=projectionMatrix*mv; gl_PointSize=aS*(300./-mv.z); }",fragmentShader:"varying vec3 vC; void main(){ float r=length(gl_PointCoord-.5); gl_FragColor=vec4(vC,smoothstep(.5,.1,r)); }"});this.points=new Li(n,s(dn)),this.points.frustumCulled=!1,this.points.renderOrder=6,e.add(this.points);for(let r=0;r<6;r++){let a=new Fi(16777215,0,18,1.6);e.add(a),this.lights.push({l:a,t:0,dur:0,i0:0})}this.tmp=new E}emit(e,t,n={}){let{color:s=[2,1.2,.5],speed:r=5,life:a=.5,size:o=.12,up:c=1,grav:l=9,spread:h=1,dir:u=null,drag:d=2}=n;for(let f=0;f<t;f++){let m=this.head=(this.head+1)%this.N,x=m*3;this.pp[x]=e.x+(Math.random()-.5)*.3*h,this.pp[x+1]=e.y+(Math.random()-.5)*.3*h,this.pp[x+2]=e.z+(Math.random()-.5)*.3*h;let g=Math.random()*6.283,p=Math.random(),b=r*(.3+Math.random()*.9),y=Math.cos(g)*(1-p*.5),v=p*c+.1,I=Math.sin(g)*(1-p*.5);u&&(y=y*.6+u.x,v=v*.6+u.y,I=I*.6+u.z),this.pv[x]=y*b,this.pv[x+1]=v*b,this.pv[x+2]=I*b;let A=.6+Math.random()*.7;this.pk[x]=s[0]*A,this.pk[x+1]=s[1]*A,this.pk[x+2]=s[2]*A,this.pl[m]=this.pm[m]=a*(.5+Math.random()*.8),this.ps[m]=o*(.5+Math.random()),this.pg[m]=l+d*100}}flash(e,t,n,s=.2){let r=this.lights[0];for(let a of this.lights)if(a.t>=a.dur){r=a;break}r.l.color.set(t),r.l.position.set(e.x,(e.y||0)+1.5,e.z),r.t=0,r.dur=s,r.i0=n}telegraph(e,t,n,s,r,a=2,o=[1,.08,.06]){let c=new Aa(this.scene,e,!0).place(t,n,s,r);return c.mat.uniforms.uArc.value=a,c.mat.uniforms.uAlpha.value=.9,c.mat.uniforms.uCol.value.setRGB(o[0]*2.2,o[1]*2.2,o[2]*2.2),this.flats.push(c),c}ring(e,t,n=.7,s=[1.6,1.1,.8]){let r=new Aa(this.scene,3,!0).place(e,0,t,t,.12);return r.auto=!0,r.dur=n,r.mat.uniforms.uCol.value.setRGB(...s),this.flats.push(r),r}slash(e,t,n,s,r=1,a=[.8,1,2.2],o=.22,c=1){let l=new Aa(this.scene,4,!0).place(e,t,n,n,c);return l.auto=!0,l.dur=o,l.mat.uniforms.uArc.value=s,l.mat.uniforms.uDir.value=r,l.mat.uniforms.uCol.value.setRGB(...a),l.mat.side=Ut,this.flats.push(l),l}lightning(e,t=26){let n=[],s=e.x,r=e.z,a=11;for(let l=0;l<=a;l++)n.push(new E(s,l/a*t,r)),s+=(Math.random()-.5)*1.6,r+=(Math.random()-.5)*1.6;let o=new va(n,!1,"catmullrom",.1),c=new ke(new ko(o,40,.09,5,!1),new Jt({color:new oe(7,8,14),transparent:!0,blending:dn,depthWrite:!1}));this.scene.add(c),this.bolts.push({m:c,t:0}),this.flash(e,11191551,900,.35),this.emit({x:e.x,y:.2,z:e.z},40,{color:[1.5,2,4],speed:9,life:.6,size:.1}),this.ring(e,4.2,.45,[.9,1.2,2.6])}update(e,t){let n=this.N;for(let s=0;s<n;s++){if(this.pl[s]<=0){this.ps[s]!==0&&(this.ps[s]=0);continue}let r=s*3;this.pl[s]-=e;let a=this.pg[s]%100,o=Math.floor(this.pg[s]/100),c=Math.exp(-o*e);this.pv[r]*=c,this.pv[r+2]*=c,this.pv[r+1]=this.pv[r+1]*c-a*e,this.pp[r]+=this.pv[r]*e,this.pp[r+1]+=this.pv[r+1]*e,this.pp[r+2]+=this.pv[r+2]*e,this.pp[r+1]<.03&&(this.pp[r+1]=.03,this.pv[r+1]*=-.3);let l=Math.max(0,this.pl[s]/this.pm[s]);this.pc[r]=this.pk[r]*l,this.pc[r+1]=this.pk[r+1]*l*l,this.pc[r+2]=this.pk[r+2]*l*l}this.pgeo.attributes.position.needsUpdate=!0,this.pgeo.attributes.aC.needsUpdate=!0,this.pgeo.attributes.aS.needsUpdate=!0;for(let s=this.flats.length-1;s>=0;s--){let r=this.flats[s];if(r.mat.uniforms.uTime.value=t,r.auto){r.t+=e;let a=r.t/r.dur;r.fadeOnly?r.mat.uniforms.uAlpha.value=Math.max(0,1-a):r.prog=a,a>=1&&(r.remove(),this.flats.splice(s,1))}}for(let s=this.bolts.length-1;s>=0;s--){let r=this.bolts[s];r.t+=e,r.m.material.opacity=(r.t<.06?1:Math.max(0,1-(r.t-.06)/.2))*(Math.random()<.25?.4:1),r.t>.28&&(this.scene.remove(r.m),r.m.geometry.dispose(),this.bolts.splice(s,1))}for(let s of this.lights)s.t<s.dur?(s.t+=e,s.l.intensity=s.i0*Math.max(0,1-s.t/s.dur)):s.l.intensity=0}};var Zy=new ss,Jy=i=>{let e=Zy.load("./assets/fx/"+i);return e.colorSpace=Dt,e.anisotropy=4,e},Qy="varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",xp=new Qt(1,1);xp.rotateX(-Math.PI/2);var oc=new Qt(2,2);oc.rotateX(-Math.PI/2);function Su(i=2.7,e=.3,t=1,n=48){let s=[],r=[],a=[];for(let c=0;c<=n;c++){let l=c/n,h=(l-.5)*i;for(let u=0;u<2;u++){let d=u?t:e;s.push(Math.sin(h)*d,0,Math.cos(h)*d),r.push(l,u)}}for(let c=0;c<n;c++){let l=c*2;a.push(l,l+1,l+2,l+1,l+3,l+2)}let o=new rt;return o.setAttribute("position",new it(s,3)),o.setAttribute("uv",new it(r,2)),o.setIndex(a),o}var fp=Su(2.7,.52,1),$y=Su(3.2,.45,1.04),e_=Su(Math.PI*2,.35,1,72);function t_(){let i=new Sn(.075,.062,1.75,4,1);i.rotateY(Math.PI/4),i.scale(1,1,.22),i.translate(0,.4+.875,0);let e=new Sn(.062,0,.4,4,1);e.rotateY(Math.PI/4),e.scale(1,1,.22),e.translate(0,.2,0);let t=new si(.36,.06,.08);t.translate(0,2.18,0);let n=new Sn(0,.07,.16,4);n.rotateY(Math.PI/4),n.scale(1.6,1,.5),n.translate(0,2.07,0);let s=new Sn(.026,.03,.4,6);s.translate(0,2.4,0);let r=new wn(.05,8,6);return r.scale(1,.7,1),r.translate(0,2.63,0),Ko([i,e,t,n,s,r].map(a=>a.toNonIndexed()))}var n_=t_();function i_(){let i=new Qt(1,1);i.translate(0,-.35,0);let e=i.clone();return e.rotateY(Math.PI/2),Ko([i,e])}var pp=i_(),vp=new Sn(1,1.12,1,28,1,!0);vp.translate(0,.5,0);var s_="uniform float uA,uT,uHead,uEr,uL,uDir,uInk,uSeed; uniform vec3 uCol; varying vec2 vUv;"+pn+`
void main(){ float u=uDir>0.?vUv.x:1.-vUv.x, v=vUv.y;
  float behind=uHead-u; float tail=clamp(1.-behind/uL,0.,1.)*smoothstep(-.03,.02,behind);
  float w=pow(max(sin(3.14159*u),0.),.55); float vv=clamp((v-(1.-w))/max(w,.001),0.,1.);     // blade tapers to both ends, outer edge stays put
  float prof=mix(pow(vv,2.6),smoothstep(0.,.7,vv),uInk)*smoothstep(1.,.92,vv);
  float n=fbm(vec2(u*mix(3.2,5.,uInk)-uT*mix(1.8,.15,uInk)+uSeed, v*mix(11.,5.5,uInk)+uSeed*.7));
  float shape=prof*tail; float m=clamp(shape*1.3,0.,1.)*smoothstep(uEr,uEr+.25,n*1.25+shape*.35-.3);
  if(uInk>.5){ gl_FragColor=vec4(uCol,m*uA*.9*smoothstep(.12,.5,n+prof*.25)); return; }
  float core=smoothstep(.8,.95,vv)*smoothstep(1.,.95,vv)*tail*tail;
  vec3 c=mix(uCol,vec3(1.),clamp(core*.9,0.,1.))*(.55+2.4*core+.5*shape)*(.65+.7*n);
  gl_FragColor=vec4(c,m*uA); }`,mp="uniform float uA,uT,uProg,uMode,uAim; uniform vec3 uCol,uCol2; varying vec2 vUv;"+pn+`
float ln(float d,float w){ return smoothstep(w,0.,abs(d)); }
float poly(vec2 p,float n,float rad,float rot){ float an=atan(p.y,p.x)+rot, s=6.2832/n; return cos(floor(.5+an/s)*s-an)*length(p)-rad*cos(3.14159/n); }
void main(){ vec2 p=vUv*2.-1.; float r=length(p), a=atan(p.y,p.x), c=0.;
  if(uMode>.5){            // the mark under the hero: a thin broken ring and a wedge toward the aim
    float gaps=smoothstep(.0,.08,abs(fract((a+uT*.35)/6.2832*3.)-.5)-.07);
    c=ln(r-.86,.035)*gaps*.8+ln(r-.74,.012)*.35; float da=abs(mod(a-uAim+3.14159,6.2832)-3.14159);
    c+=smoothstep(.34,.0,da)*ln(r-.96,.05)*1.6; gl_FragColor=vec4(uCol*(c*1.6),c*uA); return; }
  c+=ln(r-.955,.016)+ln(r-.90,.008);
  float ar=a+uT*.45; float cx=fract(ar/6.2832*30.), id=floor(ar/6.2832*30.); float band=step(.79,r)*step(r,.885);          // rune band
  vec2 q=vec2(cx,(r-.79)/.095); float h1=h21(vec2(id,1.3)),h2=h21(vec2(id,2.7)),h3=h21(vec2(id,4.1));                 // seal-script-like strokes
  float gl=step(abs(q.x-(.3+.4*step(.5,h1))),.07)*step(.15,q.y)*step(q.y,.85)+step(abs(q.y-(.25+.5*h2)),.09)*step(.2,q.x)*step(q.x,.8)
    +step(abs(q.y-(.2+.6*h3)),.08)*step(.25,q.x)*step(q.x,.8)*step(.4,h3)+step(abs(q.x-.5),.06)*step(.5,h2)*step(.3,q.y)*step(q.y,.9); c+=min(gl,1.)*band*.7;
  c+=ln(r-.77,.008);
  c+=ln(poly(p,4.,.755,-uT*.3),.010)+ln(poly(p,4.,.755,-uT*.3+.7854),.010);                                               // counter-rotating squares
  c+=ln(r-.47,.010); c+=ln(fract((a-uT*.7)/6.2832*24.)-.5,.10)*step(.405,r)*step(r,.47)*.7;
  c+=ln(poly(p,3.,.455,uT*.55),.009)+ln(poly(p,3.,.455,uT*.55+3.14159),.009);                                              // hexagram
  c+=ln(r-.13,.012)+exp(-r*r*60.)*.35;
  c*=1.-smoothstep(uProg*1.2-.2,uProg*1.2,r);                                                                               // drawn from the centre outward
  float fill=smoothstep(1.,0.,r)*.09*step(r,.96)*uProg, pulse=ln(r-fract(uT*.55),.06)*.3*step(r,.95);
  float fl=.8+.2*vn(vec2(a*5.,uT*3.));
  vec3 col=mix(uCol2,uCol,smoothstep(.15,.7,r))*(c*.62*fl+fill+pulse); gl_FragColor=vec4(col,(c+fill+pulse)*uA); }`,r_="varying vec3 vN; varying float vY; void main(){ vN=normalize(normalMatrix*normal); vY=position.y; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",a_="uniform float uA,uDis,uSeed; uniform vec3 uCol; varying vec3 vN; varying float vY;"+pn+`
void main(){ float n=vn(vec2(vY*7.+uSeed,uSeed*3.)); if(n<uDis*1.35-.12+(1.-vY/2.7)*.25*uDis) discard;
  float rim=1.-abs(normalize(vN).z); float edge=smoothstep(.0,.12,n-(uDis*1.35-.12));
  vec3 c=uCol*(.32+.9*rim*rim)+vec3(1.)*(.06+(1.-edge)*uDis*2.); gl_FragColor=vec4(c,uA); }`,gp="uniform float uA,uT,uSeed; uniform vec3 uCol; varying vec2 vUv;"+pn+`
void main(){ float x=vUv.x*2.-1., al=vUv.y; float hd=(al-.86)*7.; float core=exp(-(x*x*9.+hd*hd)*1.6);
  float k=clamp(al/.86,0.,1.); float n=fbm(vec2(x*2.5+uSeed,al*5.+uT*7.));
  float tail=pow(k,2.2)*exp(-x*x*(7.+34.*(1.-k)))*step(al,.9)*(.35+1.1*n)*smoothstep(.0,.3,n+k-.35);
  vec3 c=uCol*(tail*1.3+core*1.6)+vec3(1.)*core*1.2; gl_FragColor=vec4(c,clamp(core+tail,0.,1.)*uA); }`,o_="uniform float uA,uT,uK,uSeed; uniform vec3 uCol; varying vec2 vUv;"+pn+`
void main(){ vec2 p=vUv*2.-1.; float r=length(p), a=atan(p.y,p.x); float wob=vn(vec2(r*4.,uSeed))*.9, cr=0.;
  for(int i=0;i<2;i++){ float nn=i==0?7.:13.; float d=abs(fract(a*nn/6.2832+wob*(i==0?.5:.9)+uSeed)-.5)*r*6.2832/nn; cr+=smoothstep(.035,.0,d)*smoothstep(i==0?1.:.6,.05,r)*(i==0?1.:.6); }
  cr*=smoothstep(uK*1.6+.15,uK*1.6-.2,r); float glow=exp(-r*r*7.)*(1.-uK); float ringw=smoothstep(.05,0.,abs(r-(.25+uK*.75)))*step(r,.98);
  float heat=1.-uK; vec3 c=uCol*(cr*1.0*heat+glow*.45+ringw*.6*heat)+vec3(1.)*glow*heat*.12; gl_FragColor=vec4(c,clamp(cr*heat+glow+ringw*heat,0.,1.)*uA); }`,c_="uniform float uA,uT,uK,uSeed; uniform vec3 uCol; varying vec2 vUv;"+pn+`
void main(){ float n=fbm(vec2(vUv.x*9.+uSeed,vUv.y*2.6-uT*5.)); float body=pow(1.-vUv.y,1.3)*smoothstep(0.,.06,vUv.y);
  float er=mix(.12,1.,smoothstep(.2,1.,uK)); float m=body*smoothstep(er,er+.3,n*1.5-.22)*.6; float hot=smoothstep(.55,.9,n)*body;
  gl_FragColor=vec4(uCol*(.7+1.3*hot)+vec3(1.)*hot*.6,m*uA); }`,hs=(i,e,t={})=>new Ct({vertexShader:t.vs||Qy,fragmentShader:i,transparent:!0,depthWrite:!1,side:t.side??Ut,blending:t.normal?ei:dn,uniforms:{uA:{value:0},uT:{value:0},uSeed:{value:Math.random()*40},uCol:{value:new oe},...e}}),l_=new E(0,1,0),h_=new E(0,-1,0),ac=new E,u_=new E,cc=class extends rc{constructor(e){super(e);let t=Jy("ink.jpg");this.ink=[];for(let n=0;n<6;n++){let s=t.clone();s.repeat.set(1/3,1/2),s.offset.set(n%3/3,1-(Math.floor(n/3)+1)/2),s.needsUpdate=!0,this.ink.push(s)}this.sprites=[],this.swords=[],this.fxs=[]}_add(e,t={}){let n={m:e,u:e.material.uniforms,t:0,dur:t.dur??.3,hold:!!t.hold,fin:t.fin??.04,rel:-1,relDur:.25,tick:t.tick,a:t.a??1,kids:t.kids||[],fade:t.fade??0};e.renderOrder=t.order??5,this.scene.add(e);for(let s of n.kids)this.scene.add(s.m);return this.fxs.push(n),n}release(e,t=.25){if(e){if(e.q){e.dur===1/0&&(e.dur=e.t+t,e.fin=0,e.fadeFrom=e.t);return}e.rel<0&&(e.rel=e.t,e.relDur=t,e.hold=!1,e.dur=e.t+t)}}kill(e){e&&(e.hold=!1,e.dur=0)}sprite(e,t,n,s,r,a={}){let o=new Jt({map:a.alpha?null:e,alphaMap:a.alpha?e:null,transparent:!0,depthWrite:!1,blending:a.add===!1?ei:dn,side:Ut}),c=a.color||[1,1,1];o.color.setRGB(c[0],c[1],c[2]);let l=new ke(xp,o);l.position.set(t.x,a.y??.08,t.z),l.rotation.y=n,l.renderOrder=a.order??4,this.scene.add(l);let h={q:l,m:o,t:0,dur:a.dur??.3,sx:s,sz:r,s0:a.s0??1,s1:a.s1??1,spin:a.spin||0,fin:a.in??.1,a:a.a??1};return a.hold&&(h.dur=1/0),l.scale.set(s*h.s0,1,r*h.s0),this.sprites.push(h),h}inkSplat(e,t=2.2,n={}){let s=this.ink[Math.random()*6|0];return this.sprite(s,e,Math.random()*6.283,t,t,{y:.045+Math.random()*.01,dur:n.dur??3.2,color:n.color||[.01,.01,.02],add:!1,alpha:!0,s0:.55,s1:1,in:.03,a:n.a??.85,order:2})}inkBurst(e,t=3,n=2){for(let s=0;s<t;s++)this.inkSplat({x:e.x+(Math.random()-.5)*n,z:e.z+(Math.random()-.5)*n},n*(.6+Math.random()*.8))}ghost(e){this.emit({x:e.x,y:1,z:e.z},26,{color:[.25,.5,.9],speed:1.6,life:.55,size:.16,grav:-.5,spread:3}),this.inkSplat(e,2.4,{dur:1.6,a:.6})}_arc(e,t,n,s,r,a){let o=new ke(e,hs(s_,{uHead:{value:0},uEr:{value:-.35},uL:{value:a.L??.8},uDir:{value:r},uInk:{value:a.ink?1:0}},{normal:a.ink}));return o.material.uniforms.uCol.value.setRGB(...a.color),o.position.set(t.x,a.y,t.z),o.rotation.set(a.tilt||0,n,(a.roll??.16)*r,"YXZ"),o.scale.set(s,1,s),o}crescent(e,t,n,s=1,r={}){let a=r.power??1,o=r.y??1.05,c=(r.dur??.24)*1.35,l=r.red?[2.6*a,.5*a,.32*a]:[.55*a,1.15*a,2.3*a],h=(x,g)=>(p,b)=>{p.u.uHead.value=Et(0,x,b)*1.18,p.u.uEr.value=Ht(-.35,1.1,Et(g,1,b))},u=this._add(this._arc($y,e,t,n*1.06,s,{ink:!0,y:o-.04,color:r.red?[.05,0,0]:[.005,.008,.02],L:1.4,roll:r.roll}),{dur:c*2.4,tick:h(.2,.3),order:4}),d=this._add(this._arc(fp,e,t,n,s,{y:o,color:l,roll:r.roll}),{dur:c,tick:h(.4,.22)}),f=new E(Math.sin(t),0,Math.cos(t)),m=new E(-f.z,0,f.x).multiplyScalar(-s);for(let x=0;x<3;x++){let g=(x/2-.5)*1.6*s;ac.set(e.x+Math.sin(t-g)*n*.9,o,e.z+Math.cos(t-g)*n*.9),this.emit(ac,r.red?4:5,{color:r.red?[2.6,.6,.3]:[1,1.8,3],speed:5*a,life:.3,size:.07,dir:m,grav:3})}return d||u}wave(e,t,n,s={}){let r=this._arc(fp,e,t,n,1,{y:s.y??1,color:s.color||[.6,1.3,2.6],L:99,roll:s.roll??0});return r.material.uniforms.uHead.value=1.2,r.material.uniforms.uEr.value=-.2,this._add(r,{hold:!0,fin:.06,tick:a=>{a.rel>=0&&(a.u.uEr.value=Ht(-.2,1.1,(a.t-a.rel)/a.relDur))}})}shock(e,t,n=[.6,1.3,2.6],s=.45,r=.25){let a=this._arc(e_,e,Math.random()*6.283,t*.25,1,{y:r,color:n,L:99,roll:0});return a.material.uniforms.uHead.value=1.3,this._add(a,{dur:s,fin:.02,tick:(o,c)=>{let l=t*(.25+.75*(1-Math.pow(1-c,3)));a.scale.set(l,1,l),o.u.uEr.value=Ht(-.3,1.1,Et(.15,1,c))}})}beam(e,t,n,s=.55){let r=this.bolt(t,n,s);return r.m.position.set(e.x,.05,e.z),r.m.rotation.x=Math.PI,r.a=.7,r}circle(e,t,n={}){let s=n.color||(n.gold?[2.4,1.5,.5]:[.6,1.4,2.6]),r=n.gold?[2.6,2.1,1.2]:[s[0]*.7+.5,s[1]*.7+.5,s[2]*.7+.5],a=new ke(oc,hs(mp,{uProg:{value:0},uMode:{value:0},uAim:{value:0},uCol2:{value:new oe(...r)}}));a.material.uniforms.uCol.value.setRGB(...s),a.position.set(e.x,.07,e.z),a.scale.set(t,1,t);let o=n.draw??.35,c=0;return this._add(a,{hold:n.hold,dur:n.dur??1,fin:.08,order:3,tick:(l,h,u)=>{if(l.u.uProg.value=Math.min(1,l.t/o),n.motes!==!1)for(c+=u*t*5;c>1;){c--;let d=Math.random()*6.283,f=t*(.3+.65*Math.random());this.emit(ac.set(a.position.x+Math.cos(d)*f,.1,a.position.z+Math.sin(d)*f),1,{color:s,speed:.5,life:.9,size:.07,grav:-2.4,drag:0})}}})}footRing(e){let t=new ke(oc,hs(mp,{uProg:{value:1},uMode:{value:1},uAim:{value:0},uCol2:{value:new oe}}));return t.material.uniforms.uCol.value.setRGB(.35,.75,1.2),t.position.set(e.x,.06,e.z),t.scale.set(.95,1,.95),this._add(t,{hold:!0,order:3})}bolt(e=[1.6,.45,3.2],t=2.4,n=.9){let s=new ke(pp,hs(gp,{}));return s.material.uniforms.uCol.value.setRGB(...e),s.scale.set(n,t,n),this._add(s,{hold:!0,fin:.05,order:6})}aim(e,t){e.m.quaternion.setFromUnitVectors(l_,u_.copy(t).normalize())}impact(e,t=1.4,n=[.7,1.4,2.8],s=.9){let r=new ke(oc,hs(o_,{uK:{value:0}}));return r.material.uniforms.uCol.value.setRGB(...n),r.position.set(e.x,.05+Math.random()*.01,e.z),r.rotation.y=Math.random()*6.283,r.scale.set(t,1,t),this._add(r,{dur:s,fin:.02,order:3,tick:(a,o)=>{a.u.uK.value=o}})}pillar(e,t=1.6,n=5,s=[1.5,.4,3],r=.7){let a=new ke(vp,hs(c_,{uK:{value:0}}));return a.material.uniforms.uCol.value.setRGB(...s),a.position.set(e.x,0,e.z),a.scale.set(t*.5,n,t*.5),this.impact(e,t*1.5,s,r*1.6),this.ring(e,t*1.8,.4,s),this.flash(e,new oe(...s).multiplyScalar(.4),120,.3),this.emit({x:e.x,y:.3,z:e.z},40,{color:s,speed:6,life:.8,size:.1,grav:-6,up:3}),this.inkSplat(e,t*2.2,{dur:2.4}),this._add(a,{dur:r,fin:.03,tick:(o,c)=>{o.u.uK.value=c,a.scale.set(t*(.45+.3*c),n*(.4+.6*Et(0,.3,c)),t*(.45+.3*c))}})}dropSword(e,t=0,n=null,s={}){let r=s.gold?[2.6,1.5,.4]:[.55,1.3,2.6],a=(s.scale??1)*.95,o=s.height??15,c=new ke(n_,hs(a_,{uDis:{value:0}},{vs:r_,side:On}));c.material.uniforms.uCol.value.setRGB(...r),c.material.uniforms.uA.value=1,c.scale.setScalar(a),c.visible=!1,c.renderOrder=5;let l=new ke(pp,hs(gp,{}));l.material.uniforms.uCol.value.setRGB(...r),l.material.uniforms.uA.value=1,l.scale.set(.85,6.5,.85),l.rotation.x=Math.PI,l.position.y=.6,c.add(l);let h=s.lean??Math.random()*6.283,u=(s.slant??.3)*(.6+Math.random()*.8),d=new E(e.x,-.28*a,e.z),f=new E(e.x+Math.cos(h)*o*u,o,e.z+Math.sin(h)*o*u);c.quaternion.setFromUnitVectors(h_,ac.copy(d).sub(f).normalize()),this.scene.add(c),this.swords.push({m:c,st:l,start:f,end:d,pos:new E(e.x,0,e.z),t:-t,fall:s.fall??.2,stay:s.stay??.5,cb:n,hit:!1,big:s.big,col:r,sc:a})}update(e,t){super.update(e,t);for(let n=this.fxs.length-1;n>=0;n--){let s=this.fxs[n];s.t+=e;let r=s.hold?0:Math.min(1,s.t/Math.max(1e-4,s.dur)),a=Math.min(1,s.t/s.fin);s.rel>=0&&(a*=Math.max(0,1-(s.t-s.rel)/s.relDur)),s.u.uA.value=a*s.a,s.u.uT.value=s.t,s.tick&&s.tick(s,r,e),!s.hold&&s.t>=s.dur&&(this.scene.remove(s.m),s.m.material.dispose(),this.fxs.splice(n,1))}for(let n=this.sprites.length-1;n>=0;n--){let s=this.sprites[n];s.t+=e;let r=s.dur===1/0?Math.min(1,s.t/.3):Math.min(1,s.t/s.dur),a=s.s0+(s.s1-s.s0)*(1-Math.pow(1-Math.min(1,r*(s.dur===1/0?1:1.6)),3));s.q.scale.set(s.sx*a,1,s.sz*a),s.q.rotation.y+=s.spin*e;let o=s.fin>0?Math.min(1,s.t/(s.fin*(s.dur===1/0?1:s.dur))):1;if(s.dur!==1/0){let c=s.fadeFrom??s.dur*.35;o*=1-Math.max(0,(s.t-c)/Math.max(1e-4,s.dur-c))}s.m.opacity=Math.max(0,o)*s.a,s.dur!==1/0&&s.t>=s.dur&&(this.scene.remove(s.q),s.m.dispose(),this.sprites.splice(n,1))}for(let n=this.swords.length-1;n>=0;n--){let s=this.swords[n];if(s.t+=e,s.t<0)continue;s.m.visible=!0;let r=s.st.material.uniforms;if(r.uT.value=s.t,s.t<s.fall){let a=s.t/s.fall;s.m.position.lerpVectors(s.start,s.end,a*a),r.uA.value=Math.min(1,a*4)}else{let a=s.t-s.fall;s.hit||(s.hit=!0,s.m.position.copy(s.end),this.impact(s.pos,(s.big?2:1.25)*s.sc,s.col,s.big?1.1:.75),this.emit({x:s.pos.x,y:.15,z:s.pos.z},s.big?30:9,{color:s.col,speed:s.big?9:5,life:.45,size:.08}),s.big&&(this.ring(s.pos,3.4,.35,s.col),this.flash(s.pos,10473727,40,.18),this.inkSplat(s.pos,3)),s.cb&&s.cb(s.pos)),r.uA.value=Math.max(0,1-a/.14),s.st.visible=a<.14,s.m.rotation.z+=Math.sin(a*90)*.012*Math.max(0,1-a/.25);let o=Math.max(0,(a-s.stay)/.3);s.m.material.uniforms.uDis.value=o,o>0&&Math.random()<.5&&this.emit({x:s.pos.x,y:.4+Math.random()*1.6*s.sc,z:s.pos.z},1,{color:s.col,speed:.6,life:.6,size:.07,grav:-3,drag:0}),o>=1&&(this.scene.remove(s.m),s.m.material.dispose(),s.st.material.dispose(),this.swords.splice(n,1))}}}};var lc=class{constructor(){this.ctx=null,this.on=!1}pause(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.on&&this.ctx.resume()}start(){if(this.ctx)return;let e=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=e.createGain(),this.master.gain.value=1.8;let t=e.createDynamicsCompressor();t.threshold.value=-9,t.knee.value=8,t.ratio.value=8,t.attack.value=.004,t.release.value=.18,this.master.connect(t),t.connect(e.destination);let n=e.sampleRate*7;this.noiseBuf=e.createBuffer(1,n,e.sampleRate);let s=this.noiseBuf.getChannelData(0);for(let f=0;f<n;f++)s[f]=Math.random()*2-1;let r=e.sampleRate*2.6,a=e.createBuffer(2,r,e.sampleRate);for(let f=0;f<2;f++){let m=a.getChannelData(f);for(let x=0;x<r;x++)m[x]=(Math.random()*2-1)*Math.pow(1-x/r,2.6)}this.rev=e.createConvolver(),this.rev.buffer=a;let o=e.createGain();o.gain.value=.35,this.rev.connect(o),o.connect(this.master);let c=e.createBufferSource();c.buffer=this.noiseBuf,c.loop=!0;let l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=420,l.Q.value=.6;let h=this.windGain=e.createGain();h.gain.value=.03;let u=e.createOscillator();u.frequency.value=.13;let d=e.createGain();d.gain.value=260,u.connect(d),d.connect(l.frequency),u.start(),c.connect(l),l.connect(h),h.connect(this.master),c.start(),this.drone=e.createGain(),this.drone.gain.value=0,this.drone.connect(this.master),this.drone.connect(this.rev);for(let[f,m]of[[55,0],[82.4,4],[110,-6]]){let x=e.createOscillator();x.type="sawtooth",x.frequency.value=f,x.detune.value=m;let g=e.createBiquadFilter();g.type="lowpass",g.frequency.value=260;let p=e.createGain();p.gain.value=.12,x.connect(g),g.connect(p),p.connect(this.drone),x.start()}this.on=!0,this.load(),this.startMusic(),this.loadFiles()}async load(){let e={swing:6,draw:3,blade:3,metal:3,roar:3,stone:4,monster:4,chit:2,spell:2,fire:5,die:1,magic:1,cloth:2,ring:1,bottle:1,chain:1};this.buf={},await Promise.all(Object.entries(e).flatMap(([t,n])=>Array.from({length:n},(s,r)=>fetch(`./assets/sfx/${t}${r+1}.mp3`).then(a=>a.arrayBuffer()).then(a=>this.ctx.decodeAudioData(a)).then(a=>{(this.buf[t]=this.buf[t]||[]).push(a)}).catch(()=>{}))))}play(e,t={}){if(!this.on||!this.buf||!this.buf[e])return;let n=this.ctx,s=this.buf[e],r=s[Math.random()*s.length|0],a=n.createBufferSource();a.buffer=r,a.playbackRate.value=(t.rate??1)*(1+(Math.random()-.5)*(t.vary??.14));let o=n.createGain();if(o.gain.value=t.vol??.6,a.connect(o),o.connect(this.master),t.rev??.25){let c=n.createGain();c.gain.value=t.rev??.25,o.connect(c),c.connect(this.rev)}a.start(n.currentTime+(t.delay||0))}mood(e){this.on&&this.drone.gain.linearRampToValueAtTime(e,this.ctx.currentTime+2)}noise(e,t,n,s,r="bandpass",a=1,o=.3){if(!this.on)return;let c=this.ctx,l=c.currentTime,h=c.createBufferSource();h.buffer=this.noiseBuf,h.playbackRate.value=.7+Math.random()*.6;let u=c.createBiquadFilter();u.type=r,u.Q.value=a,u.frequency.setValueAtTime(t,l),u.frequency.exponentialRampToValueAtTime(Math.max(30,n),l+e);let d=c.createGain();if(d.gain.setValueAtTime(s,l),d.gain.exponentialRampToValueAtTime(.001,l+e),h.connect(u),u.connect(d),d.connect(this.master),o){let f=c.createGain();f.gain.value=o,d.connect(f),f.connect(this.rev)}h.start(l,Math.random()),h.stop(l+e+.05)}tone(e,t,n,s="sine",r=1,a=.5){if(!this.on)return;let o=this.ctx,c=o.currentTime,l=o.createOscillator();l.type=s,l.frequency.setValueAtTime(e,c),l.frequency.exponentialRampToValueAtTime(Math.max(20,e*r),c+t);let h=o.createGain();h.gain.setValueAtTime(1e-4,c),h.gain.exponentialRampToValueAtTime(n,c+.008),h.gain.exponentialRampToValueAtTime(.001,c+t),l.connect(h),h.connect(this.master);let u=o.createGain();u.gain.value=a,h.connect(u),u.connect(this.rev),l.start(c),l.stop(c+t+.05)}swing(e=!1){this.play("swing",{vol:e?.9:.6,rate:e?.62:.95}),this.noise(e?.3:.16,e?900:2400,e?250:700,e?.14:.07,"bandpass",1.4)}draw(){this.play("draw",{vol:.55,rate:1.15})}sheathe(){this.play("draw",{vol:.3,rate:.8})}hit(e=!1){this.play("blade",{vol:e?1:.75,rate:e?.85:1.05}),(e||Math.random()<.4)&&this.play("metal",{vol:.35,rate:1.1}),this.tone(e?80:120,.16,e?.45:.22,"triangle",.5,.2)}clang(){this.play("metal",{vol:.8,rate:.9}),this.play("ring",{vol:.35,rate:1.2})}enemyHurt(){this.play("chit",{vol:.4,rate:.9})}enemyDie(){this.play("die",{vol:.5,rate:.8})}growl(){this.play("monster",{vol:.45,rate:.75,rev:.5})}rubble(){this.play("stone",{vol:.7,rate:.8})}fire(){this.play("fire",{vol:.55})}hurt(){this.play("blade",{vol:.6,rate:.7}),this.play("cloth",{vol:.5}),this.noise(.2,900,120,.3,"lowpass",1),this.tone(70,.25,.4,"sine",.6)}roll(){this.play("cloth",{vol:.5,rate:1.3}),this.play("swing",{vol:.35,rate:1.5})}step(){this.noise(.07,300,120,.05,"lowpass",1,.05)}bell(){for(let[e,t]of[[1,.35],[2.01,.2],[2.74,.14],[4.1,.08],[5.43,.05]])this.tone(98*e,5,t,"sine",.995,.9);this.noise(.05,2e3,500,.2)}thunder(){this.noise(1.6,2600,60,.9,"lowpass",.5,.8),this.tone(48,1.4,.6,"sine",.5)}boom(){this.play("stone",{vol:.9,rate:.6,rev:.6}),this.noise(.9,700,40,.7,"lowpass",.6,.6),this.tone(55,.9,.7,"sine",.45)}roar(){if(!this.on)return;this.play("roar",{vol:1,rate:.55,rev:.8}),this.play("monster",{vol:.6,rate:.5,rev:.8});let e=this.ctx,t=e.currentTime;for(let n of[62,93,124.5]){let s=e.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(n*1.3,t),s.frequency.exponentialRampToValueAtTime(n*.7,t+1.8);let r=e.createOscillator();r.frequency.value=27;let a=e.createGain();a.gain.value=18,r.connect(a),a.connect(s.frequency),r.start(t),r.stop(t+2);let o=e.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(700,t),o.frequency.exponentialRampToValueAtTime(280,t+1.8),o.Q.value=1.2;let c=e.createGain();c.gain.setValueAtTime(.001,t),c.gain.exponentialRampToValueAtTime(.4,t+.15),c.gain.exponentialRampToValueAtTime(.001,t+1.9),s.connect(o),o.connect(c),c.connect(this.master),c.connect(this.rev),s.start(t),s.stop(t+2)}this.noise(1.8,1200,200,.5,"bandpass",.8,.8)}heal(){this.tone(440,.8,.12,"sine",2,.9),this.tone(660,.9,.08,"sine",1.5,.9)}chime(){this.tone(523,1.6,.12,"sine",1,.9),this.tone(784,1.8,.09,"sine",1,.9),this.tone(1046,2.2,.06,"sine",1,.9)}anvil(e=.5,t=1250){if(this.on){for(let[n,s,r]of[[1,1,.5],[2.32,.6,.35],[3.9,.4,.25],[5.4,.25,.16],[.52,.5,.3]])this.tone(t*n*(1+(Math.random()-.5)*.03),r,e*s*.3,"triangle",.995,.5);this.noise(.05,6e3,2500,e*.8,"highpass",.7,.3)}}block(e){this.play("metal",{vol:1.7,rate:e?.8:1,vary:.06}),this.play("metal",{vol:1,rate:e?1.2:1.5}),this.play("blade",{vol:.8,rate:1.3}),this.anvil(e?1.5:1.15,e?950:1250),e&&this.tone(70,.3,.5,"sine",.6,.3)}bag(){this.tone(660,.12,.06,"triangle",.7,.3),this.play("cloth",{vol:.35,rate:1.5})}riposte(){this.play("swing",{vol:1,rate:.55}),this.play("blade",{vol:1.2,rate:.75}),this.anvil(1.2,700),this.tone(55,.7,.6,"sine",.5,.5)}parry(){this.anvil(1.6,1600),this.play("metal",{vol:1,rate:1.25}),this.play("ring",{vol:.7,rate:1,rev:.6}),this.tone(1760,.5,.12,"sine",1,.8)}drop(e=0){if(!this.on)return;let t=[1568,1976,2637][e],n=.16+e*.06;for(let[s,r,a]of[[1,1,1.2],[2,.5,.9],[2.76,.35,.7],[5.4,.2,.4]])this.tone(t*s,a*(1+e*.6),n*r,"sine",1,.9);if(this.noise(.03,8e3,4e3,.25,"highpass",.7,.4),this.play("ring",{vol:.45+e*.25,rate:1.4+e*.2,rev:.7}),e>0&&this.tone(t*1.5,1.4+e,n*.5,"sine",1,.9),e>1){this.play("chain",{vol:.6,rate:1.3,rev:.6}),this.play("magic",{vol:.5,rate:1.5,rev:.8});for(let s=0;s<4;s++)this.tone(t*[1,1.25,1.5,2][s],1.6,.07,"sine",1,.9);this.tone(98,1.2,.35,"sine",.7,.6)}}pick(e=0){this.tone(880,.18,.08,"triangle",1.5,.5),this.tone(1320,.25,.05,"sine",1.33,.6),e>0&&this.play("bottle",{vol:.3,rate:1.3})}_pluckBuf(e,t=3.2,n=.5){let s=this.ctx,r=s.sampleRate,a=Math.round(r/e),o=r*t|0,c=s.createBuffer(1,o,r),l=c.getChannelData(0),h=new Float32Array(a),u=0;for(let f=0;f<a;f++)u+=(Math.random()*2-1-u)*n,h[f]=u;let d=.9965-40/(e*t*r/48e3+9e3);for(let f=0;f<o;f++){let m=f%a,x=h[m];l[f]=x,h[m]=(x+h[(m+1)%a])*.5*d}return c}_note(e,t,n=.3,s=0){let r=this.ctx,a=r.createBufferSource();a.buffer=this.notes[e],s&&(a.playbackRate.setValueAtTime(1-s,t),a.playbackRate.linearRampToValueAtTime(1,t+.12));let o=r.createGain();o.gain.value=n,a.connect(o),o.connect(this.music),a.start(t)}_drum(e,t=.5,n=95){let s=this.ctx,r=s.createOscillator(),a=s.createGain();r.frequency.setValueAtTime(n,e),r.frequency.exponentialRampToValueAtTime(n*.45,e+.22),a.gain.setValueAtTime(t,e),a.gain.exponentialRampToValueAtTime(.001,e+.35),r.connect(a),a.connect(this.music),r.start(e),r.stop(e+.4)}startMusic(){let e=this.ctx;this.music=e.createGain(),this.music.gain.value=.3,this.music.connect(this.master);let t=e.createGain();t.gain.value=.5,this.music.connect(t),t.connect(this.rev);let n=[73.42,110,146.83,174.61,196,220,261.63,293.66,349.23,392,440,523.25,587.33];this.notes=n.map((s,r)=>this._pluckBuf(s,r<2?5:3.4,r<2?.25:.55)),this.mLevel=0,this.mNext=e.currentTime+1.5,this.mStep=0,this.mIdx=6,setInterval(()=>{let s=e.currentTime;for(;this.mNext<s+.3;){let r=this.mNext,a=this.mLevel,o=this.mStep++;if(a===0)o%4===0&&this._note(o%8===0?0:1,r,.35),Math.random()<.72&&(this.mIdx=Math.max(3,Math.min(12,this.mIdx+[-2,-1,-1,1,1,2][Math.random()*6|0])),this._note(this.mIdx,r,.24,Math.random()<.3?.06:0),Math.random()<.25&&this._note(Math.min(12,this.mIdx+2),r+.22,.14)),this.mNext+=1.15+Math.random()*.5;else{let c=o%8,l=a===2;(c===0||c===3||c===6||l&&c===5)&&this._drum(r,c===0?.6:.36,c===0?82:110),c===0&&this._note(0,r,.4),c===4&&this._note(1,r,.3);let h=l?[7,5,7,9,7,5,4,5]:[5,0,7,5,0,4,5,0];h[c]&&this._note(h[c]+((o>>3)%4===3?2:0),r,.2,c===0?.05:0),this.mNext+=l?.2:.26}}},100)}voice(e){if(!this.on)return;let t=this.ctx;fetch("./assets/voice/"+e+".mp3").then(n=>n.ok?n.arrayBuffer():Promise.reject()).then(n=>t.decodeAudioData(n)).then(n=>{let s=t.createBufferSource();s.buffer=n;let r=t.createGain();r.gain.value=.95,s.connect(r),r.connect(this.master);let a=t.createGain();a.gain.value=e[0]==="b"?.45:.12,r.connect(a),a.connect(this.rev),s.start();let o=t.currentTime,c=l=>{l&&(l.gain.cancelScheduledValues(o),l.gain.setTargetAtTime(l.gain.value*.35,o,.15),l.gain.setTargetAtTime(l.gain.value,o+n.duration,.5))};c(this.music),this.trk&&Object.values(this.trk).forEach(c)}).catch(()=>{})}ambient(e,t){if(!this.on)return;let n=this.ctx;if(!this.gust){let s=n.createBufferSource();s.buffer=this.noiseBuf,s.loop=!0;let r=this.gustF=n.createBiquadFilter();r.type="bandpass",r.frequency.value=700,r.Q.value=.8;let a=this.gust=n.createGain();a.gain.value=0,s.connect(r),r.connect(a),a.connect(this.master),a.connect(this.rev),s.start(),this.gT=3,this.bellT=25,this.fireT=0}if(this.gT-=e,this.gT<=0&&!this.ambFile){this.gT=5+Math.random()*9;let s=n.currentTime,r=2+Math.random()*3,a=.012+Math.random()*.03;this.gust.gain.cancelScheduledValues(s),this.gust.gain.setTargetAtTime(a,s,r*.3),this.gust.gain.setTargetAtTime(0,s+r,r*.5),this.gustF.frequency.setTargetAtTime(450+Math.random()*500,s,r*.4),this.windGain.gain.setTargetAtTime(.03+a*.6,s,r*.3),this.windGain.gain.setTargetAtTime(.03,s+r,r)}if(this.bellT-=e,this.bellT<=0&&this.mLevel===0){this.bellT=45+Math.random()*40;for(let[s,r]of[[1,.05],[2.01,.03],[2.74,.02]])this.tone(131*s,6,r,"sine",.997,1)}}async loadFiles(){if(this.file={},await Promise.all(["explore","combat","boss","ambient"].map(e=>fetch("./assets/music/"+e+".mp3").then(t=>t.ok?t.arrayBuffer():Promise.reject()).then(t=>this.ctx.decodeAudioData(t)).then(t=>{this.file[e]=t}).catch(()=>{}))),this.file.ambient){this.ambFile=!0;let e=this.ctx.createBufferSource();e.buffer=this.file.ambient,e.loop=!0;let t=this.ctx.createGain();t.gain.value=.24,e.connect(t),t.connect(this.master),e.start(),this.windGain.gain.setTargetAtTime(.008,this.ctx.currentTime,1),this.gust&&this.gust.gain.setTargetAtTime(0,this.ctx.currentTime,.5)}if(this.file.explore||this.file.combat||this.file.boss){this.useFiles=!0,this.music.gain.value=0,this.trk={};for(let e of["explore","combat","boss"]){if(!this.file[e])continue;let t=this.ctx.createBufferSource();t.buffer=this.file[e],t.loop=!0;let n=this.ctx.createGain();n.gain.value=0,t.connect(n),n.connect(this.master),t.start(),this.trk[e]=n}this._mix(this.mLevel||0)}}_mix(e){if(!this.trk)return;let t=e===2?this.trk.boss?"boss":"combat":e===1&&this.trk.combat?"combat":"explore",n=this.ctx.currentTime;for(let[s,r]of Object.entries(this.trk))r.gain.setTargetAtTime(s===t?.3:0,n,.8)}combat(e){this.on&&this.music&&e!==this.mLevel&&(this.mLevel=e,this._mix(e),this.mStep=0,this.mNext=Math.max(this.mNext,this.ctx.currentTime+.1),e===0&&(this.mNext=this.ctx.currentTime+1.5))}cast(){this.play("spell",{vol:.5,rev:.6}),this.play("magic",{vol:.3,rate:1.2,rev:.6})}};var wu=Math.PI/180,_p=i=>new bt().setFromEuler(new zn(i[0]*wu,i[1]*wu,i[2]*wu,"YXZ")),d_={lin:i=>i,io:i=>i*i*(3-2*i),in:i=>i*i,out:i=>1-(1-i)*(1-i),snap:i=>1-Math.pow(1-i,4)},f_={spine:["Waist","Spine01","Spine02"],armR:["R_Upperarm"],foreR:["R_Forearm"],armL:["L_Upperarm"],foreL:["L_Forearm"],head:["Head"],thighR:["R_Thigh"],calfR:["R_Calf"],thighL:["L_Thigh"],calfL:["L_Calf"]},p_=new Set(["hip","R","L","feet"]),m_={R:["R_Upperarm","R_Forearm","R_Hand",[-.5,-.7,-.5]],L:["L_Upperarm","L_Forearm","L_Hand",[.5,-.7,-.5]],fR:["R_Thigh","R_Calf","R_Foot",[-.15,.2,1]],fL:["L_Thigh","L_Calf","L_Foot",[.15,.2,1]]},Au=i=>new E(i[0],i[1],i[2]),Tu=new bt;function g_(i,e=0){i.traverse(b=>{b.isSkinnedMesh&&b.skeleton.pose()}),i.updateWorldMatrix(!0,!0);let t={};i.traverse(b=>{b.isBone&&(t[b.name]=b)});let n=t.Hip||Object.values(t)[0],s=n;for(;s.parent&&s.parent.isBone;)s=s.parent;let r=[];(function b(y){r.push(y);for(let v of y.children)v.isBone&&b(v)})(s);let a=new Ce().copy(i.matrixWorld).invert(),o=b=>new Ce().multiplyMatrices(a,b.matrixWorld),c=s.parent,l=c?o(c):new Ce,h=new E,u=new bt,d=new E;l.decompose(h,u,d);let f=new Map;for(let b of r){let y=o(b),v=new E,I=new bt,A=new E;y.decompose(v,I,A),f.set(b,{q:b.quaternion.clone(),p:b.position.clone(),wq:I,wp:v})}let m=0;if(t.L_Thigh&&t.R_Thigh){let b=f.get(t.R_Thigh).wp.clone().sub(f.get(t.L_Thigh).wp).setY(0).normalize(),y=new E(0,1,0).cross(b);m=Math.round(Math.atan2(y.x,y.z)/(Math.PI/2))*(Math.PI/2)}let x=new bt().setFromAxisAngle(new E(0,1,0),m),g=f.get(n).wp;return{bones:t,order:r,rest:f,qTop:u,pTop:h,sTop:d.x,root:n,yaw:m,qYaw:x,origin:new E(g.x,e,g.z),bladeLocal:null,unit:1}}var Ra=(i,e)=>Au(e).normalize().applyQuaternion(i.qYaw),hc=(i,e)=>Au(e).multiplyScalar(i.unit).applyQuaternion(i.qYaw).add(i.origin);function x_(i,e=[-18,0,0]){let t=i.qYaw.clone().multiply(_p(e)),s=i.rest.get(i.bones.R_Hand).wq.clone().invert().multiply(t);return i.bladeLocal=new E(0,0,1).applyQuaternion(s),s}function bp(i,e){let t=new Map;for(let[n,s]of Object.entries(i)){if(p_.has(n))continue;let r=f_[n]||[n],a=n==="spine"?1/r.length:1;for(let o of r){let c=e.bones[o];c&&t.set(c,e.qYaw.clone().multiply(_p([s[0]*a,s[1]*a,s[2]*a])).multiply(e.qYaw.clone().invert()))}}return t}var Eu=(i,e)=>new bt().setFromUnitVectors(i.clone().normalize(),e.clone().normalize());function yp(i,e,t){let n=new bt().setFromUnitVectors(i,e);return i.clone().applyQuaternion(Tu.clone().slerp(n,t))}function v_(i,e,t,n,s,r,a,o){let[c,l,h]=e,u=i.bones[c],d=i.bones[l],f=i.bones[h],m=i.rest.get(u),x=i.rest.get(d),g=i.rest.get(f),p=x.p.length()*i.sTop,b=g.p.length()*i.sTop,y=s.clone().sub(t),v=y.length(),I=y.clone().multiplyScalar(1/Math.max(v,1e-6)),A=Math.min(Math.max(v,(p+b)*.08),(p+b)*.995),R=Math.min(1,Math.max(-1,(p*p+A*A-b*b)/(2*p*A))),L=Math.sqrt(1-R*R),S=r.clone().sub(I.clone().multiplyScalar(r.dot(I)));S.lengthSq()<1e-6&&S.set(0,-1,0),S.normalize();let _=t.clone().addScaledVector(I,p*R).addScaledVector(S,p*L),D=t.clone().addScaledVector(I,A),B=n.clone().multiply(m.q),O=Eu(x.p.clone().normalize().applyQuaternion(B),_.clone().sub(t)).multiply(B),W=O.clone().multiply(x.q),Z=Eu(g.p.clone().normalize().applyQuaternion(W),D.clone().sub(_)).multiply(W),X=Z.clone().multiply(g.q);return a==="flat"?X=g.wq.clone():a==="blade"&&o&&i.bladeLocal&&(X=Eu(i.bladeLocal.clone().applyQuaternion(X),o).multiply(X)),[[u,O],[d,Z],[f,X]]}function b_(i,e,t,n,s){let r=new Map,a=new Map,o=new Map,c=bp(e,i),l=bp(t,i),h=new bt,u=e.hip||[0,0,0],d=t.hip||[0,0,0],f=Au([0,1,2].map(x=>u[x]+(d[x]-u[x])*n)).multiplyScalar(i.unit).applyQuaternion(i.qYaw),m=x=>(i.rest.get(i.bones[x]).wp.y-i.origin.y)/i.unit;for(let x of i.order){let g=i.rest.get(x),p=x.parent&&r.has(x.parent),b=p?r.get(x.parent):i.qTop,y=p?a.get(x.parent):i.pTop,v=g.p.clone().multiplyScalar(i.sTop).applyQuaternion(b).add(y);x===i.root&&v.add(f),a.set(x,v);for(let[R,L]of Object.entries(m_)){if(x.name!==L[0])continue;let S=R[0]==="f",_=S?R[1]:R,D=S?e.feet&&e.feet[_]:e[_],B=S?t.feet&&t.feet[_]:t[_];if(!D&&!B)continue;let O=D||B,W=B||D,Z,X,ee=null;if(S){let q=m(L[2]),ae=hc(i,[O[0],q+(O[2]||0),O[1]]),me=hc(i,[W[0],q+(W[2]||0),W[1]]);Z=ae.lerp(me,n),X=Ra(i,L[3])}else{let q=hc(i,O.p).sub(v),ae=hc(i,W.p).sub(v),me=q.length(),Re=ae.length();Z=yp(q.clone().normalize(),ae.clone().normalize(),n).multiplyScalar(me+(Re-me)*n).add(v),X=Ra(i,O.pole||L[3]).lerp(Ra(i,W.pole||L[3]),n).normalize(),(O.blade||W.blade)&&(ee=yp(Ra(i,O.blade||W.blade),Ra(i,W.blade||O.blade),n))}for(let[q,ae]of v_(i,L,v,b,Z,X,S?"flat":ee?"blade":"",ee))o.set(q,ae)}let I;if(o.has(x))I=o.get(x);else{let R=b.clone().multiply(g.q);I=(c.get(x)||Tu).clone().slerp(l.get(x)||Tu,n).multiply(R)}r.set(x,I),h.copy(b).invert().multiply(I);let A=s.get(x);if(A.q.push(h.x,h.y,h.z,h.w),x===i.root){let R=v.clone().sub(y).applyQuaternion(b.clone().invert()).multiplyScalar(1/i.sTop);A.p.push(R.x,R.y,R.z)}}}function y_(i,e,t,n=30){let s=Math.max(2,Math.round(e.dur*n)+1),r=[],a=new Map;for(let l of t.order)a.set(l,{q:[],p:[]});let o=e.keys;for(let l=0;l<s;l++){let h=l/(s-1);r.push(h*e.dur);let u=0;for(;u<o.length-2&&h>o[u+1].t;)u++;let d=o[u],f=o[Math.min(u+1,o.length-1)],m=d_[f.e||"io"](Math.min(1,Math.max(0,(h-d.t)/Math.max(1e-5,f.t-d.t))));b_(t,d.pose,f.pose,m,a)}let c=[];for(let l of t.order){let h=a.get(l);c.push(new Hn(l.name+".quaternion",r,h.q)),l===t.root&&c.push(new Vn(l.name+".position",r,h.p))}return new Ui(i,e.dur,c)}var ks={L:[.15,.22],R:[-.19,-.2]},en={spine:[5,-22,0],head:[-2,20,0],hip:[0,-.07,0],R:{p:[-.24,1,.36],blade:[.3,.5,.81]},L:{p:[.2,1.12,.3]},feet:ks},Fr={spine:[3,-14,0],head:[-1,12,0],hip:[0,-.04,0],R:{p:[-.31,.85,.17],blade:[.14,-.62,.77]},L:{p:[.2,.98,.2]},feet:{L:[.14,.14],R:[-.17,-.12]}},Ru={guard:{dur:1.6,loop:!0,keys:[{t:0,pose:en},{t:.5,pose:{...en,spine:[7,-22,0],hip:[0,-.09,0],R:{p:[-.24,.98,.36],blade:[.3,.46,.83]}}},{t:1,pose:en}]},atk1:{dur:.6,keys:[{t:0,pose:Fr},{t:.22,e:"out",pose:{spine:[2,-54,0],head:[0,38,0],hip:[0,-.08,-.05],R:{p:[-.56,1.36,-.24],blade:[-.72,.32,-.6]},L:{p:[.28,1.2,.42]},feet:ks}},{t:.36,e:"io",pose:{spine:[0,-64,0],head:[0,44,0],hip:[0,-.12,-.09],R:{p:[-.6,1.42,-.34],blade:[-.78,.28,-.56]},L:{p:[.26,1.22,.46]},feet:ks}},{t:.5,e:"snap",pose:{spine:[12,46,0],head:[-4,-30,0],hip:[0,-.16,.22],R:{p:[.22,1.22,.66],blade:[.72,.02,.69]},L:{p:[.34,1,-.22]},feet:{L:[.17,.52],R:[-.2,-.26]}}},{t:.68,e:"out",pose:{spine:[13,68,0],head:[-4,-38,0],hip:[0,-.17,.25],R:{p:[.54,1.1,.18],blade:[.95,-.1,-.3]},L:{p:[.34,1,-.26]},feet:{L:[.17,.52],R:[-.2,-.26]}}},{t:.86,e:"io",pose:{spine:[7,22,0],head:[-2,-10,0],hip:[0,-.09,.12],R:{p:[.1,.92,.3],blade:[.5,-.5,.7]},L:{p:[.26,.98,0]},feet:{L:[.16,.34],R:[-.19,-.2]}}},{t:1,e:"io",pose:Fr}]},atk2:{dur:.6,keys:[{t:0,pose:Fr},{t:.2,e:"out",pose:{spine:[4,54,0],head:[0,-34,0],hip:[0,-.09,0],R:{p:[.42,1.26,.2],blade:[.88,.24,-.4]},L:{p:[.3,.95,-.1]},feet:ks}},{t:.34,e:"io",pose:{spine:[2,64,0],head:[0,-40,0],hip:[0,-.13,-.05],R:{p:[.48,1.32,.12],blade:[.92,.2,-.34]},L:{p:[.3,.93,-.14]},feet:ks}},{t:.5,e:"snap",pose:{spine:[12,-52,0],head:[-4,34,0],hip:[0,-.16,.2],R:{p:[-.34,1.2,.66],blade:[-.7,.02,.71]},L:{p:[.32,1.25,.3]},feet:{L:[.16,-.2],R:[-.2,.5]}}},{t:.68,e:"out",pose:{spine:[13,-74,0],head:[-4,42,0],hip:[0,-.17,.23],R:{p:[-.66,1.1,.14],blade:[-.95,-.1,-.3]},L:{p:[.34,1.28,.28]},feet:{L:[.16,-.2],R:[-.2,.5]}}},{t:.86,e:"io",pose:{spine:[6,-34,0],head:[-2,22,0],hip:[0,-.08,.1],R:{p:[-.42,.92,.2],blade:[-.2,-.6,.77]},L:{p:[.26,1.08,.24]},feet:{L:[.15,0],R:[-.19,.24]}}},{t:1,e:"io",pose:Fr}]},atk3:{dur:.86,keys:[{t:0,pose:Fr},{t:.12,e:"io",pose:{spine:[14,-10,0],head:[-6,0,0],hip:[0,-.28,0],R:{p:[-.3,.9,-.1],blade:[.1,.2,-.97]},L:{p:[.2,.95,.2]},feet:ks}},{t:.34,e:"out",pose:{spine:[-20,-8,0],head:[-10,0,0],hip:[0,.52,.15],R:{p:[-.12,2.42,-.12],blade:[0,.72,-.69]},L:{p:[.12,2.36,-.08]},feet:{L:[.12,.18,.62],R:[-.14,-.22,.8]}}},{t:.46,e:"io",pose:{spine:[-26,-8,0],head:[-12,0,0],hip:[0,.6,.2],R:{p:[-.12,2.46,-.22],blade:[0,.6,-.8]},L:{p:[.12,2.4,-.18]},feet:{L:[.12,.2,.72],R:[-.14,-.24,.9]}}},{t:.58,e:"snap",pose:{spine:[40,4,0],head:[-16,0,0],hip:[0,-.3,.55],R:{p:[-.05,.72,1.02],blade:[0,-.28,.96]},L:{p:[.1,.78,.96]},feet:{L:[.15,.86],R:[-.19,.1]}}},{t:.8,e:"out",pose:{spine:[46,4,0],head:[-18,0,0],hip:[0,-.36,.57],R:{p:[-.05,.62,1.02],blade:[0,-.38,.92]},L:{p:[.1,.7,.96]},feet:{L:[.15,.86],R:[-.19,.1]}}},{t:1,e:"io",pose:Fr}]},cast:{dur:.9,keys:[{t:0,pose:en},{t:.3,e:"out",pose:{spine:[-8,18,0],head:[-18,-10,0],hip:[0,.02,-.04],R:{p:[-.36,.92,-.12],blade:[-.2,-.45,-.87]},L:{p:[.14,2.02,.22]},feet:ks}},{t:.52,e:"snap",pose:{spine:[22,-12,0],head:[6,6,0],hip:[0,-.18,.14],R:{p:[-.4,.9,-.2],blade:[-.2,-.4,-.9]},L:{p:[.1,1.32,.74]},feet:{L:[.16,.5],R:[-.2,-.26]}}},{t:.82,e:"out",pose:{spine:[24,-12,0],head:[6,6,0],hip:[0,-.2,.14],R:{p:[-.4,.9,-.2],blade:[-.2,-.4,-.9]},L:{p:[.1,1.28,.74]},feet:{L:[.16,.5],R:[-.2,-.26]}}},{t:1,pose:en}]},ult:{dur:1.6,keys:[{t:0,pose:en},{t:.2,e:"out",pose:{spine:[20,0,0],head:[12,0,0],hip:[0,-.26,0],R:{p:[-.2,.9,.3],blade:[.2,.9,.38]},L:{p:[.16,1.1,.34]},feet:{L:[.2,.05],R:[-.22,-.05]}}},{t:.42,e:"snap",pose:{spine:[-22,0,0],head:[-22,0,0],hip:[0,.55,0],R:{p:[-.2,2.5,.05],blade:[0,1,0]},L:{p:[.5,1.75,.1],pole:[.6,-.6,-.4]},feet:{L:[.1,.06,.6],R:[-.12,-.08,.76]}}},{t:.8,e:"lin",pose:{spine:[-26,0,0],head:[-26,0,0],hip:[0,.68,0],R:{p:[-.2,2.64,.05],blade:[0,1,0]},L:{p:[.54,1.86,.1],pole:[.6,-.6,-.4]},feet:{L:[.1,.06,.72],R:[-.12,-.08,.9]}}},{t:.9,e:"snap",pose:{spine:[36,0,0],head:[-10,0,0],hip:[0,-.32,.12],R:{p:[-.12,.74,.62],blade:[0,-.86,.5]},L:{p:[.12,.86,.56]},feet:{L:[.2,.3],R:[-.22,-.2]}}},{t:1,pose:en}]},fly:{dur:2.2,loop:!0,keys:[0,.5,1].map((i,e)=>({t:i,pose:{spine:[3+(e===1?1.5:0),-34,0],head:[-2,30,0],hip:[0,.2+(e===1?.025:0),0],R:{p:[-.1,.98,-.2],pole:[-.8,0,-.5]},L:{p:[.1,1.3,.26],pole:[.8,-.4,0]},feet:{L:[.03,.26,.3],R:[-.03,-.22,.3]}}}))},block:{dur:1.8,loop:!0,keys:[0,.5,1].map((i,e)=>({t:i,pose:{spine:[8+(e===1?1.5:0),-16,0],head:[-3,14,0],hip:[0,-.11-(e===1?.015:0),.02],R:{p:[-.2,1.08,.2],blade:[.62,.74,.26],pole:[-.8,-.5,0]},L:{p:[.12,1.3,.25],pole:[.8,-.3,0]},feet:{L:[.16,.26],R:[-.2,-.2]}}}))},blink:{dur:.4,keys:[{t:0,pose:en},{t:.3,e:"out",pose:{spine:[36,-18,0],head:[-18,10,0],hip:[0,-.36,.12],R:{p:[-.44,.72,-.4],blade:[-.3,-.1,-.95]},L:{p:[.26,.86,.36]},feet:{L:[.15,.52],R:[-.19,-.46]}}},{t:.7,e:"lin",pose:{spine:[32,-18,0],head:[-16,10,0],hip:[0,-.32,.12],R:{p:[-.46,.76,-.42],blade:[-.3,-.06,-.95]},L:{p:[.26,.9,.36]},feet:{L:[.15,.52],R:[-.19,-.46]}}},{t:1,pose:en}]},drink:{dur:1,keys:[{t:0,pose:en},{t:.3,pose:{...en,spine:[-8,-10,0],head:[-22,0,0],L:{p:[.06,1.62,.2]}}},{t:.75,pose:{...en,spine:[-10,-10,0],head:[-26,0,0],L:{p:[.06,1.64,.2]}}},{t:1,pose:en}]},kneel:{dur:1.2,loop:!0,keys:[0,.5,1].map((i,e)=>({t:i,pose:{spine:[24+(e===1?2:0),0,0],head:[22,0,0],hip:[0,-.46,.05],R:{p:[-.26,.78,.42],blade:[0,-1,.05]},L:{p:[.2,.62,.3]},feet:{L:[.16,.42],R:[-.2,-.42]}}}))}},Mp={L:[.11,.03],R:[-.11,-.02]},uc={spine:[-2,0,0],head:[0,0,0],hip:[0,0,0],R:{p:[-.27,.87,.03]},L:{p:[.1,.98,-.2],pole:[.7,-.2,-.6]},feet:Mp},Us={spine:[3,-14,0],head:[-1,12,0],hip:[0,-.04,0],R:{p:[-.31,.85,.17],blade:[.14,-.62,.77]},L:{p:[.2,.98,.2]},feet:{L:[.14,.14],R:[-.17,-.12]}};Object.assign(Ru,{stand:{dur:3.6,loop:!0,keys:[{t:0,pose:uc},{t:.5,pose:{...uc,spine:[-3.5,0,0],hip:[0,.008,0],R:{p:[-.275,.88,.03]}}},{t:1,pose:uc}]},ready:{dur:2.4,loop:!0,keys:[{t:0,pose:Us},{t:.5,pose:{...Us,spine:[4.5,-14,0],hip:[0,-.05,0],R:{p:[-.31,.84,.17],blade:[.14,-.66,.74]}}},{t:1,pose:Us}]},draw:{dur:.3,keys:[{t:0,pose:uc},{t:.45,e:"out",pose:{spine:[-4,8,0],head:[0,-8,0],hip:[0,0,0],R:{p:[-.17,1.6,-.14],pole:[-.8,.1,.2]},L:{p:[.18,.95,.1]},feet:Mp}},{t:1,e:"io",pose:Us}]},flinch:{dur:.3,keys:[{t:0,pose:Us},{t:.3,e:"snap",pose:{...Us,spine:[-9,-6,3],head:[-7,6,0],hip:[0,-.07,-.07]}},{t:1,e:"io",pose:Us}]}});var oi={L:[.2,.2],R:[-.24,-.22]};Object.assign(Ru,{thrust:{dur:.9,keys:[{t:0,pose:en},{t:.5,e:"out",pose:{spine:[4,-60,0],head:[0,46,0],hip:[0,-.14,-.14],R:{p:[-.5,1.12,-.42],blade:[.12,.02,.99]},L:{p:[.2,1.15,.5]},feet:{L:[.16,.34],R:[-.22,-.4]}}},{t:.64,e:"snap",pose:{spine:[22,30,0],head:[-10,-20,0],hip:[0,-.24,.42],R:{p:[-.02,1.1,.98],blade:[0,0,1]},L:{p:[.36,.95,-.2]},feet:{L:[.18,.86],R:[-.22,-.3]}}},{t:.82,e:"out",pose:{spine:[24,34,0],head:[-10,-22,0],hip:[0,-.25,.44],R:{p:[-.02,1.08,1],blade:[0,-.02,1]},L:{p:[.36,.95,-.22]},feet:{L:[.18,.86],R:[-.22,-.3]}}},{t:1,pose:en}]},rise:{dur:2.3,keys:[{t:0,pose:{spine:[24,0,0],head:[22,0,0],hip:[0,-.46,.05],R:{p:[-.26,.78,.42],blade:[0,-1,.05]},L:{p:[.2,.62,.3]},feet:{L:[.16,.42],R:[-.2,-.42]}}},{t:.2,e:"io",pose:{spine:[21,0,0],head:[-6,0,0],hip:[0,-.46,.05],R:{p:[-.26,.78,.42],blade:[0,-1,.05]},L:{p:[.2,.62,.3]},feet:{L:[.16,.42],R:[-.2,-.42]}}},{t:.42,e:"io",pose:{spine:[31,-4,0],head:[-10,4,0],hip:[0,-.4,.14],R:{p:[-.26,.84,.46],blade:[0,-1,.05]},L:{p:[.22,.56,.34]},feet:{L:[.16,.42],R:[-.2,-.42]}}},{t:.68,e:"io",pose:{spine:[22,-8,0],head:[-8,8,0],hip:[0,-.2,.1],R:{p:[-.27,.96,.44],blade:[0,-1,.08]},L:{p:[.24,.8,.26]},feet:{L:[.16,.34],R:[-.2,-.34]}}},{t:.86,e:"io",pose:{spine:[7,-16,0],head:[-3,16,0],hip:[0,-.05,.02],R:{p:[-.27,1.02,.4],blade:[.12,-.72,.68]},L:{p:[.22,1,.26]},feet:{L:[.15,.26],R:[-.19,-.24]}}},{t:1,e:"io",pose:en}]},roar:{dur:2,keys:[{t:0,pose:en},{t:.18,e:"out",pose:{spine:[26,0,0],head:[20,0,0],hip:[0,-.22,0],R:{p:[-.3,.8,.3],blade:[-.3,-.5,.8]},L:{p:[.3,.8,.3]},feet:oi}},{t:.32,e:"snap",pose:{spine:[-30,0,0],head:[-34,0,0],hip:[0,.03,-.05],R:{p:[-.85,1.25,-.1],blade:[-.8,.5,-.2],pole:[-.2,-.6,-.8]},L:{p:[.85,1.25,-.1],pole:[.2,-.6,-.8]},feet:oi}},{t:.85,e:"lin",pose:{spine:[-34,0,0],head:[-38,0,0],hip:[0,.04,-.06],R:{p:[-.88,1.3,-.14],blade:[-.8,.55,-.2],pole:[-.2,-.6,-.8]},L:{p:[.88,1.3,-.14],pole:[.2,-.6,-.8]},feet:oi}},{t:1,pose:en}]},claw:{dur:.6,keys:[{t:0,pose:{spine:[16,0,0],head:[-10,0,0],hip:[0,-.1,0],R:{p:[-.3,1,.3]},L:{p:[.3,1,.3]},feet:oi}},{t:.4,e:"out",pose:{spine:[-12,-30,0],head:[-6,24,0],hip:[0,-.06,-.1],R:{p:[-.6,1.6,-.2]},L:{p:[.4,1.3,.1]},feet:oi}},{t:.6,e:"snap",pose:{spine:[34,30,0],head:[-20,-16,0],hip:[0,-.24,.38],R:{p:[.1,.95,.85]},L:{p:[.3,1.1,.6]},feet:{L:[.2,.7],R:[-.24,-.25]}}},{t:.8,e:"out",pose:{spine:[36,36,0],head:[-20,-18,0],hip:[0,-.25,.4],R:{p:[.2,.85,.75]},L:{p:[.3,1.05,.6]},feet:{L:[.2,.7],R:[-.24,-.25]}}},{t:1,pose:{spine:[16,0,0],head:[-10,0,0],hip:[0,-.1,0],R:{p:[-.3,1,.3]},L:{p:[.3,1,.3]},feet:oi}}]},lurk:{dur:2,loop:!0,keys:[0,.5,1].map((i,e)=>({t:i,pose:{spine:[18+(e===1?4:0),e===1?6:-6,0],head:[-8,0,e===1?6:-6],hip:[0,-.1,0],R:{p:[-.3,.86,.26]},L:{p:[.3,.9,.24]},feet:oi}}))},channel:{dur:1.5,keys:[{t:0,pose:{spine:[4,0,0],hip:[0,-.04,0],R:{p:[-.3,1.05,.3]},L:{p:[.3,1.05,.3]},feet:oi}},{t:.35,e:"out",pose:{spine:[-10,0,0],head:[-14,0,0],hip:[0,.02,-.04],R:{p:[-.34,1.85,.3]},L:{p:[.34,1.85,.3]},feet:oi}},{t:.72,e:"lin",pose:{spine:[-12,0,0],head:[-16,0,0],hip:[0,.03,-.05],R:{p:[-.24,1.9,.34]},L:{p:[.24,1.9,.34]},feet:oi}},{t:.82,e:"snap",pose:{spine:[22,0,0],head:[4,0,0],hip:[0,-.14,.14],R:{p:[-.18,1.3,.8]},L:{p:[.18,1.3,.8]},feet:{L:[.2,.46],R:[-.24,-.26]}}},{t:1,pose:{spine:[4,0,0],hip:[0,-.04,0],R:{p:[-.3,1.05,.3]},L:{p:[.3,1.05,.3]},feet:oi}}]},whirl:{dur:1,loop:!0,keys:[0,1].map(i=>({t:i,pose:{spine:[8,-40,0],head:[0,30,0],hip:[0,-.2,0],R:{p:[-.92,1.3,.1],blade:[-.98,0,.2]},L:{p:[.7,1.2,-.2]},feet:{L:[.26,.24],R:[-.3,-.24]}}}))}});function Sp(i,e=1,t=0,n=Ru,s){let r=g_(i,t);r.unit=e;let a=x_(r,s),o={};for(let[c,l]of Object.entries(n))o[c]=y_(c,l,r);return{info:r,clips:o,grip:a}}function dc(i,e={}){let{length:t=1.15,grip:n=.12,flip:s=!1,roll:r=0}=e,a=i.clone(!0);a.updateWorldMatrix(!0,!0);let o=new Wt().setFromObject(a),c=o.getSize(new E),l=o.getCenter(new E),h=c.x>=c.y&&c.x>=c.z?"x":c.y>=c.z?"y":"z",u=c[h],d=new lt;a.position.sub(l),d.add(a),h==="x"?d.rotation.y=s?Math.PI/2:-Math.PI/2:h==="y"?d.rotation.x=s?-Math.PI/2:Math.PI/2:s&&(d.rotation.y=Math.PI);let f=new lt;f.add(d),f.rotation.z=r*Math.PI/180;let m=new lt,x=t/u;return f.scale.setScalar(x),f.position.z=(.5-n)*t,m.add(f),a.traverse(g=>{g.isMesh&&(g.castShadow=!0,g.material=g.material.clone(),g.material.metalness=e.metal??.75,g.material.roughness=e.rough??.38)}),m.userData={length:t,tip:(1-n)*t,base:.12*t},m}var tn=(i,e={})=>({clip:i,loop:!0,...e}),at=(i,e=0,t=1,n={})=>({clip:i,from:e,to:t,loop:!1,...n}),Ca={hit:at("hurt",.05,.8),dead:at("fall",0,1),kneel:{...tn("kneel"),fade:.4},rise:at("rise"),statue:at("kneel",0,0),emerge:tn("lurk")},wp={hero:{idle:tn("stand"),idleA:tn("ready"),guard:tn("block"),draw:at("draw"),sheathe:at("draw",1,0),run:tn("run"),atk1:at("atk1"),atk2:at("atk2"),atk3:at("atk3"),heavy:at("cast"),ult:at("ult"),roll:at("blink"),fly:tn("fly"),drink:at("drink"),...Ca,hit:at("flinch"),emerge:tn("stand")},walker:{idle:tn("lurk"),run:tn("run"),wind:at("claw",0,.4),atk1:at("claw",.4,1),...Ca},spear:{idle:tn("lurk"),run:tn("run"),wind:at("thrust",0,.5),thrust:at("thrust",.5,1),...Ca},caster:{idle:tn("idle"),run:tn("walk"),cast:at("channel",0,.74),castrel:at("channel",.74,1),...Ca,emerge:tn("idle")},boss:{idle:tn("guard"),run:tn("run"),windA:at("atk1",0,.28),atk1:at("atk1",.28,1),windB:at("atk2",0,.26),atk2:at("atk2",.26,1),thrustW:at("thrust",0,.5),thrust:at("thrust",.5,1),crouch:at("ult",0,.2),leap:at("atk3",.1,.42),slam:at("atk3",.42,1),roar:at("roar"),spin:tn("whirl"),windS:at("ult",0,.2),...Ca}},__={hero:{len:1.15,grip:.14},boss:{len:1.75,grip:.4}},Cu={},fc=null;function M_(i,e){let t=e.root,n=t.parent&&t.parent.isBone?e.rest.get(t.parent):null,s=n?n.wq:e.qTop,r=n?n.wp:e.pTop,a=e.rest.get(t).wp,o=new E,c=s.clone().invert();for(let l of i.tracks)if(l.name===t.name+".position"){let h=l.values;for(let u=0;u<h.length;u+=3)o.set(h[u],h[u+1],h[u+2]).multiplyScalar(e.sTop).applyQuaternion(s).add(r),o.x=a.x,o.z=a.z,o.sub(r).applyQuaternion(c).multiplyScalar(1/e.sTop),h[u]=o.x,h[u+1]=o.y,h[u+2]=o.z}else if(n&&l.name===t.parent.name+".position"){let h=e.rest.get(t.parent).p,u=l.values;for(let d=0;d<u.length;d+=3)u[d]=h.x,u[d+1]=h.y,u[d+2]=h.z}return i}async function Ep(i=()=>{}){fc=await(await fetch("./assets/chars.json",{cache:"no-store"})).json();let e=Object.keys(fc).filter(s=>s!=="weapons"),t=0,n={};return await Promise.all(Object.entries(fc.weapons||{}).map(async([s,r])=>{let a=await Ls("./assets/"+r);a&&(n[s]=a.scene)})),await Promise.all(e.map(async s=>{let r=fc[s],a=await Promise.all(r.files.map(y=>Ls("./assets/"+y)));if(!a[0])return;let o=a[0].scene;o.traverse(y=>{y.isSkinnedMesh&&y.skeleton.pose()}),o.updateWorldMatrix(!0,!0);let c=1e9,l=-1e9;o.traverse(y=>{if(y.isMesh){let v;y.isSkinnedMesh?(y.skeleton.update(),y.computeBoundingBox(),v=y.boundingBox.clone().applyMatrix4(y.matrixWorld)):(y.geometry.computeBoundingBox(),v=y.geometry.boundingBox.clone().applyMatrix4(y.matrixWorld)),c=Math.min(c,v.min.y),l=Math.max(l,v.max.y)}});let h=r.height,u=h/(l-c),d=h/1.82,f=Sp(o,d/u,c),m={...f.clips},x={},g=new Ce().copy(o.matrixWorld).invert(),p=f.info.bones.L_Thigh,b=f.info.bones.R_Thigh;for(let y of a)if(y)for(let v of y.animations){let I=v.name.replace(/^preset:/,""),A=m[I]=M_(v.clone(),f.info);A.tracks=A.tracks.filter(_=>!_.name.endsWith(".scale"));let R=new Rs(o);R.clipAction(A).play(),R.setTime(0),o.updateWorldMatrix(!0,!0);let L=b.getWorldPosition(new E).applyMatrix4(g).sub(p.getWorldPosition(new E).applyMatrix4(g)).setY(0).normalize(),S=new E(0,1,0).cross(L);x[I]=Math.round((Math.atan2(S.x,S.z)-f.info.yaw)/(Math.PI/2))*(Math.PI/2),R.stopAllAction(),R.uncacheRoot(o)}o.traverse(y=>{y.isSkinnedMesh&&y.skeleton.pose()}),o.updateWorldMatrix(!0,!0),Cu[s]={clipYaw:x,model:o,clips:m,info:f.info,grip:f.grip,s:u,rel:d,H:h,minY:c,weapon:r.weapon&&n[r.weapon]?n[r.weapon]:null,wcfg:__[s]},i(++t/e.length)})),Cu}var pc=class{constructor(e,t={}){let n=this.d=Cu[e];this.kind=e,this.map=wp[e]||wp.walker,this.root=new lt;let s=this.model=mu(n.model);this.mats=[];let r=this.holder=new lt;r.add(s),r.scale.setScalar(n.s),r.rotation.y=-n.info.yaw,r.updateMatrix();let a=n.info.origin.clone().applyMatrix4(r.matrix);r.position.sub(a),this.root.add(r),this.baseY=r.position.y,s.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.frustumCulled=!1,u.material=u.material.clone(),u.material.transparent=!1,u.material.roughness=Math.max(.55,u.material.roughness??1),u.material.metalness=Math.min(.2,u.material.metalness??0),u.material.envMapIntensity=1,t.tint&&u.material.color.multiply(new oe(t.tint)),this.mats.push(u.material))}),this.mixer=new Rs(s),this.actions={};for(let[u,d]of Object.entries(n.clips)){let f=this.mixer.clipAction(d);f.clampWhenFinished=!0,this.actions[u]=f}this.cur=null,this.curKey="",this.tipO=new ht,this.baseO=new ht,this._flash=0,this.spinY=0;let o=null;s.traverse(u=>{u.isBone&&u.name==="R_Hand"&&(o=u)}),this.hand=o;let c=this.wh=new lt;o&&(o.add(c),this.root.updateWorldMatrix(!0,!0),c.scale.setScalar(1/o.getWorldScale(new E).x),c.quaternion.copy(n.grip));let l=(n.wcfg?n.wcfg.len:.5)*n.rel;this.wlen=l,n.weapon&&n.wcfg?(this.weapon=dc(n.weapon,{length:l,grip:n.wcfg.grip,metal:.85,rough:.3}),c.add(this.weapon),this.tipO.position.z=l*(1-n.wcfg.grip)*.98,this.baseO.position.z=l*.1):(this.tipO.position.z=.45*n.rel,this.baseO.position.z=.05),c.add(this.tipO),c.add(this.baseO);let h=(()=>{let u=null;return s.traverse(d=>{d.isBone&&d.name==="Spine02"&&(u=d)}),u})();if(this.armed=!0,h&&this.weapon){let u=n.info,d=u.rest.get(u.bones.Spine02),f=p=>new E(p[0],p[1],p[2]).multiplyScalar(u.unit).applyQuaternion(u.qYaw).add(u.origin),m=new E(.5,-.86,-.06).normalize().applyQuaternion(u.qYaw),x=new bt().setFromUnitVectors(new E(0,0,1),m),g=this.backMount=new lt;g.position.copy(f([-.24,1.56,-.17]).sub(d.wp).applyQuaternion(d.wq.clone().invert()).multiplyScalar(1/u.sTop)),g.quaternion.copy(d.wq.clone().invert().multiply(x)),h.add(g),this.root.updateWorldMatrix(!0,!0),g.scale.setScalar(1/h.getWorldScale(new E).x)}}setArmed(e){!this.weapon||!this.backMount||e===this.armed||(this.armed=e,(e?this.wh:this.backMount).add(this.weapon))}tip(e){return this.tipO.getWorldPosition(e)}base(e){return this.baseO.getWorldPosition(e)}flash(e=1){this._flash=e}setGlow(e){!this.weapon||this._glow===e||(this._glow=e,this.weapon.traverse(t=>{t.isMesh&&t.material.emissive&&t.material.emissive.setRGB(.3*e,.75*e,1.7*e)}))}showWeapon(e){this.weapon&&(this.weapon.visible=e)}setOpacity(e){for(let t of this.mats)t.transparent=e<.999,t.opacity=e,t.depthWrite=e>.6;this.weapon&&(this.weapon.visible=e>.4)}tint(e,t,n,s){for(let r of this.mats)r.emissive&&r.emissive.setRGB(e*s,t*s,n*s);this._wasFlash=!0}pose(e,t,n,s,r=0){let a=this.map[e]||this.map.idle,o=this.actions[a.clip]||this.actions.guard||this.actions.idle,c=e+"|"+a.clip;if(o&&this.curKey!==c&&(o.reset(),o.setLoop(a.loop?Wo:Go,a.loop?1/0:1),this.cur&&this.cur!==o&&o.crossFadeFrom(this.cur,a.fade??.09,!1),o.play(),this.cur=o,this.curKey=c,this.curMap=a),this.cur){let h=this.curMap,u=this.cur.getClip().duration;h.loop?(this.cur.timeScale=(h.rate||1)*(e==="run"?wt(r/5.2,.55,1.7):1),this.mixer.update(s)):(this.cur.timeScale=0,this.cur.time=wt(Ht(h.from??0,h.to??1,t),0,.999)*u,this.mixer.update(Math.max(s,1e-5)))}let l=0;if(e==="emerge"?l=Ht(-2.1*this.d.rel,0,t*t*(3-2*t)):e==="dead"&&(l=-Et(.7,1,t)*.4),this.holder.position.y=this.baseY+l,this.model.rotation.y=this.spinY-(this.d.clipYaw[this.curMap?this.curMap.clip:""]||0),this._flash>0||this._wasFlash){let h=this._flash;for(let u of this.mats)u.emissive&&u.emissive.setRGB(h*1.4,h*1.25,h*1.15);this._wasFlash=h>0,this._flash=Math.max(0,h-s*9)}}};var En=new URLSearchParams(location.search),Oe=i=>document.getElementById(i),ie=(i=0,e=0,t=0)=>new E(i,e,t);console.log("%c\u96FE\u9501\u5C71\u95E8 \xB7 \u6B78\u85CF\u4F5C\u54C1%c  https://x.com/op7418","color:#e9dcae;font-size:14px","color:#8f8463");var Hi=!!(window.__CFG&&window.__CFG.touch)||En.has("touch")||!En.has("notouch")&&!!window.matchMedia&&matchMedia("(pointer:coarse)").matches;{let i=document.documentElement,e=getComputedStyle(i),t=!!(window.CSS&&CSS.supports&&CSS.supports("top: env(safe-area-inset-top)"));for(let n of["top","bottom","right","left"]){let s=e.getPropertyValue("--safe-area-inset-"+n).trim();i.style.setProperty("--sa"+n[0],s||(t?`env(safe-area-inset-${n}, 0px)`:"0px"))}}var Br=Object.assign({grass:Hi?5e4:15e4,pixels:Hi?2e6:8e6,shadow:Hi?1024:2048,quality:Hi?{ao:!1,steps:10}:{}},window.__CFG||{});Hi&&document.body.classList.add("touch");{let i=document.createElement("canvas"),e=!1;try{e=!!i.getContext("webgl2")}catch{}if(!e)throw Oe("nogl").style.display="flex",Oe("title").style.display="none",Oe("load").style.display="none",new Error("WebGL 2 unavailable")}var Nr=i=>Math.min(devicePixelRatio||1,i,Math.sqrt(Br.pixels/Math.max(1,innerWidth*innerHeight))),sn=new Eo({antialias:!1,powerPreference:"high-performance"});sn.setPixelRatio(Nr(1.5));sn.shadowMap.autoUpdate=!0;sn.setSize(innerWidth,innerHeight);sn.shadowMap.enabled=!0;sn.shadowMap.type=wh;document.body.prepend(sn.domElement);var jt=new Es,Tn=new Vt(36,innerWidth/innerHeight,.5,900),zp=ie(-.55,.62,-.56).normalize(),La=sp(zp);jt.add(La);rp(sn,La,jt,2.6);var An=new Pr(11060479,3.4);An.castShadow=!0;An.shadow.mapSize.set(Br.shadow,Br.shadow);Object.assign(An.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:160});An.shadow.bias=-4e-4;An.shadow.normalBias=.05;An.shadow.radius=3;jt.add(An,An.target);var S_=new oe(11060479),w_=new oe(1,.5,.45),E_=new Promise(i=>{let e=0;wa.onProgress=t=>{/assets\/tex\/|^data:image\/jpeg/.test(t)&&++e>=9&&i()},setTimeout(i,5e3)}),on=hp(jt,{grass:+(En.get("grass")||Br.grass)}),mi=new nc(sn,jt,Tn,An,{scale:+(En.get("scale")||1),quality:Br.quality}),_t=mi.u,fs=mi.fog,T_=fs.uAmb.value.clone(),A_=new oe(.09,.03,.035),R_=fs.uSunCol.value.clone(),C_=new oe(1,.45,.4),zu=()=>{Tn.aspect=innerWidth/innerHeight,Tn.fov=Tn.aspect<1?50:36,Tn.updateProjectionMatrix(),sn.setSize(innerWidth,innerHeight);let i=sn.getDrawingBufferSize(new ce);mi.setSize(i.x,i.y)};addEventListener("resize",zu);zu();function Bu(i){fs.uAmb.value.lerpColors(T_,A_,i),fs.uSunCol.value.lerpColors(R_,C_,i),An.color.lerpColors(S_,w_,i),La.material.uniforms.uStorm.value=i}var z=new cc(jt),re=new lc,Bp=new Qo(jt),ci=new tc(jt,z,re);for(let i of z.lights)i.l.userData.fogK=.02;var T=window.G={t:0,ts:1,stop:0,cine:!1,started:!1,enemies:[],shots:[],waves:[],cos:[],souls:0,cp:"shrine1",stage:"path",shake:0,god:En.has("god"),cam:{focus:ie(),pos:ie(),look:ie(),cpos:null,clook:null,k:3,off:ie(0,9.6,8.4),zoom:1,zt:1}};function*pt(i){let e=0;for(;e<i;)e+=yield}function*Tp(i){for(;!i();)yield}function bn(i){let e={gen:i,dead:!1};return T.cos.push(e),e}function P_(i){for(let e=T.cos.length-1;e>=0;e--){let t=T.cos[e];(t.dead||t.gen.next(i).done)&&T.cos.splice(e,1)}}var Ap={"\u5E08\u7236\u4EA4\u4EE3\u7684\u6700\u540E\u4E00\u4EF6\u4E8B\uFF1A\u628A\u64A4\u9632\u4EE4\u9001\u4E0A\u9547\u5CB3\u53F0\u3002":"n_intro","\u5C71\u95E8\u91CC\u6709\u4EBA\u5728\u6572\u949F\u3002":"n_bell","\u5C01\u95E8\u7684\u7B26\u6563\u4E86\u3002":"n_seal","\u53F0\u4E0A\u8DEA\u7740\u4E00\u4E2A\u4EBA\u3002":"n_kneel","\u300C\u5C71\u95E8\u5DF2\u5C01\u3002\u56DE\u53BB\u3002\u300D":"b_gate","\u300C\u6211\u6CA1\u6709\u63A5\u5230\u64A4\u9632\u7684\u547D\u4EE4\u3002\u300D":"b_order","\u300C\u5217\u9635\u3002\u300D":"b_form","\u300C\u2026\u2026\u64A4\u9632\u4EE4\u3002\u6536\u5230\u4E86\u3002\u300D":"b_end"},Ie={bar(i,e){let t=Oe(i);if(!t)return;t.querySelector(".v").style.transform=`scaleX(${wt(e,0,1)})`;let n=t.querySelector(".lag");n&&(n.style.transform=`scaleX(${wt(e,0,1)})`)},banner(i,e="",t=3.5,n=""){let s=Oe("banner");s.className=n,s.querySelector(".t").textContent=i,s.querySelector(".s").textContent=e,s.style.opacity=1,clearTimeout(Ie._b),Ie._b=setTimeout(()=>s.style.opacity=0,t*1e3)},sub(i,e=3){Ap[i]&&re.voice(Ap[i]);let t=Oe("sub");t.textContent=i,t.style.opacity=i?1:0,clearTimeout(Ie._s),i&&(Ie._s=setTimeout(()=>t.style.opacity=0,e*1e3))},cine(i){document.body.classList.toggle("cine",i),T.cine=i},obj(i){Oe("obj").textContent=i,Oe("obj").style.opacity=i?1:0},fade(i,e=1600){let t=Oe("fade");t.style.transitionDuration=e+"ms",t.style.opacity=i},toast(i,e,t=1){let n=document.createElement("div");n.className="toast",n.innerHTML=`<i style="background:${Ds[e].css}"></i><b style="color:${Ds[e].css}">${i}</b>${t>1?"<span>\xD7"+t+"</span>":""}`,Oe("toasts").prepend(n),setTimeout(()=>n.classList.add("out"),2600),setTimeout(()=>n.remove(),3200)},boss(i,e="",t=""){Oe("boss").style.opacity=i?1:0,e&&(Oe("bname").textContent=e,Oe("btitle").textContent=t)}},Ft=new Set,li={x:0,y:0,aim:ie(0,0,-1)},It=new Set,I_=!1;var Rp={KeyW:"KeyS",KeyS:"KeyW",KeyA:"KeyD",KeyD:"KeyA"};addEventListener("keydown",i=>{if(!(i.isComposing||i.keyCode===229)){if(I_=!0,/^(Meta|Alt|Control)/.test(i.code)){Ft.clear();return}i.metaKey||i.altKey||i.ctrlKey||(!i.repeat&&Rp[i.code]&&Ft.delete(Rp[i.code]),Ft.has(i.code)||It.add(i.code),Ft.add(i.code),["Space","Tab"].includes(i.code)&&i.preventDefault())}});addEventListener("keyup",i=>{Ft.delete(i.code),/^(Meta|Alt|Control)/.test(i.code)&&Ft.clear()});for(let i of["blur","focus","pagehide"])addEventListener(i,()=>Ft.clear());document.addEventListener("visibilitychange",()=>Ft.clear());addEventListener("mousemove",i=>{Hi||(i.buttons&2||Ft.delete("RMB"),li.x=i.clientX/innerWidth*2-1,li.y=-(i.clientY/innerHeight)*2+1)});addEventListener("mousedown",i=>{!T.started||Hi||(i.button===0&&It.add("LMB"),i.button===2&&(It.add("RMB"),Ft.add("RMB")))});addEventListener("mouseup",i=>{i.button===2&&Ft.delete("RMB")});addEventListener("contextmenu",i=>i.preventDefault());addEventListener("keydown",i=>{(i.code==="KeyB"||i.code==="Tab")&&document.body.classList.toggle("bagopen")});var yt={on:!1,id:-1,x:0,y:0,ox:0,oy:0};if(Hi){let i=Oe("stick"),e=i.firstElementChild,t=r=>{r.pointerId===yt.id&&(yt.on=!1,yt.id=-1,yt.x=yt.y=0,i.style.display="none")};addEventListener("pointerdown",r=>{!T.started||yt.on||r.target.closest(".sk,#bag,a")||r.clientX>innerWidth*.55||r.clientY<innerHeight*.3||(yt.on=!0,yt.id=r.pointerId,yt.ox=r.clientX,yt.oy=r.clientY,yt.x=yt.y=0,i.style.display="block",i.style.left=yt.ox+"px",i.style.top=yt.oy+"px",e.style.transform="")}),addEventListener("pointermove",r=>{if(r.pointerId!==yt.id)return;let a=r.clientX-yt.ox,o=r.clientY-yt.oy,c=Math.hypot(a,o),l=48;c>l&&(a*=l/c,o*=l/c),e.style.transform=`translate(${a}px,${o}px)`;let h=c<9?0:1;yt.x=a/l*h,yt.y=o/l*h}),addEventListener("pointerup",t),addEventListener("pointercancel",t);let n={sk0:"LMB",sk6:"RMB",sk1:"KeyF",sk4:"KeyQ",sk2:"Space",sk3:"ShiftLeft",sk5:"KeyE"},s={RMB:1,ShiftLeft:1};for(let[r,a]of Object.entries(n)){let o=Oe(r),c=()=>{o.classList.remove("down"),s[a]&&Ft.delete(a)};o.addEventListener("pointerdown",l=>{l.preventDefault(),T.started&&(o.classList.add("down"),It.add(a),s[a]?Ft.add(a):setTimeout(()=>o.classList.remove("down"),120))}),o.addEventListener("pointerup",c),o.addEventListener("pointercancel",c),o.addEventListener("pointerleave",c)}Oe("bag").addEventListener("pointerdown",r=>{r.preventDefault(),document.body.classList.toggle("bagopen")}),addEventListener("touchmove",r=>r.preventDefault(),{passive:!1}),addEventListener("gesturestart",r=>r.preventDefault())}for(let i of document.querySelectorAll("#credit,.made"))i.addEventListener("click",e=>e.stopPropagation()),i.addEventListener("pointerdown",e=>e.stopPropagation()),Br.links===!1&&(i.removeAttribute("href"),i.removeAttribute("target"));var Cp=new Ho,L_=new Jn(ie(0,1,0),-1);function D_(){if(!Hi||!C){Cp.setFromCamera(li,Tn),Cp.ray.intersectPlane(L_,li.aim);return}let i=9,e=null;for(let n of T.enemies)if(n.alive&&n.rig.root.visible){let s=mt(n.pos,C.pos);s<i&&(i=s,e=n)}let t=T.boss;t&&t.active&&t.alive&&mt(t.pos,C.pos)<14&&(e=e||t),e?li.aim.set(e.pos.x,1,e.pos.z):yt.on&&(yt.x||yt.y)?li.aim.set(C.pos.x+yt.x*6,1,C.pos.z+yt.y*6):li.aim.set(C.pos.x+Math.sin(C.face)*6,1,C.pos.z+Math.cos(C.face)*6)}function Hu(i,e,t={}){let n=new pc(t.model||i,t.rigOpts||{}),s={kind:i,rig:n,pos:e.clone(),vel:ie(),face:t.face??Math.PI,hp:t.hp,max:t.hp,r:t.r??.45,alive:!0,anim:"idle",at:0,ad:1,state:"idle",st:0,inv:0,speed:0,y:0,fz:0,hitSet:new Set,...t};return n.root.position.copy(s.pos),jt.add(n.root),s.trail=new sc(jt,n,t.trail||[.16,.34,.7],t.trailN||22),s}var ye=(i,e,t=1)=>{i.anim=e,i.at=0,i.ad=t},ft=(i,e=ie())=>e.set(Math.sin(i),0,Math.cos(i)),Pt=(i,e)=>Math.atan2(e.x-i.x,e.z-i.z),mt=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);function Ia(i,e,t,n,s,r=0){let a=mt(i,t);return a>n+r?!1:a<.9+r?!0:Math.abs(Lr(e,Pt(i,t)))<s/2+Math.atan2(r,a)}function gc(i){jt.remove(i.rig.root),i.trail.dispose(),i.hpBar&&jt.remove(i.hpBar)}var U_=new Er({color:13116956,depthTest:!1}),k_=new Er({color:656904,depthTest:!1,opacity:.7,transparent:!0});function F_(i){let e=new lt,t=new pa(k_);t.scale.set(1,.09,1);let n=new pa(U_);n.scale.set(.96,.055,1),n.center.set(0,.5),n.position.x=-.48,e.add(t,n),e.renderOrder=20,e.visible=!1,jt.add(e),i.hpBar=e,i.hpFill=n}var N_={l1:{anim:"atk1",dur:.6,h0:.42,h1:.62,dmg:22,range:3.1,arc:2.5,st:12,dir:1,po:9,qi:6,next:"l2"},l2:{anim:"atk2",dur:.6,h0:.42,h1:.62,dmg:24,range:3.1,arc:2.5,st:12,dir:-1,po:9,qi:6,next:"l3"},l3:{anim:"atk3",dur:.86,h0:.54,h1:.68,dmg:40,range:3.4,arc:1.6,st:16,dir:1,po:16,qi:9,next:null,big:!0,wave:!0}},C,nn;function Hp(){C=Hu("hero",qe[T.cp==="shrine2"?"shrine2":"start"].clone().add(ie(0,0,1.6)),{hp:120,r:.42,face:Math.PI}),Object.assign(C,{stam:100,stMax:100,stDelay:0,flasks:4,castCd:0,dmgMul:1,guardT:-9,atk:null,queued:null,stepT:0,qi:En.has("qi")?100:0}),C.armed=!1,C.combatT=0,C.rig.setArmed(!1),!nn&&C.rig.d.weapon&&(nn=dc(C.rig.d.weapon,{length:1.9,grip:.5,metal:.9,rough:.25}),nn.visible=!1,jt.add(nn))}function Vi(i,e,t=6,n=!1,s=!1){if(t*=.5,C.alive&&!T.cine&&C.state==="roll"&&(C.pdT??-9)<T.t-.8)return C.pdT=T.t,bn(z_()),!1;if(!C.alive||C.inv>0||T.cine)return!1;if(T.god&&(i=0),C.state==="guard"&&!s&&Math.abs(Lr(C.face,Pt(C.pos,e)))<1.9){let a=ft(Pt(e,C.pos)),o=ie(C.pos.x-a.x*.7,1.25,C.pos.z-a.z*.7);if(T.t-C.guardT<.24)return z.emit(o,40,{color:[2.8,2,.9],speed:11,life:.4,size:.1}),z.shock(C.pos,3.2,[2.4,1.7,.7],.35,1),z.flash(o,16767120,90,.2),re.parry(),Ns(14),C.stam=Math.min(C.stMax,C.stam+15),C.inv=.4,C.fz=.1,T.shake=Math.max(T.shake,.5),_t.uFlash.value=.12,O_(e),Pp(e,!0),!1;if(C.stam-=i*(n?1.7:1.15),C.stDelay=.9,C.inv=.22,C.fz=.05,C.vel.copy(a).multiplyScalar(n?t*.6:0),z.emit(o,n?60:36,{color:[2.8,2.1,1],speed:n?13:9,life:.45,size:.09,dir:a,grav:14}),z.emit(o,14,{color:[2.6,2.6,2.6],speed:4,life:.2,size:.14,grav:0}),z.shock(ie(o.x,0,o.z),n?2.6:1.8,[2.4,1.9,1],.25,1.2),z.flash(o,16769704,n?120:70,.16),_t.uFlash.value=Math.max(_t.uFlash.value,.05),re.block(n),T.shake=Math.max(T.shake,n?.5:.28),C.stam>0)return Pp(e,!1),!1;C.stam=0,i*=.4,n=!0,re.rubble()}C.hp-=i,C.inv=.7,C.state="hit",C.st=0,C.atk=null,C.queued=null,C.y=0,ye(C,"hit",n?.42:.28),C.hitDur=n?.42:.28,Pa(!0,!0),C.rig.showWeapon(!0),nn&&(nn.visible=!1);let r=ft(Pt(e,C.pos));return C.vel.copy(r).multiplyScalar(t),C.rig.flash(1),T.shake=Math.max(T.shake,n?.9:.5),_t.uHit.value=1,T.stop=Math.max(T.stop,n?.1:.06),z.emit(ie(C.pos.x,1.1,C.pos.z),22,{color:[2.2,.25,.15],speed:6,life:.5,size:.1}),z.inkSplat(C.pos,1.6,{color:[.12,0,0],dur:4}),re.hurt(),C.hp<=0&&(C.alive=!1,C.hp=0,C.state="dead",ye(C,"dead",1.6),bn(o1())),!0}function Pp(i,e){let t=null,n=2.2;for(let r of T.enemies)if(r.alive){let a=mt(r.pos,i);a<n&&(n=a,t=r)}let s=T.boss;!t&&s&&s.alive&&s.active&&mt(s.pos,i)<2.5&&(t=s),!(!t||mt(t.pos,C.pos)>8)&&(C.ripTgt=t,C.ripPerfect=e,C.ripT=e?1.3:.85,C.ripRing||(C.ripRing=z.footRing(C.pos),C.ripRing.u.uCol.value.setRGB(2.6,1.8,.6),C.ripRing.m.scale.setScalar(1.35),C.ripRing.a=.95))}function O_(i){for(let t of T.enemies)t.alive&&mt(t.pos,i)<1.2&&(t.tele&&(t.tele.kill(),t.tele=null),t.state="stagger",t.st=0,t.stagDur=1.4,ye(t,"hit",1.4),t.vel.copy(ft(Pt(C.pos,t.pos))).multiplyScalar(7),t.trail.on=!1,t.rig.tint(0,0,0,0),t.fz=.12,t.rig.flash(1));let e=T.boss;e&&e.alive&&e.active&&mt(e.pos,i)<1.5&&(e.rig.flash(1),e.fz=.14,Vu(0,36))}function Or(i,e,t=6,n=1){vn.set(i,.06,e),z.emit(vn,t,{color:[.75,.82,1],speed:1.5*n,life:.55,size:.085,grav:4,up:1.6,drag:3,spread:.6})}function Pa(i,e){if(C.armed===i){i&&(C.combatT=5);return}C.armed=i,C.rig.setArmed(i),i?(C.combatT=5,e||re.draw()):re.sheathe()}function Ns(i){C.qi=Math.min(100,C.qi+i)}function Uu(i,e,t,n,s){let r=Pt(i.pos,C.pos),a=s?ie(i.pos.x+Math.sin(r)*i.r*.6,e,i.pos.z+Math.cos(r)*i.r*.6):ie(i.pos.x,e,i.pos.z);z.emit(a,t?34:18,{color:[2,2.3,2.8],speed:t?11:8,life:.35,size:.09,dir:ft(n).multiplyScalar(1.1)}),z.emit(a,10,{color:[.4,.04,.06],speed:4,life:.6,size:.13}),z.flash(a,12574975,t?60:30,.12),z.ring(i.pos,t?2.2:1.3,.16,[1.2,1.6,2.4]),Math.random()<(t?1:.5)&&z.inkSplat(i.pos,t?2.6:1.8),re.hit(t),i.fz=t?.13:.085,s&&(C.fz=t?.1:.06),T.shake=Math.max(T.shake,t?.5:.26)}function Ip(i){let e=1e9,t=null,n=T.boss&&T.boss.active?T.enemies.concat(T.boss):T.enemies;for(let s of n){if(!s.alive||s.state==="emerge")continue;let r=Math.max(0,mt(C.pos,s.pos)-s.r),a=Math.abs(Lr(i,Pt(C.pos,s.pos)));if(r>5.4||a>1.05&&r>1.4)continue;let o=r+a*2.4;o<e&&(e=o,t=s)}return t}function zr(i,e,t,n,s,r,a,o,c,l=!1){let h=0;for(let d of T.enemies)!d.alive||c&&c.has(d)||d.state==="emerge"||Ia(i,e,d.pos,t,n,d.r)&&(c&&c.add(d),Uu(d,1.1,o,e,l),Gp(d,s,o,i),h++);let u=T.boss;u&&u.alive&&u.active&&!(c&&c.has(u))&&u.y<1.5&&Ia(i,e,u.pos,t,n,u.r)&&(c&&c.add(u),Uu(u,2,o,e,l),Vu(s,r),h++);for(let d of T.shots)!d.dead&&Ia(i,e,d.pos,t,n,.4)&&(d.dead=!0,z.emit(d.pos,26,{color:[1.6,.6,3],speed:6,life:.5,size:.1}),re.clang(),Ns(3));return h&&a&&Ns(a*h),h}function*z_(){if(Ns(18),C.stam=Math.min(C.stMax,C.stam+30),z.ring(C.pos,2.4,.3,[1.2,1.8,2.6]),re.play("ring",{vol:.5,rate:1.4}),T.ts!==1)return;T.ts=.3;let i=0;for(;i<.11;)i+=yield;T.ts===.3&&(T.ts=1)}function Vp(i){let e=C;if(e.fz>0)if(It.has("Space"))e.wantBlink=!0,e.fz=0;else{e.fz-=i,It.has("LMB")&&(e.ripT>0?e.wantRip=!0:e.state==="atk"&&(e.queued=e.atk.next||"l1"));return}e.st+=i,e.inv=Math.max(0,e.inv-i),e.castCircle&&(e.state!=="cast"||e.st>.85)&&(z.release(e.castCircle,.45),e.castCircle=null);let t=0,n=0,s=!T.cine&&e.alive;s&&(Ft.has("KeyW")&&(n-=1),Ft.has("KeyS")&&(n+=1),Ft.has("KeyA")&&(t-=1),Ft.has("KeyD")&&(t+=1),yt.on&&(t+=yt.x,n+=yt.y));let r=Math.hypot(t,n);r&&(t/=r,n/=r),e.moving=r>0;let a=e.aimA=Pt(e.pos,li.aim),o=m=>e.stam<=0?!1:(e.stam-=m,e.stDelay=.75,!0),c=m=>{if(!e.armed){h(()=>c(m));return}e.combatT=5;let x=N_[m];o(x.st)&&(e.atk=x,e.state="atk",e.st=0,e.queued=null,e.hitSet.clear(),e.tgt=Ip(a),e.face=e.tgt?Pt(e.pos,e.tgt.pos):a,e.travel=e.tgt?wt(mt(e.pos,e.tgt.pos)-e.tgt.r-1.3,0,3.4):1,ye(e,x.anim,x.dur),e.slashed=!1)},l=()=>{o(20)&&(z.ghost(e.pos),Or(e.pos.x,e.pos.z,26,2.2),e.state="roll",e.st=0,e.rollDir=r?Math.atan2(t,n):e.face,e.face=e.rollDir,ye(e,"roll",.3),e.trail.on=!1,re.roll(),e.rig.setOpacity(.25))},h=m=>{e.state="draw",e.st=0,e.face=a,ye(e,"draw",.24),e.after=m,e.drawn=!1},u=()=>{if(!e.armed){h(u);return}if(e.combatT=5,e.castCd>0||!o(28))return;e.castCd=6,e.shot=!1,e.state="cast",e.st=0,e.face=a,ye(e,"heavy",.9),e.casted=!1;let m=Math.min(9.5,mt(e.pos,li.aim));e.castAt=e.pos.clone().addScaledVector(ft(a),Math.max(2.5,m)),e.castCircle=z.circle(e.castAt,3.3,{hold:!0,draw:.3}),re.cast()},d=()=>{let m=e.ripTgt&&e.ripTgt.alive?e.ripTgt:Ip(a);if(e.ripT=0,e.ripRing&&(z.release(e.ripRing,.15),e.ripRing=null),!m){c("l1");return}let x=Pt(m.pos,e.pos);z.ghost(e.pos),e.pos.set(m.pos.x+Math.sin(x)*(m.r+1.5),0,m.pos.z+Math.cos(x)*(m.r+1.5)),as(e.pos,e.r),e.face=Pt(e.pos,m.pos),e.vel.set(0,0,0),e.state="rip",e.st=0,e.ripHit=!1,e.ripOn=m,e.inv=1,e.combatT=5,ye(e,"atk3",.62),e.at=.62*.3,re.swing(!0),T.ts===1&&(T.ts=.4),T.cam.zt=.9},f=()=>{Pa(!0,!0),e.qi=0,e.state="ult",e.st=0,ye(e,"ult",2.2),e.inv=3,bn(H_())};if(e.ripT=(e.ripT||0)-i,e.ripT<=0&&e.ripRing&&(z.release(e.ripRing,.2),e.ripRing=null),s&&(It.has("Space")||e.wantBlink)&&["atk","cast","draw","drink","guard","idle","run"].includes(e.state)&&e.stam>0&&(e.wantBlink=!1,e.atk=null,e.queued=null,e.trail.on=!1,It.delete("Space"),l()),e.wantBlink=!1,s&&e.ripT>0&&(It.has("LMB")||e.wantRip)&&(e.state==="guard"||e.state==="idle"||e.state==="run")&&(It.delete("LMB"),e.wantRip=!1,d()),e.ripT<=0&&(e.wantRip=!1),e.state==="idle"||e.state==="run"||e.state==="fly"){let m=s&&Ft.has("ShiftLeft")&&r&&e.stam>0,x=m?11.5:5.8;if(e.vel.x=kt(e.vel.x,t*x,m?7:14,i),e.vel.z=kt(e.vel.z,n*x,m?7:14,i),m)e.state!=="fly"&&(e.state="fly",ye(e,"fly"),e.rig.showWeapon(!1),nn&&(nn.visible=!0),re.swing(!0),z.ring(e.pos,2.4,.3,[1,1.6,2.4])),e.stam-=16*i,e.stDelay=.5,e.face=Gn(e.face,Math.atan2(t,n)-.55,10,i),e.y=kt(e.y,.42+Math.sin(T.t*5)*.04,10,i),Math.random()<.7&&z.emit(ie(e.pos.x,.25,e.pos.z),1,{color:[.6,1.2,2.2],speed:1.2,life:.5,size:.1,grav:-.5});else if(e.state==="fly"&&(e.rig.showWeapon(!0),nn&&(nn.visible=!1)),e.y=kt(e.y,0,14,i),r){if(e.face=Gn(e.face,Math.atan2(t,n),16,i),e.state="run",e.anim!=="run"&&ye(e,"run"),e.stepT-=i,e.stepT<0){e.stepT=.3,re.step(),e.foot=!e.foot;let p=Math.cos(e.face)*(e.foot?.13:-.13),b=-Math.sin(e.face)*(e.foot?.13:-.13);Or(e.pos.x+p,e.pos.z+b,7,1),z.sprite(z.ink[Math.random()*6|0],{x:e.pos.x+p,z:e.pos.z+b},e.face,.2,.36,{y:.04,dur:7,color:[.02,.025,.05],add:!1,alpha:!0,a:.4,in:.02,order:2})}}else{e.state="idle";let p=e.armed?"idleA":"idle";e.anim!==p&&e.anim!=="sheathe"&&ye(e,p),e.anim==="sheathe"&&e.at>=e.ad&&ye(e,"idle")}(T.enemies.some(p=>p.alive&&mt(p.pos,e.pos)<16)||T.boss&&T.boss.active&&T.boss.alive)&&(e.combatT=Math.max(e.combatT,2)),e.combatT-=i,e.armed&&e.combatT<=0&&!T.cine&&(Pa(!1),e.state==="idle"&&ye(e,"sheathe",.34)),s&&e.state!=="fly"&&(It.has("LMB")?c("l1"):It.has("KeyF")?u():It.has("Space")?l():Ft.has("RMB")&&e.stam>0?(e.armed||Pa(!0),e.state="guard",e.st=0,e.guardT=T.t,ye(e,"guard")):It.has("KeyQ")&&e.qi>=100?f():It.has("KeyE")&&e.flasks>0&&e.hp<e.max&&(e.flasks--,e.state="drink",e.st=0,ye(e,"drink",1),re.heal()))}else if(e.state==="guard")e.combatT=5,e.face=Gn(e.face,a,14,i),e.vel.x=kt(e.vel.x,t*2.3,12,i),e.vel.z=kt(e.vel.z,n*2.3,12,i),e.stDelay=Math.max(e.stDelay,.2),s&&It.has("LMB")?c("l1"):s&&It.has("Space")?l():s&&It.has("KeyF")?u():(!Ft.has("RMB")||!s)&&(e.state="idle",ye(e,"idleA"));else if(e.state==="rip"){let m=e.st/.44,x=e.ripOn;if(e.trail.on=m<.75,e.vel.set(0,0,0),m>=.42&&!e.ripHit){e.ripHit=!0,T.ts===.4&&(T.ts=1),T.cam.zt=1;let g=e.ripPerfect,p=e.face;z.crescent(e.pos,p,4.2,1,{power:2.2,dur:.36,roll:-Math.PI/2,y:1.6}),z.crescent(e.pos,p,3.8,-1,{power:1.6,dur:.3}),x&&x.alive&&(z.shock(x.pos,g?6:4.2,[2.6,1.9,.8],.5),z.shock(x.pos,2.6,[1.2,1.8,2.8],.3,.9),z.impact(x.pos,3,[2.4,1.7,.7],1.3),z.inkBurst(x.pos,5,4),z.flash(x.pos,16769184,160,.3),z.emit(ie(x.pos.x,1.3,x.pos.z),60,{color:[2.8,2,.9],speed:13,life:.5,size:.11,dir:ft(p)}),Uu(x,x===T.boss?2:1.1,!0,p,!0),x===T.boss?Vu((g?110:60)*e.dmgMul,g?45:25):Gp(x,(g?170:90)*e.dmgMul,!0),Ns(g?20:10)),Lp(e.pos.clone().addScaledVector(ft(p),1),p,{size:g?4.4:3.4,dmg:g?60:36,life:.75,color:g?[2.6,1.9,.8]:[.9,1.6,3],scar:!0,skip:x}),re.riposte(),T.shake=Math.max(T.shake,1),T.stop=Math.max(T.stop,.12),_t.uFlash.value=.16}m>=1&&(e.trail.on=!1,e.state="idle",ye(e,"idleA"))}else if(e.state==="draw"){e.vel.multiplyScalar(Math.exp(-12*i));let m=e.st/.24;if(m>=.45&&!e.drawn&&(e.drawn=!0,Pa(!0),z.emit(ie(e.pos.x,1.5,e.pos.z),8,{color:[1.2,2,2.8],speed:3,life:.3,size:.07})),m>=.8){let x=e.after;e.after=null,e.state="idle",x&&x()}}else if(e.state==="atk"){let m=e.atk,x=e.st/m.dur;if(s&&It.has("LMB")&&(e.queued=m.next||"l1"),s&&It.has("KeyF")&&(e.queued="cast"),s&&x>m.h1&&Ft.has("RMB")&&!e.queued&&e.stam>0){e.trail.on=!1,e.atk=null,e.state="guard",e.st=0,e.guardT=T.t,ye(e,"guard");return}let g=Math.max(0,m.h0-.26),p=e.tgt&&e.tgt.alive?e.tgt:null;x<m.h0&&(e.face=Gn(e.face,p?Pt(e.pos,p.pos):a,18,i),p&&(e.travel=Math.min(e.travel,Math.max(0,mt(e.pos,p.pos)-p.r-1.3)))),ft(e.face,e.vel).multiplyScalar(x>g&&x<m.h0?e.travel/((m.h0-g)*m.dur):x>=m.h0&&x<m.h1?1.4:0),e.trail.on=x>m.h0-.1&&x<m.h1+.06,x>=m.h0&&!e.slashed&&(e.slashed=!0,re.swing(m.big),z.crescent(e.pos,e.face,m.range,m.dir,m.big?{power:1.5,dur:.3,roll:-Math.PI/2,y:1.5}:{power:1,dur:.24}),m.wave&&(Lp(e.pos.clone().addScaledVector(ft(e.face),1.2),e.face),T.shake=Math.max(T.shake,.35),z.ring(e.pos.clone().addScaledVector(ft(e.face),1.6),3.2,.35,[1,1.5,2.6]))),x>=m.h0&&x<=m.h1&&zr(e.pos,e.face,m.range,m.arc,m.dmg*e.dmgMul,m.po,m.qi,m.big,e.hitSet,!0),x>=.72&&e.queued&&e.stam>0?(e.trail.on=!1,e.queued==="cast"?u():c(e.queued)):x>=.45&&s&&It.has("Space")?l():x>=1&&(e.state="idle",e.atk=null,e.trail.on=!1,ye(e,"idleA"))}else if(e.state==="cast"){let m=e.st/.9;e.vel.multiplyScalar(Math.exp(-10*i));let x=e.castAt;if(m<.5){e.rig.tip(zt);for(let g=0;g<2;g++){let p=Math.random()*xn;z.emit(ie(zt.x+Math.cos(p)*.9,zt.y+(Math.random()-.5),zt.z+Math.sin(p)*.9),1,{color:[.6,1.4,3],speed:1,life:.25,size:.09,grav:0,up:0,dir:ie(-Math.cos(p)*4,0,-Math.sin(p)*4),drag:0})}}if(m>=.34&&!e.shot){e.shot=!0,e.rig.tip(zt);let g=z.bolt([.6,1.4,3],5,.9),p=zt.clone();z.flash(p,10473727,80,.25),re.swing(!0),bn((function*(){let b=0;for(;b<.35;)b+=yield,g.m.position.set(p.x,p.y+b*70,p.z);z.kill(g)})())}if(m>=.5&&!e.casted){e.casted=!0;let g=Math.atan2(e.pos.z-x.z,e.pos.x-x.x);for(let p=0;p<8;p++){let b=p/8*xn+.3,y=ie(x.x+Math.cos(b)*2.2,0,x.z+Math.sin(b)*2.2);z.dropSword(y,p*.05,v=>{zr(v,0,1.9,xn,10,4,2,!1,null),T.shake=Math.max(T.shake,.2),re.hit()},{lean:g+(Math.random()-.5)*.7,slant:.34})}z.dropSword(x,.52,p=>{zr(p,0,3.2,xn,30,14,4,!0,null),z.shock(p,5.2,[.6,1.3,2.8],.5),z.shock(p,3.2,[1.4,1.8,2.6],.32,.6),z.pillar(p,2.2,7,[.5,1.2,2.8],.6),z.inkBurst(p,4,4),re.boom(),T.shake=Math.max(T.shake,.8),T.stop=Math.max(T.stop,.06),_t.uFlash.value=.1},{big:!0,scale:2.3,height:22,fall:.24,stay:.9,lean:g,slant:.18})}m>=.62&&s&&It.has("Space")?l():m>=1&&(e.state="idle",ye(e,"idleA"))}else if(e.state==="roll"){let m=e.st/.3;e.inv=Math.max(e.inv,.06),ft(e.rollDir,e.vel).multiplyScalar(Ht(26,9,m)),Math.random()<.8&&z.emit(ie(e.pos.x,.9,e.pos.z),1,{color:[.3,.6,1.2],speed:.5,life:.4,size:.14,grav:0}),m>=1&&(e.rig.setOpacity(1),Or(e.pos.x,e.pos.z,22,2),z.ring(e.pos,1.6,.25,[.8,1.3,2.2]),e.state="idle",ye(e,"idle"))}else e.state==="hit"?(e.vel.multiplyScalar(Math.exp(-7*i)),e.rig.setOpacity(1),e.st>=e.hitDur&&(e.state="idle",ye(e,"idleA"))):e.state==="drink"?(e.vel.x=kt(e.vel.x,t*1.6,10,i),e.vel.z=kt(e.vel.z,n*1.6,10,i),e.st>.3&&e.st<.9&&(e.hp=Math.min(e.max,e.hp+75*i),Math.random()<.5&&z.emit(ie(e.pos.x,.3+Math.random()*1.4,e.pos.z),1,{color:[.6,2.2,1],speed:.6,life:.8,size:.09,grav:-2})),e.st>=1&&(e.state="idle",ye(e,"idle"))):e.state==="dead"||e.state==="ult"?e.vel.multiplyScalar(Math.exp(-8*i)):e.state==="scripted"&&e.vel.set(0,0,0);if(e.castCd-=i,e.stDelay-=i,e.stDelay<=0&&(e.stam=Math.min(e.stMax,e.stam+42*i)),e.stam=Math.max(-8,e.stam),zt.copy(e.pos),e.pos.addScaledVector(e.vel,i),as(e.pos,e.r),(!(an(e.pos.x,e.pos.z)+e.r<.12)||e.pos.x!==e.pos.x)&&e.pos.copy(zt),T.boss&&T.boss.alive){let m=mt(e.pos,T.boss.pos),x=T.boss.r+e.r;if(m<x&&T.boss.y<.5){let g=Pt(T.boss.pos,e.pos);e.pos.x=T.boss.pos.x+Math.sin(g)*x,e.pos.z=T.boss.pos.z+Math.cos(g)*x}}e.speed=Math.hypot(e.vel.x,e.vel.z),nn&&nn.visible&&(nn.position.set(e.pos.x,e.y+.06,e.pos.z),nn.rotation.set(0,Math.atan2(e.vel.x,e.vel.z),0))}function Lp(i,e,t={}){let n=ft(e),s=t.size||2.6,r=z.wave(i,e,s,{roll:-Math.PI/2,color:t.color});T.waves.push({s:r,pos:i.clone(),d:n,t:0,hit:new Set(t.skip?[t.skip]:[]),face:e,size:s,dmg:t.dmg||26,life:t.life||.55,col:t.color||[.8,1.4,2.6],scar:!!t.scar,st:0})}function B_(i){for(let e=T.waves.length-1;e>=0;e--){let t=T.waves[e];t.t+=i,t.pos.addScaledVector(t.d,22*i);let n=t.size*(1+t.t*1.1);t.s.m.position.set(t.pos.x-t.d.x*n*.8,1,t.pos.z-t.d.z*n*.8),t.s.m.scale.set(n,1,n),on.setPush(7,t.pos.x,t.pos.z,2.2,1.2),Math.random()<.8&&z.emit(ie(t.pos.x,.9,t.pos.z),2,{color:t.col,speed:2,life:.35,size:.1,grav:0}),t.scar&&(t.st-=i,t.st<=0&&(t.st=.045,z.impact(t.pos,1.5,t.col,.9),z.emit(ie(t.pos.x,.2,t.pos.z),5,{color:t.col,speed:5,life:.4,size:.09}))),zr(t.pos,t.face,t.size*.75,xn,t.dmg,12,4,!0,t.hit),(t.t>t.life||an(t.pos.x,t.pos.z)>2)&&(z.release(t.s,.22),on.setPush(7,0,0,.001,0),T.waves.splice(e,1))}}function*H_(){let i=C;T.ts=.45,T.cam.zt=1.25,re.cast(),re.bell();let e=i.pos.clone(),t=z.circle(e,8.5,{gold:!0,hold:!0,draw:.5});z.flash(e,16769184,120,.6),z.shock(e,9,[2.4,1.7,.6],.6),z.pillar(e,1.2,9,[2.2,1.5,.5],.9),z.dropSword(e.clone().add(ie(0,0,-2.4)),1.55,null,{gold:!0,big:!0,scale:3.4,height:30,fall:.22,stay:1.2,lean:Math.PI/2,slant:.1}),yield*pt(.42),T.ts=.7,_t.uBlur.value=.9;let n=84,s=0;for(let o=0;o<n;o++){let c=o/n*xn*3+Math.random()*.2,l=2.6+o/n*5.2+Math.random()*.8;z.dropSword(ie(e.x+Math.cos(c)*l,0,e.z+Math.sin(c)*l),o*.014,h=>{s+=zr(h,0,2,xn,9,3,0,!1,null),Math.random()<.3&&re.hit(),T.shake=Math.max(T.shake,.3)},{gold:o%5===0,height:20,stay:.8,lean:c,slant:.22})}let r=0,a=0;for(;r<1.25;){let o=yield;if(r+=o,a-=o,a<0){a=.16;let c=Math.random()*xn,l=2+Math.random()*6;z.lightning(ie(e.x+Math.cos(c)*l,0,e.z+Math.sin(c)*l)),re.thunder(),_t.uFlash.value=.1}_t.uBlur.value=.9*(1-r/1.25)+.25}T.ts=1,re.boom(),T.shake=1.3,T.stop=.1,z.ring(e,11,.6,[3,2.2,1]),z.shock(e,11,[2.6,1.8,.6],.7),z.shock(e,7,[3,2.6,1.6],.45,.8),z.pillar(e,4.5,13,[2.4,1.6,.5],1),z.flash(e,16773312,500,.5),z.emit(ie(e.x,.5,e.z),120,{color:[2.6,2,1],speed:14,life:.9,size:.13}),z.inkBurst(e,6,9),zr(e,0,9,xn,70,45,0,!0,null),_t.uBlur.value=0,_t.uFlash.value=.35,z.release(t,.8),T.cam.zt=1,yield*pt(.45),i.alive&&i.state==="ult"&&(i.state="idle",ye(i,"idleA")),i.inv=.3}var V_={walker:{hp:110,sp:3.4,range:2.1,wind:.6,sd:.5,dmg:10,arc:1.9,reach:2.5,souls:20,lunge:7,cd:1.9,windA:"wind",anim:"atk1",combo:.45},spear:{hp:190,sp:2.7,range:3.4,wind:.85,sd:.55,dmg:16,arc:.7,reach:4.3,souls:45,lunge:9,cd:2.4,windA:"wind",anim:"thrust",tough:!0,r:.55,guard:.4},caster:{hp:80,sp:2.4,range:11,wind:1.2,sd:.4,dmg:12,souls:35,cd:3.2,ranged:!0,windA:"cast",anim:"castrel"}};function vc(i,e,t=0){let n=V_[i];e=e.clone(),as(e,1);let s=Hu(i,e,{hp:n.hp,r:n.r||.45,face:Pt(e,C.pos),trail:[.7,.14,.08],trailN:12});return Object.assign(s,{T:n,state:"emerge",st:-t,cd:.6+Math.random()*1.5,strafe:Math.random()<.5?1:-1,hits:0}),ye(s,"emerge",1.5),s.rig.root.visible=!1,F_(s),T.enemies.push(s),s}function Gp(i,e,t,n=C.pos){let s=i.T;if(s.guard&&!t&&i.state==="chase"&&Math.random()<s.guard){let c=ft(Pt(n,i.pos));z.emit(ie(i.pos.x-c.x*.5,1.3,i.pos.z-c.z*.5),18,{color:[2.2,2,1.6],speed:7,life:.3,size:.08}),re.clang(),i.vel.copy(c).multiplyScalar(2.5),i.cd=Math.min(i.cd,.35),n===C.pos&&(C.vel.copy(c).multiplyScalar(-4),C.fz=.1);return}let r=i.state==="wind"&&!s.ranged&&i.st>s.wind*.45;i.hp-=e*(r?1.3:1),i.rig.flash(1);let a=ft(Pt(n,i.pos));if(i.hits++,i.hpBar.visible=!0,i.hp<=0){i.alive=!1,i.state="dead",i.st=0,ye(i,"dead",1.5),i.vel.copy(a).multiplyScalar(t?12:8),i.tele&&(i.tele.kill(),i.tele=null),i.orb&&(z.release(i.orb,.2),i.orb=null),T.souls+=s.souls,G_(i),i.trail.on=!1,i.hpBar.visible=!1,i.rig.tint(0,0,0,0),re.enemyDie(),z.emit(ie(i.pos.x,1,i.pos.z),40,{color:[.75,.7,1.3],speed:3,life:1.3,size:.12,grav:-3,drag:1}),z.inkBurst(i.pos,2,1.6);return}let o=t||r||!s.tough||i.hits%3===0;i.vel.copy(a).multiplyScalar(r?10:t?11:o?6.5:2.4),re.enemyHurt(),o&&(i.tele&&(i.tele.kill(),i.tele=null),i.orb&&(z.release(i.orb,.2),i.orb=null),i.state="stagger",i.st=0,i.stagDur=r?1:t?.6:.42,ye(i,"hit",i.stagDur),i.trail.on=!1,i.rig.tint(0,0,0,0)),r&&(z.emit(ie(i.pos.x,1.3,i.pos.z),30,{color:[2.6,1.9,.8],speed:9,life:.45,size:.09}),z.ring(i.pos,2.6,.25,[2.4,1.8,.8]),re.clang(),Ns(8),T.shake=Math.max(T.shake,.45),i.fz=.16)}function G_(i){let e=Math.random;ci.drop(i.pos,e()<.5?"coin":"jade",0),e()<.5&&ci.drop(i.pos,"coin",0,.06),e()<.28&&ci.drop(i.pos,"gourd",1,.1),e()<.22&&ci.drop(i.pos,"pill",1,.14),i.kind==="spear"&&e()<.35&&ci.drop(i.pos,"page",2,.2)}var ku={coin:0,jade:0,gourd:0,pill:0,page:0};function W_(i){let e=yu[i.type].name;re.pick(i.rar),ku[i.type]++,i.type==="coin"?T.souls+=5:i.type==="jade"?T.souls+=20:i.type==="gourd"?C.flasks=Math.min(6,C.flasks+1):i.type==="pill"?Ns(35):C.dmgMul+=.1,zt.set(C.pos.x,1.2,C.pos.z).project(Tn);let t=(zt.x*.5+.5)*innerWidth,n=(-zt.y*.5+.5)*innerHeight,s=Oe("bag").getBoundingClientRect(),r=s.left+s.width/2,a=s.top+s.height/2,o=document.createElement("div");o.className="mote",o.style.cssText=`left:${t}px;top:${n}px;color:${Ds[i.rar].css};background:${Ds[i.rar].css}`,document.body.appendChild(o);let c=o.animate([{transform:"translate(-50%,-50%) scale(1.6)",opacity:1,offset:0},{transform:`translate(calc(-50% + ${(r-t)*.35}px), calc(-50% + ${(a-n)*.35-90}px)) scale(1.2)`,opacity:1,offset:.45},{transform:`translate(calc(-50% + ${r-t}px), calc(-50% + ${a-n}px)) scale(0.5)`,opacity:.9,offset:1}],{duration:620,easing:"cubic-bezier(.4,0,.6,1)"});c.onfinish=()=>{o.remove();let l=Oe("bag");l.classList.remove("bump"),l.offsetWidth,l.classList.add("bump"),l.style.setProperty("--c",Ds[i.rar].css),re.bag(),q_()},i.type!=="coin"&&Ie.toast(e+(i.type==="page"?"\u3000\u5251\u4F24 +10%":i.type==="pill"?"\u3000\u5251\u610F +35":i.type==="gourd"?"\u3000+1":""),i.rar)}function q_(){let i=Object.values(ku).reduce((e,t)=>e+t,0);Oe("bagn").textContent=i,Oe("baglist").innerHTML=Object.entries(ku).filter(([,e])=>e).map(([e,t])=>`<div><span>${yu[e].name}</span><b>${t}</b></div>`).join("")||"<div><span>\u7A7A</span></div>"}function X_(i,e){let t=i.T;if(i.fz>0){i.fz-=e;return}i.st+=e,i.cd-=e;let n=mt(i.pos,C.pos),s=Pt(i.pos,C.pos),r=ft(i.face);switch(i.state){case"emerge":if(i.st<0)return;i.rig.root.visible||(i.rig.root.visible=!0,z.emit(ie(i.pos.x,.2,i.pos.z),30,{color:[.6,.5,.9],speed:3,life:1,size:.16,grav:-1}),z.inkSplat(i.pos,2.4),z.ring(i.pos,2.2,.6,[.7,.4,1]),re.noise(.7,200,900,.15,"bandpass",2)),i.at=Math.min(i.st,1.5),on.setPush(1+T.enemies.indexOf(i)%5,i.pos.x,i.pos.z,1.6,1),i.st>=1.5&&(i.state="chase",ye(i,"run")),i.vel.set(0,0,0);break;case"chase":{i.face=Gn(i.face,s,7,e);let a=ie();if(T.cine||!C.alive){i.vel.multiplyScalar(Math.exp(-6*e)),i.anim!=="idle"&&ye(i,"idle");break}if(t.ranged){let h=n>11?1:n<7?-1:0;a.copy(ft(s)).multiplyScalar(h*t.sp).addScaledVector(ft(s+Math.PI/2),i.strafe*1.3)}else{let l=T.enemies.filter(h=>h.alive&&(h.state==="wind"||h.state==="strike")).length>=1&&n<6.5;n>t.range*.85&&!l?a.copy(ft(s)).multiplyScalar(t.sp):a.copy(ft(s+Math.PI/2)).multiplyScalar(i.strafe*1.5).addScaledVector(ft(s),l?n<4.5?-1.6:n>6?1.2:0:0)}for(let l of T.enemies)if(l!==i&&l.alive){let h=mt(i.pos,l.pos);h<1.5&&h>.01&&a.addScaledVector(ie(i.pos.x-l.pos.x,0,i.pos.z-l.pos.z).normalize(),(1.5-h)*4)}i.vel.x=kt(i.vel.x,a.x,6,e),i.vel.z=kt(i.vel.z,a.z,6,e);let o=Math.hypot(i.vel.x,i.vel.z)>.5;o&&i.anim!=="run"&&ye(i,"run"),!o&&i.anim!=="idle"&&ye(i,"idle");let c=T.enemies.filter(l=>l.alive&&(l.state==="wind"||l.state==="strike")&&!l.T.ranged).length;i.cd<=0&&(t.ranged?n<15:n<t.range+.6&&c<1)&&(i.combo=0,i.state="wind",i.st=0,ye(i,t.windA,t.wind),t.ranged?(re.cast(),i.orb=z.circle(i.pos,1.5,{hold:!0,color:[1.5,.4,2.8],draw:.3}),i.mode=n<6.5||Math.random()<.4?"pillar":"volley",i.mode==="pillar"&&(i.aimP=C.pos.clone().addScaledVector(C.vel,.45).setY(0),i.tele=z.telegraph(0,i.aimP,0,2.3,2.3,2,[.7,.25,1.3]))):i.tele=t.arc<1?z.telegraph(2,i.pos.clone().addScaledVector(ft(s),t.reach/2+.3),s,.55,t.reach/2+.3):z.telegraph(1,i.pos,s,t.reach+.4,t.reach+.4,t.arc));break}case"wind":if(i.vel.multiplyScalar(Math.exp(-8*e)),i.st<t.wind*.75&&(i.face=Gn(i.face,s,9,e),i.tele&&!t.ranged&&i.tele.place(t.arc<1?i.pos.clone().addScaledVector(r,t.reach/2+.3):i.pos,i.face,t.arc<1?.55:t.reach+.4,t.arc<1?t.reach/2+.3:t.reach+.4)),i.tele&&(i.tele.prog=i.st/t.wind),t.ranged&&Math.random()<.7&&z.emit(ie(i.pos.x+r.x*.5+(Math.random()-.5)*1.6,1+Math.random()*1.4,i.pos.z+r.z*.5+(Math.random()-.5)*1.6),1,{color:[1.5,.4,3],speed:.4,life:.4,size:.1,grav:-1.5,drag:0}),i.rig.tint(t.ranged?.5:1,.1,t.ranged?1:.05,Et(.3,1,i.st/t.wind)*.5),i.st>=t.wind)if(i.rig.tint(0,0,0,0),i.tele&&(i.tele.kill(),i.tele=null),i.orb&&(z.release(i.orb,.3),i.orb=null),i.state="strike",i.st=0,i.struck=!1,ye(i,t.anim,t.sd),t.ranged)if(i.mode==="pillar")z.pillar(i.aimP,2.3,3.8),re.fire(),re.rubble(),T.shake=Math.max(T.shake,.35),mt(i.aimP,C.pos)<2.3&&C.y<1&&Vi(14,i.aimP,5,!1,!0);else{re.fire();for(let a of[-.3,0,.3])j_(i,i.face+a)}else re.swing(),z.crescent(i.pos,i.face,t.reach*.9,1,{red:!0,y:1,power:.8});break;case"strike":{let a=i.st/t.sd;t.ranged?i.vel.multiplyScalar(Math.exp(-8*e)):(i.vel.copy(r).multiplyScalar(t.lunge*(1-Et(.25,.6,a))),i.trail.on=a>.2&&a<.7,!i.struck&&a>.3&&a<.62&&Ia(i.pos,i.face,C.pos,t.reach,Math.max(t.arc,.9),C.r)&&(i.struck=!0,Vi(t.dmg,i.pos,7))),a>=1&&(i.trail.on=!1,t.combo&&!i.combo&&n<t.reach+1.2&&Math.random()<t.combo?(i.combo=1,i.state="wind",i.st=t.wind*.45,ye(i,t.windA,t.wind),i.at=i.st,i.tele=z.telegraph(1,i.pos,i.face,t.reach+.4,t.reach+.4,t.arc)):(i.state="recover",i.st=0,ye(i,"idle"),i.cd=t.cd*(.8+Math.random()*.6)));break}case"recover":i.vel.multiplyScalar(Math.exp(-8*e)),i.st>.55&&(i.state="chase",i.strafe=Math.random()<.5?1:-1);break;case"stagger":i.vel.multiplyScalar(Math.exp(-6*e)),i.rig.tint(0,0,0,0),i.orb&&(z.release(i.orb,.2),i.orb=null),i.st>(i.stagDur||.45)&&(i.state="chase",i.cd=Math.max(i.cd,.4));break;case"dead":i.vel.multiplyScalar(Math.exp(-6*e)),i.rig.setOpacity(1-Et(.7,1.5,i.st)),i.st>.5&&Math.random()<.4&&z.emit(ie(i.pos.x+(Math.random()-.5),.4,i.pos.z+(Math.random()-.5)),1,{color:[.6,.55,1.1],speed:.8,life:1.2,size:.1,grav:-2.5}),i.st>1.6&&(i.gone=!0);break}i.pos.addScaledVector(i.vel,e),as(i.pos,i.r),i.speed=Math.hypot(i.vel.x,i.vel.z),i.speed>1.5&&Math.random()<e*5&&Or(i.pos.x,i.pos.z,4,.9),i.hpBar.visible&&(i.hpBar.position.set(i.pos.x,i.rig.d.H+.35,i.pos.z),i.hpFill.scale.x=.96*wt(i.hp/i.max,0,1))}function j_(i,e){let t=ft(e),n=z.bolt([1.5,.4,3.2],2.3,.85);n.m.position.set(i.pos.x+t.x*.8,1.5,i.pos.z+t.z*.8),z.aim(n,t),z.flash(n.m.position,11559167,40,.15),T.shots.push({h:n,pos:n.m.position,vel:t.multiplyScalar(10.5),t:0,dmg:Math.round(i.T.dmg*.7),dead:!1,from:i.pos.clone()})}function Y_(i){for(let e=T.shots.length-1;e>=0;e--){let t=T.shots[e];t.t+=i;let n=ie(C.pos.x-t.pos.x,0,C.pos.z-t.pos.z).normalize().multiplyScalar(10.5);t.vel.lerp(n,1-Math.exp(-.75*i)),t.pos.addScaledVector(t.vel,i),t.pos.y=1.25+Math.sin(t.t*6)*.1,z.aim(t.h,t.vel),Math.random()<.6&&z.emit(t.pos,1,{color:[1.4,.5,3],speed:.6,life:.45,size:.09,grav:0}),!t.dead&&mt(t.pos,C.pos)<.75&&C.y<1&&Vi(t.dmg,t.from,5)&&(t.dead=!0),(t.dead||t.t>4||an(t.pos.x,t.pos.z)>.6)&&(z.emit(t.pos,16,{color:[1.6,.6,3],speed:4,life:.4,size:.1}),z.impact(t.pos,1,[1.4,.4,3],.5),z.flash(t.pos,11559167,30,.15),z.kill(t.h),T.shots.splice(e,1))}}var Dp="\u5389\u82CD",Up="\u9547\u5CB3\u53F0\u5B88\u5C06";function Wp(){let i=T.boss=Hu("boss",ie(0,0,-57),{hp:1100,r:1.5,face:0,trail:[.9,.16,.08],trailN:26});Object.assign(i,{active:!1,phase:1,posture:0,co:null,tele:[],summoned:!1,state:"statue"}),ye(i,"statue"),i.rig.tint(0,0,0,0);for(let e of i.rig.mats)e.color.multiplyScalar(.45);return i}function xc(i){for(let e of i.tele)e.kill();i.tele.length=0,i.trail.on=!1,i.co&&(i.co.dead=!0),i.co=null,i.rig.tint(0,0,0,0),i.rig.spinY=0,i.y=0}function Vu(i,e){let t=T.boss;if(t.state==="broken"&&(i*=1.7),t.hp-=i,t.rig.flash(.9),t.hp<=0){t.hp=0,t.alive=!1,xc(t),bn(a1());return}if(t.phase===1&&t.hp<t.max*.55){t.phase=2,xc(t),t.co=bn(e1());return}t.state!=="broken"&&t.state!=="trans"&&(t.posture+=e,t.posture>=100&&(xc(t),t.co=bn(K_())))}function*K_(){let i=T.boss;i.state="broken",i.posture=100,ye(i,"kneel",3.4),re.boom(),T.shake=.8,z.ring(i.pos,6,.6,[2,1.6,.8]),z.emit(ie(i.pos.x,2,i.pos.z),60,{color:[2.4,1.8,.8],speed:9,life:.7,size:.12});let e=0;for(;e<3.4;){let t=yield;e+=t,i.posture=100*(1-e/3.4),i.vel.set(0,0,0)}i.posture=0,i.state="fight",ye(i,"idle"),i.co=bn(Gu())}function*Fu(i,e,t=6){let n=0;for(;n<e;){let s=yield;n+=s,i.face=Gn(i.face,Pt(i.pos,C.pos),t,s)}}function*kp(i,e,t=2.6){let n=0;for(i.anim!=="run"&&ye(i,"run");n<t&&mt(i.pos,C.pos)>e;){let s=yield;n+=s,i.face=Gn(i.face,Pt(i.pos,C.pos),5,s),i.vel.copy(ft(i.face)).multiplyScalar(i.phase===2?5.8:4.6)}i.vel.set(0,0,0)}function*Pu(i,e=1,t=.7){ye(i,e>0?"windA":"windB",t);let r=z.telegraph(1,i.pos,i.face,6.4,6.4,2.8);i.tele.push(r);let a=0;for(;a<t;){let c=yield;a+=c,a<t*.7&&(i.face=Gn(i.face,Pt(i.pos,C.pos),5,c)),r.place(i.pos,i.face,6.4,6.4),r.prog=a/t,i.rig.tint(1,.1,.05,a/t*.4)}r.kill(),i.rig.tint(0,0,0,0),ye(i,e>0?"atk1":"atk2",.55),re.swing(!0),i.trail.on=!0,z.crescent(i.pos,i.face,6.4,e,{red:!0,y:1.7,power:1.6,dur:.32}),z.inkBurst(i.pos.clone().addScaledVector(ft(i.face),3.5),3,4),a=0;let o=!1;for(;a<.55;){let c=yield;a+=c,i.vel.copy(ft(i.face)).multiplyScalar(a<.22?7:0),!o&&a>.1&&a<.3&&Ia(i.pos,i.face,C.pos,6.4,2.8,C.r)&&(o=Vi(18,i.pos,11,!0))}i.trail.on=!1,i.vel.set(0,0,0)}function*Fp(i){let t=i.phase===2?.7:.9;ye(i,"thrustW",t);let n=z.telegraph(2,i.pos,i.face,1.4,13/2);i.tele.push(n);let s=0;for(;s<t;){let o=yield;s+=o,s<t*.72&&(i.face=Gn(i.face,Pt(i.pos,C.pos),7,o)),n.place(i.pos.clone().addScaledVector(ft(i.face),13/2),i.face,1.4,13/2),n.prog=s/t,i.rig.tint(1,.1,.05,s/t*.4)}n.kill(),i.rig.tint(0,0,0,0),ye(i,"thrust",.5),re.swing(!0),re.boom(),i.trail.on=!0,s=0;let r=!1,a=ft(i.face);for(;s<.3;){let o=yield;s+=o,i.vel.copy(a).multiplyScalar(38*(1-s/.3)),z.emit(ie(i.pos.x,.2,i.pos.z),3,{color:[1.2,.5,.3],speed:3,life:.5,size:.12}),Math.random()<.3&&z.inkSplat(i.pos,2.2),!r&&mt(i.pos,C.pos)<3&&Math.abs(Lr(i.face,Pt(i.pos,C.pos)))<1.2&&(r=Vi(24,i.pos,14,!0))}i.trail.on=!1,i.vel.set(0,0,0),yield*pt(.2)}function*Z_(i){ye(i,"crouch",.45),yield*Fu(i,.45,8);let e=i.pos.clone(),t=C.pos.clone().addScaledVector(C.vel,.35);as(t,2);let n=5.6,s=.85,r=z.telegraph(0,t,0,n,n);i.tele.push(r),ye(i,"leap",s),re.swing(!0);let a=0;for(;a<s;){let l=yield;a+=l;let h=a/s;i.pos.lerpVectors(e,t,Et(0,1,h)),i.y=Math.sin(h*Math.PI)*7,i.face=Gn(i.face,Pt(e,t),8,l),r.prog=h}i.y=0,r.kill(),ye(i,"slam",.6),re.boom(),T.shake=1.3,T.stop=.07,z.flash(i.pos,16752736,300,.4),z.emit(ie(i.pos.x,.3,i.pos.z),90,{color:[1.6,1.2,.9],speed:12,life:.9,size:.14}),z.inkBurst(i.pos,5,6),mt(i.pos,C.pos)<n&&Vi(28,i.pos,14,!0,!0),z.shock(i.pos,7,[3,.9,.4],.5),z.ring(i.pos,13,.8,[3,1,.4]);let o=i.pos.clone();a=0;let c=!1;for(;a<.8;){let l=yield;a+=l;let h=13*a/.8,u=mt(o,C.pos);!c&&Math.abs(u-h)<.9&&h>n&&C.y<.3&&(c=Vi(12,o,9,!1,!0)||C.inv>0)}}function*J_(i,e=7){ye(i,"roar",1.4),re.roar(),T.shake=.5,z.ring(i.pos,8,.7,[.8,1,2.6]),yield*pt(.5);for(let t=0;t<e;t++){let n=t%2===0?C.pos.clone().addScaledVector(C.vel,.4):C.pos.clone().add(ie((Math.random()-.5)*9,0,(Math.random()-.5)*9));bn(Q_(n,1)),yield*pt(.24)}yield*pt(.5)}function*Q_(i,e,t=2.7){let n=z.telegraph(0,i,0,t,t,2,[.5,.7,1.6]),s=0;for(;s<e;)s+=yield,n.prog=s/e;n.kill(),z.lightning(i),re.thunder(),T.shake=Math.max(T.shake,.5),_t.uFlash.value=.12,mt(i,C.pos)<t&&Vi(16,i,6,!0,!0)}function*$_(i){ye(i,"windS",.6);let e=z.telegraph(0,i.pos,0,6.6,6.6);i.tele.push(e);let t=0;for(;t<.6;)t+=yield,e.prog=t/.6,e.place(i.pos,0,6.6,6.6);e.kill(),ye(i,"spin",1),i.trail.on=!0,t=0;let n=0;for(;t<1.5;){let s=yield;t+=s,n-=s,i.rig.spinY=-t*13,i.vel.copy(ft(Pt(i.pos,C.pos))).multiplyScalar(4.4),Math.floor(t/.24)!==Math.floor((t-s)/.24)&&(re.swing(!0),z.crescent(i.pos,t*13,6.4,1,{red:!0,y:1.7,power:1.3,dur:.24})),n<=0&&mt(i.pos,C.pos)<6.4&&C.y<.3&&Vi(14,i.pos,12,!0)&&(n=.5)}i.rig.spinY=0,i.trail.on=!1,i.vel.set(0,0,0)}function*Gu(){let i=T.boss;i.state="fight";let e="";for(;i.alive;){if(ye(i,"idle"),yield*Fu(i,i.phase===2?.45:.8,5),!C.alive){yield*pt(.5);continue}let t=mt(i.pos,C.pos),n=[];t<8&&(n.push("combo","combo"),i.phase===2&&n.push("spin")),t>5.5&&n.push("thrust","slam"),t>10&&n.push("slam"),i.phase===2&&n.push("thunder"),t>=8&&t<=10&&n.push("approach");let s=n[Math.floor(Math.random()*n.length)];if(s===e&&(s=n[Math.floor(Math.random()*n.length)]),e=s,s==="combo"?(t>5.2&&(yield*kp(i,5)),yield*Pu(i,1,.72),yield*Pu(i,-1,.42),i.phase===2&&(yield*Pu(i,1,.38))):s==="thrust"?(yield*Fp(i),i.phase===2&&Math.random()<.6&&(yield*Fu(i,.3,10),yield*Fp(i))):s==="slam"?yield*Z_(i):s==="thunder"?yield*J_(i,8):s==="spin"?yield*$_(i):yield*kp(i,5.5),i.phase===2&&!i.summoned&&i.hp<i.max*.3){i.summoned=!0,ye(i,"roar",1.4),re.roar(),Ie.sub("\u300C\u5217\u9635\u3002\u300D",2);for(let r=0;r<4;r++){let a=r/4*xn+.6;vc(r===3?"caster":"walker",ie(qe.arena.x+Math.cos(a)*12,0,qe.arena.z+Math.sin(a)*12),r*.15)}yield*pt(1.4)}ye(i,"idle"),yield*pt(i.phase===2?.75:1.25),i.posture=Math.max(0,i.posture-6)}}function*e1(){let i=T.boss;i.state="trans",i.vel.set(0,0,0),ye(i,"kneel",1.4),T.ts=.35,_t.uFlash.value=.4,re.boom(),yield*pt(.5),T.ts=1,Ie.cine(!0),T.cam.cpos=i.pos.clone().add(ie(7,3.6,12)),T.cam.clook=i.pos.clone().add(ie(0,3.2,0)),T.cam.k=2.5,Ie.sub("\u300C\u6211\u6CA1\u6709\u63A5\u5230\u64A4\u9632\u7684\u547D\u4EE4\u3002\u300D",3.2),yield*pt(1.5),ye(i,"roar",2.2),re.roar(),re.thunder(),T.shake=1.4,z.ring(i.pos,18,1,[3,.5,.3]),z.lightning(i.pos.clone().add(ie(0,0,-3))),_t.uBlur.value=1,z.inkBurst(i.pos,8,10);let e=ft(Pt(i.pos,C.pos));C.vel.copy(e).multiplyScalar(16),C.state="hit",C.st=0,C.hitDur=.6,ye(C,"hit",.6);let t=0;for(;t<2.2;){let n=yield;t+=n;let s=t/2.2;Bu(s),_t.uBlur.value=1-s,i.rig.tint(1,.15,.05,.2*s),Math.random()<.06&&z.lightning(ie(qe.arena.x+(Math.random()-.5)*30,0,qe.arena.z+(Math.random()-.5)*30)),z.emit(ie(i.pos.x,.5,i.pos.z),3,{color:[3,.6,.2],speed:6,life:1,size:.13,grav:-4})}_t.uBlur.value=0,i._aura=!0,re.mood(.22),Ie.cine(!1),T.cam.cpos=null,i.state="fight",i.co=bn(Gu())}function*t1(){Ie.cine(!0),C.state="scripted",ye(C,"idle"),Ie.fade(0,1200),re.mood(.1),T.cam.cpos=ie(-5.5,5.8,56),T.cam.clook=ie(.5,2,36),T.cam.k=.45,yield*pt(1),Ie.sub("\u5E08\u7236\u4EA4\u4EE3\u7684\u6700\u540E\u4E00\u4EF6\u4E8B\uFF1A\u628A\u64A4\u9632\u4EE4\u9001\u4E0A\u9547\u5CB3\u53F0\u3002",4.4),yield*pt(3.8),re.chime(),Ie.banner("\u96FE\u9501\u5C71\u95E8","\u7B2C\u4E00\u7AE0",4),T.cam.cpos=C.pos.clone().addScaledVector(T.cam.off,T.cam.zoom),T.cam.clook=ie(C.pos.x,1,C.pos.z),T.cam.k=1,yield*pt(3.4),T.cam.focus.copy(C.pos),T.cam.cpos=null,Ie.cine(!1),C.state="idle",Ie.obj("\u4E0A\u5C71")}function*n1(){T.stage="ambush",Ie.cine(!0),C.state="scripted",C.vel.set(0,0,0),C.y=0,C.rig.showWeapon(!0),nn&&(nn.visible=!1),ye(C,"idle"),pi("path1",!1),pi("path1b",!1),Ie.obj(""),re.bell(),re.mood(.2),T.cam.cpos=ie(2,5.5,12),T.cam.clook=ie(0,3.2,-14),T.cam.k=1.4,yield*pt(1.4),Ie.sub("\u5C71\u95E8\u91CC\u6709\u4EBA\u5728\u6572\u949F\u3002",3);let i=0;for(;i<1.6;){let s=yield;i+=s,fs.uDense.value=Ht(1,2.4,i/1.6)}re.bell();let e=[];[["walker",2.4,7.5],["spear",4,8.5],["walker",5.4,8],["caster",.9,11.5]].forEach(([s,r,a],o)=>e.push(vc(s,ie(Math.cos(r)*a,0,Math.sin(r)*a),.5+o*.3))),T.cam.cpos=ie(8,4.2,11),T.cam.clook=ie(0,1.2,0),T.cam.k=1.1,yield*pt(1.8),T.shake=.3,T.cam.cpos=ie(-9,7,9),T.cam.k=.7,yield*pt(2.4),T.cam.cpos=null,Ie.cine(!1),C.state="idle",Ie.obj("\u6E05\u6389\u5EAD\u9662\u91CC\u7684\u5C38\u5080"),yield*Tp(()=>e.filter(s=>s.alive).length<=1),re.thunder(),_t.uFlash.value=.2,T.shake=.6,z.lightning(ie(0,0,-9));let t=[],n=["caster","walker","spear","walker"];for(n.forEach((s,r)=>{let a=r/n.length*xn+1.1,o=s==="caster"?12:9.5;t.push(vc(s,ie(Math.cos(a)*o,0,Math.sin(a)*o),.3+r*.25))}),yield*Tp(()=>e.concat(t).every(s=>!s.alive)),yield*pt(.8),T.stage="cleared",re.chime(),Ie.sub("\u5C01\u95E8\u7684\u7B26\u6563\u4E86\u3002",3),pi("gate",!0),pi("path1",!0),pi("path1b",!0),bn(s1()),re.mood(.1),i=0;i<2;){let s=yield;i+=s,fs.uDense.value=Ht(2.4,1.1,i/2)}Ie.obj("\u7A7F\u8FC7\u5C71\u95E8")}var ds;function i1(){ds=new ke(new Qt(7.4,5.5),new Ct({transparent:!0,depthWrite:!1,side:Ut,blending:dn,uniforms:{uTime:{value:0},uA:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform float uTime,uA; varying vec2 vUv; float h(vec2 p){ return fract(sin(dot(p,vec2(12.9,78.2)))*43758.5); }
      void main(){ vec2 g=vUv*vec2(9.,5.); vec2 id=floor(g), f=fract(g); float tal=step(.2,f.x)*step(f.x,.8)*step(.06,f.y)*step(f.y,.94); float glyph=step(.5,h(floor(f*vec2(5.,11.))+id*7.))*tal; float wave=.5+.5*sin(vUv.y*20.-uTime*3.+id.x);
        vec3 c=vec3(8.,1.2,.4)*(tal*.16+glyph*.5*wave); float a=(tal*.22+glyph*.5)*uA*smoothstep(0.,.1,vUv.y)*smoothstep(1.,.8,vUv.y)*(1.-smoothstep(.36,.5,abs(vUv.x-.5))); gl_FragColor=vec4(c,a); }`})),ds.position.set(qe.gate.x,2.75,qe.gate.z+.4),jt.add(ds)}function*s1(){let i=0;for(z.emit(ie(qe.gate.x,2.5,qe.gate.z+.4),120,{color:[3,.7,.3],speed:6,life:1.4,size:.12,grav:-2,spread:14});i<1.5;)i+=yield,ds.material.uniforms.uA.value=1-i/1.5;ds.visible=!1}function*r1(){T.stage="boss";let i=T.boss;Ie.cine(!0),Ie.obj(""),C.state="scripted",C.vel.set(0,0,0),C.y=0,C.rig.showWeapon(!0),nn&&(nn.visible=!1),ye(C,"idle"),pi("gate",!1),C.pos.set(wt(C.pos.x,-2.5,2.5),0,Math.min(C.pos.z,-39.5)),C.face=Math.PI,re.mood(.25),T.cam.cpos=ie(0,2.6,-36),T.cam.clook=ie(0,3.4,-57),T.cam.k=1.2,yield*pt(1.8),Ie.sub("\u53F0\u4E0A\u8DEA\u7740\u4E00\u4E2A\u4EBA\u3002",3),yield*pt(2.2),T.cam.cpos=ie(7,1.8,-49),T.cam.clook=ie(0,3,-57),T.cam.k=.9,yield*pt(1.4),re.boom(),T.shake=.5,z.emit(ie(0,2.5,-57),60,{color:[.7,.7,.8],speed:4,life:1.2,size:.14}),z.flash(ie(0,2,-57),16732208,160,.8),z.inkBurst(i.pos,5,6);let e=0;for(;e<1.6;){let t=yield;e+=t;let n=e/1.6;i.rig.tint(1,.2,.05,.5*Math.sin(n*Math.PI));for(let s of i.rig.mats)s.color.multiplyScalar(1+t*.52);Math.random()<.3&&z.emit(ie((Math.random()-.5)*3,1+Math.random()*3,-57),2,{color:[3,.6,.2],speed:2,life:.8,size:.1})}i.rig.tint(0,0,0,0),ye(i,"rise",2.4),re.rubble(),z.emit(ie(i.pos.x,.3,i.pos.z),40,{color:[.8,.85,1],speed:3,life:1.2,size:.13,grav:2}),Ie.sub("\u300C\u5C71\u95E8\u5DF2\u5C01\u3002\u56DE\u53BB\u3002\u300D",3.2),T.cam.cpos=ie(-6,2.8,-47),T.cam.k=.8,yield*pt(1.3),T.shake=.25,re.rubble(),yield*pt(1.5),ye(i,"roar",2),re.roar(),T.shake=1.2,z.ring(i.pos,16,1,[3,.8,.4]),_t.uBlur.value=.8,z.lightning(ie(-7,0,-62)),z.lightning(ie(8,0,-60)),re.thunder(),Ie.banner(Dp,Up,3.6),yield*pt(2),_t.uBlur.value=0,T.cam.cpos=null,Ie.cine(!1),C.state="idle",Ie.boss(!0,Dp,Up),i.active=!0,i.co=bn(Gu())}function*a1(){let i=T.boss;T.stage="won",T.ts=.2,_t.uFlash.value=.5,re.boom();for(let t of T.enemies)t.alive&&(t.alive=!1,t.state="dead",t.st=0,ye(t,"dead",1.5),t.hpBar.visible=!1);ye(i,"kneel",3),yield*pt(.35),T.ts=1,Ie.cine(!0),Ie.boss(!1),T.cam.cpos=i.pos.clone().add(ie(6,2.8,10)),T.cam.clook=i.pos.clone().add(ie(0,2.2,0)),T.cam.k=1.5,Ie.sub("\u300C\u2026\u2026\u64A4\u9632\u4EE4\u3002\u6536\u5230\u4E86\u3002\u300D",3.5);let e=0;for(;e<4.2;){let t=yield;e+=t;let n=e/4.2;i.rig.setOpacity(1-Et(.35,1,n)),z.emit(ie(i.pos.x+(Math.random()-.5)*3,Math.random()*5,i.pos.z+(Math.random()-.5)*3),6,{color:[2.6,1.6,.6],speed:1.5,life:1.6,size:.12,grav:-3,drag:1}),Bu(1-n),fs.uDense.value=Ht(1.1,.35,n)}i.rig.root.visible=!1,T.souls+=300,ci.drop(i.pos,"page",2);for(let t=0;t<4;t++)ci.drop(i.pos,"jade",1,t*.08);ci.drop(i.pos,"gourd",1,.4),re.chime(),re.mood(0),Ie.banner("\u7B2C\u4E00\u7AE0 \u5B8C","\u9547\u5CB3\u53F0",9,"win"),T.cam.cpos=ie(0,26,-18),T.cam.clook=ie(0,0,-50),T.cam.k=.25,yield*pt(8),Ie.cine(!1),T.cam.cpos=null,Ie.obj("")}function*o1(){T.ts=.3,Ie.boss(!1),yield*pt(.5),Ie.banner("\u8EAB\u6B7B","\u56DE\u5230\u9999\u7089",3.4,"dead");let i=0;for(;i<1.2;)i+=yield,_t.uDesat.value=Math.min(1,i/1);yield*pt(.8),Ie.fade(1,900),yield*pt(1),Nu(),T.ts=1,_t.uDesat.value=0,Ie.fade(0,1200)}function Nu(){ci.clear();for(let e of T.enemies)gc(e);T.enemies.length=0;for(let e of T.shots)z.kill(e.h);T.shots.length=0;for(let e of T.waves)z.release(e.s,.1);T.waves.length=0;for(let e of T.cos)e.dead=!0;gc(C),Hp(),fs.uDense.value=1,Ie.cine(!1),T.cam.cpos=null,T.cam.zt=1,Bu(0),_t.uBlur.value=0,T.boss&&(xc(T.boss),gc(T.boss)),Wp();let i=T.cp==="shrine2";pi("path1",!0),pi("path1b",!0),pi("gate",i),ds.visible=!i,ds.material.uniforms.uA.value=1,T.stage=i?"cleared":"path",Ie.obj(i?"\u53BB\u9547\u5CB3\u53F0":"\u4E0A\u5C71"),re.mood(.1)}function c1(){T.cine||!C.alive||(T.stage==="path"&&mt(C.pos,qe.court)<9.5&&bn(n1()),T.stage==="cleared"&&(T.cp!=="shrine2"&&mt(C.pos,qe.shrine2)<2.6&&(T.cp="shrine2",C.hp=C.max,C.flasks=3,re.chime(),Ie.sub("\u5728\u9999\u7089\u524D\u6B47\u4E86\u4E00\u4F1A\u513F\uFF0C\u4F24\u836F\u8865\u6EE1\u4E86\u3002",3),z.emit(ie(qe.shrine2.x,1.2,qe.shrine2.z),60,{color:[3,1.6,.6],speed:3,life:1.4,size:.1,grav:-2}),z.circle(qe.shrine2,2.2,{gold:!0,dur:2}),Ie.obj("\u53BB\u9547\u5CB3\u53F0")),mt(C.pos,qe.arena)<14.5&&bn(r1())))}var Np=[Nr(1.5),Nr(1.2),Nr(1),Nr(.8),Nr(.66)],us=0,mc=0,Iu=0,Lu=4,qp=60;function l1(i){if(Xp||(mc+=i,Iu++,mc<1))return;let e=mc/Iu*1e3;if(qp=1e3/e,mc=0,Iu=0,--Lu>0)return;if(e>24&&us<Np.length-1)us++,Lu=3;else if(e<12.5&&us>0)us--,Lu=6;else return;sn.setPixelRatio(Np[us]),zu();let t=us>=3,n=us>=4;An.castShadow===t&&(An.castShadow=!t,sn.shadowMap.needsUpdate=!0),mi.q.bloom=!n,on.grass&&on.grass.userData.n0==null&&(on.grass.userData.n0=on.grass.count),on.grass&&(on.grass.count=n?Math.floor(on.grass.userData.n0/2):on.grass.userData.n0)}var Xp=!1,Hr=document.createElement("div");Hr.style.cssText="position:fixed;left:8px;top:60px;z-index:20;font:11px ui-monospace,Menlo,monospace;color:#9fe0c0;background:rgba(0,0,0,.55);padding:6px 8px;white-space:pre;display:none;pointer-events:none";document.body.appendChild(Hr);var gi=[];addEventListener("keydown",i=>{i.code==="F3"&&(i.preventDefault(),Hr.style.display=Hr.style.display==="none"?"block":"none"),i.repeat||gi.push("\u2193"+i.code+(i.keyCode===229?"(\u8F93\u5165\u6CD5)":"")),gi=gi.slice(-8)},!0);addEventListener("keyup",i=>{gi.push("\u2191"+i.code),gi=gi.slice(-8)},!0);for(let i of["blur","focus"])addEventListener(i,()=>{gi.push("["+i+"]"),gi=gi.slice(-8)});function h1(){Hr.style.display!=="none"&&(Hr.textContent=`\u6309\u4F4F: ${[...Ft].join(" ")||"-"}
\u72B6\u6001: ${C.state}  \u901F\u5EA6: ${C.speed.toFixed(1)}  \u987F\u5E27: ${C.fz>0?"\u662F":"\u5426"}  \u8FC7\u573A: ${T.cine?"\u662F":"\u5426"}
\u4F4D\u7F6E: ${C.pos.x.toFixed(1)}, ${C.pos.z.toFixed(1)}  \u79BB\u8FB9\u754C: ${(-an(C.pos.x,C.pos.z)).toFixed(2)}
\u7126\u70B9: ${document.hasFocus()?"\u6709":"\u65E0"}  \u5E27\u7387: ${qp.toFixed(0)}  \u5206\u8FA8\u7387\u6863: ${us}
\u6700\u8FD1\u6309\u952E: ${gi.join(" ")}`)}var Ou=new Bo,zt=ie(),vn=ie(),Fs=null;function jp(i){let e=T.cam;if(e.cpos){e.ease=0;for(let s of["x","y","z"])e.pos[s]=kt(e.pos[s],e.cpos[s],e.k,i),e.look[s]=kt(e.look[s],e.clook[s],e.k*1.4,i)}else{zt.copy(C.pos);let s=T.boss,r=e.zt;if(s&&s.active&&s.alive){vn.copy(s.pos).sub(C.pos).setY(0);let o=vn.length();vn.multiplyScalar(.28).clampLength(0,3),zt.add(vn),r*=1.1+wt((o-8)/40,0,.15)}else vn.copy(li.aim).sub(C.pos).setY(0).clampLength(0,5),zt.addScaledVector(vn,.06);e.zoom=kt(e.zoom,wt(r,.95,1.3),1.5,i),e.focus.x=kt(e.focus.x,zt.x,7,i),e.focus.z=kt(e.focus.z,zt.z,7,i),vn.set(e.focus.x-C.pos.x,0,e.focus.z-C.pos.z),vn.length()>3.6&&(vn.setLength(3.6),e.focus.x=C.pos.x+vn.x,e.focus.z=C.pos.z+vn.z),e.ease=Math.min(1,(e.ease??1)+i/1.8),zt.copy(e.focus).addScaledVector(e.off,e.zoom*(Tn.aspect<1?1.12:1));let a=Ht(.9,4.5,Et(0,1,e.ease));for(let o of["x","y","z"])e.pos[o]=kt(e.pos[o],zt[o],a,i);e.look.x=kt(e.look.x,e.focus.x,a*1.5,i),e.look.y=kt(e.look.y,1,a,i),e.look.z=kt(e.look.z,e.focus.z,a*1.5,i)}let t=Wn(e.pos.x,e.pos.z)+1.8;e.pos.y<t&&(e.pos.y=t),T.shake=Math.max(0,T.shake-i*2.2);let n=T.shake*T.shake*.5;Tn.position.set(e.pos.x+(Math.random()-.5)*n,e.pos.y+(Math.random()-.5)*n,e.pos.z+(Math.random()-.5)*n),Tn.lookAt(e.look),An.position.copy(zp).multiplyScalar(70).add(e.look),An.target.position.set(e.look.x,0,e.look.z)}function Du(i,e){let t=i.fz>0;t&&(e=0),i.at+=e;let n=i.ad>0&&isFinite(i.ad)?wt(i.at/i.ad,0,1):0,s=t&&i!==C?.07:0;i.rig.root.position.set(i.pos.x+(Math.random()-.5)*s,i.y||0,i.pos.z+(Math.random()-.5)*s),i.rig.root.rotation.y=i.face,i.rig.pose(i.anim,n,T.t,e,i.speed||0),i.trail.update(e)}function Yp(){let i=T.cam,e=T.t*.05;i.cpos=i.cpos||ie(),i.pos.set(1.4+Math.sin(e)*1.6,4.4+Math.sin(e*.7)*.3,59.5),i.look.set(0,1.7,42),i.cpos.copy(i.pos),i.clook=i.clook||ie(),i.clook.copy(i.look),i.k=.4}function Op(i,e){Xp=e!=null,h1();let t=e??Math.min(Ou.getDelta(),.05),n=t*T.ts;if(T.stop>0&&(T.stop-=t,n*=.05),T.t+=n,D_(),T.started){P_(n),Vp(n);for(let c=T.enemies.length-1;c>=0;c--){let l=T.enemies[c];X_(l,n),l.gone&&(gc(l),T.enemies.splice(c,1))}Y_(n),B_(n);let a=T.boss;if(a&&(a.fz>0&&(a.fz-=n),a.pos.addScaledVector(a.vel,n),as(a.pos,a.r),a.speed=a.vel.length(),a.speed>1.5&&a.y<.3&&Math.random()<n*9&&Or(a.pos.x+(Math.random()-.5),a.pos.z+(Math.random()-.5),9,1.8),a._aura&&a.alive&&Math.random()<.6&&z.emit(ie(a.pos.x+(Math.random()-.5)*2,.3+Math.random()*4,a.pos.z+(Math.random()-.5)*2),1,{color:[2.6,.5,.15],speed:.8,life:.9,size:.1,grav:-3})),C.alive&&C.state!=="roll"&&C.state!=="fly")for(let c of T.enemies){if(!c.alive||!c.rig.root.visible)continue;let l=(C.r+c.r)*.95,h=mt(C.pos,c.pos);if(h<l&&h>.001){let u=C.moving?.5:0,d=l-h,f=(C.pos.x-c.pos.x)/h,m=(C.pos.z-c.pos.z)/h;C.pos.x+=f*d*u,C.pos.z+=m*d*u,c.pos.x-=f*d*(1-u),c.pos.z-=m*d*(1-u)}}for(let c of ci.update(n,T.t,C,as))W_(c);let o=T.enemies.some(c=>c.alive)||T.boss&&T.boss.active&&T.boss.alive;re.combat(o?T.boss&&T.boss.active?2:1:0),re.ambient(t,mi.lights?mi.lights.some(c=>c.userData.base&&Math.hypot(c.position.x-C.pos.x,c.position.z-C.pos.z)<7):!1),c1()}else Yp();C.glow=kt(C.glow||0,C.state==="atk"?2.4:C.state==="cast"?6:C.state==="rip"?7:C.state==="ult"?8:C.state==="guard"?.8:C.armed?.35:0,14,t),C.armed&&C.rig.weapon&&C.rig.weapon.visible&&T.started&&Math.random()<(C.state==="atk"||C.state==="cast"?.9:.3)&&(C.rig.base(zt),C.rig.tip(vn),zt.lerp(vn,.15+Math.random()*.85),z.emit(zt,1,{color:[.5,1.2,2.6],speed:.35,life:.45,size:.06,grav:-1.6,drag:0,spread:.3})),C.rig.setGlow(Math.round(C.glow*20)/20),Du(C,n);for(let a of T.enemies)Du(a,n);T.boss&&Du(T.boss,n),on.setPush(0,C.pos.x,C.pos.z,C.state==="fly"?2.2:1.1,C.state==="fly"?1.3:.9),T.boss&&T.boss.alive&&on.setPush(6,T.boss.pos.x,T.boss.pos.z,2.6,1);let s=1;for(let a of T.enemies){if(s>5)break;a.alive&&a.rig.root.visible&&on.setPush(s++,a.pos.x,a.pos.z,1,.8)}for(;s<=5;s++)on.setPush(s,0,0,.001,0);for(let a of jt.userData.occluders||[]){let o=Tn.position.x,c=Tn.position.z,l=C.pos.x-o,h=C.pos.z-c,u=wt(((a.x-o)*l+(a.z-c)*h)/(l*l+h*h),0,1),f=Math.hypot(o+l*u-a.x,c+h*u-a.z)<a.r&&u<.96&&!T.cine&&T.started?.16:1;Math.abs(f-a.a)>.005&&(a.a=kt(a.a,f,8,t),a.o.traverse(m=>{m.isMesh&&(m.material.transparent=a.a<.99,m.material.opacity=a.a,m.material.depthWrite=a.a>.6,m.castShadow=a.a>.5)}))}if(C.ripRing&&C.ripRing.m.position.set(C.pos.x,.07,C.pos.z),Oe("sk0").classList.toggle("rip",C.ripT>0),Fs){Fs.m.position.set(C.pos.x,.06,C.pos.z),Fs.a=kt(Fs.a,C.alive&&!T.cine&&T.started?C.armed?.6:.28:0,6,t);let a=C.aimA??C.face;Fs.u.uAim.value=Math.atan2(-Math.cos(a),Math.sin(a))}z.update(n,T.t),Bp.update(T.t,T.cam.look),on.update(T.t),La.material.uniforms.uTime.value=T.t,jp(t),ds.material.uniforms.uTime.value=T.t,_t.uHit.value=Math.max(0,_t.uHit.value-t*2.5),_t.uFlash.value=Math.max(0,_t.uFlash.value-t*1.6),Ie.bar("hp",C.hp/C.max),Ie.bar("st",C.stam/C.stMax),Oe("flask").textContent=C.flasks;let r=C.stam<=0;for(let a of["sk0","sk2","sk3","sk6"])Oe(a).classList.toggle("off",r);Oe("sk1").classList.toggle("off",r||C.castCd>0),Oe("sk1").style.setProperty("--cd",wt(C.castCd/6,0,1).toFixed(3)),Oe("souls").textContent=T.souls,Oe("sk5").classList.toggle("off",C.flasks<=0),Oe("sk4").style.setProperty("--p",(C.qi/100).toFixed(3)),Oe("sk4").classList.toggle("ready",C.qi>=100),T.boss&&(Ie.bar("bhp",T.boss.hp/T.boss.max),Ie.bar("bpo",T.boss.posture/100)),l1(t),It.clear(),mi.render(t,T.t)}(async function(){let e=[];mi.lights=z.lights.map(g=>g.l);let t=()=>{let g=Math.min(Ou.getDelta(),.05);T.t+=g,Yp();for(let p=e.length-1;p>=0;p--){let b=e[p];b.t+=g;let y=wt(b.t/.9,0,1),v=1-Math.pow(1-y,3);b.o.isLight?b.o.intensity=b.v*v:b.o.scale.y=b.v*Math.max(v,.001),y>=1&&e.splice(p,1)}z.update(g,T.t),Bp.update(T.t,T.cam.look),on.update(T.t),La.material.uniforms.uTime.value=T.t,jp(g),mi.render(g,T.t)},n=t,s=g=>{n=g,sn.setAnimationLoop(document.hidden&&!En.has("auto")?null:g)};document.addEventListener("visibilitychange",()=>{Ou.getDelta(),sn.setAnimationLoop(document.hidden&&!En.has("auto")?null:n),document.hidden?re.pause&&re.pause():re.resume&&re.resume()}),sn.domElement.addEventListener("webglcontextlost",g=>{g.preventDefault(),sn.setAnimationLoop(null),Oe("nogl").innerHTML="\u753B\u9762\u4E2D\u65AD\u4E86\uFF08\u663E\u5B58\u88AB\u7CFB\u7EDF\u6536\u56DE\uFF09\u3002<br>\u8BF7\u5173\u95ED\u540E\u91CD\u65B0\u6253\u5F00\u3002<br><br>\u96FE\u9501\u5C71\u95E8 \xB7 \u6B78\u85CF\u4F5C\u54C1",Oe("nogl").style.display="flex"}),s(t),Oe("hud").style.transition="opacity 1.2s",Oe("hud").style.opacity=0;let r=[[/p_gate/,"\u7ACB\u5C71\u95E8","\u5C71\u95E8\u6A21\u578B \xB7 Tripo"],[/hall/,"\u8D77\u9547\u5CB3\u53F0\u5927\u6BBF","\u8FDC\u666F\u5EFA\u7B51"],[/p_lantern/,"\u70B9\u77F3\u706F","\u70B9\u5149\u6E90 \xD7 \u4F53\u79EF\u96FE"],[/p_statue/,"\u8BF7\u77F3\u50CF\u5F52\u4F4D","\u573A\u666F\u6446\u4EF6"],[/p_tree/,"\u683D\u53E4\u677E","\u906E\u6321\u534A\u900F\u660E"],[/p_rock/,"\u642C\u5C71\u77F3","\u78B0\u649E\u6570\u636E"],[/p_censer/,"\u711A\u4E00\u7089\u9999","\u5B58\u6863\u70B9"],[/p_pillar/,"\u7ACB\u6B8B\u67F1","\u573A\u666F\u6446\u4EF6"],[/p_shrine/,"\u4FEE\u8DEF\u4EAD","\u573A\u666F\u6446\u4EF6"],[/p_stele/,"\u523B\u7891","\u573A\u666F\u6446\u4EF6"],[/p_post/,"\u9489\u754C\u6869","\u573A\u666F\u6446\u4EF6"],[/p_beast/,"\u5B89\u9547\u95E8\u77F3\u517D","\u573A\u666F\u6446\u4EF6"],[/hero\/out/,"\u4E3B\u89D2\u66F4\u8863","\u8499\u76AE\u7F51\u683C \xB7 meshopt \u89E3\u538B"],[/hero\/anim/,"\u4E3B\u89D2\u6E29\u4E60\u5251\u62DB","\u52A8\u753B\u91CD\u5B9A\u5411"],[/boss\/out/,"\u8BF7\u5389\u82CD\u5165\u5EA7","\u8499\u76AE\u7F51\u683C"],[/boss\/anim/,"\u5389\u82CD\u6D3B\u52A8\u7B4B\u9AA8","\u52A8\u753B\u91CD\u5B9A\u5411"],[/walker/,"\u5524\u5DE1\u5C71\u5F1F\u5B50","\u654C\u4EBA \xB7 \u8FD1\u6218"],[/caster/,"\u5524\u7B26\u4FEE","\u654C\u4EBA \xB7 \u8FDC\u7A0B"],[/spear/,"\u5524\u67AA\u536B","\u654C\u4EBA \xB7 \u67B6\u52BF"],[/w_sword/,"\u6DEC\u5251","\u6B66\u5668\u6302\u70B9"],[/w_glaive/,"\u78E8\u5043\u6708\u5200","\u6B66\u5668\u6302\u70B9"],[/\/l_/,"\u5907\u4E0B\u6CD5\u5B9D","\u6389\u843D\u7269"]],a=[],o=0,c=.04,l=(g,p)=>{Oe("ltxt").textContent=g,Oe("ltech").textContent=p||""},h=g=>{c=Math.max(c,g),Oe("lbar").style.transform=`scaleX(${c.toFixed(3)})`,Oe("lpct").textContent=Math.round(c*100)+"%"},u=setInterval(()=>{if(a.length&&performance.now()-o>170){o=performance.now();let[g,p,b]=a.shift();l(g,p),h(b)}},40);cs.on=g=>{let p=r.find(y=>y[0].test(g)),b=.14+.86*cs.done/Math.max(cs.n,29);p?a.push([p[1],p[2],b]):h(b)},l("\u70BC\u6708\u8272\uFF0C\u683D\u8292\u8349\u5341\u4E94\u4E07\u682A","\u7740\u8272\u5668 \xB7 \u5B9E\u4F8B\u5316\u8349"),h(.08),await E_,Ie.fade(0,1e3),l("\u94FA\u96EA\uFF0C\u8D77\u96FE","\u5730\u8868\u8D34\u56FE \xB7 \u5929\u6C14\u7C92\u5B50"),h(.14);let d=fetch("./assets/props.json",{cache:"no-store"}).then(g=>g.json()).then(cp).then(()=>{let g=new Set(jt.children),p=up(jt,lp);mi.lights=p.concat(z.lights.map(b=>b.l));for(let b of jt.children){if(g.has(b))continue;let y=Math.hypot(b.position.x-Tn.position.x,b.position.z-Tn.position.z);b.isLight?(e.push({o:b,v:b.intensity,t:-y/60}),b.intensity=0):b.isGroup&&(e.push({o:b,v:b.scale.y,t:-y/60}),b.scale.y*=.001)}}),f=Promise.all([Ep(),np()]);await d,await f,Hp(),Wp(),i1(),T.cam.focus.copy(C.pos),Fs=z.footRing(C.pos),Fs.a=0;let m=En.get("stage");m==="court"&&C.pos.set(0,0,13),m==="boss"&&(T.cp="shrine2",Nu(),C.pos.copy(qe.shrine2)),m==="arena"&&(T.cp="shrine2",Nu(),C.pos.set(0,0,-34)),T.cam.pos.copy(C.pos).add(T.cam.off),T.cam.look.copy(C.pos).setY(1),Or(C.pos.x,C.pos.z,36,2.2);for(let g of e)g.o.isLight?g.o.intensity=g.v:g.o.scale.y=g.v;e.length=0,s(g=>Op(g)),clearInterval(u),h(1),l("\u9635\u6210",""),setTimeout(()=>Oe("load").style.display="none",1400),setTimeout(()=>{Oe("load").style.opacity=0,window.READY=!0,document.body.classList.add("ready")},En.has("auto")?0:450),En.has("auto")&&(window.READY=!0,document.body.classList.add("ready")),T.step=(g=60,p=1/60)=>{for(let b=0;b<g;b++)Op(0,p);return T.t.toFixed(2)},T.info=()=>{let g=sn.info;return{calls:g.render.calls,tris:g.render.triangles,tex:g.memory.textures,geo:g.memory.geometries,buf:sn.getDrawingBufferSize(new ce).toArray()}},T.press=(...g)=>{for(let p of g)It.add(p)},T.keys=Ft,T.mouse=li,T.pl=()=>C,T.fx=z,T.V=ie,T.spawn=vc,T.loot=ci,T.upd=(g=30,p=1/60)=>{for(let b=0;b<g;b++)Vp(p)};let x=()=>{T.started||(T.started=!0,(!En.has("auto")||En.has("sound"))&&re.start(),Oe("hud").style.opacity="",Oe("title").style.opacity=0,setTimeout(()=>Oe("title").style.display="none",1200),m?(Ie.fade(0,0),Ie.obj("\u8C03\u8BD5\uFF1A"+m),T.cam.cpos=null,T.cam.ease=1,T.cam.focus.copy(C.pos),T.cam.pos.copy(C.pos).add(T.cam.off),T.cam.look.copy(C.pos).setY(1)):bn(t1()))};Oe("title").addEventListener("click",x),En.has("auto")&&x()})();
