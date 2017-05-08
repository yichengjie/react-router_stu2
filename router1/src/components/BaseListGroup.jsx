import React,{Component} from 'react' ;
import {Link,withRouter} from 'react-router-dom' ;
class BaseContent extends Component{
    render(){
        return (
            <div className="main-content">
                <div className="content-left">
                    {this.renderListGroup()}
                </div>
                <div className="content-right">
                    <h2>右侧内容区域</h2>
                </div>
            </div>
         )
    } ;
} 

export default BaseContent ;