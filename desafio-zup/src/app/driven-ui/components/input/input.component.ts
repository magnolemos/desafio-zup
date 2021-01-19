import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent extends BaseComponent implements OnInit {

  @Input() value: string = 'defaul';
  @Input() label: string = 'defaul';
  @Input() id: string = 'default';

  constructor() { 
    super()
  }

  ngOnInit(): void {
  }

}
