import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent extends BaseComponent implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit(): void {
  }

}
