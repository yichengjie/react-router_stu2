import  React,{Component} from 'react' ;
import moment from 'moment';
import {Select,Input,Radio,Checkbox,Icon,Button,Table,TimePicker} from 'antd';
const Option = Select.Option;
const RadioGroup = Radio.Group;
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

const dataSource = [{
  key: '1',
  name1: '胡彦斌',
  name2: 32,
  name3: '西湖区湖底公园1号',
  name4: '西湖区湖底公园1号',
  name5: '西湖区湖底公园1号'
}, {
  key: '2',
  name1: '胡彦斌',
  name2: 32,
  name3: '西湖区湖底公园1号',
  name4: '西湖区湖底公园1号',
  name5: '西湖区湖底公园1号'
}];

const columns = [{
  title: '序号',
  dataIndex: 'name1',
  key: 'name1',
}, {
  title: '航班号.从',
  dataIndex: 'name2',
  key: 'name2',
}, {
  title: '航班号.至',
  dataIndex: 'name3',
  key: 'name3',
},{
    title: '是否适用',
    dataIndex: 'name4',
    key: 'name4',
},{
    title: '适用航段',
    dataIndex: 'name5',
    key: 'name5',
},{
  title: '操作',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">删</a>
      <span className="ant-divider" />
      <a href="#">改</a>
    </span>
  ),
}];


class Category4 extends Component {

    

    render(){
        return (
            <div className="category-container">
               <CategorySection>基础信息</CategorySection>
               <div className="category-section-row">
                   <label className="mr15">机型</label>
                   <Select defaultValue="" style={{ width: "100px" }} >
                      <Option value="">不限</Option>
                      <Option value="1">适用</Option>
                      <Option value="2">不适用</Option>
                   </Select>
                   <span className="mr10"></span>
                   <Input style={{width:"150px"}}/>

                   <span className="mlr15"></span>

                   <label className="mlr15">代码共享航班</label>
                   <Select defaultValue="" style={{ width: "100px" }} >
                      <Option value="">可适用</Option>
                      <Option value="1">不适用</Option>
                      <Option value="2">仅适用</Option>
                   </Select>
                   <span className="mr15"></span>
                   <Input style={{width:"150px"}} placeholder="承运人"/> 
                </div>
               
               <CategorySection>去程信息</CategorySection> 
               <div className="category-section-row">
                    <label className="mr20">航班计划适用于</label>
                    <RadioGroup defaultValue={2}>
                        <Radio value={1}>正班/加班</Radio>
                        <Radio value={2}>正班</Radio>
                        <Radio value={3}>加班</Radio>
                    </RadioGroup>

                    <span className="mlr10"></span>

                    <label className="mlr10">航班号</label> 
                    <Select defaultValue="" style={{ width: "100px" }} >
                        <Option value="">不限</Option>
                        <Option value="1">适用</Option>
                        <Option value="2">不适用</Option>
                    </Select>
                    <span className="ml10"></span>
                    <Input style={{width:'60px'}} />
                    <span className="mlr5">-</span>
                    <Input style={{width:'60px'}} />
                    
                    <span className="mlr10"></span>
                    <label className="mlr10">适用航段</label> 
                    <Select defaultValue="" style={{ width: "100px" }} >
                      <Option value="">不限</Option>
                      <Option value="1">适用</Option>
                      <Option value="2">不适用</Option>
                    </Select>
               </div>
               
               <div className="category-section-row">
                    <label className="mr20">适用星期</label>
                    <CheckboxGroup options={options}  className="inline-block"
                        defaultValue={['Apple']} 
                         />
               </div>
               <div className="category-section-row">
                    <label className="mr20">适用时刻</label>
                    <TimePicker  style={{width:'80px'}} 
                        defaultValue={moment('12:08', format)} 
                        format={format} />
                    <span className="mlr5">-</span>
                    <TimePicker  style={{width:'80px'}} 
                        defaultValue={moment('12:08', format)} 
                        format={format} />
                    <span className="ml15 oper-bg"><Icon type="plus" /></span>
               </div>

               <div className="category-section-row">
                    <Table dataSource={dataSource} 
                        size="small" style={{maxWidth:'830px'}}
                        columns={columns} pagination={false}
                        bordered={true}/>
               </div>
              
            </div>
        )
    }
}
export default Category4 ;