import { Inventario } from "./inventario";

export class InventarioDetail extends Inventario {
 
  taxes: Array<Tax> = [];
  prices: Array<Price> = []
}



class Tax {
  id: number;
  name: string;
  percentage: number;
  description: string;
  status: string;
}

class Price {
  idPriceList: number;
  name: string;
  price: number;
}