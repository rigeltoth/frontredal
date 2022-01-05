import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  photos: Photo[] = []
  constructor(public photoService: PhotoService) { }

  ngOnInit(): void {
    this.getPhotos()
  }

  getPhotos(){
    this.photoService.getPhotos().subscribe(
      res => {this.photos = res},
      err => console.error(err)
    )
  }
}
