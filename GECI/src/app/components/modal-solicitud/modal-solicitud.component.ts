import { Component } from '@angular/core';
import { MatDialogActions,MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-modal-solicitud',
  standalone: true,
  imports: [MatDialogActions,MatDialogContent,MatButtonModule,MatFormFieldModule,MatInputModule,FormsModule, MatIconModule, MatDividerModule,MatTableModule],
  templateUrl: './modal-solicitud.component.html',
  styleUrl: './modal-solicitud.component.css'
})
export default class ModalSolicitudComponent {
  constructor(
        private dialogRef: MatDialogRef<ModalSolicitudComponent>,

      ) {}

  nuevaSolicitud:string = '';
  displayedColumns: string[] = ['id'];
  dataSource = [
    {
      id: 'INSS_CPH000000000000037897'
    },
    {
      id: 'ECOTAVU_00000000000001155N'
    },{
      id: 'INSS_CPH000000000000037897'
    },
  ];

  addSolicitud(): void {
    if(this.dataSource.length <= 10){
      if(this.nuevaSolicitud.trim()){
        this.dataSource.push({id: this.nuevaSolicitud});
        this.dataSource = [...this.dataSource];
        this.nuevaSolicitud = '';
      }
    }
  }

  closeDialog():void{
    this.dialogRef.close(); // Cierra el modal
  }
}
