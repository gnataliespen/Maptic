(this.webpackJsonpgeopins=this.webpackJsonpgeopins||[]).push([[4],{539:function(e,t,n){"use strict";n.r(t);var a=n(25),r=n(22),o=n.n(r),c=n(33),i=n(37),s=n(75),u=n(525),l=n(540),p=n(84),f=n.n(p),d=n(538),b=n(0),m=n.n(b),g=n(20),y=n(68),O=n(15);n(537);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={latitude:30.267153,longitude:-97.743057,zoom:13};t.default=function(){var e=Object(b.useState)(v),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(b.useContext)(g.a),p=r.state,h=r.dispatch,k=f()({maxWidth:650});Object(b.useEffect)((function(){(function(){var e=Object(c.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/pins");case 2:t=e.sent,h({type:O.f,payload:t.data});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h]);var w=function(e){var t=new Date(e.createdAt);return Object(l.a)(Date.now(),Number(t))<=30?"green":"purple"},E=function(){var e=Object(c.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,r=t.latitude,o=t.longitude;a(j({},n,{latitude:r,longitude:o}))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=Object(b.useCallback)((function(e){h({type:O.k,payload:e})}),[h]),C=Object(b.useMemo)((function(){return p.pins.map((function(e){return m.a.createElement(d.a,{key:e._id,latitude:e.latitude,longitude:e.longitude,offsetLeft:-19,offsetTop:-37,className:"marker",captureClick:!0},m.a.createElement(s.a,{name:"marker",size:"big",color:w(e),className:"pin",onClick:function(){return x(e)}}))}))}),[p.pins,x]);return m.a.createElement("div",{className:"map-container"},m.a.createElement(d.c,Object.assign({id:"map",width:"100%",height:"calc(100vh - 72px)",mapStyle:"mapbox://styles/mapbox/streets-v9",mapboxApiAccessToken:"pk.eyJ1IjoiZ25hdGFsaWUiLCJhIjoiY2syc2JibzMwMHl4MzNvbnZxdGE4eThnYiJ9.Y4atD9eDNRJ9FDyPnUmGdQ",onViewportChange:function(e){return a(e)},scrollZoom:!k,onClick:function(e){var t=e.lngLat,n=e.leftButton,a=e.target;if(n&&"crosshairs icon"!==a.className){var r=Object(i.a)(t,2),o=r[0],c=r[1];p.draft||h({type:O.d}),h({type:O.l,payload:{longitude:o,latitude:c}})}}},n),m.a.createElement(u.a,{onClick:E,icon:"crosshairs",className:"mapboxgl-ctrl-group","aria-label":"Use my location",id:"user-pos"}),m.a.createElement(d.b,{onViewportChange:function(e){return a(e)}}),p.draft&&m.a.createElement(d.a,{latitude:p.draft.latitude,longitude:p.draft.longitude,offsetLeft:-19,offsetTop:-37},m.a.createElement(s.a,{name:"marker",size:"big",color:"pink"})),C))}}}]);
//# sourceMappingURL=4.4872a14d.chunk.js.map