import { Component } from '@angular/core';

import { NouvellesComponent } from './nouvelles.component';
import { MenuComponent } from './menu.component';

@Component({
  selector: 'poly-app',
  template: `
	<header role="banner">

		<div class="premier_bandeau">
			<menu-items></menu-items>
		</div> 

	</header>



	<div class="bandeau_logo">
		<img src="./images/logo.png" alt="Accueil" class="imageLogoPoly">
		<ul class="language-switcher">
			<li class="en first last"> 
				<a  href="#"class="langue-lien">ENGLISH</a>
			</li>
		</ul>
	</div> 



	<div class="bandeau_liens_rapides">
	

		<div class="medias_sociaux">


			<table class="tablefastlinkpic">
				<tr>
					<td><a href="#" title=""><img class="fastlinkpic" src="./images/FastLinks/grey/facebook.png"></a></td>
					<td><a href="#" title=""><img class="fastlinkpic" src="./images/FastLinks/grey/linkedin.png"></a></td>
					<td><a href="#" title=""><img class="fastlinkpic" src="./images/FastLinks/grey/instagram.png"></a></td>
				</tr>

				<tr>
					<td><a href="#" title=""><img class="fastlinkpic" src="./images/FastLinks/grey/rss.png"></a></td>
					<td><a href="#" title=""><img class="fastlinkpic" src="./images/FastLinks/grey/twitter.png"></a></td>
					<td><a href="#" title=""><img class="fastlinkpic" src="./images/FastLinks/grey/youtube.png"></a></td>
				</tr>
			</table>

			 
			<a href="#" class ="menu_bar">
				<span class="menu">MENU
					<i class="fa fa-bars"></i>
				</span>
			</a>

			<a href="#"  class="search">
				<span class="searchLoop">
					<i class="fa fa-search " aria-hidden="true"></i>
				</span>
			</a>

			<a href="#" class="liens_rapides">Liens rapides</a>

			<div class="image_etudiants">

				<img src="./images/groupeetudiants.jpg" alt="Image d etudiants" >

			</div> 

			<div class="bandeau_International">
				<div class="Texte">
					<h2>INTERNATIONAL</h2>
					<p>Avec plus de 250 ententes universitaires et 24% d'étudiants internationaux, Polytechnique Montréal est plus que jamais ouverte sur le monde.</p>
					<a href="#" title="" class="discover_possibilities">Découvrez les possibilités</a>
				</div> 
			</div>



			 
		</div> 

		
	</div>

	<div>
		<news-table></news-table>
	</div>



  `,
})
export class AppComponent {
  title = 'TD1-LOG2420';
}
