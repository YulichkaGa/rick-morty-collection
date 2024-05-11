import {Character} from "../character/character.module";

 export  interface CharactersApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}
