import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
  firstname = '';
  lastname = '';
  username = '';
  password = '';
  email = '';
  address = '';
  result: any;
  createUserUrl = `http://ec2-54-210-42-186.compute-1.amazonaws.com:8080/Pipeline/user/create`;
  User = {}
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
      user_id: -1,
      username: this.username,
      pswd: this.password,
      fname: this.firstname,
      lname: this.lastname,
      email: this.email,
      Address: {adr_id: 0,
                city: '',
                state: '',
                str_adr: this.address,
                zip: 12345
              },
      perm: 0
    }

    console.log(this.User);
    
    this.submitUserService().subscribe(result => {
      this.result = result;
      
      console.log(this.result);
    })

  }
  submitUserService() {
    return this.http.post<any[]>(this.createUserUrl, this.User, this.httpOptions).pipe(map(data => data))
  }
}
