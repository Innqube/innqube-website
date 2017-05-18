import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-what',
    templateUrl: './what.component.html',
    styleUrls: ['./what.component.css']
})
export class WhatComponent implements OnInit {

    options = {
        ratio: -.3,
        initValue: -800
    };

    constructor() {
    }

    ngOnInit() {
    }

}
