
import { addProduct , products } from "./products/product.services";
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

console.log(products)
