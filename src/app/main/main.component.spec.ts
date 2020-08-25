import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainComponent} from './main.component';
import {HeaderComponent} from '../header/header.component';
import {WelcomeComponent} from '../welcome/welcome.component';
import {WhatComponent} from '../what/what.component';
import {QuotesComponent} from '../quotes/quotes.component';
import {HowComponent} from '../how/how.component';
import {WhoComponent} from '../who/who.component';
import {LetsTalkComponent} from '../lets-talk/lets-talk.component';
import {FooterComponent} from '../footer/footer.component';
import {ScrollSpyAffixModule} from 'ngx-scrollspy';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {ScrollSpyParallaxModule} from 'ngx-scrollspy';
import {QuoteComponent} from '../quote/quote.component';
import {MemberComponent} from '../member/member.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ScrollSpyModule} from 'ngx-scrollspy';
import {TranslateModule} from '@ngx-translate/core';
import {CustomersSayingsComponent} from '../customers-sayings/customers-sayings.component';
import {CustomersComponent} from '../customers/customers.component';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {HttpClientModule} from '@angular/common/http';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('MainComponent', () => {
    let component: MainComponent;
    let fixture: ComponentFixture<MainComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MainComponent,
                HeaderComponent,
                WelcomeComponent,
                WhatComponent,
                QuotesComponent,
                QuoteComponent,
                HowComponent,
                WhoComponent,
                LetsTalkComponent,
                FooterComponent,
                MemberComponent,
                CustomersSayingsComponent,
                CustomersComponent,
                QuoteComponent
            ],
            imports: [
                ScrollSpyModule.forRoot(),
                ScrollSpyAffixModule,
                ScrollSpyParallaxModule,
                CollapseModule.forRoot(),
                NgxPageScrollCoreModule,
                TranslateModule.forRoot(),
                ReactiveFormsModule,
                HttpClientModule,
                ModalModule.forRoot(),
                BrowserAnimationsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
