<template>
  <main class='common-layout'>
    <div class='common-layout__header'>
      <header-default />
    </div>
    <div class='common-layout__body'>
      <slot />
    </div>
    <div class='common-layout__footer'>
<!--      <default-footer/>-->
    </div>
  </main>
</template>

<script lang='ts' setup>

</script>

<style lang='scss' scoped>
.common-layout {
  margin: 1vw 14vw 0;
  background: var(--document-bg-color);

  &__header {
    margin-bottom: 1vw;
  }
  &__body {
    min-height: calc(100vh - 310px);
  }

  &__footer {
    margin-top: 1vw;
  }
}

@media (min-width: 320px) and (max-width: 1199px) {
  .common-layout {
    margin: 0;
    width: 100%;
  }
}
</style>