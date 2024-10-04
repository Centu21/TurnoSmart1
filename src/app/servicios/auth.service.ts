import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://tu-api-url.com/api/auth'; // Cambia esto a la URL de tu API

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = {
      username,
      password
    };
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(`${this.apiUrl}/login`, body, { headers });
  }
}
