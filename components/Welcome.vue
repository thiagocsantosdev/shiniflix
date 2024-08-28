<template>
  <div v-if="error">Erro: {{ error.message }}</div>
  <div v-else-if="movies" class=" p-10 sm:p-24 flex flex-col sm:flex-row h-96  bg-cover  bg-center relative" 
       :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movies.results[0].backdrop_path})` }">
    <img class="rounded-md object-cover w-full z-10 sm:w-full hidden md:block" 
         :src="`https://image.tmdb.org/t/p/w500/${movies.results[0].backdrop_path}`" 
         alt="Movie Poster">
    
    <div class="absolute inset-0 sm:bg-black/80  bg-black/60"></div>
      
    <div class="relative w-4/6 flex flex-col sm:p-4 gap-6">
      
      <p class="font-poppins sm:text-3xl font-bold">{{ movies.results[0].title }}</p>

      <p class="text-sm">   {{ movies.results[0].overview.length > 50 ? movies.results[0].overview.substring(0, 150) + '...' : movies.results[0].overview }}</p>
      <p class="text-sm text-slate-400">{{ getGenreNames(movies.results[0].genre_ids).join(', ') }}</p>
      
      <button @click="goToMovieDetails(movies.results[0].id)" class="w-20 mt-12 bg-yellow-500 text-sm text-black font-bold rounded-md transition duration-500 hover:bg-red-700">Ver mais</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; // Importe o useRouter
import { useMovies } from '~/composables/useMovies';
import { useGenres } from '@/composables/useGenres';
import type { MoviesResponse } from '~/types/Movie';

const { getGenreNames } = useGenres();
const router = useRouter(); // Crie uma instância do router

const movies = ref<MoviesResponse | null>(null);
const error = ref<Error | null>(null);

onMounted(async () => {
  const { data, error: fetchError } = await useMovies();
  movies.value = data;
  error.value = fetchError;
});

// Função para redirecionar para a página de detalhes do filme
function goToMovieDetails(movieId: number) {
  router.push(`/movies/${movieId}`);
}

// Função para truncar a descrição
function truncateText(text: string, maxLength: number): string {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}



</script>
