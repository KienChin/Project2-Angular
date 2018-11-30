import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'
//import { HelperServiceService } from 'src/app/Services/helper-service.service';

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
  loggedIn = false;


  
  constructor(private http: HttpClient){}//, private helpMe: HelperServiceService) { }

  ngOnInit() {
    
  }

  loginUser(){
    // this.UserCred = {
    //   username: this.username,
    //   password: this.password
    // }

    console.log(this.username);
    console.log(this.password);
    
    //this.loginUrl = `http://ec2-54-210-42-186.compute-1.amazonaws.com:8080/Pipeline/user/login`

    // Stephen's local, non-git URL
    this.loginUrl = `http://localhost:8080/Proj2Vote/user/login`;
    this.loginUserService().subscribe(result => {
      this.result = result;
      //this.helpMe.makeSession(result);
      console.log(this.result);
      this.loggedIn = true;
    })

  }
  loginUserService() {
    
    let User = {
      user_id: -1,
      username: this.username,
      pswd: this.password,
      fname: '',
      lname: '',
      email: '',
      Address: {adr_id: 0,
                city: '',
                state_name: '',
                str_adr: '',
                zip: 12345
              },
      perm: 0
    }
    console.log(JSON.stringify(User));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<any[]>(this.loginUrl, JSON.stringify(User), httpOptions).pipe(map(data => data));
  }  
  
}
