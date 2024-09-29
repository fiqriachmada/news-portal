import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environtment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  baseUrl: string = 'https://api.nytimes.com/svc/topstories/v2';
  
  apiKey: string = environment.nytimesApiKey;

  constructor(private httpClient: HttpClient) {}

  get(params: string): Observable<any> {
    return this.httpClient.get<any>(
      this.baseUrl + params + `?api-key=${this.apiKey}`
    );
  }
}
