class NewsController {
  index(req, res) {
    res.render("news");
  }

  // GET /news/:slugs
  show(req, res) {
    res.send("NEWS DETAILS");
  }
}

module.exports = new NewsController();
