const { Favorite } = require("../models/Favorite");

const deleteFav = (req, res) => {
  const { id } = req.params;
  try {
    deleteFav.findByIdAndRemove(id, (err) => {
      if (err) {
        res.status(400).send({ message: "Error al eliminar favorito" });
      } else {
        res.status(200).json({ Favorite });
      }
    });
  } catch (error) {
    res.status(500).send({ message: err });
  }
};

module.exports = deleteFav;
