import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../breeds/services/api.service';
import { SharedService } from '../breeds/services/shared.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  allBreeds: any[] = []
  nextId = 0;
  newId = 0;

  breedForm = this.fb.group({
    breed: [''],
    id: [''],
    origin: [''],
    age: [''],
    temperament: [''],
    price: [''],
    photo: [''],
  })

  sellerForm = this.fb.group({
    name: [''],
    id: [''],
    contact: [''],
    email: [''],
    location: [''],

  })




  constructor(private fb: FormBuilder, private api: ApiService, private router: Router,private sharedService: SharedService) {


  }
  ngOnInit(): void {

    this.api.getAllBreeds()
      .subscribe((result: any) => {
        console.log(result);
        this.allBreeds = result
        
        

      })

      this.sharedService.getNextId().subscribe((id: number) => {
        this.nextId = id;
      });

      this.sharedService.getNewId().subscribe((id: number) => {
        this.newId = id;
      });

  

      



  }

  search(event: any) {
    let searchTerm = event.target.value
    this.api.searchKey.next(searchTerm)
  }

  addBreed() {

    if (this.breedForm.valid) {
      let breed = this.breedForm.value.breed
      let id = this.breedForm.value.id
      let origin = this.breedForm.value.origin
      let age = this.breedForm.value.age
      let temperament = this.breedForm.value.temperament
      let price = this.breedForm.value.price
      let photo = this.breedForm.value.photo

      this.api.addBreed(breed, id, origin, age, temperament, price, photo).subscribe(
        (result: any) => {
          console.log("API call to add breed completed");

          alert(result.message)
          if (result.statusCode === 200) {
            window.location.reload();
          }


        },
        (result: any) => {
          alert(result.error.message)

        })
    }
    else {
      alert('Invalid Form')
    }


  }


  addSeller() {

    if (this.sellerForm.valid) {
      let name = this.sellerForm.value.name
      let id = this.sellerForm.value.id
      let contact = this.sellerForm.value.contact
      let email = this.sellerForm.value.email
      let location = this.sellerForm.value.location

      this.api.addSeller(name, id, contact, email, location).subscribe(
        (result: any) => {


          alert(result.message)
          if (result.statusCode === 200) {
            window.location.reload();
          }


        },
        (result: any) => {
          alert(result.error.message)

        })
    }
    else {
      alert('Invalid Form')
    }


  }











}
