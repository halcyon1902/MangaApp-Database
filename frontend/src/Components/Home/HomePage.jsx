import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../redux/apiRequest";
import { createAxios } from "../../createInstance";
import "./home.css";
import { loginSuccess } from "../../redux/authSlice";

const HomePage = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const userList = useSelector((state) => state.users.users?.allUsers);
  const msg = useSelector((state) => state.users?.msg);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let axiosJWT = createAxios(user, dispatch, loginSuccess);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (user?.accessToken) {
      getAllUsers(user?.accessToken, dispatch, axiosJWT);
    }
  }, []);

  return (
    <div>
      <div className="home-title">Danh sách tài khoản</div>
      <table>
        <tr>
          <th>ID</th>
          <th>Tên tài khoản</th>
          <th>Email</th>
          <th>Phân quyền</th>
          <th>Trạng thái</th>
          <th>Ngày tạo</th>
          <th></th>
        </tr>
        {userList.map((user) => (
          <tr>
            <td>{user._id}</td>
            <td>{user.TaiKhoan}</td>
            <td>{user.Email}</td>
            <td>{user.PhanQuyen.toString()}</td>
            <td>{user.TrangThai.toString()}</td>
            <td>{user.NgayTao}</td>
            <td>
              <button> Thay đổi quyền</button>
              <button> Thay đổi trạng thái</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default HomePage;
