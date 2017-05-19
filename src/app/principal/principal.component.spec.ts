import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PrincipalComponent} from './principal.component';
import {ScrollSpyParallaxModule} from 'ngx-scrollspy/dist/plugin/parallax';

describe('PrincipalComponent', () => {
    let component: PrincipalComponent;
    let fixture: ComponentFixture<PrincipalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PrincipalComponent],
            imports: [
                ScrollSpyParallaxModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PrincipalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
