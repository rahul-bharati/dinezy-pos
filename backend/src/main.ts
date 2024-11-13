import express, { Request, Response } from "express";
import "dotenv/config";
import mongoose from "mongoose";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";

const main = async () => {
  const app = express();

  app.use(express.json());
  app.use(morgan("combined"));
  app.use(compression());
  app.use(helmet());

  const PORT = process.env.PORT || 3000;
  const MONGODB_URI = process.env.MONGO_SRV || "mongodb://127.0.0.1:27017/test";

  await mongoose.connect(MONGODB_URI);

  app.get("/", (req: Request, res: Response) => {
    res.send({ hello: "world" });
  });

  app.listen(PORT, () => {
    console.log(`App running on PORT: ${PORT}`);
  });
};

main().catch((error) => console.error("Unknown error occurred", error));
