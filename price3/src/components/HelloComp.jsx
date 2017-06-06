import  React,{Component} from 'react' ;
import { TimeSelect } from '../common/index.js';

class HelloComp extends Component {
    constructor(props) {
  super(props)
  this.state = {
    startDate: new Date(2016, 9, 10, 14, 30),
    endDate: new Date(2016, 9, 10, 15, 30)
  }
}

handleStartUpdate(startDate) {
  console.debug('time-select startDate update: ', startDate)
  this.setState({startDate})
}

handleEndUpdate(endDate){
  console.debug('time-select endDate update: ', endDate)
  this.setState({endDate})
}

render() {
  return (
    <div>
      <TimeSelect
        start="08:30"
        step="00:15"
        end="18:30"
        onChange={this.handleStartUpdate.bind(this)}
        value={this.state.startDate}
        placeholder="选择时间"
        />

      <TimeSelect
        start="08:30"
        step="00:15"
        end="18:30"
        onChange={this.handleEndUpdate.bind(this)}
        value={this.state.endDate}
        minTime={this.state.startDate}
        placeholder="选择时间"
        />
    </div>

  )
}
}
export default HelloComp