const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
  test("It should respond with 200 success", async () => {
    await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

const completeLaunchData = {
  mission: "USS Enterprise",
  rocket: "NCC 1789-A",
  target: "Kepler-145 b",
  launchDate: "January 21, 2030",
};

const launchDataWithoutDate = {
  mission: "USS Enterprise",
  rocket: "NCC 1789-A",
  target: "Kepler-145 b",
};

const completeLaunchDataWithInvalidDate = {
  mission: "USS Enterprise",
  rocket: "NCC 1789-A",
  target: "Kepler-145 b",
  launchDate: "Tushar",
};

describe("Test POST /launches", () => {
  test("It should respond with 201 success", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData)
      .expect("Content-Type", /json/)
      .expect(201);

    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();

    expect(responseDate).toBe(requestDate);
    expect(response.body).toMatchObject(launchDataWithoutDate);
  });

  test("It should catch missing required properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithoutDate)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Missing required launch property",
    });
  });

  test("It should catch invalid dates", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchDataWithInvalidDate)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Invalid launch date",
    });
  });
});
