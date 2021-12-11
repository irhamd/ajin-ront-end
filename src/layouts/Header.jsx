import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { routes, routes_admin } from "../routing/routes";
import { Cache } from "../services/Cache";
import { globalText } from "../services/Text/GlobalText";
import { Menu, Button } from 'antd';

import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  FileDoneOutlined,
  SlidersOutlined,
  DatabaseOutlined,
  AlignRightOutlined,
  BarChartOutlined,
} from '@ant-design/icons';

import logo1 from './../assets/img/icons/logo1.png'
import logo2 from './../assets/img/icons/logo2.png'
import logo3 from './../assets/img/icons/logo3.png'
import logo4 from './../assets/img/icons/logo4.png'
import { useState } from "react";

function _Header() {
  var rout = []
  var ses = Cache.get(globalText.x_auth_resu)
  var auth = {}
  if (ses) {
    auth = JSON.parse(ses)
    rout = auth.role == 'Dosen' ? routes : routes_admin
  }

  const [collapsed, setcollapsed] = useState(false)

  const toggleCollapsed = () => {
    setcollapsed(!collapsed);
  };

  const { SubMenu, Item } = Menu;

  return (
    <div style={{ width: 256 }}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        defaultOpenKeys={['sub2', 'sub3']}
        mode="inline"
        theme="dark"
        style={{ background: "#4b545c", color: "white", fontWeight: "bold", fontFamily: "arial" }}
        inlineCollapsed={MenuUnfoldOutlined}
      >
        <Item key="1" icon={<BarChartOutlined />}>
          Dashboard
        </Item>


        <SubMenu key="sub1" icon={<DatabaseOutlined />} title="Data Master">
          <Item icon={<AlignRightOutlined />} key="sub1-1"><Link to="KabupatenKota" > Kabupaten / Kota </Link></Item>
          <Item icon={<AlignRightOutlined />} key="sub1-2"><Link to="Kecamatan" > Kecamatan </Link></Item>
          <Item icon={<AlignRightOutlined />} key="sub1-3">Desa / Kelurahan</Item>
          <Item icon={<AlignRightOutlined />} key="sub1-4">Pasar</Item>
          <Item icon={<AlignRightOutlined />} key="sub1-5">Petugas Pasar</Item>
          <Item icon={<AlignRightOutlined />} key="sub1-6">HET</Item>
          <Item icon={<AlignRightOutlined />} key="sub1-7">Komoditas</Item>
          <Item icon={<AlignRightOutlined />} key="sub1-8">Satuan</Item>
          <Item icon={<AlignRightOutlined />} key="sub1-9">Varian</Item>

        </SubMenu>

        <SubMenu key="sub2" icon={<FileDoneOutlined />} title="Survey">
          <Item icon={<AlignRightOutlined />} key="sub2_1"> <Link to="SurveyBahanPokok" > Bahan Pokok </Link></Item>
          <Item icon={<AlignRightOutlined />} key="sub2_2"> <Link to="SurveyBahanPenting" > Bahan Penting </Link></Item>

        </SubMenu>
        <SubMenu key="sub3" icon={<SlidersOutlined />} title="Validasi">
          <Item icon={<AlignRightOutlined />} key="sub3-1">Bahan Pokok</Item>
          <Item icon={<AlignRightOutlined />} key="sub3-2">Bahan Penting</Item>
        </SubMenu>

        <Item key="672" icon={<PieChartOutlined />}>
          Manajemen User
        </Item>
      </Menu>
    </div>
  );
}

export default _Header;
