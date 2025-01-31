import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})

export class GroceryListComponent {
  groceryItem: string = '';
  groceryList: string[] = ['Coffee'];

  addGroceryItem() {
    if (this.groceryItem.trim()) {
      this.groceryList.push(this.groceryItem.trim());
      this.groceryItem = '';
    } else {
      console.log('Please enter an item.');
    }
  }

  removeGroceryItem(item: string) {
    const index = this.groceryList.indexOf(item);
    if (index > -1) {
      this.groceryList.splice(index, 1);
    }
  }
}
