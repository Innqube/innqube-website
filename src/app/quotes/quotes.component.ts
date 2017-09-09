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
            .get(['TRIVERO_MSG', 'ABAROA_MSG'])
            .subscribe(translated => {
                this.quotes = [
                    {
                        quote: translated['TRIVERO_MSG'],
                        imagen: '../../assets/images/customers/tecnica_rivero.png'
                    },
                    {
                        quote: translated['ABAROA_MSG'],
                        imagen: '../../assets/images/customers/abaroa.png'
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
