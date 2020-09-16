const baseUrl = 'https://api.themoviedb.org/3'
const apiKey = 'api_key=84e436d32ba916fa0a74158530f0f518'

export class MoviesService {
  static PopularMovies() {
    return fetch(
      `${baseUrl}/movie/popular?${apiKey}&language=en-US&page=1`
    ).then((res) => res.json())
  }

  static FindById(id: string) {
    return fetch(
      `${baseUrl}/movie/${id}?${apiKey}&language=en-US`
    ).then((res) => res.json())
  }

  static SearchMovies(search: string) {
    return fetch(
      `${baseUrl}/search/movie?${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`
    ).then((res) => res.json())
  }
}
