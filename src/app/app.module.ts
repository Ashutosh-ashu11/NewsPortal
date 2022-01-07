import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { HttpClientModule } from '@angular/common/http'
import { NewsapiService } from './service/newsapi.service';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BuisnessNewsComponent } from './buisness-news/buisness-news.component';
import { GetEverythingComponent } from './get-everything/get-everything.component';
@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechNewsComponent,
    BuisnessNewsComponent,
    GetEverythingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
