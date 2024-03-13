<script setup lang="ts">
import ArticleListComponent from "@/components/ArticleListComponent.vue";
import CardLayout from "@/components/layouts/CardLayout.vue";
import ArticleFormComponent from "./components/ArticleFormComponent.vue";
</script>

<template>
  <main class="main">
    <article class="main__content">
      <ArticleListComponent />
    </article>
    <aside class="main__aside">
      <ArticleFormComponent />
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
