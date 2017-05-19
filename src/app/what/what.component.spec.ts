import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WhatComponent} from './what.component';
import {ScrollSpyParallaxModule} from 'ngx-scrollspy/dist/plugin/parallax';

describe('WhatComponent', () => {
    let component: WhatComponent;
    let fixture: ComponentFixture<WhatComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WhatComponent],
            imports: [
                ScrollSpyParallaxModule
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
