import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-breed',
  templateUrl: './view-breed.component.html',
  styleUrls: ['./view-breed.component.css']
})
export class ViewBreedComponent {

  breed: any=[]
  breedImages: any=[];



  breedId: any;
  sellerId: any;
  viewBreed: any;
  viewSeller: any;
  checkoutMsg = ""
  allbreed: any;
  deliveryMsg: any;
  allseller: any;


  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private router: Router) {

  }

  ngOnInit(): void {

    this.activatedRoute.params
      .subscribe((data: any) => {
        console.log(['id']);
        this.breedId = data['id']

      })

    // to get details of product

    this.api.viewBreed(this.breedId)
      .subscribe((result: any) => {
        console.log(result.breed);
        this.viewBreed = result.breed

      })



    this.activatedRoute.params
      .subscribe((data: any) => {
        console.log(['id']);
        this.sellerId = data['id']

      })

    // to get details of seller

    this.api.viewSeller(this.sellerId)
      .subscribe((result: any) => {
        console.log(result.seller);
        this.viewSeller = result.seller

      })





  }

  checkout() {
    this.checkoutMsg = "Successfully Booked"
    this.deliveryMsg = "Will be delivered within 2-3 days"
    setTimeout(() => {

      this.router.navigateByUrl('').then(() => {
        window.location.reload();
      });

    }, 2000
    )
  }


  deleteItem(breedId: any) {
    this.api.deleteItemAllbreed(breedId)
      .subscribe((result: any) => {
        this.allbreed = result.breed

      },
        (result: any) => {
          alert(result.error.message)
        })
  }



  deleteSeller(sellerId: any) {
    this.api.deleteItemAllseller(sellerId)
      .subscribe((result: any) => {
        this.allseller = result.seller

      },
        (result: any) => {
          alert(result.error.message)
        })
  }













}



