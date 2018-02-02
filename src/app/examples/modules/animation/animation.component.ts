import { Component, OnInit } from '@angular/core';
import { something } from './model';

@Component({
    selector: 'app-animation',
    templateUrl: './animation.component.html',
    styleUrls: ['./animation.css'],
	animations: [something],
	host: { '[@fadeInAnimation]': '' }
	
})
export class AnimationComponent implements OnInit{
	constructor(){
					
	}
	items: any;
	ngOnInit(){
		this.items = [{
			  name: 'Blup',
			  description: 'Nemo says blup'
		  },{
			  name: 'FooBar',
			  description: 'foobar is awesome'
		  }];
	}
	
}
