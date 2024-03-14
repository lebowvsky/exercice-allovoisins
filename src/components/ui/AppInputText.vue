<script lang="ts" setup>
defineProps<{
  modelValue?: string | number | null;
  name: string;
  placeholder: string;
  unity?: string;
  label?: string;
}>();

defineEmits<{ (e: "update:modelValue", payload: string): void }>();
</script>

<template>
  <div class="element">
    <label v-if="unity" class="element__label" :for="name">{{ label }}</label>
    <div class="element__wrapper">
      <input
        class="element__input"
        :class="{ complete: unity ? true : false }"
        type="text"
        :placeholder="placeholder"
        :value="modelValue"
        :id="name"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <span v-if="unity">{{ unity }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.element {
  &__label {
    background-color: $card-background;
    position: relative;
    font-size: $font-size-label;
    top: 8px;
    left: 8px;
  }

  &__wrapper {
    border-radius: 5px;
    border: 1px solid $input-border;
    display: flex;
    align-items: center;
    overflow: hidden;

    span {
      padding: $spacing-m;
      background-color: $main-background;
    }
  }

  &__input {
    background-color: $card-background;
    flex: 1;
    border: none;
    padding: $spacing-m;
    width: 100%;

    &.complete {
      text-align: end;
    }
  }
}
</style>
