import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuotesComponent} from './quotes.component';
import {QuoteComponent} from '../quote/quote.component';

describe('QuotesComponent', () => {
    let component: QuotesComponent;
    let fixture: ComponentFixture<QuotesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                QuotesComponent,
                QuoteComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuotesComponent);
        component = fixture.componentInstance;
        component.quotes = [
            {quote: '1', author: ''},
            {quote: '2', author: ''}
        ];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should restart index after last quote', () => {
        component.next();
        component.next();
        expect(component.currentQuote.quote).toBe('1');
    });

    it('should get to last index after first quote', () => {
        component.previous();
        expect(component.currentQuote.quote).toBe('2');
    });

    it('should get to previous index after first quote', () => {
        component.previous();
        component.previous();
        expect(component.currentQuote.quote).toBe('1');
    });

});
