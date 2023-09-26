import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-you-form',
  templateUrl: './about-you-form.component.html',
  styleUrls: ['./about-you-form.component.css']
})
export class AboutYouFormComponent implements OnInit {
  public aboutYouForm = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
  };

  constructor() { }


  ngOnInit(): void {
  }

  saveAboutYou() {
    localStorage.setItem('aboutYouForm', JSON.stringify(this.aboutYouForm));
  }

}
