import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PaydetailComponent } from './components/paydetail/paydetail.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';



const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cardetail/:carId", component:CardetailComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"customer" , component:CustomerComponent},
  {path:"rental", component:RentalComponent},
  {path:"payment", component:PaymentComponent},
  {path:"payment/:id", component:PaymentComponent},
  {path:"paydetail" ,component:PaydetailComponent},
  {path:"paydetail/:carId" ,component:PaydetailComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
