import { Injectable } from '@angular/core';
import { Story, CountType } from '../models/story.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor() { }

  private compare(storyA: Story, storyB: Story): number {
    const dateA = storyA.StartDay ? storyA.StartDay.getTime() : storyA.EndDay?.getTime();
    const dateB = storyB.StartDay ? storyB.StartDay.getTime() : storyB.EndDay?.getTime();

    if (dateA == undefined || dateB == undefined) {
      return 0;
    }

    // Compare the dates and return the result
    if (dateA < dateB) {
      return -1;
    } else if (dateA > dateB) {
      return 1;
    } else {
      return 0;
    }
  }

  public create(
    category: Category,
    title: string,
    description: string,
    date: Date,
    countType: CountType) {
    let story: Story;

    switch (countType) {
      case CountType.CountUp:
      default:
        {
          story = {
            Id: crypto.randomUUID(),
            Title: title,
            Description: description,
            StartDay: date,
            EndDay: undefined
          };
          break;
        }
      case CountType.CountDown:
        {
          story = {
            Id: crypto.randomUUID(),
            Title: title,
            Description: description,
            StartDay: undefined,
            EndDay: date
          };
          break;
        }
    }

    category.Stories.push(story);
    category.Stories.sort(this.compare);
  }

  public read(category: Category, storyID: string): Story | undefined {
    return category.Stories.find((story) => story.Id == storyID);
  }
}