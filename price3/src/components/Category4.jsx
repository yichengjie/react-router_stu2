import  React,{Component} from 'react' ;
//import { Input,Button } from '../common/index.js';
import { Input,Button ,DatePicker} from 'antd';


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
          <DatePicker onChange={onChange} />
          <br/>
          <Button type="primary">button ceshi</Button>
      </div> 
    )
  }
}
export default Category4