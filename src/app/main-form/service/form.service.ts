import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private firestore: Firestore,
  ) { }

  async saveAllData(data: any) {
    const db = this.firestore;
    const collectionRef = await collection(db, 'form');
    addDoc(collectionRef, data);
  }


}
