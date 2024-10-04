import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service'; // Ajusta la ruta según tu estructura de carpetas

@Component({
  selector: 'app-paciente-login',
  templateUrl: './paciente-login.component.html',
  styleUrls: ['./paciente-login.component.css'] // Si tienes un archivo CSS
})
export class PacienteLoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        // Aquí puedes manejar la respuesta, como almacenar el token en localStorage
        localStorage.setItem('token', response.token); // Suponiendo que el token se llama "token"
        this.router.navigate(['/dashboard']); // Redirigir al dashboard
      },
      error => {
        this.errorMessage = 'Credenciales inválidas. Inténtalo de nuevo.';
        console.error('Error en el login:', error);
      }
    );
  }
}
