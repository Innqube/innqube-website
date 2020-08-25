import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuotesComponent} from './quotes.component';
import {QuoteComponent} from '../quote/quote.component';
import {TranslateModule} from '@ngx-translate/core';
import {CustomersComponent} from '../customers/customers.component';
import {ModalModule} from 'ngx-bootstrap/modal';

describe('QuotesComponent', () => {
    let component: QuotesComponent;
    let fixture: ComponentFixture<QuotesComponent>;
    const quotes = [
        {quote: '1', author: ''},
        {quote: '2', author: ''}
    ];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                QuotesComponent,
                QuoteComponent,
                CustomersComponent
            ],
            imports: [
                TranslateModule.forRoot(),
                ModalModule.forRoot()
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuotesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should restart index after last quote', () => {
        component.quotes = quotes;
        component.next();
        component.next();
        expect(component.currentQuote.quote).toBe('1');
    });

    it('should get to last index after first quote', () => {
        component.quotes = quotes;
        component.previous();
        expect(component.currentQuote.quote).toBe('2');
    });

    it('should get to previous index after first quote', () => {
        component.quotes = quotes;
        component.previous();
        component.previous();
        expect(component.currentQuote.quote).toBe('1');
    });

    it('should load the quotes', () => {
        expect(component.quotes.length).toBeGreaterThan(0);
    });

});
