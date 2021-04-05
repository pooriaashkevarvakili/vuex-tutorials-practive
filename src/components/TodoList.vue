<template>
<div style="text-align:left ">
  <h3>Todo List (Done:{{doneListCount}})</h3>
  <ul>
    <li v-for="todo in todoList" :key="todo.id">
      {{todo.name}}-({{todo.done?'Done':'notDone'}})
    </li>
  </ul>
  <div>
    <div v-if="todo" >
  <h3>select  todo</h3>
id:{{todo.id}}
  </div>
  </div>
  <h3>
    completed todos
  </h3>
  <ul>
    <li v-for="todo in doneTodos" :key="todo.id">
      <a href="#" @click.prevent="onTodoSelected(todo.id)" >
        {{todo.name}}-({{todo.done?'Done':'notDone'}})
      </a>

    </li>
  </ul>
</div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  name: "TodoList",
  data(){
    return{
selectedId:0,
      todo:''
    }
  },
  computed:{
    ...mapState({
      todoList:state=>state.todos
    }),
...mapGetters({
  doneListCount:'doneTodoList',
  doneTodos:'doneTodos',
  todoById:'getTodoById'
}),



  },
  methods:{
    onTodoSelected(id){
this.selectedId=id;
this.todo=this.todoById(id)
    }
  }
}
</script>

<style scoped>

</style>