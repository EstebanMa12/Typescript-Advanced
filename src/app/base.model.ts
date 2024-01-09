export interface BaseModel{
  readonly id: string | number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

// Using the readonly modifier doesn’t necessarily imply that a value is totally immutable - or in other words, that its internal contents can’t be changed. It just means the property itself can’t be re-written to.

// For example, if we have a readonly property that is an object, we can still change the properties of that object:

class Product {
  readonly category = {
    name: 'Shirts'
  };
}

const product = new Product();
product.category.name = 'Pants';
console.log(product.category.name); // Pants
product.category = { name: 'Pants' }; // Error

