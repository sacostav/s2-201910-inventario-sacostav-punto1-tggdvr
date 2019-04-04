export class Inventario {
  id: number;
  name: string;
  description: string;
  reference: string;
  status: string;
  inventory: Inventory;
  category: Category;
}

class Inventory {
  unit: string;
  availableQuantity: number;

}

class Category {
  id: number;
  name: string;
}