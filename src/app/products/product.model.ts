import { BaseModel } from './../base.model';
export type Sizes ='S' |'M' |'L' |'XL';
import { Category } from "../categories/category.model";

export interface Product extends BaseModel{
    title: string;
    stock: number;
    description: string;
    sizes?: Sizes;
    category: Category;
}
