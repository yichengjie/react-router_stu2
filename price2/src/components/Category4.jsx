import  React,{Component} from 'react'
import PriceDiv from './PriceDiv.jsx' ;
import {Select, Input,Row, Col} from 'antd';
const Option = Select.Option;

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
                    <Row>
                       <Col span={3}>
                            <Select value={this.state.adviceType} style={{ width: 120 }}
                              onChange={this.handleChange} >
                                <Option value="">不限</Option>
                                <Option value="1">限制</Option>
                            </Select>
                       </Col>
                       <Col span={2}><label>机型</label></Col>
                       <Col span={6}><Input /></Col>
                    </Row>
                     <h1>hello world 我会自动刷新哦</h1>
                </PriceDiv>

            </div>
        )
    }
}
export default Category4 ;