import { Component } from '@angular/core';
import { FilmService } from '../../services/film';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  public searchString: string = ''

  constructor(private _filmService: FilmService) {
  }

  public updateValue(event: Event){
    const target = event.target as HTMLInputElement
    this.searchString = target.value
  }

  public updateSearch(event: Event){
    this._filmService.seachString = this.searchString
  }
}
