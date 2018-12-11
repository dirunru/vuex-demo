<template>
  <div id="home">
    <h1>这是首页</h1>
    <h2>{{this.$store.state.age + '岁'}}</h2>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang='' scoped>
h1 {
  text-align: left;
}
</style>