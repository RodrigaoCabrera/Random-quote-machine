(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),o=a(7),s=a.n(o),r=(a(13),a(8)),i=a(2),u=(a(14),a(3)),l=a.n(u),b=a(0);var d=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(""),s=Object(i.a)(o,2),u=s[0],d=s[1],j=Object(c.useState)(""),h=Object(i.a)(j,2),f=h[0],m=h[1],O=Object(c.useState)(""),x=Object(i.a)(O,2),p=x[0],g=x[1],y=Object(c.useState)(""),w=Object(i.a)(y,2),v=w[0],S=w[1],N=Object(c.useState)(""),k=Object(i.a)(N,2),C=k[0],E=k[1],q=Object(c.useState)(!1),M=Object(i.a)(q,2),A=M[0],I=M[1],T=Object(c.useState)(""),D=Object(i.a)(T,2),J=D[0],B=D[1],H=Object(c.useState)([{frase:"A lo hecho, pecho",autor:"Homer j. Simpsons",id:l()()},{frase:"Do what you can, where you are, with what you have.",autor:"Teddy Roosevelt",id:l()()},{frase:"When I let go of what I am, I become what I might be.",autor:"Lao Tzu",id:l()()},{frase:"Lisa necesita frenos",autor:"Marge",id:l()()},{frase:"A la grande le puse cuca",autor:"Homero",id:l()()},{frase:"Either you run the day, or the day runs you.",autor:"Jim Rohn",id:l()()}]),L=Object(i.a)(H,2),R=L[0],z=L[1],F=function e(){var t=Math.floor(Math.random()*(R.length-1-0+1)+0);J!==t?(B(t),d(R[t].frase),m(R[t].autor),g(R[t].id)):e();for(var a="#",c=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],o=0;o<6;o++){a+=c[Math.floor(16*Math.random())]}n(a)},W=Object(c.useState)(!1),_=Object(i.a)(W,2),G=_[0],K=_[1];return Object(c.useEffect)((function(){setTimeout((function(){F()}),2e3)}),[]),Object(b.jsxs)("div",{id:"quote-box",className:"d-flex flex-column h-100 \r justify-content-center",style:{backgroundColor:a},children:[Object(b.jsx)("div",{className:" bg-dark mx-auto rounded border-white",style:{width:"80%"},children:Object(b.jsxs)("section",{className:"text-white rounded my-3 mx-3",children:[Object(b.jsx)("p",{id:"text",className:"text-center font-italic font-weight-bold",children:u}),Object(b.jsx)("p",{id:"author",className:"text-right",children:f})]})}),Object(b.jsxs)("div",{className:"bg-dark mx-auto d-flex rounded",style:{width:"80%"},children:[Object(b.jsx)("a",{href:'https://twitter.com/intent/tweet/?hashtags=quotes&text="'.concat(u,'" ').concat(f),id:"tweet-quote",target:"_blank",style:{backgroundColor:"#00dccd"},className:"btn btn-success justify-self-start ml-3",children:"Twittear"}),Object(b.jsx)("button",{className:"btn btn-success ml-auto",onClick:function(){K(!0),I(!A),R.filter((function(e){p===e.id&&(S(e.frase),E(e.autor))}))},children:"Editar frase"}),Object(b.jsx)("button",{className:"btn btn-secondary mx-3",onClick:function(){I(!0),K(!1)},children:"A\xf1adir frase"}),Object(b.jsx)("button",{id:"new-quote",className:"btn btn-primary mr-3",onClick:F,children:"Siguiente"})]}),A?Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"form-group text-center mt-3",children:[Object(b.jsx)("label",{for:"frase",children:Object(b.jsx)("input",{class:"form-control",type:"text",placeholder:"Escribe una frase",value:v,onChange:function(e){S(e.target.value)}})}),Object(b.jsx)("label",{for:"autor",children:Object(b.jsx)("input",{class:"form-control",type:"text",placeholder:"Escribe un autor/a",value:C,onChange:function(e){E(e.target.value)}})}),G?Object(b.jsx)("button",{className:"btn btn-success",onClick:function(){K(!1);var e=R.map((function(e){return e.id===p?{frase:v,autor:C,id:l()()}:e}));z(e),d(v),m(C),S(""),E(""),I(!A),console.log(e)},children:"Editar frase"}):Object(b.jsx)("button",{className:"btn btn-success",onClick:function(){var e={frase:v,autor:C,id:l()()};z([].concat(Object(r.a)(R),[e])),d(v),m(C),S(""),E(""),I(!1),g(e.id)},children:"A\xf1adir frase"})]}):Object(b.jsx)("span",{})]})};a(17);s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e9a015df.chunk.js.map