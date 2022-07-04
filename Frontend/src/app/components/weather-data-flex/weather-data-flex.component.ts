import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-weather-data-flex',
  templateUrl: './weather-data-flex.component.html',
  styleUrls: ['./weather-data-flex.component.css']
})
export class WeatherDataFlexComponent implements OnInit {
  @Input() titleWeather: string="";
  @Input() dataValueWeather: string="";
  @Input() dataIconWeather: string="";
  constructor() { }

  ngOnInit(): void {
  }

}
