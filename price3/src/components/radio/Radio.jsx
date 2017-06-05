import React,{Component} from 'react' ;
import shallowEqual from 'shallowequal';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style/index.jsx' ;
/**
 * Radio使用说明
 *   1.<Radio value="1" checked={checked} defaultChecked={true}>星期一</Radio>
 *     其中value,checked,defaultChecked均为可选，需注意【checked,defaultChecked】二选一
 * RadioGroup 使用说明 
 * 画原型界面阶段，我没可以不用使用标准的 value + onChange 使用，
 * 直接使用defaultValue='xxx'即可默认选中.
 * 当使用了value属性后，如果没有配合onChange组件值将会被锁定，不能被改变
 * 方式一:
 * options中必须传入数组，数组元素:
 *   1.当为string时，Radio的label和value都将是元素string字符串  
 *   2.{label:'',value:''} 键值对,Radio的label和value对应，
 *   如果value不存在，则value将与label相同,下面options中的三种元素均有效
 *    <RadioGroup  
 *           options ={[{label:'label1',value:'1'},"2",{label:'label3'}]} 
 *           name ="flightPlanApplyTo2" 
 *           value={this.state.flightPlanApplyTo2}
 *           onChange ={this.handleChangeFactory('flightPlanApplyTo2')}
 *       >
 *   </RadioGroup>
 * 方式二:
 *   当Radio的value缺省时，value将被置为与label相同，下面几种写法均有效
 *   (1)<RadioGroup name ="flightPlanApplyTo" 
 *         value={this.state.flightPlanApplyTo}
 *         onChange={this.handleChangeFactory('flightPlanApplyTo')}
 *         >
 *         <Radio value="1">正班/加班</Radio>
 *         <Radio value="2">正班</Radio>
 *         <Radio value="3">加班</Radio>
 *       </RadioGroup>
 *  (2)<RadioGroup name ="flightPlanApplyTo" 
 *        defaultValue="2"
 *       >
 *       <Radio value="1">正班/加班</Radio>
 *       <Radio value="2">正班</Radio>
 *       <Radio value="3">加班</Radio>
 *    </RadioGroup>
 * (3)<RadioGroup name ="flightPlanApplyTo">
 *       <Radio>正班/加班</Radio>
 *       <Radio>正班</Radio>
 *       <Radio>加班</Radio>
 *    </RadioGroup>
 */
/**
 * <label class="ant-radio-wrapper">
 *      <span class="ant-radio">
 *          <input type="radio" class="ant-radio-input" value="on">
 *          <span class="ant-radio-inner"></span>
 *      </span>
 *      <span>Radio</span>
 * </label>
 */
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

export class RadioGroup extends Component{
    static defaultProps = {
        options: [],
        prefixCls: 'ant-radio-group',
    };
    static propTypes = {
        defaultValue: PropTypes.array,
        value: PropTypes.string,
        options: PropTypes.array.isRequired,
        onChange: PropTypes.func,
    };
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
        if(this.props.value == undefined){
             this.setState({value}) ;
        }
        let {onChange} = this.props ;
        onChange && onChange(value) ;
    }
    render(){
        let props = this.props ;
        let {children,name,onChange,options,disabled} = props ;
        let {className,prefixCls} = this.props ;
        const classString = classNames(prefixCls, className);
        // 如果存在 options, 优先使用
        if (options && options.length > 0) {
            children = options.map((option, index) => {
                let obj = analysisLabelValueObj(option) ;
                let curValue = obj.value ;
                let curLabel = obj.label ;
                return (<Radio
                        key={index}
                        disabled={disabled}
                        value={curValue}
                        onChange={this.onRadioChange}
                        checked={curValue === option}
                        >
                        {curLabel}
                    </Radio>) ;
            });
            return <span className={classString}>{children}</span> ;
        }

        let retArr = [] ;
        let {value} = this.state ;
        React.Children.forEach(children,function(radio,index){
            let curValue = radio.props.value || radio.props.children;
            let checked = false;
            if(curValue === value){
                checked = true ;
            }
            let newProps = {name,key:index,checked,disabled,onChange:this.onRadioChange} ;
            retArr[index] = React.cloneElement(radio,newProps) ;
        }.bind(this)) ;
        return (<span className={classString}>{retArr}</span>) ;
    }
}



class Radio extends Component{
    static defaultProps = {
        prefixCls: 'ant-radio',
    };
    static propTypes = {
        defaultValue: PropTypes.string,
        value: PropTypes.string,/**页面上的值统一看着string不做数字的特殊处理 */
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
        checked: PropTypes.bool,
        defaultChecked: PropTypes.bool,
    };
    constructor(props){
        super(props) ;
        this.handleChange = this.handleChange.bind(this) ;
    }
    handleChange(e){
        let value = e.target.value +'';
        this.props.onChange(value) ;
    }
    render(){
        let {children,name,value,checked,disabled,defaultChecked} = this.props ;
        let {prefixCls,className} = this.props ;
        if(value == undefined){
            value = children ;
        }
        
        const radioClass = classNames(prefixCls,{
            [`${prefixCls}-checked`]:checked
        });
        const inputClassName = classNames(className,{[`${prefixCls}-input`]:true}) ;
        return (
            <label className={`${prefixCls}-wrapper`}>
                <span className={radioClass}>
                    <input type ="radio" 
                        className={inputClassName}
                        defaultChecked={defaultChecked}
                        checked={checked}
                        name = {name} 
                        value ={value}
                        disabled={disabled} 
                        onChange={this.handleChange}/>
                     <span className={`${prefixCls}-inner`}></span>
                </span>
                <span>{children}</span>
            </label>
        ) ;
    }
}

Radio.RadioGroup = RadioGroup ;
export default Radio ;
