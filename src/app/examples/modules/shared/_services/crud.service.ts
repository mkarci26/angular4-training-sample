import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Rx'
//import { environment } from '../../../../environments/environment';

@Injectable()
export class CrudService {

    baseUrl: string = 'http://localhost:4200/assets/';
    cachedData: any;

    constructor(private http: Http) {
       // this.baseUrl = environment.apiUrl;
    }

    getConfig() {
        if (this.cachedData) {
            return Observable.of(this.cachedData);
        } else {
            return this.http.get("/assets/feed-config.json")
                .map(res => res.json())
                .do((data) => {
                    this.cachedData = data;
                });
        }
    }

    fetchAllRows(table: string) {
        let url = this.baseUrl + '' + table;
        return this.http.get(url).map(res => res.json());
    }

    fetchRow(table: string, id: string) {
        let url = this.baseUrl + 'one_prod.json';
        return this.http.get(url).map(res => res.json());
    }

    insertFeed(table: string, data: any) {
        let url = this.baseUrl ;
        let body = JSON.stringify(data);
console.log('insert logic goes here');
		return Observable.of(null);
    }

    editFeed(table: string, data: any, id: string) {
        let url = this.baseUrl ;
        let body = JSON.stringify(data);

       console.log('Update logic goes here');
	   return Observable.of(null);
    }

    deleteFeed(table: string, id: string) {
        console.log('Delete logic goes here');
		return Observable.of(null);
    }
	
    multipleAjax(arr: any) {
        let batches = [];
        for (let i in arr) {
            batches.push(this.http.get(this.baseUrl + '' + arr[i]).map((res: Response) => res.json()));
        }
        return Observable.forkJoin(batches);
    }
	
}
