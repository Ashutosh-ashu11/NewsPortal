import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http:HttpClient) { }
topHeading():Observable<any>{
 let newsApiUrl ='https://newsapi.org/v2/top-headlines?country=in&apiKey=d2609f359f0d45d7945e8afd6d779abf';

  return this._http.get(newsApiUrl);
}
techNews():Observable<any>{
  let techApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=d2609f359f0d45d7945e8afd6d779abf';
  return this._http.get(techApiUrl);
}
businessNews():Observable<any> {
  let businessApiUrl ='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d2609f359f0d45d7945e8afd6d779abf'; 
  return this._http.get(businessApiUrl);
}
getEveryThing():Observable<any>{
  let everythingApiUrl='https://newsapi.org/v2/everything?q=tesla&from=2021-12-06&sortBy=publishedAt&apiKey=d2609f359f0d45d7945e8afd6d779abf';

  return this._http.get(everythingApiUrl);
}
}
