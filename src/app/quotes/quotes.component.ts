import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.component.html',
    styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

    currentQuoteIndex = 0;
    private quotes = [
        {
            quote: 'La clave para ganar la carrera no es competir contra las máquinas, sino competir con máquinas.',
            author: 'Andrew McAfee'
        },
        {
            quote: 'Hay un uber para cada industria, cada producto y cada servicio. Viene una revolución de innovación…',
            author: 'Mike Beedle'
        },
        {
            quote: 'No tener problemas es el problema más grande.',
            author: 'Taiichi Ohno'
        }
    ];
    currentQuote = this.quotes[0];

    constructor() {
    }

    ngOnInit() {
    }

    next() {
        if (this.currentQuoteIndex === 2) {
            this.currentQuoteIndex = 0;
        } else {
            this.currentQuoteIndex++;
        }
        this.currentQuote = this.quotes[this.currentQuoteIndex];
    }

    previous() {
        if (this.currentQuoteIndex === 0) {
            this.currentQuoteIndex = 2;
        } else {
            this.currentQuoteIndex--;
        }
        this.currentQuote = this.quotes[this.currentQuoteIndex];
    }

}
