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
import { apiUpdateCanBo } from "../API";
const ModalStaffInfo = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showDis, setShowDis] = useState(false);
  const [name, setName] = useState(props.user.name);
  const [image,setImage] = useState(props.user.image)
  const [email, setEmail] = useState(props.user.email);
  const [cmnd, setCmnd] = useState(props.user.cmnd);
  const [role,setRole] = useState(props.user.role)
  const [date, setDate] = useState(props.user.date);
  const [sex, setSex] = useState(props.user.sex);
  const [country, setCountry] = useState(props.user.country);
  const [folk, setFolk] = useState(props.user.folk);
  const [nationality, setNationality] = useState(props.user.nationality);
  const [position, setPositon] = useState(props.user.position);
  const [office, setOffice] = useState(props.user.office);
  const [address, setAddress] = useState(props.user.address);
  const handleChangeCitizen = async (e) => {
    e.preventDefault();
    const obj = {
      _id: props.user._id,
      name: name,
      image : image,
      date: date,
      sex: sex,
      country: country,
      address: address,
      office: office,
      folk: folk,
      nationality: nationality,
    };
    const data = await apiUpdateCanBo(obj);
    if (data.message) {
      alert("Đã cập nhật thành công!");
      setShowDis(false);
      props.loadUsers();
    } else {
      alert("Lỗi");
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Chi tiết
      </Button>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Thông tin cán bộ">
            <Modal.Header closeButton>
              <Modal.Title>Thông tin cán bộ</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={(e) => handleChangeCitizen(e)}>
              <Row>
                    <div>
                      <img src={image} alt="hinh " />
                    </div>
                  </Row>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Hình đại diện</Form.Label>
                    <Form.Control
                      required
                      onChange={(e) => setImage(e.target.value)}
                      disabled={showDis === false}
                      value={image}
                      type="text"
                      placeholder="Nhập hình"
                    />
                  </Form.Group>
                <Row>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Tên</Form.Label>
                    <Form.Control
                      required
                      onChange={(e) => setName(e.target.value)}
                      disabled={showDis === false}
                      value={name}
                      type="text"
                      placeholder="Nhập Tên"
                    />
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Chứng minh dân nhân</Form.Label>
                    <Form.Control
                      required
                      disabled
                      value={cmnd}
                      type="number"
                      placeholder="Nhập cmnd"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      disabled
                      value={email}
                      type="text"
                      placeholder="Nhập Email"
                    />
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Chức vụ</Form.Label>
                    <Form.Select required 
                    disabled
                    value={role}>
                      <option value="">Chọn chức vụ</option>
                      <option value="1">Cán bộ 1</option>
                      <option value="2">Cán bộ 2</option>
                      <option value="3">Admin</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Ngày tháng năm sinh</Form.Label>
                    <Form.Control
                      required
                      onChange={(e) => setDate(e.target.value)}
                      disabled={showDis === false}
                      value={date.slice(0, 10)}
                      type="date"
                      placeholder="Nhập date"
                    />
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Giới tính</Form.Label>
                    <Form.Select
                      required
                      disabled={showDis === false}
                      value={sex}
                      onChange={(e) => setSex(e.target.value)}
                    >
                      <option value="">Chọn giới tính</option>
                      <option value="Nam">Nam</option>
                      <option value="Nữ">Nữ</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Quê quán</Form.Label>
                    <Form.Control
                      required
                      onChange={(e) => setCountry(e.target.value)}
                      disabled={showDis === false}
                      value={country}
                      type="text"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Dân tộc</Form.Label>
                    <Form.Control
                      required
                      onChange={(e) => setFolk(e.target.value)}
                      disabled={showDis === false}
                      value={folk}
                      type="text"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Khu vực làm việc</Form.Label>
                    <Form.Control
                      required
                      onChange={(e) => setOffice(e.target.value)}
                      disabled={showDis === false}
                      value={office}
                      type="text"
                      placeholder="Nhập khu vực làm việc"
                    />
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Chức vụ</Form.Label>
                    <Form.Control
                      disabled
                      value={position}
                      type="text"
                      placeholder="Chức vụ"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Quốc tịch</Form.Label>
                    <Form.Control
                      required
                      onChange={(e) => setNationality(e.target.value)}
                      disabled={showDis === false}
                      value={nationality}
                      type="text"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Địa Chỉ </Form.Label>
                    <Form.Control
                      required
                      onChange={(e) => setAddress(e.target.value)}
                      disabled={showDis === false}
                      value={address}
                      type="text"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                </Row>
                <Button
                  onClick={() => {
                    setShowDis(!showDis);
                  }}
                  className="ml-auto btn btn-primary"
                >
                  Sửa thông tin cá nhân
                </Button>
                <Button
                  disabled={showDis === false}
                  style={{ marginLeft: "88%" }}
                  variant="primary"
                  type="submit"
                >
                  Cập nhật
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  handleClose();
                  setShowDis(false);
                }}
              >
                Close
              </Button>
            </Modal.Footer>
          </Tab>
          {/* <Tab eventKey="profile" title="Sổ hộ khẩu">
            <Modal.Header closeButton>
              <Modal.Title>Người trong sổ hộ khẩu</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {props.allUser
                .filter((el, index) => {
                  return el.numberHousehold == props.user.numberHousehold;
                })
                .map((obj, index) => {
                  return (
                    <Form key={index}>
                      <Row>
                        <Form.Group as={Col} className="mb-3">
                          <Form.Label>Tên</Form.Label>
                          <Form.Control
                            disabled
                            value={obj.name}
                            type="text"
                            placeholder="Enter email"
                          />
                        </Form.Group>
                      </Row>

                      <Row>
                        <Form.Group as={Col} className="mb-3">
                          <Form.Label>Ngày tháng năm sinh</Form.Label>
                          <Form.Control
                            disabled
                            value={obj.date.slice(0, 10)}
                            type="text"
                            placeholder="Enter email"
                          />
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3">
                          <Form.Label>Giới tính</Form.Label>
                          <Form.Control
                            disabled
                            value={obj.sex}
                            type="text"
                            placeholder="Enter email"
                          />
                        </Form.Group>
                      </Row>
                    </Form>
                  );
                })}
            </Modal.Body>
          </Tab>
          <Tab eventKey="contact" title="Tiền án tiền sự">
            <Modal.Header closeButton>
              <Modal.Title>Tiền án tiền sự</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Thời gian</th>
                    <th>Loại hình phạt</th>
                    <th>Lý do</th>
                  </tr>
                </thead>
                <tbody>
                  {props.user.TienAnTienSu.map((el, index) => {
                    return (
                      <tr key={index}>
                        <td>{el.date.slice(0, 10)}</td>
                        <td>{el.penalty}</td>
                        <td>{el.violationError} </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <hr></hr>
              <h5>Thêm tiền án tiền sự</h5>
              <Form onSubmit={(e) => handleTienAn(e)}>
                <Row>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Thời gian</Form.Label>
                    <Form.Control
                      onChange={(e) => setDateCri(e.target.value)}
                      required
                      type="date"
                      placeholder="Nhập thời gian"
                    />
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Nhập Loại Hình Phạt</Form.Label>
                    <Form.Control
                      onChange={(e) => setPenalty(e.target.value)}
                      required
                      type="text"
                      placeholder="Nhập loại hình phạt"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Lý do</Form.Label>
                    <Form.Control
                      onChange={(e) => setViolationError(e.target.value)}
                      required
                      type="text"
                      placeholder="Lý do"
                    />
                  </Form.Group>
                </Row>
                <Row style={{textAlign: "center"}}>
                <Button type="submit" className="btn btn-primary">
                  Gửi
                </Button>
                </Row>
              </Form>
            </Modal.Body>
          </Tab>*/}
        </Tabs>
      </Modal>
    </>
  );
};

export default ModalStaffInfo;
