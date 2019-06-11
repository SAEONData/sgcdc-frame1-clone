import React, { Component, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './CustomCSS.css'; 
import * as parsedData from './JSON_Dat.json';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import DynamicFooter from './components/DynamicFooter'

import { Tooltip } from '@trendmicro/react-tooltip';
import '@trendmicro/react-tooltip/dist/react-tooltip.css';
 
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import DataGuidence from './DataGuidence';
import TermsConditions from './TermsConditions';
import Contact from './Contact';
import Glossary from './Glossary';
import About from './About';


class App extends Component { 

constructor(props) {
  super(props);
  this.state = {content: "", widgets: "", ReadingRisk: false, ContentHeading: "", ContentBody: "", HideSearchBar: true, SearchText: "", SearchModal: false };
  this.HeaderFunc = this.HeaderFunc.bind(this)
  this.reloadContent = this.reloadContent.bind(this)
  this.reloadWidgets = this.reloadWidgets.bind(this)
  this.SideNavFunc = this.SideNavFunc.bind(this)
  this.Modal = this.Modal.bind(this)
  this.BuildStyleVar = this.BuildStyleVar.bind(this)
  this.toggle = this.toggle.bind(this)
  this.handleChange = this.handleChange.bind(this)
  this.iFrameModal = this.iFrameModal.bind(this);
  this.linkCheck = this.linkCheck.bind(this);
  this.FindPath = this.FindPath.bind(this);
  this.findCorrespondingId = this.findCorrespondingId.bind(this);
  this.createBreadcrumb = this.createBreadcrumb.bind(this);
  this.createPagesFunction = this.createPagesFunction.bind(this);
} 

handleClick(event) {
  
  switch (event) {
    case "Home": 
      ReactDOM.render(<App/>, document.getElementById('root'));
      break;

    case "Glossary":
      ReactDOM.render(<Glossary/>, document.getElementById('root'));
      break;
      
    case "About":
      ReactDOM.render(<About/>, document.getElementById('root'));
      break;

    case "TermsConditions":
      ReactDOM.render(<TermsConditions/>, document.getElementById('root'));
      break;
    
    case "DataGuidence":
      ReactDOM.render(<DataGuidence/>, document.getElementById('root'));
      break;
    
    case "Contact":
      ReactDOM.render(<Contact/>, document.getElementById('root'));
      break;

    default:
    break;
  }
}

//#region Helpers

colorB(state = 'green', action = null) {
  const {type, payload} = action;
  switch (type) {
    case 'myActionName_UpdateColor':
      return payload;

    default:
      return state;
  }
 }

createPagesFunction(JSON) {
  // const ContactPage = () => { alert("ContactPage") }
  // const AboutPage = () => { alert("AboutPage") }
  // //this.state["FunctionCollection"].push(ContactPage);

  // var FunctionCollection = []
  // FunctionCollection.push(alert("ContactPage") );
  // FunctionCollection.push(alert("AboutPage") );

  // var TheFunc = iterateArray(FunctionCollection);

  // var FunctionStore = FunctionCollection;  //this.state["FunctionCollection"];
  // var SelectedFunc = FunctionStore["ContactPage"];
  // alert(FunctionCollection) 

}

// createDynamicClasses() {
//   dymanic 
// }

createBreadcrumb(nodeId) {

  var breadcrumbArr = [];

  var Base = <ul className="breadcrumb" style={{ background : 'transparent', paddingLeft : '5%', color : 'black' }}> { breadcrumbArr } </ul>

  // You need to find each parent node and append it to the breadcrumb

  // #region Intuitive loop

  // var currentNode = this.FindPath(nodeId);
  
  // for (let i in currentNode) {
  //   alert(i)
  // }

  // while (nodeId !== parsedData.default.id) {
  //   if (this.FindPath(nodeId) !== undefined) {

  //   }
    
  //   if (this.FindPath(nodeId).ideas !== undefined && this.FindPath(nodeId).id == nodeId) {
  //     nodeId.ideas[0]
  //   }
  // }

  // // Try a click with just a 'li' element otherwise add in a 'a'
  // var child = document.createElement('li');
  // child.onclick(this.reloadContent(this.findCorrespondingId(parsedData.default.ideas[o].ideas[i].ideas[w].id.toString())));
  // child.innerText()

  // #endregion   

  var currentContent = this.FindPath(nodeId)

  
  if (currentContent !== undefined ) {
    var child = <li onClick={() => this.reloadContent(nodeId)}><button type="button" className="link-button" style={{ backgroundColor: "transparent", color: "black", border: "none" }} >{ currentContent.title } </button></li>
    var home = <li onclick={() => this.reloadContent("") } ><button type="button" className="link-button" style={{ backgroundColor: "transparent", color: "black", border: "none" }} >{"Home"}</button></li>

    breadcrumbArr.push(home);
    breadcrumbArr.push(child);
  }

  return Base;
}

linkCheck(nodeID, isContentNode) {
  for (let q in parsedData) {
    for (let w in parsedData[q]) {
      if (w === "links") {
        for (let e in parsedData[q][w]) {
          if (parsedData[q][w][e] !== undefined) {
            if (parsedData[q][w][e]["ideaIdFrom"] !== undefined && parsedData[q][w][e]["ideaIdTo"] !== undefined) {
              
              if (isContentNode === true) {
                if (nodeID === parsedData[q][w][e]["ideaIdTo"]) {
                  //alert("To Node Id : " + parsedData[q][w][e]["ideaIdTo"])
                  return true;
                }
                else{
                  return false;
                }
              }
              else {
                if (nodeID === parsedData[q][w][e]["ideaIdFrom"]) {
                  //alert("From Node Id : " + parsedData[q][w][e]["ideaIdFrom"])
                  return true;
                }
                else {
                  return false;
                }
              }
            }
          } 
        }
      }
    }
  }
  return false;
}

findCorrespondingId(nodeId) {
  if (nodeId !== "" && nodeId !== undefined) {
    for (let q in parsedData) {
      for (let w in parsedData[q]) {
        if (w === "links") {
          for (let e in parsedData[q][w]) {
            if (parsedData[q][w][e] !== undefined) {
              
              if (parsedData[q][w][e]["ideaIdFrom"] !== undefined && parsedData[q][w][e]["ideaIdTo"] !== undefined) {
                // if (parsedData[q][w][e]["ideaIdFrom"] === nodeId) {
                //   alert("Node ID : " + nodeId + " || From : " + parsedData[q][w][e]["ideaIdFrom"] + " || To : " + parsedData[q][w][e]["ideaIdTo"])
                //   return parsedData[q][w][e]["ideaIdTo"];
                // }
                // else if (parsedData[q][w][e]["ideaIdTo"] === nodeId) {
                //   alert("Node ID : " + nodeId + " || From : " + parsedData[q][w][e]["ideaIdFrom"] + " || To : " + parsedData[q][w][e]["ideaIdTo"])
                //   return parsedData[q][w][e]["ideaIdFrom"];
                // }

                if ((parsedData[q][w][e]["ideaIdFrom"] === nodeId || parsedData[q][w][e]["ideaIdTo"] === nodeId) && parsedData[q][w][e]["ideaIdTo"] !== undefined) { 
                  
                  // alert("Idea To " + parsedData[q][w][e]["ideaIdTo"])
                  return parsedData[q][w][e]["ideaIdTo"]
                }
              }
            }
          }
        }
      }
    }
  }
  else {
    return false;
  }
}

FindPath(NodeId) { 
  for (let x in parsedData.default.ideas) {
    for (let y in parsedData.default.ideas[x]) { 
      if (parsedData.default.ideas[x][y] === "Content") {
        if(parsedData.default.ideas[x].ideas !== "undefined") {
          for (let z in parsedData.default.ideas[x].ideas) {
            //alert("Current Node ID : " + parsedData.default.ideas[x].ideas[z].id + " || Sought Node ID : " + NodeId)
            
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            // alert(parsedData.default.ideas[x].ideas[z].id)
            
            if (parsedData.default.ideas[x].ideas[z].title !== "Widgets") {
              
              if (parsedData.default.ideas[x].ideas[z].id === NodeId) {
                return parsedData.default.ideas[x].ideas[z];
              }
              else if (parsedData.default.ideas[x].ideas[z].ideas !== undefined) {
                for (let v in parsedData.default.ideas[x].ideas[z].ideas){
                  
                  if (parsedData.default.ideas[x].ideas[z].ideas[v].id === NodeId) {
                    alert("Found it at Inner node")
                    return parsedData.default.ideas[x].ideas[z].ideas[v]
                  }
                  else if (parsedData.default.ideas[x].ideas[z].ideas[v].ideas !== undefined) {
                    for (let i in parsedData.default.ideas[x].ideas[z].ideas[v].ideas) {
                      if (parsedData.default.ideas[x].ideas[z].ideas[v].ideas[i].id === NodeId) {
                        return parsedData.default.ideas[x].ideas[z].ideas[v].ideas[i];
                      }
                    }
                  }

                  // if (parsedData.default.ideas[x].ideas[z][v].id === NodeId) {
                  //   alert("Found it A");
                    
                  //   return parsedData.default.ideas[x].ideas[z][v];
                  // }
                  // else {
                  //   if (parsedData.default.ideas[x].ideas[z][v].ideas !== undefined) {
                  //     for (let b in parsedData.default.ideas[x].ideas[z][v].ideas) {
                  //       if (parsedData.default.ideas[x].ideas[z][v].ideas[b].id === NodeId) {
                  //         alert("Found it B");

                  //         return parsedData.default.ideas[x].ideas[z][v].ideas[b];
                  //       }
                  //     }
                  //   }
                  // }
                }
              }
            } 
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////

            // #region Old defective func
            // if (parsedData.default.ideas[x].ideas[z].id === NodeId) {
            //   alert("Found It!!! : " + parsedData.default.ideas[x].ideas[z].id)

            //   return parsedData.default.ideas[x].ideas[z];
            // }
            // else {
            //   for (let v in parsedData.default.ideas[x].ideas[z]){
            //     if (parsedData.default.ideas[x].ideas[z][v].id === NodeId) {
            //       alert("Found it A");
                  
            //       return parsedData.default.ideas[x].ideas[z][v];
            //     }
            //     else {
            //       if (parsedData.default.ideas[x].ideas[z][v].ideas !== undefined) {
            //         for (let b in parsedData.default.ideas[x].ideas[z][v].ideas) {
            //           if (parsedData.default.ideas[x].ideas[z][v].ideas[b].id === NodeId) {
            //             alert("Found it B");

            //             return parsedData.default.ideas[x].ideas[z][v].ideas[b];
            //           }
            //         }
            //       }
            //     }
            //   }
            // }
            // #endregion
          }
        }
      }
    }
  }
}

SearchModal() {
  alert("Hi!") 
}

handleChange(event) {
  this.setState({SearchText: event.target.value});
}

toggle(modal) {
  
  if (modal.toString() !== "searchBar") {
    let modalNumber = modal.replace("#","")
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
}

reloadContent(path) {
  switch (path) {
    case "Home": 
      ReactDOM.render(<App/>, document.getElementById('root'));
      break;

    case "Glossary":
      ReactDOM.render(<Glossary/>, document.getElementById('root'));
      break;
      
    case "About":
      ReactDOM.render(<About/>, document.getElementById('root'));
      break;

    case "TermsConditions":
      ReactDOM.render(<TermsConditions/>, document.getElementById('root'));
      break;
    
    case "DataGuidence":
      ReactDOM.render(<DataGuidence/>, document.getElementById('root'));
      break;
    
    case "Contact":
      ReactDOM.render(<Contact/>, document.getElementById('root'));
      break;

    default:
    break;
  }
}

reloadWidgets(content) {
  this.setState({widgets : content})
}

extractLink(str) {
  var link;

  if (str.indexOf("http") > -1) {
      link = str.split('http')[1];
  }
  else {
      link = "";
  }

  return "http" + link;
}

isImage(str) {
  if (str.toString().includes("drive.google")) //Check if it is an image
  {
    return true;
  }

  return false;
}

googleImage(link){
  return link.replace("open", "uc");
} 
 
Modal(header, innerText, id) {
  
    const CustomModal = () => 
    (<Modal isOpen={this.state[id]} toggle={() => this.toggle(id)} size="fluid" background="grey">
      <ModalHeader>{header}</ModalHeader>
      <ModalBody>
        <div className="text-black modal-innet-text">{innerText}</div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={() => this.toggle(id)}>Close</Button>{' '}
      </ModalFooter>
     </Modal>); 

  return ReactDOM.createPortal( <CustomModal/>, document.getElementById('root'));
}

BuildStyleVar(NodePath){
  // Here we are going to get the path to the node (will prob be a attr node) containing the styles 
  // for the tag/content and process it. Will return a var with all the style's structured and correct

  var Style = ""
 
  for (let t in NodePath) {
    if (t === "attr"){
      for (let y in NodePath[t]) {
        if (y === "style") {
          for (let u in NodePath[t][y]) {
            Style += (u.toString() + ":" + NodePath[t][y][u].toString() + ";");
          }
        }
      }
    }
  }

  // 2ⁿᵈ step logic
  const camelize = (string) =>  string.replace(/-([a-z])/gi,(s, group) =>  group.toUpperCase());
  
  // 1ˢᵗ step logic which calls the 2ⁿᵈ step logic
  const style2object = (style) => style.split(';').filter(s => s.length)
          .reduce((a, b) => {
            const keyValue = b.split(':');
            a[camelize(keyValue[0])] = keyValue[1] ; 
            return a;
          } ,{}); 

  return style2object(Style)
}

iFrameModal(Header, iFrameLink, modalId) {

  const ReturnModal = () => (<Modal size="lg" aria-hidden="true" onClickAway={() => this.toggle(modalId)} effect="fadeInUp" isOpen={this.state[modalId.replace("#","")]} toggle={() => this.toggle(modalId)} background="grey">
                               <ModalHeader size="lg" className="black-text">{"Terms and Conditions"}</ModalHeader>
                               <iframe src={ iFrameLink } title="#"></iframe>
                             </Modal>);

  return (<ReturnModal/>);
}

//#endregion

HeaderFunc = () => {
  //Remeber to check for the header logo
  const children = []
  var HeaderLogo, hrefLink = "http://app01.saeon.ac.za/sarva3/", iframeSrc = 'http://www.sasdi.net/search.aspx?anytext='
  const base = (<nav className="white" role="navigation">
                  <div className="nav-wrapper container">
                    <a id="logo-container" href={ hrefLink } rel="noopener nereferrer" className="brand-logo">&nbsp; SARVA 3.0</a>
                    <ul className="right hide-on-med-and-down" key="HeaderFuncKey">
                      {children} 
                      <i className="glyphicon glyphicon-search" style={{ fontSize: '1.75em', color: 'rgb(104, 103, 103)'}} onClick={() => this.toggle('searchBar')} />
                    </ul>
                    <input className={ this.state["HideSearchBar"] ? 'hidden black-text' : 'black-text'} type="text" name="Search" value={this.state.SearchText} onChange={this.handleChange} ></input>
                    <i className='hidden glyphicon glyphicon-search' style={{ fontSize: '1.75em', color: 'rgb(104, 103, 103)'}} />
                    <div style={{ textAlign: 'center' }}>
                      <button className={ this.state["HideSearchBar"] ? 'hidden glyphicon glyphicon-search' : 'glyphicon glyphicon-search' } style={{ fontSize: '1.75em', color: 'black', background: 'transparent', border: 'none' }} onClick={ () => this.toggle("SearchModal")}></button>
                    </div>
                    <Modal id='searchiFrame' onClickAway={() => (this.SearchModal())} effect="fadeInUp" isOpen={this.state["SearchModal"]} toggle={() => this.toggle("SearchModal")} size="lg" background="grey">
                        <iframe style={{ position: "fixed", top: "0px", left: "0px", bottom: "0px", right: "0px", width: "100%", height: "100%", border: "none", margin: "0", padding: "0", overflow: "hidden", index: '999999' }} src={iframeSrc + this.state.SearchText.toString() + '&noframe=true'} title="#"></iframe>
                    </Modal>
                  </div>
                </nav>)
  
  for (let x in parsedData.default.ideas){
    for (let y in parsedData.default.ideas[x])
    { 
      if (parsedData.default.ideas[x][y] === "NavBar") 
      {
        var NavBarStyles = this.BuildStyleVar(parsedData.default.ideas[x]);
        if(parsedData.default.ideas[x].ideas !== "undefined"){
          for (let z in parsedData.default.ideas[x].ideas){
            if (parsedData.default.ideas[x].ideas[z].title === "Menu"){
              for (let ddl in parsedData.default.ideas[x].ideas[z].ideas){
                const innerArray = []
                if (parsedData.default.ideas[x].ideas[z].ideas[ddl].ideas !== "undefined")
                {
                  for (let inner in parsedData.default.ideas[x].ideas[z].ideas[ddl].ideas)
                  {
                    const ddlStyle = { 
                                        fontSize: '12px',
                                        color: 'red',
                                        width: '100%',
                                        indent: '50px'
                                     }; 
                    
                    innerArray.push(<li style={ddlStyle} key={parsedData.default.ideas[x].ideas[z].ideas[ddl].ideas[inner].id}><a href="www.google.com" >{parsedData.default.ideas[x].ideas[z].ideas[ddl].ideas[inner].title}</a></li>)
                    this.linkCheck(parsedData.default.ideas[x].ideas[z].ideas[ddl].ideas[inner].id);
                    // this.FindPath(parsedData.default.ideas[x].ideas[z].ideas[ddl].ideas[inner].id);
                  }
                }
                if (innerArray.length > 0)  
                {
                  children.push(<li className="sub-menu-parent" key={ parsedData.default.ideas[x].ideas[z].ideas[ddl].id } tab-index="0" style={NavBarStyles}>
                                  <a href="www.google.com">{parsedData.default.ideas[x].ideas[z].ideas[ddl].title} &#8659;</a>
                                  <ul className="sub-menu">
                                    {innerArray}
                                  </ul>
                                </li>)
                }
                else {
                  this.linkCheck(parsedData.default.ideas[x].ideas[z].ideas[ddl].id);
                  // this.FindPath(parsedData.default.ideas[x].ideas[z].ideas[ddl].id);
                  // Here for the static page linking 
                  // children.push(<li styled="true" key={ parsedData.default.ideas[x].ideas[z].ideas[ddl].id }><a href="www.google.com">{parsedData.default.ideas[x].ideas[z].ideas[ddl].title}</a></li>)
                  
                  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                  children.push(<li styled="true" key={ parsedData.default.ideas[x].ideas[z].ideas[ddl].id }><button type="button" className="link-button" style={{ backgroundColor: "transparent", color: "black", border: "none" }} onClick={ this.handleClick.bind(this, parsedData.default.ideas[x].ideas[z].ideas[ddl].attr.link) } >{parsedData.default.ideas[x].ideas[z].ideas[ddl].title}</button></li>)
                }
              }
            }
            else if (parsedData.default.ideas[x].ideas[z].title === "Logo"){
              for (let count in parsedData.default.ideas[x].ideas[z].ideas) {
                if (this.isImage(parsedData.default.ideas[x].ideas[z].ideas[count].title)){
                  HeaderLogo = this.googleImage(this.extractLink(parsedData.default.ideas[x].ideas[z].ideas[count].title))
                }
              }
              children.push(<img id="menu-logo" alt="img not loaded" src={HeaderLogo}></img> )
            }
          } 
        }
      }
    }
  }
  return base 
}

SideNavFunc = () => {

var InnerDdl = [], Items = [];

const Base = <SideNav className="sidenav"><SideNav.Toggle /><SideNav.Nav>{ Items }</SideNav.Nav></SideNav>

for (let o in parsedData.default.ideas)
{
  for (let u in parsedData.default.ideas[o])
  {
    if (parsedData.default.ideas[o][u] === "SideNav") 
    {
      if(parsedData.default.ideas[o].ideas !== "undefined")
      {
        for (let i in parsedData.default.ideas[o].ideas)
        {
          //Rember to check if you need to initialize anything

          //Here check for a glyphicon, using home for now
          var menuItemTitle = "", menuItemIcon = "", menuItemTooltip = "";

          if (parsedData.default.ideas[o].ideas[i].ideas !== "undefined")
          {
            InnerDdl = []
            for (let w in parsedData.default.ideas[o].ideas[i].ideas)
            {
              //Check what type it is, if its a modal, new tab, replace content and breadcrumb
              this.linkCheck(parsedData.default.ideas[o].ideas[i].ideas[w].id, false);

              // #region Set Modal var's (if modal)
              const ModalId = '#' + parsedData.default.ideas[o].ideas[i].ideas[w].title.replace(/\s/g, '');
              var modalText = "", innerItemType = "", newTabLink = "";
              // #endregion

              // #region Read the inner-text JSON
              if (parsedData.default.ideas[o].ideas[i].ideas[w].attr !== "undefined")
              {
                for (let r in parsedData.default.ideas[o].ideas[i].ideas[w]){
                  for ( let p in parsedData.default.ideas[o].ideas[i].ideas[w][r]){
                    for (let text in parsedData.default.ideas[o].ideas[i].ideas[w][r][p]){
                      if (text === "text"){
                        
                        // this will now possibly contain JSON

                        var innerJSON = JSON.parse(parsedData.default.ideas[o].ideas[i].ideas[w][r][p][text])
                        
                        if (innerJSON !== undefined) {
                          modalText = innerJSON.text;
                          innerItemType = innerJSON.type;
                          
                          if (innerJSON.link !== undefined) {
                            newTabLink = innerJSON.link;
                          }
                        }
                        else {
                          modalText = parsedData.default.ideas[o].ideas[i].ideas[w][r][p][text];
                        }
                      } 
                    }
                  }
                }
              }
              // #endregion

              if (innerItemType.toString() === "modal") {
                // If Modal
                InnerDdl.push(<NavItem eventKey={parsedData.default.ideas[o].ideas[i].ideas[w].id} key={parsedData.default.ideas[o].ideas[i].ideas[w].id} onClick={() => this.toggle(ModalId)}>
                                <NavText style={{color: 'black !important'}}>
                                  <a type="button" href="/#" className="black-text">{parsedData.default.ideas[o].ideas[i].ideas[w].title}</a>
                                  {this.Modal(parsedData.default.ideas[o].ideas[i].ideas[w].title, modalText, parsedData.default.ideas[o].ideas[i].ideas[w].title.replace(/\s/g, ''))}
                                </NavText>
                              </NavItem>)
              }
              else if (innerItemType === "tab")
              {
                //var link = "http://www.sasdi.net/search.aspx?anytext=energy&noframe=true"
                // If new tab link  
                InnerDdl.push(<NavItem eventKey={parsedData.default.ideas[o].ideas[i].ideas[w].id} key={parsedData.default.ideas[o].ideas[i].ideas[w].id} >
                                <NavText style={{color: 'black !important'}}>
                                <a href={ newTabLink } rel="noopener nereferrer" className="black-text" >{parsedData.default.ideas[o].ideas[i].ideas[w].title}</a>
                                </NavText>
                              </NavItem>)
              }
              else if (innerItemType === "content") // 
              {
                // If content reload with new breadcrumb
                //var contentVar = this.findCorrespondingId(parsedData.default.ideas[o].ideas[i].ideas[w].id.toString())

                if (this.linkCheck(parsedData.default.ideas[o].ideas[i].ideas[w].id, false))
                {

                  //alert("Content Var : " + contentVar + " || " + parsedData.default.ideas[o].ideas[i].ideas[w].id)


                  InnerDdl.push(<NavItem eventKey={parsedData.default.ideas[o].ideas[i].ideas[w].id} key={parsedData.default.ideas[o].ideas[i].ideas[w].id} onClick= {() => this.reloadContent(this.findCorrespondingId(parsedData.default.ideas[o].ideas[i].ideas[w].id.toString()), "content") && alert("HI")}>
                                  <NavText style={{color: 'black !important'}}>
                                  <a href="https://#" >{parsedData.default.ideas[o].ideas[i].ideas[w].title}</a>
                                  </NavText>
                                </NavItem>)
                }
                else {
                  InnerDdl.push(<NavItem eventKey={parsedData.default.ideas[o].ideas[i].ideas[w].id} key={parsedData.default.ideas[o].ideas[i].ideas[w].id} onClick= {() => this.reloadContent(this.findCorrespondingId(parsedData.default.ideas[o].ideas[i].ideas[w].id), "content")}>
                                  <NavText style={{color: 'black !important'}}>
                                  <a href="https://#" >{parsedData.default.ideas[o].ideas[i].ideas[w].title}</a>
                                  </NavText>
                                </NavItem>)
                }
              }
              else {
                InnerDdl.push(<NavItem eventKey={parsedData.default.ideas[o].ideas[i].ideas[w].id} key={parsedData.default.ideas[o].ideas[i].ideas[w].id} onClick= {() => this.reloadContent(parsedData.default.ideas[o].ideas[i].ideas[w].title, "content")}>
                                <NavText style={{color: 'black !important'}}>
                                <a href="https://#" >{parsedData.default.ideas[o].ideas[i].ideas[w].title}</a>
                                </NavText>
                              </NavItem>)
              }
            }

            if (parsedData.default.ideas[o].ideas[i].attr.note.text !== undefined) {
              var menuItem = JSON.parse(parsedData.default.ideas[o].ideas[i].attr.note.text)

              if (menuItem.title !== undefined) {
                menuItemTitle = menuItem.title;
              }

              if (menuItem.icon !== undefined) {
                menuItemIcon = menuItem.icon;
              }

              if (menuItem.tooltip !== undefined) {
                menuItemTooltip = menuItem.tooltip;
              }
            }

            Items.push(<NavItem eventKey={ parsedData.default.ideas[o].ideas[i].id }>
                        <NavIcon>
                          <i className={ menuItemIcon } style={{ fontSize: '1.75em', color: '#fff' }} />
                        </NavIcon>
                        <NavText>
                          { menuItemTooltip.length === 0 ? (<span>{ menuItemTitle }</span>) : (<Tooltip placement="top" content={ menuItemTooltip }><span>{ menuItemTitle }</span></Tooltip>)}
                        </NavText>
                        {InnerDdl}
                      </NavItem>) 
          }
          else{ 
            
            if (parsedData.default.ideas[o].ideas[i].attr.note.text !== undefined) {
              // var menuItem = JSON.parse(parsedData.default.ideas[o].ideas[i].attr.note.text)
              menuItem = JSON.parse(parsedData.default.ideas[o].ideas[i].attr.note.text)

              menuItemTitle = menuItem.title;
              menuItemIcon = menuItem.icon;
              menuItemTooltip = menuItem.tooltip;
            }

            Items.push(<NavItem eventKey={ parsedData.default.ideas[o].ideas[i].id }>
                        <NavIcon>
                          <i className={ menuItemIcon } style={{ fontSize: '1.75em' }}/>
                        </NavIcon>
                        <NavText>
                          {/* <Tooltip placement="top" content={ menuItemTooltip }><span>{ menuItemTitle }</span></Tooltip> */}
                          { menuItemTooltip.length === 0 ? (<span>{ menuItemTitle }</span>) : (<Tooltip placement="top" content={ menuItemTooltip }><span>{ menuItemTitle }</span></Tooltip>)}
                        </NavText>
                      </NavItem>)
          }
        }
      }
    }
  }
}


return (Base)
}

ContentFunc = (Page) => {
  
  var DynamicContent = []

  //Make use of page var to reload page content
  //So in here we will receive a node title, check the "Content" branch and iterate through its data where the node matches the Title

  ////////////////////////////////////////////////////////////////////////
  // Hoping to load a content node by it's id

  if (Page !== "" || Page !== undefined) {
    // Call "FindPath", hoping I can get it to return the path to the node, which we can then exploit 
    var ContentVar = this.FindPath(Page)

    // #region Create content section

    // Initialize your vairables
    var Heading = "", Subtext = "", ButtonText = ""

    for (let r in ContentVar) {
      // Get the header for this section's content
      if (r === "title") {
        Heading = ContentVar[r]
      }
      
      // Get the actual content for the section
      if (r === "attr") {
        for (let w in ContentVar[r]) {
          for (let g in ContentVar[r][w]) {
            if (g === "text") {
              Subtext = <div class="row center">
                          <h5 class="header col s12 text-darken-4">{ ContentVar[r][w][g] }</h5>
                        </div>
            }
          }
        }
      }
      //Check the "Ideas" for buttons
      for (let j in ContentVar.ideas) {
        for (let k in ContentVar.ideas[j]) {
          if (k === "title") {
            ButtonText = ContentVar.ideas[j][k]
          }
        }
      }

    }

    if (Heading !== "Widgets" ){
      if (ButtonText.length === 0) {
        DynamicContent.push(<div><h2 className="header center text-darken-4">{ Heading }</h2>{Subtext}</div>)
      }
      else if (ButtonText.length > 0) {
        DynamicContent.push(<div class="parallax-container valign-wrapper">
                              <div class="section no-pad-bot">
                                <div class="container">
                                  <div class="row center">
                                    <h2 class="header center brown-text text-darken-3">{ Heading }</h2>
                                    <h5 class="header col s12 brown-text text-darken-3">{ Subtext }</h5>
                                  </div>
                                  <div class="row center">
                                    <a href="#data-modal" id="download-button" type="button" class="btn btn-primary">{ ButtonText }</a>
                                  </div>
                                  <br/>
                                </div>
                              </div>
                            </div>); 
      }
    }
    // #endregion 

  }

  ////////////////////////////////////////////////////////////////////////
  

  //See if the new page has/needs widgets then load it accordingly here

  // if (Page !== "") {
    // if (this.state["content"] !== null) {
    //   for (let x in parsedData.default.ideas) {
    //     for (let y in parsedData.default.ideas[x]) { 
    //       if (parsedData.default.ideas[x][y] === "Content") {
    //         if(parsedData.default.ideas[x].ideas !== "undefined") {
    //           for (let z in parsedData.default.ideas[x].ideas) {

    //             // #region Create content section
                
    //             // Initialize your vairables
    //             // var Heading = "", Subtext = "", ButtonText = ""
                
    //             // for (let r in parsedData.default.ideas[x].ideas[z]) {
    //             //   // Get the header for this section's content
    //             //   if (r === "title") {
    //             //     Heading = parsedData.default.ideas[x].ideas[z][r]
    //             //   }
                  
    //             //   // Get the actual content for the section
    //             //   if (r === "attr") {
    //             //     for (let w in parsedData.default.ideas[x].ideas[z][r]) {
    //             //       for (let g in parsedData.default.ideas[x].ideas[z][r][w]) {
    //             //         if (g === "text") {
    //             //           Subtext = <div class="row center">
    //             //                       <h5 class="header col s12 text-darken-4">{ parsedData.default.ideas[x].ideas[z][r][w][g] }</h5>
    //             //                     </div>
    //             //         }
    //             //       }
    //             //     }
    //             //   }

    //             //   //Check the "Ideas" for buttons
    //             //   for (let j in parsedData.default.ideas[x].ideas[z].ideas) {
    //             //     for (let k in parsedData.default.ideas[x].ideas[z].ideas[j]) {
    //             //       if (k === "title") {
    //             //         ButtonText = parsedData.default.ideas[x].ideas[z].ideas[j][k]
    //             //       }
    //             //     }
    //             //   }

    //             // }

    //             // if (Heading !== "Widgets" ){
    //             //   if (ButtonText.length === 0) {
    //             //     DynamicContent.push(<div><h2 class="header center text-darken-4">{ Heading }</h2>{Subtext}</div>)
    //             //   }
    //             //   else if (ButtonText.length > 0) {
    //             //     DynamicContent.push(<div class="parallax-container valign-wrapper">
    //             //                           <div class="section no-pad-bot">
    //             //                             <div class="container">
    //             //                               <div class="row center">
    //             //                                 <h2 class="header center brown-text text-darken-3">{ Heading }</h2>
    //             //                                 <h5 class="header col s12 brown-text text-darken-3">{ Subtext }</h5>
    //             //                               </div>
    //             //                               <div class="row center">
    //             //                                 <a href="#data-modal" id="download-button" type="button" class="btn btn-primary">{ ButtonText }</a>
    //             //                               </div>
    //             //                               <br/>
    //             //                             </div>
    //             //                           </div>
    //             //                         </div>); 
    //             //   }
    //             // }
                
    //             // #endregion 

    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  // }

  var Base = <div id="index-banner" className="parallax-container" >
                  { this.createBreadcrumb(Page) }
                  <div className="section no-pad-bot">
                    <div className="container">
                      <br></br>
                      <br></br> 
                      { DynamicContent }
                    </div>
                  </div> 
                </div>

  return Base
}

ContentWidgets = (Content) => {

  //#region Static Widgets
  // const Widgets = <div class="section">
  //                   <div class="row">
  //                     <div class="col s12 m4">
  //                       <div class="icon-block center">
  //                         <button type="button" class="btn btn-primary" data-target="search-modal" onClick={ () => this.reloadContent('Search')}>Search</button>   
  //                         <h5 class="center">Search and Discover Resources</h5>
  //                         <p class="light center">Use simple or advanced tools to search for data meeting your criteria.</p>
  //                       </div>
  //                     </div>

  //                     <div class="col s12 m4">
  //                       <div class="icon-block center">
  //                         <button type="button" class="btn btn-primary" data-target="theme-modal" onClick={ () => this.reloadContent('Themes')}>Themes</button>            
  //                         <h5 class="center">Explore Available Resources by Sector or Theme</h5>
  //                         <p class="light center">Browse, preview, and access data and narratives in popular collections and in common themes.</p>
  //                       </div>
  //                     </div>

  //                     <div class="col s12 m4">
  //                       <div class="icon-block center">
  //                         <button type="button" class="btn btn-primary" data-target="contr-modal">Contribute</button>  
  //                         <h5 class="center">Tell Us About Your Area of Interest</h5>
  //                         <p class="light center"><a href="www.google.com">Register</a> as a user and contribute data, assessments, and media.</p>
  //                       </div>
  //                     </div>
  //                     </div>
  //                 </div>
  //#endregion

  const Widgets = []

    if (this.state["content"] !== null)
    {
      for (let x in parsedData.default.ideas)
      {
        for (let y in parsedData.default.ideas[x])
        { 
          if (parsedData.default.ideas[x][y] === "Content") 
          {
            if(parsedData.default.ideas[x].ideas !== "undefined") 
            {
              for (let z in parsedData.default.ideas[x].ideas) 
              {
                if (parsedData.default.ideas[x].ideas[z].title === "Widgets")
                {
                  for (let d in parsedData.default.ideas[x].ideas[z].ideas)
                  {
                    var Description = "", ButtonText = "", Header = parsedData.default.ideas[x].ideas[z].ideas[d].title

                    //Here we search for the attr node to see if there's text
                    for (let j in parsedData.default.ideas[x].ideas[z].ideas[d]) {
                      if (j === "attr") {
                        for (let k in parsedData.default.ideas[x].ideas[z].ideas[d][j]) {
                          for (let l in parsedData.default.ideas[x].ideas[z].ideas[d][j][k]) {
                            if (l === "text") {
                              Description = parsedData.default.ideas[x].ideas[z].ideas[d][j][k].text;
                            }
                          }
                        }
                      }
                    }

                    //Here we search the nodes "Ideas" child for the button text
                    for (let c in parsedData.default.ideas[x].ideas[z].ideas[d].ideas) {
                         ButtonText = parsedData.default.ideas[x].ideas[z].ideas[d].ideas[c].title;
                    }
                    const MessengerVar = ButtonText.toString()

                      Widgets.push(<div className="col s12 m4" key={parsedData.default.ideas[x].ideas[z].ideas[d].id}>
                                    <div className="icon-block center">
                                      <button type="button" className="btn btn-primary" data-target="theme-modal" onClick={ () => this.reloadContent(MessengerVar, 'widget')}>{ ButtonText }</button>
                                      <h4 className="center">{ Header }</h4>
                                      <p className="light center">{ Description }</p>
                                    </div>
                                  </div>)
                  }
                }
              }
            }
          }
        }
      }
    }

  const Base = <div>
                 <div className="container widgets">
                   <div className="section">
                      <div className="row">
                        {Widgets}
                      </div>
                    </div>
                 </div>
                 <div className="parallax-container valign-wrapper" >
                   {/* {Text} */}
                 </div>
               </div>

  if (Content.length === 0) {
    return Base;
  }
  else {
    return null;
  }
}

FooterFunc = () => {
  return <Suspense fallback={<span>...loadingandloadingandloading</span>}>
           <DynamicFooter />
         </Suspense>
         
}

// FooterFunc = () => { 

//   const children = [] 
//   var FooterStyle //= { 'padding-left': '1%', 'padding-right': '1%' }
//   var cardTitle
//   var cardSub 

//   for (let x in parsedData.default.ideas) {
//     for (let y in parsedData.default.ideas[x])
//     { 
//       if (parsedData.default.ideas[x][y] === "Footer") 
//       {
//         FooterStyle = this.BuildStyleVar(parsedData.default.ideas[x])
//         if(parsedData.default.ideas[x].ideas !== "undefined")
//         {
//           for (let z in parsedData.default.ideas[x].ideas)
//           {

//             cardTitle = "";
//             cardSub = "";
//             var type = false;
//             var linkList = []

//             for (let r in parsedData.default.ideas[x].ideas[z]) {
//               if (r === "title") {
//                 cardTitle = parsedData.default.ideas[x].ideas[z][r];
//               }
//               else if (r === "attr") {
//                 for (let t in parsedData.default.ideas[x].ideas[z][r]) {
//                   for (let u in parsedData.default.ideas[x].ideas[z][r][t]) {
//                     if (u === "text") {
//                       cardSub = <p className="white-text light"> { parsedData.default.ideas[x].ideas[z][r][t][u] } </p>
//                     } 
//                   }
//                 }
//               }
//               else if (r === "ideas") {
//                 var link = ""
//                 for (let t in parsedData.default.ideas[x].ideas[z][r]) {
//                   //Check link type here and determine if its a logo or something
//                   link = (this.extractLink(parsedData.default.ideas[x].ideas[z][r][t].title));
                  
//                   if (this.isImage(link)) { //If it is an image, or more accurately it is a google drive doc
//                     cardSub = <img src={ link.replace("open", "uc") } alt="img not loaded"></img>
//                   } 
//                   else { //If it is not a google drive link
//                     type = true;

//                     const ModalId = '#' + parsedData.default.ideas[x].ideas[z][r][t].id.replace(/\s/g, '');
                    
//                     // while (ModalId.indexOf('.') !== 0) {
//                     //   //ModalId = ModalId.replace('.','');
//                     //   alert(ModalId.indexOf('.'))
//                     //   ModalId = ModalId.slice(ModalId.indexOf('.'), ModalId.indexOf('.') + 1);
//                     // }

                    

//                     linkList.push(<div>
//                                     <li key={ parsedData.default.ideas[x].ideas[z][r][t].id }>
//                                       <a className="white-text light" href="https://#" onClick={ () => this.toggle(ModalId)}>
//                                         { parsedData.default.ideas[x].ideas[z][r][t].title.split("http")[0] }
//                                       </a>
//                                     </li>
//                                     { this.iFrameModal("", link, ModalId) }
//                                   </div>)
//                   }
//                 }
//               }
//             }
//             if (type) {
//               children.push(<div className="col l3 s12" key={ parsedData.default.ideas[x].ideas[z].id + x.toString() }>
//                               <h5 className="white-text light"> { cardTitle } </h5>
//                               <ul>{ linkList }</ul>
//                             </div>)
//             }
//             else {
//             children.push(<div className="col l3 s12" key={ parsedData.default.ideas[x].ideas[z].id + x.toString() }>
//                             <h5 className="white-text light"> { cardTitle } </h5>
//                             { cardSub }
//                           </div>)
//             }
//           }
//         }
//       }
//     }
//   } 

//   return <footer className="page-footer font-small indigo" style={ FooterStyle }>
//             <div className="row" style={{ marginLeft: "15px"}}>
//               {children}
//             </div>
//             <Suspense fallback={<span>loading..</span>}>
//              <FetchData />
//             </Suspense>
            
//           </footer> 
          
// }
 
render() {
    var modal = document.getElementById('searchiFrame');

    window.onclick = function(event) {
        if (event.target === modal) {
          alert("outside click!")
            modal.style.display = "none";
        }
    }

  // Get the modal
  //  var modal = document.getElementById('searchiFrame');
  modal = document.getElementById('searchiFrame');

  // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "searchiFrame";
        }

    }

    return (
      <div className="App" className={ this.state["HideSearchBar"] ? 'animateReverse' : 'animate' }> 
        {this.createPagesFunction()}
        {this.SideNavFunc()}
        {this.HeaderFunc()}
        {this.ContentFunc(this.state.content)} 
        {this.ContentWidgets(this.state.widgets)}       
        {this.FooterFunc()}
      </div>
    );
  }
}

export default App;
