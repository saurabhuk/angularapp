import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TestServiceService } from '../services/test-service.service';

@Component({
  selector: 'app-test-list-component',
  templateUrl: './test-list-component.component.html',
  styleUrls: ['./test-list-component.component.css']
})
export class TestListComponentComponent implements OnInit {

  error: any;
  users = [];
  constructor(private testService: TestServiceService, private translate: TranslateService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }


  getUsers() {
    this.testService.getUsers().subscribe((data: any) => {
      this.users = data;
    },
      error => {
        this.error = error;
      })
  }

  goBack() {
    this.router.navigate(['/homePage']);
  }
}
