import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent extends BaseComponent implements OnInit {

  @Input() value: string = 'default';
  
  constructor() {
    super()
   }

  ngOnInit(): void {
  }

}
