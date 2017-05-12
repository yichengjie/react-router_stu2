import React,{Component} from 'react' ; 

class ProgressBar extends Component{
    constructor(props){
        super(props) ;
        this.state = {
            progressNum:1
        } ;
    }
    componentDidMount(){
       this.timer = window.setInterval(function(){
          if(this.state.progressNum === 99){
            window.clearInterval(this.timer) ;
          }else{
            this.setState(function(prevState){
                let progressNum = prevState.progressNum + 1 ;
                return Object.assign({},prevState,{progressNum}) ;
            }) ; 
          }
       }.bind(this),50) ;  
    }

    componentWillReceiveProps(newProp){
        let {queryingFlag} = newProp ;
        if(queryingFlag === false){
             window.clearInterval(this.timer) ;
        }
    }

    componentWillUnmount(){
        window.clearInterval(this.timer) ;
    }

    render(){
        let {progressNum} = this.state ;
        let tmpStr = progressNum + "%" ;
        let style = {width: tmpStr} ;
        return (
            <div className="progress">
                <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="60" 
                    aria-valuemin="0" aria-valuemax="100" style={style}>
                    {tmpStr}
                </div>
            </div>
        ) ;
    }
}

export default ProgressBar ;