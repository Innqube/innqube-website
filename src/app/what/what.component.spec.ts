import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WhatComponent} from './what.component';
import {ScrollSpyParallaxModule} from 'ngx-scrollspy/dist/plugin/parallax';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {ScrollSpyModule} from 'ngx-scrollspy';
import {TranslateModule} from '@ngx-translate/core';

describe('WhatComponent', () => {
    let component: WhatComponent;
    let fixture: ComponentFixture<WhatComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WhatComponent],
            imports: [
                ScrollSpyModule.forRoot(),
                ScrollSpyParallaxModule,
                Ng2PageScrollModule.forRoot(),
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
