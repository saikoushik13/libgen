import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, HttpClientModule, BookCardComponent],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  items: any[] = [];
  categoryName: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      this.categoryName = category ? category.replace("-", " ") : '';

      let filePath = category?.includes("e-") ? 'assets/e-database.json' : 'assets/collections.json';

      this.http.get<any>(filePath).subscribe(data => {
        this.items = data[category || 'books'] || [];
      });
    });
  }
}
