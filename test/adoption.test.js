import request from "supertest";
import app from "../src/app.js";

describe("Pet Adoption API", () => {

   it("GET / should return API status", async () => {

      const response = await request(app).get("/");

      expect(response.statusCode).toBe(200);

      expect(response.body.status).toBe("success");

   });

});