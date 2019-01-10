import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import CountryList from './components/countryList';
import 'antd/dist/antd.css';

const {Header, Content, Footer} = Layout;

let data = [
  {
    name: 'Россия',
    id: 'RU'
  },
  {
    name: 'Украина',
    id: 'UA'
  },
  {
    name: 'Беларусь',
    id: 'BY'
  }
];

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo"/>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{lineHeight: '64px'}}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{padding: '0 50px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{
            background: '#fff',
            padding: 24,
            minHeight: 280
          }}>
            {data.length > 0 && <CountryList data={data}/>}
            {data.length === 0 && "No countries"}
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;
