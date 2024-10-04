import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ReservaEstudiosService } from '../../servicios/reserva-estudios.service.js'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-paciente-reserva-estudios',
  templateUrl: './paciente-reserva-estudios.component.html',
  styleUrls: ['./paciente-reserva-estudios.component.css']
})
export class PacienteReservaEstudiosComponent implements OnInit {

  estudiosMedicos: any[] = [];
  tipoEstudioSeleccionado: string = '';
  fechaSeleccionada: string = '';
  horaSeleccionada: string = '';
  mostrarConfirmacion: boolean = false;
  estudioSeleccionado: any = {};
usuario: any;

  constructor(private reservaEstudiosService: ReservaEstudiosService, private router: Router) {}

  ngOnInit(): void {
    // Llamar al backend para obtener la lista de estudios médicos
    this.obtenerEstudiosMedicos();
  }

  // Función para obtener la lista de estudios médicos desde el backend
  obtenerEstudiosMedicos(): void {
    this.reservaEstudiosService.getEstudiosMedicos().subscribe((data: any[]) => {
      this.estudiosMedicos = data;
    });
  }

  // Función para validar la fecha y hora seleccionadas
  validarFechaYHora(): boolean {
    const fechaActual = new Date();
    const fechaSeleccionada = new Date(`${this.fechaSeleccionada}T${this.horaSeleccionada}`);

    if (fechaSeleccionada < fechaActual) {
      alert('No puedes seleccionar una fecha y hora en el pasado.');
      return false;
    }

    return true;
  }

  // Función para realizar la reserva de la cita
  reservarCita(): void {
    if (!this.validarFechaYHora()) {
      return;
    }

    const reserva = {
      tipoEstudio: this.tipoEstudioSeleccionado,
      fecha: this.fechaSeleccionada,
      hora: this.horaSeleccionada
    };

    this.reservaEstudiosService.reservarEstudio(reserva).subscribe(
      (response: any) => {
        // Obtener detalles del estudio seleccionado
        this.estudioSeleccionado = this.estudiosMedicos.find(estudio => estudio.id === this.tipoEstudioSeleccionado);
        this.mostrarConfirmacion = true;
      },
      (error) => {
        alert('Hubo un error al procesar la reserva. Intenta nuevamente.');
      }
    );
  }

  // Función para reservar otro estudio (redirigir al mismo formulario)
  reservarOtroEstudio(): void {
    this.mostrarConfirmacion = false;
    this.tipoEstudioSeleccionado = '';
    this.fechaSeleccionada = '';
    this.horaSeleccionada = '';
  }

  // Función para redirigir al dashboard del paciente
  irADashboard(): void {
    this.router.navigate(['/dashboard-paciente']);
  }
}
