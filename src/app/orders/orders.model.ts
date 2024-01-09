import { Product } from "../products/product.model";
import { User } from "../users/users.model";

export interface Order{
  id: number|string;
  createdAt: Date;
  user: User;
  products: Product[];
}

