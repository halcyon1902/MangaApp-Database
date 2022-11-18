import axios from "axios";
import { loginFailed, loginStart, loginSuccess, logOutFailed, logOutStart, logOutSuccess } from "./authSlice";
import { getUsersFailed, getUsersStart, getUsersSuccess, putUsersStart, putUsersSuccess, putUsersFailed } from "./userSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:8000/TaiKhoan/login", user);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (err) {
    dispatch(loginFailed());
  }
};
export const getAllUsers = async (accessToken, dispatch, axiosJWT) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get("http://localhost:8000/TaiKhoan", {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailed());
  }
};
export const logOut = async (dispatch, id, navigate, accessToken, axiosJWT) => {
  dispatch(logOutStart());
  try {
    await axiosJWT.post("http://localhost:8000/TaiKhoan/logout", id, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(logOutSuccess());
    navigate("/login");
  } catch (err) {
    dispatch(logOutFailed());
  }
};
