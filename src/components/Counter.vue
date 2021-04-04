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
 this.$store.dispatch('actionB').then((res)=>{
   console.log("calling success")
   console.log(res)
 })
    }
  }
}
</script>

<style scoped>

</style>