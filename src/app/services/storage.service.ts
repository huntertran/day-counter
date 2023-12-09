import { Injectable } from '@angular/core';
import store from 'store2';
import { Main } from '../models/main.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public create(main: Main): void {
    store.set(main.User, main.Categories, true);
  }

  public read(user: string): Main {
    let main: Main = {
      User: user,
      Categories: store.get(user, [])
    }

    return main;
  }

  public update(main: Main): void {
    store.set(main.User, main.Categories);
  }

  public delete(): void {
    store.clear();
  }
}
