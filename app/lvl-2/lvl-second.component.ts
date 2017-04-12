import {Component, OnInit,EventEmitter,Output} from '@angular/core';
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
    searchNumber:any = [];
    visibility: boolean=true;
    count:number;
    constructor(private httpService: HttpService){

    }
    @Output() playerClick= new EventEmitter();
    ngOnInit(){
        this.httpService.getCardsLvl2().subscribe((data:Response)=>this.cards = data.json());
        this.lvl=this.httpService.lvl;
    }

    stateEl(item, i){
        this.httpService.clickCard(item,i);
        this.lvl=this.httpService.lvl;
        this.count=this.httpService.count;
        // console.log(this.count);
        this.playerClick.emit(this.count)
    }
}