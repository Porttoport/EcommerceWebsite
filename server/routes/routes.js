const ProductController = require("../controllers/controller");

module.exports = (app) => {
  app.get("/", ProductController.Indexs);
  app.get("/:id", ProductController.Show);
  app.put("/edit/:id", ProductController.Update);
  app.post("/new", ProductController.Create);
  app.delete("/delete/:id", ProductController.Delete);
};
