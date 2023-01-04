import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();

    return res.render("homePage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let login_crud = (req, res) => {
  return res.render("crud");
};

let getCRUD = (req, res) => {
  return res.send("huy hung CRUD");
};

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  return res.send("Thêm thành công");
};

let displayCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  console.log("----------------------------");

  console.log("----------------------------");

  return res.render("displaycrud.ejs", {
    dataTable: data,
  });
};

let editCRUD = async (req, res) => {
  let userId = req.query.id;

  if (userId) {
    let userData = await CRUDService.getUserInfobyId(userId);
    console.log(userData);

    return res.render("editCRUD.ejs", {
      user: userData,
    });
  } else {
    return res.send("không có user tìm kiếm");
  }
  return res.send("1111111111111");
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let allUsers = await CRUDService.updateUserData(data);
  return res.render("displaycrud.ejs", {
    dataTable: allUsers,
  });
};

let deleteCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await CRUDService.deleteUserById(id);
    return res.send("delete user success");
  } else {
    return res.send("user not found");
  }
};

module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  login_crud: login_crud,
  postCRUD: postCRUD,
  displayCRUD: displayCRUD,
  editCRUD: editCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD,
};
