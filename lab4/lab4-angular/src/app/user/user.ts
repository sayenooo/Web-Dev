import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

  favoriteFramework = '';

  showFramework() {
    alert(this.favoriteFramework);
  }

}
