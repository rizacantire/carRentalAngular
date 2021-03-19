import { Car } from "./car";

export interface CarDetail extends Car{
  colorName:string;
  brandName:string;
}
