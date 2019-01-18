import React from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import '../sass/components/layout.scss';
import '../sass/components/main_menu.scss';
import '../sass/components/footer.scss';

const {Header, Content, Footer} = Layout;

class LayoutDefault extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeMenuItems: [props.match.url]
    };
  }

  onPageChange({selectedKeys}) {
    this.setState({
      activeMenuItems: selectedKeys
    });
  }

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo"/>
          <Menu theme="dark"
                mode="horizontal"
                selectedKeys={this.state.activeMenuItems}
                className="main_menu__item"
                onSelect={this.onPageChange.bind(this)}
          >
            <Menu.Item key="/">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/about">
              <Link to="/about">About</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{padding: '0 50px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/">Russia</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/">Saint-Petersburg</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="layout_content">
            {/*<h1></h1> // here should be some title*/}
            {this.props.prop}
            {this.props.children}
          </div>
        </Content>
        <Footer className="footer">
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}

export default LayoutDefault;
