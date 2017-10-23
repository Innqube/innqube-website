import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

    readonly VISIBLE_CUSTOMERS = 4;
    customers: [{
        name: string,
        link: string,
        image: string
    }] = [
        {
            name: 'Técnica Rivero',
            link: 'http://www.tecnicarivero.com.ar',
            image: './assets/images/customers/tecnica_rivero.png'
        },
        {
            name: 'Conicet',
            link: 'http://www.conicet.gov.ar/conicet',
            image: './assets/images/customers/conicet.png'
        },
        {
            name: 'Fundación INVAP',
            link: 'http://www.fundacioninvap.org.ar',
            image: './assets/images/customers/fundacioninvap.png'
        },
        {
            name: 'El Barco',
            link: null,
            image: './assets/images/customers/elbarco.png'
        },
        {
            name: 'Abaroa',
            link: 'http://www.partedetuhogar.com.ar/',
            image: './assets/images/customers/abaroa.png'
        },
        {
            name: 'Valleverde',
            link: 'http://valleverde.com.ar',
            image: './assets/images/customers/valleverde.png'
        },
        {
            name: 'Argentina Mining',
            link: 'http://www.argentinamining.com/es/',
            image: './assets/images/customers/argentinamining.png'
        },
        {
            name: 'Insumos Médicos Patagonia',
            link: 'http://impatagonia.com.ar/web/',
            image: './assets/images/customers/imp.png'
        },
        {
            name: 'Kleer',
            link: 'http://www.kleer.la/',
            image: './assets/images/customers/kleer.png'
        },
        {
            name: 'Módena',
            link: '',
            image: './assets/images/customers/modena.png'
        }, {
            name: 'Abertex',
            link: 'http://www.abertex.com.ar/',
            image: './assets/images/customers/abertex.png'
        }
    ];

    visibleCustomersIndexes = [];
    lastChangedIndex = 0;

    constructor() {
    }

    ngOnInit() {
        this.fillInitialCustomers();
        Observable.timer(0, 3500).subscribe(() => {
            let index: number;

            do {
                index = this.getRandomInt(0, this.customers.length - 1);
            } while (this.customerAlreadyVisible(index));

            const newIndex = this.lastChangedIndex + 1 === this.VISIBLE_CUSTOMERS ? 0 : this.lastChangedIndex + 1;
            this.lastChangedIndex = newIndex;
            this.visibleCustomersIndexes[newIndex] = index;
        });
    }

    private customerAlreadyVisible(index: number) {
        return this.visibleCustomersIndexes.filter(visibleIndex => visibleIndex === index).length > 0;
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    fillInitialCustomers() {
        let index: number;

        do {
            index = this.getRandomInt(0, this.customers.length - 1);

            if (!this.customerAlreadyVisible(index)) {
                this.visibleCustomersIndexes.push(index);
            }
        } while (this.visibleCustomersIndexes.length < this.VISIBLE_CUSTOMERS);
    }
}
