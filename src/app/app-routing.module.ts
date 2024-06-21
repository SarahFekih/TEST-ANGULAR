import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection par défaut vers '/home'
  { path: 'home', component: HomeComponent }, // Route pour la page d'accueil
  { path: 'users', component: UsersComponent }, // Route pour la liste des utilisateurs
  { path: '**', component: PageNotFoundComponent } // Route pour les pages non trouvées (404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
