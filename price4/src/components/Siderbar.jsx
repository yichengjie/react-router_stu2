import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu ;
import { Route, Link} from 'react-router-dom' ;
import Category4Edit from './category4/Category4Edit.jsx' ;
import Category4Query from './category4/Category4Query.jsx' ;

const defaultOpenKey = "rule" ;


class Siderbar extends React.Component {
  constructor(props){
     super(props) ;
     let {location} = props ;
     let pathname = location.pathname ;
     console.info('pathname : ' , pathname) ;
     //选中的列表
     let current = this.getCurrentByLocation(location) ;
     //打开的类别
     let currentOpenKey = this.getCurrentOpenKeyByLocation(location) ;
     this.state = {
       current,
       openKeys:[currentOpenKey],
       collapsed: false,
       mode: 'inline',
     }
  }

  handleMenuItemClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  getCurrentOpenKeyByLocation(location){
     let current = this.getCurrentByLocation(location) || (defaultOpenKey +'-xxx') ;
     let index = current.indexOf('-') ;
     return current.substring(0,index) ;
  }

  getCurrentByLocation({pathname}){
      pathname = pathname;
      let len = pathname.length ;
      let current = pathname.substring(1,len) ;
      if(current.length > 0){
         let infos = current.split('-') ;
         if(infos.length >= 2){
            return infos[0] + '-' + infos[1] ;
         }
      }
      return current
  }

  handleMenuOpenChange = (openKeys) =>{
      this.setState({
        openKeys   
      }) ;
  }



  onCollapse = (collapsed) => {
    console.log(`collapsed :${collapsed}`);
    let {openKeys} = [] ;
    if(collapsed){//如果是折叠
        this.openKeys = [...this.state.openKeys] ;
        openKeys = [] ;
    }else{//如果是展开折叠
       openKeys = [...this.openKeys] ; 
    }
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
      openKeys
    });
  }
  render() {
    let {openKeys} = this.state;
    return (
      <Layout style={{height:'100%'}} id="components-layout-demo-side">
        <Sider 
          width="150"
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" > {this.state.collapsed ? 'EF':'EasyFare GUI'}</div>
          <Menu theme="dark" 
            mode={this.state.mode} 
            onClick={this.handleMenuItemClick}
            openKeys={openKeys}
            selectedKeys={[this.state.current]}
            onOpenChange={this.handleMenuOpenChange}
            >
            <SubMenu
              key="user"
              title={<span><Icon type="user" />
              <span className="nav-text">用户管理</span></span>}
            >
              <Menu.Item key="1">用户信息</Menu.Item>
              <Menu.Item key="2">权限信息</Menu.Item>
            </SubMenu>
            <SubMenu
              key="rule"
              title={<span><Icon type="team" />
              <span className="nav-text">规则管理</span></span>}
            >
              <Menu.Item key="rule-category">
                <Link to="/rule-category">Category</Link>
              </Menu.Item>
              <Menu.Item key="5">其他</Menu.Item>
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
          <Content>
            <div style={{margin:'10px 10px 0 10px'}}>
              <Route exact path="/" component={Category4Query}/>
              <Route exact path="/rule-category" component={Category4Query}/>
              <Route exact path="/rule-category-edit" 
                component={Category4Edit}/>
              <Route exact path="/rule-category-edit/:id" 
                component={Category4Edit}/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center',height:'50px' }}>
                Price2.0 ©2017 Created by FGUI 
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Siderbar ;