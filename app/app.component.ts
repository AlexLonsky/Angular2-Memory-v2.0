import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';

import {Cards} from './cards'
import {HttpService} from './http.service';

@Component({
    selector: 'app-game',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css'],

})
export class AppComponent implements OnInit{
    cards:Cards[];
    lvl:number;
    count:number = 0;
    searchNumber:any = [];
    winCard:any = [];
    visibility: boolean;
    constructor(private httpService: HttpService){
        this.cards=[];
    }
    ngOnInit(){
        this.httpService.getCards().subscribe((data:Response)=>this.cards = data.json());
        this.searchNumber=this.httpService.searchNumber;
        this.winCard=this.httpService.winCard;
        this.visibility=this.httpService.visibility;
    }
    newGame(arr) {
        this.httpService.createNewGame(arr);
    }
    state(item,i){
        this.httpService.clickCard(item,i);
        this.lvl=this.httpService.lvl;
        this.count=this.httpService.count;
};
};