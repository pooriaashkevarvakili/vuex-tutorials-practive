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
import {mapState,mapActions} from 'vuex'
export default {
  name: "Counter",
  data(){
    return{
      counter:0
    }
  },
  computed:{
    ...mapState({
      count:state=>state.count
    })

  },
  methods:{
    ...mapActions({
      onIncrement:'actionB'
    })

  }
}
</script>

<style scoped>

</style>