import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomersSayingsComponent} from './customers-sayings.component';
import {TranslateModule} from '@ngx-translate/core';
import {QuoteComponent} from '../quote/quote.component';
import {CustomersComponent} from '../customers/customers.component';
import {ModalModule} from 'ngx-bootstrap/modal';

describe('CustomersSayingsComponent', () => {
    let component: CustomersSayingsComponent;
    let fixture: ComponentFixture<CustomersSayingsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CustomersSayingsComponent,
                CustomersComponent,
                QuoteComponent
            ],
            imports: [
                TranslateModule.forRoot(),
                ModalModule.forRoot()
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomersSayingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
