import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-project',
  templateUrl: './manager-project.component.html',
  styleUrls: ['./manager-project.component.css']
})
export class ManagerProjectComponent implements OnInit {

  isManager = false;

  public managerForm = {
    isManager: false,
    name: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    actualOccupation: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  saveManagerForm() {
    this.managerForm.isManager = this.isManager;
    console.log(this.managerForm);
    localStorage.setItem('managerForm', JSON.stringify(this.managerForm));
  }

}
