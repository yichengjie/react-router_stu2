import React,{Component} from 'react' ;
import { Input,Button ,notification} from 'antd';
import SIHApi from './api/SIHTestToolAPI-test.js' ;


class ShowInfoPage extends Component {
    constructor(props){
        super(props) ;
        this.state = {
           inputValue:'',/**用户填写的请求信息 */
           queryingFlag:false,/**查询中flag */
           reqHeaderValue:'',/*mq的请求头信息*/
           outputObj:null,/**mq请求返回信息 */
        } 
        this.handleClickQueryBtn = this.handleClickQueryBtn.bind(this) ;
    }
   
    
    async componentDidMount(){
        let {inputData,flag} = await SIHApi.getSIHInputDataTemplate() ;
        let inputValue = JSON.stringify(inputData,null,2) ;
        let formData = SIHApi.getSIHFormData() ;
        this.setState({inputValue,formData}) ;
    }
    //处理请求信息修改的回掉函数
    handleChangeInputValue = (event) => {
        let value = event.target.value ;
        this.setState({inputValue:value}) ;
    }
    //当点击查询时的处理函数
    async handleClickQueryBtn (event){
        console.info('handleClickQueryBtn is called ..') ;
        let validFlag = this.__validateStrIsJson(this.state.inputValue) ;
        if(!validFlag){
           notification.error({message:"输入的JSON字符串不合法!"}) ;
           return false;
        }
        let waitInfo = {info:"数据加载中，请耐心等待..."} ; 
        this.setState({reqHeaderValue:'',outputObj:waitInfo}) ;

        let requestParamObj = {
            formDataValue:this.state.formData,
            inputValue:this.state.inputValue
        } ;
        let {outputData,reqMsgStr,flag} = await SIHApi.querySIHData(requestParamObj) ;
        this.setState({
            outputObj:outputData,
            reqHeaderValue:reqMsgStr
        }) ;
    }

    __validateStrIsJson(jsonStr){
        let flag = true ;
        try {
            JSON.parse(jsonStr) ;
        } catch (error) {
            flag = false;
        }
        return flag ;
    }

    getJSONStrByJSObj(jsObj){
        if(jsObj != null){
            return JSON.stringify(this.state.outputObj,null,2) ;
        }
        return null ;
    }

    render(){
        return (
            <div>
                <Input type="textarea"  rows={28} 
                    className="sih-test-tool-textarea"
                    placeholder="请输入SIH请求JSON" 
                    value = {this.state.inputValue}
                    onChange={this.handleChangeInputValue}/>
                <div className="sih-test-tool-split"></div>
                <Input type="textarea"  rows={28} className="sih-test-tool-textarea" 
                    readOnly="readOnly" placeholder="SIH处理返回结果" value={
                       this.getJSONStrByJSObj(this.state.outputObj)
                    }/>
                <Button type="primary" className="btn-block" 
                    onClick = {this.handleClickQueryBtn}>GO</Button>
                <Input  type="textarea"  rows={3}  readOnly="readOnly"
                     value={this.state.reqHeaderValue}/>
            </div>
        ) ;
    }
}

export default ShowInfoPage ;