export interface Article {
  id: number;
  title: string;
  slug: string; // URL amigável para o artigo
  date: string; // Formato ISO: 'YYYY-MM-DD'
  logo?: string;
  author: string;
}

export const mockArticles: Article[] = [
  // Agosto de 2025
  { id: 1, title: 'Teste 1', slug: 'teste-1', date: '2025-08-15', logo: '/logos/teste.svg', author: 'Gabriel Silveira' },
  { id: 2, title: 'Teste 2', slug: 'teste-2', date: '2025-08-01', logo: '/logos/teste.svg', author: 'Gabriel Silveira' },

  // Junho de 2025
  { id: 3, title: 'Teste 3', slug: 'teste-3', date: '2025-06-22', logo: '/logos/teste.svg', author: 'Gabriel Silveira' },

  // Maio de 2025
  { id: 4, title: 'Teste 4', slug: 'teste-4', date: '2025-05-30', logo: '/logos/teste.svg', author: 'Gabriel Silveira' },
  { id: 5, title: 'Teste 5', slug: 'teste-5', date: '2025-05-12', logo: '/logos/teste.svg', author: 'Gabriel Silveira' },
  { id: 6, title: 'Teste 6', slug: 'teste-6', date: '2025-05-02', logo: '/logos/teste.svg', author: 'Gabriel Silveira' },

  // Dezembro de 2024
  { id: 7, title: 'Teste 7', slug: 'teste-7', date: '2024-12-25', logo: '/logos/teste.svg', author: 'Gabriel Silveira' },
];