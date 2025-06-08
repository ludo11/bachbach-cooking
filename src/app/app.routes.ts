import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Home } from './home/home';
import { Prestations } from './prestations/prestations';
import { Reservation } from './reservation/reservation';
import { Contact } from './contact/contact';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { EnCoursDeConstruction } from './en-cours-de-construction/en-cours-de-construction';
import { QuiSuisJe } from './qui-suis-je/qui-suis-je';
import { Avis } from './avis/avis';


export const routes: Routes = [

    { path: '', component: Home }, // route d'accueil
    { path: 'prestations', component: Prestations },
    { path: 'reservation', component: Reservation },
    { path: 'contact', component: Contact },
    { path: 'header', component: Header },
    { path: 'footer', component: Footer },
    { path: 'en-construction', component: EnCoursDeConstruction },
    { path: 'qui-suis-je', component: QuiSuisJe },
    { path: 'avis', component: Avis },


    { path: '**', redirectTo: '' }, // redirection vers accueil si page inconnue

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}