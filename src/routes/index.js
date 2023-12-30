const newsRouter = require("./news");
const courseRouter = require("./courses");
const siteRouter = require("./site");
const meRouter = require("./me");

function route(app) {
  // app.get("/", (req, res) => {
  //   res.render("home");
  // });

  app.use("/news", newsRouter);
  app.use("/me", meRouter);
  app.use("/courses", courseRouter);
  app.use("/", siteRouter);

  // app.get("/search", (req, res) => {
  //   res.render("search");
  // });
}

module.exports = route;
