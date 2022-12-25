import { Request, Response } from "express";
import { TimeNowService, TimeParService } from "../services/time.service";

export const TimeNowController = async (req: Request, res: Response) => {
  const time = await TimeNowService();
  return res.status(201).json(time);
};

export const TimeParController = async (req: Request, res: Response) => {
  const {date} = req.params;
  const time = await TimeParService(date);
  return res.status(201).json(time);
};
