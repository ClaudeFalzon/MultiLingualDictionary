(this["webpackJsonpmultilingual-dictionary"]=this["webpackJsonpmultilingual-dictionary"]||[]).push([[0],{13:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var i=t(1),c=t(4),r=t.n(c),s=t(6),a=t(2),o=t(22),l=(t(12),t(13),t(21)),j=t(0),d="en";function u(){var e=Object(i.useState)(null),n=Object(a.a)(e,2),t=n[0],c=n[1],u=Object(i.useState)(!0),h=Object(a.a)(u,2),p=h[0],b=h[1],O=Object(i.useState)(!1),m=Object(a.a)(O,2),x=m[0],f=m[1],v=function(){var e=Object(s.a)(r.a.mark((function e(n,t){var i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,fetch("https://api.dictionaryapi.dev/api/v2/entries/".concat(t,"/").concat(n));case 3:return i=e.sent,e.next=6,i.json();case 6:s=e.sent,f(!1),console.log(s),s.title?b(!1):(c(s[0]),b(!0));case 10:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){v("pull","en")}),[]);var g={en:{speech:"Part of Speech: ",error:"No definition available. Please search another word.",example:" Example: ",origin:"Origin: ",phonetic:"Phonetics: "},it:{speech:"Parte del discorso: ",error:"Nessuna definizione \xe8 disponibile. Cerca un'altra parola.",example:" Esempio: ",origin:"Origine: ",phonetic:"Fonetica: "},fr:{speech:"Partie du discours: ",error:"Aucune d\xe9finition disponible. Cherchez un autre mot.",example:" Example: ",origin:"Origine: ",phonetic:"Phon\xe9tique: "}},N=Object(i.useRef)();console.log(d);return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==N.current.value.trim()&&v(N.current.value,d)},children:[Object(j.jsx)("input",{className:"form-item",ref:N,type:"text",name:"word",id:"",placeholder:"Choose a word "}),Object(j.jsxs)("select",{className:"form-item",onChange:function(e){return function(e){console.log(e.target.value),d=e.target.value}(e)},name:"languages",id:"language-select",children:[Object(j.jsx)("option",{value:"en",children:"English"}),Object(j.jsx)("option",{value:"it",children:"Italian"}),Object(j.jsx)("option",{value:"fr",children:"French"})]}),Object(j.jsx)("input",{className:"form-item form-item-three",type:"submit",value:"Seek & you shall find"})]})}),!p&&Object(j.jsx)("p",{className:"error",children:g[d].error}),x&&Object(j.jsx)(l.a,{className:"spinner",animation:"border"}),p&&!x&&t&&Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"intro",children:[Object(j.jsx)("h2",{children:t.word}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[t.origin&&Object(j.jsx)("span",{className:"entry",children:g[d].origin}),t.origin]}),Object(j.jsxs)("div",{children:[t.phonetic&&Object(j.jsx)("span",{className:"entry",children:g[d].phonetic})," ",t.phonetic]}),Object(j.jsx)("div",{children:t.phonetics[0].audio&&Object(j.jsxs)("div",{className:"audio",children:[Object(j.jsx)("p",{className:"entry",children:"Audio:\xa0\xa0 "}),Object(j.jsxs)("audio",{controls:!0,src:t.phonetics[0].audio,children:["Your browser does not support the",Object(j.jsx)("code",{children:"audio"})," element."]})]})}),Object(j.jsx)("div",{children:t&&t.meanings.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{className:"entry",children:[" ",g[d].speech]}),e.partOfSpeech]}),Object(j.jsx)("div",{children:e.definitions.map((function(e,n){return Object(j.jsx)("ul",{children:Object(j.jsxs)("li",{children:[e.definition,e.example&&Object(j.jsx)("span",{className:"entry",children:g[d].example})," ",e.example]})},Object(o.a)())}))})]},Object(o.a)())}))})]})]})})]})}var h=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(u,{})})},p=t(9);t.n(p).a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2f702678.chunk.js.map