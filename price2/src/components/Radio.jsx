import React,{Component} from 'react' ;
import shallowEqual from 'shallowequal';

export class RadioGroup extends Component{
    constructor(props){
        super(props) ;
        let {value} = props ;
        this.state = {
            value
        } ;
        this.handleChange = this.handleChange.bind(this) ;
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqual(this.props, nextProps) ||
        !shallowEqual(this.state, nextState);
    }
    //当接受到新的值的时候
    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value,
            });
        }
    }
    handleChange(value) {
        this.setState({value}) ;
        let {onChange} = this.props ;
        onChange && onChange(value) ;
    }
    render(){
        let retArr = [] ;
        let {children,name,onChange} = this.props ;
        let {value} = this.state ;
        React.Children.forEach(children,function(radio,index){
            let curValue = radio.props.value ;
            let checked = false;
            if(curValue === value){
                checked = true ;
            }
            let newProps = {name,key:index,checked,onChange:this.handleChange} ;
            retArr[index] = React.cloneElement(radio,newProps) ;
        }.bind(this)) ;
        return (<span className="radio-group-container">{retArr}</span>) ;
    }
}

class Radio extends Component{
    constructor(props){
        super(props) ;
        this.handleChange = this.handleChange.bind(this) ;
    }
    handleChange(e){
        let value = e.target.value +'';
        this.props.onChange(value) ;
    }
    render(){
        let {children,name,value,checked} = this.props ;
        return (
            <label className="radio-label">
                <input type ="radio" 
                    checked={checked}
                    name = {name} 
                    value ={value} 
                    onChange={this.handleChange}/>
                <span>{children}</span>
            </label>
        ) ;
    }
}

Radio.RadioGroup = RadioGroup ;
export default Radio ;