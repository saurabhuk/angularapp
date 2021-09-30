
export class User {
  id: string;
  userName: string;
  age: string;
  gender: string;



  constructor(_id: string, _userName: string, _age: string, _gender: string) {
    this.id = _id;
    this.userName = _userName;
    this.age = _age;
    this.gender = _gender;
  }
}