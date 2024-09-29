import { Routes } from '@angular/router';

import { NewsListComponent } from './components/news-list/news-list.component';
import { HomeComponent } from './components/home/home.component';
import { ArtsComponent } from './components/arts/arts.component';

export const routes: Routes = [
  { path: '', title: 'Home', redirectTo: '/home', pathMatch:'full' },
  { path: 'home', title: 'Home', component: HomeComponent },
  {
    path: 'top-stories',
    component: NewsListComponent,
    title: 'Top Stories',
  },
  {
    path: 'arts',
    component: ArtsComponent,
    title: 'Arts',
  },
];

const excludeRoutes = (excludePaths: (string | undefined)[]) => {
  return routes.filter((route) => !excludePaths.includes(route.path));
};

// Contoh penggunaan: Mengecualikan beberapa path
const excludedPaths: (string | undefined)[] = [
  //
  'home',
];

export const filteredExcludeRoutes = excludeRoutes(excludedPaths);
