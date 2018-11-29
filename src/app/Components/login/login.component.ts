import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
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
    
    //this.loginUrl = `http://ec2-54-210-42-186.compute-1.amazonaws.com:8080/Pipeline/users/login?username=${this.username}&password=${this.password}`

    // Stephen's local, non-git URL
    this.loginUrl = `http://localhost:8080/Proj2Vote/login`

    this.loginUserService().subscribe(result => {
      this.result = result;
      console.log(this.result);
    })

  }
  loginUserService() {
    //let body = `username=${this.username}&password=${this.password}`;
    //return this.http.get<any[]>(this.loginUrl).pipe(map(data => data));
    return this.http.post<any[]>(this.loginUrl, 
      this.username+" "+this.password).pipe(map(data => data));
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
