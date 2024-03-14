<script lang="ts" setup>
import CardLayout from "@/components/layouts/CardLayout.vue";
import { ref, watch } from "vue";
import AppArticle from "./ui/AppArticle.vue";
import { Article } from "@/definitions/article";
import { useArticlesStore } from "@/stores/articles";

const props = defineProps<{ chosenArticle: Article | undefined }>();

// const { allArticles } = useGetArticles();
const articleStore = useArticlesStore();

const emits = defineEmits<{ (e: "chose-article", value: Article): void }>();

const chosenArticleId = ref<string | number | null>();
watch(
  () => props.chosenArticle,
  () => {
    if (props.chosenArticle) {
      chosenArticleId.value = props.chosenArticle.id;
    } else {
      chosenArticleId.value = null;
    }
  }
);

const choseArticle = (article: Article) => {
  chosenArticleId.value = article.id;
  emits("chose-article", article);
};
</script>

<template>
  <CardLayout title="Mes articles">
    <template v-slot:content>
      <div class="list">
        <AppArticle
          v-for="article in articleStore.articles"
          :key="article.id"
          :article="article"
          :isActive="chosenArticleId === article.id"
          @click="choseArticle(article)"
        />
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
