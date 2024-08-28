<template>
  <div>
    <h2 class="p-10 font-poppins text-xl font-bold">
      Popular
    </h2>
    
    <UCarousel 
      v-slot="{ item }" 
      :items="items" 
      :ui="{ 
        item: 'basis-44 md:basis-56 lg:basis-56 flex-shrink-0' 
      }" 
      indicators 
      class="rounded-lg overflow-hidden flex "
    >
      <div class="relative w-[150px] h-[250px]  gap-4 group  ">
        <div 
          class="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out  " 
          :style="{ backgroundImage: `url(${item.imageUrl})` }">
        </div>
        <div class=" hidden sM absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-white p-2 bg-black bg-opacity-80 rounded-lg">
          <div class="grid grid-rows-[auto,auto,1fr] gap-2 p-4">
  <ul class="flex flex-col row-span-1">
    <li class="text-sm text-slate-400 font-bold hidden " v-for="(genre, index) in item.genres" :key="index">{{ genre }}</li>
  </ul>
  <p class="font-bold text-center row-span-1 text-base hidden">{{ item.title }}</p>
  <p class=" text-center text-sm row-span-1 hidden" >{{ item.description }}</p>
</div>



        </div>
      </div>
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useMovies } from '~/composables/useMovies';
import type { MoviesResponse } from '~/types/Movie';
import { useGenres } from '@/composables/useGenres';


// Função para truncar a descrição
function truncateText(text: string, maxLength: number): string {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}



const movies = ref<MoviesResponse | null>(null);
const error = ref<Error | null>(null);
const items = ref<{ imageUrl: string, title: string, genres: string[], description: string }[]>([]);
const { getGenreNames } = useGenres();

onMounted(async () => {
  const { data, error: fetchError } = await useMovies();
  movies.value = data;
  error.value = fetchError;

  if (movies.value) {
    items.value = movies.value.results.slice(0, 12).map(movie => {
      return {
        imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        title: movie.title,
        description: truncateText(movie.overview, 120), // Trunca a descrição para 30 caracteres
        genres: getGenreNames(movie.genre_ids) // Agora é um array de strings
      };
    });
  }
});
</script>
