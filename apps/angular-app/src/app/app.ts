import { Component } from '@angular/core';
import { NautikaComponent } from './nautika/nautika.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NautikaComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'learn-latest';
}
