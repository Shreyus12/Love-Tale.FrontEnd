import { NgModule,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreedsRoutingModule } from './breeds-routing.module';
import { BreedsComponent } from './breeds.component';
import { SellerComponent } from './seller/seller.component';
import { ViewBreedComponent } from './view-breed/view-breed.component'
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';









@NgModule({
  declarations: [
    BreedsComponent,
    SellerComponent,
    ViewBreedComponent,
    FilterPipe,
    
    
    

    
  ],
  imports: [
    CommonModule,
    BreedsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
   
    
    
  ]
})
export class BreedsModule { }




