"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_service_1 = require('./http.service');
var AppComponent = (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.cards = [];
        this.count = 0;
        this.searchNumber = [];
        this.winCard = [];
        this.visibility = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getCards().subscribe(function (data) { return _this.cards = data.json(); });
        console.log('выгрузка');
    };
    AppComponent.prototype.newGame = function (arr) {
        var el = document.querySelectorAll('.show');
        for (var i = 0; i < el.length; i++) {
            el[i].classList.remove('show');
        }
        if (this.winCard.length > 0) {
            this.winCard[0].classList.remove('flip');
        }
        var newG = document.querySelectorAll('.cardShow');
        for (var y = 0; y < newG.length; y++) {
            newG[y].classList.remove('cardShow');
            newG[y].classList.add('card');
        }
        this.cards = arr.sort(function () { return 0.5 - Math.random(); });
        this.count = 0;
        this.winCard = [];
        this.searchNumber = [];
    };
    AppComponent.prototype.state = function (item, i) {
        var _this = this;
        console.log(this.cards);
        // "card":"icon-home2"
        // this.cards.push({'card' : 'icon-home2'})
        var el = document.getElementsByName('item');
        if (el[i].classList.contains('card')) {
            el[i].classList.add('flip');
            el[i].classList.remove('card');
            el[i].classList.add('cardShow');
            this.searchNumber.push(item);
            this.winCard.push(el[i]);
        }
        if (this.searchNumber.length == 2) {
            this.visibility = !this.visibility;
            this.count++;
            if (this.searchNumber[0].card == this.searchNumber[1].card) {
                this.winCard[0].classList.remove('flip');
                this.winCard[0].classList.add('show');
                this.winCard[1].classList.remove('flip');
                this.winCard[1].classList.add('show');
                this.winCard = [];
                this.visibility = !this.visibility;
            }
            else {
                setTimeout(function () {
                    if (_this.winCard != 0) {
                        _this.winCard[0].classList.remove('flip');
                        _this.winCard[0].classList.remove('cardShow');
                        _this.winCard[0].classList.add('card');
                        _this.winCard[1].classList.remove('flip');
                        _this.winCard[1].classList.remove('cardShow');
                        _this.winCard[1].classList.add('card');
                        _this.visibility = !_this.visibility;
                    }
                    _this.winCard = [];
                }, 400);
            }
            this.searchNumber = [];
        }
        var win = document.querySelectorAll('.cardShow');
        if (win.length == 12) {
            // alert('You win')
            this.lvl = 1;
        }
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-game',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map