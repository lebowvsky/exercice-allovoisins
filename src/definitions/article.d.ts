export interface Article {
  id: string | number;
  name: string;
  price: number;
  tax: number;
}

export interface CreateArticleDTO {
  name: string;
  price: number;
  tax: number;
}
