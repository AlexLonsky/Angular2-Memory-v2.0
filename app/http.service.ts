import {Injectable} from '@angular/core';
import {Http} from '@angular/http';



@Injectable()
export class HttpService{
    constructor(private http: Http){}

    getCards(){
        return this.http.get('cards.json')
    }
}