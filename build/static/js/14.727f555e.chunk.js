(this["webpackJsonpfalcon-react"]=this["webpackJsonpfalcon-react"]||[]).push([[14],{1095:function(e,t,a){"use strict";a(2);var s=a(537),o=a(496),c=a(423),r=a(86),i=a(20),n=a(0),l=function(){return Object(n.jsxs)(s.a,{children:[Object(n.jsx)(o.a,{color:"link",size:"sm",className:"text-600 btn-reveal",children:Object(n.jsx)(i.a,{icon:"ellipsis-h",className:"fs--1"})}),Object(n.jsxs)(c.a,{right:!0,className:"border py-2",children:[Object(n.jsx)(r.a,{children:"View"}),Object(n.jsx)(r.a,{children:"Edit"}),Object(n.jsx)(r.a,{children:"Refund"}),Object(n.jsx)(r.a,{divider:!0}),Object(n.jsx)(r.a,{className:"text-warning",children:"Archive"}),Object(n.jsx)(r.a,{className:"text-danger",children:"Delete"})]})]})};t.a=[{id:1,customer:"Sylvia Plath",email:"john@gmail.com",product:"Slick - Drag & Drop Bootstrap Generator",status:"success",amount:99,action:Object(n.jsx)(l,{})},{id:2,customer:"Homer",email:"sylvia@mail.ru",product:"Bose SoundSport Wireless Headphones",status:"success",amount:634,action:Object(n.jsx)(l,{})},{id:3,customer:"Edgar Allan Poe",email:"edgar@yahoo.com",product:"All-New Fire HD 8 Kids Edition Tablet",status:"blocked",amount:199,action:Object(n.jsx)(l,{})},{id:4,customer:"William Butler Yeats",email:"william@gmail.com",product:"Apple iPhone XR (64GB)",status:"success",amount:798,action:Object(n.jsx)(l,{})},{id:5,customer:"Rabindranath Tagore",email:"tagore@twitter.com",product:'ASUS Chromebook C202SA-YS02 11.6"',status:"blocked",amount:318,action:Object(n.jsx)(l,{})},{id:6,customer:"Emily Dickinson",email:"emily@gmail.com",product:"Mirari OK to Wake! Alarm Clock & Night-Light",status:"pending",amount:11,action:Object(n.jsx)(l,{})},{id:7,customer:"Giovanni Boccaccio",email:"giovanni@outlook.com",product:"Summer Infant Contoured Changing Pad",status:"success",amount:31,action:Object(n.jsx)(l,{})},{id:8,customer:"Oscar Wilde",email:"oscar@hotmail.com",product:"Munchkin 6 Piece Fork and Spoon Set",status:"success",amount:43,action:Object(n.jsx)(l,{})},{id:9,customer:"John Doe",email:"doe@gmail.com",product:"Falcon - Responsive Dashboard Template",status:"success",amount:57,action:Object(n.jsx)(l,{})},{id:10,customer:"Emma Watson",email:"emma@gmail.com",product:"Apple iPhone XR (64GB)",status:"blocked",amount:999,action:Object(n.jsx)(l,{})},{id:11,customer:"Sylvia Plath",email:"plath@yahoo.com",product:"All-New Fire HD 8 Kids Edition Tablet",status:"pending",amount:199,action:Object(n.jsx)(l,{})},{id:12,customer:"Iori Kim",email:"ikim@yahoo.com",product:'ASUS Chromebook C202SA-YS02 11.6"',status:"pending",amount:200,action:Object(n.jsx)(l,{})}]},1270:function(e,t,a){"use strict";a.r(t),function(e){var s=a(11),o=a(38),c=a(2),r=a(1091),i=a.n(r),n=a(1071),l=a.n(n),d=a(241),m=a(20),u=a(218),b=a(113),j=a(164),h=a(103),g=a(12),x=a(1095),p=a(0),O=function(e){var t=e.sizePerPage,a=e.totalSize,s=e.page,o=e.lastIndex;return Object(p.jsxs)("span",{children:[(s-1)*t+1," to ",o>a?a:o," of ",a," \u2014"," "]})},f=[{dataField:"customer",text:"Customer",formatter:function(e){return Object(p.jsx)(g.b,{to:"pages/customer-details",className:"font-weight-semi-bold",children:e})},classes:"border-0 align-middle",headerClasses:"border-0",sort:!0},{dataField:"email",text:"Email",classes:"border-0 align-middle",headerClasses:"border-0",sort:!0},{dataField:"product",text:"Product",classes:"border-0 align-middle",headerClasses:"border-0",sort:!0},{dataField:"status",text:"Payment",formatter:function(e){var t="",a="",s="";switch(e){case"success":t="success",a="check",s="Success";break;case"blocked":t="secondary",a="ban",s="Blocked";break;default:t="warning",a="stream",s="Pending"}return Object(p.jsxs)(d.a,{color:"soft-".concat(t),className:"rounded-capsule",children:[s,Object(p.jsx)(m.a,{icon:a,transform:"shrink-2",className:"ml-1"})]})},classes:"border-0 align-middle fs-0",headerClasses:"border-0",sort:!0},{dataField:"amount",text:"Amount",formatter:function(e){return Object(p.jsxs)(c.Fragment,{children:["$",e]})},classes:"border-0 align-middle",headerClasses:"border-0",sort:!0,align:"right",headerAlign:"right"},{dataField:"action",classes:"border-0 align-middle",headerClasses:"border-0",text:""}],k=function(e){var t=e.indeterminate,a=(e.rowIndex,Object(o.a)(e,["indeterminate","rowIndex"]));return Object(p.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(p.jsx)("input",Object(s.a)(Object(s.a)({className:"custom-control-input"},a),{},{onChange:function(){},ref:function(e){e&&(e.indeterminate=t)}})),Object(p.jsx)("label",{className:"custom-control-label"})]})},v=function(e){return{mode:"checkbox",clickToSelect:!1,selectionHeaderRenderer:function(e){e.mode;var t=Object(o.a)(e,["mode"]);return Object(p.jsx)(k,Object(s.a)({type:"checkbox"},t))},selectionRenderer:function(e){var t=e.mode,a=Object(o.a)(e,["mode"]);return Object(p.jsx)(k,Object(s.a)({type:t},a))},headerColumnStyle:{border:0,verticalAlign:"middle"},selectColumnStyle:{border:0,verticalAlign:"middle"},onSelect:e,onSelectAll:e}},S={custom:!0,sizePerPage:6,totalSize:x.a.length};t.default=function(t){var a=t.setIsSelected,o=Object(c.createRef)(),n=function(e){var t=e.page,a=e.onPageChange;return function(){a(t+1)}},d=function(e){var t=e.page,a=e.onPageChange;return function(){a(t-1)}},m=function(){e((function(){a(!!o.current.selectionContext.selected.length)}))};return Object(p.jsx)(r.PaginationProvider,{pagination:i()(S),children:function(e){var t=e.paginationProps,a=e.paginationTableProps,r=t.page*t.sizePerPage;return Object(p.jsxs)(c.Fragment,{children:[Object(p.jsx)("div",{className:"table-responsive",children:Object(p.jsx)(l.a,Object(s.a)({ref:o,bootstrap4:!0,keyField:"id",data:x.a,columns:f,selectRow:v(m),bordered:!1,classes:"table-dashboard table-sm fs--1 border-bottom border-200 mb-0 table-dashboard-th-nowrap",rowClasses:"btn-reveal-trigger border-top border-200",headerClasses:"bg-200 text-900 border-y border-200"},a))}),Object(p.jsxs)(u.a,{noGutters:!0,className:"px-1 py-3",children:[Object(p.jsxs)(b.a,{className:"pl-3 fs--1",children:[Object(p.jsx)(O,Object(s.a)(Object(s.a)({},t),{},{lastIndex:r})),Object(p.jsx)(h.a,{color:"link",size:"sm",icon:"chevron-right",iconAlign:"right",transform:"down-1 shrink-4",className:"px-0 font-weight-semi-bold",onClick:function(){return e=t,a=x.a.length,void(0,e.onSizePerPageChange)(a,1);var e,a},children:"view all"})]}),Object(p.jsxs)(b.a,{xs:"auto",className:"pr-3",children:[Object(p.jsx)(j.a,{color:1===t.page?"light":"primary",size:"sm",onClick:d(t),disabled:1===t.page,className:"px-4",children:"Previous"}),Object(p.jsx)(j.a,{color:r>=t.totalSize?"light":"primary",size:"sm",onClick:n(t),disabled:r>=t.totalSize,className:"px-4 ml-2",children:"Next"})]})]})]})}})}}.call(this,a(512).setImmediate)}}]);
//# sourceMappingURL=14.727f555e.chunk.js.map