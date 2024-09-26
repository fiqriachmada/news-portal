import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { NewsListComponent } from './components/news-list/news-list.component';

export const routes: Routes = [
  {
    path: 'top-stories',
    component: NewsListComponent,
  },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
