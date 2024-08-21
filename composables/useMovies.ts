// /composables/useMovies.ts
import type { MoviesResponse } from '~/types/Movie';

export const useMovies = async (): Promise<{ data: MoviesResponse | null, error: Error | null }> => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzUxYmQ4MDg0NGY1OGM4MWI4NTI3NGExNTQ3ODcxNSIsIm5iZiI6MTcyNDE5ODk4Mi4xNjQwNDUsInN1YiI6IjY2YzI2NDI3ZmIxMDhkOWVmZGFkODA0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.41Th-bbko2bCta7zgibOt3Q58U7_zeZlG7OHK_J8buM'
    }
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1', options);
    
    if (!response.ok) {
      throw new Error(`Erro: ${response.status} ${response.statusText}`);
    }

    const data: MoviesResponse = await response.json();
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
