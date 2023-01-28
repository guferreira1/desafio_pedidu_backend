import { ConflictError, NotFoundError } from "../helpers/errors";
import {
  ICreateProduct,
  IUpdateProduct,
} from "../interfaces/products.interface";
import { productRepository } from "../repositories/products.repository";

export class ProductService {
  async create(payload: ICreateProduct) {
    const { category, name, quantity } = payload;

    const newProduct = productRepository.create({
      category,
      name,
      quantity,
    });

    await productRepository.save(newProduct);

    return newProduct;
  }

  async get() {
    const products = await productRepository.find({
      where: {
        status: "active",
      },
    });

    return products;
  }

  async delete(productId: string) {
    const product = await productRepository.findOneBy({ id: productId });

    if (product!.status === "inactive") {
      throw new ConflictError("Product not exists");
    }

    await productRepository.update(productId, {
      status: "inactive",
      deleted_at: new Date(),
    });

    return {};
  }

  async update(payload: IUpdateProduct, productId: string) {
    const { category, name, quantity } = payload;

    const product = await productRepository.findOneBy({ id: productId });

    if (!product) {
      throw new NotFoundError("Product id not found");
    }

    await productRepository.update(productId, {
      ...product,
      category,
      name,
      quantity,
      updated_at: new Date(),
    });

    return product;
  }
}
