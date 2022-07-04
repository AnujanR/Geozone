import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-five-day',
  templateUrl: './five-day.component.html',
  styleUrls: ['./five-day.component.css']
})
export class FiveDayComponent implements OnInit {

  goLangServerURL = 'http://localhost:1323/fiveData';
  humidity: any;
  temperature:any;
  icon: any;
  date: any;
  jsondata: any;
  constructor(private httpClient: HttpClient){}
  ngOnInit(){
   
    this.httpClient.get<getDatafromLocalServer>(this.goLangServerURL).subscribe(data =>{
      this.jsondata = data;
      
    
    })




  }
}

interface getDatafromLocalServer{
   
  Humidity:string;
	Temperature: Float64Array;
  Icon:string;
  Date:string;
  
}
