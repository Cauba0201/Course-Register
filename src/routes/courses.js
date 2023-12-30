const express = require("express");
const router = express.Router();

const courseController = require("../controllers/CourseController");

router.get("/create", courseController.create); // CURD-C
router.post("/store", courseController.store); // CURD-C
router.get("/:id/edit", courseController.edit); // CURD-U
router.put("/:id", courseController.update); // CURD-U
router.delete("/:id", courseController.destroy); // CURD-D
router.get("/:slug", courseController.show); // CURD-R

module.exports = router;
