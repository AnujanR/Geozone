import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-context',
  templateUrl: './main-context.component.html',
  styleUrls: ['./main-context.component.css']
})
export class MainContextComponent implements OnInit {
  goLangServerURL = 'http://localhost:1323/mainData';
  cityname: any;
  countryname: any;
  description: any;
  temperature:any;
  tempmin: any;
  tempmax: any;
  icon: any; 
  img: any;
  lon: any;
  lat: any;
   
  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.httpClient.get<getDatafromLocalServer>(this.goLangServerURL).subscribe(data =>{
     
      this.cityname = data.CityName;
      this.countryname = data.Country;
      this.description = data.Description;
      this.temperature=data.Temperature;
      this.tempmin=data.TempMin;
      this.tempmax=data.TempMax;
      this.icon=data.Icon;
      this.lon=data.Longtitude;
      this.lat=data.Latitude;

    if(this.icon=="01d") 
    {
       this.img="../../../assets/01d.svg"
    }
    else if(this.icon=="01n") 
    {
       this.img="../../../assets/01n.svg"
    }
    else if(this.icon=="02d") 
    {
       this.img="../../../assets/02d.svg"
    }
    else if(this.icon=="02n") 
    {
       this.img="../../../assets/02n.svg"
    }
    else if (this.icon=="03d"||this.icon=="03n") 
    {
       this.img="../../../assets/03d.svg"
    }
    else if (this.icon=="04d"||this.icon=="04n") 
    {
       this.img="../../../assets/04d.svg"
    }
    else if (this.icon=="09d"||this.icon=="09n" || this.icon=="10d"||this.icon=="10n" ||this.icon=="11d"||this.icon=="11n") 
    {
       this.img="../../../assets/09d.svg"
    }
    else if (this.icon=="13d"||this.icon=="13n") 
    {
       this.img="../../../assets/13d.svg"
    }
    else if (this.icon=="50d"||this.icon=="50n") 
    {
       this.img="../../../assets/50d.svg"
    }
    else
    {
       this.img="../../../assets/01d.svg"
    }
    })





  }
}

interface getDatafromLocalServer{
  CityName:string;
  Country:string;
	Temperature: Float64Array;
  Description:string;
  TempMin:Float64Array;
  TempMax:Float64Array;
  Icon:string;
  Longtitude:Float64Array;
  Latitude:Float64Array;

  
}
