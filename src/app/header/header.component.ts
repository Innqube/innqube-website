import {Component, OnInit} from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    collapsed = true;

    constructor(private translate: TranslateService) {
    }

    ngOnInit() {
    }

    changeLanguage(lang: string) {
        this.translate.use(lang);
    }

}
