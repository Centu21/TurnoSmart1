import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Asegúrate de tener esto
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppComponent } from './app.component';

//  Admin
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { MedicosManagementComponent } from './admin/medicos-management/medicos-management.component';
import { EstudiosManagementComponent } from './admin/estudios-management/estudios-management.component';
import { AdminHistoriaClinicaComponent } from './admin/admin-historia-clinica/admin-historia-clinica.component';
import { AdminGestionCitasComponent } from './admin/admin-gestion-citas/admin-gestion-citas.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminCondicionesPreviasComponent } from './admin/admin-condiciones-previas/admin-condiciones-previas.component';
import { AdminReportesComponent } from './admin/admin-reportes/admin-reportes.component';

//  Paciente
import { PacienteDashboardComponent } from './paciente/paciente-dashboard/paciente-dashboard.component';
import { PacienteReservaCitasComponent } from './paciente/paciente-reserva-citas/paciente-reserva-citas.component';
import { PacienteReservaEstudiosComponent } from './paciente/paciente-reserva-estudios/paciente-reserva-estudios.component';
import { PacienteHistoriaClinicaComponent } from './paciente/paciente-historia-clinica/paciente-historia-clinica.component';
import { PacienteCondicionesPreviasComponent } from './paciente/paciente-condiciones-previas/paciente-condiciones-previas.component';
import { PacienteLoginComponent } from './paciente/paciente-login/paciente-login.component';
import { RegistroComponent } from  './paciente/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    //  Admin
    AdminDashboardComponent,
    MedicosManagementComponent,
    EstudiosManagementComponent,
    AdminHistoriaClinicaComponent,
    AdminGestionCitasComponent,
    AdminLoginComponent,
    AdminCondicionesPreviasComponent,
    AdminReportesComponent,
    
    // Paciente
    PacienteDashboardComponent,
    PacienteReservaCitasComponent,
    PacienteReservaEstudiosComponent,
    PacienteHistoriaClinicaComponent,
    PacienteCondicionesPreviasComponent,
    PacienteLoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, // Asegúrate de incluir HttpClientModule aquí
    FormsModule, // Asegúrate de incluir FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
