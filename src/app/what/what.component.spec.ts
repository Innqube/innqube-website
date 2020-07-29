import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WhatComponent} from './what.component';
import {ScrollSpyParallaxModule} from 'ngx-scrollspy';
import {ScrollSpyModule} from 'ngx-scrollspy';
import {TranslateModule} from '@ngx-translate/core';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';

describe('WhatComponent', () => {
    let component: WhatComponent;
    let fixture: ComponentFixture<WhatComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WhatComponent],
            imports: [
                ScrollSpyModule.forRoot(),
                ScrollSpyParallaxModule,
                NgxPageScrollCoreModule,
                TranslateModule.forRoot()
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WhatComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
