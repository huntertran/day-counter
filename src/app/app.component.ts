import { NewCategoryComponent } from './components/new-category/new-category.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatDialog,
  MatDialogRef
} from '@angular/material/dialog';
import { StorageService } from './services/storage.service';
import { Main } from './models/main.model';

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
