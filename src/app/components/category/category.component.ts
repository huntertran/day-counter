import { Component } from '@angular/core';
import { StoryComponent } from '../story/story.component';
import { Story } from '../../models/story.model';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [StoryComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  public stories: Story[] = [];
}
