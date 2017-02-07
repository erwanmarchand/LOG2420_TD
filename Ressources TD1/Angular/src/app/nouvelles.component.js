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
 * nouvelles.component.ts - Composant représentant la liste des nouvelles.
 *
 * @authors Mathieu KABORÉ
 * @date 2017/01/16
 */
var core_1 = require('@angular/core');
var poly_data_service_1 = require('./poly-data.service');
var NouvellesComponent = (function () {
    // Construteur
    function NouvellesComponent(polyDataService) {
        this.polyDataService = polyDataService;
    }
    // Permet d'obtenir les nouvelles en utilisant le service dédié.
    NouvellesComponent.prototype.getListeNouvelles = function () {
        var _this = this;
        this.polyDataService.getListeNouvelles()
            .then(function (response) { return _this.nouvelles = response; })
            .catch(this.handleError);
    };
    NouvellesComponent.prototype.ngOnInit = function () {
        this.getListeNouvelles();
    };
    // Méthode de gestion d'erreur.
    NouvellesComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    NouvellesComponent = __decorate([
        core_1.Component({
            selector: 'news-table',
            template: "\nsdfgsg\n<table>\n\t<tbody>\n\n\t\t<tr *ngFor=\"let row of nouvelles\">\n\t\t\t<td>{{row.date}}</td>\n\t\t</tr>\n\n\t</tbody>\n\n\n</table>\n\n\n",
            styles: ['À compléter si nénessaire ..'],
            providers: [poly_data_service_1.PolyDataService]
        }), 
        __metadata('design:paramtypes', [poly_data_service_1.PolyDataService])
    ], NouvellesComponent);
    return NouvellesComponent;
}());
exports.NouvellesComponent = NouvellesComponent;
//# sourceMappingURL=nouvelles.component.js.map