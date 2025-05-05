import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal-ssoweb',
  standalone: true,
  imports: [MatDialogModule, MatDividerModule, MatIconModule],
  templateUrl: './modal-ssoweb.component.html',
  styleUrl: './modal-ssoweb.component.css'
})
export class ModalSsowebComponent {

}
