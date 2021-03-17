import { Component, OnInit } from '@angular/core';
import { CarImage } from 'src/app/models/carimage';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css']
})
export class CarimageComponent implements OnInit {

  carImages : CarImage[] = [];

  constructor(private carImageService:CarimageService) { }

  ngOnInit(): void {
    this.getCarsImage();
  }
  getCarsImage(){
    this.carImageService.getCarImages().subscribe(response=>{
      this.carImages = response.data
    })
  }

}
