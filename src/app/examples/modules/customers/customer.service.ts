import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import 'rxjs';


@Injectable()
export class CustomerService {
	
    constructor() {

    }
	
	getData(){
		return  new Observable(observer => {
         
		 for(let i= 0; i <25;i++){
			  setTimeout(() => {
				  observer.next({id:'a'+i, 'name': 'something'+i});
			  }, (1000*i));
		  }

          setTimeout(() => {
              observer.complete();
          }, 10000);
      });
	  
	}
	
	
	getPromise(){
        
		return new Promise((resolve, reject) => {
			resolve(20);
		  });
	  
	}
}
