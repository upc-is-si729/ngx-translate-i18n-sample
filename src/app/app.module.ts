import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {HomeComponent} from './public/pages/home/home.component';
import {TranslationSampleComponent} from './public/components/translation-sample/translation-sample.component';
import {LanguageSelectionComponent} from './public/components/language-selection/language-selection.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, HomeComponent, TranslationSampleComponent, LanguageSelectionComponent],
  imports: [BrowserModule, HttpClientModule, TranslateModule.forRoot({
    defaultLanguage: 'en', loader: {
      provide: TranslateLoader, useFactory: (createTranslateLoader), deps: [HttpClient]
    }
  }), BrowserAnimationsModule, MatButtonModule, MatToolbarModule, MatButtonToggleModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
