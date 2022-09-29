const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const tacgiaRoute = require("./routes/TacGia");
const truyenRoute = require("./routes/Truyen");

//Sử dụng để tạo file .env - sử dụng để tạo file chứa các thông tin mật
dotenv.config();

//bodyParser phân tích dữ liệu và đưa vào document => lấy data form từ req.body
//giới hạn 50mb
app.use(bodyParser.json({ limit: "50mb" }));
//CORS là một cơ chế cho phép nhiều tài nguyên khác nhau (fonts, Javascript, v.v…) của một trang web có thể được truy vấn từ domain khác với domain của trang
app.use(cors());
// khi send request sẽ thông báo dưới terminal
app.use(morgan("common"));

//test duong dan
app.get("/test", (req, res) => {
  res.status(200).json("Server kết nối thành công");
});

//Connect Database
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to MongoDB successful");
});

//Routes
app.use("/v1/tacgia", tacgiaRoute);
app.use("/v1/truyen", truyenRoute);

//
app.listen(8000, () => {
  console.log("Server is running");
});
