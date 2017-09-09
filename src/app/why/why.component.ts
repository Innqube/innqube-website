import {Component, OnInit} from '@angular/core';
import {ScrollSpyParallaxOptions} from 'ngx-scrollspy/dist/plugin/parallax.directive';

@Component({
    selector: 'app-why',
    templateUrl: './why.component.html',
    styleUrls: ['./why.component.css']
})
export class WhyComponent implements OnInit {

  options: ScrollSpyParallaxOptions = {
    ratio: -.4
  };

  constructor() {
    }

    ngOnInit() {
    }

}
