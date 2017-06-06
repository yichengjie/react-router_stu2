import  React,{Component} from 'react' ;
import { Input,Button } from '../common/index.js';

class HelloComp extends Component {
  constructor(props){
    super(props) ;
    this.state ={
      count:1
    } ;
    this.handleAddOper = this.handleAddOper.bind(this) ;
  }
  setSyncState(state){
     return new Promise(function(resolve){
         this.setState(state,resolve) ;
     }.bind(this)) ;
  }

  async handleAddOper (value){
     //this.setState(newState) ;
     await this.setSyncState({count:this.state.count+1}) ;

     await this.setSyncState({count:this.state.count+1}) ;

     await this.setSyncState({count:this.state.count+1}) ;
  }
  render() {
    return (
      <div>
        <Input style={{width:'160px'}}
           value={this.state.count} 
           placeholder="请输入内容"
           onChange={this.handleChangeInput}
            />
          <Button type="info" onClick ={this.handleAddOper}>Add</Button>
      </div> 
    )
  }
}
export default HelloComp