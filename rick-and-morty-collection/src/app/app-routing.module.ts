// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharactersComponent} from "./components/characters/characters.component";
import {CharacterFormComponent} from "./components/character-form/character-form.component";
import {CharacterDetailComponent} from "./components/character-detail/character-detail.component";


const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'character/new', component: CharacterFormComponent },  // Create new character
  { path: 'character/edit/:id', component: CharacterFormComponent},
  { path: 'characters/:id', component: CharacterDetailComponent },// Edit existing character
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
