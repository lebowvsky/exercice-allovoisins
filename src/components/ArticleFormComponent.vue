<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import CardLayout from "./layouts/CardLayout.vue";
import AppButton from "./ui/AppButton.vue";
import AppInputText from "./ui/AppInputText.vue";
import { Article } from "@/definitions/article";

const props = defineProps<{ article?: Article | undefined }>();

watch(
  () => props.article,
  () => {
    if (props.article) {
      articleName.value = props.article.name;
      articleHTPrice.value = props.article.price;
      articleTax.value = props.article.tax;
    } else {
      articleName.value = "";
      articleHTPrice.value = null;
      articleTax.value = null;
    }
  }
);

const articleName = ref<string | null>("");
const articleHTPrice = ref<number | null>(null);
const articleTax = ref<number | null>(null);

const articleTTCPrice = computed<number>(() => {
  if (articleHTPrice.value && articleTax.value) {
    return +articleHTPrice.value + (+articleHTPrice.value * +articleTax.value) / 100;
  }
  return 0;
});

const isButtonDisabled = computed<boolean>(() =>
  articleName.value && articleHTPrice.value && articleTax.value ? false : true
);

const handleSubmit = () => {
  console.log("submited !");
};
</script>

<template>
  <CardLayout title="Ajouter un article">
    <template v-slot:content>
      <aside class="aside">
        <form @submit.prevent="handleSubmit">
          <AppInputText v-model="articleName" name="name" placeholder="Nom de l'article" />
          <AppInputText
            v-model="articleHTPrice"
            name="price"
            label="Prix unitaire HT"
            placeholder="50,00"
            unity="€"
          />
          <AppInputText v-model="articleTax" name="tax" label="TVA en %" placeholder="20,00" unity="%" />
          <div class="aside__resume">
            <p>Prix total TTC</p>
            <p>{{ articleTTCPrice }}€</p>
          </div>
          <div class="aside__buttons">
            <AppButton text="Enregistrer l'article" :isDisabled="isButtonDisabled" />
          </div>
        </form>
      </aside>
    </template>
  </CardLayout>
</template>

<style lang="scss" scoped>
.aside {
  padding: 0 $spacing-l $spacing-l $spacing-l;

  &__resume {
    display: flex;
    justify-content: space-between;
    margin: $spacing-l 0;
  }

  &__buttons {
    display: flex;
    justify-content: center;
  }
}
</style>
