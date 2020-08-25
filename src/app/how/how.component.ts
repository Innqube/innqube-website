import {Component, OnInit} from '@angular/core';
import {ScrollSpyParallaxOptions} from 'ngx-scrollspy';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-how',
    templateUrl: './how.component.html',
    styleUrls: ['./how.component.css']
})
export class HowComponent implements OnInit {

    options: ScrollSpyParallaxOptions = {
        ratio: -.1
    };

    constructor(private translate: TranslateService) {
    }

    ngOnInit() {

    }

    currentLanguage() {
        return this.translate.currentLang;
    }
}
