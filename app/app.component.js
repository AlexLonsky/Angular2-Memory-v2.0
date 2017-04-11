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
        this.count = 0;
        this.searchNumber = [];
        this.visibility = true;
        this.cards = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getCardsLvl1().subscribe(function (data) { return _this.cards = data.json(); });
        this.lvl = this.httpService.lvl;
    };
    AppComponent.prototype.newGame = function (arr) {
        this.httpService.createNewGame(arr);
    };
    AppComponent.prototype.state = function (item, i) {
        var _this = this;
        if (this.searchNumber[0] != item) {
            this.searchNumber.push(item);
        }
        this.httpService.clickCard(item, i);
        if (this.searchNumber.length == 2) {
            this.visibility = !this.visibility;
            setTimeout(function () {
                _this.visibility = !_this.visibility;
                _this.searchNumber = [];
            }, 400);
        }
        this.lvl = this.httpService.lvl;
        this.count = this.httpService.count;
    };
    ;
    AppComponent.prototype.nextLvl = function () {
        this.httpService.newLvl();
        this.lvl = this.httpService.lvl;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-game',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map