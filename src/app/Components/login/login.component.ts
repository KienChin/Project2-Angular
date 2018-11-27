import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'username';
  password = 'password';
  result: any;
  loginUrl = '';
  // UserCred = {
  //   username: '',
  //   password: ''
  // }

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json'
  //   })
  // };

  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }

  loginUser(){
    // this.UserCred = {
    //   username: this.username,
    //   password: this.password
    // }

    console.log(this.username);
    console.log(this.password);
    
    this.loginUrl = `http://ec2-54-172-11-155.compute-1.amazonaws.com:8082/login?username=${this.username}&password=${this.password}`

    this.loginUserService().subscribe(result => {
      this.result = result;
      console.log(this.result);
    })

  }
  loginUserService() {
    //let body = `username=${this.username}&password=${this.password}`;
    return this.http.get<any[]>(this.loginUrl).pipe(map(data => data));
  }  
  
  // loginUserService() {
  //   // let body = `username=${this.username}&password=${this.password}`;
  //   // let headers = new Headers();
  //   // headers.append('Content-Type', 'application/x-www-form-urlencoded');
  //   let params = new URLSearchParams();
  //   params.append('username', this.username); 
  //   params.append('password', this.password);
  //   return this.http.post(this.loginUrl, params).subscribe(
  //     data => {
  //       alert('ok');
  //     },
  //     error => {
  //       console.log(JSON.stringify(error.json()));
  //     }
  //   )
  // }
}
