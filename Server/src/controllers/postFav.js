const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { name, origin, status, image, species, gender } = req.body;

    if (!name || !origin || !status || !image || !species || !gender)
      return res.status(401).json({ message: "Faltan datos" });

    const character = { name, origin, status, image, species, gender };
    const char = await Favorite.findOrCreate({ where: { character } });
    const allFav = await Favorite.findAll(char);
    res.status(200).json(allFav);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = postFav;
