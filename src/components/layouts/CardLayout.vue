<script lang="ts" setup>
defineProps<{ title: string }>();
</script>

<template>
  <section class="article">
    <h2 class="article__title">{{ title }}</h2>
    <slot name="content"></slot>
  </section>
</template>

<style lang="scss" scoped>
.article {
  box-sizing: border-box;
  background-color: $card-background;
  border-radius: 5px;
  overflow: hidden;

  &__title {
    // margin: 0 0 $spacing-l 0;
    padding: $spacing-l;
    font-size: $font-size-h2;
    font-weight: $font-weight-h2;
  }
}
</style>
