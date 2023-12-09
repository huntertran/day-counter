import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-new-category',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatInputModule, FormsModule, MatIconModule],
  templateUrl: './new-category.component.html',
  styleUrl: './new-category.component.scss'
})
export class NewCategoryComponent {
  public value: string = '';
  public isCategoryNameDuplicated: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<NewCategoryComponent>,
    private categoryService: CategoryService
  ) { }

  public addCategory(name: string): void {
    let addCategorySucceed: boolean = this.categoryService.create('test', name);
    if (addCategorySucceed) {
      this.isCategoryNameDuplicated = false;
      this.dialogRef.close();
    } else {
      this.isCategoryNameDuplicated = true;
    }
  }
}
