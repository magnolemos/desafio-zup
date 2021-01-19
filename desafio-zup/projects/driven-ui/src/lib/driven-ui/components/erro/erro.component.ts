import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-erro',
  templateUrl: './erro.component.html',
  styleUrls: ['./erro.component.css']
})
export class ErroComponent extends BaseComponent implements OnInit {

  constructor() {
    super()
   }

  ngOnInit(): void {
  }

}
