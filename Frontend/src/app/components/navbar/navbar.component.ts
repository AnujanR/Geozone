import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchcontrol:Boolean=true;
  @Output() 
  searcher: EventEmitter<any> = new EventEmitter<any>();
 
  constructor() { }

  ngOnInit(): void {
  }
  showSearch(){
    this.searchcontrol=!this.searchcontrol
    this.searcher.emit(this.searchcontrol)
  }
 
  

}
