import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-e-database-category',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './e-database-category.component.html',
  styleUrls: ['./e-database-category.component.css']
})
export class EDatabaseCategoryComponent {
  items: any[] = [];
  categoryName: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      this.categoryName = category ? category.replace("-", " ").toUpperCase() : '';

      this.http.get<any>('assets/e-database.json').subscribe(data => {
        this.items = data[category || 'e-books'] || [];
      });
    });
  }
}
