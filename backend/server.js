import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(cors());


// api endpoints
app.use('/api/admin',adminRouter)

app.get("/", (req, res) => {
  res.send("API Working Correctly");
});

const startServer = async () => {
  await connectDB();
  await connectCloudinary();
  app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
  });
};

startServer();