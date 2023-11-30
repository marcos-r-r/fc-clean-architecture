import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import {
  inputUpdateProductDto,
  outputUpdateProductDto,
} from "./update.product.dto";

export default class UpdateProductUseCase {
  constructor(private ProductRepository: ProductRepositoryInterface) {}

  async execute(input: inputUpdateProductDto): Promise<outputUpdateProductDto> {
    const product = await this.ProductRepository.find(input.id);

    product.changeName(input.name);
    product.changePrice(input.price);

    await this.ProductRepository.update(product);

    return {
      id: product.id,
      name: product.name,
      price: product.price,
    };
  }
}
