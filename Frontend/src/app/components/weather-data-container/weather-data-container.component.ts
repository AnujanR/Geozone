import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import SwiperCore, { Keyboard, Pagination, Navigation, Virtual ,Autoplay,EffectCoverflow} from 'swiper';
SwiperCore.use([Keyboard, Pagination, Navigation, Virtual,Autoplay,EffectCoverflow]);
@Component({
  selector: 'app-weather-data-container',
  templateUrl: './weather-data-container.component.html',
  styleUrls: ['./weather-data-container.component.css']
})
export class WeatherDataContainerComponent implements OnInit {

  goLangServerURL = 'http://localhost:1323/subData';
  humidity: any;
  temperature: any;
  pressure: any;
  windspeed:any;
  winddirection: any;
  sunrise: any;
  sunset: any;
  tempmin: any;
  tempmax: any;

  constructor(private httpClient: HttpClient){}
  ngOnInit(){  
    
    this.httpClient.get<getDatafromLocalServer>(this.goLangServerURL).subscribe(data =>{
      console.log(data);
      this.humidity = data.Humidity;
      this.temperature=data.Temperature;
      this.pressure = data.Pressure;
      this.windspeed= data.WindSpeed;
      this.winddirection= data.WindDirection;
      this.sunrise=data.Sunrise;
      this.sunset=data.Sunset;
      this.tempmin=data.TempMin;
      this.tempmax=data.TempMax;
    })


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
  TempMin:Float64Array;
  TempMax:Float64Array;


  
}

