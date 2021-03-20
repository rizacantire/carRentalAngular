import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute, private router:Router,private customerService:CustomerService,private rentalService:RentalService,private toastr: ToastrService) { }
  currentBrand : Rental | null;
  rentals:Rental[] = [];
  customers:Customer[];
  customerId:Number;
  rentDate:Date;
  returnDate:Date;
  brandName: string;
  firstName: string;
  lastName: string;
  @Input() car:Car;
  ngOnInit(): void {
    this.getCars();
  }

  getCustomer(){
    this.customerService.getCustomer().subscribe(response => {
      this.customers = response.data;
      //this.dataLoaded = true;
    })
  }
  setCurrentBrand(rental:Rental){
    this.currentBrand = rental;
  }
  getRentMinDate(){
    var today  = new Date();
    //min="1980-01-01"
    today.setDate(today.getDate() + 1);
    return today.toISOString().slice(0,10)
  }
  getReturnMinDate(){
    var today  = new Date();
    today.setDate(today.getDate() + 2);
    return today.toISOString().slice(0,10)
  }
  createRental(){
    let MyRental:Rental = {
      rentDate: this.rentDate,
      returnDate: this.returnDate,
      carId: this.car.carId,
      brandName: this.brandName,
      firstName: this.firstName,
      lastName: this.lastName,
      customerId: parseInt(this.customerId.toString())
    }
    this.router.navigate(['/payment/', JSON.stringify(MyRental)]);
    this.toastr.info("Ödeme sayfasına yönlendiriliyorsunuz...", "Ödeme İşlemleri");
    /*
    this.rentalService.rentalCar(MyRental).subscribe(response => {
      this.toastr.success(response.message.toString(), "Harika...");
    })
    */
  }
  getCars(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals = response.data

    })
   }

}
