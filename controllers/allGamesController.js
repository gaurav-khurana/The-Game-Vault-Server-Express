const fs = require("fs");

// controller to GET All Xbox Games

async function getAllXboxGames(_req, res) {
  try {
    const allXboxGames = await fs.readFileSync("./data/xbox-ps-games.json");

    const allXboxGamesParsed = JSON.parse(allXboxGames);

    const onlyXboxGames = allXboxGamesParsed.filter(
      (game) => game.id >= 1 && game.id <= 10
    );

    return res.status(200).json(onlyXboxGames);
  } catch (error) {
    res.status(500).json({ message: "Cant retrieve xbox games" });
    console.log(error);
  }
}

// controller to GET Single Xbox Game by Id

const singleXboxGame = async (req, res) => {
  try {
    const gameId = req.params.id;

    const allXboxGames = await fs.readFileSync("./data/xbox-ps-games.json");

    const allXboxGamesParsed = JSON.parse(allXboxGames);

    const onlyXboxGames = allXboxGamesParsed.filter(
      (game) => game.id >= 1 && game.id <= 10
    );

    const singleXboxGameData = onlyXboxGames.find((game) => {
      if (game.id == gameId) {
        return game;
      }
    });

    return res.status(200).json(singleXboxGameData);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Cant get xbox game data with id ${req.params.id}` });
    console.log(error.message);
  }
};

// controller to Get All PS Games

const getAllPsGames = (_req, res) => {
  try {
    const allPSGames = fs.readFileSync("./data/xbox-ps-games.json");

    const allPSGamesParsed = JSON.parse(allPSGames);

    return res
      .status(200)
      .json(allPSGamesParsed.filter((game) => game.id > 10 && game.id <= 20));
  } catch (error) {
    res.status(500).json({ message: "Cant retrieve PS games" });
    console.log(error);
  }
};

// controller to Get Single PS Game by Id

const getSinglePsGame = async (req, res) => {
  try {
    const gameId = req.params.id;

    const allPSGames = await fs.readFileSync("./data/xbox-ps-games.json");

    const allPSGamesParsed = JSON.parse(allPSGames);

    const onlyPSGames = allPSGamesParsed.filter(
      (game) => game.id >= 10 && game.id <= 20
    );

    const singlePSGameData = onlyPSGames.find((game) => {
      if (game.id == gameId) {
        return game;
      }
    });

    return res.status(200).json(singlePSGameData);
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
