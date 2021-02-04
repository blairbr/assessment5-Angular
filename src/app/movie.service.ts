import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public movies: Movie[] = [
    { title: 'Toy Story', releaseYear: 1995 },
    { title: 'Forrest Gump', releaseYear: 1994 },
  ];
  constructor() {}

  getMovies() {
    return this.movies;
  }
}
