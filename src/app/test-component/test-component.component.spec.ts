import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TestServiceService } from '../services/test-service.service';
import { of, throwError } from 'rxjs';

import { TestComponentComponent } from './test-component.component';
import { User } from '../models/user.model';

describe('TestComponentComponent', () => {
  let component: TestComponentComponent;
  let fixture: ComponentFixture<TestComponentComponent>;
  let testService: TestServiceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponentComponent],
      imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    testService = TestBed.get(TestServiceService);
    fixture = TestBed.createComponent(TestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call onSubmit when executed successfully', () => {
  //   fixture.detectChanges();
  //   component.personForm.controls.id.setValue('sasd');
  //   component.personForm.controls.userName.setValue('sadasd@asd.com');
  //   component.personForm.controls.age.setValue('132456789');
  //   component.personForm.controls.gender.setValue('qwerty');
  //   spyOn(testService, 'createUser').and.returnValue(of(''));
  //   spyOn(component, 'getUsers');
  //   spyOn(component, 'markFieldsAsTouched');
  //   component.onSubmit();
  //   expect(component.getUsers).toHaveBeenCalled();
  //   expect(component.personForm.valid).toBeTruthy();
  // });


  // it('should call onSubmit when error is thrown', () => {
  //   fixture.detectChanges();
  //   component.personForm.controls.id.setValue('sasd');
  //   component.personForm.controls.userName.setValue('sadasd@asd.com');
  //   component.personForm.controls.age.setValue('132456789');
  //   component.personForm.controls.gender.setValue('qwerty');
  //   spyOn(testService, 'createUser').and.returnValue(throwError('INTERNAL_SERVER_ERROR_500'));
  //   spyOn(component, 'getUsers');
  //   spyOn(component, 'markFieldsAsTouched');
  //   component.onSubmit();
  //   expect(component.error).toBe('INTERNAL_SERVER_ERROR_500');
  // });

  // it('form should be valid', () => {
  //   component.personForm.controls.id.setValue('sasd');
  //   component.personForm.controls.userName.setValue('sadasd@asd.com');
  //   component.personForm.controls.age.setValue('132456789');
  //   component.personForm.controls.gender.setValue('qwerty');
  //   expect(component.personForm.valid).toBeTruthy();
  // });

  // it('form should be invalid', () => {
  //   component.personForm.controls.id.setValue('');
  //   component.personForm.controls.userName.setValue('');
  //   component.personForm.controls.age.setValue('');
  //   component.personForm.controls.gender.setValue('');
  //   expect(component.personForm.valid).toBeFalsy();
  // });

  // it('should call markFieldsAsTouched when form is valid', () => {
  //   component.personForm.controls.id.setValue('userId');
  //   component.personForm.controls.userName.setValue('Saurabh');
  //   component.personForm.controls.age.setValue('26');
  //   component.personForm.controls.gender.setValue('Male');

  //   component.markFieldsAsTouched();
  //   expect(component.personForm.valid).toBeTruthy();
  // });

  // it('should call markFieldsAsTouched when form is invalid', () => {
  //   component.personForm.controls.id.setValue('');
  //   component.personForm.controls.userName.setValue('');
  //   component.personForm.controls.age.setValue('');
  //   component.personForm.controls.gender.setValue('');

  //   component.markFieldsAsTouched();
  //   expect(component.personForm.valid).toBeFalsy();
  // });

  // it('should call getUsers when executed successfully', () => {
  //   let user = [new User('userId1', 'Saurabh', '26', 'Male'), new User('userId2', 'Utkarsha', '26', 'Female')];

  //   spyOn(testService, 'getUsers').and.returnValue(of(user));
  //   component.getUsers();
  //   expect(component.users.length).toBe(2);
  //   expect(component.users[0].id).toBe('userId1');
  //   expect(component.users[0].userName).toBe('Saurabh');
  //   expect(component.users[0].age).toBe('26');
  //   expect(component.users[0].gender).toBe('Male');
  // });

  // it('should call getUsers when executed successfully', () => {
  //   spyOn(testService, 'getUsers').and.returnValue(throwError('INTERNAL_SERVER_ERROR_500'));
  //   component.getUsers();
  //   expect(component.users.length).toBe(0);
  //   expect(component.error).toBe('INTERNAL_SERVER_ERROR_500');

  // });
});
