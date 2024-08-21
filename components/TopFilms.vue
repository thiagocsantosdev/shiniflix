<template>
  <div>
    <h2 class="p-12 font-poppins text-3xl font-bold">
      Top da Semana!
    </h2>
    <ul class="flex items-top justify-center gap-4" v-if="movies?.results?.length">
      <li v-for="movie in movies.results.slice(0, 12)" :key="movie.id">
        <img
          class="rounded-md object-cover w-40"
          :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`"
          alt="Movie Poster"
        />
        <h2 class="w-40">{{ movie.title }}</h2>
      </li>
    </ul>
    <p v-else>
      Nenhum filme encontrado ou houve um erro ao carregar os dados.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useMovies } from '~/composables/useMovies';
import type { MoviesResponse } from '~/types/Movie';

const movies = ref<MoviesResponse | null>(null);
const error = ref<Error | null>(null);

onMounted(async () => {
  const { data, error: fetchError } = await useMovies();
  movies.value = data;
  error.value = fetchError;
});
</script>
