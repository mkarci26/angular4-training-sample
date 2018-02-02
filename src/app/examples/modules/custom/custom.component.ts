import { Component, OnInit } from '@angular/core';
import { something } from '../animation/model';

@Component({
    selector: 'app-custom',
    templateUrl: './custom.component.html',
	animations: [something],
	host: { '[@fadeInAnimation]': '' }
})
export class CustomComponent implements OnInit{
	mystring:string = "Angular2/4/5 Training";
	constructor(){}
	ngOnInit(){}
}
