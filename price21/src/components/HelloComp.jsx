import  React,{Component} from 'react' ;
import { Input } from 'antd';
class HelloComp extends Component {
    render(){
        return (
            <div>
                <Input placeholder="Basic usage" />
                <h1>hello world 我会自动刷新哦</h1>
            </div>
        )
    }
}
export default HelloComp