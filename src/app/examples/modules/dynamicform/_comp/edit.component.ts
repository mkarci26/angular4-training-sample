import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CrudService } from './../../shared/_services/crud.service';

@Component({
    selector: 'app-settings-feed-edit',
    templateUrl: './edit.component.html',
})
export class FeedEditComponent implements OnInit {
    ftype: string;
    feedId: string;
    fConfig: any;

    title: string;
    feedData: any;
    feedModel: any = {};

    constructor(private route: ActivatedRoute, private router: Router, private _crud: CrudService) {


    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.ftype = params['type'];
            this.feedId = params['id'];
            if (this.ftype) {
                this.title = this.feedId ? "Edit " : "Add ";

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
        if (this.fConfig.references)
            this.buildReferences();
        else
            this.fetchRow();
    }

    fetchRow() {
        if (this.feedId)
            this._crud.fetchRow(this.fConfig.table, this.feedId).subscribe(
                _resp => {
                    this.feedData = _resp;
                    this.populateForm();
                });
        else this.populateForm();
    }



    populateForm() {
        var obj = {};
        this.fConfig.fields.forEach((item) => {

            (<any>obj)[item.key] = this.feedData ? this.feedData[item.key] : "";
        });
        this.feedModel = obj;
    }

    buildReferences() {
        let ajaxArr = [];
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

            this.fetchRow();
        });
    }

    back() {
        this.router.navigateByUrl('/dynamicform/' + this.ftype);
    }

    addOrEdit() {
        if (this.feedId) this.editFeed();
        else this.addFeed();
    }

    addFeed() {
        delete this.feedModel.id;
        this._crud.insertFeed(this.fConfig.table, this.feedModel).subscribe(
            _response => {
                this.router.navigateByUrl('/dynamicform/' + this.ftype);
            });
    }

    editFeed() {
        delete this.feedModel.id;
        this._crud.editFeed(this.fConfig.table, this.feedModel, this.feedId).subscribe(
            _response => {
                this.router.navigateByUrl('/dynamicform/' + this.ftype);
            });
    }
    ngOnDestroy() {
        this.feedData = null;
        this.feedModel = null;
        this.title = null;
    }
}
