import React,{Component} from 'react' ;
import BaseListGroup from './BaseListGroup.jsx' ;
import {Link,withRouter} from 'react-router-dom' ;
class JCFListGroup extends BaseListGroup {
    renderListGroup(){
        let {match} = this.props ;
        return (
            <ul className ="list_group">
                <li className="list_item" >
                    <Link to={`${match.url}/test01`}>测试1</Link>
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
}

export default withRouter(JCFListGroup) ;