const jwt = require("jsonwebtoken");

const middlewareController = {
  verifyToken: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, TaiKhoan) => {
        if (err) {
          return res.status(403).json("Token không hợp lệ");
        }
        req.TaiKhoan = TaiKhoan;
        next();
      });
    } else {
      res.status(401).json("Bạn chưa được xác thực");
    }
  },
  verifyTokenAndAdminAuth: (req, res, next) => {
    middlewareController.verifyToken(req, res, () => {
      if (req.TaiKhoan.id == req.param.id || req.TaiKhoan.PhanQuyen) {
        next();
      } else {
        res.status(403).json("Bạn không có quyền");
      }
    });
  },
};

module.exports = middlewareController;