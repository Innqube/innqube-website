import {Component, OnInit} from '@angular/core';
import {ScrollSpyParallaxOptions} from 'ngx-scrollspy';

@Component({
    selector: 'app-why',
    templateUrl: './why.component.html',
    styleUrls: ['./why.component.css']
})
export class WhyComponent implements OnInit {

  options: ScrollSpyParallaxOptions = {
    ratio: -.1
  };

  constructor() {
    }

    ngOnInit() {
    }

}
