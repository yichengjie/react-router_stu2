import React,{Component} from 'react' ;
import SIHAPI from './api/SIHTestToolAPI-test.js' ;

class MQParamCfgPage extends Component {

    //配置页面点击重制的处理函数
    handleResetConfigInfo = (e) => {
       let formDataOrigin = SIHAPI.getSIHFormDataOrigin() ;
       this.setState({formData:formDataOrigin}) ;
       SIHAPI.saveFormData2DB(formDataOrigin) ;
    }

   //配置页面点击修改按钮的处理函数
    handleSaveConfigInfo = (e) => {
        let formData = this.state.formData ;
        SIHAPI.saveFormData2DB(formData) ;
    }

    render(){
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
                    {this.getConfigInput('Orisysinfo.Orisys','oriSys')}
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
                    {this.getConfigInput('UsasSyus','usasSys')}
                    {this.getConfigInput('MsgType','msgType')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('MqWaitSec','mqWaitSec')}
                    {this.getConfigInput('ClientCharSet','charSet')}
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
}

export default MQParamCfgPage ;