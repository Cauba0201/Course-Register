const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev", {
      useNewUrlPArser: true,
      useUnifiedTopology: true,
    });
    console.log("connected successfuly!");
  } catch (error) {
    console.log("connected faile!");
  }
}

module.exports = { connect };
