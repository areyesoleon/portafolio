import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductosService } from "../../services/productos.service";
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto:any = undefined;
  cod:string = undefined;
  constructor(
    public route:ActivatedRoute,
    _ps:ProductosService
  ) {
    route.params.subscribe(parametros=>{
      this.cod = parametros['id'];
      _ps.cargar_producto(parametros['id']).subscribe((res) => {
        this.producto = res.json();
      })
    })
   }

  ngOnInit() {
  }

}
