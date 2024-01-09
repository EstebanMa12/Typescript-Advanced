
import { addProduct} from "./product.services";
import { Product } from "./product.model";

const product: Product = {
    id: 1,
    title: "Shirt",
    price: 300,
    description: "This is a shirt",
    sizes: "L"
}

addProduct(product)
console.log(product)
