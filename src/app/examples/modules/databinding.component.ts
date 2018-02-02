import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-databinding',
    templateUrl: './databinding.component.html'
})
export class DatabindingComponent implements OnInit{
	name: string;
	ngOnInit(){
		this.name = "model value";
	}
}
