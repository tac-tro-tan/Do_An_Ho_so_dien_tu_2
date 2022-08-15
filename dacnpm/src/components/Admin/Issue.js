import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { apiLoadYeuCau } from "../API";
// import ModalAppoinment from "./ModalAppoinment";
import ProcessingIssue from "./ProcessingIssue";
const Issue = () => {
  const [lichhen, setLichhen] = useState([]);
  const [status, setStatus] = useState(0);
  useEffect(() => {
    loadAppointment();
  }, []);
  const loadAppointment = async () => {
    const data = await apiLoadYeuCau();
    setLichhen(data);
  };
  return (
    <section>
      <div className="container">
        <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
          Danh sách giấy tờ
        </h1>
        <div className="row">
          <div className="col-md-12">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã số hồ sơ</th>
                  <th>Thời gian</th>
                  <th>Tên công dân</th>
                  <th>Chứng minh thư</th>
                  <th>Giấy tờ</th>
                  <th>Số lượng</th>
                  <th>Trạng thái</th>
                  <th>Xoá</th>
                </tr>
              </thead>
              <tbody>
                {lichhen.map((el, index) =>
                  el.XinXacNhan !== null ? (
                    <ProcessingIssue
                      key={el._id}
                      loadAppointment={() => {
                        loadAppointment();
                      }}
                      lichhen={el}
                      index={index}
                    ></ProcessingIssue>
                  ) : (
                    ""
                  )
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Issue;
