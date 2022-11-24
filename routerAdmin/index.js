const loginRouter = require("./login");
const siteRouter = require("./site");
const tacgiaRouter = require("./tacgia");
const theloaiRouter = require("./theloai");
const adminRouter = require("./admin");

function route(app) {
  app.use("/loginadmin", loginRouter);
  app.use("/tacgiaAdmin", tacgiaRouter);
  app.use("/theloaiAdmin", theloaiRouter);
  app.use("/admin", adminRouter);

  app.use("/", siteRouter);
}

module.exports = route;
