import { Component, HostListener, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import ModalSolicitudComponent from '../modal-solicitud/modal-solicitud.component';
import ModalDatosPersonalesComponent from '../modal-datos-personales/modal-datos-personales.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatDividerModule,MatButtonModule, MatMenuModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  readonly dialog = inject(MatDialog);

  menuVisible = false;

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  // Cerrar menu al clickar fuera
  // @HostListener('document:click', ['$event'])
  // handleClickOutside(event: MouseEvent): void {
  //   const target = event.target as HTMLElement;
  //   if (!target.closest('.profile')) {
  //     this.menuVisible = false;
  //   }
  // }

  onSolicitudes(): void {
    console.log('Solicitudes clicked');
    let dialogRef = this.dialog.open(ModalSolicitudComponent, {
      panelClass: 'custom-modal-wrapper',
      minHeight: '420px',
      maxHeight: '520px',
    });
  }


  onOrganismos(): void {
    console.log('Organismos clicked');
    this.menuVisible = false;
  }

  onDatosUsuario(): void {
    console.log('Datos de usuario clicked');
    let dialogRef = this.dialog.open(ModalDatosPersonalesComponent, {
      panelClass: 'custom-modal-wrapper',
      height: '520px',
    });
    this.menuVisible = false;
  }

  onSalir(): void {
    console.log('Salir clicked');
    this.menuVisible = false;
  }
}
