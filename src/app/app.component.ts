import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterOutlet } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { Main } from './models/main.model';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CategoryComponent, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public main: Main = {
    User: '',
    Categories: []
  };

  constructor(
    public dialog: MatDialog,
    private storageService: StorageService
  ) { }
  ngOnInit(): void {
    this.main = this.storageService.read('test');
  }

  public addCategory(): void {
    this.dialog.open(NewCategoryComponent)
      .afterClosed().subscribe(() =>
        this.main = this.storageService.read('test')
      );
  }
}
