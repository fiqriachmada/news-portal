import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'news-portal';

  homes: {
    title: string;
    abstract: string;
    url: string;
    multimedia: { url: string }[];
  }[] = []; // Initialize as an empty array
  private homesObservable: Observable<any>;
  loading: boolean = true;

  constructor(
    private dataService: DataService // private router: Router
  ) {
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

  onClick(url: string) {
    console.log('url', url);
    // return this.router.navigate([url]);
  }
}
