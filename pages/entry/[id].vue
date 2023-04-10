<template>
  <div>{{ 123 }}</div>
<!--  <div class='breadcrumb'>-->
<!--    <el-breadcrumb separator='|'>-->
<!--      <el-breadcrumb-item :to="{ path: '/' }">Главная</el-breadcrumb-item>-->
<!--      <el-breadcrumb-item-->
<!--          :to='{ name:"RubricList", params: { idOrSlug:entry?.rubric.slug } }'-->
<!--      >-->
<!--        {{ entry?.rubric.title }}-->
<!--      </el-breadcrumb-item>-->
<!--      <el-breadcrumb-item>{{ entry?.title }}</el-breadcrumb-item>-->
<!--    </el-breadcrumb>-->
<!--  </div>-->
<!--  <div class='entry container'>-->
<!--    <div class='entry__header'>-->
<!--      <div class='entry__header-title'>{{ entry?.title }}</div>-->
<!--      <div class='entry__header-date'>{{ moment(entry?.publishedAt).format('YYYY-MM-DD') }}</div>-->
<!--    </div>-->
<!--    <div class='entry__content ck-content' v-html='entry?.content'/>-->
<!--    <div>-->
<!--&lt;!&ndash;      <router-link&ndash;&gt;-->
<!--&lt;!&ndash;          v-if='token'&ndash;&gt;-->
<!--&lt;!&ndash;          class='settings-btn'&ndash;&gt;-->
<!--&lt;!&ndash;          :to='{ name:"UpdateAdminMenu", params:{slug:id, model:"entry"}}'&ndash;&gt;-->
<!--&lt;!&ndash;      >&ndash;&gt;-->
<!--&lt;!&ndash;        Изменить&ndash;&gt;-->
<!--&lt;!&ndash;      </router-link>&ndash;&gt;-->
<!--    </div>-->
<!--  </div>-->

</template>

<script lang='ts' setup>
import { useEntryStore } from "~/store/entryStore";

const route = useRoute()

const entryStore = useEntryStore()
await entryStore.getEntry(route.params.id as string)
const { entry } = storeToRefs(entryStore)
console.log(entry)
</script>

<style lang='scss' scoped>
li {
  list-style: list-style-type;
}

.breadcrumb {
  background-color: var(--element-bg-color);
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%),
  0 2px 10px 0 rgb(0 0 0 / 12%);
  margin: 10px 0;

  :deep(span) {
    color: var(--font-color);
  }
}

.entry {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__header-title {
    font-size: 1.4rem;
    font-weight: bold;
  }

  &__header-date {
    font-style: italic;
  }
}

.settings-btn {
  background-color: #3b70ca;
  color: white;
  text-decoration: none;
  padding: 10px;
  display: flex;
  width: max-content;
  border-radius: 3px;
}

:deep(a) {
  color: #3b70ca;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #08316b;
    transition: .3s;
    text-decoration: underline;
  }
}
</style>