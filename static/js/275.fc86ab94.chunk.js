"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[275],{197:function(e,t,n){n.d(t,{Ai:function(){return l},Bt:function(){return p},jC:function(){return o},wr:function(){return i},y:function(){return f}});var r=n(861),a=n(757),u=n.n(a),c=n(243),s="57e1b59327fa5f75a2550cb581fcbe1f";c.Z.defaults.baseURL="https://api.themoviedb.org/";var i=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/3/trending/movie/day?language=en-US&api_key=".concat(s),{});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/3/movie/".concat(t,"?language=en-US&api_key=").concat(s),{});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/3/movie/".concat(t,"/credits?language=en-US&api_key=").concat(s),{});case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/3/movie/".concat(t,"/reviews?language=en-US&api_key=").concat(s),{});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1&api_key=").concat(s),{});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},368:function(e,t,n){var r=n(689),a=n(87),u=n(184);t.Z=function(e){var t=e.movies,n=(e.state,(0,r.TH)());return(0,u.jsx)(u.Fragment,{children:t.map((function(e){var t=e.id,r=e.original_title;return(0,u.jsx)("ul",{children:(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:n},children:r})})},t)}))})}},275:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(433),a=n(861),u=n(439),c=n(757),s=n.n(c),i=n(197),o=n(793),f=n(368),p=n(184),l=function(e){var t=e.onSubmit;return(0,p.jsxs)("form",{action:"",onSubmit:t,children:[(0,p.jsx)("input",{type:"text",name:"search",placeholder:"Search movie",autoFocus:!0,autoComplete:"off"}),(0,p.jsx)("button",{type:"submit","aria-label":"Search movies",children:"Search"})]})},v=n(791),h=n(87),m=function(){var e=(0,v.useState)([]),t=(0,u.Z)(e,2),n=t[0],c=t[1],m=(0,v.useState)(!1),d=(0,u.Z)(m,2),x=d[0],g=d[1],b=(0,v.useState)(!1),w=(0,u.Z)(b,2),k=w[0],Z=w[1],y=(0,h.lr)(),S=(0,u.Z)(y,2),j=S[0],_=S[1],U=j.get("search");return(0,v.useEffect)((function(){if(U){var e=function(){var e=(0,a.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!1),Z(!0),e.next=5,(0,i.Ai)(t);case 5:if(0!==(n=e.sent).length){e.next=8;break}throw new Error;case 8:c((0,r.Z)(n)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),g("No images");case 14:return e.prev=14,Z(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(t){return e.apply(this,arguments)}}();e(U)}}),[U]),(0,p.jsxs)("div",{children:[(0,p.jsx)(l,{onSubmit:function(e){e.preventDefault(),""!==U?(_({search:e.target.elements.search.value}),e.target.reset()):alert("Please enter movie name")}}),(0,p.jsx)(f.Z,{movies:n}),k&&(0,p.jsx)(o.a,{}),x&&(0,p.jsx)("p",{children:x})]})}}}]);
//# sourceMappingURL=275.fc86ab94.chunk.js.map