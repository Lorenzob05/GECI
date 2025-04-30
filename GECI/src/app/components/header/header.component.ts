import { Component, HostListener } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatDividerModule,MatButtonModule, MatMenuModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuVisible = false;

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.profile')) {
      this.menuVisible = false;
    }
  }

  onOrganismos(): void {
    console.log('Organismos clicked');
    this.menuVisible = false;
  }

  onDatosUsuario(): void {
    console.log('Datos de usuario clicked');
    this.menuVisible = false;
  }

  onSalir(): void {
    console.log('Salir clicked');
    this.menuVisible = false;
  }
}
