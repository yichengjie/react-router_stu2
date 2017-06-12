import  React,{Component} from 'react'
import Siderbar from './Siderbar.jsx' ;
// 引入React-Router模块
import { HashRouter, Route} from 'react-router-dom' ;

class HelloComp extends Component {
    render(){
        return (
            <HashRouter >
                <Route path="/" component={Siderbar}>
                </Route>
            </HashRouter>
        )
    }
}
export default HelloComp