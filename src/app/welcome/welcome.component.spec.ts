import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WelcomeComponent} from './welcome.component';
import {ScrollSpyModule, ScrollSpyParallaxModule} from 'ngx-scrollspy';
import {TranslateModule} from '@ngx-translate/core';

describe('WelcomeComponent', () => {
    let component: WelcomeComponent;
    let fixture: ComponentFixture<WelcomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WelcomeComponent],
            imports: [
                ScrollSpyModule.forRoot(),
                ScrollSpyParallaxModule,
                TranslateModule.forRoot()
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WelcomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
