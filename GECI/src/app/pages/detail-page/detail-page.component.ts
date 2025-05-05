import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgClass, NgIf } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTableModule,MatProgressSpinnerModule, NgClass, NgIf],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css'
})
export default class DetailPageComponent {
  displayedColumns: string[] = ['id', 'document', 'csv', 'error', 'actions'];
  dataSource = [
    {
      id: 'INSS_CPH000000000000037897',
      document: 'Certificado_694_INSS_CPH0000000000003797.pdf',
      csv: 'IDYLU4M8454BSCF7ZENFZCJDXGG',
      error: '',
    },
    {
      id: 'ECOTAVU_00000000000001155N',
      document: '',
      csv: '',
      error: 'No ha sido posible generar el certificado para la petición indicada ECOTAYU_000000000000001155N: No se ha encontrado el idPeticion ECOTAYU_000000000000001155N',
    },
    {
      id: 'TGSS_CPH0000000000000037897',
      document: 'Certificado_694_INSS_CPH0000000000003797.pdf',
      csv: 'IDVLrUAM345BASCF7ZXENF2CJDXGG',
      error: '',
    },
    {
      id: 'INSS_CPH0000000000000037897',
      document: 'Certificado_694_INSS_CPH0000000000003797.pdf',
      csv: 'IDVLrUAM345BASCF7ZXENF2CJDXGG',
      error: '',
    },
  ];

}
