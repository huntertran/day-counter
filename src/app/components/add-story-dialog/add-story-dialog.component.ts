import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-add-story-dialog',
  standalone: true,
  imports: [],
  templateUrl: './add-story-dialog.component.html',
  styleUrl: './add-story-dialog.component.scss'
})
export class AddStoryDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddStoryDialogComponent>,
    private storyService: StoryService
  ) { }

  public createStory(): void
  {
    // this.storyService.create();
  }
}
