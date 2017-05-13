import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-member',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

    @Input() name: string;
    @Input() imgSrc: string;
    @Input() degree: string;
    @Input() linkedIn: string;
    @Input() twitter: string;
    @Input() github: string;

    constructor() {
    }

    ngOnInit() {
    }

}
