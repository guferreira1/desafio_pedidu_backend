import { Router } from "express";
import { IbgeController } from "../../controllers/ibge.controller";

const ibgeController = new IbgeController();

export const ibgeRoutes = Router();

ibgeRoutes.get("/", ibgeController.getExternalData);
