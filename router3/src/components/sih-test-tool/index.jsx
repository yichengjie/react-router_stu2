import  React,{Component} from 'react' ;
import { Tabs, Icon } from 'antd';
import ShowInfoPage from './ShowInfoPage.jsx' ;
import MQParamCfgPage from './MQParamCfgPage.jsx' ;

const TabPane = Tabs.TabPane;
class SIHTestTool extends Component {
    constructor(props){
        super(props) ;
        this.state = {
           formData:{},
        } ;
    }

   

    render(){
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab={<span><Icon type="question-circle-o" />信息显示页面</span>} key="1">
                    <ShowInfoPage formData ={this.state.formData} />
                </TabPane>
                <TabPane tab={<span><Icon type="setting" />MQ参数配置</span>} key="2">
                    <MQParamCfgPage formData = {this.state.formData} />
                </TabPane>
            </Tabs>
        )
    }
}
export default SIHTestTool