import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {
  public info: object = {};
  public cargada: boolean = false;
  public cargada_sobre_nosotros: boolean = false;
  public equipo: any[] = [];
  constructor(
    public http: Http
  ) {
    this.carga_info();
    this.carga_sobre_nosotros();
  }

  public carga_info() {
    this.http.get("assets/data/info.pagina.json")
      .subscribe((data) => {
        this.cargada = true;
        this.info = data.json();
      })
  }

  public carga_sobre_nosotros() {
    this.http.get("https://paginaweb-3ba96.firebaseio.com/equipo.json")
      .subscribe((data) => {
        this.cargada_sobre_nosotros = true;
        this.equipo = data.json();
      })
  }

}
