"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[111],{148:(a,e,t)=>{t.d(e,{Z:()=>i});const s="Error_container__HDA9I",c="Error_messageBox__EwZWm",n="Error_message__VqNLX";var r=t(184);const i=a=>{let{error:e}=a;return(0,r.jsx)("div",{className:s,children:(0,r.jsx)("div",{className:c,children:(0,r.jsx)("span",{className:n,children:e})})})}},901:(a,e,t)=>{t.d(e,{Z:()=>n});var s=t(294);s.Z.defaults.baseURL="https://api.themoviedb.org/3";const c="d5b1fa00344d722420179540213be4e9";const n={getTrendingMovies:async function(){return await s.Z.get("/trending/movie/day?api_key=".concat(c,"&language=en-US"))},getSearchResults:async function(a){return await s.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(a,"&include_adult=false&language=en-US&page=1"))},getMovieDetails:async function(a){return await s.Z.get("/movie/".concat(a,"?api_key=").concat(c,"&language=en-US"))},getActors:async function(a){return await s.Z.get("/movie/".concat(a,"/credits?api_key=").concat(c,"&language=en-US"))},getReviews:async function(a){return await s.Z.get("/movie/".concat(a,"/reviews?api_key=").concat(c,"&language=en-US"))}}},111:(a,e,t)=>{t.r(e),t.d(e,{default:()=>p});var s=t(791);const c="Cast_cast__ytIwa",n="Cast_actorList__nY1vK",r="Cast_actor__k3klb",i="Cast_profilePic__a1Cg0",o="Cast_name__t82CB",l="Cast_character__Qx5pO",_="Cast_infos__7-gAC";var g=t(689),u=t(844),d=t(148),m=t(901),h=t(184);const p=()=>{const[a,e]=(0,s.useState)([]),[t,p]=(0,s.useState)(""),[v,f]=(0,s.useState)(!1),[j,x]=(0,s.useState)(""),y=(0,g.TH)();return(0,s.useEffect)((()=>{const a=y.pathname.split("/movies/").join("").split("/cast").join("");p(a)}),[y]),(0,s.useEffect)((()=>{t.length>0&&(f(!0),async function(){const a=(await m.Z.getActors(t)).data.cast;return e(a),a}().catch((a=>{console.log(a),x(a.message)})).finally(f(!1)))}),[t]),j.length>0?(0,h.jsx)(d.Z,{error:j}):v?(0,h.jsx)(u.Z,{}):(0,h.jsx)("div",{className:c,children:(0,h.jsx)("ul",{className:n,children:a.map((a=>{return(0,h.jsxs)("li",{className:r,children:[(0,h.jsx)("img",{src:(e=a.profile_path,"https://image.tmdb.org/t/p/original/".concat(e)),alt:"".concat(a.name),className:i}),(0,h.jsxs)("div",{className:_,children:[(0,h.jsx)("h4",{className:o,children:a.name}),(0,h.jsxs)("span",{className:l,children:["Character: ",(0,h.jsx)("span",{children:a.character})]})]})]},a.id);var e}))})})}}}]);
//# sourceMappingURL=111.d4aae357.chunk.js.map