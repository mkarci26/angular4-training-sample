import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive',
    template: '<ul><li *ngFor="let name of names">{{name}}</li></ul>'
})
export class DirectiveComponent implements OnInit{
	names: Array<any>;
	ngOnInit(){
		this.names = ['a', 'b', 'c', 1, 5, 6];
	}
}
