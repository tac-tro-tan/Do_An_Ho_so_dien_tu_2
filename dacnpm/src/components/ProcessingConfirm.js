import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {apiDeleteXinXacNhan, apiUpdateStatusXinXacNhan } from "./API";
import ModalAppoinment from "./ModalAppoinment";

const ProcessingConfirm = (props) => {
  const [status, setStatus] = useState(props.lichhen.status);
  const submitChangeStatus = async (e) => {
    e.preventDefault();
    const obj = { ...props.lichhen, status: parseInt(status) };
    const data = await apiUpdateStatusXinXacNhan(obj);
    if (data) {
      alert(data.message);
    } else {
      alert("Lỗi");
    }
  };
  const handleDelete = async() => {
    const data = await apiDeleteXinXacNhan(props.lichhen._id);
    if(data.message) {
      alert("Xoá thành công");
      props.loadAppointment();
    }
    else{
      alert("Lỗi");
    }
  } 
  return (
    <tr key={props.lichhen._id}>
      <th>{props.index + 1}</th>
      <td>{props.lichhen._id}</td>
      <td>{props.lichhen.createdAt.slice(0, 10)}</td>
      <td>{props.lichhen.ThongTinCaNhan.name}</td>
      <td>{props.lichhen.ThongTinCaNhan.cmnd}</td>
      <td>{props.lichhen.problem}</td>
      <td>{props.lichhen.number}</td>
      <td>
        <Form style={{display:"flex"}}  onSubmit={(e) => submitChangeStatus(e)}>
          <Form.Select
            required
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option value="">Chọn trạng thái</option>
            <option value="0">Chưa xử lý</option>
            <option value="1">Đã xử lý</option>
            <option value="2">Từ chối xử lý</option>
          </Form.Select>
          <Button style={{marginLeft: "10px"}} className="btn btn-primary" type="submit" value="submit">
            Gửi
          </Button>
        </Form>
      </td>
      <td>
      <Button
        onClick = {() => handleDelete()}
      >Xoá</Button>
      </td>
    </tr>
  );
};

export default ProcessingConfirm;
