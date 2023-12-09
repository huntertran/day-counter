import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Main } from '../models/main.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private storageService: StorageService
  ) { }

  public create(user: string, categoryName: string): boolean {
    let main: Main = this.storageService.read(user);

    if (!main) {
      return false;
    }

    for (const category of main.Categories) {
      if (category.Title == categoryName) {
        return false;
      }
    }

    let newCategory: Category = {
      Id: crypto.randomUUID(),
      Title: categoryName,
      Stories: []
    };

    main.Categories.push(newCategory);

    this.storageService.update(main);

    return true;
  }
}
