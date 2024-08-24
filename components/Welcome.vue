<template>
  <div v-if="error">Erro: {{ error.message }}</div>
  <div v-else-if="movies" class="p-24 flex h-3/6 gap-4 bg-cover bg-center relative" 
       :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movies.results[0].backdrop_path})` }">
    <img class="rounded-md object-cover w-1/3 z-10" 
         :src="`https://image.tmdb.org/t/p/w500/${movies.results[0].backdrop_path}`" 
         alt="Movie Poster">
    
    <div class="absolute inset-0 bg-black/80"></div>
    
    <div class="relative w-3/6 grid grid-rows-3 p-4">
      <p class="font-poppins text-3xl font-bold">{{ movies.results[0].title }}</p>
      <p class="font-bold">{{ getGenreNames(movies.results[0].genre_ids).join(', ') }}</p>
      <p class="text-xl">{{ movies.results[0].overview }}</p>
    </div>
  </div>

 

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useMovies } from '~/composables/useMovies';
import { useGenres } from '@/composables/useGenres';
import type { MoviesResponse } from '~/types/Movie';

const { getGenreNames } = useGenres();

const movies = ref<MoviesResponse | null>(null);
const error = ref<Error | null>(null);

onMounted(async () => {
  const { data, error: fetchError } = await useMovies();
  movies.value = data;
  error.value = fetchError;
});





</script>
