import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-project',
  templateUrl: './information-project.component.html',
  styleUrls: ['./information-project.component.css']
})
export class InformationProjectComponent implements OnInit {

  hasWebsite = true;
  hasFacebook = true;
  hasInstagram = true;
  hasTwitter = true;
  hasOther = true;
  hasRRSS = true;
  constructor() { }

  ngOnInit(): void {
  }
}
