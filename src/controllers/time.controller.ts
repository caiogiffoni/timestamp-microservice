import { Request, Response } from "express";
import { TimeService } from "../services/time.service";

export const TimeController = async (req: Request, res: Response) => {
  const time = await TimeService();
  return res.status(201).json(time);
};
