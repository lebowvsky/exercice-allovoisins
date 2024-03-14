<script lang="ts" setup>
defineProps<{ title: string }>();
</script>

<template>
  <section class="article">
    <div class="article__header">
      <h2 class="article__title">{{ title }}</h2>
      <slot name="button"></slot>
    </div>
    <slot name="content"></slot>
  </section>
</template>

<style lang="scss" scoped>
.article {
  box-sizing: border-box;
  background-color: $card-background;
  border-radius: 5px;
  overflow: hidden;

  &__header {
    padding: $spacing-l;

    @include bpf($max: $l) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__title {
    // margin: 0 0 $spacing-l 0;
    font-size: $font-size-h2;
    font-weight: $font-weight-h2;
  }
}
</style>
