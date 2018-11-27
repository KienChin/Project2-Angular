import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CivicInfoComponent } from './Components/civic-info/civic-info.component';
import { ElectionInfoComponent } from './Components/election-info/election-info.component';
import { LoginComponent } from './Components/login/login.component';
import { CreateUserComponent } from './Components/create-user/create-user.component';


@NgModule({
  declarations: [
    AppComponent,
    CivicInfoComponent,
    ElectionInfoComponent,
    LoginComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
