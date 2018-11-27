import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-election-info',
  templateUrl: './election-info.component.html',
  styleUrls: ['./election-info.component.css']
})
export class ElectionInfoComponent implements OnInit {
  title = 'app';
  restItems: any;
  apiKey = 'key=AIzaSyDiJXpugiOVdpurOMtACPLWUxjn6JWSRn8'
  restItemsUrl = '';
  address: string = '19518 6th Dr SE Bothell WA';
  urlAddress: string = '';
  outputArray = [];
  displayData = false;

  

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }

  getAddress() {
    
    //convert the address into a url compatable format
    var re = / /gi;
    var str = this.address;
    this.urlAddress = str.replace(re, "%20");

    //build the url
    this.restItemsUrl = `https://www.googleapis.com/civicinfo/v2/elections?address=${this.address}
    &includeOffices=true&levels=country&${this.apiKey}`;
    
    // log results
    console.log(this.address);
    console.log(this.urlAddress);
    console.log(this.restItemsUrl);
    
    //call the service
    this.getRestItems();

    //display the table
    this.displayData = true;
    
  }
  
  // should be moved to a service
  getRestItems(): void {
    this.restItemsServiceGetRestItems().subscribe(restItems => {
      this.restItems = restItems;
      for(let i = 0; i < this.restItems.offices.length; i++){
        this.outputArray[i] = {
          name: this.restItems.offices[i].name,
          person: this.restItems.officials[i].name,
          party: this.restItems.officials[i].party,
          photo: this.restItems.officials[i].photoUrl,
          url: this.restItems.officials[i].urls[0],
        };
      }
      console.log(this.restItems);
      console.log(this.outputArray);
    })
  }

  restItemsServiceGetRestItems() {
    return this.http.get<any[]>(this.restItemsUrl).pipe(map(data => data));
  }
}
