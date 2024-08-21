export interface Movie {
    id: number;
    title: string;
    // Adicione outras propriedades relevantes que a API retorna, como:
    poster_path: string;
    overview: string;
    release_date: string;
    // etc.
  }
  
  export interface MoviesResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }