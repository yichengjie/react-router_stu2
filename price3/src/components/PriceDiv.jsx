import  React,{Component} from 'react' ;
var classNames = require('classnames');
class PriceDiv extends Component {
    constructor(props){
        super(props) ;
        let isHide = this.props.isHide ;
        this.state = {
            isHide:isHide
        } ;
    }
    static defaultProps = {
        label:'提示信息',
        isHide:false
    }

    handleCollapseOper = (e) => {
        this.setState(function(preState){
            let newState = Object.assign({},preState,{isHide:!preState.isHide}) ;
            return newState;
        }) ;
    }

    render(){
        let hide = this.state.isHide ;
        let {children,label} = this.props ;
        let iconClassName = classNames('icon glyphicon', { "glyphicon-triangle-top": !hide,
            "glyphicon-triangle-bottom":hide }); // => 'foo bar' 
        let contentClassName = classNames('price-div-content',{
            'hide':hide
        }) ;
        return (
            <div className="price-div">
               <div className="price-div-title hand" onClick={this.handleCollapseOper}>
                    <span className="desc">{label}</span>
                    <i  className={iconClassName}>
                    </i>
               </div>
               <div className={contentClassName}>
                   {children}
               </div>
            </div>
        )
    }
}
export default PriceDiv ;