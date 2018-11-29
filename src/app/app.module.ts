import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CivicInfoComponent } from './Components/civic-info/civic-info.component';
import { ElectionInfoComponent } from './Components/election-info/election-info.component';
import { LoginComponent } from './Components/login/login.component';
import { CreateUserComponent } from './Components/create-user/create-user.component';
import { BookmarkComponent } from './Components/bookmark/bookmark.component';
import { DisplayBookmarksComponent } from './Components/display-bookmarks/display-bookmarks.component';


@NgModule({
  declarations: [
    AppComponent,
    CivicInfoComponent,
    ElectionInfoComponent,
    LoginComponent,
    CreateUserComponent,
    BookmarkComponent,
    DisplayBookmarksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
