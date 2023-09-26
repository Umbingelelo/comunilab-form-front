import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-project',
  templateUrl: './manager-project.component.html',
  styleUrls: ['./manager-project.component.css']
})
export class ManagerProjectComponent implements OnInit {

  isManager = false;

  constructor() { }

  ngOnInit(): void {
  }


}
