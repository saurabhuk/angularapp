import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  createDb() {

    let userDetails = [
      { id: '1', userName: 'Saurabh', gender: 'Male', age: '25' },
      { id: '2', userName: 'Utkarsha', gender: 'Female', age: '25' },
      { id: '3', userName: 'Nikhil', gender: 'Male', age: '23' },
      { id: '4', userName: 'Sushmita', gender: 'Female', age: '22' }
    ];

    // localStorage.setItem('userItems', userDetails);
    // let userData = localStorage.getItem('userItems');
    return { users: userDetails };
  }
}
