import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import {Subscription} from 'rxjs/Subscription';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.component.html',
    styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

    currentQuoteIndex = 0;
    quotes = [];
    currentQuote = this.quotes[0];
    timerSubscription: Subscription;

    constructor(private translate: TranslateService) {
    }

    ngOnInit() {
        this.timerSubscription = Observable.timer(0, 6000).subscribe(() => this.switchToNext());
        this.translate.onLangChange.subscribe(() => this.loadQuotes());
        this.loadQuotes();
    }

    loadQuotes() {
        this.translate
            .get(['QUOTE1', 'QUOTE2', 'QUOTE3', 'QUOTE1AUTH', 'QUOTE2AUTH', 'QUOTE3AUTH'])
            .subscribe(translated => {
                this.quotes = [
                    {
                        quote: translated['QUOTE1'],
                        author: translated['QUOTE1AUTH']
                    },
                    {
                        quote: translated['QUOTE2'],
                        author: translated['QUOTE2AUTH']
                    },
                    {
                        quote: translated['QUOTE3'],
                        author: translated['QUOTE3AUTH']
                    }
                ];
                this.currentQuote = this.quotes[0];
            });
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
