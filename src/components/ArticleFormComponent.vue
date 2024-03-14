<script lang="ts" setup>
import { computed, watch } from "vue";
import CardLayout from "./layouts/CardLayout.vue";
import AppButton from "./ui/AppButton.vue";
import AppInputText from "./ui/AppInputText.vue";
import { Article } from "@/definitions/article";
import { useUpdateArticleList } from "@/composables/article";
import { useAsideStatesStore } from "@/stores/aside";

const props = defineProps<{ article?: Article | undefined }>();

const displayTitle = computed(() => `${props.article ? "Editer" : "Ajouter"} un article`);
const asideStatesStore = useAsideStatesStore();

const {
  articleName,
  articleHTPrice,
  articleTax,
  articleTTCPrice,
  isFormOk,
  addAnArticle,
  updateArticle,
  resetArticleForm,
} = useUpdateArticleList();

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

const emits = defineEmits<{ (e: "reset-article-form"): void }>();

const submitArticleForm = () => {
  if (props.article) {
    updateArticle(props.article.id);
  } else {
    addAnArticle();
  }
  asideStatesStore.unActiveAside();
  resetArticleForm();
  emits("reset-article-form");
};
</script>

<template>
  <CardLayout :title="displayTitle">
    <template v-slot:button>
      <div class="close-button">
        <v-icon name="ri-close-line" @click="asideStatesStore.unActiveAside()" />
      </div>
    </template>
    <template v-slot:content>
      <aside class="aside">
        <form @submit.prevent="submitArticleForm">
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
            <AppButton text="Enregistrer l'article" :isDisabled="isFormOk" />
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

.close-button {
  display: none;

  @include bpf($max: $l) {
    display: block;
  }
}
</style>
