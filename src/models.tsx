export interface IFilm {
  id: number
  title: string
  release_date: string
  overview: string
  poster_path: string
  genre_ids: number[] | []
  vote_average: number
  popularity: number
  rating?: number
}

export interface IFilmTransform {
  id: number
  title: string
  releaseDate: string
  overview: string
  posterPath: string
  genreList: number[] | []
  rating: number
  popularity: number
  myRating: number
}

export interface FilmProps {
  film: IFilmTransform
  rateMovie?: (id: number, newRating: number) => void
}

export interface FilmsProps {
  films: IFilmTransform[]
  loading: boolean
  rateMovie?: (id: number, newRating: number) => void
}

export type ListGenresType = [] | { id: number; name: string }[]
