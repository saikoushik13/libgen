import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from '../book-card/book-card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EventListComponent } from '../event-list/event-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BookCardComponent, EventListComponent,HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  books: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('assets/books.json').subscribe(data => {
      this.books = data;
    });
  }
}

