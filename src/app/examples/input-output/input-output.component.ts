import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {

  rating = {
    total: 20
  }

  constructor() { }

  ngOnInit(): void {
  }

  updateRating(status: boolean) {
    if (status) {
      this.rating.total++;
    } else {
      this.rating.total--;
    }
  }

}
