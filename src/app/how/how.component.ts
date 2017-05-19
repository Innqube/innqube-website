import {Component, ElementRef, OnInit} from '@angular/core';
import {ScrollSpyParallaxOptions} from 'ngx-scrollspy/dist/plugin/parallax.directive';

@Component({
    selector: 'app-how',
    templateUrl: './how.component.html',
    styleUrls: ['./how.component.css']
})
export class HowComponent implements OnInit {

    options: ScrollSpyParallaxOptions = {
        ratio: -.4
    };

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.options.initValue = this.elementRef.nativeElement.offsetTop * 2;
    }
}
