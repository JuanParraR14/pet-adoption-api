import { jest } from "@jest/globals";
import request from "supertest";

jest.unstable_mockModule("../src/services/adoption.service.js", () => ({
   getAllAdoptions: jest.fn(),
   getAdoptionById: jest.fn(),
   createAdoption: jest.fn(),
   updateAdoption: jest.fn(),
   deleteAdoption: jest.fn()
}));

const { default: app } = await import("../src/app.js");
const adoptionService = await import("../src/services/adoption.service.js");

beforeEach(() => {
   jest.clearAllMocks();
});

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

   test("Should return an empty array", async () => {

      adoptionService.getAllAdoptions.mockResolvedValue([]);

      const response = await request(app)
         .get("/api/adoptions");

      expect(response.statusCode).toBe(200);

      expect(response.body.payload).toEqual([]);

   });

   test("Should return 500 when service throws an error", async () => {

      adoptionService.getAllAdoptions.mockRejectedValue(
         new Error("Database error")
      );

      const response = await request(app)
         .get("/api/adoptions");

      expect(response.statusCode).toBe(500);

      expect(response.body.status).toBe("error");

   });

});

describe("GET /api/adoptions/:id", () => {

   test("Should return one adoption", async () => {

      adoptionService.getAdoptionById.mockResolvedValue({

         _id: "507f191e810c19729de860ea",

         petName: "Luna",

         species: "Dog",

         adopterName: "Juan",

         email: "juan@test.com"

      });

      const response = await request(app)
         .get("/api/adoptions/507f191e810c19729de860ea");

      expect(response.statusCode).toBe(200);

      expect(response.body.status).toBe("success");

   });

   test("Should return 404 when adoption does not exist", async () => {

      adoptionService.getAdoptionById.mockResolvedValue(null);

      const response = await request(app)
         .get("/api/adoptions/507f191e810c19729de860ea");

      expect(response.statusCode).toBe(404);

   });

   test("Should return 400 for invalid id", async () => {

      const response = await request(app)
         .get("/api/adoptions/123");

      expect(response.statusCode).toBe(400);

   });

});

describe("POST /api/adoptions", () => {

   test("Should create a new adoption", async () => {

      adoptionService.createAdoption.mockResolvedValue({

         _id: "507f191e810c19729de860ea",

         petName: "Luna",

         species: "Dog",

         adopterName: "Juan",

         email: "juan@test.com"

      });

      const response = await request(app)
      .post("/api/adoptions")
      .send({

         petName: "Luna",

         species: "Dog",

         adopterName: "Juan",

         email: "juan@test.com"

      });

      expect(response.statusCode).toBe(201);

      expect(response.body.status).toBe("success");

   });

   test("Should return 400 when petName is missing", async () => {

      const response = await request(app)
         .post("/api/adoptions")
         .send({

               species: "Dog",

               adopterName: "Juan",

               email: "juan@test.com"

         });

      expect(response.statusCode).toBe(400);

   }); 

   test("Should return 400 when species is missing", async () => {

      const response = await request(app)
         .post("/api/adoptions")
         .send({

               petName: "Luna",

               adopterName: "Juan",

               email: "juan@test.com"

         });

      expect(response.statusCode).toBe(400);

   });

   test("Should return 400 when adopterName is missing", async () => {

      const response = await request(app)
         .post("/api/adoptions")
         .send({

               petName: "Luna",

               species: "Dog",

               email: "juan@test.com"

         });

      expect(response.statusCode).toBe(400);

   });

   test("Should return 500 when service fails", async () => {

      adoptionService.createAdoption.mockRejectedValue(
         new Error("Database error")
      );

      const response = await request(app)
         .post("/api/adoptions")
         .send({

               petName: "Luna",

               species: "Dog",

               adopterName: "Juan",

               email: "juan@test.com"

         });

      expect(response.statusCode).toBe(500);

   });

});

describe("PUT /api/adoptions/:id", () => {

   test("Should update an adoption", async () => {

      adoptionService.updateAdoption.mockResolvedValue({

         _id: "507f191e810c19729de860ea",

         petName: "Rocky",

         species: "Dog",

         adopterName: "Juan",

         email: "juan@test.com"

      });

      const response = await request(app)
      .put("/api/adoptions/507f191e810c19729de860ea")
      .send({

         petName: "Rocky",

         species: "Dog",

         adopterName: "Juan",

         email: "juan@test.com"         

      });

      expect(response.statusCode).toBe(200);

      expect(response.body.status).toBe("success");

   });
   
   test("Should return 404 when adoption does not exist", async () => {

      adoptionService.updateAdoption.mockResolvedValue(null);

      const response = await request(app)
      .put("/api/adoptions/507f191e810c19729de860ea")
      .send({

         petName: "Rocky",

         species: "Dog",

         adopterName: "Juan",

         email: "juan@test.com"         

      });

      expect(response.statusCode).toBe(404);

   });

   test("Should return 400 for invalid id", async () => {

      const response = await request(app)
      .put("/api/adoptions/123")
      .send({

         petName: "Rocky",

         species: "Dog",

         adopterName: "Juan",

         email: "juan@test.com"

      });

      expect(response.statusCode).toBe(400);

   });

   test("Should return 400 when petName is missing", async () => {

      const response = await request(app)
      .put("/api/adoptions/507f191e810c19729de860ea")
      .send({

         species: "Dog",

         adopterName: "Juan",

         email: "juan@test.com"

      });

      expect(response.statusCode).toBe(400);

   });

   test("Should return 500 when service throws an error", async () => {

      adoptionService.updateAdoption.mockRejectedValue(
         new Error("Database error")
      );

      const response = await request(app)
      .put("/api/adoptions/507f191e810c19729de860ea")
      .send({

         petName: "Rocky",

         species: "Dog",

         adopterName: "Juan",

      });

      expect(response.statusCode).toBe(500);

   });

});

describe("DELETE /api/adoptions/:id", () => {

   test("Should delete an adoption", async () => {

      adoptionService.deleteAdoption.mockResolvedValue({
         _id: "507f191e810c19729de860ea"
      });

      const response = await request(app)
      .delete("/api/adoptions/507f191e810c19729de860ea");

      expect(response.statusCode).toBe(200);

      expect(response.body.status).toBe("success");

      expect(response.body.message).toBe("Adoption deleted successfully");

   });

   test("Should return 404 when adoption does not exist", async () => {

      adoptionService.deleteAdoption.mockResolvedValue(null);

      const response = await request(app)
      .delete("/api/adoptions/507f191e810c19729de860ea");

      expect(response.statusCode).toBe(404);

   });

   test("Should return 400 for invalid id", async () => {

      const response = await request(app)
      .delete("/api/adoptions/123");

      expect(response.statusCode).toBe(400);

   });

   test("Should return 500 when service throws an error", async () => {

      adoptionService.deleteAdoption.mockRejectedValue(
         new Error("Database error")
      );

      const response = await request(app)
         .delete("/api/adoptions/507f191e810c19729de860ea");

      expect(response.statusCode).toBe(500);

   });

});