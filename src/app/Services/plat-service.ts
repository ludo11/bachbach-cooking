import { computed, Injectable, Signal, signal } from '@angular/core';
import { Plat, PLATS, TypePlat } from '../Models/Plat ';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  private platsSignal = signal<Plat[]>(PLATS);

  // Accès en lecture à tous les plats
  readonly plats = computed(() => this.platsSignal());

 // Filtrer les plats sans viande (readonly Signal)
  readonly platsSansViande: Signal<Plat[]> = computed(() =>
    this.platsSignal().filter((plat) => plat.sansViande)
  );

  // Filtrer les plats par type
  platsParType(type: TypePlat): Signal<Plat[]> {
    return computed(() => this.platsSignal().filter((plat) => plat.type === type));
  }

  // Ajouter un nouveau plat
  ajouterPlat(nouveauPlat: Plat): void {
    this.platsSignal.update((plats) => [...plats, nouveauPlat]);
  }
 
  platsGroupesParType(): Signal<Record<TypePlat, Plat[]>> {
  return computed(() => {
    const groupes: Record<TypePlat, Plat[]> = {} as any;
    for (const plat of this.platsSignal()) {
      if (!groupes[plat.type]) {
        groupes[plat.type] = [];
      }
      groupes[plat.type].push(plat);
    }

    // On précise que 'type' est un TypePlat
    for (const typeKey in groupes) {
      const type = typeKey as TypePlat;
      groupes[type].sort((a, b) => a.nom.localeCompare(b.nom));
    }
    return groupes;
  });
}
// Signal regroupé filtré (nouveau)
platsGroupesFiltresParType(filtreSansViande: Signal<boolean>): Signal<Record<TypePlat, Plat[]>> {
  return computed(() => {
    const plats = filtreSansViande() ? this.platsSansViande() : this.platsSignal();
    const groupes: Record<TypePlat, Plat[]> = {} as any;
    for (const plat of plats) {
      if (!groupes[plat.type]) groupes[plat.type] = [];
      groupes[plat.type].push(plat);
    }
    for (const typeKey in groupes) {
      const type = typeKey as TypePlat;
      groupes[type].sort((a, b) => a.nom.localeCompare(b.nom));
    }
    return groupes;
  });
}
}
