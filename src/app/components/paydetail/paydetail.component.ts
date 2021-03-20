import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PayDetail } from 'src/app/models/paydetail';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-paydetail',
  templateUrl: './paydetail.component.html',
  styleUrls: ['./paydetail.component.css']
})
export class PaydetailComponent implements OnInit {

  payDetails: PayDetail[] = [];
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,private paymentService:PaymentService,private router:Router,private toastr: ToastrService,) { }
  rental:Rental;
  amountOfPayment:number = 0;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailsById(params["carId"])
      }
    })

  }

  getCarDetailsById(carId:number){
    this.carService.getCarDetailsById(carId).subscribe(response=>{
      this.payDetails = response.data;
    })
  }

  pay(){
    this.paymentService.pay(this.rental,this.amountOfPayment).subscribe(response => {
      this.router.navigate(['/cars']);
      this.toastr.success(response.message.toString(), "İşlem Başarılı");
    })
  }

}
