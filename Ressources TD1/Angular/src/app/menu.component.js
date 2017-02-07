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
/**
 * menu.component.ts - Composant représentant le menu d'affichage de l'application
 *
 * @authors Mathieu KABORÉ
 * @date 2017/01/16
 */
var core_1 = require('@angular/core');
var poly_data_service_1 = require('./poly-data.service');
var MenuComponent = (function () {
    function MenuComponent(dataService) {
        this.dataService = dataService;
    }
    // À compléter 
    // ...
    MenuComponent.prototype.ngOnInit = function () {
        // À compléter ...
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menu-items',
            template: ' // À compléter si nécessaire ...',
            styles: [],
            providers: [poly_data_service_1.PolyDataService]
        }), 
        __metadata('design:paramtypes', [poly_data_service_1.PolyDataService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map