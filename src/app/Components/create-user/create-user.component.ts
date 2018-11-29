import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  username = '';
  password = '';
  email = '';
  address = '';
  result: any;
  createUserUrl = '';
  User = {
    username: '',
    password: '',
    email: '',
    address: ''
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }

  submitUser(){
    this.User = {
      username: this.username,
      password: this.password,
      email: this.email,
      address: this.address
    }

    console.log(this.User.username);
    console.log(this.User.password);
    console.log(this.User.email);
    console.log(this.User.address);
    
    this.submitUserService().subscribe(result => {
      this.result = result;
      console.log(this.result);
    })

  }
  submitUserService() {
    return this.http.post<any[]>(this.createUserUrl, this.User, this.httpOptions)
    .pipe(map(data => data))
  }
}
