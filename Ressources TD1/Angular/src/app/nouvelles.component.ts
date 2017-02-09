/**
 * nouvelles.component.ts - Composant représentant la liste des nouvelles.
 * 
 * @authors Mathieu KABORÉ
 * @date 2017/01/16
 */
import { Component, OnInit } from '@angular/core';
import { PolyDataService } from './poly-data.service';

@Component({
  selector: 'news-table',
  template: `

<table class="table">
	<tbody>
    <tr>
			<td class="entete1">nouvelles</td>
      <td class="entete2">activités</td>
		</tr>
	</tbody>
</table>

<table class="table">
	<tbody>


		<tr *ngFor="let row of nouvelles">
			<td class= "news">{{row.date}} - " {{row.titre}} " : {{row.message}}</td>
		</tr>

	</tbody>


</table>


`,
  styles: [`
  
  .table{
     margin: auto; 
	  width: 950px;
  }

  .entete1{
    width: 475px;
    text-align: left;
    border-bottom: 1px solid #fa961e;
    border-top: 1px solid #fa961e;
    padding: 8px 40px;
    font-family: "trebuchet ms","Aller",Arial,sans-serif;
    font-weight: bold;
    text-transform: uppercase; 
    color: #666;
  }

  .entete2{
    width: 475px;
    text-align: left;
    border-bottom: 1px solid #fa961e;
    border-top: 1px solid #fa961e;
    padding: 8px 40px;
    font-family: "trebuchet ms","Aller",Arial,sans-serif;
    font-weight: bold;
    text-transform: uppercase; 
    color: #666;

        background: #b7b7b7;
  }

  .news{
     border-bottom: 1px solid #fa961e;
    padding: 8px 10px;   
    font-size: 0.9rem;
    font-family: "trebuchet ms","Aller",Arial,sans-serif;
  }
  
  `],
  providers: [PolyDataService]
})
export class NouvellesComponent implements OnInit {
  nouvelles: Object;

  // Construteur
  constructor(private polyDataService: PolyDataService) { }

  // Permet d'obtenir les nouvelles en utilisant le service dédié.
  getListeNouvelles(): void {
    this.polyDataService.getListeNouvelles()
      .then((response: Object) => this.nouvelles = response)
      .catch(this.handleError);
  }

  ngOnInit(): void {
    this.getListeNouvelles();
  }

  // Méthode de gestion d'erreur.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
