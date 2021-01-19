import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  @ViewChild('containerComponent', { read: ViewContainerRef, static: true })
  containerComponent!: ViewContainerRef;

  @Input() children!: Array<string>;
  @Input() style!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
