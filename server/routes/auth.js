const router = require("express").Router();
const {
    login,
    register,
    getAllUsers,
    setAvatar,
  } = require("../controllers/userController");
  
  router.post("/login", login);
  router.post("/register", register);
  router.get("/allusers/:id", getAllUsers);
  router.post("/setavatar/:id", setAvatar);
  
  module.exports = router;
  