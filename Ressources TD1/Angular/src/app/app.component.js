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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'TD1-LOG2420';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'poly-app',
            template: "\n\t<header role=\"banner\">\n\n\t\t<div class=\"premier_bandeau\">\n\t\t\t<menu-items></menu-items>\n\t\t</div> \n\n\t</header>\n\n\n\n\t<div class=\"bandeau_logo\">\n\t\t<img src=\"./images/logo.png\" alt=\"Accueil\" class=\"imageLogoPoly\">\n\t\t<ul class=\"language-switcher\">\n\t\t\t<li class=\"en first last\"> \n\t\t\t\t<a  href=\"#\"class=\"langue-lien\">ENGLISH</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div> \n\n\n\n\t<div class=\"bandeau_liens_rapides\">\n\t\n\n\t\t<div class=\"medias_sociaux\">\n\n\n\t\t\t<table class=\"tablefastlinkpic\">\n\t\t\t\t<tr>\n\t\t\t\t\t<td><a href=\"#\" title=\"\"><img class=\"fastlinkpic\" src=\"./images/FastLinks/grey/facebook.png\"></a></td>\n\t\t\t\t\t<td><a href=\"#\" title=\"\"><img class=\"fastlinkpic\" src=\"./images/FastLinks/grey/linkedin.png\"></a></td>\n\t\t\t\t\t<td><a href=\"#\" title=\"\"><img class=\"fastlinkpic\" src=\"./images/FastLinks/grey/instagram.png\"></a></td>\n\t\t\t\t</tr>\n\n\t\t\t\t<tr>\n\t\t\t\t\t<td><a href=\"#\" title=\"\"><img class=\"fastlinkpic\" src=\"./images/FastLinks/grey/rss.png\"></a></td>\n\t\t\t\t\t<td><a href=\"#\" title=\"\"><img class=\"fastlinkpic\" src=\"./images/FastLinks/grey/twitter.png\"></a></td>\n\t\t\t\t\t<td><a href=\"#\" title=\"\"><img class=\"fastlinkpic\" src=\"./images/FastLinks/grey/youtube.png\"></a></td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\n\t\t\t \n\t\t\t<a href=\"#\" class =\"menu_bar\">\n\t\t\t\t<span class=\"menu\">MENU\n\t\t\t\t\t<i class=\"fa fa-bars\"></i>\n\t\t\t\t</span>\n\t\t\t</a>\n\n\t\t\t<a href=\"#\"  class=\"search\">\n\t\t\t\t<span class=\"searchLoop\">\n\t\t\t\t\t<i class=\"fa fa-search \" aria-hidden=\"true\"></i>\n\t\t\t\t</span>\n\t\t\t</a>\n\n\t\t\t<a href=\"#\" class=\"liens_rapides\">Liens rapides</a>\n\n\t\t\t<div class=\"image_etudiants\">\n\n\t\t\t\t<img src=\"./images/groupeetudiants.jpg\" alt=\"Image d etudiants\" >\n\n\t\t\t</div><div class=\"bandeau_International\">\n\t\t\t\t<div class=\"Texte\">\n\t\t\t\t\t<h2>INTERNATIONAL</h2>\n\t\t\t\t\t<p>Avec plus de 250 ententes universitaires et 24% d'\u00E9tudiants internationaux, Polytechnique Montr\u00E9al est plus que jamais ouverte sur le monde.</p>\n\t\t\t\t\t<a href=\"#\" title=\"\" class=\"discover_possibilities\">D\u00E9couvrez les possibilit\u00E9s</a>\n\t\t\t\t</div> \n\t\t\t</div>\n\t\t</div> \t\n\t</div><div>\n\t\t<news-table></news-table>\n\t</div>\n\n\n\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map