import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WhoComponent} from './who.component';
import {TranslateModule} from 'ng2-translate';
import {MemberComponent} from '../member/member.component';

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
