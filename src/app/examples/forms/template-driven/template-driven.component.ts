import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  submitForm(f: any) {
    console.log(f.value);
  }

}
