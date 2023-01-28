import AppDataSource from "../data-source";
import { Product } from "../entities/Products.entity";

export const productRepository = AppDataSource.getRepository(Product);
