import  React,{Component} from 'react' ;
var notification = Notification.newInstance();
class HelloComp extends Component {
    handleClick(){
        notification.notice({
            content: 'content'
        });
    }
    render(){
        return (
            <div>
                <h1>hello world fdfsd sdd</h1>
                <button onClick={this.handleClick}>best wishes</button>
            </div>
        )
    }
}
export default HelloComp