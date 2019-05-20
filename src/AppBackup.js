import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './CustomCSS.css';
import {jsonData} from "./JSON_Dat.json"

const data = '{ "formatVersion": 3, "id": "root", "ideas": { "1": { "title": "NavBar", "id": 1, "attr": { "position": [ -1015, -496, 1 ], "style": { "background": "#3366FF" } }, "ideas": { "1": { "title": "Logo", "id": "5.137b.610236dcc-c9b6.4cc16d678", "ideas": { "1": { "title": " https://drive.google.com/open?id=0ByxQT6Sr1O7ZdGVRMHZzWXYtaTFDU0g4czF1VENMNXRHTWhN", "id": "23.137b.610236dcc-c9b6.4cc16d678" } }, "attr": { "style": { "background": "#3366FF" } } }, "11": { "title": "Menu", "id": "6.137b.610236dcc-c9b6.4cc16d678", "attr": { "position": [ 97, 55.80000001192093, 1 ], "style": { "background": "#3366FF" } }, "ideas": { "1": { "title": "Home", "id": "7.137b.610236dcc-c9b6.4cc16d678" }, "2": { "title": "Services", "id": "8.137b.610236dcc-c9b6.4cc16d678" }, "3": { "title": "Products", "id": "9.137b.610236dcc-c9b6.4cc16d678" }, "4": { "title": "Themes", "id": "11.137b.610236dcc-c9b6.4cc16d678", "ideas": { "1": { "title": "Biodiversity", "id": "12.137b.610236dcc-c9b6.4cc16d678" }, "2": { "title": "Trends", "id": "13.137b.610236dcc-c9b6.4cc16d678" } } } } } } }, "2": { "title": "Footer", "id": "2.137b.610236dcc-c9b6.4cc16d678", "attr": { "position": [ -980, -82, 1 ], "style": { "background": "#0000FF" } }, "ideas": { "1": { "title": "Technology", "id": "14.137b.610236dcc-c9b6.4cc16d678", "attr": { "note": { "index": 11, "text": "The DST funds the SAEON Open Data Platform (ODP) and associated dissemination portals. Developed by SAEON on behalf of DST, DEA, and other stakeholders." } } }, "2": { "title": "SAEON ODP", "id": "17.137b.610236dcc-c9b6.4cc16d678" }, "12": { "title": "Funding", "id": "21.137b.610236dcc-c9b6.4cc16d678", "attr": { "position": [ 114.79998779296875, 152.5999984741211, 1 ] }, "ideas": { "1": { "title": "https://drive.google.com/open?id=0B18ulA7MmoWOcTQ0SkhIRDBVU3c", "id": "22.137b.610236dcc-c9b6.4cc16d678" } } }, "1.5": { "title": "Legal", "id": "16.137b.610236dcc-c9b6.4cc16d678", "ideas": { "1": { "title": "Disclaimer http://noframe.media.dirisa.org/wiki-1/disclaimer", "id": "18.137b.610236dcc-c9b6.4cc16d678" }, "2": { "title": "Privacy http://noframe.media.dirisa.org/wiki-1/privacy-statement", "id": "19.137b.610236dcc-c9b6.4cc16d678" }, "3": { "title": "Conditions of Use http://noframe.media.dirisa.org/wiki-1/conditions-of-use", "id": "20.137b.610236dcc-c9b6.4cc16d678" } } } } }, "3": { "title": "SideNav", "id": "3.137b.610236dcc-c9b6.4cc16d678", "attr": { "position": [ -1078.2000122070312, -233.8000030517578, 1 ], "style": { "background": "#0000FF" } } }, "4": { "title": "Content", "id": "4.137b.610236dcc-c9b6.4cc16d678", "attr": { "position": [ -1080, -301, 1 ], "style": { "background": "#0000FF" } } } }, "title": "" }'

const parsedData = JSON.parse(data);

const dataHeader = [
  {
    "text": "About",
    "link": "https://www.youtube.com/watch?v=Ni4x5uyG1Wc"
  },
  {
    "text": "Search",
    "link": "https://tabs.ultimate-guitar.com/tab/parkway_drive/idols_and_anchors_tabs_817444"
  },
  {
    "text": "Profiler",
    "link": "https://saeongroup.slack.com/files/UEJM3C6RM/FEL6Z6T0Q/css.txt"
  },
  {
    "text": "Atlas",
    "link": "https://saeongroup.slack.com/messages/DEHGKNYDR/"
  },
  {
    "text": "Contact",
    "link": "https://mail.google.com/mail/u/0/?tab=wm#inbox"
  }
]

const newDat = '{ "formatVersion": 3, "id": "root", "ideas": { "1": { "title": "Ulwazi Node", "id": 1, "ideas": { "1": { "title": "About", "id": "2.365527a2a8d7f3aa" }, "2": { "title": "People", "id": "4.365527a2a8d7f3aa", "ideas": { "1": { "title": "Team", "id": "7.365527a2a8d7f3aa"}, "2": { "title": "Collaborators", "id": "8.365527a2a8d7f3aa"} } }, "3": { "title": "Data", "id": "6.365527a2a8d7f3aa", "ideas": { "1": { "title": "Data Products", "id": "16.365527a2a8d7f3aa" }, "2": { "title": "Search http://www.sasdi.net/search.aspx?anytext=energy&noframe=true", "id": "17.365527a2a8d7f3aa" } } }, "-1": { "title": "Systems", "id": "3.365527a2a8d7f3aa", "ideas": { "1": { "title": "Open Data Platform", "id": "12.365527a2a8d7f3aa" }, "2": { "title": "Portals", "id": "13.365527a2a8d7f3aa" }, "3": { "title": "Gateways", "id": "14.365527a2a8d7f3aa" }, "4": { "title": "APIs", "id": "15.365527a2a8d7f3aa" } } }, "-2": { "title": "Projects", "id": "5.365527a2a8d7f3aa", "ideas": { "1": { "title": "Funded", "id": "9.365527a2a8d7f3aa" }, "2": { "title": "Collaborations", "id": "10.365527a2a8d7f3aa" }, "3": { "title": "Blue Sky", "id": "11.365527a2a8d7f3aa" } } } }, "attr": { "icon": { "url": "data:image/png;base64,/++++3snX5opa3rV3LAQ4eyT+6/", "width": 307, "height": 120, "position": "left", "metaData": { "remoteUrl": "https://lh3.googleusercontent.com/-9Rl8v0I4h4k/Wd9fgymTVKI/AAAAAAAACKo/LjwT8PjGZzwHl8kG387BbHmSpZIRovrigCE0YBhgL/s400/logo_saeon.png", "original": "https://picasaweb.google.com/100832867452771743073/6475999807936873537#6475999806124938402", "parentId": "6475999807936873537", "id": "6475999806124938402", "service": "googlePhotos" } } } } }, "title": "Ulwazi Node" }'
 
function myFunction(json) {
  let obj = JSON.parse(json);

  //var ul = document.getElementById("ulList");
  
  var ul = (<ul></ul>)
  var iconUrl = obj.ideas

  for (let x in obj.ideas[1]) {
      if (x == 'attr') {
          if (obj.ideas[1][x].hasOwnProperty("icon")) {
              var logo = "#"
              if (obj.ideas[1][x].icon.hasOwnProperty("metaData")) {

                  if (obj.ideas[1][x].icon.metaData.remoteUrl.includes(".png") || obj.ideas[1][x].icon.metaData.remoteUrl.includes(".jpg") || obj.ideas[1][x].icon.metaData.remoteUrl.includes(".jpeg")) {
                      logo = obj.ideas[1][x].icon.metaData.remoteUrl;
                  }
                  else if (obj.ideas[1][x].icon.metaData.original.includes(".png") || obj.ideas[1][x].icon.metaData.original.includes(".jpg") || obj.ideas[1][x].icon.metaData.original.includes(".jpeg")) {
                      logo = obj.ideas[1][x].icon.metaData.original;
                  }
              }
              let Taggy = Taggy + React.createElement(<a id="navBar_left" class="navbar-left"><img id="logo" class="logo"></img></a>)
              //document.getElementById("logo").setAttribute("src", logo.toString());
              break;
          }
      }

  }
  for (let x in obj.ideas[1].ideas) {

      for (let y in obj.ideas[1].ideas[x]) {
          if (obj.ideas[1].ideas[x].hasOwnProperty(y)) {
              if (y === "title") {
                  var li = React.createElement("li")

                  if (obj.ideas[1].ideas[x].hasOwnProperty('ideas')) {
                      li.setAttribute("class", "nav-item dropdown")

                      var a = React.createElement("a");
                      a.innerText = obj.ideas[1].ideas[x][y];

                      ul.appendChild(li);

                      a.setAttribute("class", "nav-link dropdown-toggle");
                      a.setAttribute("href", "#");
                      a.setAttribute("role", "button");
                      a.setAttribute("data-toggle", "dropdown");
                      a.setAttribute("aria-haspopup", "true");
                      a.setAttribute("aria-expanded", "false");

                      var div = React.createElement("div");
                      div.setAttribute("class", "dropdown-menu");
                      div.setAttribute("aria-labelledby", "navbarDropdown");

                      li.appendChild(a);
                      li.appendChild(div)
                      for (a in obj.ideas[1].ideas[x].ideas) {
                          var innerA = React.createElement("a");
                          innerA.setAttribute("class", "dropdown-item");

                          var innerTxt = obj.ideas[1].ideas[x].ideas[a].title;

                          if (innerTxt.includes("http")) {

                              var contentTag = React.getElementById("content");
                              var iframe = React.createElement("iframe");
                              iframe.setAttribute("src", "http" + innerTxt.split('http')[1]);
                              contentTag.appendChild(iframe)

                              innerA.innerText = innerTxt.split('http')[0];
                          }
                          else
                              innerA.innerText = innerTxt;

                          div.appendChild(innerA);
                      }
                  }
                  else {
                      //li.setAttribute("class", "nav-item")
                      li += {'class' : 'nav-item'};

                      var a = document.createElement("a");
                      a.innerText = obj.ideas[1].ideas[x][y];

                      ul.appendChild(li);

                      a.setAttribute("class", "nav-link");
                      a.setAttribute("href", "#");

                      li.appendChild(a);

                      var asdf = (<li class="nav-item"><a>{obj.ideas[1].ideas}</a></li>)
                  }

              }
          }
      }
  }
}

const Header = (
  <nav class="white" role="navigation">
   <div class="nav-wrapper container">
     <a id="logo-container" href="#" class="brand-logo">&nbsp; SARVA 3.0</a>
     <rty />
     <ul class="right hide-on-med-and-down">
      {
        dataHeader.map((el, i) => (<li><a key={i} href={el.link} >{el.text}</a></li>))
      }
      <img id="menu-logo" src={logo}></img> 
     </ul>
   </div>
 </nav>
);
 

const Content = (
  <img src={logo} className="App-logo" alt="logo" /> 
)

const dataFooter = [
  {
    "h5": "Technology",
    "content": "The DST funds the SAEON Open Data Platform (ODP) and associated dissemination portals. Developed by SAEON on behalf of DST, DEA, and other stakeholders"
  },
  {
    "h5": "Legal",
    "content":  ""  },
  {
    "h5": "SAEON ODP",
    "content": "https://saeongroup.slack.com/files/UEJM3C6RM/FEL6Z6T0Q/css.txt"
  },
  {
    "h5": "Funding",
    "content": "https://saeongroup.slack.com/messages/DEHGKNYDR/"
  } 
]
const Footer = (
  <footer class="page-footer grey">
   <div class="container">
     <div class="row">
     {/* Start footer dev here */}
      {
        dataFooter.map((el, i) => ( 
                                    <div class="col l3 s12">
                                        <h5 class="white-text light" key={i}> {el.h5} </h5>
                                        <p class="white-text light" key={i}> {el.content} </p>
                                    </div>
                                  )
                      )
      }
     </div>
   </div>
   <div class="footer-copyright">
     <div class="container">
          Created by <a class="blue-text text-lighten-3" href="http://www.saeon.ac.za">SAEON</a> using <a class="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a> and SAEON Open Data Platform APIs.
     </div>
   </div>
 </footer>
);

function SideNavFunc(){  
  const children = []
  const returnVal = <ul>{children}</ul>
  for (let x in parsedData.ideas){
    for (let y in parsedData.ideas[x])
    { 
      if (parsedData.ideas[x][y] == "NavBar") {
        children.push(<h1>Test</h1>);
      }
    }
  }
  return returnVal
}

function HeaderFunc(){
  const children = []
  var HeaderLogo
  const base = (<nav class="white" role="navigation">
                  <div class="nav-wrapper container">
                    <a id="logo-container" href="#" class="brand-logo">&nbsp; SARVA 3.0</a>
                    <ul class="right hide-on-med-and-down">
                      {children}
                    </ul>
                  </div>
                </nav>)

  for (let x in parsedData.ideas){
    for (let y in parsedData.ideas[x])
    { 
      if (parsedData.ideas[x][y] == "NavBar") 
      {
        if(parsedData.ideas[x].ideas != "undefined"){
          for (let z in parsedData.ideas[x].ideas){
            if (parsedData.ideas[x].ideas[z].title == "Menu"){
              for (let ddl in parsedData.ideas[x].ideas[z].ideas){
                const innerArray = []
                if (parsedData.ideas[x].ideas[z].ideas[ddl].ideas != "undefined")
                {
                  for (let inner in parsedData.ideas[x].ideas[z].ideas[ddl].ideas)
                  {
                    const ddlStyle = "style=font-size:12px; text-indent:50px"
                     innerArray.push(<li><a href="#" >{parsedData.ideas[x].ideas[z].ideas[ddl].ideas[inner].title}</a></li>)
                  }
                }
                if (innerArray.length > 0)  
                  
                  children.push(<li class="sub-menu-parent" tab-index="0">
                                  <a href="#">{parsedData.ideas[x].ideas[z].ideas[ddl].title} &#8659;</a>
                                  <ul class="sub-menu">
                                    {innerArray}
                                  </ul>
                                </li>)
                }
                else {
                  children.push(<li styled><a>{parsedData.ideas[x].ideas[z].ideas[ddl].title}</a></li>)
                }
              }
            }
            else if (parsedData.ideas[x].ideas[z].title == "Logo"){
              children.push(<img id="menu-logo" src={logo}></img> )
            }
          } 
        }
      }
    }
  }
  return base 
}

class App extends Component {

  render() {

    return (
      <div className="App"> 
        {HeaderFunc()}
        {SideNavFunc()}
        {Content}        
        {Footer}
      </div>
    );
  }
}

export default App;
