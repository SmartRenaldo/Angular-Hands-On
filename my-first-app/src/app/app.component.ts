import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./warning-alert.component.css']
  styles: [`
    h3 {
      color: blue;
    }
  `]
})
export class AppComponent {
  title = 'my first-app';
  name = 'Dora';
}
