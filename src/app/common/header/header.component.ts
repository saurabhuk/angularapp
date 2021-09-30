import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userInfo: any;
  constructor(private route: Router) { }

  ngOnInit() {
    this.userInfo = localStorage.getItem('userName');
  }


  logout() {
    this.route.navigate(["/"]);
    localStorage.clear();
  }
}
