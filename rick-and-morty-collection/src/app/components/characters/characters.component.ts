// src/app/characters/characters.component.ts
import {Component, HostListener, OnInit} from '@angular/core';
import {Character} from "../../models/character/character.module";
import {CharacterService} from "../../services/character.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})

export class CharactersComponent implements OnInit {
  characters: any[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private characterService: CharacterService, private router: Router) {
  }

  ngOnInit() {
   this.fetchAndStoreCharacters();
  }
  fetchAndStoreCharacters(): void {
    this.characterService.getCharacters().subscribe({
      next: (characters) => {
        this.characters = characters;
        this.loading = false;
        localStorage.setItem('characters', JSON.stringify(this.characters));
      },
      error: (error) => {
        console.error('Error fetching characters:', error);
        this.errorMessage = 'Failed to load characters';
        this.loading = false;
      }
    });
    console.log(this.characters);
  }

  loadLocalCharacters(): void {
    const data = localStorage.getItem('characters');
    if (data) {
      this.characters = JSON.parse(data);
    }
  }

  deleteCharacter(characterId: number): void {
    this.characters = this.characters.filter(character => character.id !== characterId);
    localStorage.setItem('characters', JSON.stringify(this.characters));
  }

  editCharacter(character: Character): void {
    this.router.navigate(['/character', character.id]).then(r => {
      console.log('Edit character:', character);
    });

  }



  onEdit(character: Character, characterId: number) {
    this.router.navigate(['/character/edit/', characterId]).then(r => {

    });
  }

  selectCharacter(characterId:number) {
    this.router.navigate(['/characters', characterId]).then(r => {

    });
  }
}


