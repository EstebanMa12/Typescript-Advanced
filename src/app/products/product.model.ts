export type Sizes ='S' |'M' |'L' |'XL';
import { Category } from "../categories/category.model";

export interface Product{
    id: number|string;
    title: string;
    price: number;
    description: string;
    sizes?: Sizes;
    category : Category;
}
