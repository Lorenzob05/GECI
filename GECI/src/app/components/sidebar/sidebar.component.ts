import { Component, Output, EventEmitter } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatButtonModule,MatListModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() filterChanged = new EventEmitter<string>();

  filters = [
    { name: 'Todas', value: 'all', count: 6 },
    { name: 'Pendientes de atender', value: 'pending', count: 1 },
    { name: 'En proceso', value: 'in-progress', count: 2 },
    { name: 'Atendidas', value: 'completed', count: 2 },
    { name: 'Archivadas', value: 'archived', count: 1 }
  ];

  activeFilter = 'all';

  updateCounts(data: any[]) {
    this.filters[0].count = data.length;
    this.filters[1].count = data.filter(item => item.status === 'Pendiente de atender').length;
    this.filters[2].count = data.filter(item => item.status === 'En proceso').length;
    this.filters[3].count = data.filter(item => item.status === 'Atendidas').length;
    this.filters[4].count = data.filter(item => item.status === 'Archivadas').length;
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
    this.filterChanged.emit(filter);
  }
}
