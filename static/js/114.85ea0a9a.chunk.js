"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[114],{197:function(r,e,t){t.d(e,{Ai:function(){return v},Bt:function(){return p},jC:function(){return o},wr:function(){return i},y:function(){return f}});var n=t(861),a=t(757),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s={api_key:"".concat("57e1b59327fa5f75a2550cb581fcbe1f"),language:"en-US"},i=function(){var r=(0,n.Z)(u().mark((function r(){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/trending/movie/day?",{params:s});case 2:return e=r.sent,r.abrupt("return",e.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(e,"?"),{params:s});case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(e,"/credits?"),{params:s});case 2:return t=r.sent,r.abrupt("return",t.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(e,"/reviews?"),{params:s});case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/search/movie?query=".concat(e,"&include_adult=false&page=1"),{params:s});case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},368:function(r,e,t){var n=t(689),a=t(87),u=t(184);e.Z=function(r){var e=r.movies,t=(r.state,(0,n.TH)());return(0,u.jsx)(u.Fragment,{children:e.map((function(r){var e=r.id,n=r.original_title;return(0,u.jsx)("ul",{children:(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:t},children:n})})},e)}))})}},114:function(r,e,t){t.r(e),t.d(e,{default:function(){return l}});var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(197),i=t(793),o=t(368),f=t(791),p=t(184),v=function(){var r=(0,f.useState)([]),e=(0,a.Z)(r,2),t=e[0],u=e[1],v=(0,f.useState)(!1),l=(0,a.Z)(v,2),d=l[0],h=l[1],m=(0,f.useState)(!1),x=(0,a.Z)(m,2),w=x[0],Z=x[1],g=(0,f.useCallback)((0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,h(!1),Z(!0),r.next=5,(0,s.wr)();case 5:if(0!==(e=r.sent).length){r.next=8;break}throw new Error;case 8:u(e),Z(!1),r.next=16;break;case 12:r.prev=12,r.t0=r.catch(0),Z(!1),h("No images");case 16:case"end":return r.stop()}}),r,null,[[0,12]])}))),[]);return(0,f.useEffect)((function(){g()}),[g]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{children:(0,p.jsx)(o.Z,{movies:t})}),w&&(0,p.jsx)(i.a,{}),d&&(0,p.jsx)("p",{children:d})]})},l=function(){return(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)(v,{})]})}}}]);
//# sourceMappingURL=114.85ea0a9a.chunk.js.map