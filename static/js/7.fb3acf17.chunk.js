(this.webpackJsonpverbformer=this.webpackJsonpverbformer||[]).push([[7],{31:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return u})),n.d(t,"g",(function(){return a})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return p}));var r=n(1),o=function(e){return function(t){t({type:r.b,payload:e})}},c=function(){return function(e){e({type:r.a,payload:"check"})}},u=function(e){return function(t){t({type:r.f,payload:e})}},a=function(e,t,n,o,c){return function(u){var a;for(a=e;a<t;a++)n.push(o[a]);u({type:r.h,payload:{WorkList:n,"Spr\xe5k":c,testList:n}}),console.log(n)}},l=function(){return function(e){e({type:r.i}),console.log("initial state")}},s=function(e,t,n,o){return function(c){e?(0!==n[0]&&t.splice(n[0]-1,1),n[0]=Math.floor(Math.random()*(t.length-1))+1):0!==t.length&&0!==n[0]?t.splice(0,1):n[0]=1,console.log(t[0]),Object.keys(t[0]).map((function(e){return o[e]=t[n[0]-1][e],e})),c({type:r.c,payload:{WorkList:t,int:n,CheckVerb:o}})}},i=function(e){return function(t){Object.keys(e).map((function(t){return e[t]=document.getElementById(t).value.toLowerCase(),t})),t({type:r.g,payload:e})}},d=function(e,t,n,r){return e===t?n:r},m=function(e,t,n){return function(o){var c={"nederl\xe4ndska":n.nederl\u00e4ndska,presens:e.presens,preteritum:e.preteritum,supinum:e.supinum,backgroundColor:{},correctAnswer:{}};Object.keys(e).map((function(t){var r=t+"Color";return c.backgroundColor[r]=d(e[t],n[t],"rgb(139, 188, 51)","#ff4d4d"),c.correctAnswer[t]=d(e[t],n[t],"","(".concat(n[t],")")),c})),t.push(c),o({type:r.e,payload:t})}},p=function(){return function(e){e({type:r.d})}}},35:function(e,t,n){"use strict";n.r(t);var r=n(9),o=n(10),c=n(12),u=n(11),a=n(13),l=n(0),s=n.n(l),i=n(14),d=n(31),m=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).G\u00f6rOm=function(){n.props.gorom(),n.props.Clear(),n.props.Empty()},n}return Object(a.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.workList,n=e.testList;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"d-flex flex-column"},s.a.createElement("table",{className:"table table-bordered",style:{width:"100%",backgroundColor:"white"}},s.a.createElement("thead",null,s.a.createElement("tr",{style:{backgroundColor:"brown"}},s.a.createElement("th",null),s.a.createElement("th",null,"Presens"),s.a.createElement("th",null,"Preteritum"),s.a.createElement("th",null,"Supinum"))),s.a.createElement("tbody",null,1===t.length?n.map((function(e,t){return s.a.createElement("tr",{key:t},s.a.createElement("td",{style:{backgroundColor:"brown"}},e.nederl\u00e4ndska),s.a.createElement("td",{style:{backgroundColor:e.backgroundColor.presensColor}},e.presens+" "+e.correctAnswer.presens),s.a.createElement("td",{style:{backgroundColor:e.backgroundColor.preteritumColor}},e.preteritum+" "+e.correctAnswer.preteritum),s.a.createElement("td",{style:{backgroundColor:e.backgroundColor.supinumColor}},e.supinum+" "+e.correctAnswer.supinum))})):n.map((function(e,t){return s.a.createElement("tr",{key:t},s.a.createElement("td",{style:{backgroundColor:"brown"}},e.nederl\u00e4ndska),s.a.createElement("td",{style:{backgroundColor:"rgb(139, 188, 51)"}},e.presens),s.a.createElement("td",{style:{backgroundColor:"rgb(139, 188, 51)"}},e.preteritum),s.a.createElement("td",{style:{backgroundColor:"rgb(139, 188, 51)"}},e.supinum))}))))),s.a.createElement("div",{className:"d-flex col-sm m-2 justify-content-center"},s.a.createElement("button",{type:"button",id:"GorOm",className:"btn btn-secondary btn-lg m-2",onClick:this.G\u00f6rOm},"G\xf6r om")))}}]),t}(l.Component);t.default=Object(i.b)((function(e){return{testList:e.VerbReducer.testList,workList:e.VerbReducer.WorkList}}),(function(e){return{Clear:function(){return e(Object(d.e)())},gorom:function(){return e(Object(d.h)())},Empty:function(){return e(Object(d.a)())}}}))(m)}}]);
//# sourceMappingURL=7.fb3acf17.chunk.js.map