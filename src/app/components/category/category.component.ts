import { Component } from '@angular/core';
import { EventComponent } from '../event/event.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [EventComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

}
