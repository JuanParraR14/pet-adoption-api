import express from "express";
import adoptionRouter from "./routes/adoption.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/adoptions", adoptionRouter);

app.get("/", (req, res) => {
   res.json({
      status: "success",
      message: "Pet Adoption API is running"
   });
});

export default app;