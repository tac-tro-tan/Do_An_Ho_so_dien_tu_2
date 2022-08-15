import da from "date-fns/esm/locale/da/index.js";
import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Form,
  Tab,
  Tabs,
  Col,
  Row,
  Table,
} from "react-bootstrap";
import { apiCreateCitizen } from "./API";
const ModalAddCitizen = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cmnd, setCmnd] = useState(0);
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState(Date);
  const [sex, setSex] = useState("");
  const [weeding, setWeeding] = useState(0);
  const [country, setCountry] = useState("");
  const [folk, setFolk] = useState("Kinh");
  const [nationality, setNationality] = useState("Việt Nam");
  const [numberHousehold, setNumberHousehold] = useState(0);
  const [address, setAddress] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      TaiKhoan: {
        cmnd: cmnd,
        password: password,
      },
      ThongTinCaNhan: {
        image : image,
        name: name,
        date: date,
        sex: sex,
        weeding: weeding,
        country: country,
        numberHousehold: numberHousehold,
        address: address,
        folk: folk,
        nationality: nationality,
      },
    };
    const data = await apiCreateCitizen(obj);
    if (!data.error) {
      {
        props.loadUsersWAdd();
      }
      handleClose();
    } else {
      alert("Lỗi không tạo được công dân!");
    }
  };
  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Thêm Công Dân
      </Button>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tạo thông tin tài khoản</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <h5>Tạo Tài Khoản</h5>
            <hr></hr>
            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Chứng minh nhân dân</Form.Label>
                <Form.Control
                required
                  onChange={(e) => setCmnd(e.target.value)}
                  type="number"
                  placeholder="Nhập cmnd"
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control
                required
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Nhập mật khẩu"
                />
              </Form.Group>
            </Row>
            <h5>Tạo thông tin tài khoản</h5>
            <hr></hr>
            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Tên</Form.Label>
                <Form.Control
                required
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Nhập tên"
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Ngày tháng năm sinh</Form.Label>
                <Form.Control
                required
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  placeholder="Nhập ngày tháng năm sinh"
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Hình đại diện</Form.Label>
                <Form.Control
                required
                  onChange={(e) => setImage(e.target.value)}
                  type="text"
                  placeholder="Nhập image"
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Giới tính</Form.Label>
                <Form.Select
                required
                onChange={(e) => setSex(e.target.value)}>
                  <option value="">Chọn giới tính</option>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Tình trạng hôn nhân</Form.Label>
                <Form.Select
                required
                onChange={(e) => setWeeding(Number(e.target.value))}>
                  <option type = "Number" value= "0">Chưa kết hôn</option>
                  <option type = "Number" value="1">Đã kết hôn</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Quê quán</Form.Label>
                <Form.Control
                required
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  placeholder="Nhập quê quán"
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Dân tộc</Form.Label>
                <Form.Control
                required
                  onChange={(e) => setFolk(e.target.value)}
                  value="Kinh"
                  type="text"
                  placeholder="Nhập dân tộc"
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Quốc tịch</Form.Label>
                <Form.Control
                required
                  onChange={(e) => setNationality(e.target.value)}
                  value="Việt Nam"
                  type="text"
                  placeholder="Nhập quốc gia"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control
                required
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="Nhập địa chỉ nhà"
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Sổ hộ khẩu</Form.Label>
                <Form.Control
                required
                  onChange={(e) => setNumberHousehold(e.target.value)}
                  type="number"
                  placeholder="Nhập sổ hộ khẩu"
                />
              </Form.Group>
            </Row>

            <Button
              style={{ marginLeft: "90%" }}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddCitizen;
