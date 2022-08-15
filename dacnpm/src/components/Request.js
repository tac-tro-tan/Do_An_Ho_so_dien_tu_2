import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import {apiCreateYeuCau, apireadXinXacNhan } from "./API";
import NotifiModal from "./Notification/NotifiModal";
const Request = () => {
  const [title,setTitle] = useState("");
  const [describe,setDescribe] = useState("");
  const [profilecode, setProfilecode] = useState("");
  const [profile, setProfile] = useState({
    ThongTinCaNhan: {
      name : "",
    },
    problem : "",
    createdAt: "",
  });
  const [Alert,setAlert] = useState(false);
  const readXinXacNhan = async () => {
    const data = await apireadXinXacNhan(profilecode);
    if(data.error){
        setProfile({});
        setAlert(true);
    }else{
        setAlert(false);
        setProfile(data);
    }
  };
  const handleSubmit = async () => {
    const obj = {
      title: title,
      describe : describe,
      XinXacNhan : profilecode
    }
    const data = await apiCreateYeuCau(obj);
    if(data.error){
        alert("Lỗi")
    }else{
        alert("Gửi thành công")
    }
  };
  return (
    <section>
      <div className="container">
        <h1 style={{ textAlign: "center",marginBottom:"50px" }}>Yêu cầu lên cơ quan cấp trên</h1>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={2}>
                  Tiêu đề
                </Form.Label>
                <Col sm={10}>
                  <Form.Control 
                  onChange={(e) => setTitle(e.target.value)}
                  required type="text" 
                  placeholder="Hồ sơ cần xác minh" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
              >
                <Form.Label column sm={2}>
                  Mô tả
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                  required
                  onChange={(e) => setDescribe(e.target.value)}
                    style={{ height: "200px" }}
                    as="textarea"
                    placeholder="Nhập mô tả ..."
                  />
                </Col>
              </Form.Group>
            </Form>
          </div>
          <div className="col-md-6 col-sm-12">
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>
                  Mã số hồ sơ
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    onChange={(e) => {
                      setProfilecode(e.target.value);
                    }}
                    type="text"
                    placeholder="Nhập mã"
                  />
                </Col>
                <Col sm={4}>
                  <Button onClick={() => readXinXacNhan()} className="btn btn-primary">
                    Dữ Liệu
                  </Button>
                </Col>
              </Form.Group>
                    {Alert && 
                    <Row>
                        <h6 style={{color:"red"}}>Mã hồ sơ không tìm thấy</h6>
                    </Row> }
                    
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>
                  Họ tên
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    value={profile.ThongTinCaNhan.name || ""}
                    disabled
                    type="text"
                    placeholder=""
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>
                  Giấy tờ
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    value={profile.problem || ""}
                    disabled
                    type="text"
                    placeholder=""
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>
                  Đề nghị lúc
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    value={profile.createdAt.slice(0,10) || ""}
                    disabled
                    type="text"
                    placeholder=""
                  />
                </Col>
              </Form.Group>
            </Form>
          </div>
        </div>
        <div style={{textAlign:"center", marginTop: "100px"}}>
              <NotifiModal handleSubmit = {() => handleSubmit()}  Title = {"Gửi"} Header = {"Thông Báo"} Content = {"Xác nhận gửi !"}/>
          </div>
      </div>

    </section>
  );
};

export default Request;
