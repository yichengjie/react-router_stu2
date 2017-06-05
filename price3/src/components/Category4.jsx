import  React,{Component} from 'react' ;
//import Input from './input/Input.jsx' ;
import{Input} from 'antd' ;
import Radio,{RadioGroup} from './radio/Radio.jsx' ;
import Checkbox,{CheckboxGroup} from './checkbox/Checkbox.jsx' ;
import PriceDiv from './PriceDiv.jsx' ;
let allWeekInfo = [{label:'星期一',value:"1"},'星期二','星期三','星期四','星期五','星期六','星期日'] ;
class Category4 extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            adviceType:'1',
            flightPlanApplyTo:"1",
            flightPlanApplyTo2:"2",
            applyWeek:["1"],
            applyWeek2:['星期二']
        } ;
    }

    // componentDidMount(){
    //     setTimeout(function(){
    //         this.setState({flightPlanApplyTo:"3",applyWeek:['1','2']}) ;
    //     }.bind(this),2000) ;
    // }
   
    handleChangeFactory(fieldName){
        return function(value){
            //console.info(`fieldName:${fieldName} , value : ${value}`) ;
            this.setState({[fieldName]:value}) ;
        }.bind(this) ;
    }

    render(){
        return (
            <div>
                <PriceDiv label ="公共信息">
                    <div className="row">
                        <select name="" id="">
                            <option value="1">不限</option>
                            <option value="2">适用</option>
                            <option value="3">不适用</option>
                        </select>
                        <label className="input-label ml10">机型</label>
                        <Input style={{width:"100px"}} value="222" />
                    </div>
                    <div className="row">
                         <select name="" id="">
                            <option value="1">可适用</option>
                            <option value="2">适用</option>
                            <option value="3">不适用</option>
                        </select>
                        <label className="input-label ml10">代码共享航班</label>
                        <label className="input-label ml10">承运人</label>
                        <Input style={{width:"100px"}} value="1" />
                    </div>
                </PriceDiv>
                <PriceDiv label ="去程信息">
                    <div className="row">
                        <label className="input-label">航班计划适用于</label>
                        <RadioGroup name ="flightPlanApplyTo" 
                            value={this.state.flightPlanApplyTo}
                            onChange={this.handleChangeFactory('flightPlanApplyTo')}
                            >
                            <Radio value="1">正班/加班</Radio>
                            <Radio value="2">正班</Radio>
                            <Radio value="3">加班</Radio>
                        </RadioGroup>
                    </div>
                    <div className="row">
                        <label className="input-label">航班号</label>
                        <select name="" id="">
                            <option value="1">不限</option>
                            <option value="2">适用</option>
                            <option value="3">不适用</option>
                        </select>
                        <span className="ml20"></span>
                        <Input type="text" style={{width:"100px"}}/>
                        <span className="mlr10">-</span>
                        <Input type="text"  style={{width:"100px"}}/>
                    </div>
                    <div className="row">
                        <label className="input-label">适用航段</label>
                        <select name="" id="">
                            <option value="1">不限</option>
                            <option value="2">适用</option>
                            <option value="3">不适用</option>
                        </select>
                    </div>
                    <div className="row">
                        <label className="input-label">适用星期</label>
                        <CheckboxGroup value ={this.state.applyWeek}
                            options={allWeekInfo}
                            onChange={this.handleChangeFactory('applyWeek')}>
                        </CheckboxGroup>
                    </div>
                    <div className="row">
                        <label className="input-label">适用时刻</label>
                        <Input type="text"  style={{width:"80px"}}/>
                        <span className="mlr5">-</span>
                        <Input type="text"  style={{width:"80px"}}/>
                        <span className="mlr10">
                            <i className="glyphicon glyphicon-plus hand grey"></i>
                        </span>
                        <span className="grey">最多10组</span>
                    </div>

                    <div className="row">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>序号</th>
                                    <th>航班号.从</th>
                                    <th>航班号.至</th>
                                    <th>是否适用</th>
                                    <th>适用航段</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>del</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </PriceDiv>
                <PriceDiv label ="回程信息" isHide ={true}>
                    <div className="row">
                        <label className="input-label">航班计划适用于</label>
                        <RadioGroup  
                            options ={[{label:'label1',value:'1'},"2","3"]} 
                            name ="flightPlanApplyTo2" 
                            value={this.state.flightPlanApplyTo2}
                            onChange ={this.handleChangeFactory('flightPlanApplyTo2')}
                            >
                        </RadioGroup>
                    </div>
                    <div className="row">
                        <label className="input-label">航班号</label>
                        <select name="" id="">
                            <option value="1">不限</option>
                            <option value="2">适用</option>
                            <option value="3">不适用</option>
                        </select>
                        <span className="ml20"></span>
                        <Input type="text"  style={{width:"100px"}}/>
                        <span className="mlr10">-</span>
                        <Input type="text"  style={{width:"100px"}}/>
                    </div>
                    <div className="row">
                        <label className="input-label">适用航段</label>
                        <select name="" id="">
                            <option value="1">不限</option>
                            <option value="2">适用</option>
                            <option value="3">不适用</option>
                        </select>
                    </div>
                    <div className="row">
                        <label className="input-label">适用星期</label>
                        <CheckboxGroup value={this.state.applyWeek2} 
                            options={allWeekInfo} 
                            onChange={this.handleChangeFactory('applyWeek2')}>
                        </CheckboxGroup>
                    </div>
                    <div className="row">
                        <label className="input-label">适用时刻</label>
                        <Input type="text"  style={{width:"80px"}}/>
                        <span className="mlr10">-</span>
                         <Input type="text"  style={{width:"80px"}}/>
                        <span className="mlr10">
                            <i className="glyphicon glyphicon-plus hand grey"></i>
                        </span>
                        <span className="grey">最多10组</span>
                    </div>

                    <div className="row">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>序号</th>
                                    <th>航班号.从</th>
                                    <th>航班号.至</th>
                                    <th>是否适用</th>
                                    <th>适用航段</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>del</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </PriceDiv>
            </div>
        )
    }
}
export default Category4 ;