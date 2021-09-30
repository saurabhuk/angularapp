import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestServiceService } from '../services/test-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: any;
  alertMessage: String;
  userInfo: any;
  showAlertMsg = false;

  constructor(private router: Router, private fb: FormBuilder, private testService: TestServiceService) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  markFieldsAsTouched() {
    Object.keys(this.loginForm.controls).forEach(field => {
      const control = this.loginForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  onSubmit() {
    this.markFieldsAsTouched();
    if (this.loginForm.valid) {
      this.testService.getUser(this.loginForm.get('userName').value).subscribe(
        result => {
          if (!this.isEmpty(result)) {
            localStorage.setItem('userName', this.loginForm.get('userName').value);
            this.router.navigate(["/homePage"]);
          } else {
            this.showAlertMsg = true
            this.alertMessage = 'Please Enter Valid Credentials';
          }
        },
        error => {
          this.error = error;
        });
    } else {
      this.showAlertMsg = true
      this.alertMessage = 'User name and Password is Mandatory, Please Enter the Credentials';
    }
  }

}
