import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-que',
    templateUrl: './que.component.html',
    styleUrls: ['./que.component.css']
})
export class QueComponent implements OnInit {

    options = {
        ratio: -.3,
        initValue: -800
    };

    constructor() {
    }

    ngOnInit() {
    }

}
