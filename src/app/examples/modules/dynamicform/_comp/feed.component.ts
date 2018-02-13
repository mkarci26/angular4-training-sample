import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CrudService } from './../../shared/_services/crud.service';

@Component({
    selector: 'app-settings-feed',
    templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {
    ftype: string;
    rows: any;
    fConfig: any;
    feedTable: any;

    constructor(private route: ActivatedRoute, private router: Router, private _crud: CrudService) {

    }
    ngOnInit() {
        //this._crud.test();
        this.route.params.subscribe(params => {
            this.ftype = params['type'];
			if(!this.ftype) this.ftype = 'product';
            if (this.ftype) {

                this._crud.getConfig().subscribe(
                    _response => {
                        let config = _response;
                        for (let i in config) {
                            for (let k in config[i]) {
                                if (k == this.ftype) {
                                    this.fConfig = config[i][k];
                                    this.populateTable();
                                }
                            }
                        }

                    });

            }
        });
    }
    populateTable() {
        if (this.fConfig.references) {
            this.buildReferences();
        }
        else
            this._crud.fetchAllRows(this.fConfig.table).subscribe(
                _rows => {
                    this.rows = _rows;
                });
    }

    buildReferences() {
        let ajaxArr = [this.fConfig.table];
        let matches = [], options = [], source = [];
        let config = this.fConfig;
        let ref = config.references;

        this.fConfig.references.forEach(item => {
            for (let i in item) {
                source.push(i);
                ajaxArr.push(item[i].table);
                matches.push({ "key": item[i].key, "value": item[i].value });
            }
        });

        this._crud.multipleAjax(ajaxArr).subscribe(_res => {
            this.rows = _res.shift();
            for (let i in ref) {
                options.push(i);
                options[i] = [];
                _res[i].forEach(x => {
                    options[i].push({ "key": x[matches[i].key], "value": x[matches[i].value] });
                });

            }

            for (let i in config.fields) {
                source.forEach((item, key) => {
                    if (item == config.fields[i].key) {
                        config.fields[i].options = options[key];
                    }
                });
            }




        });
    }

    addFeed() {
        this.router.navigateByUrl('/settings/' + this.ftype + '/edit/new');
    }

    editFeed(id: string) {
        this.router.navigateByUrl('/dynamicform/' + this.ftype + '/edit/' + id);
    }

    deleteFeed(id: string) {
        this._crud.deleteFeed(this.fConfig.table, id).subscribe(
            _response => {
                this.populateTable();
            });
    }
    ngOnDestroy() {
        this.rows = null;
    }
}
