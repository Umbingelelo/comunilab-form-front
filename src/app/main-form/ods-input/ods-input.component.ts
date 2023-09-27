import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ods-input',
  templateUrl: './ods-input.component.html',
  styleUrls: ['./ods-input.component.css']
})
export class OdsInputComponent implements OnInit {
  images: any[] = [
    { src: '../../../assets/images/ods/S-WEB-Goal-01.png', isSelected: false },
    { src: '../../../assets/images/ods/S-WEB-Goal-02.png', isSelected: false },
    { src: '../../../assets/images/ods/S-WEB-Goal-03.png', isSelected: false },
    { src: '../../../assets/images/ods/S-WEB-Goal-04.png', isSelected: false },
    { src: '../../../assets/images/ods/S-WEB-Goal-05.png', isSelected: false },
    { src: '../../../assets/images/ods/S-WEB-Goal-06.png', isSelected: false },
    { src: '../../../assets/images/ods/S-WEB-Goal-07.png', isSelected: false },
    { src: '../../../assets/images/ods/S-WEB-Goal-08.png', isSelected: false },
    { src: '../../../assets/images/ods/S-WEB-Goal-09.png', isSelected: false },
    { src: '../../../assets/images/ods/S-WEB-Goal-10.png', isSelected: false },
    { src: '../../../assets/images/ods/S-WEB-Goal-11.png', isSelected: false },
    { src: '../../../assets/images/ods/S-WEB-Goal-12.png', isSelected: false },
    { src: '../../../assets/images/ods/S-WEB-Goal-13.png', isSelected: false },
    { src: '../../../assets/images/ods/S-WEB-Goal-14.png', isSelected: false },
    { src: '../../../assets/images/ods/S-WEB-Goal-15.png', isSelected: false },
    { src: '../../../assets/images/ods/S-WEB-Goal-16.png', isSelected: false },
    { src: '../../../assets/images/ods/S-WEB-Goal-17.png', isSelected: false },
  ];


  constructor() { }

  ngOnInit(): void {
  }

  getOnlyNumberOfString() {
    return this.images.filter(image => image.isSelected).length;
  }

  cleanNameOfSelectedImages(selectedImages: any[]) {
    return selectedImages.map(image => "ODS-" + image.src.split('/')[6].split('.')[0].split('-')[1]);
  }

  saveSelectedImages() {
    const selectedImages = this.images.filter(image => image.isSelected);
    const selectedImagesToSave = this.cleanNameOfSelectedImages(selectedImages);
    localStorage.setItem('selectedImagesODS', JSON.stringify(selectedImagesToSave));
  }


  toggleSelection(image: any) {
    image.isSelected = !image.isSelected;
  }
}
