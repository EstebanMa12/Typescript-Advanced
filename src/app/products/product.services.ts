import { Product } from "./product.model"

export const products: Product[] = []

export const addProduct = (data: Product)=>{
    products.push(data)
}

export const getProducts = (): Product[]=>{
    return products
}

export const updateProduct = (id: string, changes: Product) =>{
    const index = products.findIndex((product)=> product.id === id)
    products[index] = changes
}

export const deleteProduct = (id: string)=>{
    const index = products.findIndex((product)=> product.id === id)
    products.splice(index, 1)
}

