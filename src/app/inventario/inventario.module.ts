import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioService } from './inventario.service';
import { InventarioListarComponent } from './inventario-listar/inventario-listar.component';
import { InventarioListComponent } from './inventario-list/inventario-list.component';



@NgModule({
  imports: [
    CommonModule
  ],


  declarations: [InventarioListarComponent, InventarioListComponent],
  exports: [InventarioListarComponent],
  providers: [InventarioService]
})
export class InventarioModule { }