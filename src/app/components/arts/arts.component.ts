import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { ArtsService } from '../../service/arts/arts.service';

@Component({
  selector: 'app-arts',
  standalone: true,
  imports: [],
  templateUrl: './arts.component.html',
  styleUrl: './arts.component.css',
})
export class ArtsComponent {
  title = 'news-portal';

  arts: {
    title: string;
    abstract: string;
    url: string;
    multimedia: { url: string }[];
  }[] = []; // Initialize as an empty array
  private artsObservable: Observable<any>;
  loading: boolean = true;
  router: Routes = [];

  constructor(private artsService: ArtsService) {
    this.artsObservable = this.artsService.get_arts();
    this.artsObservable.subscribe(
      (response) => {
        this.arts = response.results;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching homes:', error);
        this.arts = [];
        this.loading = false; // Data loading failed
      }
    );
    this.artsService.get_arts().subscribe((res) => {
      console.log('res', res);
      this.arts = res.results; // Assign the results directly
    });
  }
}
