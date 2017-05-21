import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {WhyComponent} from './why/why.component';
import {WhatComponent} from './what/what.component';
import {HowComponent} from './how/how.component';
import {WhoComponent} from './who/who.component';
import {LetsTalkComponent} from './lets-talk/lets-talk';
import {WorkWithUsComponent} from './work-with-us/work-with-us';
import {ScrollSpyModule} from 'ngx-scrollspy';
import {ScrollSpyParallaxModule} from 'ngx-scrollspy/dist/plugin/parallax';
import {ScrollSpyAffixModule} from 'ngx-scrollspy/dist/plugin/affix';
import {QuotesComponent} from './quotes/quotes.component';
import {MemberComponent} from './member/member.component';
import {BsDropdownModule, CollapseModule} from 'ngx-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {MainComponent} from './main/main.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {QuoteComponent} from './quote/quote.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        WelcomeComponent,
        WhyComponent,
        WhatComponent,
        HowComponent,
        WhoComponent,
        LetsTalkComponent,
        WorkWithUsComponent,
        QuotesComponent,
        MemberComponent,
        MainComponent,
        QuoteComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [Http]
            }
        }),
        ScrollSpyModule.forRoot(),
        ScrollSpyParallaxModule,
        ScrollSpyAffixModule,
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        Ng2PageScrollModule.forRoot(),
        ReactiveFormsModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
