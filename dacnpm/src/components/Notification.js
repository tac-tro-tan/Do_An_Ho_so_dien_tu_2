import React, { useState } from "react";
import { Form, Row, Col, Button, Modal } from "react-bootstrap";
import NotifiModal from "./Notification/NotifiModal";

import "../css/Notification.css";
import { apiCreateThongBao } from "./API";
const Notification = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmitNoti = async () => {
    if(title === "" || content === ""){
      return alert("Vui lòng nhập đầy đủ các trường!");
    }
    const Noti = {
      title: title,
      content: content,
    };
    const data = await apiCreateThongBao(Noti);
    if(data.message){
      alert("Đã gửi thành công");
    }
  };
  return (
    <>
      <section>
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Gửi thông báo</h1>
          <Form onSubmit={(e) => handleSubmitNoti(e)}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Tiêu đề
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  required
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Tiêu đề"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Nội dung
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  required
                  onChange={(e) => setContent(e.target.value)}
                  style={{ height: "200px" }}
                  as="textarea"
                  placeholder="Nội dung ..."
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <NotifiModal
                  handleSubmit={() => handleSubmitNoti()}
                  Title={"Gửi"}
                  Header={"Thông báo"}
                  Content={"Bạn có muốn gửi thông báo"}
                />
              </Col>
            </Form.Group>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Notification;
