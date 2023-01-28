import { Router } from "express";
import { ProductController } from "../../controllers/products.controller";

const productsController = new ProductController();

export const productsRoutes = Router();

productsRoutes.post("/", productsController.create);
productsRoutes.get("/", productsController.get);
productsRoutes.delete("/:id", productsController.delete);
productsRoutes.patch("/:id", productsController.update);
