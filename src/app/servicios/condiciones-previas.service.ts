import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CondicionesPreviasService {
  private apiUrl = 'https://tuservidor/api/condiciones'; // Cambia esta URL a la de tu API

  constructor(private http: HttpClient) {}

  // Método para guardar condiciones previas
  guardarCondiciones(condiciones: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/guardar`, condiciones);
  }

  // Método para obtener condiciones previas de un paciente
  obtenerCondiciones(pacienteId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/obtener/${pacienteId}`);
  }
}
