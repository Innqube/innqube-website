import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {ScrollSpyAffixModule} from 'ngx-scrollspy/dist/plugin/affix';
import {CollapseModule} from 'ngx-bootstrap';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {TranslateModule} from 'ng2-translate';
import {ScrollSpyModule} from 'ngx-scrollspy';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [
                ScrollSpyAffixModule,
                ScrollSpyModule.forRoot(),
                CollapseModule.forRoot(),
                Ng2PageScrollModule.forRoot(),
                TranslateModule.forRoot()
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
