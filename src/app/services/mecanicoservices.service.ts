import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mecanicos } from '../model/Mecanicos'

@Injectable({
  providedIn: 'root'
})
export class MecanicoservicesService {

  API_URI = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getMecanicos() {
    return this.http.get(`${this.API_URI}/mecanico`);
  }

  insertMecanico(mecanico:Mecanicos){
    return this.http.post(`${this.API_URI}/mecanico`, mecanico);
  }

}
