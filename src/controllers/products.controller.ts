import { Request, Response } from "express";
import {
  ICreateProduct,
  IUpdateProduct,
} from "../interfaces/products.interface";
import { ProductService } from "../services/products.service";

export class ProductController {
  async create(req: Request, res: Response) {
    const product: ICreateProduct = req.body;

    const data = await new ProductService().create(product);

    return res.status(201).json(data);
  }

  async get(req: Request, res: Response) {
    const data = await new ProductService().get();

    return res.json(data);
  }

  async delete(req: Request, res: Response) {
    const productId: string = req.params.id;

    const data = await new ProductService().delete(productId);

    return res.status(204).json(data);
  }

  async update(req: Request, res: Response) {
    const productId: string = req.params.id;
    const product: IUpdateProduct = req.body;

    const data = await new ProductService().update(product, productId);

    return res.json(data);
  }
}
