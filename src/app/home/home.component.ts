import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  login() {
    // Lógica para iniciar sesión
    console.log('Iniciar sesión');
  }

  register() {
    // Lógica para registrarse
    console.log('Registrarse');
  }

}
