import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-customers-sayings',
    templateUrl: './customers-sayings.component.html',
    styleUrls: ['./customers-sayings.component.css']
})
export class CustomersSayingsComponent implements OnInit {

    quotes = [
        {
            quote: 'TRIVERO_MSG',
            imagen: '../../assets/images/customers/tecnica_rivero.png',
            author: 'Agustín Rivero',
            authorImg: 'https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-1/p160x160/15941326_10154984053694759_3650510600741576606_n.jpg?oh=170124ad15cbbebdd6ab5cd5e446d3bf&oe=5A141ED1',
            role: 'Dueño'
        },
        {
            quote: 'ABAROA_MSG',
            imagen: '../../assets/images/customers/abaroa.png',
            author: 'Gonzalo Abaroa',
            authorImg: '../../assets/images/testimonios/gonzalo_abaroa.jpg',
            role: 'Dueño y Gerente comercial'
        },
        {
            quote: 'CONICET_MSG',
            imagen: '../../assets/images/customers/conicet.png',
            author: 'Diego Libkind',
            authorImg: '../../assets/images/testimonios/diego_libkind.jpg',
            role: 'Director del IPATEC, Investigador Independiente'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
