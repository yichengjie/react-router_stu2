import React,{Component} from 'react' ;
import shallowEqual from 'shallowequal';

export class RadioGroup extends Component{
    constructor(props){
        super(props) ;
        let {value,defaultValue,name} = props ;
        //console.info(`name:${name},value:${value},defaultValue:${defaultValue}`) ;
        if(defaultValue != undefined){
            value = defaultValue ; 
        }
        this.state = {
            value
        } ;
        this.onRadioChange = this.onRadioChange.bind(this) ;
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
    onRadioChange(value) {
        this.setState({value}) ;
        let {onChange} = this.props ;
        onChange && onChange(value) ;
    }
    render(){
        let props = this.props ;
        let {children,name,onChange,options,disabled} = props ;
        // 如果存在 options, 优先使用
        if (options && options.length > 0) {
            children = options.map((option, index) => {
                if (typeof option === 'string') { // 此处类型自动推导为 string
                return (
                    <Radio
                        key={index}
                        disabled={disabled}
                        value={option}
                        onChange={this.onRadioChange}
                        checked={this.state.value === option}
                        >
                        {option}
                    </Radio>
                );
                } else { // 此处类型自动推导为 { label: string value: string }
                    return (
                        <Radio
                            key={index}
                            disabled={option.disabled || this.props.disabled}
                            value={option.value}
                            onChange={this.onRadioChange}
                            checked={this.state.value === option.value}
                            >
                            {option.label}
                        </Radio>
                    );
                }
            });
        }

        let retArr = [] ;
        let {value} = this.state ;
        React.Children.forEach(children,function(radio,index){
            let curValue = radio.props.value ;
            let checked = false;
            if(curValue === value){
                checked = true ;
            }
            let newProps = {name,key:index,checked,disabled,onChange:this.onRadioChange} ;
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
        let {children,name,value,checked,disabled} = this.props ;
        return (
            <label className="radio-label hand">
                <input type ="radio" 
                    checked={checked}
                    name = {name} 
                    value ={value}
                    disabled={disabled} 
                    onChange={this.handleChange}/>
                <span>{children}</span>
            </label>
        ) ;
    }
}

Radio.RadioGroup = RadioGroup ;
export default Radio ;