<script setup lang="ts">
import ArticleListComponent from "@/components/ArticleListComponent.vue";
import ArticleFormComponent from "./components/ArticleFormComponent.vue";
import { Article } from "./definitions/article";
import { onMounted, ref } from "vue";
import { useArticlesStore } from "./stores/articles";
import { useAsideStatesStore } from "./stores/aside";

const articleStore = useArticlesStore();
onMounted(() => articleStore.initArticles());

const asideStatesStore = useAsideStatesStore();

const chosenArticle = ref<Article | undefined>(undefined);

const getArticle = (article: Article): void => {
  if (chosenArticle.value?.id === article.id) {
    chosenArticle.value = undefined;
  } else {
    chosenArticle.value = article;
    asideStatesStore.activeAside();
  }
};

const resetArticle = () => {
  chosenArticle.value = undefined;
};
</script>

<template>
  <main class="main">
    <article class="main__content">
      <ArticleListComponent @chose-article="($event) => getArticle($event)" :chosenArticle="chosenArticle" />
    </article>
    <aside class="main__aside" :class="{ 'main__aside--active': asideStatesStore.isAsideActive }">
      <ArticleFormComponent :article="chosenArticle" @reset-article-form="resetArticle()" />
    </aside>
  </main>
</template>

<style lang="scss">
@import "./styles/main.scss";

.main {
  max-width: $xl;
  display: flex;
  margin: auto;

  @include bpf($max: $l) {
    position: relative;
    display: block;
  }

  gap: $spacing-l;
  width: 100%;

  &__content {
    flex: 1;

    @include bpf($max: $l) {
      width: 100%;
    }
  }

  &__aside {
    min-width: 400px;
    max-width: 500px;

    @include bpf($max: $l) {
      position: fixed;
      top: $spacing-m;
      right: $spacing-m;
      width: calc(100% - calc(2 * #{$spacing-m}));
      min-width: 200px;
      box-shadow: -4px 4px 9px 2px rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      transform: translateX(calc(100% + #{$spacing-l}));
      transition: transform 250ms ease-in-out;

      &--active {
        transform: translateX(0);
      }
    }
  }
}
</style>
