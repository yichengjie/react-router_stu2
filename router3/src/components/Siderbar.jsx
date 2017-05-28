import  React,{Component} from 'react' ;
import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;
import { Route, Link} from 'react-router-dom' ;
import SIHTestTool from './sih-test-tool/index.jsx' ;
import Base64Tool from './Base64Tool.jsx' ;
import JSONTool from './JSONTool.jsx' ;
import MD5Tools from './MD5Tools.jsx' ;
import TimeStampConvertTool from './TimeStampConvertTool.jsx' ;
import QRCodeSimple from './QRCodeSimple.jsx' ;
import MyVCard from './MyVCard.jsx' ;
import UUIDTool from './UUIDTool.jsx' ;

import OnlineSwitchDev from './online-switch-dev.js' ;
let {getContextPath} = OnlineSwitchDev ;

class Siderbar extends React.Component {
  constructor(props){
     super(props) ;
     let {location} = props ;
     let pathname = location.pathname ;
     console.info('pathname : ' , pathname) ;
     let current = this.getCurrentByLocation(location) ;
     let currentOpenKey = this.getCurrentOpenKeyByLocation(location) ;
     this.state = {
       current,
       username: 'FGUI',
       currentOpenKey
     }
  }

  
  handleClick = (e) => {
    //console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  getCurrentOpenKeyByLocation(location){
     let current = this.getCurrentByLocation(location) || 'sub1-xxx' ;
     let index = current.indexOf('-') ;
     return current.substring(0,index) ;
  }

  getCurrentByLocation({pathname}){
      pathname = pathname;
      let len = pathname.length ;
      let current = pathname.substring(1,len) ;
      return current || 'sub1-sihtool'
  }


  render() {
    let contextPath = getContextPath() ;
    return (
      <div>
          <div id="leftMenu"> 
              <img src={`${contextPath}/static/images/logo.png`} width="50" id="logo"/>
              <Menu
                theme="dark"
                onClick={this.handleClick}
                defaultOpenKeys={[this.state.currentOpenKey]}
                selectedKeys={[this.state.current]}
                mode="inline"
              >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>MQ相关测试工具</span></span>}>
                  <Menu.Item key="sub1-sihtool" to>
                     <Link to="/sub1-sihtool">SIH</Link>
                  </Menu.Item>
                  <Menu.Item key="sub1-base64">
                    <Link to="/sub1-base64"> Base64</Link>
                  </Menu.Item>
                  <Menu.Item key="sub1-json">
                     <Link to="/sub1-json">JSON</Link>
                  </Menu.Item>

                  <Menu.Item key="sub1-md5">
                     <Link to="/sub1-md5">MD5</Link>
                  </Menu.Item>

                  <Menu.Item key="sub1-uuid">
                     <Link to="/sub1-uuid">UUID</Link>
                  </Menu.Item>

                  <Menu.Item key="sub1-timestampconvert">
                     <Link to="/sub1-timestampconvert">TimeStamp</Link>
                  </Menu.Item>

                  <Menu.Item key="sub1-qrcodesimple">
                     <Link to="/sub1-qrcodesimple">简单文字二维码</Link>
                  </Menu.Item>
                  
                  <Menu.Item key="sub1-myvcard">
                     <Link to="/sub1-myvcard">名片二维码</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>实用工具</span></span>}>
                  <Menu.Item key="sub2-json">待开发</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="setting" /><span>其他</span></span>}>
                  <Menu.Item key="sub3-menu1">Option 9</Menu.Item>
                  <Menu.Item key="sub3-menu2">Option 10</Menu.Item>
                  <Menu.Item key="sub3-menu3">Option 11</Menu.Item>
                  <Menu.Item key="sub3-menu4">Option 12</Menu.Item>
                </SubMenu>
              </Menu>
          </div>
          <div id="rightWrap">
             <Route exact path="/" component={SIHTestTool}/>
             <Route exact path="/sub1-sihtool" component={SIHTestTool}/>
             <Route exact path="/sub1-base64" component={Base64Tool}/>
             <Route exact path="/sub1-json" component={JSONTool}/>
             <Route exact path="/sub1-md5" component={MD5Tools}/>
             <Route exact path="/sub1-uuid" component={UUIDTool}/>
             <Route exact path="/sub1-timestampconvert" component={TimeStampConvertTool}/>
             <Route exact path="/sub1-qrcodesimple" component={QRCodeSimple}/>
             <Route exact path="/sub1-myvcard" component={MyVCard}/>
          </div>
      </div>
    );
  }
}

export default Siderbar ;
