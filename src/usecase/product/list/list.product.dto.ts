export interface inputListProductDto {}

type Product = {
  id: string;
  name: string;
  price: number;
};

export interface outputListProductDto {
  products: Product[];
}
