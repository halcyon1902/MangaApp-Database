class SiteController {
  //[Get] /home
  home(req, res) {
    res.render("home");
  }

  // show thong tin 1 object
  //   show(req, res) {
  //     res.send("tai khoang detail");
  //   }
}

module.exports = new SiteController();
