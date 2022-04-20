import { HttpClient, HttpParameterCodec } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deporte } from '../models/deporte.model';
const urlBase ="http://localhost:8090/rest/util/deporte";

@Injectable({
  providedIn: 'root'
})
export class DeporteService {

constructor(private http:HttpClient){}

  listadeporte():Observable<Deporte[]> {
    return this.http.get<Deporte[]>(urlBase);
  }
}
