(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{12:function(e,t,i){},13:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i.n(n),r=i(6),a=i.n(r),o=i(2),c=(i(12),i(13),i(0));var l=function(e){var t=e.page,i=e.setPage,n={navItem:{display:"inline-block",margin:"2%",color:"azure",fontSize:"21px"}};return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("h1",{children:"Mitchell Spierings"}),Object(c.jsxs)("nav",{style:{width:"19%"},children:[Object(c.jsx)("div",{style:n.navItem,children:Object(c.jsx)("btn",{onClick:function(){return i("about")},className:"about"===t&&"active",children:"About Me"})}),Object(c.jsx)("div",{style:n.navItem,children:Object(c.jsx)("btn",{onClick:function(){return i("portfolio")},className:"portfolio"===t&&"active",children:"Portfolio"})}),Object(c.jsx)("div",{style:n.navItem,children:Object(c.jsx)("btn",{onClick:function(){return i("contact")},className:"contact"===t&&"active",children:"Contact"})}),Object(c.jsx)("div",{style:n.navItem,children:Object(c.jsx)("btn",{onClick:function(){return i("resume")},className:"resume"===t&&"active",children:"Resume"})})]})]})},d=i.p+"static/media/Wigeon.c2458d97.jpg";var h=function(e){return Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)("h2",{className:"pageHeader",children:"About Me"}),Object(c.jsx)("img",{src:d,class:"avatar"}),Object(c.jsx)("p",{style:{width:"40%",margin:"auto",fontSize:"22px"},children:"Hello! Thank you for checking out my Web Development Portfolio! My name is Mitchell Spierings, I was born and raised a Wisconsin kid through and through. I attended the University of Wisconsin Oshkosh from 2014 to 2018, and graduated with a Bachelors Degree in Business Management with an emphasis in Insurance and Risk Management. Before entering the career field of Web Development, I held several positions as a Large Loss Insurance Adjuster. I was fortenate enough to travel the country with this position, but always aspired to being passioante about my career and creating something on a daily basis. I am 25 years old, and grew up in and around the Madison, Wisconsin area. A few of my favorite hobbies are fishing, hunting, weight lifting, and of course web development! Please review my portfolio, and reach out to me if you would like to work together!"})]})},j=i.p+"static/media/Mitchell Spierings Resume.519bed77.pdf";var u=function(e){return Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)("embed",{src:j,width:"800px",height:"2100px"}),Object(c.jsxs)("p",{style:{fontSize:"60px"},children:["Download my",Object(c.jsx)("a",{href:j,download:!0,children:"Click to download"})]}),Object(c.jsx)("h3",{children:"Front End"}),Object(c.jsx)("ul",{}),Object(c.jsx)("h3",{children:"Back End"})]})},b=i(3),m=i(5);var p=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),i=t[0],s=t[1],r=Object(n.useState)(""),a=Object(o.a)(r,2),l=a[0],d=a[1],h=Object(n.useState)(""),j=Object(o.a)(h,2),u=j[0],p=j[1],g=i.name,x=i.email,O=i.message;function v(e){s(Object(m.a)(Object(m.a)({},i),{},Object(b.a)({},e.target.name,e.target.value)));var t="";"email"!==e.target.name||function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value)||(t="Invalid Email"),d(t)}function y(e){e.target.value?p(""):p(e.target.name+" is required ")}var f={labels:{fontSize:"50px"},inputs:{height:"55px",width:"200px"}};return Object(c.jsxs)("form",{style:{textAlign:"center"},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{style:f.labels,htmlFor:"name",children:"Name"}),Object(c.jsx)("input",{style:f.inputs,type:"text",name:"name",value:g,onChange:v,onBlur:y})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{style:f.labels,htmlFor:"email",children:"Email"}),Object(c.jsx)("input",{style:f.inputs,type:"email",name:"email",value:x,onChange:v,onBlur:y})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{style:f.labels,htmlFor:"message",children:"Message"}),Object(c.jsx)("textarea",{style:f.inputs,name:"message",value:O,onChange:v,onBlur:y})]}),Object(c.jsx)("div",{children:""===l?u:l})]})};var g=function(e){return Object(c.jsxs)("div",{style:{display:"inline-block",margin:"3%",width:"200px"},children:[Object(c.jsx)("img",{style:{width:"150px",height:"150px"},src:e.img,alt:"Project photo"}),Object(c.jsx)("h2",{children:e.name}),Object(c.jsx)("a",{href:e.deployed,children:"Live Link"}),Object(c.jsx)("a",{href:e.repository,children:"Repository Link"})]})},x=[{img:"/images/craftreview.jpg",name:"Craft-Reviews",deployed:"https://review-crafts.herokuapp.com/",repository:"https://github.com/mspierings96/Craft-Reviews"},{img:"/images/songs&spirits.jpg",name:"Songs & Spirits",deployed:"https://adamlsn.github.io/songsAndSpirits/",repository:"https://github.com/adamlsn/songsAndSpirits"},{img:"/images/budgettracker.jpg",name:"Budget Tracker",deployed:"https://shielded-waters-12008.herokuapp.com/",repository:"https://github.com/mspierings96/budgettracker2"},{img:"/images/workdayscheduler.jpg",name:"Work Day Scheduler",deployed:"https://mspierings96.github.io/Workday-Scheduler-/",repository:"https://github.com/mspierings96/Workday-Scheduler-"},{img:"/images/weatherdashboard.jpg",name:"Weather Dashboard",deployed:"https://mspierings96.github.io/Weather-Dashboard/",repository:"https://github.com/mspierings96/Weather-Dashboard"},{img:"/images/Passwordgenerator.jpg",name:"Password Generator",deployed:"https://mspierings96.github.io/Password-Generator/",repository:"https://github.com/mspierings96/Password-Generator"}];var O=function(e){return Object(c.jsx)("div",{style:{width:"40%",margin:"auto"},children:x.map((function(e){return Object(c.jsx)(g,{img:e.img,name:e.name,deployed:e.deployed,repository:e.repository})}))})},v=i(7);var y=function(e){return Object(c.jsx)("div",{style:{display:"inline-block",margin:"2%",color:"azure",fontSize:"31px"},children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsxs)("p",{children:[" ",e.URL]})})})},f=[{URL:"Github",link:"https://github.com/mspierings96"},{URL:"Stack Overflow",link:"https://stackoverflow.com/users/14948647/mspierings96"},{URL:"Linkedin",link:"https://www.linkedin.com/in/mitchell-s-153a06117/"}];var w=function(e){return Object(v.a)(e),Object(c.jsx)("div",{style:{textAlign:"center",backgroundColor:"#4e3d42"},children:f.map((function(e){return Object(c.jsx)(y,{URL:e.URL,link:e.link})}))})};var k=function(){var e=Object(n.useState)("about"),t=Object(o.a)(e,2),i=t[0],s=t[1];return Object(c.jsxs)("div",{style:{backgroundColor:"aliceblue"},children:[Object(c.jsx)(l,{page:i,setPage:s}),"about"===i&&Object(c.jsx)(h,{}),"contact"===i&&Object(c.jsx)(p,{}),"resume"===i&&Object(c.jsx)(u,{}),"portfolio"===i&&Object(c.jsx)(O,{}),Object(c.jsx)(w,{})]})},S=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,17)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;i(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),S()}},[[15,1,2]]]);
//# sourceMappingURL=main.5b6f1dd4.chunk.js.map