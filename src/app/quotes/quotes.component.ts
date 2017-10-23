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
        this.timerSubscription = Observable.timer(0, 10000).subscribe(() => this.switchToNext());
        this.translate.onLangChange.subscribe(() => this.loadQuotes());
        this.loadQuotes();
    }

    loadQuotes() {
        this.translate
            .get(['TRIVERO_MSG', 'ABAROA_MSG', 'CONICET_MSG'])
            .subscribe(translated => {
                this.quotes = [
                    {
                        quote: translated['TRIVERO_MSG'],
                        imagen: '../../assets/images/customers/tecnica_rivero.png',
                        author: 'Agustín Rivero',
                        authorImg: 'https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-1/p160x160/15941326_10154984053694759_3650510600741576606_n.jpg?oh=170124ad15cbbebdd6ab5cd5e446d3bf&oe=5A141ED1',
                        role: 'Dueño'
                    },
                    {
                        quote: translated['ABAROA_MSG'],
                        imagen: '../../assets/images/customers/abaroa.png',
                        author: 'Gonzalo Abaroa',
                        authorImg: 'https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-1/p160x160/19756472_10212568546664957_2303231259769670395_n.jpg?oh=e0716369b905af263335f5777d47840b&oe=5A581BE5',
                        role: 'Gerente comercial'
                    },
                    {
                        quote: translated['CONICET_MSG'],
                        imagen: '../../assets/images/testimonios/diego_libkind.jpg',
                        author: 'Diego Libkind',
                        authorImg: '../../assets/images/testimonios/diego_libkind.jpg',
                        role: 'IPATEC'
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
