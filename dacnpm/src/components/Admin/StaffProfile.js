import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import queryString from "query-string";
import "../../css/Home.css";
import Pagination from "react-bootstrap-4-pagination";
import { Table, Form, Row, Col, Button } from "react-bootstrap";
import NotifiModal from "../Notification/NotifiModal";
import ModalAddStaff from "./ModalAddStaff";
import { apiloadCanBo, apiDeleteStaff } from "../API";
import ModalStaffInfo from "./ModalStaffInfo";
const StaffProfile = () => {
  const [users, setUser] = useState([]);
  const [allUser, setAllUser] = useState([]);
  const [cmnd, setCmnd] = useState(0);
  const [obj, setObj] = useState({
    name: "",
    city: "",
  });
  const [input, setInput] = useState("");
  useEffect(() => {
    loadUsers(objPagi);
  }, []);

  const loadUsers = async (obj) => {
    const paramString = queryString.stringify(obj);
    const data = await apiloadCanBo(paramString);
    setTotalRow(data.totalRow);
    setUser(data.data);
    setAllUser(data.dataAll);
  };

  const handleChangeName = (e) => {
    setObj({
      ...obj,
      name: e.target.value,
    });
  };
  const handleChangeAddress = (e) => {
    setObj({
      ...obj,
      city: e.target.value,
    });
  };
  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };
  const handleDelete = async (id) => {
    const data = await apiDeleteStaff(id);
    alert(data.message);
    loadUsers(objPagi);
  };
//   const handleSubmitCMPN = async (e) => {
//     e.preventDefault();
//     if (cmnd === 0) {
//       loadUsers(objPagi);
//     } else {
//       const data = await apiSearchCmnd(cmnd);
//       if (data === null) {
//         alert("Không tìm thấy thông tin cá nhân!");
//       } else {
//         setUser([data]);
//         setTotalRow(1)
//       }
//     }
//   };
  ///Pagination
  const [totalRow, setTotalRow] = useState(1);
  const [objPagi, setObjPagi] = useState({
    page: 1,
    perPage: 5,
  });
  let paginationConfig = {
    totalPages: Math.ceil(totalRow / objPagi.perPage),
    currentPage: objPagi.page,
    showMax: 5,
    size: "sm",
    threeDots: true,
    prevNext: true,
    onClick: function (page) {
      handleChangePage(page);
    },
  };
  const handleChangePage = (pageChange) => {
    setObjPagi({
      ...objPagi,
      page: pageChange,
    });
    console.log(objPagi);
    loadUsers({
      ...objPagi,
      page: pageChange,
    });
  };
  return (
    <>
      <section>
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Hồ sơ cán bộ</h1>
          <div style={{ textAlign: "center" }} className="row mb-2">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <Row>
                <Col>
                  <ModalAddStaff loadUsersWAdd={() => loadUsers(objPagi)} />
                </Col>
              </Row>
              {/* <Row>
                <Col sm={2}>
                  <Form.Label>Huyện</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Select
                    onChange={(e) => handleChangeName(e)}
                    aria-label="Default select example"
                  >
                    <option>Tất cả</option>
                    {users.map((user, index) => (
                      <option key={index} value={user.name}>
                        {user.name}
                      </option>
                  )}
                  </Form.Select>
                </Col>
              </Row> */}
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              {/* <Row>
                <Col sm={1}>
                  <Form.Label>Xã</Form.Label>
                </Col>
                <Col sm={11}>
                  <Form.Select
                    onChange={(e) => handleChangeAddress(e)}
                    aria-label="Default select example"
                  >
                    <option>Tất cả</option>
                    {users.map((user, index) => (
                      <option key={index} value={user.nation}>
                        {user.nation}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
              </Row> */}
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div>
                <div>
                  {/* <form onSubmit={(e) => handleSubmitCMPN(e)}>
                    <span>
                      <FaSearch />
                    </span>
                    <input
                      style={{ padding: "5px", margin: "5px" }}
                      onChange={(e) => setCmnd(Number(e.target.value))}
                      minLength = "9"
                      size="9"
                      type="number"
                      placeholder="Theo cmnd"
                    />
                    <button type="submit" className="btn btn-primary">
                      Dữ Liệu
                    </button>
                  </form> */}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Tên</th>
                    <th>Email</th>
                    <th>Giới Tính</th>
                    <th>Ngày Sinh</th>
                    <th style={{ textAlign: "center" }}>Chi Tiết</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <th>{index + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.sex}</td>
                      <td>{user.date.slice(0, 10)}</td>
                      <td style={{ textAlign: "center" }}>
                        <ModalStaffInfo
                          loadUsers={() => loadUsers(objPagi)}
                          allUser={allUser}
                          user={user}
                        />
                        <NotifiModal
                          handleSubmit={() => handleDelete(user._id)}
                          Title={"Xoá"}
                          Header={"Xoá Cán Bộ"}
                          Content="Bạn có chắc chắn muốn xoá"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
          <div
            className="pagination"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <div className="App">
              <Pagination {...paginationConfig} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StaffProfile;
