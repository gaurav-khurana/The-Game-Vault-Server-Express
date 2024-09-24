const fs = require("fs");

// controller to GET All Xbox Games

// async function getAllXboxGames(req, res) {
//   try {
//     const response = await knex("allgames").where({
//       platform: "Xbox One  Xbox Series X | S",
//     });
//     console.log(response);

//     res.status(200).json(response);
//   } catch (error) {
//     res.status(400).json({ message: "Cannot get all xbox games" });
//   }
// }

function getAllXboxGames(_req, res) {
  try {
    const allXboxGames = fs.readFileSync("./data/xbox-ps-games.json");
    const allXboxGamesParsed = JSON.parse(allXboxGames);
    console.log(allXboxGamesParsed);
    return res
      .status(200)
      .json(allXboxGamesParsed.filter((game) => game.id >= 1 && game.id <= 10));
  } catch (error) {
    console.log(error);
  }
}

// controller to GET Single Xbox Game by Id

const singleXboxGame = async (req, res) => {
  try {
    const singleXboxGame = await knex("allgames").where({
      platform: "Xbox One  Xbox Series X | S",
      id: req.params.id,
    });

    if (singleXboxGame.length === 0) {
      return res.status(404).json({
        message: `Xbox game with id ${req.params.id} does not exist`,
      });
    }

    const singleXboxGameData = singleXboxGame[0];

    res.status(200).json(singleXboxGameData);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Cannot get xbox game with id ${req.params.id}` });
  }
};

// controller to Get All PS Games

const getAllPsGames = async (req, res) => {
  try {
    const response = await knex("allgames").where({ platform: "PS4 PS5" });
    console.log(response);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: "Can't get all PS5 games" });
  }
};

// controller to Get Single PS Game by Id

const getSinglePsGame = async (req, res) => {
  try {
    const singlePsGame = await knex("allgames").where({
      platform: "PS4 PS5",
      id: req.params.id,
    });

    if (singlePsGame.length === 0) {
      return res.status(404).json({
        message: `Playstation game with id ${req.params.id} does not exist`,
      });
    }

    const getSinglePsGameData = singlePsGame[0];

    res.status(200).json(getSinglePsGameData);
  } catch (error) {
    res.status(500).json({
      message: `Cannot get playstation game with id ${req.params.id}`,
    });
  }
};

module.exports = {
  getAllXboxGames,
  singleXboxGame,
  getAllPsGames,
  getSinglePsGame,
};
