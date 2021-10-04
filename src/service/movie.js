class Movie {
  constructor() {
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  //1. 최신영화
  mostRecent() {
    return (
      fetch(
        `https://yts-proxy.now.sh/list_movies.json?order_by=desc&sort_by=year`,
        this.getRequestOptions
      )
        .then(response => response.json())
        // .then(result => setMovies(result.data.movies));
        .then(result => result.data.movies)
    );
  }

  //2. search
  async search(query) {
    const response = await fetch(
      `https://yts-proxy.now.sh/list_movies.json?query_term=${query}`,
      this.getRequestOptions
    );

    const result_1 = await response.json();
    return result_1.data.movies;
    // .then(response => response.json())
    // .then(result => setMovies(result.data.movies))
    // .catch(error => console.log('error', error));
  }
}
export default Movie;
