import {Component, OnInit} from '@angular/core';
import {ScrollSpyParallaxOptions} from 'ngx-scrollspy';

@Component({
    selector: 'app-how',
    templateUrl: './how.component.html',
    styleUrls: ['./how.component.css']
})
export class HowComponent implements OnInit {

    options: ScrollSpyParallaxOptions = {
        ratio: -.1
    };

    constructor() {
    }

    ngOnInit() {

    }
}
