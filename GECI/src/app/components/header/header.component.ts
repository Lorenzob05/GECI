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
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatDividerModule,MatButtonModule, MatMenuModule, NgIf,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router){}
  readonly dialog = inject(MatDialog);

  menuVisible = false;

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  onSolicitudes(): void {
    this.router.navigate(['/gestion-de-solicitudes'])
  }


  onOrganismos(): void {
    console.log('Organismos clicked');
    this.menuVisible = false;
  }

  onDatosUsuario(): void {
    console.log('Datos de usuario clicked');
    this.dialog.open(ModalDatosPersonalesComponent, {
      panelClass: 'custom-modal-wrapper',
      height: '520px',
      autoFocus: false
    });
    this.menuVisible = false;
  }

  onSalir(): void {
    console.log('Salir clicked');
    this.menuVisible = false;
    this.router.navigate(['/'])
  }
}
