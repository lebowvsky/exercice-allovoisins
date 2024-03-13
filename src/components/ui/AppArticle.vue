<script lang="ts" setup>
import { Article } from "@/definitions/article";

defineProps<{ article: Article }>();
</script>

<template>
  <div class="item">
    <p class="item__title">{{ article.name }}</p>
    <v-icon name="ri-arrow-right-s-line" />
  </div>
</template>

<style lang="scss" scoped>
.item {
  box-sizing: border-box;
  padding: $spacing-m $spacing-l;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $card-background;
  cursor: pointer;

  &:hover {
    background-color: $card-background-hover;
  }

  &__title {
    margin: 0;
  }
}
</style>
