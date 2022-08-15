import React, { useEffect, useState } from "react";
import { NavLink, useNavigate  } from "react-router-dom";
import "../css/Navigation.css";
import { isAuthenticated, signout } from "./user/apiCore";
import Logo from "../img/Logo.png"
const Navigation = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser({ ...isAuthenticated().user });
  }, []);
  const signOut = () => {
    signout();
  };
  return (
    <>
      <div className="header">
        <div className="title-1">
          <div onClick={() => navigate("/", { replace: true })} className="img">
            <img
              src= {Logo}
              alt=""
            />
          </div>

          <div className="title-word">
            <h4>Cổng thông tin quốc gia về</h4>
            <h3>Hồ sơ công dân</h3>
          </div>
        </div>

        <div>
          {isAuthenticated().user ? (
            <>
              <h4>
                Xin chào cán bộ <span>{isAuthenticated().user.name}</span> !
              </h4>
              <NavLink
              
                onClick={() => signOut()}
                exact
                to="/"
                className="btn btn-primary"
              >
                Đăng xuất
              </NavLink>
            </>
          ) : (
            <>
              <h4>Xin chào !</h4>
              <NavLink exact to="/Login" className="btn btn-primary">
                Đăng nhập
              </NavLink>
              <NavLink exact to="/SignUp" className="btn btn-primary m-2">
                Đăng ký
              </NavLink>
            </>
          )}
        </div>
      </div>
      <nav>
        <ul className="nav-bar-link">
          {!isAuthenticated().user && (
            <>
              <li>
                <NavLink  exact to="/">
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/news">
                  Tin tức
                </NavLink>
              </li>
            </>
          )}
          {isAuthenticated().user && isAuthenticated().user.role === 1 && (
            <>
              <li>
                <NavLink exact to="/">
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink  exact to="/Home">
                  Hồ sơ công dân
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/Yourownappointment">
                  Danh Sách Xin Xác Nhận
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/GopY">
                  Góp Ý
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/Request">
                  Yêu cầu lên cơ quan cấp trên
                </NavLink>
              </li>
            </>
          )}
          {isAuthenticated().user && isAuthenticated().user.role === 2 && (
            <>
              <li>
                <NavLink exact to="/">
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/Home">
                  Hồ sơ công dân
                </NavLink>
              </li>         
              <li>
                <NavLink exact to="/Notification">
                  Thông báo
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/RequestList">
                  Danh Sách Lịch Hẹn
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/Statistics">
                  Thống kê và Báo cáo
                </NavLink>
              </li>
            </>
          )}
           {isAuthenticated().user && isAuthenticated().user.role === 3 && (
            <>
              <li>
                <NavLink exact to="/Home">
                  Hồ sơ công dân
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/StaffProfile">
                  Hồ sơ cán bộ
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/Issue">
                  Vấn đề được gửi lên
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
