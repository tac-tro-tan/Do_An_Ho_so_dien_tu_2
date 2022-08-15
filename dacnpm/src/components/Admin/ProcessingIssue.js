import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {apiDeleteXinXacNhan, apiUpdateStatusXinXacNhan } from "../API";

const ProcessingIssue = (props) => {
  const [status, setStatus] = useState(props.lichhen.XinXacNhan.status);
  const submitChangeStatus = async (e) => {
    e.preventDefault();
    const obj = { ...props.lichhen.XinXacNhan, status: parseInt(status) };
    const data = await apiUpdateStatusXinXacNhan(obj);
    if (data) {
      alert(data.message);
    } else {
      alert("Lỗi");
    }
  };
  const handleDelete = async() => {
    const data = await apiDeleteXinXacNhan(props.lichhen.XinXacNhan._id);
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
      <td>{props.lichhen.XinXacNhan._id}</td>
      <td>{props.lichhen.XinXacNhan.createdAt.slice(0, 10)}</td>
      <td>{props.lichhen.XinXacNhan.ThongTinCaNhan.name === null ? "" : props.lichhen.XinXacNhan.ThongTinCaNhan.name}</td>
      <td>{props.lichhen.XinXacNhan.ThongTinCaNhan.cmnd === null ? "" : props.lichhen.XinXacNhan.ThongTinCaNhan.cmnd}</td>
      <td>{props.lichhen.XinXacNhan.problem}</td>
      <td>{props.lichhen.XinXacNhan.number}</td>
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

export default ProcessingIssue;
