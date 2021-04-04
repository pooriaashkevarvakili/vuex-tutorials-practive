import { createStore } from 'vuex'

export default createStore({
  state: {
    count:5,
    todos:[
      {
        id:1,
        name:'pooria',
        done:true
      },
      {
        id:2,
        name:'ali',
        done:false
      },
      {
        id:3,
        name:'mohamad',
        done:true
      },
      {
        id:4,
        name:'hosein',
        done:false
      }

    ]
  },
  getters:{
    getTodoById:(state)=>(id)=>{
return state.todos.find((todo)=>todo.id===id);
    },
    doneTodos(state){
      return state.todos.filter(todo=>todo.done)

    },
    doneTodoList(state,getters){
return getters.doneTodos.length

    }
  },
  mutations: {
    increment(state,payload){
      state.count=state.count+payload.value;
    }
  },
  actions: {
    increment(context,payload){
      setTimeout(()=>{
        context.commit('increment',payload)

      },3000)
    },
    actionA(context){
return new Promise((resolve)=>{
  setTimeout(()=>{
    context.commit('increment',{value:1});
    resolve('prefect')
  },2000)
})
    },
    actionB(context){
      context.dispatch('actionA').then(res=>{
       console.log(res)
        console.log('calling success from action b')
      })
    }

  },
  modules: {
  }
})
