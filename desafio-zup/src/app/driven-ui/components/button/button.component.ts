import { Component, Input, OnInit } from '@angular/core';
import { BaseModule } from '../base-module';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent extends BaseComponent implements OnInit {
 
  @Input() url!: string;

  constructor() { 
    super()
  }

  ngOnInit(): void {
  }

}
