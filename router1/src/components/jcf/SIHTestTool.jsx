import React,{Component} from 'react' ;
import outputData from '../../api/output.json' ;
import inputData from './data/sih-test-tool.json' ;
import configFormData from './data/sih-test-tool-formdata.json' ;
import SIHTestToolConfigDao from './dao/SIHTestToolConfigDao.js' ;
import Alert , {AlertType} from '../Alert.jsx' ;

class SIHTestTool extends Component{

    constructor (props){
        super(props) ;
        this.state = {
            inputValue:'',
            outputValue:null,
            isShowMsgPageFlag:true,
            formData:{},
            showAlertFlag:false,
            alertMsg:'',
            alertType:''
        } 
    }

    componentDidMount(){
        let inputValue = JSON.stringify(inputData,null,2) ;
        let dbFormData = SIHTestToolConfigDao.getFormData() ;
        let formData = (dbFormData == null) ? configFormData : dbFormData ;
        this.setState({inputValue,formData}) ;
        (dbFormData == null) && this.syncFormDataToDB(formData,false) ;
    }

    handleQuery = e =>{
        this.setState({outputValue:outputData}) ;
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

    renderShowMsgPage(){
        let {inputValue,outputValue} = this.state ;
        return (
            <div>
                <textarea className="inputTextarea" 
                    value={inputValue}
                    onChange={this.handleInput}></textarea>
                <br/>
                <br/>
                <button className="btn btn-primary main-btn" onClick={this.handleQuery}>GO</button>
                <br/>
                <br/>
                <pre className="output-region">
                    {outputValue ? JSON.stringify(outputValue,null,2) : ''}
                </pre>
            </div>
        ) ;
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
        this.syncFormDataToDB(formData) ;
    }
    //配置页面点击重制的处理函数
    handleResetConfigInfo = e => {
        this.setState({formData:configFormData}) ;
        this.syncFormDataToDB(configFormData) ;
    }


    //将数据同步到localStorage中
    syncFormDataToDB(formData,alertFlag){
        SIHTestToolConfigDao.saveFormData(formData) ;
        if(alertFlag === false){
           return ; 
        }
        this.showAlert('保存配置成功',AlertType.success) ;
       
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
                        <button type="button" className="btn btn-warning" onClick ={this.handleSaveConfigInfo}>修改</button>
                        {'  '}
                        <button type="button" className="btn btn-default" onClick={this.handleResetConfigInfo}>重制</button>
                    </div>
                </div>
            </form>
        ) ;
    }

    showAlert (alertMsg,type) {
        let showAlertFlag = true ;
        let alertType = type ;
        console.info(`type : ${type}`) ;
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

    render(){
        let msgClassName = this.state.isShowMsgPageFlag 
        return (
           <div className="main-edit-container">
                <div style ={{marginBottom: '10px'}}>
                    <button type="button" style={{width:'20%'}} 
                        className={this.getSwitchBtnClassName(true)}
                        onClick={this.handleSwitchPageFactory(true)}>信息显示</button>
                    <button type="button" style={{width:'20%'}} 
                        className={this.getSwitchBtnClassName(false)}
                        onClick={this.handleSwitchPageFactory(false)}>参数配置</button>
                </div>
                <Alert {...this.getAlertProps()}/>
                {this.state.isShowMsgPageFlag ? this.renderShowMsgPage() : this.renderConfigPage()}
            </div>
        ) ;
    }
}

export default SIHTestTool ;