import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  templateUrl: './news.component.html',
  // styleUrls: ['./../app.component.css'],
})
export class NewsComponent {
  title = 'news-portal';

  homes: { title: string; abstract: string }[] = []; // Initialize as an empty array
  private homesObservable: Observable<any>;
  loading: boolean = true;

  constructor(private dataService: DataService) {
    this.homesObservable = this.dataService.get_homes();
    this.homesObservable.subscribe(
      (res) => {
        this.homes = res.results;
        this.loading = false; // Data has been loaded
      },
      (error) => {
        console.error('Error fetching homes:', error);
        this.homes = [];
        this.loading = false; // Data loading failed
      }
    );

    this.dataService.get_homes().subscribe((res) => {
      console.log('res', res);
      this.homes = res.results; // Assign the results directly
    });
  }

  stringifyHomes() {
    return JSON.stringify(this.homes[0], null, 2);
  }
}
