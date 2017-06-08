import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu ;

class Sidebar extends React.Component {
  state = {
    collapsed: false,
    mode: 'inline',
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }
  render() {
    return (
      <Layout style={{height:'100%'}} id="components-layout-demo-side">
        <Sider 
          width="150"
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" > {this.state.collapsed ? 'EF':'EasyFare GUI'}</div>
          <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" />
              <span className="nav-text">用户管理</span></span>}
            >
              <Menu.Item key="1">用户信息</Menu.Item>
              <Menu.Item key="2">权限信息</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" />
              <span className="nav-text">规则管理</span></span>}
            >
              <Menu.Item key="4">Team 1</Menu.Item>
              <Menu.Item key="5">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="6">
              <span>
                <Icon type="file" />
                <span className="nav-text">其他</span>
              </span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{height:'100%'}}>
          <Content style={{ margin: '0 16px 0 16px' }}>
              {this.props.children}                 
          </Content>
          <Footer style={{ textAlign: 'center',height:'50px' }}>
                Price2.0 ©2017 Created by FGUI 
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Sidebar ;