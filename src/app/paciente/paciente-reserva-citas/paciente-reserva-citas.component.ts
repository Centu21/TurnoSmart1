import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EspecialidadService } from '../../servicios/especialidad.service'; // Servicio de especialidades
import { ProfesionalService } from '../../servicios/profesional.service'; // Servicio de profesionales
import { ReservaService } from '../../servicios/reserva.service'; // Servicio de reservas

@Component({
  selector: 'app-paciente-reserva-citas',
  templateUrl: './paciente-reserva-citas.component.html',
  styleUrls: ['./paciente-reserva-citas.component.css'] // Asegúrate de que el archivo CSS esté presente
})
export class PacienteReservaCitasComponent implements OnInit {
  especialidades: any[] = []; // Lista de especialidades
  profesionales: any[] = []; // Lista de profesionales
  selectedEspecialidad: any; // Especialidad seleccionada
  selectedProfesional: any; // Profesional seleccionado
  selectedDate: string = ''; // Fecha seleccionada (inicializar)
  selectedTime: string = ''; // Hora seleccionada (inicializar)
  showConfirmationPopup: boolean = false; // Controla la visibilidad del popup

  constructor(
   private especialidadService: EspecialidadService,
   private profesionalService: ProfesionalService,
   private reservaService: ReservaService,
   private router: Router
 ) {}

  ngOnInit() {
    this.loadEspecialidades(); // Cargar especialidades al inicio
  }

loadEspecialidades() {
    this.especialidadService.getEspecialidades().subscribe((data: any[]) => {
      this.especialidades = data; // Asignar especialidades desde el backend
    });
  }

 onEspecialidadChange() {
    if (this.selectedEspecialidad) {
      this.profesionalService
        .getProfesionalesPorEspecialidad(this.selectedEspecialidad.id)
        .subscribe((data: any[]) => {
          this.profesionales = data; // Asignar profesionales según la especialidad seleccionada
        });
    } else {
      this.profesionales = []; // Limpiar la lista si no hay especialidad seleccionada
    }
  }

  onSubmit() {
    // Crear objeto con los datos de la cita
    const cita = {
      profesionalId: this.selectedProfesional.id,
      fecha: this.selectedDate,
      hora: this.selectedTime,
    };

    this.reservaService.confirmarCita(cita).subscribe(() => {
      this.showConfirmationPopup = true; // Mostrar popup de confirmación
    });
  }

  reserveAnother() {
    this.showConfirmationPopup = false; // Cerrar el popup
    // Restablecer campos del formulario
    this.selectedEspecialidad = null;
    this.selectedProfesional = null;
    this.selectedDate = '';
    this.selectedTime = '';
  }

  goToDashboard() {
    this.router.navigate(['/paciente/dashboard']); // Redirigir al dashboard del paciente
  }
}
