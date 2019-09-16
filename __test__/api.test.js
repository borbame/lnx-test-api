const axios = require("axios"),
  API = "https://jsonplaceholder.typicode.com/users";

let req, data;

describe("/GET users", () => {
  beforeAll(async done => {
    (req = await axios.get(API)), ([data] = req.data);
    done();
  });

  it("deve retornar status 200", () => {
    expect(req.status).toEqual(200);
  });

  it("deve ser um content-type do tipo application/json", () => {
    expect(req.headers["content-type"]).toEqual(
      "application/json; charset=utf-8"
    );
  });

  it("deve ter a propriedade name", () => {
    expect(data).toHaveProperty("name");
  });

  it("deve nunca conter o nome Fábio", () => {
    expect(data.name).not.toBe("Fábio");
  });

  it('deve conter "Leanne Graham" no primeiro registro', () => {
    expect(data.name).toBe("Leanne Graham");
  });
});
