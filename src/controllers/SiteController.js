const Course = require("../app/models/Course");
const { mutipleMongooseToObject } = require("../util/mongoose");

class SiteController {
  // GET/
  index(req, res, next) {
    Course.find()
      // .then(function (courses) {
      //   res.json(courses);
      // })
      .then((courses) => {
        // courses = courses.map((course) => course.toObject());
        res.render("home", { courses: mutipleMongooseToObject(courses) });
      })
      // .catch(function (err) {
      //   res.status(400).json({ error: "ERROR...!" });
      // });
      .catch(next);

    // res.render("home");
  }

  // GET /search
  search(req, res) {
    res.render("Search");
  }
}

module.exports = new SiteController();
