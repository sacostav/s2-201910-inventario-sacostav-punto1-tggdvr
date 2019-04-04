
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inventario } from './inventario';
import { InventarioDetail } from './inventario-detail';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const inventarios = 'inventarios.json';

/**
* The service provider for everything related to inventarios
*/
@Injectable()
export class InventarioService {

  /**
  * Constructor of the service
  * @param http The HttpClient - This is necessary in order to perform requests
  */
  constructor(private http: HttpClient) { }


  getInventarios(): Observable<Inventario[]> {
    return this.http.get<Inventario[]>(API_URL + inventarios);
  }

  /**
 * Returns the Observable object containing the inventario retrieved from the API
 * @returns The inventario
 */
  getInventarioDetail(inventarioId): Observable<InventarioDetail> {
    console.log(inventarioId + " " + API_URL + "inventario-" + inventarioId + ".json");
    return this.http.get<InventarioDetail>(API_URL + "inventario-" + inventarioId + ".json");
  }

}