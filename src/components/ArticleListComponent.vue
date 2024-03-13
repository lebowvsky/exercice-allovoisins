<script lang="ts" setup>
import CardLayout from "@/components/layouts/CardLayout.vue";
import articles from "@/data/article.json";
import { onMounted, ref } from "vue";
import AppArticle from "./ui/AppArticle.vue";
import { Article } from "@/definitions/article";

const allArticle = ref<Article[]>();
onMounted(() => (allArticle.value = articles));
</script>

<template>
  <CardLayout title="Mes articles">
    <template v-slot:content>
      <div class="list">
        <AppArticle v-for="article in allArticle" :key="article.id" :article="article" />
      </div>
    </template>
  </CardLayout>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: $spacing-xs;
  background-color: $main-background;
}
</style>
