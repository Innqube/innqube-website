import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
    selector: 'app-what',
    templateUrl: './what.component.html',
    styleUrls: ['./what.component.css']
})
export class WhatComponent implements OnInit {

    options = {
        ratio: -.4,
        initValue: -350
    };

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.options.initValue = this.elementRef.nativeElement.offsetTop;
    }

}
