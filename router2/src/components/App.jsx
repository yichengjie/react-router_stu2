import  React,{Component} from 'react'
import { BrowserRouter as Router,Route} from 'react-router-dom' ;
import Navbar from './Navbar.jsx' ;
import Home from './Home.jsx' ;
import About from './About.jsx' ;
import JCFListGroup from './jcf/JCFListGroup.jsx' ;

class App extends Component {
    render(){
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <div className="main-container">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/home" component={Home}/>
                        <Route path="/jcf" component={JCFListGroup}/>
                        <Route path="/about" component={About}/>
                    </div>
                  </div>
            </Router>
        )
    }
}
export default App