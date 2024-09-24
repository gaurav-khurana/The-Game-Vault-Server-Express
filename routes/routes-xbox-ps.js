const router = require("express").Router();
require("dotenv").config();
const fs = require("fs");
// import {fs} from 'fs';
const allGamesController = require("../controllers/allGamesController");

// routes for xbox

// route to get all xbox games

router.route("/xbox").get(allGamesController.getAllXboxGames);
// function getAllXboxGames() {
//   try {
//     const allXboxGames = fs.readFileSync("./data/xbox-ps-games.json");
//     const allXboxGamesParsed = JSON.parse(allXboxGames);
//     console.log(allXboxGamesParsed);
//     return allXboxGamesParsed;
//   } catch (error) {
//     console.log(error);
//   }
// }

// router.route("/xbox").get((req, res) => {
//   res.status(200).json(getAllXboxGames());
// });

// route to get single xbox game by id

router.route("/xbox/:id").get(allGamesController.singleXboxGame);

// routes for PS games

// route to GET all PS games

router.route("/ps").get(allGamesController.getAllPsGames);

// route to GET single Ps game by id

router.route("/ps/:id").get(allGamesController.getSinglePsGame);

module.exports = router;
