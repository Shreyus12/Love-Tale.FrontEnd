import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements  OnInit {

  sellerlist:any;
  user:any=[]



  constructor(private activatedRoute: ActivatedRoute,private api:ApiService,private router:Router)
  {

  }


  ngOnInit(): void {

    this.api.getsellerlist()
    .subscribe(
      (result:any)=>
    {
      this.sellerlist = result.sellerlist

    })

    this.api.alluser()
    .subscribe((result:any)=>
    {
      this.user = result.user
      console.log(result.user);
      
    })


  }

  checkout() {
    setTimeout(() => {

      this.router.navigateByUrl('').then(() => {
        window.location.reload();
      });

    }, 2000
    )
  }




}




