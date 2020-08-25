import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LetsTalkComponent} from './lets-talk.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';

describe('LetsTalkComponent', () => {
    let component: LetsTalkComponent;
    let fixture: ComponentFixture<LetsTalkComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LetsTalkComponent],
            imports: [
                TranslateModule.forRoot(),
                ReactiveFormsModule
            ],
            // providers: [
            //     MockBackend,
            //     BaseRequestOptions, {
            //         provide: HttpClient,
            //         useFactory: (mockBackend, options) => {
            //             return new Http(mockBackend, options);
            //         },
            //         deps: [MockBackend, BaseRequestOptions]
            //     }
            // ]
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
