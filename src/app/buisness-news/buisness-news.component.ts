import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-buisness-news',
  templateUrl: './buisness-news.component.html',
  styleUrls: ['./buisness-news.component.css']
})
export class BuisnessNewsComponent implements OnInit {
  buisnessNews:any =[];
  constructor(private _NewsapiService:NewsapiService) { }

  ngOnInit(): void {

    this._NewsapiService.businessNews().subscribe(value=>{
     this.buisnessNews= value.articles;
    })
  }

}
