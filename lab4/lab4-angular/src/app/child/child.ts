import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {

  addItemEvent = output<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
