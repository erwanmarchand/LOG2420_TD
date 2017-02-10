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
    function MenuComponent(polyDataService) {
        this.polyDataService = polyDataService;
    }
    // Permet d'obtenir les nouvelles en utilisant le service dédié.
    MenuComponent.prototype.getListeMenu = function () {
        var _this = this;
        this.polyDataService.getListeMenu()
            .then(function (response) { return _this.menuItems = response; })
            .catch(this.handleError);
    };
    MenuComponent.prototype.ngOnInit = function () {
        this.getListeMenu();
    };
    // Méthode de gestion d'erreur.
    MenuComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menu-items',
            template: "\n\n\n    \n\t\t\t<ul class=\"liste-menu\" *ngFor=\"let row of menuItems\">\n\n\t\t\t\t<li class=\"li1\"><a href={{row.link}}>{{row.title}}</a></li>\n\n\t\t\t</ul> \n\t\t\n  \n  ",
            styles: ["\n  \n  \n  \n.liste-menu {\n\n    width: 50%;\n    margin: auto auto; \n\n\n}\n\n.li1 {\n\tfloat: left;\nlist-style: none;\n\n    padding-top: 8px;\n    padding-right: 10px;\n    padding-bottom: 8px;\n    padding-left: 8px;\n\t\nposition: relative;\n\n\n\nfont-family: \"trebuchet ms\",\"Aller\",Arial,sans-serif;\nfont-weight: bold;\ntext-transform: uppercase;\n\n\n\n}\n\n\n.liste-menu > li > a {\n    text-decoration: none;\n    color: white;\n}\n\n.li1::after {\n    content: \" | \";\n    color: #fff;\n    position: absolute;\n    right: -1px;\n}  \n  \n  "],
            providers: [poly_data_service_1.PolyDataService]
        }), 
        __metadata('design:paramtypes', [poly_data_service_1.PolyDataService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map