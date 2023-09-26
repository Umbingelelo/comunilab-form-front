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
        console.log('All data saved');
      }
      )
    }, 5000);

  }

  async getAllDataFromLocalStorage() {
    const data = await {
      aboutYouForm: JSON.parse(localStorage.getItem('aboutYouForm') || '{}'),
      odsForm: JSON.parse(localStorage.getItem('selectedImagesODS') || '{}'),
      projectForm: JSON.parse(localStorage.getItem('projectForm') || '{}'),
      managerForm: JSON.parse(localStorage.getItem('managerForm') || '{}'),
    };
    await this.formService.saveAllData(data);
  }




}
