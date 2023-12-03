import { Component } from '@angular/core';
import { StoryComponent } from '../story/story.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [StoryComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

}
