import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.component.html',
    styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

    currentQuoteIndex = 0;
    quotes = [
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
    timerSubscription: Subscription;

    constructor() {
    }

    ngOnInit() {
        this.timerSubscription = Observable.timer(0, 6000).subscribe(() => this.switchToNext());
    }

    next() {
        this.timerSubscription.unsubscribe();
        this.switchToNext();
    }

    private switchToNext() {
        if (this.currentQuoteIndex === this.quotes.length - 1) {
            this.currentQuoteIndex = 0;
        } else {
            this.currentQuoteIndex++;
        }
        this.currentQuote = this.quotes[this.currentQuoteIndex];
    }

    previous() {
        if (this.currentQuoteIndex === 0) {
            this.currentQuoteIndex = this.quotes.length - 1;
        } else {
            this.currentQuoteIndex--;
        }
        this.currentQuote = this.quotes[this.currentQuoteIndex];
    }

}
