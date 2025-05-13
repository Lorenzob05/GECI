import { Component } from '@angular/core';
import { MatDialogActions,MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-modal-cert',
  standalone: true,
  imports: [MatDialogActions,MatDialogTitle,MatDialogContent,MatButtonModule,MatFormFieldModule,MatInputModule,FormsModule, MatIconModule, MatDividerModule,MatTableModule],
  templateUrl: './modal-cert.component.html',
  styleUrl: './modal-cert.component.css'
})
export default class ModalCertComponent {

}
