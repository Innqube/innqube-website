import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
    selector: 'app-how',
    templateUrl: './how.component.html',
    styleUrls: ['./how.component.css']
})
export class HowComponent implements OnInit {

    options = {
        ratio: -.4,
        initValue: -500
    };

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.options.initValue = this.elementRef.nativeElement.offsetTop;
    }
}
