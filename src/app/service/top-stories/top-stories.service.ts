import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopSeriesService {
  // constructor() {}

  baseUrl: string = 'https://api.nytimes.com/svc/topstories/v2';
  apiKey: string = 'gcONf5buUsUCTusljWGF9SYG9CI6XYke';

  constructor(private httpClient: HttpClient) {}

  get_homes(): Observable<any> {
    return this.httpClient.get<any>(
      this.baseUrl + '/home.json' + `?api-key=${this.apiKey}`
    );
  }
}
