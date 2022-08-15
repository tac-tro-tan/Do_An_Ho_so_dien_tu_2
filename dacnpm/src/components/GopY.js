import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import Appointment from "./Appointment";
import { apiDeleteGopY, apiLoadGopY } from "./API";
import NotifiModal from "./Notification/NotifiModal";
const GopY = () => {
  const [gopY, setGopY] = useState([]);
  useEffect(() => {
    loadGopY();
  }, []);
  const loadGopY = async () => {
    const data = await apiLoadGopY();
    if(data)
    setGopY(data);
  };
  const handleSubmit = async (id) => {
    const data = await apiDeleteGopY(id);
    if(data.message) {
        alert("Xoá thành công");
        loadGopY();
      }
      else{
        alert("Lỗi");
      }
  }
  return (
    <section>
      <div className="container">
        <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
          Danh sách lịch hẹn
        </h1>
        <div className="row">
          <div className="col-md-12">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên công dân</th>
                  <th>Chứng minh thư</th>
                  <th>Tiêu đề</th>
                  <th>Nội dung</th>
                  <th>Xoá</th>
                </tr>
              </thead>
              <tbody>
                {gopY.map((el, index) => (
                  <tr key = {el._id}>
                    <th>{index+1}</th>
                    <th>{el.ThongTinCaNhan.name}</th>
                    <th>{el.ThongTinCaNhan.cmnd}</th>
                    <th>{el.title}</th>
                    <th>{el.comment}</th>
                    <th><Button onClick = {() => {handleSubmit(el._id)}}>Xoá</Button></th>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GopY;
