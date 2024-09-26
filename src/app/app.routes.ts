import { Routes } from '@angular/router';

import { NewsListComponent } from './components/news-list/news-list.component';

export const routes: Routes = [
  {
    path: 'top-stories',
    component: NewsListComponent,
  },
];
