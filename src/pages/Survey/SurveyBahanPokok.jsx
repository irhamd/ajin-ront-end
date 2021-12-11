import React, { useEffect, useState } from "react";
import _MainLayouts from "../../layouts/_MainLayouts";
import {
  _Button,
  _Checkbox,
  _Date,
  _Input,
  _Label,
  _Select,
  _Switch,
  _TitleBar,
} from "../../services/Forms/Forms";
import {
  Table,
  Radio,
  Divider,
  Input,
  Button,
  Form,
  Avatar,
  Drawer,
  Space,
  DatePicker,
  Spin,
  Popconfirm,
  Tooltip,
  Badge,
  Tag,
  Progress,
  Image,
  Rate,
  Checkbox,
  Modal,
  Pagination,
  Select,
} from "antd";
import moment from "moment";
import { fitrah, formatNumber } from "../../services/Text/GlobalText";
import { _Col, _Row } from "../../services/Forms/LayoutBootstrap";
import { ClusterOutlined, DeleteOutlined, DownloadOutlined, EditOutlined, FileDoneOutlined, MinusCircleTwoTone, PlusCircleTwoTone, SecurityScanOutlined, UpCircleOutlined } from "@ant-design/icons";
import _Api from "../../services/Api/_Api";
import { _Toastr } from "../../services/Toastr/Notify/_Toastr";
import _Autocomplete from "../../services/Forms/_Autocomplete";
import _AutocompleteRev from "../../services/Forms/_AutocompleteRev";

function SurveyBahanPokok() {

  const [input, setinput] = useState(false)
  const [paginate, setpaginate] = useState({})
  const [dataSurvey, setdataSurvey] = useState([])
  const [selected, setselected] = useState("")
  const [loadingDel, setloadingDel] = useState(false)
  const [petugasPasar, setpetugasPasar] = useState([])
  const [currPage, setcurrPage] = useState("1")



  const [formData] = Form.useForm()



  const columns = [
    {
      title: "No",
      width: 100,
      align: "center",
      render: (text, row, index) => <> {index + 1} </>,
    },
    {
      title: "Petugas Pasar",
      width: 300,
      sorter: (a, b) => a.petugas_pasar.nama.length - b.petugas_pasar.nama.length,
      render: (_, rc) => (
        // <div> {moment(rc.tglregistrasi).format("DD-MM-YYYY HH:mm")}</div>
        <div> {rc.petugas_pasar.nama}</div>
      ),
      // fixed: 'left',
      //   width: 150,
    },
    {
      title: "Lokasi Pasar",
      width: 200,
      dataIndex: "pasar.nama_pasar",
      sorter: (a, b) => a.pasar.nama_pasar.length - b.pasar.nama_pasar.length,
      render: (_, rc) => (
        <Tag color={"orange"}>{rc.pasar.nama_pasar}</Tag>
      ),

    },
    {
      title: "Varian",
      width: 300,
      // dataIndex: "varian.nama_varian",
      render: (_, rc) => (
        <div>{rc.varian && rc.varian.nama_varian}</div>
      ),
      // sorter: (a, b) => a.varian.nama_varian.length - b.varian.nama_varian.length,
    },
    {
      title: "Tanggal Survey",
      width: 200,
      dataIndex: "tgl_survey",
      sorter: (a, b) => a.tgl_survey.length - b.tgl_survey.length,
    },

    {
      title: "Harga",
      width: 100,
      sorter: (a, b) => a.harga - b.harga,
      render: (_, rc) => (
        <div style={{ textAlign: "right" }}> {formatNumber(rc.harga)} </div>
      ),
    },
    {
      title: "Keterangan",
      width: 200,
      dataIndex: "keterangan",
      sorter: (a, b) => a.keterangan.length - b.keterangan.length,
    },
    {
      title: "Icon",
      width: 50,
      render: (_, rc) => (
        // <div></div>
        <Image src={rc.varian_icon ? rc.varian_icon : ""} alt="-" width={15} preview={false} />
        // <div> {<UpCircleOutlined style={{ fontSize: "20px", fontWeight: "bold", color: "green" }} />} </div>
      ),
    },
    {
      title: "Verifikasi",
      width: 100,
      render: (_, rc) => (
        <div> <Button type="primary" icon={<EditOutlined />} /> </div>
      ),
    },
    // {
    //   width: 250,
    //   title: "Hapus / Update",
    //   render: (_, rc) => (
    //     <div style={{ display: "flex" }}>
    //       <Popconfirm
    //         title="Hapus Matakuliah ?"
    //         onConfirm={() => hapusMatakuliah(rc.id_mk)}
    //         // onCancel={cancel}
    //         okText="Hapus"
    //         cancelText="Batal"
    //       >
    //         <_Button icon={<DeleteOutlined />} sm={3} loading={loadingDel} block color="red" />
    //       </Popconfirm>

    //       <_Button icon={<EditOutlined />} sm={3} color="orange" onClick={() => tambahMatakuliah(rc)} />
    //       <_Button icon={<FileDoneOutlined />} sm={2} color="coral" onClick={() => topicBaru(rc)} />
    //     </div>
    //   ),
    // },



  ];



  const loadData = (val) => {
    console.log('val :>> ', val);
    var pg = currPage ? currPage : "1"
    var obj = {
      ...val,
      "tglawal": moment(val && val.tglawal).format('YYYY-MM-DD'),
      "tglakhir": moment(val && val.tglakhir).format('YYYY-MM-DD'),
    }
    setloadingDel(true)
    _Api.get("survey/show-by-varian-bahan-pokok?with[]=pasar&with[]=varian.komoditi&with[]=petugas_pasar&paginate=true&page="
      + pg, { params: obj }).then(res => {
        setloadingDel(false)
        setpaginate(res.data.meta)
        setdataSurvey(res.data.data)
      })
  }

  const loadCombo = () => {
    _Api.get("manajemen-pengguna").then(res => {
      setpetugasPasar(res.data.data)
      setloadingDel(false)
    })

    formData.setFieldsValue({
      tglawal: moment(),
      tglakhir: moment(),
    })
  }


  useEffect(() => {
    loadData()
    loadCombo()
  }, [])

  return (
    <_MainLayouts>

      <_TitleBar label=" DATA HASIL SURVEY BAHAN POKOK" />
      <p style={{ marginBlock: "10px" }}></p>
      <Form layout={"vertical"} onFinish={loadData} form={formData}>
        <_Row style={{ marginBottom: "400px" }}>
          <_Date sm={2} label="Tanggal Survey" format={"DD-MM-YYYY"} name="tglawal" />
          <_Date sm={2} label=" " format={"DD-MM-YYYY"} name="tglakhir" option={petugasPasar} />
          <_Select label="Nama petugas pasar" name="petugas_pasar_id" option={petugasPasar} sm={3} val="id" caption="nama" />
          <_AutocompleteRev
            name="pasar_id"
            sm={3}
            // onChange={handleChange("kodediagnosa", "diagnosa")}
            route='pasar'
            label="Lokasi Pasar"
            field="nama_pasar"
            val="id"
            search="nama_pasar"
          />
          <_Button
            sm={1}
            icon={<DownloadOutlined />}
            primary
            submit
            style={{ marginTop: "24px" }}
            title=""

          />
        </_Row>
      </Form>
      <Table
        rowKey="id"
        pagination={{ position: [], pageSize: 10 }} loading={loadingDel}
        columns={columns} dataSource={dataSurvey}
        scroll={{ x: 1, y: 1000 }}
        rowClassName={(record, index) => record == selected && 'bg-selected'}
        onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              setselected(record)
            },
          };
        }}

      />
      <br />
      <Pagination style={{ width: "100%", textAlign: "center" }} showQuickJumper defaultCurrent={currPage} total={paginate.total}
        onChange={(e) => {
          setcurrPage(e)
          loadData()
        }} />





    </_MainLayouts>
  );
}

export default SurveyBahanPokok;
