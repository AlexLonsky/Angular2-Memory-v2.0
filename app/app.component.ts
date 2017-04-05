import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {HttpService} from './http.service';
import {Cards} from './cards'
@Component({
    selector: 'app-game',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css'],
    providers:[HttpService]
})
export class AppComponent implements OnInit{
    cards:Cards[] = [];
    count:number = 0;
    searchNumber:any = [];
    winCard:any = [];
    visibility: boolean = true;
    constructor(private httpService: HttpService){}
    ngOnInit(){
        this.httpService.getCards().subscribe((data:Response)=>this.cards = data.json());
    }
    newGame(arr) {
       let el = document.querySelectorAll('.show');
        for(let i = 0; i < el.length; i++){
                el[i].classList.remove('show');
        }
        if(this.winCard.length>0){
            this.winCard[0].classList.remove('flip');
        }

        let newG = document.querySelectorAll('.cardShow');
        console.log(newG);
        for(let y = 0; y < newG.length; y++){
            newG[y].classList.remove('cardShow');
            newG[y].classList.add('card')
        }
        this.cards = arr.sort(function() {return 0.5 - Math.random()});
        this.count = 0;
        this.winCard = [];
        this.searchNumber = [];
    }
    state(item,i){
        let el:any = document.getElementsByName('item');
        if(el[i].classList.contains('card')){
            el[i].classList.add('flip');
            el[i].classList.remove('card');
            el[i].classList.add('cardShow');
            this.searchNumber.push(item);
            this.winCard.push(el[i]);
        }
    if(this.searchNumber.length == 2){
        this.visibility=!this.visibility;
        this.count++;
            if(this.searchNumber[0].card == this.searchNumber[1].card){
                this.winCard[0].classList.remove('flip');
                this.winCard[0].classList.add('show');
                this.winCard[1].classList.remove('flip');
                this.winCard[1].classList.add('show');
                this.winCard = [];
                setTimeout(()=>{this.visibility=!this.visibility;},700)
            }
            else{
                setTimeout(() => {
                    if(this.winCard != 0){
                        this.winCard[0].classList.remove('flip');
                        this.winCard[1].classList.remove('flip');
                        this.winCard[0].classList.remove('cardShow')
                        this.winCard[0].classList.add('card');
                        this.winCard[1].classList.remove('cardShow')
                        this.winCard[1].classList.add('card');
                        this.visibility=!this.visibility;
                    }
                    this.winCard = [];
                }, 1000);
            }
        this.searchNumber = [];
    }
    let win =document.querySelectorAll('.cardShow')
        console.log(win.length)
        if(win.length == 12){
        alert('You win')
        }
};


}