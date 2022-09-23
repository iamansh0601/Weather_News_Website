(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{43:function(e,t,c){},63:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(17),a=c.n(r),s=c(3),l=c(16),i=c(30),o=Object(l.b)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_WEATHER":return t.payload;default:return e}},location:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_LOCATION":return t.payload;case"FETCH_LOCATION_ERROR":default:return e}},tempScale:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"celsius",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_TEMP_SCALE":return"celsius"===e?"fahrenheit":"celsius";default:return e}}}),d=(c(43),c(8)),u=c.n(d),j=c(11),b=c(14),m=c.n(b),h="e150d94ee55fa52264ec8a0834b7fa0a",p=function(e,t){return function(){var c=Object(j.a)(u.a.mark((function c(n){var r;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,m.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e,"&lon=").concat(t,"&appid=").concat(h));case 2:r=c.sent,console.log(r),n({type:"FETCH_WEATHER",payload:r.data});case 5:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(j.a)(u.a.mark((function t(c,n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat(h)).then((function(e){c({type:"FETCH_LOCATION",payload:e.data})})).catch((function(e){c({type:"FETCH_LOCATION_ERROR"})}));case 2:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(j.a)(u.a.mark((function t(c,n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(x(e));case 2:return r=n().location.coord,t.next=5,c(p(r.lat,r.lon));case 5:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}()},f=(c(63),c(10)),v=c(0),g=Object(s.b)(null,{fetchWeatherAndLocation:O})((function(e){var t=e.fetchWeatherAndLocation,c=Object(n.useState)(""),r=Object(f.a)(c,2),a=r[0],s=r[1],l=function(e){e.preventDefault();try{t(a)}catch(c){console.log("gg")}};return Object(v.jsx)("form",{onSubmit:l,className:"w-100 searchbar",children:Object(v.jsxs)("div",{className:"input-group mb-2 mt-2",children:[Object(v.jsx)("input",{className:"form-control",type:"search",placeholder:"Enter a city",value:a,onChange:function(e){s(e.target.value)},required:!0}),Object(v.jsx)("div",{className:"invalid-tooltip",children:"Please provide a valid city."}),Object(v.jsx)("div",{className:"input-group-append",onClick:l,children:Object(v.jsx)("button",{className:"btn orange text-white",type:"button",children:"Search"})})]})})})),w=c.p+"static/media/main.9adbc845.PNG",N=Object(s.b)((function(e){return{tempScale:e.tempScale}}),{toggleTempScale:function(){return{type:"TOGGLE_TEMP_SCALE"}}})((function(e){var t=e.tempScale,c=e.toggleTempScale,n="celsius"===t?"bolder":"normal",r="fahrenheit"===t?"bolder":"normal";return Object(v.jsxs)("nav",{className:"navbar navbar-dark bgdark row mb-4 pt-4 pb-4 text-center",children:[Object(v.jsx)("div",{className:"col-sm-2 text-center",children:Object(v.jsx)("img",{className:"img-fluid ",src:w,style:{maxWidth:"200px",height:"60px"},alt:"logo"})}),Object(v.jsx)("div",{className:"col-sm-8",children:Object(v.jsx)(g,{})}),Object(v.jsx)("div",{className:"col-sm-2",children:Object(v.jsxs)("button",{onClick:function(){c()},type:"button",className:"btn btn-light w-100",children:[Object(v.jsx)("span",{style:{fontWeight:n},children:"\xb0C"})," /"," ",Object(v.jsx)("span",{style:{fontWeight:r},children:"\xb0F"})]})})]})})),y=Object(s.b)((function(e){return{weather:e.weather,location:e.location}}))((function(e){var t=e.weather,c=e.location,n=e.temperature;return Object(v.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(v.jsx)("h2",{className:"location-name",children:c.name}),Object(v.jsx)("h4",{className:"weather-short-description",children:t.current.weather[0].main}),Object(v.jsx)("h1",{className:"display-1 ml-3",children:n(t.current.temp)}),Object(v.jsxs)("div",{className:"d-flex",children:[Object(v.jsxs)("p",{className:"mx-1",children:["H:",n(t.daily[0].temp.max)]}),Object(v.jsxs)("p",{className:"mx-1",children:["L:",n(t.daily[0].temp.min)]})]})]})})),k=c(9),E=c.n(k),T=(Object(s.b)((function(e){return{hourly:e.weather.hourly}}))((function(e){var t=e.hourly,c=e.temperature;return Object(v.jsx)("div",{className:"d-flex flex-row overflow-auto border-top border-bottom pb-2 pt-2",children:t.map((function(e,t){if(t<27){var n=0===t?"Now":E.a.unix(e.dt).format("HH");return Object(v.jsxs)("div",{className:"d-flex flex-column col-2 align-items-center px-4 ",children:[Object(v.jsx)("p",{className:"h-25",style:"Now"===n?{fontWeight:"bolder"}:{fontWeight:"normal"},children:n}),Object(v.jsx)("p",{className:"text-primary",children:e.pop>0?Math.round(100*e.pop)+"%":""}),Object(v.jsx)("figure",{children:Object(v.jsx)("img",{className:"img-fluid weather-img",src:" https://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@4x.png"),alt:e.weather[0].description})}),Object(v.jsx)("p",{className:"",children:c(e.temp)})]},e.dt)}return null}))})})),Object(s.b)((function(e){return{weather:e.weather.daily}}))((function(e){var t=e.weather,c=e.temperature;return Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"mb-4 list-group list-group-flush",children:[Object(v.jsxs)("div",{className:"list-group-item d-flex justify-content-between align-items-center row px-0 py-md-0 border-bottom text-center day-header",children:[Object(v.jsx)("div",{className:"col text-left d-none d-md-block d-lg-block d-xl-block text-muted",children:Object(v.jsx)("small",{children:"DAY"})}),Object(v.jsx)("div",{className:"col d-none d-md-block d-lg-block d-xl-bloc text-mutedk"}),Object(v.jsx)("div",{className:"col d-none d-md-block d-lg-block d-xl-block text-muted",children:Object(v.jsx)("small",{children:"CHANCE OF RAIN"})}),Object(v.jsx)("div",{className:"col d-none d-md-block d-lg-block d-xl-block text-muted",children:Object(v.jsx)("small",{children:"HUMIDITY"})}),Object(v.jsx)("div",{className:"col text-right d-none d-md-block d-lg-block d-xl-block text-muted",children:Object(v.jsx)("small",{children:"TEMPERATURE"})})]}),t.map((function(e,t){return 0===t?null:Object(v.jsxs)("div",{className:"list-group-item d-flex justify-content-between align-items-center row px-0 py-md-0 border-bottom",children:[Object(v.jsx)("div",{className:"col",children:Object(v.jsx)("p",{className:"mb-0",children:E.a.unix(e.dt).format("dddd")})}),Object(v.jsx)("div",{className:"col px-2 text-center",children:Object(v.jsx)("img",{className:"img-fluid weather-img",src:"https://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@4x.png"),alt:e.weather[0].description})}),Object(v.jsxs)("div",{className:"col d-none d-md-block d-lg-block d-xl-block text-center",children:[Math.round(100*e.pop),"%"]}),Object(v.jsxs)("div",{className:"col d-none d-md-block text-center",children:[e.humidity,"%"]}),Object(v.jsxs)("div",{className:"col d-flex flex-row justify-content-end",children:[Object(v.jsx)("p",{className:" mb-0",children:c(e.temp.max)}),Object(v.jsx)("p",{className:" ml-2 mb-0",children:c(e.temp.min)})]})]},e.dt)}))]})})}))),S=function(e){switch(!0){case e<22.5:return"n";case e<45:return"nne";case e<67.5:return"ne";case e<90:return"ene";case e<112.5:return"e";case e<135:return"ese";case e<157.5:return"se";case e<180:return"sse";case e<202.5:return"s";case e<225:return"ssw";case e<247.5:return"sw";case e<270:return"wsw";case e<292.5:return"w";case e<315:return"wnw";case e<337.5:return"nnw";default:return"nw"}},I=function(e){var t=e.description,c=e.value;return Object(v.jsxs)("li",{className:"list-group-item  pl-md-2 col text-md-center weather-description bg-dark text-white",children:[Object(v.jsx)("small",{className:"text-muted",children:t}),Object(v.jsx)("h5",{className:"mb-0 font-weight-normal",children:c})]})},C=Object(s.b)((function(e){return{weather:e.weather}}))((function(e){var t=e.weather,c=e.temperature;return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"row list-group-flush flex-column flex-md-row justify-content-center border-bottom  border-dark",children:[Object(v.jsx)(I,{description:"SUNRISE",value:E.a.unix(t.current.sunrise).format("HH:MM")}),Object(v.jsx)(I,{description:"SUNSET",value:E.a.unix(t.current.sunset).format("HH:MM")}),Object(v.jsx)(I,{description:"CHANCE OF RAIN",value:"".concat(Math.round(100*t.hourly[0].pop),"%")}),Object(v.jsx)(I,{description:"HUMIDITY",value:"".concat(t.current.humidity,"%")}),Object(v.jsx)(I,{description:"WIND",value:"".concat(S(t.current.wind_deg)," ").concat(Math.round(t.current.wind_speed)," km/hr")})]}),Object(v.jsxs)("div",{className:"row list-group-flush flex-column flex-md-row justify-content-center  border-bottom border-dark ",children:[Object(v.jsx)(I,{description:"FEELS LIKE",value:c(t.current.feels_like)}),Object(v.jsx)(I,{description:"PRECIPITATION",value:t.daily[0].rain?"".concat(t.daily[0].rain," cm"):"0%"}),Object(v.jsx)(I,{description:"PRESSURE",value:"".concat(t.current.pressure," hPa")}),Object(v.jsx)(I,{description:"VISIBILITY",value:"".concat(t.current.visibility/100," km")}),Object(v.jsx)(I,{description:"UV INDEX",value:t.current.uvi})]})]})})),F=(c(66),c(67),c.p+"static/media/Capture.a0160231.PNG"),A=function(e){e.setCategory;return Object(v.jsx)("div",{className:"nav",children:Object(v.jsx)("img",{style:{cursor:"pointer"},src:F,height:"80%",alt:"logo"})})},D=c(82),L=(c(68),function(e){var t=e.newsItem,c=new Date(t.publishedAt).toString().split(" "),n=parseInt(c[4].substring(0,2)),r=n>12;return Object(v.jsxs)("div",{className:"newsCard",children:[Object(v.jsx)("img",{alt:t.title,src:t.urlToImage?t.urlToImage:"http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1",className:"newsImage"}),Object(v.jsxs)("div",{className:"newsText",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{className:"title",children:t.title}),Object(v.jsx)("br",{}),Object(v.jsxs)("span",{className:"author",children:[Object(v.jsx)("a",{href:t.url,target:"__blank",children:Object(v.jsx)("b",{children:"short "})})," ",Object(v.jsxs)("span",{className:"muted",children:[" ","by ",t.author?t.author:"unknown"," /"," ",r?"".concat(n-12,":").concat(c[4].substring(3,5)," pm"):"".concat(n,":").concat(c[4].substring(3,5)," am")," ","on ",c[2]," ",c[1]," ",c[3],", ",c[0]]})]})]}),Object(v.jsxs)("div",{className:"lowerNewsText",children:[Object(v.jsx)("div",{className:"description",children:t.description}),Object(v.jsxs)("span",{className:"readmore",children:["read more at"," ",Object(v.jsx)("a",{href:t.url,target:"__blank",className:"source",children:Object(v.jsx)("b",{children:t.source.name})})]})]})]})]})}),M=(c(69),function(e){var t=e.newsArray,c=e.loadMore,n=e.setLoadMore,r=e.newsResults;return Object(v.jsx)(D.a,{maxWidth:"md",children:Object(v.jsxs)("div",{className:"content",children:[t.map((function(e){return Object(v.jsx)(L,{newsItem:e},e.title)})),c<=r&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("hr",{}),Object(v.jsx)("button",{className:"loadMore",onClick:function(){return n(c+2)},children:"Load More"})]})]})})});var R=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(),s=Object(f.a)(a,2),l=s[0],i=s[1],o=Object(n.useState)(2),d=Object(f.a)(o,2),b=d[0],h=d[1],p=Object(n.useState)("general"),x=Object(f.a)(p,2),O=x[0],g=(x[1],function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://cors-anywhere.herokuapp.com/",e.next=4,m.a.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=".concat("9ce5b9d9a42a4d1ab4f927d18b3514d7","&pageSize=").concat(b,"&category=").concat(O));case 4:t=e.sent,r(t.data.articles),i(t.data.totalResults),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}());return Object(n.useEffect)((function(){g()}),[l,b,O]),Object(v.jsxs)("div",{className:"App",id:"#home",children:[Object(v.jsx)(A,{setCategory:"general"}),l&&Object(v.jsx)(M,{newsArray:c,newsResults:l,loadMore:b,setLoadMore:h})]})},H=Object(s.b)((function(e){return{weather:e.weather,location:e.location,tempScale:e.tempScale}}),{fetchWeatherAndLocation:O})((function(e){var t=e.weather,c=e.location,r=e.fetchWeatherAndLocation,a=e.tempScale;Object(n.useEffect)((function(){r("London")}),[r]);var s=function(e){return"celsius"===a?(t=e,"".concat(Math.round(t-273.15),"\xb0")):function(e){return"".concat(Math.round(1.8*(e-273.15)+32),"\xb0")}(e);var t};return Object(v.jsxs)("div",{children:[Object(v.jsx)(N,{}),Object(v.jsx)("div",{className:"",children:0!==Object.keys(t).length&&0!==Object.keys(c).length?(console.log({location:c}),Object(v.jsx)("div",{className:"mb-5",children:Object(v.jsxs)("div",{className:"row justify-content-center align-items-center",children:[Object(v.jsx)("div",{className:"col-md-2 order-md-1 h7 container leftdata",children:Object(v.jsx)(y,{temperature:s})}),Object(v.jsx)("div",{className:"col-md-7 order-md-1 container",children:Object(v.jsx)(R,{})}),Object(v.jsx)("div",{className:"col-md-8 order-md-2 container"}),Object(v.jsx)("div",{className:"col-md-12 order-md-5 mt-5",children:Object(v.jsx)(T,{temperature:s})}),Object(v.jsx)("div",{className:"col-md-12 order-md-4 bgdark pt-5 pb-5",children:Object(v.jsx)(C,{temperature:s})}),Object(v.jsxs)("div",{className:"col-12 my-5 text-center h4  order-md-2",children:["Today: ",t.current.weather[0].description,". The high will be"," ",s(t.daily[0].temp.max),". The low tonight will be"," ",s(t.daily[0].temp.night),"."]})]})})):Object(v.jsx)("div",{className:"d-flex justify-content-center",children:Object(v.jsx)("div",{className:"spinner-border",role:"status",children:Object(v.jsx)("span",{className:"sr-only",children:"Loading..."})})})})]})})),_=function(){return Object(v.jsx)("div",{className:"container-fluid",children:Object(v.jsx)(H,{})})};a.a.render(Object(v.jsx)(s.a,{store:Object(l.c)(o,Object(l.a)(i.a)),children:Object(v.jsx)(_,{})}),document.querySelector("#root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.24344e3e.chunk.js.map