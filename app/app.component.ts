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
    visibility: boolean=true;
    constructor(private httpService: HttpService){
        this.cards=[];
    }
    ngOnInit(){
        this.httpService.getCardsLvl1().subscribe((data:Response)=>this.cards = data.json());
        this.lvl=this.httpService.lvl;
    }

    newGame(arr,lvl) {
        console.log(this.httpService.getCardsLvl2())
        arr=this.cards;
        this.httpService.createNewGame(arr);
        this.count=0;
    }
    state(item,i){
        this.httpService.clickCard(item,i);
        this.lvl=this.httpService.lvl;
        this.count=this.httpService.count;
    };
    nextLvl(){
        this.httpService.newLvl();
        this.lvl=this.httpService.lvl;
    }
    playerClick(num){
        this.count=num;
}
}