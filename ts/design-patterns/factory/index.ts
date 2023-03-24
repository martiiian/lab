interface IProduct {
  name: string
  description: string
}

class Product implement IProduct {
  name: ''
  description: ''
}


class Factory {
  static createProduct({ name, description }): Product {
    return new Product(name, description)
  }
}
