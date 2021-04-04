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
    doneTodoList(state){
return state.todos.filter(todo=>todo.done).length

    }
  },
  mutations: {
    increment(state,payload){
      state.count=state.count+payload.value;
    }
  },
  actions: {
  },
  modules: {
  }
})
