import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CharacterService} from "../../services/character.service";
import {Character} from "../../models/character/character.module";
import {of, switchMap} from "rxjs";

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss']
})
export class CharacterFormComponent implements OnInit {

  isEditMode = false;
  characterId?: number;
  @Input() character: any;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();
  characterForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    status: [''],
    species: ['']
  });


  constructor(
    private fb: FormBuilder,
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      if (params['id']) {
        this.isEditMode = true;
        this.characterId = params['id'];
        this.characterService.getCharacter(this.characterId!).subscribe(data => {
          this.characterForm.patchValue(data);
        });
      }
    });

    // Determine mode based on the presence of an ID in the route
    this.route.paramMap.pipe(
      switchMap((params: { get: (arg0: string) => any; }) => {
        const id = params.get('id');
        if (id) {
          this.isEditMode = true;
          this.characterId = parseInt(id, 10);
          return this.characterService.getCharacter(this.characterId);
        } else {
          this.isEditMode = false;
          return of({});
        }
      })
    ).subscribe(character => {
      this.characterForm.patchValue({
        name:this.character.name || '',
        image:this. character.image || '',
        status:this.character.status || ''
      });
    });
    console.log(this.character)
  }



  onSubmit() {
    if (this.characterForm.valid) {
      const characterData = this.characterForm.value;
      if (this.isEditMode) {
        // @ts-ignore
        this.characterService.updateCharacter(characterData).subscribe(() => {
          this.router.navigate(['/characters']).then(r => {

          });
        });
      } else {
        this.characterService.createCharacter(characterData).subscribe(() => {
          this.router.navigate(['/characters']).then(r => {

          });
        });
      }
    }
  }
}
