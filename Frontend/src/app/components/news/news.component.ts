import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  goLangServerURL = 'http://localhost:1323/newsData';
  title: any;
  link:any;
  descript: any;
  pubdt: any;
  imgurl: any;
  source: any;
  jsondata: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void { 
       
    this.httpClient.get<getDatafromLocalServer>(this.goLangServerURL).subscribe(data =>{
      this.jsondata = data;
  })
}

}
interface getDatafromLocalServer{
   
  Title:string;
	Link: Float64Array;
  Description:string;
  PubDate:string;
  ImageURL:string;
  SourceID: string;
  
}
