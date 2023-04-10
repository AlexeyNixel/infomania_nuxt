<template>
  <div class='news-menu'>
    <div class='news-menu__item' v-for='menu in rubricEntries' :key='menu[0].id'>
      <div class='news-menu__item-title-container'>
        <nuxt-link
            to="{ name:'RubricList', params: { idOrSlug:menu[0].rubric.slug } }"
            class='news-menu__item-title'
        >
          {{ menu[0].rubric.title }}
        </nuxt-link>
      </div>
      <div class='news-menu__item-container'>
        <nuxt-link
            class='news-menu__item-news'
            v-for='item in menu'
            :key='item.id'
            :to="`/entry/${item.slug}`"
        >
          <div class='news-menu__item_news-preview'>
            <img v-if='item.preview' :src='`${baseImageUrl}${item.preview.path}`' alt=''>
            <img v-else src='@/assets/noImage.svg' alt=''>
          </div>
          <div class='news-menu__item_news-text'>
            {{ `${item.title.length > 100 ? item.title.slice(0, 100).trim() + '...' : item.title.trim()}` }}
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useEntryStore } from "~/store/entryStore";
import { storeToRefs } from "pinia";

const config = useRuntimeConfig()
const baseImageUrl = config.public.NUXT_STATIC_URL
const NEWS_MENU_RUBRICS = ['aktualnoe', 'anonsy', 'sobytiya']
const entryStore = useEntryStore()
const { rubricEntries } = storeToRefs(entryStore)

for (let rubric of NEWS_MENU_RUBRICS) {
  await entryStore.getEntriesByRubric(rubric, {
    pageSize: 6,
    include: 'rubric,preview',
    orderBy: '-createdAt'
  })
}
</script>

<style lang='scss' scoped>
.news-menu {
  display: flex;
  margin: 1vw 0;
  justify-content: space-between;
  flex-wrap: wrap;

  &__item {
    padding: 10px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%),
    0 2px 10px 0 rgb(0 0 0 / 12%);
    background: var(--element-bg-color);
    border-radius: 3px;
    width: calc((100% / 3) - 30px);

    &-container {
      height: 97%;
    }

    &-news {
      text-decoration: none;
      color: var(--font-color);
      display: flex;
      align-items: center;
      padding: 10px;
      height: calc(16.666% - 20px);

      &:hover {
        box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%),
        0 2px 10px 0 rgb(0 0 0 / 12%);
        color: var(--font-hover-color);
        transition: .3s;
      }
    }

    &_news-preview {
      width: 30%;
      height: 100%;
    }

    &_news-preview img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    &_news-text {
      width: 70%;
      margin-left: 10px;
    }
  }

  &__item-title-container {
    height: 3%;
  }

  &__item-title {
    font-size: 1.2rem;
    color: var(--title-color);
    padding: 10px;
    text-decoration: none;
  }

}

@media (min-width: 992px) and (max-width: 1199px) {
  .news-menu__item {
    width: calc((100% / 2) - 30px);
    margin: 10px 0;
  }
}

@media (min-width: 320px) and (max-width: 991px) {
  .news-menu__item {
    width: calc((100% / 1));
    margin: 10px 0;
  }
}
</style>