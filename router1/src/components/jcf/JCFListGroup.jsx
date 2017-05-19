import React,{Component} from 'react' ;
import {Route,Link,withRouter} from 'react-router-dom' ;
import SIHTestTool from './SIHTestTool.jsx' ;
import JCFListGroupContent2 from './JCFListGroupContent2.jsx' ;
import JCFListGroupContent3 from './JCFListGroupContent3.jsx' ;
class JCFListGroup extends Component {
    renderListGroup(){
        let {match} = this.props ;
        return (
            <ul className ="list_group">
                <li className="list_item" >
                    <Link to={`${match.url}/sih-test-tool`}>SIHTestTool</Link>
                </li>
                <li className="list_item" >
                    <Link to={`${match.url}/test02`}>测试2</Link>
                </li>
                 <li className="list_item">
                    <Link to={`${match.url}/test03`}>测试3</Link>
                </li>
            </ul> 
        ) ;        
    }
    renderListGroupContent(){
        let {match} = this.props ;
        let retArr = [] ;
        let r1 = <Route path={`${match.url}/sih-test-tool`} component={SIHTestTool}/> ;
        let r2 = <Route path={`${match.url}/test02`} component={JCFListGroupContent2}/> ;
        let r3 = <Route path={`${match.url}/test03`} component={JCFListGroupContent3}/> ;
        let r4 = <Route exact path={match.url} render={() => (
                    <h3>请选择测试项目.</h3>
                )}/> ;
        retArr.push(r1) ;  
        retArr.push(r2) ; 
        retArr.push(r3) ; 
        retArr.push(r4) ;     
        return retArr ;
    }
    render(){
        return (
            <div className="main-content">
                <div className="content-left">
                    {this.renderListGroup()}
                </div>
                <div className="content-right">
                    {this.renderListGroupContent()}
                </div>
            </div>
         )
    } ;
}

export default withRouter(JCFListGroup) ;