import React,{Component} from 'react' ;
import { Form, Row, Col, Input, Button, Icon,notification } from 'antd';
const FormItem = Form.Item;
import {SIHAPI} from '../online-switch-dev.js' ;
class MQParamCfgPage extends Component {
    constructor(props){
        super(props) ;
        this.formItemLayout = {
          labelCol: { span: 10 },
          wrapperCol: { span: 14 },
        };
    }

    componentDidMount(){
        let sihFormData = this.props.formData ;
        let form = this.props.form ;
        form.setFieldsValue(sihFormData) ;
    }

    //配置页面点击重制的处理函数
    handleResetConfigInfo = (e) => {
       let formDataOrigin = SIHAPI.getSIHFormDataOrigin() ;
       let form = this.props.form ;
       form.setFieldsValue(formDataOrigin) ;
       //数据同步到localStorage
       this.props.handleModifyFormData(formDataOrigin) ;
       notification.success({message:"重置成功!"}) ;
    }

   //配置页面点击修改按钮的处理函数
    handleSaveConfigInfo = (e) => {
        let form = this.props.form ;
        let formData = form.getFieldsValue() ;
        //数据同步到localStorage
        this.props.handleModifyFormData(formData) ;
        notification.success({message:"保存成功!"}) ;
    }

    getConfigInput(label,propName){
        let formItemLayout = this.formItemLayout ;
        const { getFieldDecorator } = this.props.form;
        return (
            <Col span={12}>
                <FormItem {...formItemLayout} label={label}>
                    {getFieldDecorator(propName)(
                        <Input />
                    )}
                </FormItem>
            </Col>
        ) ;
    }

    render(){
        return (
            <Form className="ant-advanced-search-form sih-test-tool-cfgPage">
                <Row gutter={40}>
                    {/*第一行*/}
                    {this.getConfigInput('Server.Mode','serverMode')}
                    {this.getConfigInput('FuncCode','funcCode')}
                    {/*第二行*/}
                    {this.getConfigInput('Server.Servicename','serverServiceName')}
                    {this.getConfigInput('UID','uid')}
                    {/*第三行*/}
                    {this.getConfigInput('MQ.IP','mqIp')}
                    {this.getConfigInput('CWA','cwa')}
                    {/*第四行*/}
                    {this.getConfigInput('MQ.Port','mqPort')}
                    {this.getConfigInput('Office','office')}
                    {/*第五行*/}
                    {this.getConfigInput('MQ.Channel','mqChannel')}
                    {this.getConfigInput('Airline','airline')}
                    {/*第六行*/}
                    {this.getConfigInput('MQ.QM','mqQm')}
                    {this.getConfigInput('Agent','agent')}
                    {/*第七行*/}
                    {this.getConfigInput('MQ.Expiry','mqExpiry')}
                    {this.getConfigInput('Level','level')}
                    {/*第八行*/}
                    {this.getConfigInput('Orisysinfo.Orisys','oriSys')}
                    {this.getConfigInput('ReqFormat','reqFormat')}
                    {/*第久行*/}
                    {this.getConfigInput('Orisysinfo.Hostid','orisysinfoHostId')}
                    {this.getConfigInput('ResFormat','resFormat')}
                    {/*第十行*/}
                    {this.getConfigInput('PID','pid')}
                    {this.getConfigInput('DesSys','desSys')}
                    {/*第十一行*/}
                    {this.getConfigInput('UsasSyus','usasSys')}
                    {this.getConfigInput('MsgType','msgType')}
                    {/*第十一行*/}
                    {this.getConfigInput('MqWaitSec','mqWaitSec')}
                    {this.getConfigInput('ClientCharSet','charSet')}
                </Row>

                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit"
                         onClick ={this.handleSaveConfigInfo}>保存</Button>
                        <Button style={{ marginLeft: 8 }} 
                            onClick={this.handleResetConfigInfo}>
                            重置
                        </Button>
                    </Col>
                </Row>
            </Form>
        ) ;
    }
}

const WrappedAdvancedSearchForm = Form.create()(MQParamCfgPage);

export default WrappedAdvancedSearchForm ;