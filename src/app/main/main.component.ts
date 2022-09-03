import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}

  imagesArr: Card[] = [];

  // imgArr: any[] = [];

  ngOnInit(): void {}

  addImage(name: HTMLInputElement, url: HTMLInputElement) {
    //   this.imgArr.push({
    //     download_url: url.value,
    //   });
    if (!name.value || !url.value) {
      return alert('Please provide a name and a link to continue');
    } else {
      this.imagesArr.push(new Card(name.value, url.value));
      name.value = '';
      url.value = '';
    }
  }
}
