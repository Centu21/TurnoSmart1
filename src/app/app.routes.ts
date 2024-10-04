import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Admin
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { MedicosManagementComponent } from './admin/medicos-management/medicos-management.component';
import { EstudiosManagementComponent } from './admin/estudios-management/estudios-management.component';
import { AdminHistoriaClinicaComponent } from './admin/admin-historia-clinica/admin-historia-clinica.component';
import { AdminGestionCitasComponent } from './admin/admin-gestion-citas/admin-gestion-citas.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminCondicionesPreviasComponent } from './admin/admin-condiciones-previas/admin-condiciones-previas.component';
import { AdminReportesComponent } from './admin/admin-reportes/admin-reportes.component';

// Paciente
import { PacienteDashboardComponent } from './paciente/paciente-dashboard/paciente-dashboard.component';
import { PacienteReservaCitasComponent } from './paciente/paciente-reserva-citas/paciente-reserva-citas.component';
import { PacienteReservaEstudiosComponent } from './paciente/paciente-reserva-estudios/paciente-reserva-estudios.component';
import { PacienteHistoriaClinicaComponent } from './paciente/paciente-historia-clinica/paciente-historia-clinica.component';
import { PacienteCondicionesPreviasComponent } from './paciente/paciente-condiciones-previas/paciente-condiciones-previas.component';
import { PacienteLoginComponent } from './paciente/paciente-login/paciente-login.component';


// Home
import { HomeComponent } from './home/home.component';

// Definición de las rutas
export const routes: Routes = [
  // Admin
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin/medicos', component: MedicosManagementComponent },
  { path: 'admin/estudios', component: EstudiosManagementComponent },
  { path: 'admin/historia-clinica', component: AdminHistoriaClinicaComponent },
  { path: 'admin/gestionar-citas', component: AdminGestionCitasComponent },
  { path: 'admin/condiciones-previas', component: AdminCondicionesPreviasComponent },
  { path: 'admin/reportes', component: AdminReportesComponent },

  // Paciente
  { path: 'paciente', component: PacienteDashboardComponent },
  { path: 'paciente/login', component: PacienteLoginComponent },
  { path: 'paciente/reserva-citas', component: PacienteReservaCitasComponent },
  { path: 'paciente/reserva-estudios', component: PacienteReservaEstudiosComponent },
  { path: 'paciente/historia-clinica', component: PacienteHistoriaClinicaComponent },
  { path: 'paciente/condiciones-previas', component: PacienteCondicionesPreviasComponent },
  

  // Home
  { path: 'home', component: HomeComponent },

  // Redirección por defecto
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
