(this["webpackJsonpfalcon-react"]=this["webpackJsonpfalcon-react"]||[]).push([[13],{1093:function(e,t,a){"use strict";var s=a(2),c=a(1),n=a.n(c),r=a(1035),i=a.n(r),o=(a(1267),a(1268),a(1269),a(2138)),l=new i.a.Icon({iconUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAACXBIWXMAAAFgAAABYAEg2RPaAAADpElEQVRYCZ1XS1LbQBBtybIdiMEJKSpUqihgEW/xDdARyAnirOIl3MBH8NK7mBvkBpFv4Gy9IRSpFIQiRPyNfqkeZkY9HwmFt7Lm06+7p/vN2MmyDIrQ6QebALAHAD4AbFuWfQeAAACGs5H/w5jlsJJw4wMA+GhMFuMA99jIDJJOP+ihZwDQFmNuowWO1wS3viDXpdEdZPEc0odruj0EgN5s5H8tJOEEX8R3rbkMtcU34NTqhe5nSQTJ7Tkk80s6/Gk28scGiULguFBffgdufdEwWoQ0uoXo8hdAlooVH0REjISfwZSlyHGh0V5n6aHAtKTxXI5g6nQnMH0P4bEgwtR18Yw8Pj8QZ4ARUAI0Hl+fQZZGisGEBVwHr7XKzox57DXZ/ij8Cdwe2u057z9/wygOxRl4S2vSUHx1oucaMQGAHTrgtdag9mK5aN+Wx/uAAQ9Zenp/SRce4TpaNbQK4+sTcGqeTB/aIXv3XN5oj2VKqii++U0JunpZ8urxee4hvjqVc2hHpBDXuKKT9XMgVYJ1/1fPGSeaikzgmWWkMIi9bVf8UhotXxzORn5gWFchI8QyttlzjS0qpsaIGY2MMsujV/AUSdcY0dDpB6/EiOPYzclR1CI5mOez3ekHvrFLxa7cR5pTscfrXjk0Vhm5V2PqLUWnH3R5GbPGpMVD7E1ckXesKBQ7AS/vmQ1c0+kHuxpBj98lTCm8pbc5QRJRdZ6qHb/wGryXq3Lxszv+5gySuwvxueXySwYvHEjuQ9ofTGKYlrmK1EsCHMd5SoD7mZ1HHFCBHLNbMEshvrugqWLn01hpVVJhFgVGkDvK7hR6n2B+d9C7xsqWsbkqHv4cCsWezEb+o2SR+SFweUBxfA5wH7kShjKt2vWL57Px3GhIFEezkb8pxvUWHYhotAfCk2AtkEcxoOttrxUWDR5svb1emSQKj0WXK1HYIgFREbiBqmoZcB2RkbE+byMZiosorVgAZF1ID7yQhEs38wa7nUqNDezdlavC2HbBGSQkGgZ8uJVBmzeiKCRRpEa9ilWghORVeGB7BxeSKF5xqbFBkxBrFKUk/JHA7ppENQaCnCjthK+3opCEYyANztXmZN858cDYWSUSHk3A311GAZDvo6deNKUk1EsqnJoQlkYBNlmxQZeaMgmxoUokICoHDce351RCCiuKoirJWEgNOYvQplM2VCLhUqF7jf94rW9kHVUjQeheV4riv0i4ZOzzz/2y/+0KAOAfr4EE4HpCFhwAAAAASUVORK5CYII=",iconSize:[25,41],iconAnchor:[10,41],popupAnchor:[2,-40]}),j=i.a.markerClusterGroup({chunkedLoading:!1,spiderfyOnMaxZoom:!1}),h=function(e){var t=e.markers,a=Object(o.b)().map;return Object(s.useEffect)((function(){j.clearLayers(),t.map((function(e){var t=e.lat,a=e.long,s=e.name,c=e.street,n=e.location,r='\n        <h6 class="mb-1">'.concat(s,'</h6>\n        <p class="m-0 text-500">').concat(c,", ").concat(n,"</p>\n      ");return i.a.marker(new i.a.LatLng(t,a),{icon:l}).addTo(j).bindPopup(r)})),a.addLayer(j)}),[t,a]),null};h.propTypes={markers:n.a.arrayOf(n.a.shape({lat:n.a.number.isRequired,long:n.a.number.isRequired,name:n.a.string.isRequired,street:n.a.string,location:n.a.string}).isRequired).isRequired};t.a=h},1272:function(e,t,a){"use strict";a.r(t);var s=a(17),c=a(2),n=a(20),r=a(93),i=a(329),o=a(537),l=a(496),j=a(423),h=a(86),b=a(92),d=a(297),u=a(218),m=a(113),A=a(330),x=a(164),p=(a(1161),a(2147)),g=a(1093),O=a(214),f=(a(1162),a(1035)),v=a.n(f),k=a(19),w=a(0),E=function(){var e=Object(c.useContext)(k.g).isDark?["invert:98%","grayscale:69%","bright:89%","contrast:111%","hue:205deg","saturate:1000%"]:["bright:101%","contrast:101%","hue:23deg","saturate:225%"],t=Object(c.useRef)();return Object(c.useEffect)((function(){t.current&&v.a.tileLayer.colorFilter("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",{attribution:null,transparent:!0,filter:e}).addTo(t.current.leafletElement)}),[e]),Object(w.jsx)(p.a,{center:[10.737,0],zoom:1,minZoom:1,maxZoom:18,zoomSnap:.5,className:"h-100 bg-white",style:{width:"100%",minHeight:300},ref:t,children:Object(w.jsx)(g.a,{markers:O.b})})};t.default=function(){var e=Object(c.useState)("week"),t=Object(s.a)(e,2),a=t[0],p=t[1];return Object(w.jsxs)(r.a,{className:"h-100 mt-3 mt-lg-0",children:[Object(w.jsxs)(i.a,{className:"bg-light d-flex justify-content-between",children:[Object(w.jsx)("h5",{className:"mb-0",children:"Active users"}),Object(w.jsxs)(o.a,{className:"text-sans-serif",children:[Object(w.jsx)(l.a,{color:"link",size:"sm",className:"text-600 dropdown-caret-none",boundary:"viewport",children:Object(w.jsx)(n.a,{icon:"ellipsis-h",className:"fs--1"})}),Object(w.jsx)(j.a,{className:"border py-0",right:!0,children:Object(w.jsxs)("div",{className:"bg-white py-2",children:[Object(w.jsx)(h.a,{children:"Edit"}),Object(w.jsx)(h.a,{children:"Move"}),Object(w.jsx)(h.a,{children:"Resize"}),Object(w.jsx)(h.a,{divider:!0}),Object(w.jsx)(h.a,{className:"text-warning",children:"Archive"}),Object(w.jsx)(h.a,{className:"text-danger",children:"Delete"})]})})]})]}),Object(w.jsx)(b.a,{className:"p-0 overflow-hidden h-100",children:Object(w.jsx)(E,{})}),Object(w.jsx)(d.a,{className:"bg-light",children:Object(w.jsxs)(u.a,{className:"justify-content-between",children:[Object(w.jsx)(m.a,{xs:"auto",children:Object(w.jsxs)(A.a,{type:"select",bsSize:"sm",id:"selectDuration",value:a,onChange:function(e){var t=e.target;return p(t.value)},children:[Object(w.jsx)("option",{value:"week",children:"Last 7 days"}),Object(w.jsx)("option",{value:"month",children:"Last month"}),Object(w.jsx)("option",{value:"year",children:"Last year"})]})}),Object(w.jsx)(m.a,{xs:"auto",children:Object(w.jsxs)(x.a,{color:"falcon-default",size:"sm",children:[Object(w.jsx)("span",{className:"d-none d-sm-inline-block mr-1",children:"Location"}),"Overview",Object(w.jsx)(n.a,{icon:"chevron-right",className:"ml-1 fs--1"})]})})]})})]})}}}]);
//# sourceMappingURL=13.57fa0b13.chunk.js.map