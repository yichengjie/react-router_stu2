import React,{Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom' ;
import Home from './Home.jsx' ;
import About from './About.jsx' ;
import Navbar from './Navbar.jsx' ;
import ListGroup from './ListGroup.jsx' ;
import MainContent from './MainContent.jsx' ;

class UnifiedInterfaceTestPlatform extends  Component{


  render(){
    // but you can use a location instead
    return (
        <Router>
          <div className="App">
              <div className="header">
                  <Navbar />
              </div>
              <div className="main-content">
                <div className="content-left">
                  <ListGroup />
                </div>
                <div className="content-right">
                  <Route exact  path="/" component={Home}/>
                  <Route exact path="/home" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/main" component={MainContent}/>
                </div>
              </div>
          </div>
        </Router>
      ) ;
  }
}
export default UnifiedInterfaceTestPlatform ;