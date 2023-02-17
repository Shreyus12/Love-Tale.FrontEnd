import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  allseller: any;
  deliveryMsg: any;

  userForm = this.fb.group({
    name: [''],
    phone: [''],
    email: ['']

  })

  user:any=[]

  loginForm= this.fb.group({

    email:[''],
    pswd:['']

  })
  errorMsg:string=''
  successMsg:boolean=false



  constructor(private fb: FormBuilder,private activatedRoute: ActivatedRoute, private api: ApiService, private router: Router) {

  }

  ngOnInit(): void {

    this.api.alluser()
    .subscribe((result:any)=>
    {
      this.user = result.user
      console.log(result.user);
      
    })

    this.activatedRoute.params
      .subscribe((data: any) => {
        console.log(['id']);
        this.breedId = data['id']

      })


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


    this.api.viewSeller(this.sellerId)
      .subscribe((result: any) => {
        console.log(result.seller);
        this.viewSeller = result.seller

      })





  }

  checkout() {
    this.checkoutMsg = "Successfully Booked"
    this.deliveryMsg = "Enquiry Successful"
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

  adduser() {

    if (this.userForm.valid) {
      let name = this.userForm.value.name
      let phone = this.userForm.value.phone
      let email = this.userForm.value.email


      this.api.adduser(name, phone, email).subscribe(
        (result: any) => {


          alert(result.message)
          window.location.reload();



        },
        (result: any) => {
          alert(result.error.message)

        })
    }
    else {
      alert('Invalid Form')
    }


  }

  login() {

    if(this.loginForm.valid){

    let email = this.loginForm.value.email
    let pswd = this.loginForm.value.pswd
    this.api.login(email,pswd)
    .subscribe(
      (result:any)=>
      {
        this.successMsg=true
        localStorage.setItem("currentEmail",JSON.stringify(result.currentEmail))
        setTimeout(()=>{
          this.router.navigateByUrl('/breeds/seller') 
          this.router.navigateByUrl('/breeds/seller') 

        },2000)
        
      },
      (result:any)=>{
        this.errorMsg = result.error.message
      }
    )
    }
    else{
      alert('Invalid Form')
    }

  }

  addtosellerlist(breed:any)
  {
   this.api.addtosellerlist(breed)
   .subscribe(
     (result:any)=>
   {
     alert(result.message)
 
   },
   (result:any)=>
   {
     alert(result.error.message)
   })
  }




}









