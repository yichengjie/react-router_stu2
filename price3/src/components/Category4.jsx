import  React,{Component} from 'react' ;
import { Input,Button ,DatePicker,Select} from '../common/index.js';
//import { Input,Button ,DatePicker,Select} from 'antd';
let options = [{
      value: '选项1',
      label: '黄金糕'
    }, {
      value: '选项2',
      label: '双皮奶'
    }, {
      value: '选项3',
      label: '蚵仔煎'
    }, {
      value: '选项4',
      label: '龙须面'
    }, {
      value: '选项5',
      label: '北京烤鸭'
}] ;

function onChange(date, dateString) {
  console.log(date, dateString);
}

class Category4 extends Component {
  constructor(props){
    super(props) ;
  }
  render() {
    return (
      <div className="container">
          <Input style={{width:'200px'}} />
          <br/>
          <br/>
          <DatePicker onChange={onChange} value= {new Date(2017,5,9)}/>
          <br/>
          <Select value={''} >
            {
              options.map(el => {
                return <Select.Option key={el.value} label={el.label} value={el.value} />
              })
            }
          </Select>
          <br/>
          <Button type="primary">button ceshi</Button>
      </div> 
    )
  }
}
export default Category4