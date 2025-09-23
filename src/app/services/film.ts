import { Injectable } from '@angular/core';
import { FilmType } from '../models/film.model';
import { FILMS } from '../constants/films.constants';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  public _films: FilmType[] = FILMS
  private _searchString: string = ''

  public get getFullFilms(): FilmType[]{
    return this._films
  }

  public get filteredFilms(): FilmType[] {
    return this._films.filter((item) => item.title.includes(this._searchString))

  }
  
  public get searchString(): string {
    return this._searchString
  }

  public set seachString(value: string){
    this._searchString = value
  }
}

