import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {TranslateLoader, TranslateModule, TranslateService, TranslateStaticLoader} from 'ng2-translate';
import {WelcomeComponent} from './welcome/welcome.component';
import {WhyComponent} from './why/why.component';
import {WhatComponent} from './what/what.component';
import {HowComponent} from './how/how.component';
import {WhoComponent} from './who/who.component';
import {LetsTalkComponent} from './lets-talk/lets-talk';
import {WorkWithUsComponent} from './work-with-us/work-with-us';
import {PrincipalComponent} from './principal/principal.component';
import {ScrollSpyModule} from 'ngx-scrollspy';
import {ScrollSpyParallaxModule} from 'ngx-scrollspy/dist/plugin/parallax';
import {ScrollSpyAffixModule} from 'ngx-scrollspy/dist/plugin/affix';
import {QuotesComponent} from './quotes/quotes.component';
import {MemberComponent} from './member/member.component';
import {BsDropdownModule, CollapseModule} from 'ngx-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {MainComponent} from './main/main.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, '/assets/i18n', '.json');
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
        PrincipalComponent,
        QuotesComponent,
        MemberComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [Http]
        }),
        ScrollSpyModule.forRoot(),
        ScrollSpyParallaxModule,
        ScrollSpyAffixModule,
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        Ng2PageScrollModule.forRoot(),
        AppRoutingModule
    ],
    providers: [
        TranslateService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
