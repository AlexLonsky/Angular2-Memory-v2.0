import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';

import {Cards} from '../cards';

@Injectable()
export class AppService{
    lvl:number;
    modal:boolean=false;
    cards:Cards[]=[];
    item=[];
    counterStep:number=0;
    countWin:number=0;
    constructor(private http:Http){}
    getCards(){
        return this.http.get('app/shared/cards.json')
    }
    initialization(){
        this.lvl=1;
        this.getCards()
            .subscribe((resp:Response)=>{
                let cardsList= resp.json().lvl1;
                for(let index in cardsList){
                    let card=cardsList[index];
                    this.cards.push({card:card.card, flipped:false});
                    this.cards = this.cards.sort(function() {
                        return 0.5 - Math.random()
                    });
                }
            });


    }
    initializationLvl2(){
        this.cards.length=0;
        this.getCards()
            .subscribe((resp:Response)=>{
                let cardsList= resp.json().lvl2;
                for(let index in cardsList){
                    let card=cardsList[index];
                    this.cards.push({card:card.card, flipped:false})
                }
            });
        this.countWin=0;
    }
    cardDetected(item, numberEl){
        if(item.flipped == false){
            this.item.push(item);
            if(this.item.length == 2){
                this.counterStep++;
                if(this.item[0].card == this.item[1].card){
                    this.item=[];
                    this.countWin=this.countWin + 2;
                }
                else{
                    setTimeout(() => {
                    this.item[0].flipped=false;
                    this.item[1].flipped=false;
                    this.item=[];
                }, 300);
                }
            }
            item.flipped=true;
            if(this.countWin == this.cards.length){
                this.modal=true;
            }
        }
    }
    modalClose(){
        this.initializationLvl2();
        this.lvl++;
        this.modal=false;
    }

    createNewGame(){
        this.cards.length=0;
        this.countWin=0;
        // for(let i=0; i< this.cards.length; i++){
        //     this.cards[i].flipped=false;
        // }
        this.initialization();
        this.item=[];
        this.counterStep=0;

    }
}