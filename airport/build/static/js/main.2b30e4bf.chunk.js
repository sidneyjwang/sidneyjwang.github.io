(this["webpackJsonpfinished-app"]=this["webpackJsonpfinished-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(5),i=n.n(s),a=(n(11),n(12),n(13),n(0));var u=function(e){return Object(a.jsx)("div",{className:"header",children:e.title})};n(15);var o=function(e){return Object(a.jsx)("div",{className:"footer",children:e.title})},j=n(4),h=n.n(j),d=n(6),l=n(2);n(17),n(18);var b=function(e){return Object(a.jsx)("div",{className:"quotes",children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Quote ID"}),Object(a.jsx)("th",{children:"Min Price"}),Object(a.jsx)("th",{children:"Outbound Leg Carrier IDs"}),Object(a.jsx)("th",{children:"Origin ID"}),Object(a.jsx)("th",{children:"Destination ID"})]})}),Object(a.jsx)("tbody",{children:e.quotes.map((function(e){return Object(a.jsxs)("tr",{id:e.QuoteId,children:[Object(a.jsx)("th",{children:e.QuoteId}),Object(a.jsx)("th",{children:e.MinPrice}),Object(a.jsx)("th",{children:e.OutboundLeg.CarrierIds}),Object(a.jsx)("th",{children:e.OutboundLeg.OriginId}),Object(a.jsx)("th",{children:e.OutboundLeg.DestinationId})]})}))})]})})};var p=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),i=Object(l.a)(s,2),u=i[0],o=i[1],j=Object(r.useState)(""),p=Object(l.a)(j,2),O=p[0],f=p[1],x=Object(r.useState)(!1),g=Object(l.a)(x,2),v=g[0],m=g[1];return Object(a.jsxs)("div",{className:"airportinfo",children:[Object(a.jsxs)("form",{onSubmit:function(e){function t(){return(t=Object(d.a)(h.a.mark((function e(){var t,n,r,s,i,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"x-rapidapi-key":"d5df66e262msh0ee4ae21cf5eab8p14a4dcjsn5895e2e3c26f","x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",useQueryString:!0}},e.next=3,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?"+new URLSearchParams({query:u}),t);case 3:return n=e.sent,e.next=6,n.json();case 6:if(n=e.sent,7===(r=n.Places[0].PlaceId).length){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?"+new URLSearchParams({query:O}),t);case 12:return s=e.sent,e.next=15,s.json();case 15:if(s=e.sent,i=s.Places[0].PlaceId,console.log(i),7===i.length){e.next=20;break}return e.abrupt("return");case 20:return e.next=22,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/"+r+"/"+i+"/2021-03-19",t);case 22:return a=e.sent,e.next=25,a.json();case 25:a=e.sent,c(a.Quotes);case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}(),m(!0)},children:[Object(a.jsx)("label",{htmlFor:"originInput",children:"City of Origin:"}),Object(a.jsx)("input",{id:"originInput",value:u,onChange:function(e){return o(e.target.value)},required:!0}),Object(a.jsx)("label",{htmlFor:"destinationInput",children:"City Destination:"}),Object(a.jsx)("input",{id:"destinationInput",value:O,onChange:function(e){return f(e.target.value)},required:!0}),Object(a.jsx)("button",{className:"search",children:"Submit"})]}),v?Object(a.jsx)(b,{quotes:n}):Object(a.jsx)(a.Fragment,{})]})};var O=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u,{title:"Airport Info"}),Object(a.jsx)(p,{}),Object(a.jsx)(o,{title:"2021"})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),f()}],[[19,1,2]]]);
//# sourceMappingURL=main.2b30e4bf.chunk.js.map