import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TestServiceService } from '../services/test-service.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  @Input('userInfo') masterName: string;

  personForm: FormGroup;

  numbers = [];
  genders = ['Male', 'Female'];
  error: any;


  ngOnInit() {

    this.personForm = this.fb.group({
      id: ['', Validators.required],
      userName: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required]
    });

    console.log(this.masterName);

  }

  constructor(private fb: FormBuilder, private testService: TestServiceService,
    private translate: TranslateService, private router: Router) {
    for (let i = 1; i <= 150; i++) {
      this.numbers.push(i)
    }
  }


  onSubmit() {
    let id = '_' + Math.random().toString(36).substr(2, 9)
    this.personForm.controls['id'].setValue(id);
    this.markFieldsAsTouched();
    if (this.personForm.valid) {
      this.testService.createUser(this.personForm).subscribe(
        result => {
          this.router.navigate(['/userList'])
        },
        error => {
          this.error = error;
        });
    }
  }

  markFieldsAsTouched() {
    Object.keys(this.personForm.controls).forEach(field => {
      const control = this.personForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}