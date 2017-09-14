import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {
  public info:object = {};
  constructor(
    public http: Http
  ) {
    this.http.get("assets/data/info.pagina.json")
      .subscribe((data) => {
        this.info = data.json();
        console.log(data.json());
      })
  }

}
