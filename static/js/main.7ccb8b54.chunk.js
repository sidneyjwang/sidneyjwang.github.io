(this["webpackJsonpfinished-app"]=this["webpackJsonpfinished-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(5),s=n.n(r),i=(n(11),n(12),n(13),n(0));var u=function(e){return Object(i.jsx)("div",{className:"header",children:e.title})};n(15);var o=function(e){return Object(i.jsx)("div",{className:"footer",children:e.title})},j=n(4),l=n.n(j),d=n(6),h=n(2);n(17),n(18);var b=function(e){for(var t={},n={},c=0;c<e.places.length;c++)t[e.places[c].PlaceId]=e.places[c].Name,n[e.places[c].PlaceId]=e.places[c].IataCode;return console.log(e.places),Object(i.jsx)("div",{className:"quotes",children:Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Number"}),Object(i.jsx)("th",{children:"Lowest Price"}),Object(i.jsx)("th",{children:"Carrier ID"}),Object(i.jsx)("th",{children:"Origin"}),Object(i.jsx)("th",{children:"Destination"})]})}),Object(i.jsx)("tbody",{children:e.quotes.map((function(e){return Object(i.jsxs)("tr",{id:e.QuoteId,children:[Object(i.jsx)("th",{children:e.QuoteId}),Object(i.jsx)("th",{children:"$"+e.MinPrice+".00"}),Object(i.jsx)("th",{children:e.OutboundLeg.CarrierIds}),Object(i.jsx)("th",{children:t[e.OutboundLeg.OriginId]+" ("+n[e.OutboundLeg.OriginId]+")"}),Object(i.jsx)("th",{children:t[e.OutboundLeg.DestinationId]+" ("+n[e.OutboundLeg.DestinationId]+")"})]})}))})]})})};var p=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(h.a)(r,2),u=s[0],o=s[1],j=Object(c.useState)(""),p=Object(h.a)(j,2),O=p[0],f=p[1],x=Object(c.useState)(""),g=Object(h.a)(x,2),v=g[0],m=g[1],y=Object(c.useState)(""),S=Object(h.a)(y,2),I=S[0],D=S[1],k=Object(c.useState)(""),P=Object(h.a)(k,2),C=P[0],L=P[1],U=Object(c.useState)(!1),w=Object(h.a)(U,2),F=w[0],q=w[1];return Object(i.jsxs)("div",{className:"airportinfo",children:[Object(i.jsxs)("form",{onSubmit:function(e){function t(){return(t=Object(d.a)(l.a.mark((function e(){var t,n,c,r,s,i,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"x-rapidapi-key":"d5df66e262msh0ee4ae21cf5eab8p14a4dcjsn5895e2e3c26f","x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",useQueryString:!0}},e.next=3,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?"+new URLSearchParams({query:O}),t);case 3:return n=e.sent,e.next=6,n.json();case 6:return n=e.sent,c=n.Places[0].PlaceId,e.next=10,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?"+new URLSearchParams({query:v}),t);case 10:return r=e.sent,e.next=13,r.json();case 13:return r=e.sent,s=r.Places[0].PlaceId,i="",""!==C&&(i="?inboundpartialdate="+C),e.next=19,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/"+c+"/"+s+"/"+I+i,t);case 19:return u=e.sent,e.next=22,u.json();case 22:u=e.sent,console.log(u),a(u.Quotes),o(u.Places);case 26:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}(),q(!0)},children:[Object(i.jsx)("label",{htmlFor:"originInput",children:"City of Origin:"}),Object(i.jsx)("input",{id:"originInput",value:O,onChange:function(e){return f(e.target.value)},required:!0}),Object(i.jsx)("label",{htmlFor:"destinationInput",children:"City Destination:"}),Object(i.jsx)("input",{id:"destinationInput",value:v,onChange:function(e){return m(e.target.value)},required:!0}),Object(i.jsx)("label",{htmlFor:"goDate",children:"Leaving date (yyyy-mm-dd or yyyy-mm):"}),Object(i.jsx)("input",{id:"goDate",value:I,onChange:function(e){return D(e.target.value)},required:!0}),Object(i.jsx)("label",{htmlFor:"leaveDate",children:"Return date: (blank for one-way)"}),Object(i.jsx)("input",{id:"leaveDate",value:C,onChange:function(e){return L(e.target.value)}}),Object(i.jsx)("button",{className:"search",children:"Submit"})]}),F?Object(i.jsx)(b,{quotes:n,places:u}):Object(i.jsx)(i.Fragment,{})]})};var O=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(u,{title:"Airport Info"}),Object(i.jsx)(p,{}),Object(i.jsx)(o,{title:"2021"})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),f()}],[[19,1,2]]]);
//# sourceMappingURL=main.7ccb8b54.chunk.js.map