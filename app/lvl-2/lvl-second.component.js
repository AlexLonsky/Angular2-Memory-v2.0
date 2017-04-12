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
var http_service_1 = require('../http.service');
var LvlSecond = (function () {
    function LvlSecond(httpService) {
        this.httpService = httpService;
        this.searchNumber = [];
        this.visibility = true;
        this.playerClick = new core_1.EventEmitter();
    }
    LvlSecond.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getCardsLvl2().subscribe(function (data) { return _this.cards = data.json(); });
        this.lvl = this.httpService.lvl;
    };
    LvlSecond.prototype.stateEl = function (item, i) {
        this.httpService.clickCard(item, i);
        this.lvl = this.httpService.lvl;
        this.count = this.httpService.count;
        // console.log(this.count);
        this.playerClick.emit(this.count);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LvlSecond.prototype, "playerClick", void 0);
    LvlSecond = __decorate([
        core_1.Component({
            selector: 'lvl-second',
            templateUrl: 'app/lvl-2/lvl-second.component.html',
            styleUrls: ['app/lvl-2/lvl-second.component.css']
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], LvlSecond);
    return LvlSecond;
}());
exports.LvlSecond = LvlSecond;
//# sourceMappingURL=lvl-second.component.js.map