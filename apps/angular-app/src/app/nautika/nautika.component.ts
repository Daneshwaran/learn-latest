import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nautika',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nautika.component.html',
  styleUrls: ['./nautika.component.scss'],
})
export class NautikaComponent {}
