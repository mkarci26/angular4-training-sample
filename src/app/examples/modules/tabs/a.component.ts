import { Component, OnInit , Input} from '@angular/core';

@Component({
    selector: 'app-a',
    template: '<div>{{type | json}}</div>'
})
export class AComponent implements OnInit{
	@Input('type') type: string;
	
	ngOnInit(){
		
		
	}
	
	
}
