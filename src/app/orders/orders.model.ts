import { Product } from "../products/product.model";
import { User } from "../users/users.model";
import { BaseModel } from "../base.model";

export interface Order extends BaseModel{
  user: User;
  products: Product[];
}

