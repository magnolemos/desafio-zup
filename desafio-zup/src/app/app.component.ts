import { Component, OnInit } from '@angular/core';

import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private URL = '/assets/layout.json';
  public hasErro = false;
  public layout: any;

  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
   this.dataService.getData(this.URL).subscribe((layout) => this.layout = layout, (error) => this.hasErro = true)
  }
}
