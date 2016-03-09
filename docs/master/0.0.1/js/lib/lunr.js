/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 0.5.7
 * Copyright (C) 2014 Oliver Nightingale
 * MIT Licensed
 * @license
 */
!function(){var e=function(t){var n=new e.Index;return n.pipeline.add(e.trimmer,e.stopWordFilter,e.stemmer),t&&t.call(n,n),n};e.version="0.5.7",/*!
   * lunr.utils
   * Copyright (C) 2014 Oliver Nightingale
   */
e.utils={},e.utils.warn=function(e){return function(t){e.console&&console.warn&&console.warn(t)}}(this),/*!
   * lunr.EventEmitter
   * Copyright (C) 2014 Oliver Nightingale
   */
e.EventEmitter=function(){this.events={}},e.EventEmitter.prototype.addListener=function(){var e=Array.prototype.slice.call(arguments),t=e.pop(),n=e;if("function"!=typeof t)throw new TypeError("last argument must be a function");n.forEach(function(e){this.hasHandler(e)||(this.events[e]=[]),this.events[e].push(t)},this)},e.EventEmitter.prototype.removeListener=function(e,t){if(this.hasHandler(e)){var n=this.events[e].indexOf(t);this.events[e].splice(n,1),this.events[e].length||delete this.events[e]}},e.EventEmitter.prototype.emit=function(e){if(this.hasHandler(e)){var t=Array.prototype.slice.call(arguments,1);this.events[e].forEach(function(e){e.apply(void 0,t)})}},e.EventEmitter.prototype.hasHandler=function(e){return e in this.events},/*!
   * lunr.tokenizer
   * Copyright (C) 2014 Oliver Nightingale
   */
e.tokenizer=function(e){if(!arguments.length||null==e||void 0==e)return[];if(Array.isArray(e))return e.map(function(e){return e.toLowerCase()});for(var t=e.toString().replace(/^\s+/,""),n=t.length-1;n>=0;n--)if(/\S/.test(t.charAt(n))){t=t.substring(0,n+1);break}return t.split(/(?:\s+|\-)/).filter(function(e){return!!e}).map(function(e){return e.toLowerCase()})},/*!
   * lunr.Pipeline
   * Copyright (C) 2014 Oliver Nightingale
   */
e.Pipeline=function(){this._stack=[]},e.Pipeline.registeredFunctions={},e.Pipeline.registerFunction=function(t,n){n in this.registeredFunctions&&e.utils.warn("Overwriting existing registered function: "+n),t.label=n,e.Pipeline.registeredFunctions[t.label]=t},e.Pipeline.warnIfFunctionNotRegistered=function(t){var n=t.label&&t.label in this.registeredFunctions;n||e.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",t)},e.Pipeline.load=function(t){var n=new e.Pipeline;return t.forEach(function(t){var i=e.Pipeline.registeredFunctions[t];if(!i)throw new Error("Cannot load un-registered function: "+t);n.add(i)}),n},e.Pipeline.prototype.add=function(){var t=Array.prototype.slice.call(arguments);t.forEach(function(t){e.Pipeline.warnIfFunctionNotRegistered(t),this._stack.push(t)},this)},e.Pipeline.prototype.after=function(t,n){e.Pipeline.warnIfFunctionNotRegistered(n);var i=this._stack.indexOf(t)+1;this._stack.splice(i,0,n)},e.Pipeline.prototype.before=function(t,n){e.Pipeline.warnIfFunctionNotRegistered(n);var i=this._stack.indexOf(t);this._stack.splice(i,0,n)},e.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);this._stack.splice(t,1)},e.Pipeline.prototype.run=function(e){for(var t=[],n=e.length,i=this._stack.length,o=0;n>o;o++){for(var s=e[o],r=0;i>r&&(s=this._stack[r](s,o,e),void 0!==s);r++);void 0!==s&&t.push(s)}return t},e.Pipeline.prototype.reset=function(){this._stack=[]},e.Pipeline.prototype.toJSON=function(){return this._stack.map(function(t){return e.Pipeline.warnIfFunctionNotRegistered(t),t.label})},/*!
   * lunr.Vector
   * Copyright (C) 2014 Oliver Nightingale
   */
e.Vector=function(){this._magnitude=null,this.list=void 0,this.length=0},e.Vector.Node=function(e,t,n){this.idx=e,this.val=t,this.next=n},e.Vector.prototype.insert=function(t,n){var i=this.list;if(!i)return this.list=new e.Vector.Node(t,n,i),this.length++;for(var o=i,s=i.next;void 0!=s;){if(t<s.idx)return o.next=new e.Vector.Node(t,n,s),this.length++;o=s,s=s.next}return o.next=new e.Vector.Node(t,n,s),this.length++},e.Vector.prototype.magnitude=function(){if(this._magniture)return this._magnitude;for(var e,t=this.list,n=0;t;)e=t.val,n+=e*e,t=t.next;return this._magnitude=Math.sqrt(n)},e.Vector.prototype.dot=function(e){for(var t=this.list,n=e.list,i=0;t&&n;)t.idx<n.idx?t=t.next:t.idx>n.idx?n=n.next:(i+=t.val*n.val,t=t.next,n=n.next);return i},e.Vector.prototype.similarity=function(e){return this.dot(e)/(this.magnitude()*e.magnitude())},/*!
   * lunr.SortedSet
   * Copyright (C) 2014 Oliver Nightingale
   */
e.SortedSet=function(){this.length=0,this.elements=[]},e.SortedSet.load=function(e){var t=new this;return t.elements=e,t.length=e.length,t},e.SortedSet.prototype.add=function(){Array.prototype.slice.call(arguments).forEach(function(e){~this.indexOf(e)||this.elements.splice(this.locationFor(e),0,e)},this),this.length=this.elements.length},e.SortedSet.prototype.toArray=function(){return this.elements.slice()},e.SortedSet.prototype.map=function(e,t){return this.elements.map(e,t)},e.SortedSet.prototype.forEach=function(e,t){return this.elements.forEach(e,t)},e.SortedSet.prototype.indexOf=function(e,t,n){var t=t||0,n=n||this.elements.length,i=n-t,o=t+Math.floor(i/2),s=this.elements[o];return 1>=i?s===e?o:-1:e>s?this.indexOf(e,o,n):s>e?this.indexOf(e,t,o):s===e?o:void 0},e.SortedSet.prototype.locationFor=function(e,t,n){var t=t||0,n=n||this.elements.length,i=n-t,o=t+Math.floor(i/2),s=this.elements[o];if(1>=i){if(s>e)return o;if(e>s)return o+1}return e>s?this.locationFor(e,o,n):s>e?this.locationFor(e,t,o):void 0},e.SortedSet.prototype.intersect=function(t){for(var n=new e.SortedSet,i=0,o=0,s=this.length,r=t.length,a=this.elements,c=t.elements;;){if(i>s-1||o>r-1)break;a[i]!==c[o]?a[i]<c[o]?i++:a[i]>c[o]&&o++:(n.add(a[i]),i++,o++)}return n},e.SortedSet.prototype.clone=function(){var t=new e.SortedSet;return t.elements=this.toArray(),t.length=t.elements.length,t},e.SortedSet.prototype.union=function(e){var t,n,i;return this.length>=e.length?(t=this,n=e):(t=e,n=this),i=t.clone(),i.add.apply(i,n.toArray()),i},e.SortedSet.prototype.toJSON=function(){return this.toArray()},/*!
   * lunr.Index
   * Copyright (C) 2014 Oliver Nightingale
   */
e.Index=function(){this._fields=[],this._ref="id",this.pipeline=new e.Pipeline,this.documentStore=new e.Store,this.tokenStore=new e.TokenStore,this.corpusTokens=new e.SortedSet,this.eventEmitter=new e.EventEmitter,this._idfCache={},this.on("add","remove","update",function(){this._idfCache={}}.bind(this))},e.Index.prototype.on=function(){var e=Array.prototype.slice.call(arguments);return this.eventEmitter.addListener.apply(this.eventEmitter,e)},e.Index.prototype.off=function(e,t){return this.eventEmitter.removeListener(e,t)},e.Index.load=function(t){t.version!==e.version&&e.utils.warn("version mismatch: current "+e.version+" importing "+t.version);var n=new this;return n._fields=t.fields,n._ref=t.ref,n.documentStore=e.Store.load(t.documentStore),n.tokenStore=e.TokenStore.load(t.tokenStore),n.corpusTokens=e.SortedSet.load(t.corpusTokens),n.pipeline=e.Pipeline.load(t.pipeline),n},e.Index.prototype.field=function(e,t){var t=t||{},n={name:e,boost:t.boost||1};return this._fields.push(n),this},e.Index.prototype.ref=function(e){return this._ref=e,this},e.Index.prototype.add=function(t,n){var i={},o=new e.SortedSet,s=t[this._ref],n=void 0===n?!0:n;this._fields.forEach(function(n){var s=this.pipeline.run(e.tokenizer(t[n.name]));i[n.name]=s,e.SortedSet.prototype.add.apply(o,s)},this),this.documentStore.set(s,o),e.SortedSet.prototype.add.apply(this.corpusTokens,o.toArray());for(var r=0;r<o.length;r++){var a=o.elements[r],c=this._fields.reduce(function(e,t){var n=i[t.name].length;if(!n)return e;var o=i[t.name].filter(function(e){return e===a}).length;return e+o/n*t.boost},0);this.tokenStore.add(a,{ref:s,tf:c})}n&&this.eventEmitter.emit("add",t,this)},e.Index.prototype.remove=function(e,t){var n=e[this._ref],t=void 0===t?!0:t;if(this.documentStore.has(n)){var i=this.documentStore.get(n);this.documentStore.remove(n),i.forEach(function(e){this.tokenStore.remove(e,n)},this),t&&this.eventEmitter.emit("remove",e,this)}},e.Index.prototype.update=function(e,t){var t=void 0===t?!0:t;this.remove(e,!1),this.add(e,!1),t&&this.eventEmitter.emit("update",e,this)},e.Index.prototype.idf=function(e){var t="@"+e;if(Object.prototype.hasOwnProperty.call(this._idfCache,t))return this._idfCache[t];var n=this.tokenStore.count(e),i=1;return n>0&&(i=1+Math.log(this.tokenStore.length/n)),this._idfCache[t]=i},e.Index.prototype.search=function(t){var n=this.pipeline.run(e.tokenizer(t)),i=new e.Vector,o=[],s=this._fields.reduce(function(e,t){return e+t.boost},0),r=n.some(function(e){return this.tokenStore.has(e)},this);if(!r)return[];n.forEach(function(t,n,r){var a=1/r.length*this._fields.length*s,c=this,h=this.tokenStore.expand(t).reduce(function(n,o){var s=c.corpusTokens.indexOf(o),r=c.idf(o),h=1,l=new e.SortedSet;if(o!==t){var u=Math.max(3,o.length-t.length);h=1/Math.log(u)}return s>-1&&i.insert(s,a*r*h),Object.keys(c.tokenStore.get(o)).forEach(function(e){l.add(e)}),n.union(l)},new e.SortedSet);o.push(h)},this);var a=o.reduce(function(e,t){return e.intersect(t)});return a.map(function(e){return{ref:e,score:i.similarity(this.documentVector(e))}},this).sort(function(e,t){return t.score-e.score})},e.Index.prototype.documentVector=function(t){for(var n=this.documentStore.get(t),i=n.length,o=new e.Vector,s=0;i>s;s++){var r=n.elements[s],a=this.tokenStore.get(r)[t].tf,c=this.idf(r);o.insert(this.corpusTokens.indexOf(r),a*c)}return o},e.Index.prototype.toJSON=function(){return{version:e.version,fields:this._fields,ref:this._ref,documentStore:this.documentStore.toJSON(),tokenStore:this.tokenStore.toJSON(),corpusTokens:this.corpusTokens.toJSON(),pipeline:this.pipeline.toJSON()}},e.Index.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},/*!
   * lunr.Store
   * Copyright (C) 2014 Oliver Nightingale
   */
e.Store=function(){this.store={},this.length=0},e.Store.load=function(t){var n=new this;return n.length=t.length,n.store=Object.keys(t.store).reduce(function(n,i){return n[i]=e.SortedSet.load(t.store[i]),n},{}),n},e.Store.prototype.set=function(e,t){this.has(e)||this.length++,this.store[e]=t},e.Store.prototype.get=function(e){return this.store[e]},e.Store.prototype.has=function(e){return e in this.store},e.Store.prototype.remove=function(e){this.has(e)&&(delete this.store[e],this.length--)},e.Store.prototype.toJSON=function(){return{store:this.store,length:this.length}},/*!
   * lunr.stemmer
   * Copyright (C) 2014 Oliver Nightingale
   * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
   */
e.stemmer=function(){var e={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},t={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},n="[^aeiou]",i="[aeiouy]",o=n+"[^aeiouy]*",s=i+"[aeiou]*",r="^("+o+")?"+s+o,a="^("+o+")?"+s+o+"("+s+")?$",c="^("+o+")?"+s+o+s+o,h="^("+o+")?"+i,l=new RegExp(r),u=new RegExp(c),d=new RegExp(a),f=new RegExp(h),p=/^(.+?)(ss|i)es$/,g=/^(.+?)([^s])s$/,v=/^(.+?)eed$/,m=/^(.+?)(ed|ing)$/,y=/.$/,w=/(at|bl|iz)$/,b=new RegExp("([^aeiouylsz])\\1$"),x=new RegExp("^"+o+i+"[^aeiouwxy]$"),S=/^(.+?[^aeiou])y$/,_=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,E=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,C=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,k=/^(.+?)(s|t)(ion)$/,O=/^(.+?)e$/,N=/ll$/,A=new RegExp("^"+o+i+"[^aeiouwxy]$"),T=function(n){var i,o,s,r,a,c,h;if(n.length<3)return n;if(s=n.substr(0,1),"y"==s&&(n=s.toUpperCase()+n.substr(1)),r=p,a=g,r.test(n)?n=n.replace(r,"$1$2"):a.test(n)&&(n=n.replace(a,"$1$2")),r=v,a=m,r.test(n)){var T=r.exec(n);r=l,r.test(T[1])&&(r=y,n=n.replace(r,""))}else if(a.test(n)){var T=a.exec(n);i=T[1],a=f,a.test(i)&&(n=i,a=w,c=b,h=x,a.test(n)?n+="e":c.test(n)?(r=y,n=n.replace(r,"")):h.test(n)&&(n+="e"))}if(r=S,r.test(n)){var T=r.exec(n);i=T[1],n=i+"i"}if(r=_,r.test(n)){var T=r.exec(n);i=T[1],o=T[2],r=l,r.test(i)&&(n=i+e[o])}if(r=E,r.test(n)){var T=r.exec(n);i=T[1],o=T[2],r=l,r.test(i)&&(n=i+t[o])}if(r=C,a=k,r.test(n)){var T=r.exec(n);i=T[1],r=u,r.test(i)&&(n=i)}else if(a.test(n)){var T=a.exec(n);i=T[1]+T[2],a=u,a.test(i)&&(n=i)}if(r=O,r.test(n)){var T=r.exec(n);i=T[1],r=u,a=d,c=A,(r.test(i)||a.test(i)&&!c.test(i))&&(n=i)}return r=N,a=u,r.test(n)&&a.test(n)&&(r=y,n=n.replace(r,"")),"y"==s&&(n=s.toLowerCase()+n.substr(1)),n};return T}(),e.Pipeline.registerFunction(e.stemmer,"stemmer"),/*!
   * lunr.stopWordFilter
   * Copyright (C) 2014 Oliver Nightingale
   */
e.stopWordFilter=function(t){return-1===e.stopWordFilter.stopWords.indexOf(t)?t:void 0},e.stopWordFilter.stopWords=new e.SortedSet,e.stopWordFilter.stopWords.length=119,e.stopWordFilter.stopWords.elements=["","a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"],e.Pipeline.registerFunction(e.stopWordFilter,"stopWordFilter"),/*!
   * lunr.trimmer
   * Copyright (C) 2014 Oliver Nightingale
   */
e.trimmer=function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"")},e.Pipeline.registerFunction(e.trimmer,"trimmer"),/*!
   * lunr.stemmer
   * Copyright (C) 2014 Oliver Nightingale
   * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
   */
e.TokenStore=function(){this.root={docs:{}},this.length=0},e.TokenStore.load=function(e){var t=new this;return t.root=e.root,t.length=e.length,t},e.TokenStore.prototype.add=function(e,t,n){var n=n||this.root,i=e[0],o=e.slice(1);return i in n||(n[i]={docs:{}}),0===o.length?(n[i].docs[t.ref]=t,void(this.length+=1)):this.add(o,t,n[i])},e.TokenStore.prototype.has=function(e){if(!e)return!1;for(var t=this.root,n=0;n<e.length;n++){if(!t[e[n]])return!1;t=t[e[n]]}return!0},e.TokenStore.prototype.getNode=function(e){if(!e)return{};for(var t=this.root,n=0;n<e.length;n++){if(!t[e[n]])return{};t=t[e[n]]}return t},e.TokenStore.prototype.get=function(e,t){return this.getNode(e,t).docs||{}},e.TokenStore.prototype.count=function(e,t){return Object.keys(this.get(e,t)).length},e.TokenStore.prototype.remove=function(e,t){if(e){for(var n=this.root,i=0;i<e.length;i++){if(!(e[i]in n))return;n=n[e[i]]}delete n.docs[t]}},e.TokenStore.prototype.expand=function(e,t){var n=this.getNode(e),i=n.docs||{},t=t||[];return Object.keys(i).length&&t.push(e),Object.keys(n).forEach(function(n){"docs"!==n&&t.concat(this.expand(e+n,t))},this),t},e.TokenStore.prototype.toJSON=function(){return{root:this.root,length:this.length}},function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.lunr=t()}(this,function(){return e})}();