import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaComponent } from './compa/compa.component';
import { SubdComponent } from './compa/subd/subd.component';
import { CompbComponent } from './compb/compb.component';
import { CompcComponent } from './compc/compc.component';
import { CompeComponent } from './compe/compe.component';
import { CompfComponent } from './compf/compf.component';
import { SubaComponent } from './suba/suba.component';
import { SubbComponent } from './subb/subb.component';
import { SubcComponent } from './subc/subc.component';


const routes: Routes = [
  {
    path: 'compa',
    component: CompaComponent,
    children: [
      {
        path: 'suba',
        component: SubaComponent
      },
      {
        path: 'subb',
        component: SubbComponent
      },
      {
        path: 'subd',
        component: SubcComponent
      }
    ]
  },
  {
    path: 'compb',
    component: CompbComponent,
  },
  {
    path: 'compc',
    component: CompcComponent,
  },
  {
    path: 'suba',
    component: SubdComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
