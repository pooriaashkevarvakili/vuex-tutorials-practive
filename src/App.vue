 <template>
 <div>
   <Counter/>
 </div>
   <div>
     <h3>App Vue Counter</h3>
     <p>
       {{ count}}
     </p>
   </div>
   <div>
     <button @click.prevent="increment({value:2})">Increment</button>
   </div>
   <div>
     <TodoList/>
   </div>
   <div>
     todo list completed:{{doneListCount}}
   </div>
</template>
 <script>
 import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
 import Counter from  "./components/Counter"
 import TodoList from "./components/TodoList";
 export default {
   components:{
     Counter,
     TodoList
   },
   methods:{
     ...mapActions({
increment:'increment'
     }),
     ...mapMutations({
       inc:'increment'
     })


   },
   computed:{
...mapState({
  count:state=>state.count,
  todo:state=>state.todos
}),
     ...mapGetters({
       doneListCount:'doneTodoList'
     }),


   }
 }
 </script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
