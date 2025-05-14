import { Component } from '@angular/core';
import { MatDialogActions,MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-cert',
  standalone: true,
  imports: [MatDialogActions,MatDialogContent,MatButtonModule,MatFormFieldModule,MatInputModule,FormsModule, MatIconModule, MatDividerModule,MatTableModule],
  templateUrl: './modal-cert.component.html',
  styleUrl: './modal-cert.component.css'
})
export default class ModalCertComponent {

  constructor(
      private dialogRef: MatDialogRef<ModalCertComponent>,
      private router: Router
    ) {}
   
    onLogin(): void {
      this.dialogRef.close(); // Cierra el modal
      this.router.navigate(['/gestion-de-solicitudes'])
    }

    closeDialog():void{
      this.dialogRef.close(); // Cierra el modal
    }
}
