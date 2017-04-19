import {Component} from '@angular/core';
// import {Response} from '@angular/http';
import {AppService} from '../shared/app.service';
// import {Cards} from '../cards';



@Component({
    selector:'card-field',
    templateUrl:'app/card-action/card-field.component.html',
    styleUrls:['app/card-action/card-field.component.css'],

})


export class CardField{
    cards=[];

    constructor(private appServise:AppService){}

    ngOnInit(){
        this.appServise.initialization();
        this.cards=this.appServise.cards;
        console.log(this.cards)


    }



}