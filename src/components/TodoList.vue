<template>
<div style="text-align:left ">
  <h3>Todo List (Done:{{doneListCount}})</h3>
  <ul>
    <li v-for="todo in todoList" :key="todo.id">
      {{todo.name}}-({{todo.done?'Done':'notDone'}})
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "TodoList",
  data(){
    return{

    }
  },
  computed:{
    todoList(){
      return this.$store.state.todos
    },
    doneListCount(){
      return this.$store.getters.doneTodoList;
    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>