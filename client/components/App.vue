<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="sass">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.page{
  max-width: 1100px;
  margin: 25px auto;
}

@import '../../node_modules/hack/dist/hack.css';
@import '../../node_modules/hack/dist/dark.css';
</style>
