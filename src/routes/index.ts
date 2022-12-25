import { Express, Request, Response } from "express";
import { TimeNowController, TimeParController } from "../controllers/time.controller";

export const appRoutes = (app: Express) => {
  app.get("/bananaa", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Hello World",
    });
  });

  app.get("/api", TimeNowController);
  app.get("/api/:date", TimeParController);
};
