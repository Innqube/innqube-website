import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HowComponent} from './how.component';
import {ScrollSpyParallaxModule} from 'ngx-scrollspy/dist/plugin/parallax';
import {TranslateModule} from 'ng2-translate';
import {ScrollSpyModule} from 'ngx-scrollspy';

describe('HowComponent', () => {
    let component: HowComponent;
    let fixture: ComponentFixture<HowComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HowComponent],
            imports: [
                ScrollSpyModule.forRoot(),
                ScrollSpyParallaxModule,
                TranslateModule.forRoot()
            ],
            providers: []
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
