
export class Product {
  id?: number;
  name?: string;
  description?: string;
  price?: number;

  constructor() {
    this.name = '',
      this.description = '';
    this.price = null;
  }
}
