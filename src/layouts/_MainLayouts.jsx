// import "../assets/css/app.css";
import _Header from "../layouts/Header";
// import { useEffect } from "react";
import _Nav from "../layouts/_Nav";
// import _Footer from "./_Footer";
// import { _Col, _Row } from "../services/Forms/LayoutBootstrap";

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function _MainLayouts({ children }) {

  return (
    // <div className="wrapper">
    //   <div className="main">
    //     <_Nav />
    //     <_Row>
    //       <_Col sm={2}>
    //         <_Header />
    //       </_Col>
    //       <_Col sm={7}>
    //         <main className="content">{children}</main>

    //       </_Col>
    //     </_Row>
    //     <_Footer />
    //   </div>
    // </div>

    <Layout>
      <_Nav />
      <Layout>
        <Sider width={256} style={{ height: "100vh", overflow: "auto", background: "#4b545c", overflowX: "hidden" }}>
          <_Header />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              // padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>

  );
}

export default _MainLayouts;
