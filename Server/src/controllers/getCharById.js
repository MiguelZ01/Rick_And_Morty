const URL = "https://rickandmortyapi.com/api/character";
const axios = require("axios");

const getCharById = async (req, res) => {
  const { id } = req.params;

  try {
    const { data } = await axios(`${URL}/${id}`);

    const character = {
      id: data.id,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
      status: data.status,
    };

    if (!character) throw new Error("Hubo un error");
    return res.json(character);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getCharById;
