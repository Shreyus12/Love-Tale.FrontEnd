import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetnewsComponent } from './petnews/petnews.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [{ path: 'breeds', loadChildren: () => import('./breeds/breeds.module').then(m => m.BreedsModule) },

{ path: 'petnews', component: PetnewsComponent },

{ path: '', redirectTo: 'breeds', pathMatch: 'full' },


{ path: '**', component: PagenotfoundComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
