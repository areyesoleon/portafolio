import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductosService } from "../../services/productos.service";

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent implements OnInit {
  termino:string = undefined;
  constructor(
    private route:ActivatedRoute,
    private _ps:ProductosService
  ) {
    route.params.subscribe((parametros) => {
      this.termino = parametros['termino'];
      _ps.buscar_producto(this.termino);
    })
    
   }

  ngOnInit() {
  }

}
