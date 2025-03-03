import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-overdue-charges',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TableComponent],
  templateUrl: './overdue-charges.component.html',
  styleUrls: ['./overdue-charges.component.css']
})
export class OverdueChargesComponent {
  columns: any[] = [];
  data: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('assets/overdue-charges.json').subscribe(response => {
      this.columns = response.columns;
      this.data = response.data;
    });
  }
}
