import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() starRating: number;
  starWidth: number;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  
  ngOnChanges(): void {
    this.starWidth = this.starRating  * 15;
  }

  onClick() : void  {
      this.ratingClicked.emit(`rating ${this.starRating} clicked`);
  }
}
