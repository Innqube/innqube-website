import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LetsTalkComponent} from './lets-talk';
import {TranslateModule} from 'ng2-translate';
import {ReactiveFormsModule} from '@angular/forms';

describe('LetsTalkComponent', () => {
    let component: LetsTalkComponent;
    let fixture: ComponentFixture<LetsTalkComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LetsTalkComponent],
            imports: [
                TranslateModule.forRoot(),
                ReactiveFormsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LetsTalkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
