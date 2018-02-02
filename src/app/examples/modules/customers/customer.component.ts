import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit{
	data : any = [];
	promisedata: any;
	constructor(private _service: CustomerService){
					
	}
	
	ngOnInit(){
		
		this._service.getData().subscribe(x=>{
			this.data.push(x);
			console.log(this.data);
		} );;
		
		console.log(this.data);
	}
	
	promise(){
		this._service.getPromise().then(x=>{
			this.promisedata = x;
			
		} );;
	}
}
