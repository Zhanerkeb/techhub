import { Layout, Menu } from 'antd';
import React from 'react';
import {Route, Link} from 'react-router-dom'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './dashboard.css';
import Account from './Dashboard/account';
import Form from './Dashboard/form'
import Dogovor from './Dashboard/form/dogovor';
import Chat from './Dashboard/chat';
import Message from './Dashboard/chat/message';

const { Header, Sider, Content } = Layout;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const route = this.props.history.location.pathname;
    let selectedKey = '1';
    if (route.includes('account')) {
      selectedKey = '1'
    } else if (route.includes('form')) {
      selectedKey = '2'
    } else if (route.includes('dogovor')) {
      selectedKey = '3'
    } else if (route.includes('chat')) {
      selectedKey = '4'
    } 
    return (
      <Layout>
        <Sider trigger={null}  collapsible collapsed={this.state.collapsed}>
          <div style={{height: '70px'}} className="logo"><Link  style={{paddingLeft: '5px'}}to='/'><h2>TechHub</h2></Link></div>
          
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[selectedKey]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to={'/dashboard/account'}>  
                    Личный кабинет
                </Link>          
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to={'/dashboard/form'}>    
                Заявка на участие
              </Link>  
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
               <Link to={'/dashboard/dogovor'}>    
                  Договор
                </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />}>
               <Link to={'/dashboard/chat'}>    
                  Чат
                </Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<UploadOutlined />}>
                <Link to={'/SignIn'}>
                    Выйти
                </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: '100vh',
            }}
          >
              <Route exact path={`/dashboard/account`} component={Account}/>
              <Route exact path={`/dashboard/form`} component={Form}/>
              <Route exact path={`/dashboard/dogovor`} component={Dogovor}/>
              <Route exact path={`/dashboard/chat`} component={Chat}/>
              <Route exact path={`/dashboard/message/:id`} component={Message}/>
              {/* <Route exact path={`/dashboard/map`} component={MapTab}/>
              <Route exact path={`/dashboard/brands`} component={Brands}/>
              <Route exact path={`/dashboard/brands/:id`} component={Brand}/> */}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;