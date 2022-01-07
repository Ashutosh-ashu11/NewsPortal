import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {
 
  topheadingDisplay:any =[];
  constructor(private _NewsapiService:NewsapiService) { }
  
  ngOnInit(): void {
    this._NewsapiService.topHeading()
    .subscribe(value=>{
      console.log(value);
      this.topheadingDisplay =value.articles;
    })
  }

}
