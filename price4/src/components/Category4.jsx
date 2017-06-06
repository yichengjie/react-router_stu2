import  React,{Component} from 'react' ;
import {Select,Input,Radio,Checkbox,Icon,Button,Table} from 'antd';
const Option = Select.Option;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;


function CategorySection (props){
    return (
        <div className="category-section-title">
            <h5>{props.children}</h5>
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
}];


class Category4 extends Component {
    render(){
        return (
            <div className="category-container">
               <CategorySection>公共信息</CategorySection>
               <div className="category-section-row">
                   <Select defaultValue="" style={{ width: "120px" }} >
                      <Option value="">不限</Option>
                      <Option value="1">适用</Option>
                      <Option value="2">不适用</Option>
                   </Select>
                   <label className="mlr15">机型</label>
                   <Input style={{width:"150px"}}/>
                </div>
                <div className="category-section-row">
                    <Select defaultValue="" style={{ width: "120px" }} >
                      <Option value="">可适用</Option>
                      <Option value="1">不适用</Option>
                      <Option value="2">仅适用</Option>
                   </Select>
                   <label className="mlr15">代码共享航班</label>
                   <label className="mlr15">承运人</label>
                   <Input style={{width:"150px"}}/> 
                </div>
               <CategorySection>去程信息</CategorySection> 
               <div className="category-section-row">
                    <label className="mr20">航班计划适用于</label>
                    <RadioGroup defaultValue={2}>
                        <Radio value={1}>正班/加班</Radio>
                        <Radio value={2}>正班</Radio>
                        <Radio value={3}>加班</Radio>
                    </RadioGroup>
               </div>
               <div className="category-section-row">
                  <label className="mr20">航班号</label> 
                  <Select defaultValue="" style={{ width: "120px" }} >
                      <Option value="">不限</Option>
                      <Option value="1">适用</Option>
                      <Option value="2">不适用</Option>
                  </Select>
                  <span className="mlr15"></span>
                  <Input style={{width:'60px'}} />
                  <span className="mlr5">-</span>
                  <Input style={{width:'60px'}} />
               </div>
               <div className="category-section-row">
                   <label className="mr20">适用航段</label> 
                   <Select defaultValue="" style={{ width: "120px" }} >
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
                    <Input style={{width:'60px'}} />
                    <span className="mlr5">-</span>
                    <Input style={{width:'60px'}} />
                    <span className="mlr15">
                        <Button shape="circle" icon="plus" />
                    </span>
               </div>

               <div className="category-section-row">
                    <Table dataSource={dataSource} size="small" 
                        columns={columns} pagination={false}
                        bordered={true}/>
               </div>
               
            </div>
        )
    }
}
export default Category4 ;