import React,{Component} from 'react' ;
/**
 * Checkbox使用说明
 *   1.<Checkbox value="1" checked={checked} defaultChecked={true}>星期一</Checkbox>
 *     其中value,checked,defaultChecked均为可选，需注意【checked,defaultChecked】二选一
 * CheckboxGroup 使用说明 
 * 画原型界面阶段，我没可以不用使用标准的 value + onChange 使用，
 * 直接使用defaultValue='xxx'即可默认选中.
 * 当使用了value属性后，如果没有配合onChange组件值将会被锁定，不能被改变
 * 方式一:
 * options中必须传入数组，数组元素:
 *   1.当为string时，Checkbox的label和value都将是元素string字符串  
 *   2.{label:'',value:''} 键值对,Checkbox的label和value对应，
 *   如果value不存在，则value将与label相同,下面options中的三种元素均有效
 *    <CheckboxGroup value={this.state.applyWeek2} 
 *       options ={[{label:'label1',value:'1'},"2",{label:'label3'}]}
 *       onChange={this.handleChangeFactory('applyWeek2')}>
 *    </CheckboxGroup>
 * 方式二:
 *   当Checkbox的value缺省时，value将被置为与label相同，下面几种写法均有效
 *   (1)<CheckboxGroup value ={this.state.applyWeek}
 *           onChange={this.handleChangeFactory('applyWeek')}>
 *           <Checkbox value="1">星期一</Checkbox>
 *           <Checkbox value="2">星期二</Checkbox>
 *       </CheckboxGroup>
 *  (2)
 *     <CheckboxGroup defaultValue="2">
 *         <Checkbox value="1">星期一</Checkbox>
 *         <Checkbox value="2">星期二</Checkbox>
 *     </CheckboxGroup>
 * (3)
 *    <CheckboxGroup>
 *        <Checkbox value="1">星期一</Checkbox>
 *        <Checkbox value="2">星期二</Checkbox>
 *    </CheckboxGroup>
 */
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
        if(value == undefined){
            value = obj.label ;
        }
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
        let {options,defaultValue,children,disabled} = this.props ;
        let {value} = this.state ;
        if(options && options.length > 0){
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
        let retArr = [] ;
        React.Children.forEach(children,function(child,index){
            //value 为Checkbox组件的value或则是chidren值
            let curValue = child.props.value || child.props.children;
            let curChecked = checkArrayContainsElement(value,curValue) ;
            let newProps = {key:index,checked:curChecked,disabled,onChange:this.onCheckboxChange} ;
            retArr[index] = React.cloneElement(child,newProps) ;
        }.bind(this)) ;
        return (<span className="radio-group-container">{retArr}</span>) ;
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
    getCheckboxValue(){
        return this.refs.input.value ;
    }
    render(){
        let {children,value,disabled,onChange,checked,defaultChecked} = this.props ;
        if(value == undefined){
            value = children ;
        }
        return (
             <label className="radio-label hand">
                <input type="checkbox" 
                    value={value} 
                    ref="input"
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

