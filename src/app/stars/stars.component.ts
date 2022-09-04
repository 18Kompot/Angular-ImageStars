import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css'],
})
export class StarsComponent implements OnInit {
  mouseOverItemIndex = 0;
  starsCounter = 5;
  constructor() {}

  @Input() card!: Card;

  ngOnInit(): void {}
}
