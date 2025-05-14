import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal-bienvenida',
  standalone: true,
  imports: [MatDialogModule, MatDividerModule, MatCheckboxModule],
  templateUrl: './modal-bienvenida.component.html',
  styleUrl: './modal-bienvenida.component.css'
})
export class ModalBienvenidaComponent {

  constructor(private router: Router,
    private dialogRef: MatDialogRef<ModalBienvenidaComponent>
      ) {}
  
  onClose(): void {
    console.log("clikao el cerrar")
    this.dialogRef.close(); // Cierra el modal
    this.router.navigate(['/gestion-de-solicitudes'])
  }
}
