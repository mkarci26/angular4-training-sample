import { Component, OnInit , Input} from '@angular/core';

@Component({
    selector: 'app-child',
    template: '<div *ngIf="title">Child Component {{title}}</div>'
})
export class ChildComponent implements OnInit{
	@Input('type') title: string;
	
	ngOnInit(){
		
		
	}
	
	
}
