import React,{Component} from 'react' ;
//import inputData from './data/sih-test-tool.json' ;
import configFormData from './data/sih-test-tool-formdata.json' ;
import SIHTestToolDao from './dao/SIHTestToolDao.js' ;
import Alert , {AlertType} from '../Alert.jsx' ;
import ProgressBar from '../ProgressBar.jsx' ;
import SIHApi from './api/SIHTestToolAPI.js' ;


class SIHTestTool extends Component{

    constructor (props){
        super(props) ;
        this.state = {
            inputValue:'数据加载中,请耐心等待...',
            outputValue:null,
            isShowMsgPageFlag:true,
            formData:{},
            showAlertFlag:false,
            alertMsg:'',
            alertType:'',
            queryingFlag:false,
        } ;
        this.handleQuery = this.handleQuery.bind(this) ;
    }

    async componentDidMount(){
        let {inputData,flag} = await SIHApi.getSIHInputDataTemplate() ;
        let inputValue = JSON.stringify(inputData,null,2) ;
        let dbFormData = SIHTestToolDao.getConfigPageFormData() ;
        let formData = (dbFormData == null) ? configFormData : dbFormData ;
        this.setState({inputValue,formData}) ;
        if(dbFormData == null){
            this.syncFormDataToDB(formData,'同步配置成功!',false) ;
        }
    }

    async handleQuery (event){
       console.info('-----------请求参数 start -----------') ;
       console.info('config page formData : ') ;
       console.info(this.state.formData) ;
       console.info('msg page request json data : ') ;
       console.info(this.state.inputValue) ;
       console.info('-----------请求参数 end -----------') ;
       this.setState({queryingFlag:true,outputValue:{info:"数据加载中，请耐心等待..."}}) ;
       let {outputData,flag} = await SIHApi.querySIHData() ;
       this.setState({
            outputValue:outputData,
            queryingFlag:false
        }) ;
    }

    //点击保存inputData处理函数
    handleSaveInputDataTemplate = e =>{
       let inputDataStr = this.state.inputValue ;
       SIHApi.saveSIHInputDataTemplate(inputDataStr) ; 
       this.showAlert("保存成功!",AlertType.success) ;
    }

    handleResetInputDataTemplate = e =>{
        let newInputDataTemplateStr = SIHApi.resetSIHInputDataTemplate() ;
        this.setState({inputValue:newInputDataTemplateStr}) ;
        this.showAlert("重置成功!",AlertType.success) ;
    }

    handleInput = e => {
        let value = e.target.value ;
        this.setState({inputValue:value}) ; 
    }

    getSwitchBtnClassName(isMsgPageBtn){
       let a =  this.state.isShowMsgPageFlag  ;
       let retStr =  'btn ' + ((a === isMsgPageBtn) ? 'btn-info' : 'btn-default') ;
       return retStr ;
    }

    handleSwitchPageFactory(isMsgPageBtn){
        return e => {
            if(isMsgPageBtn !== this.state.isShowMsgPageFlag){
                this.setState({isShowMsgPageFlag:isMsgPageBtn}) ; 
            }
        }
    }

    handleConfigInputChangeFactory (fieldName){
        return e => {
            let value = e.target.value ;
            let formData = this.state.formData ;
            let newFormData = Object.assign({},formData,{[fieldName]:value}) ;
            this.setState({formData:newFormData}) ;
        }
    }

    getFieldProps(fieldName){
        return {
            value:this.state.formData[fieldName],
            onChange:this.handleConfigInputChangeFactory(fieldName)
        } ;
    }

    getConfigInput(labelName,fieldName){
        let retArr = [] ;
        let label = (<label className="col-sm-2 control-label">{labelName}</label>) ;
        retArr.push(label) ;
        let input = (
            <div className="col-sm-4">
                <input type="text" className="form-control" {...this.getFieldProps(fieldName)}  />
            </div>
        ) ;
        retArr.push(input) ;
        return retArr ;
    }

    //配置页面点击修改按钮的处理函数
    handleSaveConfigInfo = (e) => {
        let formData = this.state.formData ;
        //console.info(JSON.stringify(formData,null,2)) ;
        this.syncFormDataToDB(formData,'保存配置成功',true) ;
    }
    //配置页面点击重制的处理函数
    handleResetConfigInfo = e => {
        this.setState({formData:configFormData}) ;
        this.syncFormDataToDB(configFormData,'重置配置成功!',true) ;
    }

    handleFormatInputDataTemplate = e => {
        let inputValue = this.state.inputValue;
        let inputObj = JSON.parse(inputValue) ;
        let inputStr = JSON.stringify(inputObj,null,2) ;
        this.setState({inputValue:inputStr}) ;
    }


    //将数据同步到localStorage中
    syncFormDataToDB(formData,msg,alertFlag){
        SIHTestToolDao.saveConfigPageFormData(formData) ;
        if(alertFlag === false){
           return ; 
        }
        this.showAlert(msg,AlertType.success) ;
       
    }

    renderQueryBtnOrProgressBar(){
        if(this.state.queryingFlag){
            return <ProgressBar/>
        }
        return (
            <button className="btn btn-primary btn-block"
                     onClick={this.handleQuery}>GO</button>
        ) ;
    }

     renderShowMsgPage(){
        let {inputValue,outputValue} = this.state ;
        return (
            <div>
                <textarea className="inputTextarea" 
                    value={inputValue}
                    onChange={this.handleInput}></textarea>
                <div className="oper-status-container">
                   {this.renderQueryBtnOrProgressBar()} 
                </div>
                <pre className="output-region">
                    {outputValue ? JSON.stringify(outputValue,null,2) : ''}
                </pre>
            </div>
        ) ;
    }

    renderConfigPage(){
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    {this.getConfigInput('Server.Mode','serverMode')}
                    {this.getConfigInput('FuncCode','funcCode')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('Server.Servicename','serverServiceName')}
                    {this.getConfigInput('UID','uid')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('MQ.IP','mqIp')}
                    {this.getConfigInput('CWA','cwa')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('MQ.Port','mqPort')}
                    {this.getConfigInput('Office','office')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('MQ.Channel','mqChannel')}
                    {this.getConfigInput('Airline','airline')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('MQ.QM','mqQm')}
                    {this.getConfigInput('Agent','agent')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('MQ.Expiry','mqExpiry')}
                    {this.getConfigInput('Level','level')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('Orisysinfo.Orisys','orisysinfoOrisys')}
                    {this.getConfigInput('ReqFormat','reqFormat')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('Orisysinfo.Hostid','orisysinfoHostId')}
                    {this.getConfigInput('ResFormat','resFormat')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('PID','pid')}
                    {this.getConfigInput('DesSys','desSys')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('UsasSyus','usasSyus')}
                    {this.getConfigInput('MsgType','msgType')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('MqWaitSec','mqWaitSec')}
                    {this.getConfigInput('ClientCharSet','clientCharSet')}
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="button" className="btn btn-warning" 
                            onClick ={this.handleSaveConfigInfo}>修改</button>
                        {'  '}
                        <button type="button" className="btn btn-default" 
                            onClick={this.handleResetConfigInfo}>重置</button>
                    </div>
                </div>
            </form>
        ) ;
    }

    showAlert (alertMsg,type) {
        let showAlertFlag = true ;
        let alertType = type ;
        //console.info(`type : ${type}`) ;
        this.setState({showAlertFlag,alertMsg,alertType}) ;
    }

    hideAlertFn = () => {
        let showAlertFlag = false ;
        let alertMsg = "" ; 
        let alertType = AlertType.info ;
        this.setState({showAlertFlag,alertMsg,alertType}) ;
    }


    getAlertProps(){
       let show = this.state.showAlertFlag ;
       let msg = this.state.alertMsg ;
       let type = this.state.alertType ;
       let hideAlertFn = this.hideAlertFn ;
       let retObj = {show,msg,type,hideAlertFn} ;
       //console.info('alert props type : ' , type) ;
       return retObj;
    }



    renderMsgSaveParamBtn(){
        if(this.state.isShowMsgPageFlag){
            let arr = [] ;
            arr.push(<button className="btn btn-default" 
                         onClick= {this.handleFormatInputDataTemplate}>格式化请求JSON</button>) ;
            arr.push(<button className="btn btn-default" 
                onClick= {this.handleSaveInputDataTemplate}>保存请求JSON</button>) ;
            arr.push(<button className="btn btn-default" 
                         onClick= {this.handleResetInputDataTemplate}>重置请求JSON</button>) ;
            return arr ;
        }
        return null ;
    }

    render(){
        let msgClassName = this.state.isShowMsgPageFlag ;
        return (
           <div className="main-edit-container">
                <div className="btn-group" style ={{marginBottom: '10px'}}>
                    <button type="button"
                        className={this.getSwitchBtnClassName(true)}
                        onClick={this.handleSwitchPageFactory(true)}>信息显示</button>
                    <button type="button"  
                        className={this.getSwitchBtnClassName(false)}
                        onClick={this.handleSwitchPageFactory(false)}>参数配置</button>
                    {this.renderMsgSaveParamBtn()}
                </div>
                <Alert {...this.getAlertProps()}/>
                {this.state.isShowMsgPageFlag ? this.renderShowMsgPage() : this.renderConfigPage()}
            </div>
        ) ;
    }
}

export default SIHTestTool ;