
import { addProduct , findProducts, products, updateProduct } from "./products/product.services";
import {faker} from '@faker-js/faker'


for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    stock: faker.number.int({min:10,max:100}),
    description: faker.commerce.productDescription(),
    sizes: faker.helpers.arrayElement(['S','M','L','XL']),
    image: faker.image.urlPicsumPhotos(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['tag1', 'tag2', 'tag3']),
    categoryId :faker.string.uuid(),
  })
}

// console.log(products)

const product = products[0];
console.log(updateProduct(product.id.toString(), {
  title: 'New title',
  stock: 80,
}))

console.log(findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
}))
