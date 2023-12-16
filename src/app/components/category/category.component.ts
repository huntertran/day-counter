import { Component, Input } from '@angular/core';
import { StoryComponent } from '../story/story.component';
import { Story } from '../../models/story.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { AddStoryDialogComponent } from '../add-story-dialog/add-story-dialog.component';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [StoryComponent, MatButtonModule, MatIconModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

  constructor(private matDialog: MatDialog) { }

  @Input() category!: Category;

  public addStory(): void {
    this.matDialog.open(AddStoryDialogComponent, { data: {}})
      .afterClosed().subscribe(() => {

      });
  }
}
