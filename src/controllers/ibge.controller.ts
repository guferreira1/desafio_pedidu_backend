import { Request, Response } from "express";
import { IbgeService } from "../services/ibge.service";

export class IbgeController {
  async getExternalData(req: Request, res: Response) {
    const data = await new IbgeService().getExternalApi();

    return res.json(data);
  }
}
