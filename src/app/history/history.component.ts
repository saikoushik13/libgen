import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TableComponent],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  columns: any[] = [];
  data: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('assets/history.json').subscribe(response => {
      this.columns = response.columns;
      this.data = response.data;
    });
  }
}
