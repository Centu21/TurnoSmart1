import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '../../servicios/paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class PacienteRegistroComponent {
register() {
throw new Error('Method not implemented.');
}
login() {
throw new Error('Method not implemented.');
}
  registroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService,
    private router: Router
  ) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern(/^\d{8,9}$/)]],
      fechaNacimiento: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]],
      repetirContraseña: ['', Validators.required],
      terminos: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const pacienteData = this.registroForm.value;

      // Validar que las contraseñas coincidan
      if (pacienteData.contraseña !== pacienteData.repetirContraseña) {
        alert('Las contraseñas no coinciden');
        return;
      }

      // Llamar al servicio para registrar el paciente
      this.pacienteService.registrarPaciente(pacienteData).subscribe(
        response => {
          alert('Registro exitoso');
          this.router.navigate(['/home']); // Redirigir al inicio o a otra página
        },
        error => {
          alert('Error al registrar el paciente: ' + error.message);
        }
      );
    } else {
      alert('Por favor completa todos los campos correctamente.');
    }
  }
}