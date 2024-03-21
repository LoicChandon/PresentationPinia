import {defineStore} from 'pinia'

const useTodoStore = defineStore("todo",
{
    state: () => {
        return {
            todos : []
        }
    },
    actions: {
        addTodo(title) {
             this.todos.push(title);
        },
        remove(index) {
            this.todos.splice(index,1);
        }
    },
    getters: {
        count(state){
            return state.todos.length;
        }
    }
})

export default useTodoStore;