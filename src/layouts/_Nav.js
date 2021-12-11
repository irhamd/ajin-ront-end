import React from "react";
import srcAvatar from "../assets/img/avatars/avatar.jpg";
import { dataUser } from "../services/Cache/Auth";
import { Image, Menu } from 'antd';
import { Link } from "react-router-dom";

import { UserSwitchOutlined, LogoutOutlined, BarChartOutlined, FileProtectOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { _Col, _Row } from "../services/Forms/LayoutBootstrap";

import logo1 from './../assets/img/icons/logo1.png'
import logo2 from './../assets/img/icons/logo2.png'
import logo3 from './../assets/img/icons/logo3.png'
import logo4 from './../assets/img/icons/logo4.png'
import { globalText } from "../services/Text/GlobalText";
import { routes, routes_admin } from "../routing/routes";
import { Cache } from "../services/Cache";

function _Nav() {
  const { SubMenu } = Menu;

  var rout = []
  var ses = Cache.get(globalText.x_auth_resu)
  var auth = {}
  if (ses) {
    auth = JSON.parse(ses)
    rout = auth.role == 'Dosen' ? routes : routes_admin
    // if(auth.role == 'Dosen') rout = routes_admin else 
  }

  const stile = {
    menu: {
      float: "right", right: "0px", background: "#094783", color: "whitesmoke", position: "absolute", borderWidth: "20px", borderStyle: "revert", fontWeight: "bold"
    }
  }


  // const renderroute = rout.map((item, i) => {
  //   return (
  //     <Menu.Item key={i} icon={<MenuUnfoldOutlined />} key={i}> <Link to={`${item.to}`}> {item.title} </Link></Menu.Item>

  //   );
  // });

  return (
    <_Row style={{ background: "#0F9A53", zIndex: "999", marginTop: "10px" }}>
      <_Col sm={11} style={{ float: "right", padding: "5px 30px", display: "flex" }}>
        <Image height={50} src={logo1} preview={false} />
        <h3 style={{ fontFamily: "arial", fontWeight: "bolder", color: "#ebdbdb", marginLeft: "20px" }}> SI PEMANTAU HARGA </h3> <br />
        <p style={{ position: "relative", left: "-225px", top: "20px" }} > Dinas perdagangan Kota Mataram </p>
      </_Col>

      <_Col >
        <Menu
          style={{ background: "green" }}
          // onClick={this.handleClick}
          // defaultSelectedKeys={['1']}
          mode="horizontal"
        // onSelect={R.onClose}
        // style={{ background: "#001529" }}
        >
          {/* {renderroute} */}






          {/* <SubMenu style={stile.menu} key="sub7"
          icon={<UserSwitchOutlined style={{ fontSize: "20px" }} />}
          title={dataUser.name}>
          <Menu.Item key="71-1" icon={<LogoutOutlined />}> <Link to={"/login"}>   Logout </Link></Menu.Item>
        </SubMenu> */}


        </Menu>
      </_Col>
    </_Row>

  );
}

export default _Nav;
