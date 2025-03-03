import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableComponent } from '../table/table.component';
import { SearchService } from '../search.service';

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
  filteredData: any[] = [];

  constructor(private http: HttpClient, private searchService: SearchService) {}

  ngOnInit() {
    this.http.get<any>('assets/overdue-charges.json').subscribe(response => {
      this.columns = response.columns;
      this.data = response.data;
      this.filteredData = this.data; // ✅ Default to all data
    });

    // ✅ Subscribe to search query changes
    this.searchService.currentSearchQuery.subscribe(query => {
      this.filterData(query);
    });
  }

  filterData(query: string) {
    if (!query) {
      this.filteredData = this.data;
    } else {
      this.filteredData = this.data.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.prn.toLowerCase().includes(query.toLowerCase())
      );
    }
  }
}
