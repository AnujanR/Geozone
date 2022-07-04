import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WeatherDataContainerComponent } from './components/weather-data-container/weather-data-container.component';
import { WeatherDataFlexComponent } from './components/weather-data-flex/weather-data-flex.component';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);
// http client for get data from golang json file
import {HttpClientModule} from '@angular/common/http';
import { MainContextComponent } from './components/main-context/main-context.component';
import { FiveDayComponent } from './components/five-day/five-day.component';
import { Next5SingleComponent } from './components/next5-single/next5-single.component';
import { MapComponent } from './components/map/map.component';
import { SearchComponent } from './components/search/search.component';
import { NewsComponent } from './components/news/news.component';
import { NewsSingleComponent } from './components/news-single/news-single.component';
import { FormsModule } from '@angular/forms';
import {NgsRevealModule} from 'ngx-scrollreveal';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeatherDataContainerComponent,
    WeatherDataFlexComponent,
    MainContextComponent,
    FiveDayComponent,
    Next5SingleComponent,
    MapComponent,
    SearchComponent,
    NewsComponent,
    NewsSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    FormsModule,
    NgsRevealModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
