import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.css']
})
export class TabsComponent implements OnInit{
	constructor(){
					
	}
	tab: string;
	tabCount: number = 0;
	tabs: number[] = [];
	tabStrings: string[] = [];
	ngOnInit(){
		
		
	}
	addTab(){
		this.tabs.push(( this.tabCount+1));
		this.tabCount++;
		this.tabStrings.push('string'+this.tabCount);
	}
	
	selectTab(type:string){
		this.tab = type;
		console.log(type);
	}
}
