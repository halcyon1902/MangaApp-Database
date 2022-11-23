const loginRouter = require("./login");
const siteRouter = require("./site");
const tacgiaRouter = require("./tacgia");
const theloaiRouter = require("./theloai");

function route(app) {
  app.use("/loginadmin", loginRouter);
  app.use("/tacgia", tacgiaRouter);
  app.use("/theloai", theloaiRouter);

  app.use("/", siteRouter);
}

module.exports = route;
