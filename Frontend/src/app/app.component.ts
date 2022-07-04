import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'WeatherApp';
  goLangServerURL = 'http://localhost:1323';
  humidity: any;
search:any;
   
  constructor(private httpClient: HttpClient, ){}
  
  searchParent (valuemitted: any){
    this.search=valuemitted;
    console.log(this.search)
  }
  ngOnInit(){
    this.httpClient.get<getDatafromLocalServer>(this.goLangServerURL).subscribe(data =>{
      console.log(data);
      this.humidity = data.Humidity;
      
    })
    AOS.init();
  }

  
}

interface getDatafromLocalServer{
  Humidity:    number;
	Temperature: Float64Array;
	Pressure   : number;
  WindSpeed: Float64Array;
	WindDirection: number ;
	Sunrise: number;
	Sunset: number;
}