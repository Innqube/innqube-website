import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-customers-sayings',
    templateUrl: './customers-sayings.component.html',
    styleUrls: ['./customers-sayings.component.css']
})
export class CustomersSayingsComponent implements OnInit {

    quotes = [
        {
            quote: 'Vestibulum elementum commodo eleifend. Aliquam porttitor sodales nunc. Vivamus feugiat erat elementum tellus volutpat mattis.',
            imagen: '../../assets/images/customers/tecnica_rivero.png',
            author: 'Agustín Rivero',
            authorImg: 'https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-1/p160x160/15941326_10154984053694759_3650510600741576606_n.jpg?oh=170124ad15cbbebdd6ab5cd5e446d3bf&oe=5A141ED1',
            role: 'Dueño'
        },
        {
            quote: 'Curabitur at sagittis mauris. In neque sem, aliquam at rutrum sed, gravida a orci. Vestibulum.',
            imagen: '../../assets/images/customers/abaroa.png',
            author: 'Gonzalo Abaroa',
            authorImg: 'https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-1/p160x160/19756472_10212568546664957_2303231259769670395_n.jpg?oh=e0716369b905af263335f5777d47840b&oe=5A581BE5',
            role: 'Gerente comercial'
        },
        {
            quote: 'Mauris dapibus pretium ipsum, at cursus augue convallis non. Vestibulum consequat tristique ipsum at sagittis.',
            imagen: '../../assets/images/customers/abaroa.png',
            author: 'Gonzalo Abaroa',
            authorImg: 'http://s3.amazonaws.com/cdn.roosterteeth.com/uploads/images/36437c1c-f403-42c3-a3a0-4886a49bd012/original/2195219-1449924847806-image-2.jpg',
            role: 'Gerente comercial'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
