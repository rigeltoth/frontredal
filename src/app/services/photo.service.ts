import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  
  url_api ='https://jsonplaceholder.typicode.com/photos'
  constructor(private http: HttpClient) { }

  getPhotos(){
    return this.http.get<Photo[]>(this.url_api)
  }
}
