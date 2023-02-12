import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private nextId = new BehaviorSubject<number>(0);

  getNextId() {
    return this.nextId.asObservable();
  }

  setNextId(id: number) {
    this.nextId.next(id);
  }


  private newId = new BehaviorSubject<number>(0);

  getNewId() {
    return this.newId.asObservable();
  }

  setNewId(id: number) {
    this.newId.next(id);
  }






}
