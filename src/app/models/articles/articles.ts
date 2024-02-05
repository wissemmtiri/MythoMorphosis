export class Article {
    content: string;
    createdAt: Date;
    deletedAt: Date | null; // Assuming deletedAt can be null
    id: number;
    imageUrl: string;
    title: string;
    updatedAt: Date;
  
    constructor(article: Partial<Article> = {}) {
      this.content = article.content || '';
      this.createdAt = article.createdAt || new Date();
      this.deletedAt = article.deletedAt || null;
      this.id = article.id || 0;
      this.imageUrl = article.imageUrl || '';
      this.title = article.title || '';
      this.updatedAt = article.updatedAt || new Date();
    }
  }
  