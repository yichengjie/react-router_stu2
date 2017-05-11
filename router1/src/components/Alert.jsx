import React,{Component} from 'react' ;

let success = "success" ;
let info = "info" ;
let warning = "warning" ;
let danger = "danger" ;

export const AlertType = {
    success,
    info,
    warning,
    danger
} ;

class Alert extends Component{

    componentWillReceiveProps (nextProps) {
        let {show} = nextProps ;
        if(show){
            setTimeout(function(){
                this.props.hideAlertFn() ;
            }.bind(this),3000) ;
        }
    }
   
    getAlertClassName (type){
        let tmpStr = "alert-info" ;
        let arr = [success,info,warning,danger] ;
        if(arr.includes(type)){
        tmpStr = 'alert-'+type ; 
        }
        return 'alert alert-dismissible ' + tmpStr ;
    }
    render(){
        let {show,msg,type} = this.props ;
        if(!show) return null ;
        return (
            <div className="alert-container">
                <div className={this.getAlertClassName(type)} role="alert">
                    <button type="button" className="close" data-dismiss="alert" 
                        aria-label="Close" onClick={this.props.hideAlertFn}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {msg ? msg : '提示信息'}
                </div>
            </div>
        ) ;
    } 
} 

export default Alert ;