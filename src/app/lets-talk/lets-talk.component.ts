import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-lets-talk',
    templateUrl: './lets-talk.component.html',
    styleUrls: ['./lets-talk.component.css']
})
export class LetsTalkComponent implements OnInit {

    form: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: null,
            subject: null,
            mail: null,
            message: null
        });
    }

}
