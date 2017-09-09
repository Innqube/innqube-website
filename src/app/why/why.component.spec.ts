import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WhyComponent} from './why.component';
import {TranslateModule} from '@ngx-translate/core';
import {ScrollSpyParallaxModule} from 'ngx-scrollspy/dist/plugin/parallax';
import {ScrollSpyModule} from 'ngx-scrollspy';

describe('WhyComponent', () => {
    let component: WhyComponent;
    let fixture: ComponentFixture<WhyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WhyComponent],
            imports: [
                TranslateModule.forRoot(),
                ScrollSpyParallaxModule,
                ScrollSpyModule.forRoot()
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WhyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
