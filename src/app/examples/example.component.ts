import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
	encapsulation: ViewEncapsulation.None,
})
export class exComponent implements OnInit{
	title:string;
	ngOnInit(){
		this.title = "Training";
	}
}
