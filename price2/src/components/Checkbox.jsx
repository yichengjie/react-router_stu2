import React,{Component} from 'react' ;

//<CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={onChange} />


function checkArrayContainsElement(arr,element){
    if(arr && arr.length > 0){
        if(arr.includes(element)){
            return true ;
        }
        return false; 
    }
    return false ;
}

//解析出label和value
function analysisLabelValueObj(obj){
    let value , label ;
    if(typeof obj === 'string'){
        value = obj ;
        label = obj ;
    }else{
        value = obj.value ;
        label = obj.label ;
    }
    return {label,value} ;
}

export class CheckboxGroup extends Component{
    constructor(props){
        super(props) ;
        let {value = [],defaultValue=[]} = props ;
        let newValue = value.concat(defaultValue) ;
        this.state = {
            value:newValue
        } ;
        this.onCheckboxChange = this.onCheckboxChange.bind(this) ;
    }
     //当接受到新的值的时候
    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: [...nextProps.value],
            });
        }
    }

    onCheckboxChange(value,checked){
        //console.info(`value: ${value},checked : ${checked}`) ;
        let {onChange} = this.props ;
        let arr = this.state.value ;
        if(checked){
            arr = arr.concat(value)
        }else{
            arr = arr.filter(function(item){
                return item !== value ;
            }) ;
        }
        //如果存在value属性的话，就必须的重写onChange方法配合使用
        if(this.props.value == undefined){
            this.setState({value:arr}) ;
        }
        onChange && onChange(arr) ;
    }


    render(){
        let {options,defaultValue,children} = this.props ;
        let {value} = this.state ;
        if(options && options.length > 0){
             let {disabled} = this.props ;
             children = options.map(function(option,index){
                let obj = analysisLabelValueObj(option) ;
                let curValue = obj.value ;
                let curLabel = obj.label ;
                let curChecked = checkArrayContainsElement(value,curValue) ;
                return (<Checkbox value ={curValue} 
                            key={index}
                            disabled={disabled}
                            checked={curChecked}
                            onChange={this.onCheckboxChange}>
                            {curLabel}
                        </Checkbox>
                );
            }.bind(this)) ;
            return <span className="radio-group-container">{children}</span> ;
        }
        return null ;
    }
}


class Checkbox extends Component{
    constructor(props){
        super(props) ;
        this.handleChange = this.handleChange.bind(this) ;
    }
    handleChange(e){
        let {value,checked} = e.target ;
        this.props.onChange(value,checked) ;
    }
    render(){
        let {children,value,disabled,onChange,checked,defaultChecked} = this.props ;
        return (
             <label className="radio-label hand">
                <input type="checkbox" 
                    value={value} 
                    disabled={disabled} 
                    onChange={this.handleChange}
                    checked={checked}
                    defaultChecked={defaultChecked}/>
                <span>{children}</span>
            </label>
        ) ;
    }
}

export default Checkbox ;