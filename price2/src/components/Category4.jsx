import  React,{Component} from 'react' ;
import Input from './Input.jsx' ;
import Radio,{RadioGroup} from './Radio.jsx' ;
import PriceDiv from './PriceDiv.jsx' ;

class Category4 extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            adviceType:'1'
        } ;
    }
    handleChange = (value)=>{
        this.setState({adviceType:value}) ;
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
                        <RadioGroup name ="xxx" value="2">
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
                        <input type="text"/>
                        <span className="mlr10">-</span>
                        <input type="text"/>
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
                        <label className="radio-label">
                            <input type="checkbox"/><span>星期一</span>
                        </label>
                        <label className="radio-label">
                            <input type="checkbox"/><span>星期二</span>
                        </label>
                        <label className="radio-label">
                            <input type="checkbox"/><span>星期三</span>
                        </label>
                        <label className="radio-label">
                            <input type="checkbox"/><span>星期四</span>
                        </label>
                        <label className="radio-label">
                            <input type="checkbox"/><span>星期五</span>
                        </label>
                        <label className="radio-label">
                            <input type="checkbox"/><span>星期六</span>
                        </label>
                        <label className="radio-label">
                            <input type="checkbox"/><span>星期日</span>
                        </label>
                    </div>
                    <div className="row">
                        <label className="input-label">适用时刻</label>
                        <input type="text" style={{width:"50px"}}/>
                        <span className="mlr5">-</span>
                        <input type="text" style={{width:"50px"}}/>
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
                        <label className="radio-label">
                            <input type="radio" name="hbjhsyy2"/><span>正班/加班</span>
                        </label>
                        <label className="radio-label">
                            <input type="radio" name ="hbjhsyy2"/><span>正班</span>
                        </label>
                        <label className="radio-label">
                            <input type="radio" name ="hbjhsyy2"/><span>加班</span>
                        </label>
                    </div>
                    <div className="row">
                        <label className="input-label">航班号</label>
                        <select name="" id="">
                            <option value="1">不限</option>
                            <option value="2">适用</option>
                            <option value="3">不适用</option>
                        </select>
                        <span className="ml20"></span>
                        <input type="text"/>
                        <span className="mlr10">-</span>
                        <input type="text"/>
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
                        <label className="radio-label">
                            <input type="checkbox"/><span>星期一</span>
                        </label>
                        <label className="radio-label">
                            <input type="checkbox"/><span>星期二</span>
                        </label>
                        <label className="radio-label">
                            <input type="checkbox"/><span>星期三</span>
                        </label>
                        <label className="radio-label">
                            <input type="checkbox"/><span>星期四</span>
                        </label>
                        <label className="radio-label">
                            <input type="checkbox"/><span>星期五</span>
                        </label>
                        <label className="radio-label">
                            <input type="checkbox"/><span>星期六</span>
                        </label>
                        <label className="radio-label">
                            <input type="checkbox"/><span>星期日</span>
                        </label>
                    </div>
                    <div className="row">
                        <label className="input-label">适用时刻</label>
                        <input type="text"/>
                        <span className="mlr10">-</span>
                        <input type="text"/>
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