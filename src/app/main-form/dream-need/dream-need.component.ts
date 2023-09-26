import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dream-need',
  templateUrl: './dream-need.component.html',
  styleUrls: ['./dream-need.component.css']
})
export class DreamNeedComponent implements OnInit {
  imageSelected: File | undefined;
  imagePreview: string = '';
  imageModified: boolean = false;
  imageAsPNG: any;
  dreamUserForm: any = {
    dream: '',
    image: ''
  };

  constructor() { }

  ngOnInit(): void {

  }

  async uploadFileToS3(storeId: number, image: File, fileName: string) {
    const fd = new FormData();
    fd.append('file', image, fileName);

  }

  onFileSelected(event: any): void {
    if (!event.target.files[0]) return;
    const fileSelected = <File>event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSelected = fileSelected;
      this.imagePreview = URL.createObjectURL(this.imageSelected);
    };
    reader.readAsDataURL(fileSelected);
  }

  clearImage(): void {
    this.imageSelected = undefined;
    this.imagePreview = '';
    this.imageModified = true;
  }

  saveDreamForm(): void {
    this.dreamUserForm.image = this.imageSelected;
    console.log(this.dreamUserForm);
    localStorage.setItem('dreamUserForm', JSON.stringify(this.dreamUserForm));
  }
}


