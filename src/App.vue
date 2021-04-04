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
     <button @click.prevent="onIncrement()">Increment</button>
   </div>
   <div>
     <TodoList/>
   </div>
   <div>
     todo list completed:{{doneListCount}}
   </div>
</template>
 <script>
 import Counter from  "./components/Counter"
 import TodoList from "./components/TodoList";
 export default {
   components:{
     Counter,
     TodoList
   },
   methods:{
     onIncrement(){
       this.$store.dispatch('increment',{value:4})
     },

   },
   computed:{
     count(){
       return this.$store.state.count
     },
     doneListCount(){
       return this.$store.getters.doneTodoList;
     }
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
