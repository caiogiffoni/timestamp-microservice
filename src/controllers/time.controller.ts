import { Request, Response } from "express";

export const myController = async (req: Request, res: Response) => {

  return res.status(201).json("hi");
};
