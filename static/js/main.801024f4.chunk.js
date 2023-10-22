(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},17:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){},21:function(e,t,i){"use strict";i.r(t);var a=i(9),c=i.n(a),n=(i(16),i(2)),l=i(8),s=(i(17),i(1)),d=(i(18),i(19),i(0)),r=function(e){var t=e.movie;return Object(d.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image is-4by3",children:Object(d.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsxs)("div",{className:"media",children:[Object(d.jsx)("div",{className:"media-left",children:Object(d.jsx)("figure",{className:"image is-48x48",children:Object(d.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(d.jsx)("div",{className:"media-content",children:Object(d.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(d.jsxs)("div",{className:"content",children:[t.description,Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(d.jsx)("div",{className:"movies",children:t.map((function(e){return Object(d.jsx)(r,{movie:e},e.imdbId)}))})},m=i(5),b=i(7),j=i(10),h=i.n(j);var u=function(e){var t=e.name,i=e.value,a=void 0===i?"":i,c=e.label,l=void 0===c?t:c,r=e.placeholder,o=void 0===r?"Enter ".concat(l):r,m=e.required,b=void 0!==m&&m,j=e.onChange,u=void 0===j?function(){}:j,g=e.checkIsValid,O=void 0===g?function(){}:g,v=Object(s.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),p=Object(n.a)(v,1)[0],w=Object(s.useState)(!1),x=Object(n.a)(w,2),f=x[0],M=x[1],N=f&&b&&!a,U=Boolean(("imdbUrl"===t||"imgUrl"===t)&&a&&!a.match(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/));return Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{className:"label",htmlFor:p,children:l}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("input",{name:t,type:"text",id:p,"data-cy":"movie-".concat(t),className:h()("input",{"is-danger":N||U}),placeholder:o,value:a,onChange:function(e){O(("imdbUrl"===t||"imgUrl"===t)&&U),u(e)},onBlur:function(){return M(!0)}})}),N&&Object(d.jsx)("p",{className:"help is-danger",children:"".concat(l," is required")}),U&&Object(d.jsx)("p",{className:"help is-danger",children:"Email is invalid"})]})},g=function(e){var t=e.onAdd,i=Object(s.useState)(0),a=Object(n.a)(i,2),c=a[0],l=a[1],r=Object(s.useState)(!0),o=Object(n.a)(r,2),j=o[0],h=o[1],g=Object(s.useState)({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}),O=Object(n.a)(g,2),v=O[0],p=O[1],w=function(e){p(Object(b.a)(Object(b.a)({},v),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),null!==v&&void 0!==v&&v.title&&null!==v&&void 0!==v&&v.imgUrl&&null!==v&&void 0!==v&&v.imdbUrl&&v.imdbId&&!j&&(t(v),l(c+1))},children:[Object(d.jsx)("h2",{className:"title",children:"Add a movie"}),Object(d.jsx)(u,{name:"title",label:"Title",value:v.title,onChange:w,required:!0}),Object(d.jsx)(u,{name:"description",label:"Description",value:v.description,onChange:w}),Object(d.jsx)(u,{name:"imgUrl",label:"Image URL",value:v.imgUrl,onChange:w,required:!0,checkIsValid:h}),Object(d.jsx)(u,{name:"imdbUrl",label:"Imdb URL",value:v.imdbUrl,onChange:w,required:!0,checkIsValid:h}),Object(d.jsx)(u,{name:"imdbId",label:"Imdb ID",value:v.imdbId,onChange:w,required:!0}),Object(d.jsx)("div",{className:"field is-grouped",children:Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:!(null!==v&&void 0!==v&&v.title)||!(null!==v&&void 0!==v&&v.imgUrl)||!(null!==v&&void 0!==v&&v.imdbUrl)||!v.imdbId||j,children:"Add"})})})]},c)},O=i(11),v=Object(l.a)(O),p=function(){var e=Object(s.useState)(v),t=Object(n.a)(e,2),i=t[0],a=t[1];return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("div",{className:"page-content",children:Object(d.jsx)(o,{movies:i})}),Object(d.jsx)("div",{className:"sidebar",children:Object(d.jsx)(g,{onAdd:function(e){a([].concat(Object(l.a)(v),[e]))}})})]})};c.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.801024f4.chunk.js.map