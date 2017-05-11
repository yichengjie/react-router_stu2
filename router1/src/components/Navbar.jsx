import React,{Component} from 'react' ;
import {Link,withRouter} from 'react-router-dom' ;
import PropTypes from 'prop-types'; // ES6 
class Navbar extends Component{
   static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    isActiveLi(liName,pathname){
        if(liName === pathname){
            return true ;
        }
        return false ;
    }

    getActiveClassObj(liName){
        return function(pathName){
            //console.info(`liName : ${liName} , pathName : ${pathName}`) ;
            const className = this.isActiveLi(liName,pathName) ? 'active' : '' ;
            return {className} ;
        }.bind(this) ;
    }

    render(){
        const {location} = this.props ;
        const pathname = location.pathname ;
        
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Brand</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
                        <ul className="nav navbar-nav">
                            <li {...this.getActiveClassObj('/home')(pathname)}><Link to="/home">主页</Link></li>
                            <li {...this.getActiveClassObj('/jcf')(pathname)}><Link to="/jcf">JCF相关接口测试</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        ) ;
    }
}

export default withRouter(Navbar)  ;