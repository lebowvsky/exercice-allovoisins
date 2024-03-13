<script setup lang="ts">
import ArticleListComponent from "@/components/ArticleListComponent.vue";
import ArticleFormComponent from "./components/ArticleFormComponent.vue";
import { Article } from "./definitions/article";
import { ref } from "vue";

const chosenArticle = ref<Article | undefined>(undefined);

const getArticle = (article: Article): void => {
  chosenArticle.value = article;
};
</script>

<template>
  <main class="main">
    <article class="main__content">
      <ArticleListComponent @chose-article="($event) => getArticle($event)" />
    </article>
    <aside class="main__aside">
      <ArticleFormComponent :article="chosenArticle" />
    </aside>
  </main>
</template>

<style lang="scss">
@import "./styles/main.scss";

.main {
  max-width: $xl;
  display: flex;
  margin: auto;

  gap: $spacing-l;
  width: 100%;

  &__content {
    flex: 1;
  }

  &__aside {
    min-width: 400px;
    max-width: 500px;
  }
}
</style>
