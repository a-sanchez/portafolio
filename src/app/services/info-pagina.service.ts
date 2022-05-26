import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo!:any[];

  constructor(private http:HttpClient) { 
    
    //Leer archivo de JSON
    // this.http.get('assets/data/data-pagina.json')
    //   .subscribe((resp: InfoPagina) => {  
    //     this.cargada=true;
    //     this.info = resp;
    //     console.log(resp);
    //   });

    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
     //Leer archivo de JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {  
        this.cargada=true;
        this.info = resp;
      });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-ec148-default-rtdb.firebaseio.com/equipo.json')
      .subscribe( (resp:any = []) => {  
        this.equipo=resp;
      });
  }
}
