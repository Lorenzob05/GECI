import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ModalBienvenidaComponent } from '../modal-bienvenida/modal-bienvenida.component';

@Component({
  selector: 'app-modal-ssoweb',
  standalone: true,
  imports: [MatDialogModule, MatDividerModule, MatIconModule,],
  templateUrl: './modal-ssoweb.component.html',
  styleUrl: './modal-ssoweb.component.css'
})
export class ModalSsowebComponent {
  
   readonly dialog = inject(MatDialog);




  constructor(
    private dialogRef: MatDialogRef<ModalSsowebComponent>,
    private router: Router
  ) {}
 
  onLogin(): void {
    this.dialogRef.close(); // Cierra el modal
    this.dialog.open(ModalBienvenidaComponent);
  }
}
