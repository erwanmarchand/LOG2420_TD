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
  template: ' // À compléter si nécessaire ...',
  styles: [/* À compléter si nécessaire*/ ],
  providers: [ PolyDataService ]
})

export class MenuComponent implements OnInit {
  menuItems: Object;

  constructor(private dataService: PolyDataService) { }

  // À compléter 
  // ...

  ngOnInit(): void {
    // À compléter ...
  }
}
