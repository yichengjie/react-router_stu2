import  React,{Component} from 'react' ;
import { Input,Radio  } from 'antd';
const RadioGroup = Radio.Group;
class HelloComp extends Component {
    constructor(props){
        super(props) ;
    }
    state = {
        name:'yicj',
        radio:3
    } ;
    render(){
        return (
            <div>
                <Input value ={this.state.value}/>
                <h1>hello world 我会自动刷新哦</h1>
                <RadioGroup  value={this.state.radio}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </RadioGroup>
            </div>
        )
    }
}
export default HelloComp