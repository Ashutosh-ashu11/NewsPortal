import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-get-everything',
  templateUrl: './get-everything.component.html',
  styleUrls: ['./get-everything.component.css']
})
export class GetEverythingComponent implements OnInit {
  geteverything:any=[];
  constructor(private _NewsapiService:NewsapiService) { }

  ngOnInit(): void {
    this._NewsapiService.getEveryThing().subscribe(value=>{
      this.geteverything = value.articles;
    })
 
  }

}
