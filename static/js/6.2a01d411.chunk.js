"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[6],{745:(e,t,a)=>{a.d(t,{Z:()=>n});const n=function(e){let t=1;e.forEach((e=>{e.nr=t,t++}))}},148:(e,t,a)=>{a.d(t,{Z:()=>i});const n="Error_container__HDA9I",s="Error_messageBox__EwZWm",c="Error_message__VqNLX";var r=a(184);const i=e=>{let{error:t}=e;return(0,r.jsx)("div",{className:n,children:(0,r.jsx)("div",{className:s,children:(0,r.jsx)("span",{className:c,children:t})})})}},252:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(689),s=a(87);const c="RenderList_list__SIGhA",r="RenderList_item__1fSah";var i=a(184);const o=e=>{let{list:t}=e;const a=(0,n.TH)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{className:c,children:t.map((e=>(0,i.jsx)("li",{children:(0,i.jsxs)(s.rU,{to:"/movies/".concat(e.id),className:r,state:{from:a},children:[(0,i.jsx)("span",{children:e.nr+". "}),e.title]})},e.id)))})})}},901:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(294);n.Z.defaults.baseURL="https://api.themoviedb.org/3";const s="d5b1fa00344d722420179540213be4e9";const c={getTrendingMovies:async function(){return await n.Z.get("/trending/movie/day?api_key=".concat(s,"&language=en-US"))},getSearchResults:async function(e){return await n.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(e,"&include_adult=false&language=en-US&page=1"))},getMovieDetails:async function(e){return await n.Z.get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"))},getActors:async function(e){return await n.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"))},getReviews:async function(e){return await n.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US"))}}},6:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(791),s=a(148),c=a(844),r=a(901);const i="HomePage_container__-by1z",o="HomePage_title__cEnb-";var l=a(252),g=a(745),d=a(184);const u=()=>{const[e,t]=(0,n.useState)([]),[a,u]=(0,n.useState)(!1),[_,m]=(0,n.useState)("");return(0,n.useEffect)((()=>{u(!0),async function(){const e=(await r.Z.getTrendingMovies()).data.results;return(0,g.Z)(e),t(e),e}().catch((e=>{console.log(e.message),m(e.message)})).finally(u(!1))}),[]),a?(0,d.jsx)(c.Z,{}):_.length>0?(0,d.jsx)(s.Z,{error:_}):(0,d.jsxs)("div",{className:i,children:[(0,d.jsx)("h2",{className:o,children:"Trending today"}),(0,d.jsx)(l.Z,{list:e})]})}}}]);
//# sourceMappingURL=6.2a01d411.chunk.js.map