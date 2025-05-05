import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-modal-datos-personales',
  standalone: true,
  imports: [MatDialogModule, MatIconModule, MatDividerModule, MatTableModule, MatProgressSpinnerModule,NgClass,NgIf],
  templateUrl: './modal-datos-personales.component.html',
  styleUrl: './modal-datos-personales.component.css'
})
export default class ModalDatosPersonalesComponent {
  displayedColumns: string[] = ['administrador', 'telefono', 'correo'];
  dataSource = [
    {
      administrador: 'APELLIDO APELLIDO, NOMBRE',
      telefono: '123456',
      correo: 'nombre.apellido.apellido@correo.es',
    },
    {
      administrador: 'APELLIDO APELLIDO, NOMBRE',
      telefono: 'N/D',
      correo: 'nombre.apellido.apellido@correo.es',
    },
    {
      administrador: 'APELLIDO APELLIDO, NOMBRE',
      telefono: 'N/D',
      correo: 'nombre.apellido.apellido@correo.es',
    },
    {
      administrador: 'APELLIDO APELLIDO, NOMBRE',
      telefono: '123456',
      correo: 'nombre.apellido.apellido@correo.es',
    },{
      administrador: 'APELLIDO APELLIDO, NOMBRE',
      telefono: '123456',
      correo: 'nombre.apellido.apellido@correo.es',
    },
    {
      administrador: 'APELLIDO APELLIDO, NOMBRE',
      telefono: 'N/D',
      correo: 'nombre.apellido.apellido@correo.es',
    },
    {
      administrador: 'APELLIDO APELLIDO, NOMBRE',
      telefono: 'N/D',
      correo: 'nombre.apellido.apellido@correo.es',
    },
  ];
}
