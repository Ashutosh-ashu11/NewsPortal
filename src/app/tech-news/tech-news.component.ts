import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {
  topheadingDisplay:any =[];
  constructor(private _NewsapiService:NewsapiService) { }
  
  ngOnInit(): void {
    this._NewsapiService.techNews().subscribe(value=>{
    this.topheadingDisplay = value.articles;
    })
  }

}
