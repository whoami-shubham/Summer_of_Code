(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/logo.18758d79.png"},16:function(e,t,a){e.exports=a.p+"static/media/home3.d576c0a3.jpg"},18:function(e,t,a){e.exports=a(27)},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),s=a(2),o=a(3),i=a(5),m=a(4),u=a(6),d=a(30),p=a(29),h=a(28),b=a(15),E=a.n(b),v=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light shadow-sm"},r.a.createElement("a",{className:"nav-link brand code nav-item",href:"/"},r.a.createElement("img",{src:E.a,alt:"logo",className:"logo"})," Summer of Code"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},r.a.createElement("ul",{className:"navbar-nav font ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{to:"/about",className:"nav-link"},"about  ")," ",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{to:"/projects",className:"nav-link"},"projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{to:"/how-it-works",className:"nav-link"},"how it works ")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a,{to:"/leaderboard",className:"nav-link"},"leaderboard")))))}}]),t}(n.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"col-sm-12 last"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-sm-12 font"},r.a.createElement("span",{className:"last_footer"},r.a.createElement(h.a,{to:"/we",style:j}," We ")),r.a.createElement("span",{className:"last_footer"},r.a.createElement(h.a,{to:"/privacy",style:j},"privacy")),r.a.createElement("span",{className:"last_footer"},r.a.createElement(h.a,{to:"/rules",style:j}," rules ")),r.a.createElement("span",{className:"last_footer"},r.a.createElement(h.a,{to:"/help",style:j}," help"))))))}}]),t}(n.Component),j={textDecoration:"none"},O=a(16),g=a.n(O),N=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"row high",style:y},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",{className:"text-center m-5  title"},"Hello World "))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row black m-3"},r.a.createElement("p",{className:"text-center t"},"The major goals of This Program"),r.a.createElement("div",{className:"title m-3 card black p-10"},r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},"1. Inspire young developers to get involved in Open Source software development."),r.a.createElement("li",{className:"list-group-item"},"2. Help 1st and 2nd year students to master the development workflow of Git and GitHub."),r.a.createElement("li",{className:"list-group-item"},"3. Connect with the mentors in the campus, help them be in contact even after the program ends."),r.a.createElement("li",{className:"list-group-item"},"4. Prepare for other Open Source programs"))))),r.a.createElement(f,null))}}]),t}(n.Component),y={backgroundImage:"url("+g.a+")",backgroundSize:"cover",overflow:"hidden"},k=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"high container"},r.a.createElement("div",{className:"material-card m-5 card"},r.a.createElement("p",{className:"text-center p-3 blue t"},"About"),r.a.createElement("p",{className:"text-justify p-10 black c"},"Summer Of code  is an initiative by Students of IT Department of UIT RGPV Bhopal for the students, who have never participated in Free or Open Source Software  development before, to get them involved during the summer vacations and break the ice of Open Source contributions."),r.a.createElement("div",{className:"footer-notice"}))),r.a.createElement(f,null))}}]),t}(n.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="badge  badge-"+["primary","secondary","success","danger","warning","info","dark"][this.props.id%7];return r.a.createElement("div",{className:"p-1 tool"},r.a.createElement("span",{className:e},this.props.name))}}]),t}(n.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=0,t=this.props.data.tools.map(function(t){return e++,r.a.createElement(w,{key:e,name:t,id:e})});return r.a.createElement("div",{className:"col-sm-3 m-3 card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title line"},this.props.data.name),r.a.createElement("p",{className:"card-text line"},this.props.data.des,r.a.createElement("br",null),r.a.createElement("span",null,"Mentored by : ",this.props.data.mentor)),r.a.createElement("div",{className:"tools line"},t),r.a.createElement("a",{href:this.props.data.url,className:"btn btn-primary"},"details")))}}]),t}(n.Component),C=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={projects:{},isloading:!0},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/whoami-shubham/Summer_of_Code/master/data.json").then(function(e){return e.json()}).then(function(t){e.setState({projects:t,isloading:!1})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=null;return this.state.isloading||(console.log(this.state.projects.data),e=Object.values(this.state.projects.data).map(function(e,t){return console.log(typeof e),r.a.createElement(x,{key:t,data:e})})),r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"container high"},r.a.createElement("div",{className:"row"},this.state.isloading?r.a.createElement("h1",{className:"text-center high my-5 loading"},"Loading..."):e)),r.a.createElement(f,null))}}]),t}(n.Component),_=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"high"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card material-card m-5"},r.a.createElement("p",{className:"text-center p-3 blue t"},"How it Works ?"),r.a.createElement("p",{className:"text-justify p-10 black c"},"Participants can apply for the program either as a student or as a mentor. Mentors are selected through a selection process. The selected mentors propose projects, the best of which are chosen to be included in the program. Students work on these projects in their summer vacations. The mentors review the pull requests and the overall work on their project by various contributors throughout the coding period of the program. At the end of the coding period, the students are compared on the basis of most contributions."),r.a.createElement("div",{className:"footer-notice"})))),r.a.createElement(f,null))}}]),t}(n.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"App-header high"},r.a.createElement("h1",{className:"text-center m-3"},"We")),r.a.createElement(f,null))}}]),t}(n.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"App-header high"},r.a.createElement("h1",{className:"text-center m-3"},"Privacy")),r.a.createElement(f,null))}}]),t}(n.Component),A=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"App-header high"},r.a.createElement("h1",{className:"text-center m-3"},"Rules")),r.a.createElement(f,null))}}]),t}(n.Component),L=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"App-header high"},r.a.createElement("h1",{className:"text-center m-3"},"Resources")),r.a.createElement(f,null))}}]),t}(n.Component),W=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"App-header high"},r.a.createElement("h1",{className:"text-center m-3"},"Contact")),r.a.createElement(f,null))}}]),t}(n.Component),D=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"App-header high"},r.a.createElement("h1",{className:"text-center m-3"},"Help")),r.a.createElement(f,null))}}]),t}(n.Component),H=a(10),I=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row user_list_font p-1"},r.a.createElement("div",{className:"col-3"},this.props.data.name),r.a.createElement("div",{className:"col-3"},r.a.createElement("a",{href:this.props.data.url,style:P},this.props.data.git_id)),r.a.createElement("div",{className:"col-3"},this.props.data.commits),r.a.createElement("div",{className:"col-3"},r.a.createElement("span",{className:"green"},this.props.data.added,"++ "),r.a.createElement("span",{className:"red"},this.props.data.removed,"-- ")))}}]),t}(n.Component),P={color:"#3c4043",textDecoration:"none",cursor:"pointer"},G=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).direction={name:0,git_id:0,commits:0,added:0},e.Url="https://raw.githubusercontent.com/whoami-shubham/Summer_of_Code/master/leaderboard.json",e.state={users:[],isLoading:!0},e.sort_by=e.sort_by.bind(Object(H.a)(Object(H.a)(e))),e.fun=e.fun.bind(Object(H.a)(Object(H.a)(e))),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.Url).then(function(e){return e.json()}).then(function(t){return e.setState({users:t.leaderboard,isLoading:!1})}).catch(function(e){return console.log(e)})}},{key:"sort_by",value:function(e){var t=this.direction[e],a=this.state.users;a.sort(this.fun(e,t)),this.setState({users:a}),this.direction[e]=1-this.direction[e]}},{key:"fun",value:function(e){var t=1===this.direction[e]?1:-1;return function(a,n){return"number"===typeof a[e]?(a[e]-n[e])*t:a[e].localeCompare(n[e])*t}}},{key:"render",value:function(){var e,t=this;this.state.isLoading||(e=Object.values(this.state.users).map(function(e){return r.a.createElement(I,{key:e.id,data:e})}));var a=r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row leaderboard-header"},r.a.createElement("div",{className:"col-3 px-3",onClick:function(e){return t.sort_by("name")}},r.a.createElement("span",{className:"badge  badge-primary p-2"},"Name")),r.a.createElement("div",{className:"col-3 px-3",onClick:function(e){return t.sort_by("git_id")}},r.a.createElement("span",{className:"badge  badge-primary p-2"},"Github Username")),r.a.createElement("div",{className:"col-3 px-3",onClick:function(e){return t.sort_by("commits")}},r.a.createElement("span",{className:"badge  badge-primary p-2"},"Commits")),r.a.createElement("div",{className:"col-3 px-3",onClick:function(e){return t.sort_by("added")}},r.a.createElement("span",{className:"badge  badge-primary p-2"},"Lines added/removed"))),e);return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"high leaderboard"},r.a.createElement("h1",{className:"text-center leaderboard_title blue"},"Leaderboard"),this.state.isLoading?r.a.createElement("h4",{className:"text-center"},"Loading..."):a),r.a.createElement(f,null))}}]),t}(n.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(p.a,{path:"/",exact:!0,component:N}),r.a.createElement(p.a,{path:"/about",component:k}),r.a.createElement(p.a,{path:"/projects",component:C}),r.a.createElement(p.a,{path:"/how-it-works",component:_}),r.a.createElement(p.a,{path:"/we",component:S}),r.a.createElement(p.a,{path:"/rules",component:A}),r.a.createElement(p.a,{path:"/privacy",component:T}),r.a.createElement(p.a,{path:"/resources",component:L}),r.a.createElement(p.a,{path:"/contact",component:W}),r.a.createElement(p.a,{path:"/help",component:D}),r.a.createElement(p.a,{path:"/leaderboard",component:G})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.73d31180.chunk.js.map