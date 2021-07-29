import { Request, Response } from "express";
import { Session } from "express-session";
import { createUserLoader } from "../utils/createUserLoader";

export type MyContext = {
  req: Request & { session: Session };
  res: Response;
  userLoader: ReturnType<typeof createUserLoader>;
};
