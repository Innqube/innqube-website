import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WhoComponent} from './who.component';
import {MemberComponent} from '../member/member.component';
import {TranslateModule} from '@ngx-translate/core';

describe('WhoComponent', () => {
    let component: WhoComponent;
    let fixture: ComponentFixture<WhoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                WhoComponent,
                MemberComponent
            ],
            imports: [
                TranslateModule.forRoot()
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WhoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
