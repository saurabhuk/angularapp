import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestServiceService } from './test-service.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../models/user.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


describe('TestServiceService', () => {
  let service: TestServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      // providers: [HttpClientTestingModule, TestServiceService, HttpTestingController]
    });
    service = TestBed.get(TestServiceService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getUsers method successfully', () => {
    const user: User[] = [{
      id: '1',
      userName: 'Saurabh',
      age: '26',
      gender: 'Male'
    }, {
      id: '1',
      userName: 'Utkarsha',
      age: '26',
      gender: 'Female'
    }];
    service.getUsers().subscribe(data => {
      expect(data.length).toBe(2);
      expect(data).toEqual(user);
    });
    const request = httpMock.expectOne(service.SERVER_URL + 'users');
    expect(request.request.method).toBe('GET');
    request.flush(user);
  });

  it('should call creatUser method successfully', () => {
    let personForm = new FormGroup({
      id: new FormControl(),
      userName: new FormControl(),
      age: new FormControl(),
      gender: new FormControl()
    });
    let formBuilderMock = jasmine.createSpyObj('FormBuilder', ['group']);
    formBuilderMock.group.and.returnValue(personForm);

    service.createUser(formBuilderMock).subscribe(data => {
    });
    const request = httpMock.expectOne(service.SERVER_URL + 'users', formBuilderMock.value);
    expect(request.request.method).toBe('POST');
  });
});
