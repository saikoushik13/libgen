import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent {
  categories = [
    { name: "Books", icon: "https://media.istockphoto.com/id/628925698/vector/pile-of-hardcover-books.jpg?s=612x612&w=0&k=20&c=UskxzCZAQ4LXrgMhgW3M8Q5jdtWFPZ8WxwosF6h6euI=", route: "books" },
    { name: "Magazines", icon: "https://alibrarylady.blog/wp-content/uploads/2019/09/img_2976-1.jpg?w=1200", route: "magazines" },
    { name: "Newspapers", icon: "https://www.shutterstock.com/image-vector/cartoon-vector-illustration-newspaper-260nw-45014620.jpg", route: "newspapers" },
    { name: "CDs", icon: "https://cdn.vectorstock.com/i/500p/13/96/groovy-computer-cd-rom-or-compact-disk-character-vector-53981396.jpg", route: "cds" },
    { name: "DVDs", icon: "https://img.freepik.com/premium-vector/cartoon-vector-illustration-cd-dvd-disc_290315-8567.jpg", route: "dvds" },
    { name: "Journals", icon: "https://img.freepik.com/free-vector/blank-open-journal_53876-80457.jpg", route: "journals" }
  ];

  constructor(private router: Router) {}

  navigateToCategory(route: string) {
    this.router.navigate([`/collection/${route}`]);
  }
}
