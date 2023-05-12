const {login} = require("../controllers/login");
const {getChartById} = require("../controllers/getChartById");
const {postFav,deleteFav} = require("../controllers/handleFavorites");
const router = require("express").Router();

router.get("/character/:id", (req,res)=>{
  getChartById(req,res)
})
router.get("/login", (req,res)=>{
    login(req,res)
})
router.get("/fav", (req,res)=>{
    postFav(req,res)
})

router.get("/fav/:id", (req,res)=>{
   deleteFav(req,res)
})
module.exports = router;