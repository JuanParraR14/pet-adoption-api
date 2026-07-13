import { jest } from "@jest/globals";
import request from "supertest";

jest.unstable_mockModule("../src/services/adoption.service.js", () => ({
  getAllAdoptions: jest.fn(),
}));

const { default: app } = await import("../src/app.js");
const adoptionService = await import("../src/services/adoption.service.js");

describe("GET /api/adoptions", () => {

   test("Should return all adoptions", async () => {

      adoptionService.getAllAdoptions.mockResolvedValue([
         {
            _id: "1",
            petName: "Luna",
            species: "Dog",
            adopterName: "Juan",
            email: "juan@test.com"
         }
      ]);

      const response = await request(app)
         .get("/api/adoptions");

      expect(response.statusCode).toBe(200);

      expect(response.body.status).toBe("success");

      expect(response.body.payload).toHaveLength(1);

   });

});