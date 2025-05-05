import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-modal-bienvenida',
  standalone: true,
  imports: [MatDialogModule, MatDividerModule, MatCheckboxModule],
  templateUrl: './modal-bienvenida.component.html',
  styleUrl: './modal-bienvenida.component.css'
})
export class ModalBienvenidaComponent {

}
