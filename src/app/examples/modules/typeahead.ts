import { Component, OnInit } from '@angular/core';
import { CrudService } from './shared/_services/crud.service';

import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';

@Component({
    selector: 'app-typeahead',
    templateUrl: './typeahead.html'
})
export class TypeAheadComponent implements OnInit{
	name: string;
	ngOnInit(){
		
	}
	constructor(private _crud: CrudService) {

    }
	
	search: any;
	searchAPI($e){
		console.log($e);
		this.search = (text$: Observable<string>) =>
			text$
			.debounceTime(300)
			.distinctUntilChanged()
			.do(() => this.searching = true)
			.switchMap(term =>
				this._service.searchEndCustomer(term)
					.do(() => this.searchFailed = false)
					.catch(() => { this.searchFailed = true;  return of([]); })
				)
				.do((x) => this.searching = false)
	}
}
