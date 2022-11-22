const loginRouter = require("./login");
const siteRouter = require("./site");

function route(app) {
  app.use("/loginadmin", loginRouter);
  //   app.use("/home", siteRouter);
}

module.exports = route;
