const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

const character = {
  id: 432,
  name: "Name",
  species: "Human",
  gender: "Male",
  status: "Alive",
  origin: {
    name: "Earth (C-137",
  },
  image: "image.jpg",
};

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await agent.get("/rickandmorty/character/1");
      expect(response.statusCode).toBe(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get("/rickandmorty/character/1");
      const props = ["id", "name", "species", "gender", "status", "origin", "image"];
      props.forEach((prop) => {
        expect(response.body).toHaveProperty(prop);
      });
    });
  });

  it("Si hay un error responde con status: 500", async () => {
    const response = await agent.get("/rickandmorty/character/87979");
    expect(response.statusCode).toBe(500);
  });

  describe("GET /rickandmorty/login", () => {
    const access = { access: true };

    it("Contesta con un objeto en su propiedad access en true si los datos son correctos", async () => {
      const response = await agent.get("/rickandmorty/login?email=jmzul@gmail.com&password=zul123");
      expect(response.body).toEqual(access);
    });

    it("Responde con un objeto con la propiedad access en false si la información del usuario no es válida", async () => {
      const response = await agent.get("/rickandmorty/login?email=jmzul@mail.com&password=zul123");
      access.access = false;
      expect(response.body).toEqual(access);
      //
    });
  });

  describe("POST /rickandmorty/character/:id", () => {
    it("Debe guardar el personaje en favoritos", async () => {
      const response = await agent.post("/rickandmorty/fav").send(character);
      expect(response.body).toContainEqual(character);
    });

    it("Debe agregar personajes a favoritos sin eliminar los que ya existen", async () => {
      character.id = 324;
      character.name = "Datos";
      const response = await agent.post("/rickandmorty/fav").send(character);
      expect(response.body.length).toBe(2);
    });
  });

  describe("DELETE /rickandmorty/character/:id", () => {
    it("Si el id solocitado no se encuentra debe retornar un array con los favoritos", async () => {
      const response = await agent.delete("/rickandmorty/fav/2");
      expect(response.body.length).toBe(2);
    });

    it("Si el id enviado existe, deberia eliminarlo de favoritos", async () => {
      const response = await agent.delete("/rickandmorty/fav/432");
      expect(response.body.length).toBe(1);
    });
  });
});
