import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3000';



  searchKey= new BehaviorSubject('')



  constructor(private http:HttpClient) { }

getAllBreeds()
{
 return this.http.get('http://localhost:3000/all-Breeds')

}



viewBreed(breedId:any)
{
 return this.http.get('http://localhost:3000/view-breeds/'+breedId)
}


addBreed(breed: any, id: any, origin: any,age: any,temperament: any, price: any,photo: any) {

  console.log("Making API call to add breed");
  const body = {
    breed,
    id,
    origin,
    age,
    temperament,
    price,
    photo
  }
  return this.http.post('http://localhost:3000/add-Breeds',body)
  
  
}



allSellers()
{
 return this.http.get('http://localhost:3000/all-Sellers')

}

viewSeller(sellerId:any)
{
 return this.http.get('http://localhost:3000/view-sellers/'+sellerId)
}

deleteItemAllbreed(breedId:any){
  return this.http.delete('http://localhost:3000/remove-item-all-Breeds/'+breedId)

}

getNews() {
  return this.http.get<Response>('http://localhost:3000/news');
}


addSeller(name: any, id: any, contact: any,email: any,location: any) {

  const body = {
    name, id, contact, email, location
  }
  return this.http.post('http://localhost:3000/add-Seller',body)
  
  
}

deleteItemAllseller(sellerId:any){

  return this.http.delete('http://localhost:3000/remove-item-all-Sellers/'+sellerId)

}




}
