import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent extends BaseComponent implements OnInit {

  @Input() url!: string;
  @Input() description!: string;
  
  constructor() { 
    super()
  }

  ngOnInit(): void {
  }

}
