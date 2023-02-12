import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from './services/api.service';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {


  breeds:any=[]
  sellers:any=[]
  allbreeds:any=[]
  searchItem:string=""
  nextId: number = 0;
  newId: number = 0;




  constructor(private api:ApiService,private router:Router,private sharedService: SharedService)
  {

  }


  ngOnInit(): void {


    this.api.getAllBreeds()
    .subscribe((result:any)=>
    {
      this.breeds = result.breeds
      console.log(result.breeds);
      this.nextId = this.breeds.reduce((max: number, breed: any) => Math.max(max, breed.id), 0) + 1;
      this.sharedService.setNextId(this.nextId);
      
    })



    

    this.api.searchKey.subscribe((result:any)=>
    {
      console.log(result);
      this.searchItem= result
      
    })

    this.api.allSellers()
    .subscribe((result:any)=>
    {
      this.sellers = result.sellers
      console.log(result.sellers);
      this.newId = this.sellers.reduce((max: number, seller: any) => Math.max(max, seller.id), 0) + 1;
      this.sharedService.setNewId(this.newId);
      
    })


      









    
    
  }

  

}
