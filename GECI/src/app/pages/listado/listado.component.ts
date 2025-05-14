import { Component,OnInit  } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

interface Solicitud {
  id: number;
  date: string;
  status: string;
  comment?: string;
}

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [MatNativeDateModule,MatDatepickerModule,FormsModule,MatInputModule, MatFormFieldModule,HeaderComponent,FooterComponent,SidebarComponent,MatIconModule,MatTableModule,MatButtonModule,MatListModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {
  allSolicitudes: Solicitud[] = [
    { id: 210, date: '21/04/2025', status: 'Atendida', comment: 'Comentario 1' },
    { id: 123, date: '24/04/2025', status: 'En proceso', comment: 'Comentario 2' },
    { id: 312, date: '19/07/2021', status: 'Pendiente de atender', comment: 'Comentario 3' },
    { id: 444, date: '01/02/2022', status: 'En proceso', comment: 'Comentario 4' },
    { id: 555, date: '27/11/2023', status: 'Atendida', comment: 'Comentario 5' },
    { id: 666, date: '15/01/2024', status: 'Archivada', comment: 'Comentario 6' }
  ];

  displayedColumns: string[] = ['id', 'date', 'status', 'comment', 'actions'];
  dataSource = new MatTableDataSource<Solicitud>([]);
  currentFilter = 'all';

  ngOnInit() {
    this.applyFilter('all');
  }

  applyFilter(filter: string) {
    this.currentFilter = filter;

    if (filter === 'all') {
      this.dataSource.data = this.allSolicitudes;
    } else {
      this.dataSource.data = this.allSolicitudes.filter(solicitud => {
        switch(filter) {
          case 'pending': return solicitud.status === 'Pendiente de atender';
          case 'in-progress': return solicitud.status === 'En proceso';
          case 'completed': return solicitud.status === 'Atendida';
          case 'archived': return solicitud.status === 'Archivada';
          default: return true;
        }
      });
    }
  }

  getStatusClass(status: string): string {
    switch(status) {
      case 'Atendida': return 'status-completed';
      case 'En proceso': return 'status-in-progress';
      case 'Pendiente': return 'status-pending';
      case 'Archivada': return 'status-archived';
      default: return '';
    }
  }

  saveComment(solicitud: Solicitud) {
    console.log('Comentario actualizado:', solicitud);
    const index = this.allSolicitudes.findIndex(s => s.id === solicitud.id);
    if (index !== -1) {
      this.allSolicitudes[index].comment = solicitud.comment;
    }

    // Actualiza la tabla
    this.applyFilter(this.currentFilter);
  }


  searchId: string = '';
  startDate: Date | null = null;
  endDate: Date | null = null;
  
  applySearch() {
    let filteredData = this.allSolicitudes;

    if (this.searchId) {
      filteredData = filteredData.filter(solicitud => 
        solicitud.id.toString().includes(this.searchId)
      );
    }

    if (this.startDate) {
      filteredData = filteredData.filter(solicitud => {
        const dateParts = solicitud.date.split('/');
        const solicitudDate = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
        return solicitudDate >= this.startDate!;
      });
    }

    if (this.endDate) {
      filteredData = filteredData.filter(solicitud => {
        const dateParts = solicitud.date.split('/');
        const solicitudDate = new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
        const endDatePlusOne = new Date(this.endDate!);
        endDatePlusOne.setDate(endDatePlusOne.getDate() + 1);
        return solicitudDate <= endDatePlusOne;
      });
    }

    this.dataSource.data = filteredData;
  }

  refreshSearch() {
    this.searchId = '';
    this.startDate = null;
    this.endDate = null;
    this.applyFilter(this.currentFilter);
  }

}
