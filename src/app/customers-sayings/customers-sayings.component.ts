 import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-customers-sayings',
    templateUrl: './customers-sayings.component.html',
    styleUrls: ['./customers-sayings.component.css']
})
export class CustomersSayingsComponent implements OnInit {

    active = 0;
    quotes = [
        {
            quote: 'CONICET_MSG',
            imagen: '../../assets/images/customers/conicet.png',
            author: 'Diego Libkind',
            authorImg: '../../assets/images/testimonios/diego_libkind.jpg',
            role: 'CONICET_ROL'
        },
        {
            quote: 'ABAROA_MSG',
            imagen: '../../assets/images/customers/abaroa.png',
            author: 'Gonzalo Abaroa',
            authorImg: '../../assets/images/testimonios/gonzalo_abaroa.jpg',
            role: 'ABAROA_ROL'
        },
        {
            quote: 'TRIVERO_MSG',
            imagen: '../../assets/images/customers/tecnica_rivero.png',
            author: 'Agustín Rivero',
            authorImg: '../../assets/images/testimonios/agustin_rivero.jpg',
            role: 'TRIVERO_ROL'
        }
    ];

    onIndexChange(i) {
        const length = this.quotes.length;
        this.active = this.active + i;
        this.active = this.active < 0 ? length - 1 : this.active === length ? 0 : this.active;
    }

    ngOnInit() {
    }

}
