import {Component, OnInit} from '@angular/core';
import {ScrollSpyParallaxOptions} from 'ngx-scrollspy/dist/plugin/parallax.directive';

@Component({
    selector: 'app-what',
    templateUrl: './what.component.html',
    styleUrls: ['./what.component.css']
})
export class WhatComponent implements OnInit {

    options: ScrollSpyParallaxOptions = {
        ratio: -.4
    };

    constructor() {
    }

    ngOnInit() {
    }

}
