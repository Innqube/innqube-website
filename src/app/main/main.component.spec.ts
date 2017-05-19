import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainComponent} from './main.component';
import {HeaderComponent} from '../header/header.component';
import {WelcomeComponent} from '../welcome/welcome.component';
import {WhyComponent} from '../why/why.component';
import {WhatComponent} from '../what/what.component';
import {QuotesComponent} from '../quotes/quotes.component';
import {HowComponent} from '../how/how.component';
import {WhoComponent} from '../who/who.component';
import {LetsTalkComponent} from '../lets-talk/lets-talk';
import {FooterComponent} from '../footer/footer.component';
import {ScrollSpyAffixModule} from 'ngx-scrollspy/dist/plugin/affix';
import {CollapseModule} from 'ngx-bootstrap';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {TranslateModule} from 'ng2-translate';
import {ScrollSpyParallaxModule} from 'ngx-scrollspy/dist/plugin/parallax';
import {QuoteComponent} from '../quote/quote.component';
import {MemberComponent} from '../member/member.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ScrollSpyModule} from 'ngx-scrollspy';

describe('MainComponent', () => {
    let component: MainComponent;
    let fixture: ComponentFixture<MainComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MainComponent,
                HeaderComponent,
                WelcomeComponent,
                WhyComponent,
                WhatComponent,
                QuotesComponent,
                QuoteComponent,
                HowComponent,
                WhoComponent,
                LetsTalkComponent,
                FooterComponent,
                MemberComponent
            ],
            imports: [
                ScrollSpyModule.forRoot(),
                ScrollSpyAffixModule,
                ScrollSpyParallaxModule,
                CollapseModule.forRoot(),
                Ng2PageScrollModule.forRoot(),
                TranslateModule.forRoot(),
                ReactiveFormsModule
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
