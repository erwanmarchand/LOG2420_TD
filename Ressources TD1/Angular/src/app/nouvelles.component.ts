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

		<tr class *ngFor="let row of nouvelles">
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

  .news{
     border-bottom: 1px solid #fa961e;
    padding: 5px 10px;   
    font-size: 0.9rem;
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
