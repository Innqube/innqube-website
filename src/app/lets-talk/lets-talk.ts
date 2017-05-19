import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Http} from '@angular/http';

@Component({
    selector: 'app-lets-talk',
    templateUrl: './lets-talk.component.html',
    styleUrls: ['./lets-talk.component.css']
})
export class LetsTalkComponent implements OnInit {

    form: FormGroup;

    constructor(private formBuilder: FormBuilder, private http: Http) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: null,
            mail: null,
            message: null
        });
    }

    sendMessage() {
        const formData = new FormData();
        formData.append('name', this.form.value.name);
        formData.append('mail', this.form.value.mail);
        formData.append('message', this.form.value.message);

        this.http
            .post(
                'http://www.innqube.com/team/tomas-christie/',
                formData
            )
            .subscribe();
    }

}
