import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BreedsModule } from './breeds/breeds.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PetnewsComponent } from './petnews/petnews.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    PetnewsComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreedsModule,
    HttpClientModule,
    ReactiveFormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
