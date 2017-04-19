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
var http_1 = require('@angular/http');
var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.modal = false;
        this.cards = [];
        this.item = [];
        this.counterStep = 0;
        this.countWin = 0;
    }
    AppService.prototype.getCards = function () {
        return this.http.get('app/shared/cards.json');
    };
    AppService.prototype.initialization = function () {
        var _this = this;
        this.lvl = 1;
        this.getCards()
            .subscribe(function (resp) {
            var cardsList = resp.json().lvl1;
            for (var index in cardsList) {
                var card = cardsList[index];
                _this.cards.push({ card: card.card, flipped: false });
                _this.cards = _this.cards.sort(function () {
                    return 0.5 - Math.random();
                });
            }
        });
    };
    AppService.prototype.initializationLvl2 = function () {
        var _this = this;
        this.cards.length = 0;
        this.getCards()
            .subscribe(function (resp) {
            var cardsList = resp.json().lvl2;
            for (var index in cardsList) {
                var card = cardsList[index];
                _this.cards.push({ card: card.card, flipped: false });
            }
        });
        this.countWin = 0;
    };
    AppService.prototype.cardDetected = function (item, numberEl) {
        var _this = this;
        if (item.flipped == false) {
            this.item.push(item);
            if (this.item.length == 2) {
                this.counterStep++;
                if (this.item[0].card == this.item[1].card) {
                    this.item = [];
                    this.countWin = this.countWin + 2;
                }
                else {
                    setTimeout(function () {
                        _this.item[0].flipped = false;
                        _this.item[1].flipped = false;
                        _this.item = [];
                    }, 300);
                }
            }
            item.flipped = true;
            if (this.countWin == this.cards.length) {
                this.modal = true;
            }
        }
    };
    AppService.prototype.modalClose = function () {
        this.initializationLvl2();
        this.lvl++;
        this.modal = false;
    };
    AppService.prototype.createNewGame = function () {
        this.cards.length = 0;
        this.countWin = 0;
        // for(let i=0; i< this.cards.length; i++){
        //     this.cards[i].flipped=false;
        // }
        this.initialization();
        this.item = [];
        this.counterStep = 0;
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map