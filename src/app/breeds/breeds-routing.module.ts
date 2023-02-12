import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedsComponent } from './breeds.component';

import { ViewBreedComponent } from './view-breed/view-breed.component';

const routes: Routes = [{ path:'', component: BreedsComponent },

{path:'view-breed/:id', component: ViewBreedComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreedsRoutingModule { }
