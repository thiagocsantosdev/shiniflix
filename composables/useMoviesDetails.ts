// composables/useMovieDetails.ts
import { ref } from 'vue';

export function useMovieDetails(movieId: string) {
  const movie = ref(null);
  const error = ref(null);

  async function fetchMovieDetails() {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=bc51bd80844f58c81b85274a15478715&language=pt-BR`);
      const data = await response.json();
      movie.value = data;
    } catch (err) {
      error.value = err;
    }
  }

  fetchMovieDetails();

  return { movie, error };
}

