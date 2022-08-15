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
import { apiCreateCanBo, apiCreateCitizen } from "../API";
const ModalAddStaff = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [cmnd, setCmnd] = useState(0);
  const [role, setRole] = useState(1);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image,setImage] = useState("");
  const [date, setDate] = useState(Date);
  const [sex, setSex] = useState("");
  const [country, setCountry] = useState("");
  const [folk, setFolk] = useState("Kinh");
  const [nationality, setNationality] = useState("Việt Nam");
  const [address, setAddress] = useState("");
  const [office, setOffice] = useState("Đà Nẵng");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      TaiKhoan: {
        email: email,
        password: password,
        role: parseInt(role),
      },
      ThongTinCanBo: {
        image : image,
        cmnd: cmnd,
        name: name,
        date: date,
        sex: sex,
        country: country,
        address: address,
        folk: folk,
        office: office,
        nationality: nationality,
      },
    };
    console.log(obj);
    const data = await apiCreateCanBo(obj);
    if (!data.error) {
      {
        props.loadUsersWAdd();
      }
      handleClose();
    } else {
      alert("Lỗi không tạo được cán bộ!");
    }
  };
  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Thêm cán bộ
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
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Nhập email"
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
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Chức vụ</Form.Label>
                <Form.Select required onChange={(e) => setRole(e.target.value)}>
                  <option value="">Chọn chức vụ</option>
                  <option value="1">Cán bộ 1</option>
                  <option value="2">Cán bộ 2</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <h5>Tạo thông tin tài khoản</h5>
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
            </Row>

            <Row>
            <Form.Group as={Col} className="mb-3">
                <Form.Label>Hình đại diện</Form.Label>
                <Form.Control
                required
                  onChange={(e) => setImage(e.target.value)}
                  type="text"
                  placeholder="Nhập image"
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Giới tính</Form.Label>
                <Form.Select required onChange={(e) => setSex(e.target.value)}>
                  <option value="">Chọn giới tính</option>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Khu vực làm việc</Form.Label>
                <Form.Control
                  required
                  value = {office}
                  onChange={(e) => setOffice(e.target.value)}
                  type="String"
                  placeholder="Nhập khu vực làm việc"
                />
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
            </Row>
            <Row>
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
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Địa chỉ</Form.Label>
                <Form.Control
                  required
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="Nhập địa chỉ nhà"
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

export default ModalAddStaff;
