import { Component } from '@angular/core';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {
  newTourDate: string = '';
  tourDates: string[] = [
   
  ];

  addTour() {
    if (this.newTourDate.trim()) {
      this.tourDates.push(this.newTourDate.trim());
      this.newTourDate = '';
    }
  }

  removeTour(tour: string) {
    const index = this.tourDates.indexOf(tour);
    if (index > -1) {
      this.tourDates.splice(index, 1);
    }
  }
}
