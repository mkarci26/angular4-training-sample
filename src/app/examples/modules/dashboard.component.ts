import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit{
	x: number =2;
	y: string = "Something";
	z: string = '<h1 class="dfdffe">headingTitle</h1>';
	ngOnInit(){
		this.x;
		this.y;
	}
}
