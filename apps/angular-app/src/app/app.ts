import { Component } from '@angular/core';
import { NautikaComponent } from './nautika/nautika.component';

@Component({
  selector: 'app-root',
  imports: [NautikaComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'learn-latest';
}
