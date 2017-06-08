import  React,{Component} from 'react' ;
import FlightInfoItem from './FlightInfoItem.jsx' ;
import moment from 'moment';
import {Select,Input,Radio,Checkbox,Icon,Button,TimePicker,message} from 'antd';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const CheckboxGroup = Checkbox.Group;

const format = 'HH:mm';

function CategorySection (props){
    return (
        <div className="category-section-title">
            <span className="title">{props.children}</span>
        </div>
    ) ; 
}

const options = [
  { label: '星期一', value: '1' },
  { label: '星期二', value: '2' },
  { label: '星期三', value: '3' },
  { label: '星期四', value: '4' },
  { label: '星期五', value: '5' },
  { label: '星期六', value: '6' },
  { label: '星期日', value: '7' },
];


function getChangeValue(event){
    if(event && event.target){
        return event.target.value ;
    }
    return event ;
}

class Category4 extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            formData:{
                modelType:'' , //机型
                modelCode:'',  //机型代码       
                codeShareFlightType:'',//代码共享航班类型
                codeShareFlightCode:'',//代码共享航班代码
                timeRangeList:[
                    {start:'11:30',end:'12:10'},
                ],
                flightType:'1',//航班类型，1:去程航班，2:回程航班
                flightPlanApplyType:'',//航班计划适用于
                flightNoType:'',//航班号
                flightNoCodeStart:'',//航班号起始值
                flightNoCodeEnd:'',//航班号结束
                flightApplyRangeType:'',//适用航段类型
                flightApplyWeek:[]
            },
            flightList1:[],//去程信息
            flightList2:[]//回程信息
        } ;
    }

    handleSimpleFieldChangeFactory(fieldName){
        let formData = this.state.formData ;
        return (event) => {
            let value = getChangeValue(event) ;
            let newFormData = Object.assign({},formData,{[fieldName]:value}) ; 
            this.setState({formData:newFormData}) ;
        }
    }


    getSimpleFieldProps(fieldName){
        let formData = this.state.formData ;
        let value = formData[fieldName] ;
        let onChange = this.handleSimpleFieldChangeFactory(fieldName) ;
        return {value,onChange} ;
    }

    handleAddTimeGroup = () =>{
        let formData = this.state.formData ;
        let timeRangeList = [...formData.timeRangeList] ;
        if(timeRangeList.length < 10){
            timeRangeList.push({start:'',end:''}) ;
            let newFormData = Object.assign({},formData,{timeRangeList}) ;
            this.setState({formData:newFormData}) ;
        }else{
            message.error('最多添加10组!');
        }
    }
    handleDeleteTimeGroup = (index)=>{
       let formData = this.state.formData ;
       let timeRangeList = [...formData.timeRangeList] ;
       timeRangeList.splice(index,1) ;
       let newFormData = Object.assign({},formData,{timeRangeList}) ;
       this.setState({formData:newFormData}) ;
    }
    handleChangeTimeGroup = (index,fieldName,value) =>{
       let formData = this.state.formData ;
       let timeRangeList = [...formData.timeRangeList] ;
       let oldObj = timeRangeList[index] ;
       oldObj[fieldName] = value ;
       let newFormData = Object.assign({},formData,{timeRangeList}) ;
       this.setState({formData:newFormData}) ;
    }
    //添加航班信息
    handleAddFlightInfo = (e) => {

    }

    render(){
        let formData = this.state.formData ;
        let gsfp = this.getSimpleFieldProps.bind(this) ;
        return (
            <div className="category-container">
               <CategorySection>基础信息</CategorySection>
               <div className="category-section-row">
                   <label className="mr15">机型</label>
                   <Select {...gsfp('modelType')} style={{ width: "100px" }} >
                      <Option value="">不限</Option>
                      <Option value="1">适用</Option>
                      <Option value="2">不适用</Option>
                   </Select>
                   <span className="mr10"></span>
                   <Input style={{width:"150px"}}  {...gsfp('modelCode')} />
                       
                   <span className="mlr15"></span>

                   <label className="mlr15">代码共享航班</label>
                   <Select style={{ width: "100px" }} {...gsfp('codeShareFlightType')}  >
                      <Option value="">可适用</Option>
                      <Option value="1">不适用</Option>
                      <Option value="2">仅适用</Option>
                   </Select>
                   <span className="mr15"></span>
                   <Input style={{width:"150px"}}  {...gsfp('codeShareFlightCode')} 
                         placeholder="承运人"/> 
               </div>
               
               <CategorySection>航班信息</CategorySection>
                 <div className="category-section-row">
                    <RadioGroup {...gsfp('flightType')}>
                        <RadioButton value="1">去程航班</RadioButton>
                        <RadioButton value="2">回程航班</RadioButton>
                    </RadioGroup>

                    <span className="float-right">
                        <Button type="primary" onClick={this.handleAddFlightInfo}>添加</Button>
                    </span>
                 </div> 
                 <div className="category-section-row">
                    <label className="mr20">航班计划适用于</label>
                    <RadioGroup {...gsfp('flightPlanApplyType')}>
                        <Radio value="">正班/加班</Radio>
                        <Radio value="1">正班</Radio>
                        <Radio value="2">加班</Radio>
                    </RadioGroup>

                    <span className="mlr10"></span>

                    <label className="mlr10">航班号</label> 
                    <Select {...gsfp('flightNoType')}
                        style={{ width: "90px" }} >
                        <Option value="">不限</Option>
                        <Option value="1">适用</Option>
                        <Option value="2">不适用</Option>
                    </Select>
                    <span className="ml10"></span>
                    <Input style={{width:'60px'}} {...gsfp('flightNoCodeStart')} />
                    <span className="mlr5">-</span>
                    <Input style={{width:'60px'}} {...gsfp('flightNoCodeEnd')}/>
                    
                    <span className="mlr10"></span>
                    <label className="mlr10">适用航段</label> 
                    <Select {...gsfp('flightApplyRangeType')} 
                        style={{ width: "90px" }} >
                      <Option value="">不限</Option>
                      <Option value="1">适用</Option>
                      <Option value="2">不适用</Option>
                    </Select>
               </div>
               
               <div className="category-section-row">
                    <label className="mr20">适用星期</label>
                    <CheckboxGroup options={options}  
                        className="inline-block"
                        {...gsfp('flightApplyWeek')}/>
               </div>
               <div className="category-section-row">
                    <label className="mr20 label">适用时刻</label>
                    <ApplyTimeRangeList list={formData.timeRangeList} 
                        onDelete={this.handleDeleteTimeGroup} 
                        onChange={this.handleChangeTimeGroup}/>
                    <span className="label oper-bg" 
                        onClick={this.handleAddTimeGroup}>
                       <Icon type="plus" />
                    </span>
                    <span className="label ml5 color-grey">限最多10组</span>
               </div>

               <div className="category-section-row">
                    <FlightInfoItem />
               </div>
              
            </div>
        )
    }
}
export default Category4 ;


function getFormatDateStr(str){
    if(str && str.length > 0 ){
        return moment(str, format) ;
    }  
    return  null; 
}

class ApplyTimeRangeItem extends Component{
    handleDelete = () => {
        let index = this.props.index ;
        this.props.onDelete(index) ;
    }
    handleChangeFactory(fieldName){
        let {index} = this.props ;
        return (time,timeStr) => {
           this.props.onChange(index,fieldName,timeStr) ;
        } ;
    }
    render(){
        let {start,end} = this.props;
        return (
            <span className="mr20 category-input-list-item">
                <TimePicker  style={{width:'90px'}} 
                    value = {getFormatDateStr(start)}
                    onChange={this.handleChangeFactory('start')}
                    format={format}  />
                <span className="mlr5">-</span>
                <TimePicker  style={{width:'90px'}} 
                    value={getFormatDateStr(end)} 
                    onChange={this.handleChangeFactory('end')}
                    format={format} />
                <Icon type="delete" className="hand ml5" 
                    onClick={this.handleDelete} />
            </span>
        ) ;
    }
}

class ApplyTimeRangeList extends Component {
    renderAllGroup(){
        let {list,onDelete,onChange} = this.props ;
        let retObj = null ;
        if(list && list.length > 0){
            retObj = list.map(function(item,index){
                let {start,end} = item;
                return (
                    <ApplyTimeRangeItem 
                        onDelete={onDelete} 
                        index={index}
                        onChange={onChange}
                        start={start} end={end}  
                        key ={index}/>
                )
            }) ;
        }
        return retObj ;
    }

    render(){
        return (
            <div className="category-input-list-container">
                {this.renderAllGroup()}
            </div>
        ) ;
    }
}