"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/http/app.ts
var import_express6 = __toESM(require("express"));
var import_express_handlebars = require("express-handlebars");
var import_path = __toESM(require("path"));

// src/routes/index.ts
var import_express5 = require("express");

// src/routes/home.ts
var import_express = require("express");
var router = (0, import_express.Router)();
router.get("/", (req, res) => {
  return res.render("home");
});
var home_default = router;

// src/routes/login.ts
var import_express2 = require("express");
var router2 = (0, import_express2.Router)();
router2.get("/", (req, res) => {
  return res.render("login");
});
var login_default = router2;

// src/routes/register.ts
var import_express3 = require("express");
var router3 = (0, import_express3.Router)();
router3.get("/", (req, res) => {
  return res.render("cadastro");
});
var register_default = router3;

// src/routes/users/index.ts
var import_express4 = require("express");
var router4 = (0, import_express4.Router)();
router4.get("/", (req, res) => {
  return res.render("users");
});
var users_default = router4;

// src/routes/index.ts
var router5 = (0, import_express5.Router)();
router5.use("/", home_default);
router5.use("/login", login_default);
router5.use("/cadastro", register_default);
router5.use("/dashboard", users_default);
var routes_default = router5;

// src/http/app.ts
var App = class {
  app;
  constructor() {
    this.app = (0, import_express6.default)();
    this.config();
    this.routes();
  }
  config() {
    this.app.engine(".hbs", (0, import_express_handlebars.engine)({
      extname: ".hbs",
      defaultLayout: "main",
      layoutsDir: import_path.default.join(__dirname, "views", "layouts"),
      partialsDir: import_path.default.join(__dirname, "views", "partials")
    }));
    this.app.set("view engine", ".hbs");
    this.app.set("views", import_path.default.join(__dirname, "../views"));
    this.app.use(import_express6.default.static(import_path.default.join(__dirname + "../public")));
    this.app.use(import_express6.default.json());
    this.app.use(import_express6.default.urlencoded({ extended: true }));
  }
  routes() {
    this.app.use("/", routes_default);
    this.app.use("*", (req, res) => res.render("404"));
  }
  listen(port) {
    this.app.listen(port, () => console.log("Server is running on port http://localhost:3335"));
  }
};

// src/http/server.ts
var app = new App();
app.listen(3335);
