import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strengths-need',
  templateUrl: './strengths-need.component.html',
  styleUrls: ['./strengths-need.component.css']
})
export class StrengthsNeedComponent implements OnInit {

  firstOption: string = '';
  secondOption: string = '';
  thirdOption: string = '';

  strengthsForm: any = {
    feats: '',
    place: '',
    multipleOptions: [],
  };

  constructor() { }

  ngOnInit(): void {

  }

  saveStrengthsForm(): void {
    this.strengthsForm.multipleOptions.push(this.firstOption);
    this.strengthsForm.multipleOptions.push(this.secondOption);
    this.strengthsForm.multipleOptions.push(this.thirdOption);
    console.log(this.strengthsForm);
    localStorage.setItem('strengthsForm', JSON.stringify(this.strengthsForm));
  }
}

