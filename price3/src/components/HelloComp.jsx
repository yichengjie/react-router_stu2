import  React,{Component} from 'react' ;
import { Button } from '../common/index.js';

class HelloComp extends Component {
    render(){
        console.info('hello world sdf sdf') ;
        return (
            <div>
                <Button type="primary" size ="small" >test</Button>
                <h1>hello world fdfsd </h1>
            </div>
        )
    }
}
export default HelloComp