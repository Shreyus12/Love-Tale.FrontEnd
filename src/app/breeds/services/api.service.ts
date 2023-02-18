import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://lovetale-backend.onrender.com';





  searchKey= new BehaviorSubject('')



  constructor(private http:HttpClient) { }

getAllBreeds()
{
 return this.http.get(`${this.baseUrl}/all-Breeds`)

}



viewBreed(breedId:any)
{
 return this.http.get(`${this.baseUrl}/view-breeds/`+breedId)
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
  return this.http.post(`${this.baseUrl}/add-Breeds`,body)
  
  
}



allSellers()
{
 return this.http.get(`${this.baseUrl}/all-Sellers`)

}

viewSeller(sellerId:any)
{
 return this.http.get(`${this.baseUrl}/view-sellers/`+sellerId)
}


getNews() {
  return this.http.get<Response>(`${this.baseUrl}/news`);
}


addSeller(name: any, id: any, contact: any,location: any,count: any) {

  const body = {
    name, id, contact, location, count
  }
  return this.http.post(`${this.baseUrl}/add-Seller`,body)
  
  
}

adduser(name: any, phone: any, email: any) {

  const body = {
    name, phone, email
  }
  return this.http.post(`${this.baseUrl}/add-user`,body)
  
  
}


alluser()
{
 return this.http.get(`${this.baseUrl}/all-user`)

}

register(email: any,pswd: any) {
  const body = {
    email,
    pswd
  }
  return this.http.post(`${this.baseUrl}/register`,body)

}

login(email:any,pswd:any){
  const body={
    email,pswd
  }
  return this.http.post(`${this.baseUrl}/login`,body)


}

addtosellerlist(breed:any)
{
  return this.http.post(`${this.baseUrl}/add-to-sellerlist`,breed)
}

getsellerlist()
{
  return this.http.get(`${this.baseUrl}/get-sellerlist`)

}

deleteItemAllbreed(breedId:any){
  return this.http.delete(`${this.baseUrl}/remove-item-all-Breeds/`+breedId)

}


deleteItemAllseller(sellerId:any){

  return this.http.delete(`${this.baseUrl}/remove-item-all-Sellers/`+sellerId)

}






}
