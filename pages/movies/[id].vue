<template>
  <NuxtLayout ></NuxtLayout>
    <div v-if="error">Erro: {{ error.message }}</div>
    <div v-else-if="movie" class="p-10 sm:p-24 flex gap-4 sm:flex-row h-44 bg-cover bg-center relative"
         :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})` }">
      
          <div class="z-10 w-2/4 pt-28" >
            <img class="rounded-md object-cover w-full z-10 sm:w-full  md:block"
           :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
           alt="Movie Poster">
            <button>Trailer</button>
          </div>
       
  
      <div class="absolute inset-0 sm:bg-black/80 bg-black/60"></div>
  
      <div class="relative w-4/6 flex flex-col sm:p-4 gap-6 pt-40">
        <p class="font-poppins sm:text-3xl font-bold">{{ movie.title }}</p>
        <p class="text-sm">{{ truncateText(movie.overview, 150) }}</p>
        <p class="text-sm text-slate-400">{{ getGenreNames(movie.genre_ids).join(', ') }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useMovies } from '~/composables/useMovies';
  import { useGenres } from '@/composables/useGenres';
  import type { Movie } from '~/types/Movie';
  
  const route = useRoute();
  const { getGenreNames } = useGenres();
  const movie = ref<Movie | null>(null);
  const error = ref<Error | null>(null);
  
  onMounted(async () => {
    const movieId = route.params.id;
    try {
      const { data, error: fetchError } = await useMovies();
      if (data && data.results) {
        movie.value = data.results.find(m => m.id === Number(movieId)) || null;
      } else {
        error.value = new Error('Dados não encontrados.');
      }
      if (fetchError) {
        error.value = fetchError;
      }
    } catch (err) {
      if (err instanceof Error) {
        error.value = err;
      } else {
        error.value = new Error('Ocorreu um erro desconhecido.');
      }
    }
  });
  
  // Função para truncar a descrição
  function truncateText(text: string, maxLength: number): string {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }
  
  </script>
  