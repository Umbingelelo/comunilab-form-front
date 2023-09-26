import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private firestore: Firestore,
    private storage: Storage,
  ) { }

  async saveAllData(data: any) {
    const db = this.firestore;
    const collectionRef = await collection(db, 'form');
    addDoc(collectionRef, data);
  }

  saveImage(File: any) {
    const imgRef = ref(this.storage, 'images/' + File.name);
    uploadBytes(imgRef, File).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  }


}
