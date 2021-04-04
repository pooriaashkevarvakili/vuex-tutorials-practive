<template>
<div>
  <div>
    {{count}}
  </div>
  <div>

    <button @click.prevent="onIncrement()">increment</button>
  </div>
</div>
</template>

<script>
export default {
  name: "Counter",
  data(){
    return{
      counter:0
    }
  },
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    onIncrement(){
 this.$store.commit('increment',{value:4})
    }
  }
}
</script>

<style scoped>

</style>