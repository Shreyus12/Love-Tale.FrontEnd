import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';


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


getNews() {
  return this.http.get<Response>('http://localhost:3000/news');
}


addSeller(name: any, id: any, contact: any,location: any,count: any) {

  const body = {
    name, id, contact, location, count
  }
  return this.http.post('http://localhost:3000/add-Seller',body)
  
  
}

adduser(name: any, phone: any, email: any) {

  const body = {
    name, phone, email
  }
  return this.http.post('http://localhost:3000/add-user',body)
  
  
}


alluser()
{
 return this.http.get('http://localhost:3000/all-user')

}

register(email: any,pswd: any) {
  const body = {
    email,
    pswd
  }
  return this.http.post('http://localhost:3000/register',body)

}

login(email:any,pswd:any){
  const body={
    email,pswd
  }
  return this.http.post('http://localhost:3000/login',body)


}

addtosellerlist(breed:any)
{
  return this.http.post('http://localhost:3000/add-to-sellerlist',breed)
}

getsellerlist()
{
  return this.http.get('http://localhost:3000/get-sellerlist')

}

deleteItemAllbreed(breedId:any){
  return this.http.delete('http://localhost:3000/remove-item-all-Breeds/'+breedId)

}


deleteItemAllseller(sellerId:any){

  return this.http.delete('http://localhost:3000/remove-item-all-Sellers/'+sellerId)

}






}
