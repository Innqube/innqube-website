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
                HowComponent,
                WhoComponent,
                LetsTalkComponent,
                FooterComponent
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
