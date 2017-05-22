import  React,{Component} from 'react' ;
import { Tabs, Icon } from 'antd';
import ShowInfoPage from './ShowInfoPage.jsx' ;
import MQParamCfgPage from './MQParamCfgPage.jsx' ;

const TabPane = Tabs.TabPane;
class SIHTestTool extends Component {
    constructor(props){
        super(props) ;
        this.state = {
           inputValue:'',
           outputObj:null,
           isShowMsgPageFlag:true,
           formData:{},
           showAlertFlag:false,
           alertMsg:'',
           alertType:'',
           queryingFlag:false,
           reqHeaderObj:null/*请求头信息*/
        } ;
    }

    //处理请求信息修改的回掉函数
    handleChangeInputValue = (event) => {
        let value = event.target.value ;
        this.setState({inputValue:value}) ;
    }

    render(){
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab={<span><Icon type="question-circle-o" />信息显示页面</span>} key="1">
                    <ShowInfoPage inputValue={this.state.inputValue}  
                        outputObj={this.state.outputObj} 
                        handleChangeInputValue={this.handleChangeInputValue}/>
                </TabPane>
                <TabPane tab={<span><Icon type="setting" />MQ参数配置</span>} key="2">
                    <MQParamCfgPage />
                </TabPane>
            </Tabs>
        )
    }
}
export default SIHTestTool