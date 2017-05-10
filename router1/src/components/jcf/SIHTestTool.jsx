import React,{Component} from 'react' ;
import outputData from '../../api/output.json' ;
import inputData from './data/sih-test-tool.json' ;

class SIHTestTool extends Component{

    constructor (props){
        super(props) ;
        this.state = {
            inputValue:'',
            outputValue:null,
            isShowMsgPageFlag:true
        } 
    }

    componentDidMount(){
        let inputValue = JSON.stringify(inputData,null,2) ;
        this.setState({inputValue}) ;
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


    getConfigInput(labelName){
        let retArr = [] ;
        let label = (<label className="col-sm-2 control-label">{labelName}</label>) ;
        retArr.push(label) ;
        let input = (
            <div className="col-sm-4">
                <input type="text" className="form-control" />
            </div>
        ) ;
        retArr.push(input) ;
        return retArr ;
    }

    renderConfigPage(){
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    {this.getConfigInput('Server.Mode')}
                    {this.getConfigInput('FuncCode')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('Server.Servicename')}
                    {this.getConfigInput('UID')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('MQ.IP')}
                    {this.getConfigInput('CWA')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('MQ.Port')}
                    {this.getConfigInput('Office')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('MQ.Channel')}
                    {this.getConfigInput('Airline')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('MQ.QM')}
                    {this.getConfigInput('Agent')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('MQ.Expiry')}
                    {this.getConfigInput('Level')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('Orisysinfo.Orisys')}
                    {this.getConfigInput('ReqFormat')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('Orisysinfo.Hostid')}
                    {this.getConfigInput('ResFormat')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('PID')}
                    {this.getConfigInput('DesSys')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('UsasSyus')}
                    {this.getConfigInput('MsgType')}
                </div>
                <div className="form-group">
                    {this.getConfigInput('MqWaitSec')}
                    {this.getConfigInput('ClientCharSet')}
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="button" className="btn btn-warning">修改</button>
                        {'  '}
                        <button type="button" className="btn btn-default">重制</button>
                    </div>
                </div>
            </form>
        ) ;
    }

    render(){
        
        let msgClassName = this.state.isShowMsgPageFlag 

        return (
           <div className="main-edit-container">
                <div style ={{marginBottom: '10px'}}>
                    <button type="button" style={{width:'50%'}} 
                        className={this.getSwitchBtnClassName(true)}
                        onClick={this.handleSwitchPageFactory(true)}>信息显示</button>
                    <button type="button" style={{width:'50%'}} 
                        className={this.getSwitchBtnClassName(false)}
                        onClick={this.handleSwitchPageFactory(false)}>参数配置</button>
                </div>
                {this.state.isShowMsgPageFlag ? this.renderShowMsgPage() : this.renderConfigPage()}
            </div>
        ) ;
    }
}

export default SIHTestTool ;