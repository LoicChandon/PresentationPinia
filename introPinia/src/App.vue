<script setup>
import useTodoStore from './stores/todoStore';
import {onMounted, ref} from 'vue';

const todoStore = useTodoStore();

const title = ref("");

function onSubmit() {
    todoStore.addTodo(title.value);

    title.value = "";
}

// $subscribe = a chaque changement de la variable
todoStore.$subscribe(function(mutation,state){
    localStorage.setItem("todoStore", JSON.stringify(state));
})

//garde les données
onMounted(function(){
    const storage = localStorage.getItem("todoStore");

    if (storage){
        todoStore.$patch(JSON.parse(storage))
    }
})
</script>

<template>
    <form @submit.prevent="onSubmit">
        <label for="title">Titre :</label>
        <input v-model="title" type="text" id="title">
        <button>Ajouter</button>
    </form>
    <ul>
        <li v-for="(item, index) in todoStore.todos">
            {{ item }}
            <button @click="todoStore.remove(index)">Supprimer</button>
        </li>
    </ul>
    <p>Nombre : {{ todoStore.count }}</p>

</template>

<style scoped>
</style>
