import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import ModalDetailRequestList from "./ModalDetailRequestList";
import ModalBookRequestList from "./ModailBookRequestList";
import Appointment from "./Appointment";
import { apiLoadLichHen } from "./API";
const RequestList = () => {
  const [lichhen, setLichhen] = useState([]);
  const [status, setStatus ]= useState(0);
  useEffect(() => {
    loadAppointment();
  }, []);
  const loadAppointment = async () => {
    const data = await apiLoadLichHen();
    setLichhen(data);
  };
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
                  <th>Mã số lịch hẹn</th>
                  <th>Ngày</th>
                  <th>Giờ</th>
                  <th>Tên công dân</th>
                  <th>Chứng minh thư</th>
                  <th>Nội dung lịch hẹn</th>
                  <th>Chú thích</th>
                  <th>Trạng thái</th>
                  <th>Xoá</th>
                </tr>
              </thead>
              <tbody>
                {lichhen.map((el, index) => (
                  <Appointment key = {index} loadAppointment = {() => loadAppointment()}  lichhen = {el} index = {index}></Appointment>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestList;
