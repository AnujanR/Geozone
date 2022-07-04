import { Component, OnInit ,Input} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() resultSearch:any;

  constructor(private http:HttpClient) {

   } 
   cls="0";
   ngOnChanges() {
    if (this.resultSearch==true) {
      this.cls='-100%';
    }
    else {
      this.cls='0%';
    }
   }
   
close() {
  this.cls='-100%';
  }
  
  ngOnInit(): void {

  }
    posty:any;
  onSubmit(data: any){
    this.cls='-100%';
    this.http.post<any>('http://localhost:1323/searchData',data)
    .subscribe((result)=>{
      console.log("Successs");
      this.posty=data.result;
    })
    console.warn(data)
  }
  

}
