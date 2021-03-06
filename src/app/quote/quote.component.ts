import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    @Input() quote: string;
    @Input() imagen: string;
    @Input() author: string;
    @Input() role: string;
    @Input() authorImg: string;
    @Output() changeIndexEvt: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    changeIndex(i) {
        this.changeIndexEvt.emit(i);
    }

}
