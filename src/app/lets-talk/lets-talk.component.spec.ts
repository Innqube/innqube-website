import {async, ComponentFixture, fakeAsync, inject, TestBed} from '@angular/core/testing';

import {LetsTalkComponent} from './lets-talk';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {BaseRequestOptions, Http, RequestMethod} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {TranslateModule} from '@ngx-translate/core';

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
            providers: [
                MockBackend,
                BaseRequestOptions, {
                    provide: Http,
                    useFactory: (mockBackend, options) => {
                        return new Http(mockBackend, options);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                }
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

    it('should send post request', inject([FormBuilder, MockBackend], fakeAsync((formBuilder: FormBuilder, backend: MockBackend) => {
        component.form.patchValue({
            name: 'name',
            mail: 'mail@mail.com',
            message: 'message'
        });
        component.sendMessage();
        expect(backend.connectionsArray[0].request.url).toBe('http://www.innqube.com/team/tomas-christie/');
        expect(backend.connectionsArray[0].request.method).toBe(RequestMethod.Post);
    })));
});
