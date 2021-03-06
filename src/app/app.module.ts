import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {WhatComponent} from './what/what.component';
import {HowComponent} from './how/how.component';
import {WhoComponent} from './who/who.component';
import {LetsTalkComponent} from './lets-talk/lets-talk.component';
import {WorkWithUsComponent} from './work-with-us/work-with-us';
import {ScrollSpyModule} from 'ngx-scrollspy';
import {ScrollSpyParallaxModule} from 'ngx-scrollspy';
import {ScrollSpyAffixModule} from 'ngx-scrollspy';
import {QuotesComponent} from './quotes/quotes.component';
import {MemberComponent} from './member/member.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {AppRoutingModule} from './app-routing.module';
import {MainComponent} from './main/main.component';
import {QuoteComponent} from './quote/quote.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CustomersComponent} from './customers/customers.component';
import {CustomersSayingsComponent} from './customers-sayings/customers-sayings.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProjectsComponent } from './projects/projects.component';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        WelcomeComponent,
        WhatComponent,
        HowComponent,
        WhoComponent,
        LetsTalkComponent,
        WorkWithUsComponent,
        QuotesComponent,
        MemberComponent,
        MainComponent,
        QuoteComponent,
        CustomersComponent,
        CustomersSayingsComponent,
        ProjectsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        ScrollSpyModule.forRoot(),
        ScrollSpyParallaxModule,
        ScrollSpyAffixModule,
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        NgxPageScrollModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        ModalModule.forRoot(),
        BrowserAnimationsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
