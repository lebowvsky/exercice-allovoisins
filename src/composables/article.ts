import { computed, ref } from "vue";
import { useArticlesStore } from "@/stores/articles";

export const useUpdateArticleList = () => {
  const articleStore = useArticlesStore();
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

  const addAnArticle = () => {
    if (articleName.value && articleHTPrice.value && articleTax.value) {
      articleStore.addAnArticle({
        name: articleName.value,
        price: articleHTPrice.value,
        tax: articleTax.value,
      });
    }
  };

  const updateArticle = (articleId: string | number) => {
    if (articleName.value && articleHTPrice.value && articleTax.value) {
      articleStore.updateArticle({
        id: articleId,
        name: articleName.value,
        price: articleHTPrice.value,
        tax: articleTax.value,
      });
    }
  };

  return { articleName, articleHTPrice, articleTax, articleTTCPrice, isFormOk, addAnArticle, updateArticle };
};
