import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent extends BaseComponent implements OnInit {

  @Input() desktopColumns = "1";
  @Input() mobileColumns = "1";

  constructor() {
    super()
   }

  ngOnInit(): void {
  }

}
