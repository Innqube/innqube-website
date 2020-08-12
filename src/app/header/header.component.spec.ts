import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {ScrollSpyAffixModule} from 'ngx-scrollspy';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {ScrollSpyModule} from 'ngx-scrollspy';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

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
                NgxPageScrollCoreModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: http => new TranslateHttpLoader(http, '/assets/i18n/', '.json'),
                        deps: [HttpClient]
                    }
                }),
                HttpClientModule
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

    it('should set spanish language when spanish flag is clicked', () => {
        spyOn(component, 'changeLanguage');
        const buttons = fixture.nativeElement.querySelectorAll('button');
        buttons[2].click();
        expect(component.changeLanguage).toHaveBeenCalledWith('es');
    });

    it('should set english language when uk flag is clicked', () => {
        spyOn(component, 'changeLanguage');
        const buttons = fixture.nativeElement.querySelectorAll('button');
        buttons[1].click();
        expect(component.changeLanguage).toHaveBeenCalledWith('en');
    });

});
