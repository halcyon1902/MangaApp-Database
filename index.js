const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const tacgiaRoute = require("./routes/TacGia");
const truyenRoute = require("./routes/Truyen");
const taikhoanRoute = require("./routes/TaiKhoan");
const chapterRoute = require("./routes/Chapter");
const binhluanRoute = require("./routes/BinhLuan");

//Sử dụng để tạo file .env - sử dụng để tạo file chứa các thông tin cần bảo mật
dotenv.config();

//bodyParser phân tích dữ liệu và đưa vào document => lấy data form từ req.body
//giới hạn 50mb
app.use(bodyParser.json({ limit: "50mb" }));
//CORS là một cơ chế cho phép nhiều tài nguyên khác nhau (fonts, Javascript, v.v…) của một trang web có thể được truy vấn từ domain khác với domain của trang
app.use(cors());
// khi send request sẽ thông báo dưới terminal
app.use(morgan("common"));

//Connect Database
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to MongoDB successful");
});

//Routes
app.use("/TacGia", tacgiaRoute);
app.use("/Truyen", truyenRoute);
app.use("/TaiKhoan", taikhoanRoute);
app.use("/Chapter", chapterRoute);
app.use("/BinhLuan", binhluanRoute);

//kiểm tra port hoạt động ở 8000
app.listen(8000, () => {
  console.log("Server is running");
});
