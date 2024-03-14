import { Article, CreateArticleDTO } from "@/definitions/article";
import { defineStore } from "pinia";
import { ref } from "vue";

const articleArrayInit: Article[] = [
  {
    id: 0,
    name: "Achat de matériel",
    price: 150,
    tax: 20,
  },
  {
    id: 1,
    name: "Dépose des murs",
    price: 425,
    tax: 20,
  },
  {
    id: 2,
    name: "Dépose des radiateurs",
    price: 200,
    tax: 20,
  },
  {
    id: 3,
    name: "Dépose des sols",
    price: 230,
    tax: 19.5,
  },
  {
    id: 4,
    name: "Remplacement sanitaire",
    price: 450,
    tax: 20,
  },
  {
    id: 5,
    name: "Pose meuble vasque",
    price: 320,
    tax: 20,
  },
];

export const useArticlesStore = defineStore("articles", () => {
  const articles = ref<Article[]>([...articleArrayInit]);

  const initArticles = () => {
    const articlesFromLocalStorage = localStorage.getItem("articles");
    if (!articlesFromLocalStorage) {
      localStorage.setItem("articles", JSON.stringify(articleArrayInit));
    } else {
      articles.value = JSON.parse(articlesFromLocalStorage);
    }
  };

  const addAnArticle = (article: CreateArticleDTO) => {
    articles.value.push({ ...article, id: articles.value.length });
    localStorage.setItem("articles", JSON.stringify(articles.value));
  };

  const updateArticle = (article: Article) => {
    const indexOfArticle = articles.value.findIndex((elt) => elt.id === article.id);
    if (indexOfArticle > -1) {
      articles.value[indexOfArticle] = { ...article };
    }
    localStorage.setItem("articles", JSON.stringify(articles.value));
  };

  return { articles, initArticles, addAnArticle, updateArticle };
});
