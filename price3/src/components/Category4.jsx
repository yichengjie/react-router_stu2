import  React,{Component} from 'react' ;
//import { Input,Button } from '../common/index.js';
import { Input,Button } from 'antd';


class Category4 extends Component {
  constructor(props){
    super(props) ;
  }
  render() {
    return (
      <div className="container">
          <Input style={{width:'150px'}} value={1} />
          <br/>
          <Button type="primary">button ceshi</Button>
      </div> 
    )
  }
}
export default Category4