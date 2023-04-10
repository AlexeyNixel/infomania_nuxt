<template>
  <el-row class="header">
    <el-col class="header__logo" :span="12">
      <img src="../assets/logo.png" alt="" class="header__logo-img">
    </el-col>
    <el-col class="header__btn-group" :span="6">
      <el-button
          class="header__btn-group_btn"
          v-for="(item, index) in btns"
          :key="index"
          link
          @click="item?.event"
      >
        <font-awesome-icon
            class='header__btn-group_btn-icon'
            :icon='item.icon'
        />
      </el-button>
    </el-col>
    <el-col class="header__search" :span="6">
      <el-input
          class='header__search-input w-50 m-2'
          size='large'
          placeholder='Что ищем?'
          :suffix-icon='Search'
      />
    </el-col>
  </el-row>
</template>

<script lang='ts' setup>
import { Search } from '@element-plus/icons-vue'
import { ElButton, ElCol, ElRow, ElInput } from 'element-plus'
import { useDark, useToggle } from '@vueuse/core'

const darkMode = useDark()
const toggleDark = useToggle(darkMode)

const btns = [
  {
    icon: 'fas fa-map-location-dot'
  },
  {
    icon: 'fas fa-clock'
  },
  {
    icon: 'fas fa-wheelchair-move'
  },
  {
    icon: 'fas fa-moon',
    event: () => handleDarkOn(),
  },
]
const handleDarkOn = () => toggleDark()


</script>

<style scoped lang='scss'>
.header {
  display: flex;
  align-items: center;
  &__logo-img {
    width: 14vw;
  }
  &__btn-group {
    display: flex;
    justify-content: space-between;
    &_btn-icon {
      font-size: 1.6rem;
      color: #007BFF;
    }
  }

  &__search-input {
    width: 100%;
  }
}
</style>