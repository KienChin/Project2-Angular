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

  reset() {
    this.outputArray = [];
    this.displayData = false;
    this.restItems = null;
  }

  getElection() {
    
    //convert the address into a url compatable format
    this.reset();
    var re = / /gi;
    var str = this.address;
    this.urlAddress = str.replace(re, "%20");

    // this.restItemsUrl = `https://www.googleapis.com/civicinfo/v2/elections?electionid=2000&address=${this.address}
    // &includeOffices=true&levels=country&${this.apiKey}`;
    this.restItemsUrl = `https://www.googleapis.com/civicinfo/v2/elections?${this.apiKey}&address=${this.urlAddress}`;
    //this.restItemsUrl = `https://www.googleapis.com/civicinfo/v2/voterinfo?${this.apiKey}&address=${this.urlAddress}&electionId=2000`
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
      
      console.log(this.restItems);
    })
  }

  restItemsServiceGetRestItems() {
    return this.http.get<any[]>(this.restItemsUrl).pipe(map(data => data));
  }
}
