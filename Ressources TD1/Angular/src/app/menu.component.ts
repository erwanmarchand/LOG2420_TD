/**
 * menu.component.ts - Composant représentant le menu d'affichage de l'application
 * 
 * @authors Mathieu KABORÉ
 * @date 2017/01/16
 */
import { Component, OnInit } from '@angular/core';
import { PolyDataService } from './poly-data.service';

@Component({
  selector: 'menu-items',
  template: `


    
			<ul class="liste-menu" *ngFor="let row of menuItems">

				<li class="li1"><a href={{row.link}}>{{row.title}}</a></li>

			</ul> 
		
  
  `,
  styles: [`
  
  
  
.liste-menu {

    width: 50%;
    margin: auto auto; 


}

.li1 {
	float: left;
list-style: none;

    padding-top: 8px;
    padding-right: 10px;
    padding-bottom: 8px;
    padding-left: 8px;
	
position: relative;



font-family: "trebuchet ms","Aller",Arial,sans-serif;
font-weight: bold;
text-transform: uppercase;



}


.liste-menu > li > a {
    text-decoration: none;
    color: white;
}

.li1::after {
    content: " | ";
    color: #fff;
    position: absolute;
    right: -1px;
}  
  
  `],
  providers: [ PolyDataService ]
})

export class MenuComponent implements OnInit {
  menuItems: Object;

  constructor(private polyDataService: PolyDataService) { }

    // Permet d'obtenir les nouvelles en utilisant le service dédié.
  getListeMenu(): void {
    this.polyDataService.getListeMenu()
      .then((response: Object) => this.menuItems = response)
      .catch(this.handleError);
  }

  ngOnInit(): void {
    this.getListeMenu();
  }

  // Méthode de gestion d'erreur.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
