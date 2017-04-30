import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {TranslateLoader, TranslateModule, TranslateService, TranslateStaticLoader} from 'ng2-translate';
import {InicioComponent} from './inicio/inicio.component';
import {PorqueComponent} from './porque/porque.component';
import {QueComponent} from './que/que.component';
import {ComoComponent} from './como/como.component';
import {QuienesComponent} from './quienes/quienes.component';
import {HablamosComponent} from './hablamos/hablamos.component';
import {TrabajaConNosotrosComponent} from './trabaja-con-nosotros/trabaja-con-nosotros.component';
import {PrincipalComponent} from './principal/principal.component';
import {ScrollSpyModule} from 'ngx-scrollspy';
import {ScrollSpyParallaxModule} from 'ngx-scrollspy/dist/plugin/parallax';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, '/assets/i18n', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        InicioComponent,
        PorqueComponent,
        QueComponent,
        ComoComponent,
        QuienesComponent,
        HablamosComponent,
        TrabajaConNosotrosComponent,
        PrincipalComponent
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
        ScrollSpyParallaxModule
    ],
    providers: [
        TranslateService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
