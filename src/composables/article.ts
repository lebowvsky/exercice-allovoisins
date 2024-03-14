import { computed, onMounted, ref } from "vue";
import articlesFromJson from "@/data/article.json";
import { Article } from "@/definitions/article";

export const usePopulateLocalStorageWithArticles = () => {
  onMounted(() => {
    const articles = localStorage.getItem("articles");
    console.log(articles);
    if (!articles) localStorage.setItem("articles", JSON.stringify(articlesFromJson));
  });
};

export const useGetArticles = () => {
  const allArticles = ref<Article[]>([]);
  onMounted(() => {
    const articles = localStorage.getItem("articles");
    if (articles) allArticles.value = JSON.parse(articles);
  });

  return { allArticles };
};

export const useUpdateArticleList = () => {
  const articleName = ref<string | null>("");
  const articleHTPrice = ref<number | null>(null);
  const articleTax = ref<number | null>(null);

  const articleTTCPrice = computed<number>(() => {
    if (articleHTPrice.value && articleTax.value) {
      return +articleHTPrice.value + (+articleHTPrice.value * +articleTax.value) / 100;
    }
    return 0;
  });

  const isFormOk = computed<boolean>(() =>
    articleName.value && articleHTPrice.value && articleTax.value ? false : true
  );

  const submitArticle = () => {
    console.log("submited !!!");
  };

  return { articleName, articleHTPrice, articleTax, articleTTCPrice, isFormOk, submitArticle };
};
