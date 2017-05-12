import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.component.html',
    styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

    currentQuote = 0;

    constructor() {
    }

    ngOnInit() {
    }

    next() {
        if (this.currentQuote === 2) {
            this.currentQuote = 0;
        } else {
            this.currentQuote++;
        }
    }

    previous() {
        if (this.currentQuote === 0) {
            this.currentQuote = 2;
        } else {
            this.currentQuote--;
        }
    }

}
