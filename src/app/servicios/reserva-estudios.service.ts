import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ReservaEstudiosService {
  reservarEstudio(reserva: { tipoEstudio: string; fecha: string; hora: string; }) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'https://tu-backend-url/api'; // Cambia esta URL por la de tu backend

  constructor(private http: HttpClient) { }

  // Método para obtener los estudios médicos
getEstudiosMedicos(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/estudios-medicos`); // Cambia 'estudios-medicos' por el endpoint correcto de tu backend
}

}


