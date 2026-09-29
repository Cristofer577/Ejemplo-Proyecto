import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Necesario para enlazar campos de formulario

@Component({
  selector: 'app-primer-componente',
  standalone: true,
  imports: [FormsModule], // Importamos FormsModule
  templateUrl: './primer-componente.html',
  styleUrl: './primer-componente.css'
})
export class PrimerComponente {
  // Variables para guardar lo que escribe el usuario
  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  // Método que se ejecuta al presionar el botón
  guardar() {
    console.log('Datos guardados:', {
      nombre: this.nombre,
      email: this.email,
      mensaje: this.mensaje
    });
    alert(`¡Hola ${this.nombre}! Tu mensaje ha sido enviado.`);
  }
}