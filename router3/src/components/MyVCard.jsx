import React,{Component} from 'react' ;
import ReactDOM from 'react-dom';
import { Input,Button,notification } from 'antd';
let QRCode = require('qrcode') ;


function getVcardStr(){
    let userInfo = {
        firstName:'易',/**姓 */
        lastName:'成杰',/**名 */
        company:'FBI',/**公司 */
        work:'web dev',/** 职务*/
        tel1:'15712867682',/** 电话*/
        tel2:'',/** 电话*/
        expressAddr:'北五环',/** 公司地址*/
        workAddr:'朝阳',
        homeAddr:'河南',
        email:'626659321@qq.com'
    } ;
    let {firstName,lastName,company,work = 'Shrimp Man',email}  = userInfo;
    let {tel1,tel2,companyAddr,expressAddr,workAddr,homeAddr} = userInfo ;

    let fullName = lastName + firstName;
    let retStr = `BEGIN:VCARD
        VERSION:2.1
        N:${firstName};${lastName};;Mr.
        FN:${fullName}
        ORG:${company}
        TITLE:${work}
        TEL;WORK;VOICE:${tel1}
        TEL;HOME;VOICE:${tel2}
        ADR;WORK;PREF:;;${workAddr}
        LABEL;WORK;PREF;ENCODING=QUOTED-PRINTABLE;CHARSET=UTF-8:${expressAddr}
        ADR;HOME:;;${homeAddr}
        LABEL;HOME;ENCODING=QUOTED-PRINTABLE;CHARSET=UTF-8:123456
        EMAIL:${email}
        REV:20080424T195243Z
        END:VCARD` ;
    return retStr ;
}


class MyVCard extends Component{

    constructor(props){
        super(props) ;
        this.canvas = null ;
        this.state = {
            inputValue:''
        } ;
    }

    componentDidMount(){
       let vcardStr = getVcardStr() ;
       this.createQRCode(vcardStr) ;
    }

    createQRCode(str){
        if(str == null || str.trim() == ''){
            return false;
        }
        let canvasNode = ReactDOM.findDOMNode(this.canvas) ;
        QRCode.toCanvas(canvasNode, str, function (error) {
            if (error) {
                notification.error({message:'生成二维码失败'}) ;
                console.error(error) ;
            }
        }) ;
    }

    handleInputChange = (e)=>{
        let value = e.target.value ;
        this.setState({inputValue:value}) ;
    }

    handleClearOper = (e) =>{
        this.setState({inputValue:''}) ;
    }

    handleCreateQRCode = ()=>{
        this.createQRCode(this.state.inputValue) ;
    }

    render(){
        return (
            <div>
                <h5>请输入原文</h5>
                <div className="oper-btn-container">
                    <Button type="primary" className="oper-item" 
                     onClick ={this.handleCreateQRCode}>生产二维码</Button>
                    <Button type="danger" className="oper-item"
                      onClick = {this.handleClearOper}>清空</Button>
                </div>
                <h5>二维码:</h5>
                <canvas  ref={(canvas) => { this.canvas = canvas; }} ></canvas>
            </div>
        ) ;
    }
}

export default MyVCard ;