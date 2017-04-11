import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {Header} from './header-component/header.component';
import {HttpService} from './http.service';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, Header ],
    providers:[HttpService],
    bootstrap: [AppComponent],

})
export class AppModule{

}