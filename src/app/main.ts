import { Product } from "./products/product.model";

const product: Product = {
  id: 1,
  title: "Shirt",
  stock: 300,
  description: "This is a shirt",
  sizes: "L",
  category: {
    id: 1,
    name: "Shirts",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  createdAt: new Date(),
  updatedAt: new Date()
}
