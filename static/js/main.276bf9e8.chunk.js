(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,image:"https://i.imgur.com/fdFKZ2q.jpg",clicked:!1},{id:2,image:"https://i.imgur.com/Ibz3Cfa.jpg",clicked:!1},{id:3,image:"https://i.imgur.com/oatnApj.jpg",clicked:!1},{id:4,image:"https://i.imgur.com/Dek4w4h.jpg",clicked:!1},{id:5,image:"https://i.imgur.com/JWHM9IS.jpg",clicked:!1},{id:6,image:"https://i.imgur.com/Gzn9clX.jpg",clicked:!1},{id:7,image:"https://i.imgur.com/4RLFrYO.jpg",clicked:!1},{id:8,image:"https://i.imgur.com/BRUYEIM.jpg",clicked:!1},{id:9,image:"https://i.imgur.com/nOwQzEn.jpg",clicked:!1},{id:10,image:"https://i.imgur.com/BBaNYiN.jpg",clicked:!1},{id:11,image:"https://i.imgur.com/JMD62V9.jpg",clicked:!1},{id:12,image:"https://i.imgur.com/5l6evhc.jpg",clicked:!1},{id:13,image:"https://i.imgur.com/JLjIlYB.jpg",clicked:!1},{id:14,image:"https://i.imgur.com/BhEKrL1.jpg",clicked:!1},{id:15,image:"https://i.imgur.com/n5rNuZq.jpg",clicked:!1}]},,,function(e,t,c){e.exports=c(29)},,,,,function(e,t,c){},,function(e,t,c){},,function(e,t,c){},,function(e){e.exports={}},function(e,t,c){},,function(e,t,c){},,function(e,t,c){},,function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(8),r=c.n(i),s=c(1),l=c(2),m=c(4),o=c(3),d=c(5),u=(c(14),n.a.Component,function(e){return n.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image})),n.a.createElement("div",{className:"content"}))}),h=(c(16),function(e){return n.a.createElement("div",{className:"wrapper"},e.children)}),g=(c(18),c(6)),p=(c(20),c(21),function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("nav",{className:"navbar"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement("a",{className:"nav-brand"},"Home ")),n.a.createElement("li",{className:"nav-item"},e.success," "),n.a.createElement("li",{className:"nav-item"}," Score:  ",e.score," "),n.a.createElement("li",{className:"nav-item"}," Highest Score:",e.highScore," "))),n.a.createElement("div",{className:"jumbotron",style:{height:300}}),n.a.createElement("h1",{className:"jumbo-text"},"Click on an image but don't click more than once!!"))}),f=(c(23),function(e){return n.a.createElement("hr",null,e.chidren)});c(25);var k=function(e){function t(){var e,c;Object(s.a)(this,t);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(c=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).state={friends:g,score:0,highScore:0,clicked:[],success:""},c.removeFriend=function(e){var t=c.state.friends.filter(function(t){return t.id!==e});c.setState({friends:t})},c.handleClick=function(e){-1===c.state.clicked.indexOf(e)?(c.handleIncrement(),c.setState({clicked:c.state.clicked.concat(e)})):c.handleReset()},c.handleIncrement=function(){var e=c.state.score+1;c.setState({score:e,success:""}),e>=c.state.topScore?c.setState({topScore:e}):5===e&&c.setState({success:"Congrats!"}),c.handleShuffle()},c.handleReset=function(){c.setState({score:0,topScore:c.state.highScore,success:"Not good!",clicked:[]}),c.handleShuffle()},c.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),a=[e[c],e[t]];e[t]=a[0],e[c]=a[1]}return e}(g);c.setState({friends:e})},c}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(h,null,n.a.createElement(p,{score:this.state.score,topScore:this.state.highScore,success:this.state.success}),n.a.createElement(f,null),this.state.friends.map(function(t){return n.a.createElement(u,{handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,key:t.id,name:t.name,image:t.image})}))}}]),t}(a.Component);c(27);r.a.render(n.a.createElement(k,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.276bf9e8.chunk.js.map