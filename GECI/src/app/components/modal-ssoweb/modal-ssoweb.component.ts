import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-ssoweb',
  standalone: true,
  imports: [MatDialogModule, MatDividerModule, MatIconModule,],
  templateUrl: './modal-ssoweb.component.html',
  styleUrl: './modal-ssoweb.component.css'
})
export class ModalSsowebComponent {
  
  




  constructor(
    private dialogRef: MatDialogRef<ModalSsowebComponent>,
    private router: Router
  ) {}
 
  onLogin(): void {
    this.dialogRef.close(); // Cierra el modal
    this.router.navigate(['/gestion-de-solicitudes'])
  }
}
