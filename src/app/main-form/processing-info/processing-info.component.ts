import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../service/form.service';

@Component({
  selector: 'app-processing-info',
  templateUrl: './processing-info.component.html',
  styleUrls: ['./processing-info.component.css']
})
export class ProcessingInfoComponent implements OnInit {

  constructor(
    private router: Router,
    private formService: FormService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.getAllDataFromLocalStorage().then(() => {
        this.router.navigate(['/send-email']);
      }
      )
    }, 5000);

  }

  async getAllDataFromLocalStorage() {
    const data = await {
      dreamUserForm: JSON.parse(localStorage.getItem('dreamUserForm') || '{}'),
      strengthsForm: JSON.parse(localStorage.getItem('strengthsForm') || '{}'),
      concernsForm: JSON.parse(localStorage.getItem('concernsForm') || '{}'),
      aboutYouForm: JSON.parse(localStorage.getItem('aboutYouForm') || '{}'),
      odsForm: JSON.parse(localStorage.getItem('selectedImagesODS') || '{}'),
      projectForm: JSON.parse(localStorage.getItem('projectForm') || '{}'),
      managerForm: JSON.parse(localStorage.getItem('managerForm') || '{}'),
    };
    await this.formService.saveAllData(data);
  }




}
