<template>
  <div id="order">
    <h1>这是订单页</h1>
    <h2>{{this.$store.state.age + '岁'}}</h2>
    <button @click='changeAge'>改变年龄</button>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      msg:'19'
    }
  },
  methods:{
    changeAge(){
      this.$store.commit('showPeople',this.msg)
    }
  }
};
</script>

<style lang='' scoped>
    h1 {
        text-align: left;
    }
</style>