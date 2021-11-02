const ExamController = require("../controllers/controller");

module.exports = (app) => {
  app.get("/", ExamController.Indexs);
  app.get("/pets/:id", ExamController.Show);
  app.put("/edit/pets/:id", ExamController.Update);
  app.post("/pets/new", ExamController.Create);
  app.delete("/pets/delete/:id", ExamController.Delete);
};
