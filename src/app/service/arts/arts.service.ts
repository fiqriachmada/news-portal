import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArtsService {
  constructor(private apiService: ApiService) {}
  get_arts() {
    return this.apiService.get('/arts.json');
  }
}
