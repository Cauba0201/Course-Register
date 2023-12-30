const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars");
const methodOverride = require("method-override");
const app = express();
const port = 3000;

const route = require("./routes");
//db
const db = require("./config/db");
//connected to db
db.connect();

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
// {{!-- handlebars --}}
// fix error req.body at create data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// method
app.use(methodOverride("_method"));

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources", "views"));

// {{!-- handlebars --}}

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
route(app);
