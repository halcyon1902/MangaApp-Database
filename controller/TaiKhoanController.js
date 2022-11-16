const { Truyen, TacGia, TaiKhoan } = require("../model/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let refreshTokens = [];
const taikhoanController = {
  //Thêm tài khoản
  AddTaiKhoan: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.MatKhau, salt);
      //tạo tài khoản mới
      const taikhoan = new TaiKhoan({
        TaiKhoan: req.body.TaiKhoan,
        MatKhau: hashed,
        Email: req.body.Email,
      });
      //lưu vào database
      const saveTaiKhoan = await taikhoan.save();
      res.status(200).json(saveTaiKhoan);
    } catch (err) {
      res.status(500).json(err);
    }
  }, //Lấy toàn bộ tài khoản
  GetAllTaiKhoan: async (req, res) => {
    try {
      const taikhoan = await TaiKhoan.find();
      res.status(200).json(taikhoan);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Lấy thông tin 1 tài khoản
  Get1TaiKhoan: async (req, res) => {
    try {
      const taikhoan = await TaiKhoan.findById(req.params.id);
      res.status(200).json(taikhoan);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Cập nhật thông tin tài khoản
  Update1TaiKhoan: async (req, res) => {
    try {
      const taikhoan = await TaiKhoan.findById(req.params.id);
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.MatKhau, salt);
      await taikhoan.updateOne({
        $set: {
          MatKhau: hashed,
          Email: req.body.Email,
          PhanQuyen: req.body.PhanQuyen,
          TrangThai: req.body.TrangThai,
          TaiKhoan: req.body.TaiKhoan,
        },
      });
      res.status(200).json("Cập nhật thành công");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  loginUser: async (req, res) => {
    try {
      const user = await TaiKhoan.findOne({ TaiKhoan: req.body.TaiKhoan });
      if (!user) {
        return res.status(404).json("Sai tên tài khoản");
      }
      const validPassword = await bcrypt.compare(req.body.MatKhau, user.MatKhau);
      if (!validPassword) {
        return res.status(404).json("Sai mật khẩu");
      }
      if (user && validPassword) {
        const accessToken = taikhoanController.generateAccessToken(user);
        const refreshToken = taikhoanController.generateRefreshToken(user);
        refreshTokens.push(refreshToken);
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          path: "/",
          sameSite: "strict",
        });
        const { MatKhau, ...others } = user._doc; //lấy tất cả thông tin trừ mật khẩu
        res.status(200).json({ ...others, accessToken });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //generate access token
  generateAccessToken: (TaiKhoan) => {
    return jwt.sign(
      {
        id: TaiKhoan.id,
        PhanQuyen: TaiKhoan.PhanQuyen,
      },
      process.env.JWT_ACCESS_KEY,
      {
        expiresIn: "1h",
      }
    );
  },
  //generate refresh token
  generateRefreshToken: (TaiKhoan) => {
    return jwt.sign(
      {
        id: TaiKhoan.id,
        PhanQuyen: TaiKhoan.PhanQuyen,
      },
      process.env.JWT_REFRESH_KEY,
      {
        expiresIn: "365d",
      }
    );
  },
  requestRefreshToken: async (req, res) => {
    // lấy refresh token form user
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json("Bạn chưa được xác thực");
    }
    if (!refreshTokens.includes(refreshToken)) {
      return res.status(403).json("Refresh token không hợp lệ");
    }
    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, TaiKhoan) => {
      if (err) {
        console.log(err);
      }
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
      const newAccessToken = taikhoanController.generateAccessToken(TaiKhoan);
      const newRefreshToken = taikhoanController.generateRefreshToken(TaiKhoan);
      refreshTokens.push(newRefreshToken);
      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });
      res.status(200).json({
        accessToken: newAccessToken,
      });
    });
  },
  logoutUser: async (req, res) => {
    res.clearCookie("refreshToken");
    refreshTokens = refreshTokens.filter((token) => token !== req.cookies.refreshToken);
    return res.status(200).json("Đăng xuất thành công");
  },
};

// xuất controller
module.exports = taikhoanController;
