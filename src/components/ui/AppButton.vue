<script lang="ts" setup>
withDefaults(defineProps<{ text: string; isDisabled?: boolean; type?: "submit" | "button" }>(), {
  type: "submit",
  disabled: false,
});
</script>

<template>
  <button class="button" :type="type" :disabled="isDisabled">{{ text }}</button>
</template>

<style lang="scss" scoped>
.button {
  padding: $spacing-m $spacing-l;
  border-radius: $spacing-xl;
  border: none;
  color: $font-inverted-classic-color;
  background-color: $button-primary-color;
  cursor: pointer;

  &:hover {
    background-color: $button-primary-hover-color;
  }

  &:disabled {
    background-color: $button-primary-disabled-color;
  }
}
</style>
