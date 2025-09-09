export interface Article {
  title: string;
  slug: string;
  date: string;
  logo?: string;
  author: string;
  category?: string;
}

const postModules = import.meta.glob('@/posts/*.md', { eager: true });

export const articles: Article[] = Object.values(postModules)
  .map((module: any) => ({
    title: module.title,
    slug: module.slug,
    date: module.date,
    logo: module.logo,
    author: module.author,
    category: module.category,
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());