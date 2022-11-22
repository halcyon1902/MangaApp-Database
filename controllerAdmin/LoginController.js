class LoginController {
  //[Get] /loginadmin
  index(req, res) {
    res.render("loginadmin");
  }

  // show thong tin 1
  //   show(req, res) {
  //     res.send("tai khoang detail");
  //   }
}

module.exports = new LoginController();
