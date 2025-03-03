import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchText: string = '';

  constructor(private searchService: SearchService) {}

  onSearchChange() {
    this.searchService.updateSearchQuery(this.searchText);
  }
}
