import { Product } from "./product.model";

export interface CreateProductDto extends Omit<Product, 'id'|'createdAt'|'updatedAt'|'category'>{
  categoryId: string;
}

export interface UpdateProductDto extends Partial<CreateProductDto>{}

type example = Pick<Product,'title'|  'image'|  'description'|  'stock'|  'sizes'|  'color'|  'price'|  'isNew'|  'tags'>

type example2 = Required<Product >

export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>>{
  readonly tags?: ReadonlyArray<string>;
}
