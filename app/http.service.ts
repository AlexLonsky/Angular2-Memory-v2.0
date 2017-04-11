import {Injectable, } from '@angular/core';
import {Http} from '@angular/http';



@Injectable()
export class HttpService{
    lvl:number=0;
    count:number = 0;
    searchNumber:any = [];
    winCard:any = [];
    cards=[];

    constructor(private http: Http){}

    getCardsLvl1(){
        return this.http.get('cardsLvl1.json')
    }
    getCardsLvl2(){
        return this.http.get('cardsLvl2.json')
    }
    createNewGame(arr){
        let el = document.querySelectorAll('.show');
        if(this.winCard.length>0){
            this.winCard[0].classList.remove('flip');
        }
        for(let i = 0; i < el.length; i++){
            el[i].classList.remove('show');
        }
        let newG = document.querySelectorAll('.cardShow');
        for(let y = 0; y < newG.length; y++){
            newG[y].classList.remove('cardShow');
            newG[y].classList.add('card')
        }
            this.cards = arr.sort(function() {
                return 0.5 - Math.random()
            });
        this.count = 0;
        this.winCard = [];
        this.searchNumber = [];
    }
    clickCard(item, i){
        let el:any = document.getElementsByName('item');
        if(el[i].classList.contains('card')){
            el[i].classList.add('flip');
            el[i].classList.remove('card');
            el[i].classList.add('cardShow');
            this.searchNumber.push(item);
            this.winCard.push(el[i]);
        }
        if(this.searchNumber.length == 2){
            this.count++;
            if(this.searchNumber[0].card == this.searchNumber[1].card){
                this.winCard[0].classList.remove('flip');
                this.winCard[0].classList.add('show');
                this.winCard[1].classList.remove('flip');
                this.winCard[1].classList.add('show');
                this.winCard = [];
            }
            else{
                setTimeout(() => {
                    if(this.winCard != 0){
                        this.winCard[0].classList.remove('flip');
                        this.winCard[0].classList.remove('cardShow');
                        this.winCard[0].classList.add('card');
                        this.winCard[1].classList.remove('flip');
                        this.winCard[1].classList.remove('cardShow');
                        this.winCard[1].classList.add('card');
                    }
                    this.winCard = [];
                }, 400);
            }
            this.searchNumber = [];
        }
        let win =document.querySelectorAll('.cardShow');

        if(win.length == 12){
            alert('You win');
            this.lvl=1;
        }
    }
    newLvl(){
        this.lvl=2;
    }

}