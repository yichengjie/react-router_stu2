import  React,{Component} from 'react' ;
import { TimeSelect } from '../common/index.js';

class HelloComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: new Date(2016, 9, 10, 14, 30),
        }
    }

    handleUpdate(value) {
        console.debug('time-select update: ', value)
    }

    render() {
        return (
            <TimeSelect
            start="08:30"
            step="00:15"
            end="18:30"
            maxTime="12:30"
            onChange={this.handleUpdate.bind(this)}
            value={this.state.value}
            placeholder="选择时间"
            />
        )
    }
}
export default HelloComp