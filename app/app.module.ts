import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HttpService} from './http.service';
import {LvlSecond} from './lvl-2/lvl-second.component'

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, LvlSecond ],
    providers:[HttpService],
    bootstrap: [AppComponent],

})
export class AppModule{

}