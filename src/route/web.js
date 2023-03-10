import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

let initWedRouters = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/crud", homeController.getCRUD);
  router.get("/login-crud", homeController.login_crud);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayCRUD);
  router.get("/edit-crud", homeController.editCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);
  return app.use("/", router);
};

module.exports = initWedRouters;
