import { Component, OnInit } from '@angular/core';
import { ApiService } from '../breeds/services/api.service';





@Component({
  selector: 'app-petnews',
  templateUrl: './petnews.component.html',
  styleUrls: ['./petnews.component.css']
})
export class PetnewsComponent implements OnInit {

  articles:any=[]
  
  
  

  constructor(private api: ApiService) { }


  ngOnInit(): void {
  this.api.getNews().subscribe((data: any) => {
    if (data && Array.isArray(data.articles)) {
      this.articles = data.articles;
    } else {
      console.error('Unexpected data format', data);
    }
  });
}

openLink(url: string) {
  window.open(url, '_blank');
}

}



