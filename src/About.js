 import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import DataGuidence from './DataGuidence';
import TermsConditions from './TermsConditions';
import Contact from './Contact';
import Glossary from './Glossary';
import App from './App';

class About extends Component { 

    constructor(props) {
      super(props);
      this.state = {content: "", widgets: "", ReadingRisk: false, ContentHeading: "", ContentBody: "", HideSearchBar: true, SearchText: "", SearchModal: false };
      this.ContentFunc = this.ContentFunc.bind(this);
      this.handleClick = this.handleClick.bind(this);
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
 
    ContentFunc = () => {
        const Base = (<div style={{ paddingLeft: "41%", paddingBottom: "50%", fontSize: "30pt" }}>
                        About Page
                      </div>)

        return Base;                      
    }
    
    render() {
        return (
            <div>
                <script src="/static/js/bundle.js"></script>
                <script src="/static/js/1.chunk.js"></script>
                <script src="/static/js/main.chunk.js"></script>
                <div className="animateReverse">
                    <nav className="sidenav sidenav---sidenav---_2tBP sidenav---collapsed---LQDEv">
                        <button className="sidenav---sidenav-toggle---1KRjR" aria-expanded="false">
                            <span className="sidenav---icon-bar---u1f02"></span>
                            <span className="sidenav---icon-bar---u1f02"></span>
                            <span className="sidenav---icon-bar---u1f02"></span>
                        </button>
                        <div role="menu" className="sidenav---sidenav-nav---3tvij">
                            <div role="presentation" className="sidenav---sidenav-navitem---uwIJ- sidenav---expandable---3_dr7">
                                <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                    <div className="sidenav---navicon---3gCRo">
                                        <i className="fa fa-home" style={{fontSize: "1.75em", color: "rgb(255, 255, 255)"}}></i>
                                    </div>
                                    <div className="sidenav---navtext---1AE_f">
                                        <span>SARVA</span>
                                    </div>
                                </div>
                                <div role="menu" className="sidenav---sidenav-subnav---1EN61">
                                    <div role="heading" className="sidenav---sidenav-subnavitem---1cD47">
                                        <span>SARVA</span>
                                    </div>
                                    <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                        <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                            <div className="sidenav---navtext---1AE_f">
                                                <a type="button" href="/#" className="black-text">Using SARVA</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                        <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                            <div className="sidenav---navtext---1AE_f">
                                                <a href="https://#">Atlas</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                        <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                            <div className="sidenav---navtext---1AE_f">
                                                <a href="http://www.sasdi.net/search.aspx?anytext=energy" rel="noopener nereferrer" className="black-text">Finding Data</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                        <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                            <div className="sidenav---navtext---1AE_f">
                                                <a href="https://#">Profiler</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="presentation" className="sidenav---sidenav-navitem---uwIJ- sidenav---expandable---3_dr7">
                                <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                    <div className="sidenav---navicon---3gCRo">
                                        <i className="fa fa-globe" style={{fontSize: "1.75em", color: "rgb(255, 255, 255)"}}></i>
                                    </div>
                                <div className="sidenav---navtext---1AE_f">
                                    <span>Global Change</span>
                                </div>
                            </div>
                            <div role="menu" className="sidenav---sidenav-subnav---1EN61">
                                <div role="heading" className="sidenav---sidenav-subnavitem---1cD47">
                                    <span>Global Change</span>
                                </div>
                                <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                    <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                        <div className="sidenav---navtext---1AE_f">
                                            <a href="https://#">Semantic Framework</a>
                                        </div>
                                    </div>
                                </div>
                                <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                    <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                        <div className="sidenav---navtext---1AE_f">
                                            <a href="https://#">Data and Evidence</a>
                                        </div>
                                    </div>
                                </div>
                                <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                    <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                        <div className="sidenav---navtext---1AE_f">
                                            <a href="https://#">Work Programme</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div role="presentation" className="sidenav---sidenav-navitem---uwIJ- sidenav---expandable---3_dr7">
                        <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                            <div className="sidenav---navicon---3gCRo">
                                <i className="fa fa-laptop" style={{ fontSize: "1.75em", color: "rgb(255, 255, 255)"}}></i>
                            </div>
                            <div className="sidenav---navtext---1AE_f">
                                <span>Linked System</span>
                            </div>
                        </div>
                        <div role="menu" className="sidenav---sidenav-subnav---1EN61">
                            <div role="heading" className="sidenav---sidenav-subnavitem---1cD47">
                                <span>Linked System</span>
                            </div>
                            <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                    <div className="sidenav---navtext---1AE_f">
                                        <a href="https://#">NCCRD</a>
                                    </div>
                                </div>
                            </div>
                            <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                    <div className="sidenav---navtext---1AE_f">
                                        <a href="https://#">Events and Disasters</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            <div role="presentation" className="sidenav---sidenav-navitem---uwIJ- sidenav---expandable---3_dr7">
                                <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                    <div className="sidenav---navicon---3gCRo"> 
                                        <i className="fa fa-folder-open" style={{fontSize: "1.75em", color: "rgb(255, 255, 255)"}}></i>
                                    </div>
                                    <div className="sidenav---navtext---1AE_f">
                                        <span>Archive</span>
                                    </div>
                                </div>
                                <div role="menu" className="sidenav---sidenav-subnav---1EN61">
                                    <div role="heading" className="sidenav---sidenav-subnavitem---1cD47">
                                        <span>Archive</span>
                                    </div>
                                    <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                        <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                            <div className="sidenav---navtext---1AE_f">
                                                <a href="https://#">SAWS Climate Atlas</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                        <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                            <div className="sidenav---navtext---1AE_f">
                                                <a href="https://#">Atlas of Agrohydrology</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                        <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                            <div className="sidenav---navtext---1AE_f">
                                                <a href="https://#">SARVA 2.0</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                        <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                            <div className="sidenav---navtext---1AE_f">
                                                <a href="https://#">SARVA 1.0</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="presentation" className="sidenav---sidenav-subnavitem---1cD47">
                                        <div className="sidenav---navitem---9uL5T" role="menuitem" tabIndex="-1">
                                            <div className="sidenav---navtext---1AE_f">
                                                <a href="https://#">Reading Risk</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <nav className="white" role="navigation">
                        {/* <div className="nav-wrapper container">
                            <a id="logo-container" href="http://app01.saeon.ac.za/sarva3/" rel="noopener nereferrer" className="brand-logo">&nbsp; SARVA 3.0</a>
                            <ul className="right hide-on-med-and-down">
                                <img id="menu-logo" alt="img not loaded" src="https://drive.google.com/uc?id=0ByxQT6Sr1O7ZdGVRMHZzWXYtaTFDU0g4czF1VENMNXRHTWhN"/>
                                <li styled="true">
                                    <a href="www.google.com">Home</a>
                                </li>
                                <li styled="true">
                                    <a href="www.google.com">Services</a>
                                </li>
                                <li styled="true">
                                    <a href="www.google.com">Products</a>
                                </li>
                                <li className="sub-menu-parent" tab-index="0" style={{background: "rgb(51, 102, 255) none repeat scroll 0% 0%"}}>
                                    <a href="www.google.com">Themes ⇓</a>
                                    <ul className="sub-menu">
                                        <li style={{fontSize: "12px", color: "red", width: "100%"}}>
                                            <a href="www.google.com">Biodiversity</a>
                                        </li>
                                        <li style={{fontSize: "12px", color: "red", width: "100%"}}>
                                            <a href="www.google.com">Trends</a>
                                        </li>
                                    </ul>
                                </li>
                                <i className="glyphicon glyphicon-search" style={{fontSize: "1.75em", color: "rgb(104, 103, 103)"}}/>
                            </ul>
                            <input className="hidden black-text" type="text" name="Search"/>
                            <i className="hidden glyphicon glyphicon-search" style={{fontSize: "1.75em", color: "rgb(104, 103, 103)"}}></i>
                            <div style={{textAlign: "center"}}>
                                <button className="hidden glyphicon glyphicon-search" style={{fontSize: "1.75em", color: "black", background: "transparent none repeat scroll 0% 0%", border: "medium none"}}></button>
                            </div>
                        </div> */}
                        
                        <div className="nav-wrapper container">
                            <a id="logo-container" href="http://app01.saeon.ac.za/sarva3/" rel="noopener nereferrer" className="brand-logo">&nbsp; SARVA 3.0</a>
                            <ul className="right hide-on-med-and-down">
                                <img id="menu-logo" alt="img not loaded" src="https://drive.google.com/uc?id=0ByxQT6Sr1O7ZdGVRMHZzWXYtaTFDU0g4czF1VENMNXRHTWhN"/>
                                <li styled="true">
                                    {/* <a style={{color: "black"}} onClick={ this.handleClick.bind(this, "Home") }>Home</a> */}
                                    <button type="button" className="link-button" style={{ backgroundColor: "transparent", color: "black", border: "none" }} onClick={ this.handleClick.bind(this, "Home") }>Home</button>
                                </li>
                                <li styled="true">
                                    {/* <a style={{color: "black"}} onClick={ this.handleClick.bind(this, "Glossary") }>Glossary</a> */}
                                    <button type="button" className="link-button" style={{ backgroundColor: "transparent", color: "black", border: "none" }} onClick={ this.handleClick.bind(this, "Glossary") }>Glossary</button>
                                </li>
                                <li styled="true">
                                    {/* <a style={{color: "black"}} onClick={ this.handleClick.bind(this, "About") }>About</a> */}
                                    <button type="button" className="link-button" style={{ backgroundColor: "transparent", color: "black", border: "none" }} onClick={ this.handleClick.bind(this, "About") }>About</button>
                                </li>
                                <li styled="true">
                                    {/* <a style={{color: "black"}} onClick={ this.handleClick.bind(this, "TermsConditions") }>T &amp; C's</a> */}
                                    <button type="button" className="link-button" style={{ backgroundColor: "transparent", color: "black", border: "none" }} onClick={ this.handleClick.bind(this, "TermsConditions") }>T &amp; C's</button>
                                </li>
                                <li styled="true">
                                    {/* <a style={{color: "black"}} onClick={ this.handleClick.bind(this, "DataGuidence") }>Data Guidence</a> */}
                                    <button type="button" className="link-button" style={{ backgroundColor: "transparent", color: "black", border: "none" }} onClick={ this.handleClick.bind(this, "DataGuidence") }>Data Guidence</button>
                                </li>
                                <li styled="true">
                                    {/* <a style={{color: "black"}} onClick={ this.handleClick.bind(this, "Contact") }>Contact</a> */}
                                    <button type="button" className="link-button" style={{ backgroundColor: "transparent", color: "black", border: "none" }} onClick={ this.handleClick.bind(this, "Contact") }>Contact</button>
                                </li>
                                <i className="glyphicon glyphicon-search" style={{fontSize: "1.75em", color: "rgb(104, 103, 103)"}}></i>
                            </ul>
                            <input className="hidden black-text" type="text" name="Search" value=""/>
                            <i className="hidden glyphicon glyphicon-search" style={{fontSize: "1.75em", color: "rgb(104, 103, 103)"}}></i>
                            <div style={{textAlign: "center"}}>
                                <button className="hidden glyphicon glyphicon-search" style={{fontSize: "1.75em", color: "black", background: "transparent none repeat scroll 0% 0%", border: "medium none"}}></button>
                            </div>
                        </div>
                    
                    </nav>
                    <div id="index-banner" className="parallax-container">
                        <ul className="breadcrumb" style={{background: "transparent none repeat scroll 0% 0%", paddingLeft: "5%", color: "black"}}></ul>
                        <div className="section no-pad-bot">
                            <div className="container">
                                <br/><br/>
                                {/* <div>
                                    <h2 className="header center text-darken-4"></h2>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    { this.ContentFunc() }
                    {/* <div>
                        <div className="container widgets">
                            <div className="section">
                                <div className="row">
                                    <div className="col s12 m4">
                                        <div className="icon-block center">
                                            <button type="button" className="btn btn-primary" data-target="theme-modal">Search</button>
                                            <h4 className="center">TEST</h4>
                                            <p className="light center">Use simple or advanced tools to search for data meeting your criteria.</p>
                                        </div>
                                    </div>
                                    <div className="col s12 m4">
                                        <div className="icon-block center">
                                            <button type="button" className="btn btn-primary" data-target="theme-modal">Themes</button>
                                            <h4 className="center">Explore Available Resources by Sector or Theme</h4>
                                            <p className="light center">Browse, preview, and access data and narratives in popular collections and in common themes.</p>
                                        </div>
                                    </div>
                                    <div className="col s12 m4">
                                        <div className="icon-block center">
                                            <button type="button" className="btn btn-primary" data-target="theme-modal">Contribute</button>
                                            <h4 className="center">Tell Us About Your Area of Interest</h4>
                                            <p className="light center">Register as a user and contribute data, assessments, and media.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="parallax-container valign-wrapper"></div>
                    </div> */}
                    <footer className="page-footer font-small indigo" style={{background: "rgb(0, 0, 255) none repeat scroll 0% 0%"}}>
                        <div className="row" style={{ marginLeft: "15px"}}>
                            <div className="col l3 s12">
                                <h5 className="white-text light"> Technology </h5>
                                <p className="white-text light"> The DST funds the SAEON Open Data Platform (ODP) and associated dissemination portals. Developed by SAEON on behalf of DST, DEA, and other stakeholders. </p>
                            </div>
                            <div className="col l3 s12">
                                <h5 className="white-text light"> SAEON ODP </h5>
                            </div>
                            <div className="col l3 s12">
                                <h5 className="white-text light"> Funding </h5>
                                <img src="https://drive.google.com/uc?id=0B18ulA7MmoWOcTQ0SkhIRDBVU3c" alt="img not loaded"/>
                            </div>
                            <div className="col l3 s12">
                                <h5 className="white-text light"> Legal </h5>
                                <ul>
                                    <div>
                                        <li>
                                            <a className="white-text light" href="https://#">Disclaimer </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a className="white-text light" href="https://#">Privacy </a>
                                        </li>
                                    </div>
                                    <div>
                                        <li>
                                            <a className="white-text light" href="https://#">Conditions of Use </a>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            )
    }
}

export default About;