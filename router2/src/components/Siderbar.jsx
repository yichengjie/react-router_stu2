import  React,{Component} from 'react' ;
import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;

class Siderbar extends React.Component {
  state = {
    current: 'sub102',
    username: 'yicj'
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
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
                defaultOpenKeys={['sub1']}
                selectedKeys={[this.state.current]}
                mode="inline"
              >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>MQ相关测试工具</span></span>}>
                  <Menu.Item key="sub101">SIH工具</Menu.Item>
                  <Menu.Item key="sub102">Base64工具</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>通用工具</span></span>}>
                  <Menu.Item key="sub201">Option 5</Menu.Item>
                  <Menu.Item key="sub202">Option 6</Menu.Item>
                  <SubMenu key="sub2sub1" title="Submenu">
                    <Menu.Item key="sub2sub101">Option 7</Menu.Item>
                    <Menu.Item key="sub2sub102">Option 8</Menu.Item>
                  </SubMenu>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="setting" /><span>其他</span></span>}>
                  <Menu.Item key="sub301">Option 9</Menu.Item>
                  <Menu.Item key="sub3002">Option 10</Menu.Item>
                  <Menu.Item key="sub3003">Option 11</Menu.Item>
                  <Menu.Item key="sub3004">Option 12</Menu.Item>
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
               我是右侧内容区域的占位


            </div>
          </div>
      </div>
        
    );
  }
}

export default Siderbar ;
