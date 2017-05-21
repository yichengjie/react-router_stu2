import  React,{Component} from 'react' ;
import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;
import { Route, Link} from 'react-router-dom' ;
import SIHTestTool from './SIHTestTool.jsx' ;
import Base64Tool from './Base64Tool.jsx' ;

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
       username: 'yicj',
       currentOpenKey
     }
  }

  
  handleClick = (e) => {
    console.log('click ', e);
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
    return (
      <div>
          <div id="leftMenu"> 
              <img src='/static/images/logo.png' width="50" id="logo"/>
              <Menu
                theme="dark"
                onClick={this.handleClick}
                style={{ width: 185 }}
                defaultOpenKeys={[this.state.currentOpenKey]}
                selectedKeys={[this.state.current]}
                mode="inline"
              >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>MQ相关测试工具</span></span>}>
                  <Menu.Item key="sub1-sihtool" to>
                     <Link to="/sub1-sihtool">SIH工具</Link>
                  </Menu.Item>
                  <Menu.Item key="sub1-base64">
                    <Link to="/sub1-base64"> Base64工具</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>通用工具</span></span>}>
                  <Menu.Item key="sub2-menu1">Option 5</Menu.Item>
                  <Menu.Item key="sub2-menu">Option 6</Menu.Item>
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
             <Menu mode="horizontal">
                <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
                    <Menu.Item key="setting:1">退出</Menu.Item>
                </SubMenu>
            </Menu>
            <div className="right-box">
               <Route exact path="/" component={SIHTestTool}/>
               <Route exact path="/sub1-sihtool" component={SIHTestTool}/>
               <Route exact path="/sub1-base64" component={Base64Tool}/>
            </div>
          </div>
      </div>
        
    );
  }
}

export default Siderbar ;
