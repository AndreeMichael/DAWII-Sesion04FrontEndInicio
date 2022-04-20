import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modalidad } from '../models/modalidad.model';
const urlBase ="http://localhost:8090/rest/util/modalidad";

@Injectable({
  providedIn: 'root'
})

export class ModalidadService {

  constructor(private http: HttpClient) { }

registrarModalidad(data:Modalidad):Observable<any>{
  return this.http.post(urlBase, data);
}
}
