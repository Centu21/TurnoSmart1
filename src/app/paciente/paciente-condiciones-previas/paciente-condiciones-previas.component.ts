import { Component, OnInit } from '@angular/core';
import { CondicionesPreviasService } from '../../servicios/condiciones-previas.service'; // Importa el nuevo servicio

@Component({
  selector: 'app-paciente-condiciones-previas',
  standalone: true,
  imports: [],
  templateUrl: './paciente-condiciones-previas.component.html',
  styleUrls: ['./paciente-condiciones-previas.component.css']
})
export class PacienteCondicionesPreviasComponent implements OnInit {
  enfermedadesPrevias: string[] = [];
  cirugiasPrevias: string[] = [];
  otrasEnfermedades: string[] = [];
  otrasCirugias: string[] = [];
  usuario: any = {};
  listaEnfermedades: any[] = [];
  listaCirugias: any[] = [];

  constructor(private condicionesPreviasService: CondicionesPreviasService) {}

  ngOnInit(): void {
    // Aquí puedes obtener las listas de enfermedades y cirugías si es necesario
    this.listaEnfermedades = [
      { nombre: 'Diabetes' },
      { nombre: 'Hipertensión' },
      { nombre: 'Asma' },
      // Agrega más enfermedades según sea necesario
    ];

    this.listaCirugias = [
      { nombre: 'Apendicitis' },
      { nombre: 'Cesárea' },
      { nombre: 'Cirugía de rodilla' },
      // Agrega más cirugías según sea necesario
    ];
  }

  agregarEnfermedad() {
    if (this.enfermedadesPrevias.length < 20) {
      this.enfermedadesPrevias.push('');
      this.otrasEnfermedades.push('');
    }
  }

  agregarCirugia() {
    if (this.cirugiasPrevias.length < 20) {
      this.cirugiasPrevias.push('');
      this.otrasCirugias.push('');
    }
  }

  enviarHistorial() {
    const historial = {
      enfermedades: this.enfermedadesPrevias,
      cirugias: this.cirugiasPrevias,
      otrasEnfermedades: this.otrasEnfermedades,
      otrasCirugias: this.otrasCirugias,
      usuarioId: this.usuario.id // Suponiendo que el usuario tiene un ID
    };

    this.condicionesPreviasService.guardarCondiciones(historial).subscribe(
      (      response: any) => {
        console.log('Condiciones guardadas con éxito', response);
      },
      (      error: any) => {
        console.error('Error al guardar las condiciones', error);
      }
    );
  }
}
