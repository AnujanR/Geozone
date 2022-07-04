import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-next5-single',
  templateUrl: './next5-single.component.html',
  styleUrls: ['./next5-single.component.css']
})
export class Next5SingleComponent implements OnInit {
  @Input() day: string="";
  @Input() date: string="";
  @Input() temperature: string="";
  @Input() humidity: string="";
  @Input() icon: string=""; 
  month: string="";
  dayno: Number=0;
  img: string="";

  constructor() { }

  ngOnInit(): void {
    
    //format date
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var datee=new Date(this.day)
    this.day = days[datee.getDay()];
    this.month=monthNames[datee.getMonth()];
    this.dayno=datee.getDate();
    //icons 
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
  }

}
