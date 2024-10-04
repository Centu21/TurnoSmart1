import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Esto lo hace disponible en toda la aplicación
})
export class ProfesionalService {
  private apiUrl = 'tu-api-url/aqui'; // Cambia esto por tu URL de API

  constructor(private http: HttpClient) {}

  getProfesionalesPorEspecialidad(especialidadId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/especialidad/${especialidadId}/profesionales`);
  }
}
