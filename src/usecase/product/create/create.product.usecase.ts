import ProductFactory from "../../../domain/product/factory/product.factory";
import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import {
  inputCreateProductDto,
  outputCreateProductDto,
} from "./create.product.dto";

export default class CreateProductUseCase {
  private productRepository: ProductRepositoryInterface;

  constructor(productRepository: ProductRepositoryInterface) {
    this.productRepository = productRepository;
  }

  async execute(input: inputCreateProductDto): Promise<outputCreateProductDto> {
    const product = ProductFactory.create("a", input.name, input.price);

    return {
      id: product.id,
      name: product.name,
      price: product.price,
    };
  }
}
