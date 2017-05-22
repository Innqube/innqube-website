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

    doTranslation(key: string): string {
      keyVal: string;
      this.translate.get(key).subscribe(res);
      return keyVal;
    }

    currentQuoteIndex = 0;
    quotes = [
        {
            quote: this.doTranslation('QUOTE1'),
            author: this.doTranslation('QUOTE1AUTH')
        },
        {
            quote: this.doTranslation('QUOTE2'),
            author: this.doTranslation('QUOTE2AUTH')
        },
        {
            quote: this.doTranslation('QUOTE3'),
            author: this.doTranslation('QUOTE3AUTH')
        }
    ];
    currentQuote = this.quotes[0];
    timerSubscription: Subscription;

    constructor(private translate: TranslateService) {
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
