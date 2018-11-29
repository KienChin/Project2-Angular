import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-display-bookmarks',
  templateUrl: './display-bookmarks.component.html',
  styleUrls: ['./display-bookmarks.component.css']
})
export class DisplayBookmarksComponent implements OnInit {

  bookmarksUrl = '';
  dispBook = false;
  bookmarks: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  displayBookmarks(): void{
    this.backEndServiceGetRestItems().subscribe(bookmarks => {
      this.bookmarks = bookmarks;
      console.log(this.bookmarks);
    })
  }
  

  backEndServiceGetRestItems(){
    let User = {
      user_id: -1,
      username: '',
      pswd: '',
      fname: '',
      lname: '',
      email: '',
      Address: {adr_id: 0,
                city: '',
                state: '',
                str_adr: '',
                zip: 12345
              },
      perm: 0
    }
    return this.http.post<any[]>(this.bookmarksUrl, User).pipe(map(data => data));
  }
}
