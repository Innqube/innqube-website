import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WhyComponent} from './why.component';
import {TranslateModule} from 'ng2-translate';

describe('WhyComponent', () => {
    let component: WhyComponent;
    let fixture: ComponentFixture<WhyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WhyComponent],
            imports: [
                TranslateModule.forRoot()
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
