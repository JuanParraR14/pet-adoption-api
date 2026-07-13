import request from "supertest";
import app from "../src/app.js";

describe("Application", () => {

   test("GET / should return API status", async () => {

      const response = await request(app).get("/");

      expect(response.statusCode).toBe(200);

      expect(response.body.status).toBe("success");

   });

   test("Unknown route should return 404", async () => {

      const response = await request(app).get("/unknown");

      expect(response.statusCode).toBe(404);

      expect(response.body.status).toBe("error");

   });

});