import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concerns-need',
  templateUrl: './concerns-need.component.html',
  styleUrls: ['./concerns-need.component.css']
})
export class ConcernsNeedComponent implements OnInit {

  concernsForm: any = {
    concerns: '',
    risk: '',
    priority: '',
  };

  constructor() { }

  ngOnInit(): void {

  }

  saveConcernsForm(): void {
    console.log(this.concernsForm);
    localStorage.setItem('concernsForm', JSON.stringify(this.concernsForm));
  }
}
