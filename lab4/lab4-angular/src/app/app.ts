import { Component } from '@angular/core';
import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReversePipe],
  template: `Reverse Machine: {{ word | reverse }}`
})
export class App {

  word = 'Angular';

}
