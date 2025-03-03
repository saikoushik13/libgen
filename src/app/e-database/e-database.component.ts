import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-e-database',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './e-database.component.html',
  styleUrls: ['./e-database.component.css']
})
export class EDatabaseComponent {
  databases = [
    { name: "E-Books (Database)", icon: "https://media.istockphoto.com/id/628925698/vector/pile-of-hardcover-books.jpg?s=612x612&w=0&k=20&c=UskxzCZAQ4LXrgMhgW3M8Q5jdtWFPZ8WxwosF6h6euI=", route: "e-books" },
    { name: "J-GATE Complete Database (Journals)", icon: "https://alibrarylady.blog/wp-content/uploads/2019/09/img_2976-1.jpg?w=1200", route: "e-j-gate" },
    { name: "Elsevier Science Direct", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSD7UQeiaQQuzRtGTFFLWg60mKVhTMHLfbjg&s", route: "e-elsevier" },
    { name: "Manupatra Online", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtbwWJVZI8I822JTfcViE5LLaHxPc0zPNyg&s", route: "e-manupatra" },
    { name: "AIR Online", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10EtNbNpqbOS4DV6HUit8BNeWTisVIuHJvw&s", route: "e-air-online" },
    { name: "E-Shodh Sindhu", icon: "https://pbs.twimg.com/profile_images/1224974480293761024/SKkL04Oq_400x400.jpg", route: "e-e-shodh" },
    { name: "Previous Year Papers", icon: "https://www.careerpower.in/blog/wp-content/uploads/2024/06/19191433/SSC-CPO-Previous-Year-Question-Paper.webp", route: "e-previous-papers" }
  ];

  constructor(private router: Router) {}

  navigateToDatabase(route: string) {
    this.router.navigate([`/e-database/${route}`]);
  }
}
