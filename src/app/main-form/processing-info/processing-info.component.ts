import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-processing-info',
  templateUrl: './processing-info.component.html',
  styleUrls: ['./processing-info.component.css']
})
export class ProcessingInfoComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['send-email']);
    }, 5000);


  }



}
