import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';

import {HttpService} from '../http.service';
import {Cards} from '../cards'


@Component({
    selector:'lvl-second',
    templateUrl:'app/lvl-2/lvl-second.component.html',
    styleUrls:['app/lvl-2/lvl-second.component.css']
})



export class LvlSecond implements OnInit{
    lvl:number;
    cards:Cards[];
    constructor(private httpService: HttpService){

    }
    ngOnInit(){
        this.httpService.getCardsLvl2().subscribe((data:Response)=>this.cards = data.json());
        this.lvl=this.httpService.lvl;
    }
    state(item, i){

    }
}