import  React,{Component} from 'react'
import { BrowserRouter as Router,Route} from 'react-router-dom' ;
import Navbar from './Navbar.jsx' ;
class App extends Component {
    render(){
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <div className="main-content">
                        <div className="content-left">
                            <h1>左侧内容区域</h1>
                        </div>
                        <div className="content-right">
                            <h2>右侧内容区域</h2>
                        </div>
                    </div>
                  </div>
            </Router>
        )
    }
}
export default App