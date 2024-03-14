import { Article, CreateArticleDTO } from "@/definitions/article";
import { defineStore } from "pinia";
import articlesFromJson from "@/data/article.json";
import { ref } from "vue";

export const useArticlesStore = defineStore("articles", () => {
  const articles = ref<Article[]>([]);

  const initArticles = () => {
    const articlesFromLocalStorage = localStorage.getItem("articles");
    if (!articlesFromLocalStorage) {
      localStorage.setItem("articles", JSON.stringify(articlesFromJson));
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
