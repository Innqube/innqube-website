import {timer as observableTimer} from 'rxjs';
import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

    readonly VISIBLE_CUSTOMERS = 4;
    customers: any = [
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
            name: 'Sanatorio San Carlos',
            link: 'https://www.ssancarlos.com.ar/',
            image: './assets/images/customers/SSC.png'
        },
        {
            name: 'IPATEC',
            link: 'https://ipatec.conicet.gov.ar/',
            image: './assets/images/customers/ipatec.png'
        },
        {
            name: 'Técnica Rivero',
            link: 'http://www.tecnicarivero.com.ar',
            image: './assets/images/customers/tecnica_rivero.png'
        },
        {
            name: 'Puyehue Argentina',
            link: 'https://puyehue.com.ar/',
            image: './assets/images/customers/puyehue.png'
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
            name: 'Abertex',
            link: 'http://www.abertex.com.ar/',
            image: './assets/images/customers/abertex.png'
        },
        {
            name: 'CIEFAP',
            link: 'https://www.ciefap.org.ar/',
            image: './assets/images/customers/ciefap.png'
        },
        {
            name: 'Grupo Visión',
            link: 'https://www.grupovision.tur.ar/',
            image: './assets/images/customers/gpvn.png'
        },
        {
            name: 'Interpreter Ingelligence',
            link: 'https://www.interpreterintelligence.com/',
            image: './assets/images/customers/ii.png'
        }
    ];


    visibleCustomersIndexes = [];
    lastChangedIndex = 0;

    constructor(private modalService: BsModalService) {
    }

    modalRef: BsModalRef;

    showModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template,   Object.assign({}, { class: 'gray modal-lg' }));
    }

    ngOnInit() {
        this.fillInitialCustomers();
        observableTimer(0, 3500).subscribe(() => {
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
