import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  // public getData(url: string)
  // {
  //   // let l;
  //   // this.httpClient.get(url).subscribe((layout) => l = layout )
  //   // return 
  // }

  getData(url: string): Observable<Object> {
    return this.httpClient.get<Object>(url)
  }
}
