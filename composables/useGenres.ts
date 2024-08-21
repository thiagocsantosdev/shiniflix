export function useGenres() {
  // Mapeamento dos IDs dos gêneros para seus nomes
  const genreMap: Record<number, string> = {
    28: 'Ação',
    35: 'Comedia',
    878: 'Ficção Científica',
    12: 'Aventura',
    18: 'Drama',
    53: 'Aventura',
    10751: 'Familia',
    16: 'Animação',
    // Adicione outros gêneros conforme necessário...
  };

  // Função que retorna os nomes dos gêneros com base nos IDs
  function getGenreNames(genreIds: number[]): string[] {
    return genreIds.map(id => genreMap[id] || 'Unknown');
  }

  return {
    getGenreNames
  };
}