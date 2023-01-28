import { Router } from "express";
import { ibgeRoutes } from "./ibge/ibge.routes";
import { productsRoutes } from "./products/products.routes";

export const routes = Router();

routes.use("/products", productsRoutes);
routes.use("/ibge", ibgeRoutes);
