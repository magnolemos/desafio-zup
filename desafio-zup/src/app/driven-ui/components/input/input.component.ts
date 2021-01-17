import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() value: string;
  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
  }

}
