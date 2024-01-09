import { BaseModel } from './../base.model';
export type Sizes ='S' |'M' |'L' |'XL';
import { Category } from "../categories/category.model";

export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  sizes?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}
