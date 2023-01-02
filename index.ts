import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import userController from "./src/controllers/users.controller";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response): void => {
  res.send({
    appName: "Typescript and Express",
    version: "0.0.1",
  });
});

app.get("/users", userController.getUsers);
app.get("/users/login", userController.login);

app.listen(port, (): void => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
