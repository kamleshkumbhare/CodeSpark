import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component'
import { CarouselComponent } from './carousel/carousel.component'

const routes: Routes = [
  {
    path : 'home',
    component : HomepageComponent,
  },
  {
    path : 'about-us',
    component : AboutusComponent,
  },
  {
    path : 'carousel',
    component : CarouselComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
