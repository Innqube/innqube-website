import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomersComponent} from './customers.component';
import {ModalModule} from 'ngx-bootstrap/modal';

describe('CustomersComponent', () => {
    let component: CustomersComponent;
    let fixture: ComponentFixture<CustomersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CustomersComponent],
            imports: [
                ModalModule.forRoot()
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should load the customers', () => {
        expect(component.visibleCustomersIndexes.length).toBe(component.VISIBLE_CUSTOMERS);
    });

});
