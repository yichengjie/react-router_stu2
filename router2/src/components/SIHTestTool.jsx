import  React,{Component} from 'react' ;
import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;
class SIHTestTool extends Component {
    render(){
        return (
            <Tabs defaultActiveKey="2">
                <TabPane tab={<span><Icon type="question-circle-o" />信息显示页面</span>} key="1">
                    Tab 1
                </TabPane>
                <TabPane tab={<span><Icon type="setting" />MQ参数配置</span>} key="2">
                    Tab 2
                </TabPane>
            </Tabs>
        )
    }
}
export default SIHTestTool