"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[313],{1313:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r=t(9201),i=t(184),c=(0,r.Z)((0,i.jsx)("path",{d:"m15.96 10.29-2.75 3.54-1.96-2.36L8.5 15h11l-3.54-4.71zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"}),"Filter"),a=t(2791),o=t(9434),u=t(6347),s=function(){var n=(0,o.I0)(),e=(0,o.v9)((function(n){return n.contacts.contacts})),t=(0,o.v9)((function(n){return n.contacts.isLoading})),r=(0,o.v9)((function(n){return n.contacts.error}));(0,a.useEffect)((function(){n((0,u.yF)())}),[n]);return t?(0,i.jsx)("div",{children:"Loading..."}):r?(0,i.jsx)("div",{children:"Error: Something Gone Wrong"}):(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"Contact List"}),0===e.length?(0,i.jsx)("p",{children:"No contacts found."}):(0,i.jsx)("ul",{children:e.map((function(e){return(0,i.jsxs)("li",{children:[e.name," (",e.email,")",(0,i.jsx)("button",{onClick:function(){return t=e.id,void n((0,u.zY)(t));var t},children:"Delete"})]},e.id)}))})]})},l=t(9439),d=t(1889),h=t(7003),v=t(142);function f(){var n=(0,o.I0)(),e=(0,a.useState)(""),t=(0,l.Z)(e,2),r=t[0],c=t[1],s=(0,a.useState)(""),f=(0,l.Z)(s,2),x=f[0],m=f[1];return(0,i.jsx)("form",{onSubmit:function(e){e.preventDefault();var t={name:r,number:x};n((0,u.rE)(t)),c(""),m("")},children:(0,i.jsxs)(d.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,i.jsx)(d.ZP,{item:!0,xs:12,children:(0,i.jsx)(h.Z,{fullWidth:!0,label:"Name",variant:"outlined",value:r,onChange:function(n){c(n.target.value)}})}),(0,i.jsx)(d.ZP,{item:!0,xs:12,children:(0,i.jsx)(h.Z,{fullWidth:!0,label:"Phone Number",variant:"outlined",value:x,onChange:function(n){m(n.target.value)}})}),(0,i.jsx)(d.ZP,{item:!0,xs:12,children:(0,i.jsx)(v.Z,{type:"submit",variant:"contained",color:"primary",children:"Add Contact"})})]})})}var x=function(){return(0,i.jsxs)("div",{children:[(0,i.jsx)(f,{}),(0,i.jsx)(s,{}),(0,i.jsx)(c,{})]})}}}]);
//# sourceMappingURL=313.1277b1c8.chunk.js.map