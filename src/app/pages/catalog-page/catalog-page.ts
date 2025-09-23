import { Component } from '@angular/core';
import { FilmType } from '../../models/film.model';
import { FILMS } from '../../constants/films.constants';
import { FilmService } from '../../services/film';

@Component({
  selector: 'app-catalog-page',
  standalone: false,
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.css'
})
export class CatalogPage {
  // public films: FilmType[] = FILMS

  constructor(
    private _filmService: FilmService
  ) {}

  public get films(): FilmType[]{
    return this._filmService.filteredFilms
  }
}
