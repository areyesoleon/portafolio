import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {
  public productos: any[] = [];
  cargando:boolean = true;
  constructor(
    public http: Http
  ) {
    this.cargar_productos();
  }

  public cargar_productos() {
  
    if(this.productos.length === 0){
      this.http.get('https://paginaweb-3ba96.firebaseio.com/productos_idx.json')
      .subscribe((res) => {
        this.cargando = false;
        this.productos = res.json();
        console.log(res.json());
      })
    }

  }

}
