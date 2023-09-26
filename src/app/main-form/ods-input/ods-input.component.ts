import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ods-input',
  templateUrl: './ods-input.component.html',
  styleUrls: ['./ods-input.component.css']
})
export class OdsInputComponent implements OnInit {
  images: any[] = [
    { src: '../../../assets/images/ods/S_SDG_PRINT-01.jpg', isSelected: false },
    { src: '../../../assets/images/ods/S_SDG_PRINT-02.jpg', isSelected: false },
    { src: '../../../assets/images/ods/S_SDG_PRINT-03.jpg', isSelected: false },
    { src: '../../../assets/images/ods/S_SDG_PRINT-04.jpg', isSelected: false },
    { src: '../../../assets/images/ods/S_SDG_PRINT-05.jpg', isSelected: false },
    { src: '../../../assets/images/ods/S_SDG_PRINT-06.jpg', isSelected: false },
    { src: '../../../assets/images/ods/S_SDG_PRINT-07.jpg', isSelected: false },
    { src: '../../../assets/images/ods/S_SDG_PRINT-08.jpg', isSelected: false },
    { src: '../../../assets/images/ods/S_SDG_PRINT-09.jpg', isSelected: false },
    { src: '../../../assets/images/ods/S_SDG_PRINT-10.jpg', isSelected: false },
    { src: '../../../assets/images/ods/S_SDG_PRINT-11.jpg', isSelected: false },
    { src: '../../../assets/images/ods/S_SDG_PRINT-12.jpg', isSelected: false },
    { src: '../../../assets/images/ods/S_SDG_PRINT-13.jpg', isSelected: false },
    { src: '../../../assets/images/ods/S_SDG_PRINT-14.jpg', isSelected: false },
    { src: '../../../assets/images/ods/S_SDG_PRINT-15.jpg', isSelected: false },
    { src: '../../../assets/images/ods/S_SDG_PRINT-16.jpg', isSelected: false },
    { src: '../../../assets/images/ods/S_SDG_PRINT-17.jpg', isSelected: false },
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
