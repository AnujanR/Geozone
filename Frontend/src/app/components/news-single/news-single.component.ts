import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.component.html',
  styleUrls: ['./news-single.component.css']
})
export class NewsSingleComponent implements OnInit {

  @Input()titlens : string="";
  @Input()description : string="";
  @Input()link : string="";
  @Input()source : string="";
  @Input()date : string="";
  @Input()image : string="";
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.image);
    if (this.image==""){
      this.image ="../../../assets/altnews.jpg";
    }
    else{

    }
  }

}
