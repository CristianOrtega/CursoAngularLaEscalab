import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { AnimalComponent } from './components/animal/animal.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'animales',
    component: AnimalesComponent
  },
  {
    path: 'animal/:id',
    component: AnimalComponent
  },
  {
    path: 'buscar/:termino',
    component: BuscadorComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
