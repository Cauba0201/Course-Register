const Course = require("../app/models/Course");
const { mongooseToObject } = require("../util/mongoose");

class CourseController {
  // GET /search CURD-R
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/show", { course: mongooseToObject(course) })
      )
      .catch(next);
  }
  //GET/ create CURD-C
  create(req, res, next) {
    res.render("courses/create");
  }
  //POST/ courses/store //CURD-C
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch(next);

    res.send("COURSE CREATE");
  }

  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }

  //PUT/ course/:id //CURD-U
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses")) // lỗi chưa trả về giá trị sau khi sửa
      .catch(next);
    // res.json(req.body);
  }

  //DELETE/ course/:id //CURD-D
  destroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new CourseController();
