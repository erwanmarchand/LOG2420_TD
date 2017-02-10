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
            template: "\n\n<table class=\"table\">\n\t<tbody>\n    <tr>\n\t\t\t<td class=\"entete1\">nouvelles</td>\n      <td class=\"entete2\">activit\u00E9s</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<table class=\"table\">\n\t<tbody>\n\n\n\t\t<tr *ngFor=\"let row of nouvelles\">\n\t\t\t<td class= \"news\">{{row.date}} - \" {{row.titre}} \" : {{row.message}}</td>\n\t\t</tr>\n\n\t</tbody>\n\n\n</table>\n\n\n",
            styles: ["\n  \n  .table{\n     margin: auto; \n\t  width: 950px;\n  }\n\n  .entete1{\n    width: 475px;\n    text-align: left;\n    border-bottom: 1px solid #fa961e;\n    border-top: 1px solid #fa961e;\n    padding: 8px 40px;\n    font-family: \"trebuchet ms\",\"Aller\",Arial,sans-serif;\n    font-weight: bold;\n    text-transform: uppercase; \n    color: #666;\n  }\n\n  .entete2{\n    width: 475px;\n    text-align: left;\n    border-bottom: 1px solid #fa961e;\n    border-top: 1px solid #fa961e;\n    padding: 8px 40px;\n    font-family: \"trebuchet ms\",\"Aller\",Arial,sans-serif;\n    font-weight: bold;\n    text-transform: uppercase; \n    color: #666;\n\n        background: #b7b7b7;\n  }\n\n  .news{\n     border-bottom: 1px solid #fa961e;\n    padding: 8px 10px;   \n    font-size: 0.9rem;\n    font-family: \"trebuchet ms\",\"Aller\",Arial,sans-serif;\n  }\n  \n  "],
            providers: [poly_data_service_1.PolyDataService]
        }), 
        __metadata('design:paramtypes', [poly_data_service_1.PolyDataService])
    ], NouvellesComponent);
    return NouvellesComponent;
}());
exports.NouvellesComponent = NouvellesComponent;
//# sourceMappingURL=nouvelles.component.js.map