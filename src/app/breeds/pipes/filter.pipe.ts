import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allBreeds:[], searchKey:string, propName:string): any [] {
    
    const result:any=[]

    if(!allBreeds || searchKey=='' || propName== '')
    {
      return allBreeds

    }
    allBreeds.forEach((breed:any)=>
    {
      if(breed[propName].trim().toLowerCase().includes(searchKey.toLowerCase()))
      {
        result.push(breed)

      }
    })
    return result; 

    
  }
}
