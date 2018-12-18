import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: '<app-upload-test>',
  template: `
  <ul>
    <li *ngFor="let item of items | async">
        <img src="{{item.path}}"/> 
    </li>
  </ul>
  `
})
export class UploadTest {
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('data').valueChanges();
  }
}