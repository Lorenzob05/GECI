import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-ssoweb',
  standalone: true,
  imports: [MatDialogModule, MatDividerModule, MatIconModule,RouterLink],
  templateUrl: './modal-ssoweb.component.html',
  styleUrl: './modal-ssoweb.component.css'
})
export class ModalSsowebComponent {
  constructor (private router: Router){}
  
  onLogin(): void {
    this.router.navigate(['/gestion-de-solicitudes'])
  }
}
