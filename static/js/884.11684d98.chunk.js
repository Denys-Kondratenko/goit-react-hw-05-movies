"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{197:function(e,r,t){t.d(r,{Ai:function(){return f},Bt:function(){return l},jC:function(){return o},wr:function(){return i},y:function(){return p}});var n=t(861),a=t(757),s=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u={api_key:"".concat("57e1b59327fa5f75a2550cb581fcbe1f"),language:"en-US"},i=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day?",{params:u});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"?"),{params:u});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"/credits?"),{params:u});case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"/reviews?"),{params:u});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?query=".concat(r,"&include_adult=false&page=1"),{params:u});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},884:function(e,r,t){t.r(r);var n=t(861),a=t(439),s=t(757),c=t.n(s),u=t(197),i=t(793),o=t(791),p=t(689),l=t(87),f=t(184);r.default=function(){var e,r,t=(0,p.UO)().movieId,s=(0,o.useState)(""),d=(0,a.Z)(s,2),v=d[0],h=d[1],x=(0,o.useState)(!1),m=(0,a.Z)(x,2),j=m[0],w=m[1],g=(0,o.useState)(!1),k=(0,a.Z)(g,2),b=k[0],Z=k[1],_=(0,p.TH)(),y=(0,o.useRef)(null!==(e=null===(r=_.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/"),U=(0,o.useCallback)((0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!1),Z(!0),e.next=5,(0,u.jC)(t);case 5:if(0!==(r=e.sent).length){e.next=8;break}throw new Error;case 8:h(r),Z(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),Z(!1),w("No images");case 16:case"end":return e.stop()}}),e,null,[[0,12]])}))),[t]);(0,o.useEffect)((function(){U()}),[U]);var C=v.poster_path,S=v.original_title,R=v.release_date,A=v.vote_average,B=v.overview,E=v.genres,O=v.id;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.rU,{to:y.current,children:"Back to products"}),""!==v&&(0,f.jsxs)("div",{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(C),alt:S}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h2",{children:[S," (",R.slice(0,4),")"]}),(0,f.jsxs)("p",{children:["User Score: ",Math.round(10*A),"%"]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:B}),(0,f.jsx)("h4",{children:"Genres"}),(0,f.jsx)("p",{children:E.map((function(e){return e.name})).join(" ")})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"Additinal information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(l.rU,{to:"/movies/".concat(O,"/cast"),children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(l.rU,{to:"/movies/".concat(O,"/reviews"),children:"Reviews"})})]})]}),(0,f.jsx)(o.Suspense,{fallback:(0,f.jsx)(i.a,{}),children:(0,f.jsx)(p.j3,{})})]}),b&&(0,f.jsx)(i.a,{}),j&&(0,f.jsx)("p",{children:j})]})}}}]);
//# sourceMappingURL=884.11684d98.chunk.js.map