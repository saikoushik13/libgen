import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableComponent } from '../table/table.component';
import { SearchService } from '../search.service';

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
  filteredData: any[] = [];

  constructor(private http: HttpClient, private searchService: SearchService) {}

  ngOnInit() {
    this.http.get<any>('assets/history.json').subscribe(response => {
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
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.author.toLowerCase().includes(query.toLowerCase()) ||
        item.publisher.toLowerCase().includes(query.toLowerCase())
      );
    }
  }
}
