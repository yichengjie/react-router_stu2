import  React,{Component} from 'react' ;
var classNames = require('classnames');
class PriceDiv extends Component {
    constructor(props){
        super(props) ;

        this.state = {
            isHide:false
        } ;
    }
    static defaultProps = {
        label:'提示信息',
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
               <div className="price-div-title">
                    <span className="desc">{label}</span>
                    <i onClick={this.handleCollapseOper} className={iconClassName}>
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