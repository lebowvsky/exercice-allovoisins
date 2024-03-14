import { computed, ref } from "vue";

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
