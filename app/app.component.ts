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

    newGame(arr) {
        this.httpService.createNewGame(arr);
    }
    state(item,i){
        if(this.searchNumber[0] != item){
            this.searchNumber.push(item);
        }
        this.httpService.clickCard(item,i);
        if(this.searchNumber.length==2){
            this.visibility=!this.visibility;
            setTimeout(() => {
                this.visibility=!this.visibility;
                this.searchNumber=[];
            }, 400);
        }
        this.lvl=this.httpService.lvl;
        this.count=this.httpService.count;
    };
    nextLvl(){
        this.httpService.newLvl();
        this.lvl=this.httpService.lvl;
    }
}