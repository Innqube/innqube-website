import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-memberof',
    templateUrl: 'memberof.component.html',
    styleUrls: ['memberof.component.css']
})
export class MemberofComponent implements OnInit {

    @Input() name: string;
    @Input() imgSrc: string;
    @Input() linkInst: string;

    constructor() { }

    ngOnInit() {
    }

}
