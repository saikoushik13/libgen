import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() columns: { key: string, label: string }[] = [];
  @Input() data: any[] = [];
  @Input() tableType: string = ''; // "history" or "overdue-charges"
}
