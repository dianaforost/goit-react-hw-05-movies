"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(e,t,n){n.r(t),n.d(t,{Cast:function(){return l}});var r=n(861),s=n(439),i=n(757),a=n.n(i),o=n(444),c=n(791),_=n(226),u=n(184);function l(e){var t=e.movie,n=(0,c.useState)([]),i=(0,s.Z)(n,2),l=i[0],p=i[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.au)(t.id);case 2:n=e.sent,p(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t.id]),(0,u.jsx)("ul",{className:_.Z.CastList,children:l.length>1?l.map((function(e){return(0,u.jsxs)("li",{children:[null!==e.profile_path?(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.profile_path),alt:e.original_name}):(0,u.jsx)("img",{className:_.Z.NoImage,src:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",alt:"With no portrat"}),(0,u.jsx)("h4",{children:e.original_name}),(0,u.jsxs)("p",{children:["Character: ",e.character]})]},e.credit_id)})):(0,u.jsx)("p",{children:"We're sorry, but there are no reviews yet."})})}},444:function(e,t,n){n.d(t,{Wf:function(){return v},XT:function(){return l},YJ:function(){return p},au:function(){return y},q5:function(){return m}});var r=n(861),s=n(757),i=n.n(s),a=n(7),o=n.n(a),c=n(243),_="42e9fa5f0127d7be790bf01016aed54e",u="https://api.themoviedb.org/3",l=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(_,"&language=en-US&&page=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(_,"&language=en-US"));case 2:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,s=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,e.next=3,c.Z.get("".concat(u,"/search/movie?api_key=").concat(_,"&query=").concat(t,"&language=en-US&page=").concat(n));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(_,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(_,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();l.propTypes={page:o().number.isRequired},p.propTypes={id:o().number.isRequired},v.propTypes={query:o().string.isRequired,page:o().number.isRequired},y.propTypes={id:o().number.isRequired},m.propTypes={id:o().number.isRequired}},226:function(e,t){t.Z={NoImage:"styles_NoImage__UKmdh",container:"styles_container__xkJAz",Home:"styles_Home__yKKUP",Movies:"styles_Movies__OhJn5",HomeTitle:"styles_HomeTitle__KcSOJ",HomeMovieLink:"styles_HomeMovieLink__5ZKft",PrevBtn:"styles_PrevBtn__T7Pq6",NextBtn:"styles_NextBtn__A9wvF",HomeBtnCont:"styles_HomeBtnCont__oH5t1",SectionHero:"styles_SectionHero__2mpe-",SearchBarForm:"styles_SearchBarForm__D01f6",MovieSearchTitle:"styles_MovieSearchTitle__lYVvP",HeaderCont:"styles_HeaderCont__iqh1E",Header:"styles_Header__ykbb-",Show:"styles_Show__697Tx",GitHubIcon:"styles_GitHubIcon__irLJu",HomePageSection:"styles_HomePageSection__r3ddi",TrendingMoviesList:"styles_TrendingMoviesList__GgUO5",MovieSection:"styles_MovieSection__Ipb70",MoviesList:"styles_MoviesList__ULRu5",MovieListContainer:"styles_MovieListContainer__1U2k1",MoviesListItem:"styles_MoviesListItem__Q71ET",MoviesListItemLink:"styles_MoviesListItemLink__qAIkF",SearchFormInput:"styles_SearchFormInput__CgiPO",SearchFormBtn:"styles_SearchFormBtn__dtFc8",MoviesBtnContainer:"styles_MoviesBtnContainer__OsuIn",MovieDetailsSection:"styles_MovieDetailsSection__m6qhY",BackLinkContainer:"styles_BackLinkContainer__+Swgi",MovieDetailsTitle:"styles_MovieDetailsTitle__j7tLU",BackLink:"styles_BackLink__+YUgl",MovieDetailsContainer:"styles_MovieDetailsContainer__qC0KM",MovieDetailsImage:"styles_MovieDetailsImage__-Minz",MovieDetailsOverview:"styles_MovieDetailsOverview__d2-yp",MovieDetailsList:"styles_MovieDetailsList__pAt51",CastList:"styles_CastList__5TP9o",CastBtn:"styles_CastBtn__L6MH3",ReviewsBtn:"styles_ReviewsBtn__fGLGb",ReviewsList:"styles_ReviewsList__Z8QN3",ss:"styles_ss__CKUZI",PageNotFoundSection:"styles_PageNotFoundSection__o7Tfk",PageNotFound:"styles_PageNotFound__RbxrK",PageNotFoundText:"styles_PageNotFoundText__kJvZU"}}}]);
//# sourceMappingURL=247.c3ab8e2b.chunk.js.map