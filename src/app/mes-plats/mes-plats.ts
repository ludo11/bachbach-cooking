import { Component, computed, inject, signal, Signal } from '@angular/core';
import { PlatService } from '../Services/plat-service';
import { Plat, TypePlat } from '../Models/Plat ';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mes-plats',
  templateUrl: './mes-plats.html',
  imports: [CommonModule],
  styleUrls: ['./mes-plats.css'],
  standalone: true,
})
export class MesPlats  {
  
  filtreSansViande = signal(false);

  private readonly platService = inject(PlatService);

   // Plats à afficher, qui change selon la checkbox
  platsFiltres: Signal<Plat[]> = computed(() =>
    this.filtreSansViande() ? this.platService.platsSansViande() : this.platService.plats()
  );

  readonly typeKeys = Object.values(TypePlat).sort((a, b) => a.localeCompare(b));


  readonly platsGroupes: Signal<Record<TypePlat, Plat[]>> = this.platService.platsGroupesFiltresParType(this.filtreSansViande);
  
  onToggleFiltre(event: Event) {
    const input = event.target as HTMLInputElement;
    this.filtreSansViande.set(input.checked);
}
}
