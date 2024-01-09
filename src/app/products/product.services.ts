import { Product } from "./product.model"
import { CreateProductDto, FindProductDto, UpdateProductDto } from "./product.dto"
import { faker } from "@faker-js/faker"

export const products: Product[] = []

export const addProduct = (data: CreateProductDto):Product =>{
  const newProduct={
    ...data,
    id :faker.string.uuid(),
    createdAt :faker.date.recent(),
    updatedAt :faker.date.recent(),
    category :{
      id :data.categoryId,
      name :faker.commerce.department(),
      createdAt :faker.date.recent(),
      updatedAt :faker.date.recent(),
    }
  }
    products.push(newProduct)
    return newProduct
}

export const getProducts = (): Product[]=>{
    return products
}

export const updateProduct = (id: string, changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index];
}

export const deleteProduct = (id: string)=>{
    const index = products.findIndex((product)=> product.id === id)
    products.splice(index, 1)
}

export const findProducts = (dto: FindProductDto): Product[] => {

}

