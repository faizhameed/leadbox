(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/noun_Download_2120379.19bd94ae.svg"},function(e,t,n){e.exports=n.p+"static/media/Mask Group 3.d7189b57.svg"},,,,function(e,t,n){e.exports=n(23)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(5),i=n.n(c);n(17),n(18),n(19);var r=function(){return l.a.createElement("div",null,l.a.createElement("ul",{id:"nav"}))},o=n(1),s=n(2),u=(n(20),n(6)),d=n.n(u),m=n(7),p=n.n(m);var y=function(){var e,t=Object(a.useState)([]),n=Object(s.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(["First Name","Last Name","Address","Phone","Email ID"]),u=Object(s.a)(r,2),m=u[0],y=u[1],f=["First Name","Last Name","Address","Phone","Email ID"],E=Object(a.useState)(["Hot","Cold","New"]),v=Object(s.a)(E,1)[0],b=Object(a.useState)([!1]),g=Object(s.a)(b,2),h=g[0],O=g[1],k=function(e){var t;e.split("").forEach(function(e,n){":"===e&&(t=n)});var n=e.split("").slice(0,t-1).join("");i(Object(o.a)(c.filter(function(t){return t!==e})));var a=Object(o.a)(c.map(function(e){return e.split("").forEach(function(e,n){":"===e&&(t=n)}),e.split("").slice(0,t-1).join("")}));a=a.filter(function(e){return e!==n});var l=f.filter(function(e){return this.indexOf(e)<0},a);y(Object(o.a)(l));var r=document.getElementById("input2");if(r&&r.remove(),"Lead Type"===n){console.log("yes its a ",n);var s=document.getElementById("leadtype"),u=document.getElementById("listTypeOpt");u&&s&&(s.style.display="block",u.style.display="none")}},j=function(e){var t;console.log("from item",e),e.split("").forEach(function(e,n){":"===e&&(t=n)});var n=e.split("").slice(0,t-1).join(""),a=e.split("").slice(t+2,e.length).join("");i(Object(o.a)(c.filter(function(t){return t!==e})));var l=Object(o.a)(c.map(function(e){return e.split("").forEach(function(e,n){":"===e&&(t=n)}),e.split("").slice(0,t-1).join("")}));l=l.filter(function(e){return e!==n});var r=f.filter(function(e){return this.indexOf(e)<0},l);y(Object(o.a)(r));var s=document.getElementById("input2");if(s&&s.remove(),O([!0,n,a]),"Lead Type"===n){console.log("yes its a ",n);var u=document.getElementById("leadtype"),d=document.getElementById("listTypeOpt");d&&u&&(u.style.display="block",d.style.display="none")}var m=document.getElementById("searchoptions");m&&(m.style.display="inline-block")},B=0;Object(a.useEffect)(function(){var e=1,t=document.getElementById("searchoptions"),n=document.getElementById("searchInput"),a=document.getElementById("searchWrapper"),l=document.getElementsByTagName("button");if(document.onclick=function(c){"SearchBoxContainer"!==c.target.id&&c.target!==l||(t.style.display="none"),c.target!==t&&c.target!==n&&c.target!==a||(t.style.display="inline-block"),c.target!==n&&c.target!==a||(0===e?(e=1,t.style.display="none"):(e=0,t.style.display="inline-block"))},h[0]){console.log("array of input",h[2]);var c=document.getElementById(h[1]);null!==c&&c.insertAdjacentHTML("beforeend",'<input id="input2" />');var i=document.getElementById("input2");i&&(i.value=h[2],i.select(),i.focus()),O([!1])}},[e,h]);var N={display:"flex",paddingLeft:"1px",paddingRight:"1px",backgroundColor:"white",margin:"1px",color:" #262c5b",marginLeft:"7px",border:"1px solid #262c5b"};return l.a.createElement("div",{id:"SearchBoxContainer",className:"SearchBoxContainer"},l.a.createElement("button",{className:"back"},l.a.createElement("img",{src:p.a,alt:""}),"  Back"),l.a.createElement("div",{id:"searchWrapper",className:"SearchBoxWrapper select"},l.a.createElement("input",{autoComplete:"off",onClick:function(){document.getElementById("searchoptions").classList.remove("hide")},onKeyDown:function(e){if(13===e.keyCode){var t=document.getElementById("searchInput");""!==t.value&&c.length<=4&&(c.includes(t.value)?alert("Item already added"):i([].concat(Object(o.a)(c),[t.value])),t.value="")}},id:"searchInput",placeholder:"Filter (Type something\u2026..)",className:"search"})),l.a.createElement("div",{className:"select2"},l.a.createElement("select",{className:"btn2"},l.a.createElement("option",null,"All Leads"),l.a.createElement("option",null,"My Leads"),l.a.createElement("option",null,"Hot Leads"))),l.a.createElement("button",{className:"btn"},"Search"),l.a.createElement("ul",{style:{listStyleType:"none",fontSize:".8em",position:"absolute",top:"70.5%",left:" 29.5%",margin:"0",padding:"0",display:"flex"}},c.map(function(e,t){return l.a.createElement("li",{key:t+e,style:N},l.a.createElement("p",{onClick:function(){return j(e)}},e),l.a.createElement("button",{className:"btn1",onClick:function(){return k(e)}},"X"))})),l.a.createElement("button",{className:"nlbtn"},"New Lead +"),l.a.createElement("button",{className:"imbtn"},"Import"),l.a.createElement("button",{className:"dwnbtn"},l.a.createElement("img",{src:d.a,alt:"Download"})),l.a.createElement("div",{ref:function(t){return e=t},id:"searchoptions",className:"searchoptions hide"},l.a.createElement("div",{className:"SavedBy"},l.a.createElement("p",{style:{color:"grey"}},"Recent:")),l.a.createElement("div",{className:"chipDisplayDiv"},l.a.createElement("ul",{className:"chipstyle"},c.map(function(e,t){return l.a.createElement("li",{className:"chipliststyle",key:t+e},l.a.createElement("p",{onClick:function(){return j(e)}},e),l.a.createElement("button",{className:"btn1",onClick:function(){return k(e)}},"X"))}))),l.a.createElement("ul",{id:"popup",style:{listStyleType:"none",display:"inline-block",width:"95%"}},m.map(function(e){return l.a.createElement("li",{onKeyDown:function(t){return function(e,t){if(13===e.keyCode){var n=document.getElementById("input2");if(""!==n.value&&null!==n){var a="".concat(t," : ").concat(n.value);n.value="",i([].concat(Object(o.a)(c),[a]));var l=m.filter(function(e){return e!==t});y(Object(o.a)(l))}}}(t,e)},id:e,className:"listOptions",key:e},l.a.createElement("p",{onClick:function(){return function(e){var t=document.getElementById("input2");t&&t.remove();var n=document.getElementsByClassName("addlistOptions");if(n.length>=1)for(var a=0;a<n.length;a++)n[a].classList.add("listOptions"),n[a].classList.remove("addlistOptions");var l=document.getElementById("listTypeOpt");l&&(l.style.display="none");var c=document.getElementById(e);c.insertAdjacentHTML("beforeend",'<input id="input2" />'),c.classList.remove("listOptions"),c.classList.add("addlistOptions")}(e)}},e))}),l.a.createElement("li",{onClick:function(){var e=document.getElementById("input2");e&&e.remove();var t=document.getElementsByClassName("addlistOptions");if(t.length>=1)for(var n=0;n<t.length;n++)t[n].classList.add("listOptions"),t[n].classList.remove("addlistOptions");var a=document.getElementById("listTypeOpt");console.log(a),a&&(0===B?(a.style.display="block",B=1):(a.style.display="none",B=0))},id:"leadtype",className:"listOptions"},l.a.createElement("p",null,"Lead Type \u25bc ")),l.a.createElement("div",{id:"listTypeOpt",className:" hide"},v.map(function(e){return l.a.createElement("p",{onClick:function(){return function(e){var t="Lead Type : ".concat(e);i([].concat(Object(o.a)(c),[t]));var n=document.getElementById("leadtype"),a=document.getElementById("listTypeOpt");a&&n&&(a.style.display="none",n.style.display="none"),B=1}(e)},key:e,className:"listOptions2"},e)})))))},f=n(3),E=n.n(f),v=n(8),b=n(25);var g=function(e){return console.log("modal",e.data),l.a.createElement("div",{style:{width:"30%",height:"auto",border:"1px solid blue"}},l.a.createElement("div",null,l.a.createElement("h3",null,e.data.name),l.a.createElement("p",{style:{fontWeight:"bolder"}},"Address"),l.a.createElement("p",null,e.data.address.street),l.a.createElement("p",null,e.data.address.suite),l.a.createElement("p",null,e.data.address.city)),l.a.createElement("button",{className:"btn3",onClick:function(){return e.handleModal(!1)}},"close"))};n(22);var h=function(){var e=function(e){f(e)},t=Object(a.useState)([]),n=Object(s.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)([]),o=Object(s.a)(r,2),u=o[0],d=o[1],m=Object(a.useState)(!1),p=Object(s.a)(m,2),y=p[0],f=p[1];function h(){return(h=Object(v.a)(E.a.mark(function e(){var t,n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),i(n);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(a.useEffect)(function(){!function(){h.apply(this,arguments)}()},[]),l.a.createElement("div",{style:{display:"flex",transition:"0.5s"}},y?l.a.createElement(g,{handleModal:e,data:u}):null,l.a.createElement(b.a,{style:{transition:"0.5s"},striped:!0,bordered:!0,size:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"First"),l.a.createElement("th",null,"Last"),l.a.createElement("th",null,"Handle"))),l.a.createElement("tbody",null,c.map(function(t,n){return l.a.createElement("tr",{key:n},l.a.createElement("td",{key:n+"i"},t.id),l.a.createElement("td",{key:n+"ii",style:{cursor:"pointer"},onClick:function(){return d(n=t),e(!0),void console.log("function clicked",n);var n}},t.name),l.a.createElement("td",{key:n+"iii"},t.username),l.a.createElement("td",{key:n+"iv"},t.email))}))))};var O=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",null,l.a.createElement(r,null)),l.a.createElement(y,null),l.a.createElement(h,null),l.a.createElement("footer",null,l.a.createElement("p",null,"Under Construction")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.d65382b4.chunk.js.map