import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';



import {Inventario} from '../../inventario/inventario';
import {InventarioService} from '../../inventario/inventario.service';
@Component({
  selector: 'app-inventario-listar',
  templateUrl: './inventario-listar.component.html',
  styleUrls: ['./inventario-listar.component.css']
})
export class InventarioListarComponent implements OnInit {

  

  

    inventarios: Inventario[];

    
    constructor(private inventarioService: InventarioService, private route: ActivatedRoute) {}

    
    getInventarios(): void {
        this.inventarioService.getInventarios().subscribe(inventarios => this.inventarios = inventarios);
    }

    
    ngOnInit() {
        this.getInventarios();
    }
        


}