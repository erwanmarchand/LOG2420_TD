
self.importScripts("CompteurJetons.js");
var compteur = new CompteurJetons();

self.addEventListener('message', function(e) {

	// Code à implémenter
	var gen = compteur.compterJetons(e.data);
	while(!gen.next().done){
		postMessage([compteur.getJetons(),compteur.getProgress()]);
	}
  
}, false);
